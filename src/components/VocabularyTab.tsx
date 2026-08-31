"use client";

import { useMemo, useState } from "react";
import { VocabWord } from "@/lib/types";
import Flashcard from "./Flashcard";
import { speakArabic } from "@/lib/speech";

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function MatchGame({ words }: { words: VocabWord[] }) {
  const arItems = useMemo(() => shuffle(words), [words]);
  const idItems = useMemo(() => shuffle(words), [words]);
  const [selectedAr, setSelectedAr] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrong, setWrong] = useState<string | null>(null);

  function handleIdClick(word: VocabWord) {
    if (!selectedAr) return;
    if (selectedAr === word.ar) {
      setMatched((m) => new Set(m).add(word.ar));
      setSelectedAr(null);
    } else {
      setWrong(word.ar);
      setTimeout(() => setWrong(null), 400);
      setSelectedAr(null);
    }
  }

  const done = matched.size === words.length;

  return (
    <div className="mt-6">
      <h4 className="mb-3 font-semibold text-emerald-800">
        Permainan mencocokkan kata 🎯
      </h4>
      {done ? (
        <p className="rounded-lg bg-emerald-100 p-4 text-emerald-800">
          🎉 Semua kata berhasil dicocokkan!
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            {arItems.map((w) => (
              <button
                key={w.ar}
                disabled={matched.has(w.ar)}
                onClick={() => {
                  setSelectedAr(w.ar);
                  speakArabic(w.ar);
                }}
                className={`rounded-xl border-2 p-3 text-right font-arabic text-xl transition ${
                  matched.has(w.ar)
                    ? "border-emerald-300 bg-emerald-50 text-emerald-300"
                    : selectedAr === w.ar
                    ? "border-emerald-600 bg-emerald-100"
                    : "border-slate-200 bg-white hover:border-emerald-400"
                }`}
              >
                {w.ar}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {idItems.map((w) => (
              <button
                key={w.id}
                disabled={matched.has(w.ar)}
                onClick={() => handleIdClick(w)}
                className={`rounded-xl border-2 p-3 text-left transition ${
                  matched.has(w.ar)
                    ? "border-emerald-300 bg-emerald-50 text-emerald-300"
                    : wrong === w.ar
                    ? "border-red-400 bg-red-50 animate-pulse"
                    : "border-slate-200 bg-white hover:border-emerald-400"
                }`}
              >
                {w.emoji} {w.id}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function VocabularyTab({ words }: { words: VocabWord[] }) {
  const [mode, setMode] = useState<"cards" | "match">("cards");

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setMode("cards")}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
            mode === "cards"
              ? "bg-emerald-600 text-white"
              : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
          }`}
        >
          Kartu
        </button>
        <button
          onClick={() => setMode("match")}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
            mode === "match"
              ? "bg-emerald-600 text-white"
              : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
          }`}
        >
          Cocokkan
        </button>
      </div>

      {mode === "cards" ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {words.map((w) => (
            <Flashcard key={w.ar} word={w} />
          ))}
        </div>
      ) : (
        <MatchGame words={words} />
      )}
    </div>
  );
}
