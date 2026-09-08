"use client";

import { useState } from "react";
import { QiraahText } from "@/lib/types";
import { speakSequence, stopSpeaking } from "@/lib/speech";
import AudioButton from "./AudioButton";

function PreVocab({ text, onDone }: { text: QiraahText; onDone: () => void }) {
  return (
    <div>
      <p className="mb-4 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">
        Sebelum membaca, kenali dulu kata-kata baru yang akan muncul di dalam teks.
      </p>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {text.preVocab.map((w) => (
          <div
            key={w.ar}
            className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100"
          >
            <AudioButton text={w.ar} className="h-8 w-8 shrink-0" />
            <div className="min-w-0 flex-1">
              <div dir="rtl" className="font-arabic text-xl text-slate-800">
                {w.ar}
              </div>
              <div className="text-xs text-slate-400">{w.translit}</div>
            </div>
            <div className="shrink-0 text-sm text-slate-600">{w.id}</div>
          </div>
        ))}
      </div>

      <button
        onClick={onDone}
        className="mt-5 w-full rounded-full bg-emerald-600 py-2.5 text-sm font-medium text-white shadow transition hover:bg-emerald-700"
      >
        Lanjut ke teks bacaan ←
      </button>
    </div>
  );
}

function Questions({ text }: { text: QiraahText }) {
  const [opened, setOpened] = useState<Set<number>>(new Set());

  return (
    <div className="mt-8">
      <h4 className="mb-3 font-semibold text-emerald-800">
        Pertanyaan pemahaman 🧠
      </h4>
      <div className="flex flex-col gap-2">
        {text.questions.map((q, i) => (
          <div
            key={i}
            className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100"
          >
            <div className="flex items-start gap-2">
              <AudioButton text={q.ar} className="h-7 w-7 shrink-0 text-sm" />
              <div className="min-w-0 flex-1">
                <div dir="rtl" className="font-arabic text-lg text-slate-800">
                  {q.ar}
                </div>
                <div className="text-sm text-slate-500">{q.id}</div>
              </div>
            </div>

            {opened.has(i) ? (
              <div className="mt-2 rounded-lg bg-emerald-50 p-3">
                <div dir="rtl" className="font-arabic text-lg text-emerald-900">
                  {q.answerAr}
                </div>
                <div className="text-sm text-emerald-700">{q.answerId}</div>
              </div>
            ) : (
              <button
                onClick={() => setOpened((s) => new Set(s).add(i))}
                className="mt-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 transition hover:bg-slate-200"
              >
                Tampilkan jawaban
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function QiraahTab({ text }: { text: QiraahText }) {
  const [step, setStep] = useState<"vocab" | "read">("vocab");
  const [showId, setShowId] = useState(true);
  const [playing, setPlaying] = useState(false);

  async function playAll() {
    setPlaying(true);
    await speakSequence(text.paragraphs.map((p) => p.ar), 400);
    setPlaying(false);
  }

  function stop() {
    stopSpeaking();
    setPlaying(false);
  }

  return (
    <div>
      <div className="mb-4 rounded-2xl bg-gradient-to-l from-emerald-50 to-white p-4 ring-1 ring-emerald-100">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-bold text-slate-800">{text.title}</h3>
          <span dir="rtl" className="font-arabic text-xl text-emerald-700">
            {text.titleAr}
          </span>
        </div>
      </div>

      {step === "vocab" ? (
        <PreVocab text={text} onDone={() => setStep("read")} />
      ) : (
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setStep("vocab")}
              className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-600 transition hover:bg-slate-200"
            >
              → Kosakata
            </button>
            <button
              onClick={() => setShowId((v) => !v)}
              className="rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700 transition hover:bg-emerald-100"
            >
              {showId ? "Sembunyikan terjemahan" : "Tampilkan terjemahan"}
            </button>
            <button
              onClick={playing ? stop : playAll}
              className="ml-auto rounded-full bg-amber-500 px-4 py-1.5 text-sm font-medium text-white shadow transition hover:bg-amber-600"
            >
              {playing ? "■ Hentikan" : "▶ Putar seluruh teks"}
            </button>
          </div>

          <article className="flex flex-col gap-4">
            {text.paragraphs.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100"
              >
                <div className="flex items-start gap-2">
                  <AudioButton text={p.ar} className="h-8 w-8 shrink-0" />
                  <p
                    dir="rtl"
                    className="flex-1 font-arabic text-xl leading-[2.4] text-slate-800"
                  >
                    {p.ar}
                  </p>
                </div>
                {showId && (
                  <p className="mt-2 border-t border-slate-100 pt-2 text-sm leading-relaxed text-slate-500">
                    {p.id}
                  </p>
                )}
              </div>
            ))}
          </article>

          <Questions text={text} />
        </div>
      )}
    </div>
  );
}
