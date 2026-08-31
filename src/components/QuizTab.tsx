"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QuizQuestion } from "@/lib/types";
import { speakArabic } from "@/lib/speech";

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function OrderQuestion({
  q,
  onAnswer,
}: {
  q: Extract<QuizQuestion, { type: "order" }>;
  onAnswer: (correct: boolean) => void;
}) {
  const [pool, setPool] = useState(() => shuffle(q.words.map((w, i) => ({ w, i }))));
  const [chosen, setChosen] = useState<{ w: string; i: number }[]>([]);
  const [checked, setChecked] = useState(false);

  function check() {
    const correct = chosen.every((c, idx) => c.i === q.correctOrder[idx]);
    setChecked(true);
    onAnswer(correct);
  }

  return (
    <div>
      <p className="mb-3 font-medium text-slate-700">{q.promptId}</p>
      <div dir="rtl" className="mb-4 flex min-h-[3rem] flex-wrap gap-2 rounded-lg bg-slate-50 p-2">
        {chosen.map((c, idx) => (
          <button
            key={idx}
            onClick={() => {
              setChosen(chosen.filter((_, j) => j !== idx));
              setPool([...pool, c]);
            }}
            className="rounded-lg bg-emerald-600 px-3 py-1.5 font-arabic text-lg text-white"
          >
            {c.w}
          </button>
        ))}
      </div>
      <div dir="rtl" className="mb-4 flex flex-wrap gap-2">
        {pool.map((p, idx) => (
          <button
            key={idx}
            onClick={() => {
              setChosen([...chosen, p]);
              setPool(pool.filter((_, j) => j !== idx));
            }}
            className="rounded-lg bg-white px-3 py-1.5 font-arabic text-lg text-emerald-800 ring-1 ring-emerald-200 hover:bg-emerald-50"
          >
            {p.w}
          </button>
        ))}
      </div>
      {!checked ? (
        <button
          onClick={check}
          disabled={pool.length > 0}
          className="rounded-full bg-emerald-600 px-5 py-2 font-medium text-white disabled:opacity-40"
        >
          Periksa
        </button>
      ) : null}
    </div>
  );
}

export default function QuizTab({ questions }: { questions: QuizQuestion[] }) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const q = questions[index];

  function next(correct: boolean) {
    if (correct) setScore((s) => s + 1);
    setTimeout(() => {
      setSelected(null);
      if (index + 1 < questions.length) {
        setIndex((i) => i + 1);
      } else {
        setFinished(true);
      }
    }, 700);
  }

  function handleChoice(i: number, answerIndex: number) {
    if (selected !== null) return;
    setSelected(i);
    next(i === answerIndex);
  }

  if (finished) {
    return (
      <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-8 text-center text-white shadow-lg">
        <p className="text-5xl">🏆</p>
        <p className="mt-3 text-2xl font-bold">
          Skor: {score} / {questions.length}
        </p>
        <button
          onClick={() => {
            setIndex(0);
            setScore(0);
            setFinished(false);
            setSelected(null);
          }}
          className="mt-4 rounded-full bg-white px-5 py-2 font-medium text-emerald-700"
        >
          Ulangi Quiz
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between text-sm text-slate-500">
        <span>
          Soal {index + 1} / {questions.length}
        </span>
        <span>Skor: {score}</span>
      </div>
      <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-emerald-500 transition-all"
          style={{ width: `${(index / questions.length) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100"
        >
          {q.type === "mcq" && (
            <>
              <p className="mb-4 text-lg font-semibold text-slate-800">{q.prompt}</p>
              <div className="grid gap-2">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleChoice(i, q.answerIndex)}
                    className={`rounded-xl border-2 p-3 text-left transition ${
                      selected === null
                        ? "border-slate-200 hover:border-emerald-400"
                        : i === q.answerIndex
                        ? "border-emerald-500 bg-emerald-50"
                        : i === selected
                        ? "border-red-400 bg-red-50"
                        : "border-slate-200 opacity-50"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </>
          )}

          {q.type === "listen" && (
            <>
              <button
                onClick={() => speakArabic(q.audioText)}
                className="mb-4 flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 font-medium text-white shadow"
              >
                🔊 Putar audio
              </button>
              <p className="mb-3 text-sm text-slate-500">Pilih arti yang benar:</p>
              <div className="grid gap-2">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleChoice(i, q.answerIndex)}
                    className={`rounded-xl border-2 p-3 text-left transition ${
                      selected === null
                        ? "border-slate-200 hover:border-emerald-400"
                        : i === q.answerIndex
                        ? "border-emerald-500 bg-emerald-50"
                        : i === selected
                        ? "border-red-400 bg-red-50"
                        : "border-slate-200 opacity-50"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </>
          )}

          {q.type === "order" && <OrderQuestion q={q} onAnswer={next} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
