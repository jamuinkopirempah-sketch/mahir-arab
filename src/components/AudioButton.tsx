"use client";

import { speakArabic } from "@/lib/speech";

export default function AudioButton({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        speakArabic(text);
      }}
      aria-label="Dengarkan pelafalan"
      className={`inline-flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-emerald-700 shadow transition active:scale-90 ${className}`}
    >
      🔊
    </button>
  );
}
