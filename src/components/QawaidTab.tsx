"use client";

import { useState } from "react";
import { QawaidRule } from "@/lib/types";
import AudioButton from "./AudioButton";

const roleColor: Record<string, string> = {
  subject: "bg-sky-100 text-sky-800 ring-sky-400",
  verb: "bg-amber-100 text-amber-800 ring-amber-400",
  object: "bg-rose-100 text-rose-800 ring-rose-400",
  harf: "bg-violet-100 text-violet-800 ring-violet-400",
};

const roleLabel: Record<string, string> = {
  subject: "Subjek (Fa'il)",
  verb: "Kata kerja (Fi'il)",
  object: "Objek (Maf'ul)",
  harf: "Huruf/Partikel",
};

function ParsedSentence({ example }: { example: QawaidRule["examples"][number] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const words = example.ar.split(" ");
  const highlightMap = new Map(
    (example.highlights ?? []).map((h) => [h.wordIndex, h.role])
  );

  return (
    <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
      <div className="flex items-center gap-2">
        <AudioButton text={example.ar} className="h-8 w-8 text-base shrink-0" />
        <div dir="rtl" className="flex flex-wrap gap-2 font-arabic text-2xl">
          {words.map((w, i) => {
            const role = highlightMap.get(i);
            return (
              <span
                key={i}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className={`cursor-pointer rounded-md px-1.5 py-0.5 transition ${
                  role
                    ? `${roleColor[role]} ${activeIndex === i ? "ring-2" : ""}`
                    : "hover:bg-slate-100"
                }`}
              >
                {w}
              </span>
            );
          })}
        </div>
      </div>
      <p className="mt-2 text-sm text-slate-500">{example.id}</p>
      {activeIndex !== null && highlightMap.get(activeIndex) && (
        <p className="mt-2 text-xs font-medium text-emerald-700">
          → {roleLabel[highlightMap.get(activeIndex)!]}
        </p>
      )}
    </div>
  );
}

export default function QawaidTab({ rules }: { rules: QawaidRule[] }) {
  return (
    <div className="flex flex-col gap-8">
      {rules.map((rule, i) => (
        <div key={i}>
          <div className="mb-2 flex items-baseline justify-between">
            <h3 className="text-lg font-bold text-emerald-900">{rule.title}</h3>
            <span dir="rtl" className="font-arabic text-xl text-emerald-700">
              {rule.titleAr}
            </span>
          </div>
          <p className="mb-4 text-slate-600">{rule.explanation}</p>

          {rule.pattern && (
            <div className="mb-4 flex flex-wrap gap-3">
              {rule.pattern.map((p, j) => (
                <div
                  key={j}
                  className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-800"
                >
                  <div className="text-xs text-emerald-500">{p.label}</div>
                  <div dir="rtl" className="font-arabic text-lg">
                    {p.ar}
                  </div>
                </div>
              ))}
            </div>
          )}

          <p className="mb-2 text-xs uppercase tracking-wide text-slate-400">
            Klik kata berwarna untuk lihat perannya
          </p>
          <div className="flex flex-col gap-3">
            {rule.examples.map((ex, j) => (
              <ParsedSentence key={j} example={ex} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
