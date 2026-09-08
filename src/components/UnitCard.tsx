"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Unit } from "@/lib/types";

const colorMap: Record<string, { accent: string; wash: string; border: string }> = {
  emerald: { accent: "#0d6b60", wash: "#e4f0eb", border: "#bad8ca" },
  sky: { accent: "#286b78", wash: "#e3f0f1", border: "#bad9db" },
  amber: { accent: "#a96718", wash: "#f9efd9", border: "#ead3a6" },
};

export default function UnitCard({ unit, index }: { unit: Unit; index: number }) {
  const palette = colorMap[unit.color] ?? colorMap.emerald;
  return (
    <Link href={`/unit/${unit.id}`} className="group block h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08 }}
        whileHover={{ y: -5 }}
        className="relative flex h-full min-h-[210px] flex-col overflow-hidden rounded-[20px] border bg-white p-5 shadow-[0_7px_18px_rgb(35_65_58_/_5%)] transition-shadow duration-300 group-hover:shadow-[0_14px_28px_rgb(35_65_58_/_12%)]"
        style={{ borderColor: palette.border }}
      >
        <div className="absolute -right-4 -top-5 text-8xl opacity-[0.10] transition-transform duration-300 group-hover:scale-110">
          {unit.vocabulary[0]?.emoji}
        </div>
        <div className="relative">
          <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-xs font-extrabold text-white" style={{ background: palette.accent }}>0{unit.id}</span>
          <h3 className="mt-4 text-lg font-extrabold tracking-tight text-[#24453e]">{unit.title}</h3>
          <p dir="rtl" className="mt-1 font-arabic text-xl" style={{ color: palette.accent }}>
            {unit.titleAr}
          </p>
        </div>
        <div className="relative mt-4 flex items-end justify-between gap-2 border-t border-[#ecf0e9] pt-3">
          <p className="text-xs leading-5 text-[#6c8179]">{unit.theme}</p>
          <span className="mb-0.5 shrink-0 text-lg" style={{ color: palette.accent }}>↗</span>
        </div>
      </motion.div>
    </Link>
  );
}
