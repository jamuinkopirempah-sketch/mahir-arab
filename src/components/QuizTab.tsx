"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QuizQuestion } from "@/lib/types";
import { speakArabic } from "@/lib/speech";

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

const optionBase =
  "rounded-xl border-2 p-3 text-left transition disabled:cursor-default";

function OptionList({
  options,
  answerIndex,
  selected,
  onPick,
  rtl = false,
}: {
  options: string[];
  answerIndex: number;
  selected: number | null;
  onPick: (i: number) => void;
  rtl?: boolean;
}) {
  return (
    <div className="grid gap-2">
      {options.map((opt, i) => (
        <button
          key={i}
          onClick={() => onPick(i)}
          disabled={selected !== null}
          dir={rtl ? "rtl" : undefined}
          className={`${optionBase} ${rtl ? "text-right font-arabic text-xl" : ""} ${
            selected === null
              ? "border-slate-200 hover:border-emerald-400"
              : i === answerIndex
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
  );
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

  return (
    <div>
      <p className="mb-3 font-medium text-slate-700">{q.promptId}</p>
      <div dir="rtl" className="mb-4 flex min-h-[3rem] flex-wrap gap-2 rounded-lg bg-slate-50 p-2">
        {chosen.map((c, idx) => (
          <button
            key={idx}
            disabled={checked}
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
      {!checked && (
        <button
          onClick={() => {
            setChecked(true);
            onAnswer(chosen.every((c, idx) => c.i === q.correctOrder[idx]));
          }}
          disabled={pool.length > 0}
          className="rounded-full bg-emerald-600 px-5 py-2 font-medium text-white disabled:opacity-40"
        >
          Periksa
        </button>
      )}
    </div>
  );
}

function TrueFalseQuestion({
  q,
  onAnswer,
}: {
  q: Extract<QuizQuestion, { type: "truefalse" }>;
  onAnswer: (correct: boolean) => void;
}) {
  const [picked, setPicked] = useState<boolean | null>(null);

  function choose(value: boolean) {
    if (picked !== null) return;
    setPicked(value);
    onAnswer(value === q.answer);
  }

  return (
    <div>
      <p className="mb-2 text-sm text-slate-500">Benar atau salah?</p>
      <div className="mb-2 flex items-start gap-2">
        <button
          onClick={() => speakArabic(q.statementAr)}
          aria-label="Dengarkan"
          className="mt-1 shrink-0 rounded-full bg-emerald-50 px-2 py-1 text-emerald-700"
        >
          🔊
        </button>
        <span dir="rtl" className="font-arabic text-2xl">
          {q.statementAr}
        </span>
      </div>
      <p className="mb-4 text-sm text-slate-500">{q.statementId}</p>
      <div className="grid grid-cols-2 gap-3">
        {[true, false].map((value) => (
          <button
            key={String(value)}
            onClick={() => choose(value)}
            disabled={picked !== null}
            className={`rounded-xl border-2 p-3 font-medium transition ${
              picked === null
                ? "border-slate-200 hover:border-emerald-400"
                : value === q.answer
                ? "border-emerald-500 bg-emerald-50"
                : value === picked
                ? "border-red-400 bg-red-50"
                : "border-slate-200 opacity-50"
            }`}
          >
            {value ? "✓ Benar" : "✗ Salah"}
          </button>
        ))}
      </div>
    </div>
  );
}

function FillBlankQuestion({
  q,
  onAnswer,
}: {
  q: Extract<QuizQuestion, { type: "fillblank" }>;
  onAnswer: (correct: boolean) => void;
}) {
  const [picked, setPicked] = useState<number | null>(null);

  function choose(i: number) {
    if (picked !== null) return;
    setPicked(i);
    onAnswer(i === q.answerIndex);
  }

  return (
    <div>
      <p className="mb-3 text-sm text-slate-500">Lengkapi kalimat berikut</p>
      <div
        dir="rtl"
        className="mb-3 flex flex-wrap items-center gap-2 rounded-xl bg-slate-50 p-4 font-arabic text-2xl"
      >
        {q.before && <span>{q.before}</span>}
        <span
          className={`min-w-[5rem] rounded-lg px-3 py-1 text-center ${
            picked === null
              ? "bg-white text-slate-300 ring-2 ring-dashed ring-slate-300"
              : picked === q.answerIndex
              ? "bg-emerald-100 text-emerald-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {picked === null ? "؟" : q.wordBox[picked]}
        </span>
        {q.after && <span>{q.after}</span>}
      </div>
      <p className="mb-4 text-sm text-slate-500">{q.translationId}</p>
      <div className="flex flex-wrap gap-2">
        {q.wordBox.map((w, i) => (
          <button
            key={i}
            onClick={() => choose(i)}
            disabled={picked !== null}
            dir="rtl"
            className={`rounded-lg border-2 px-4 py-2 font-arabic text-xl transition ${
              picked === null
                ? "border-slate-200 bg-white hover:border-emerald-400"
                : i === q.answerIndex
                ? "border-emerald-500 bg-emerald-50"
                : i === picked
                ? "border-red-400 bg-red-50"
                : "border-slate-200 opacity-40"
            }`}
          >
            {w}
          </button>
        ))}
      </div>
    </div>
  );
}

function MatchPairsQuestion({
  q,
  onAnswer,
}: {
  q: Extract<QuizQuestion, { type: "matchpairs" }>;
  onAnswer: (correct: boolean) => void;
}) {
  const left = useMemo(() => shuffle(q.pairs), [q]);
  const right = useMemo(() => shuffle(q.pairs), [q]);
  const [selected, setSelected] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrong, setWrong] = useState<string | null>(null);
  const [mistakes, setMistakes] = useState(0);
  const [done, setDone] = useState(false);

  function pickRight(pair: { a: string; b: string }) {
    if (!selected || done) return;
    if (selected === pair.a) {
      const nextMatched = new Set(matched).add(pair.a);
      setMatched(nextMatched);
      setSelected(null);
      if (nextMatched.size === q.pairs.length) {
        setDone(true);
        onAnswer(mistakes === 0);
      }
    } else {
      setMistakes((m) => m + 1);
      setWrong(pair.b);
      setTimeout(() => setWrong(null), 400);
      setSelected(null);
    }
  }

  return (
    <div>
      <p className="mb-3 font-medium text-slate-700">{q.instruction}</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          {left.map((p) => (
            <button
              key={p.a}
              disabled={matched.has(p.a)}
              onClick={() => {
                setSelected(p.a);
                speakArabic(p.a);
              }}
              dir="rtl"
              className={`rounded-xl border-2 p-3 text-right font-arabic text-xl transition ${
                matched.has(p.a)
                  ? "border-emerald-300 bg-emerald-50 text-emerald-300"
                  : selected === p.a
                  ? "border-emerald-600 bg-emerald-100"
                  : "border-slate-200 bg-white hover:border-emerald-400"
              }`}
            >
              {p.a}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {right.map((p) => (
            <button
              key={p.b}
              disabled={matched.has(p.a)}
              onClick={() => pickRight(p)}
              className={`rounded-xl border-2 p-3 text-left text-sm transition ${
                matched.has(p.a)
                  ? "border-emerald-300 bg-emerald-50 text-emerald-300"
                  : wrong === p.b
                  ? "animate-pulse border-red-400 bg-red-50"
                  : "border-slate-200 bg-white hover:border-emerald-400"
              }`}
            >
              {p.b}
            </button>
          ))}
        </div>
      </div>
      {done && (
        <p className="mt-3 text-sm text-emerald-700">
          Semua pasangan cocok {mistakes === 0 ? "tanpa kesalahan 🎯" : `(${mistakes} kesalahan)`}
        </p>
      )}
    </div>
  );
}

function CategorizeQuestion({
  q,
  onAnswer,
}: {
  q: Extract<QuizQuestion, { type: "categorize" }>;
  onAnswer: (correct: boolean) => void;
}) {
  const allWords = useMemo(
    () => shuffle(q.categories.flatMap((c) => c.words.map((w) => ({ w, cat: c.name })))),
    [q]
  );
  const [pool, setPool] = useState(allWords);
  const [placed, setPlaced] = useState<Record<string, string[]>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [mistakes, setMistakes] = useState(0);
  const [wrongCat, setWrongCat] = useState<string | null>(null);

  function dropInto(catName: string) {
    if (!selected) return;
    const item = pool.find((p) => p.w === selected);
    if (!item) return;

    if (item.cat === catName) {
      setPlaced((prev) => ({ ...prev, [catName]: [...(prev[catName] ?? []), item.w] }));
      const nextPool = pool.filter((p) => p.w !== item.w);
      setPool(nextPool);
      setSelected(null);
      if (nextPool.length === 0) onAnswer(mistakes === 0);
    } else {
      setMistakes((m) => m + 1);
      setWrongCat(catName);
      setTimeout(() => setWrongCat(null), 400);
      setSelected(null);
    }
  }

  return (
    <div>
      <p className="mb-3 font-medium text-slate-700">{q.instruction}</p>
      <div dir="rtl" className="mb-4 flex min-h-[3rem] flex-wrap gap-2 rounded-lg bg-slate-50 p-2">
        {pool.map((p) => (
          <button
            key={p.w}
            onClick={() => {
              setSelected(p.w);
              speakArabic(p.w);
            }}
            className={`rounded-lg px-3 py-1.5 font-arabic text-lg transition ${
              selected === p.w
                ? "bg-emerald-600 text-white"
                : "bg-white text-emerald-800 ring-1 ring-emerald-200"
            }`}
          >
            {p.w}
          </button>
        ))}
        {pool.length === 0 && (
          <span className="p-1 text-sm text-emerald-700">Semua kata sudah dikelompokkan ✅</span>
        )}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {q.categories.map((c) => (
          <button
            key={c.name}
            onClick={() => dropInto(c.name)}
            className={`min-h-[5rem] rounded-xl border-2 border-dashed p-3 text-left transition ${
              wrongCat === c.name
                ? "border-red-400 bg-red-50"
                : "border-slate-300 bg-white hover:border-emerald-400"
            }`}
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {c.name}
            </span>
            <div dir="rtl" className="mt-2 flex flex-wrap gap-1.5">
              {(placed[c.name] ?? []).map((w) => (
                <span
                  key={w}
                  className="rounded bg-emerald-100 px-2 py-1 font-arabic text-base text-emerald-800"
                >
                  {w}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function QuizTab({ questions }: { questions: QuizQuestion[] }) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const q = questions[index];

  function advance(correct: boolean) {
    if (correct) setScore((s) => s + 1);
    setTimeout(() => {
      setSelected(null);
      if (index + 1 < questions.length) setIndex((i) => i + 1);
      else setFinished(true);
    }, 900);
  }

  function handleChoice(i: number, answerIndex: number) {
    if (selected !== null) return;
    setSelected(i);
    advance(i === answerIndex);
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
          Ulangi Kuis
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
              <p className="mb-2 text-lg font-semibold text-slate-800">{q.prompt}</p>
              {q.promptAr && (
                <p dir="rtl" className="mb-3 font-arabic text-2xl text-emerald-800">
                  {q.promptAr}
                </p>
              )}
              <OptionList
                options={q.options}
                answerIndex={q.answerIndex}
                selected={selected}
                onPick={(i) => handleChoice(i, q.answerIndex)}
                rtl={q.options.some((o) => /[؀-ۿ]/.test(o))}
              />
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
              <OptionList
                options={q.options}
                answerIndex={q.answerIndex}
                selected={selected}
                onPick={(i) => handleChoice(i, q.answerIndex)}
              />
            </>
          )}

          {q.type === "order" && <OrderQuestion q={q} onAnswer={advance} />}
          {q.type === "truefalse" && <TrueFalseQuestion q={q} onAnswer={advance} />}
          {q.type === "fillblank" && <FillBlankQuestion q={q} onAnswer={advance} />}
          {q.type === "matchpairs" && <MatchPairsQuestion q={q} onAnswer={advance} />}
          {q.type === "categorize" && <CategorizeQuestion q={q} onAnswer={advance} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
