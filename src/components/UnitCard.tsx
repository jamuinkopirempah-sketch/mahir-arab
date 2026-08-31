"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Unit } from "@/lib/types";

const colorMap: Record<string, string> = {
  emerald: "from-emerald-500 to-emerald-700",
  sky: "from-sky-500 to-sky-700",
  amber: "from-amber-500 to-amber-700",
};

export default function UnitCard({ unit, index }: { unit: Unit; index: number }) {
  return (
    <Link href={`/unit/${unit.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08 }}
        whileHover={{ scale: 1.03 }}
        className={`relative flex h-40 flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br p-5 text-white shadow-lg ${
          colorMap[unit.color] ?? colorMap.emerald
        }`}
      >
        <div className="absolute -right-4 -top-4 text-7xl opacity-20">
          {unit.vocabulary[0]?.emoji}
        </div>
        <div>
          <span className="text-xs uppercase tracking-wide text-white/70">
            Wihdah {unit.id}
          </span>
          <h3 className="text-xl font-bold">{unit.title}</h3>
          <p dir="rtl" className="font-arabic text-lg text-white/90">
            {unit.titleAr}
          </p>
        </div>
        <p className="text-sm text-white/80">{unit.theme}</p>
      </motion.div>
    </Link>
  );
}
