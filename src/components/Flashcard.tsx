"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { VocabWord } from "@/lib/types";
import { speakArabic } from "@/lib/speech";

export default function Flashcard({ word }: { word: VocabWord }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="[perspective:1000px] h-48 w-full cursor-pointer select-none"
      onClick={() => {
        setFlipped((f) => !f);
        speakArabic(word.ar);
      }}
    >
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Front */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-lg [backface-visibility:hidden]">
          <span className="text-5xl">{word.emoji}</span>
          <span dir="rtl" className="font-arabic text-3xl">
            {word.ar}
          </span>
          <span className="text-xs text-emerald-100">Ketuk untuk lihat arti</span>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-2xl bg-white text-emerald-800 shadow-lg [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <span className="text-4xl">{word.emoji}</span>
          <span className="text-xl font-semibold">{word.id}</span>
          <span className="text-sm italic text-emerald-500">{word.translit}</span>
        </div>
      </motion.div>
    </div>
  );
}
