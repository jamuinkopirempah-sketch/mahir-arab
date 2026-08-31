"use client";

import { useState } from "react";
import { AshwatLesson } from "@/lib/types";
import { speakArabic } from "@/lib/speech";

function SoundCard({
  word,
  tone,
}: {
  word: { ar: string; translit: string; id: string };
  tone: "left" | "right";
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <button
      onClick={() => {
        speakArabic(word.ar);
        setPlaying(true);
        setTimeout(() => setPlaying(false), 700);
      }}
      className={`flex w-full flex-col items-center gap-1 rounded-xl border-2 p-3 transition active:scale-95 ${
        tone === "left"
          ? "border-emerald-200 bg-emerald-50 hover:border-emerald-400"
          : "border-violet-200 bg-violet-50 hover:border-violet-400"
      } ${playing ? "ring-2 ring-offset-1 ring-amber-400" : ""}`}
    >
      <span dir="rtl" className="font-arabic text-2xl">
        {word.ar}
      </span>
      <span className="text-xs italic text-slate-500">{word.translit}</span>
      <span className="text-xs text-slate-600">{word.id}</span>
      <span className="text-xs text-slate-400">🔊 ketuk untuk dengar</span>
    </button>
  );
}

export default function AshwatTab({ lesson }: { lesson: AshwatLesson }) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <h3 className="text-lg font-bold text-emerald-900">{lesson.title}</h3>
        <span dir="rtl" className="font-arabic text-xl text-emerald-700">
          {lesson.titleAr}
        </span>
      </div>
      <p className="mb-5 text-slate-600">{lesson.explanation}</p>

      <div className="mb-2 grid grid-cols-2 gap-3 text-center text-xs font-semibold">
        <span className="text-emerald-700">{lesson.leftLabel}</span>
        <span className="text-violet-700">{lesson.rightLabel}</span>
      </div>

      <div className="flex flex-col gap-3">
        {lesson.contrasts.map((pair, i) => (
          <div key={i} className="grid grid-cols-2 gap-3">
            <SoundCard word={pair.left} tone="left" />
            <SoundCard word={pair.right} tone="right" />
          </div>
        ))}
      </div>

      {lesson.tip && (
        <p className="mt-5 rounded-xl bg-amber-50 p-3 text-sm text-amber-900 ring-1 ring-amber-200">
          💡 {lesson.tip}
        </p>
      )}

      <button
        onClick={() => {
          const all = lesson.contrasts.flatMap((c) => [c.left.ar, c.right.ar]);
          let i = 0;
          const next = () => {
            if (i >= all.length) return;
            speakArabic(all[i]);
            i++;
            const check = setInterval(() => {
              if (!window.speechSynthesis.speaking) {
                clearInterval(check);
                setTimeout(next, 250);
              }
            }, 150);
          };
          next();
        }}
        className="mt-4 w-full rounded-full bg-emerald-600 py-2.5 text-sm font-medium text-white shadow hover:bg-emerald-700"
      >
        ▶ Dengar semua pasangan berurutan
      </button>
    </div>
  );
}
