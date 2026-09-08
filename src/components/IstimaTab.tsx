"use client";

import { useState } from "react";
import { IstimaLesson } from "@/lib/types";
import { speakArabic } from "@/lib/speech";

function PlayCircle({
  text,
  label,
  onPlayed,
}: {
  text: string;
  label: string;
  onPlayed?: () => void;
}) {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        speakArabic(text);
        setCount((c) => c + 1);
        onPlayed?.();
      }}
      className="flex w-full items-center gap-3 rounded-2xl bg-emerald-600 p-4 text-white shadow transition hover:bg-emerald-700 active:scale-[0.99]"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20 text-xl">
        🎧
      </span>
      <span className="flex-1 text-left text-sm font-medium">{label}</span>
      {count > 0 && (
        <span className="shrink-0 rounded-full bg-white/20 px-2 py-0.5 text-xs">
          {count}×
        </span>
      )}
    </button>
  );
}

function IntroSection({ lesson }: { lesson: IstimaLesson }) {
  const [played, setPlayed] = useState(false);
  const [showText, setShowText] = useState(false);

  return (
    <section className="mb-6">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <h3 className="font-bold text-slate-800">{lesson.title}</h3>
        <span dir="rtl" className="font-arabic text-xl text-emerald-700">
          {lesson.titleAr}
        </span>
      </div>

      <PlayCircle
        text={lesson.intro.ar}
        label="Dengarkan pengantar wihdah ini"
        onPlayed={() => setPlayed(true)}
      />

      {played && !showText && (
        <button
          onClick={() => setShowText(true)}
          className="mt-2 w-full rounded-full bg-slate-100 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-200"
        >
          Tampilkan teks pengantar
        </button>
      )}

      {showText && (
        <div className="mt-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
          <p dir="rtl" className="font-arabic text-xl leading-[2.4] text-slate-800">
            {lesson.intro.ar}
          </p>
          <p className="mt-2 border-t border-slate-100 pt-2 text-sm text-slate-500">
            {lesson.intro.id}
          </p>
        </div>
      )}
    </section>
  );
}

function ItemCard({
  item,
  index,
  total,
  onNext,
}: {
  item: IstimaLesson["items"][number];
  index: number;
  total: number;
  onNext: () => void;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const answered = picked !== null;

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
      <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-emerald-500">
        Simakan {index + 1} dari {total}
      </div>

      <PlayCircle text={item.ar} label="Putar audio" />

      <p className="mt-4 mb-2 text-sm font-medium text-slate-700">
        {item.question}
      </p>
      <div className="flex flex-col gap-2">
        {item.options.map((opt, i) => {
          const isAnswer = i === item.answerIndex;
          const isPicked = picked === i;
          return (
            <button
              key={i}
              disabled={answered}
              onClick={() => setPicked(i)}
              className={`rounded-xl border-2 p-3 text-left text-sm transition ${
                !answered
                  ? "border-slate-200 bg-white hover:border-emerald-400"
                  : isAnswer
                  ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                  : isPicked
                  ? "border-red-400 bg-red-50 text-red-700"
                  : "border-slate-200 bg-white text-slate-400"
              }`}
            >
              {opt}
              {answered && isAnswer && " ✓"}
              {answered && isPicked && !isAnswer && " ✗"}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="mt-4">
          <div className="rounded-xl bg-slate-50 p-3">
            <div className="mb-1 text-xs font-semibold text-slate-400">
              Teks yang kamu dengar
            </div>
            <p dir="rtl" className="font-arabic text-lg leading-[2.2] text-slate-800">
              {item.ar}
            </p>
            <p className="mt-1 text-sm text-slate-500">{item.id}</p>
          </div>

          {index + 1 < total && (
            <button
              onClick={onNext}
              className="mt-3 w-full rounded-full bg-emerald-600 py-2.5 text-sm font-medium text-white shadow transition hover:bg-emerald-700"
            >
              Simakan berikutnya ←
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default function IstimaTab({ lesson }: { lesson: IstimaLesson }) {
  const [current, setCurrent] = useState(0);
  const total = lesson.items.length;
  const done = current + 1 >= total;

  return (
    <div>
      <IntroSection lesson={lesson} />

      <p className="mb-3 rounded-xl bg-sky-50 p-3 text-sm text-sky-900">
        Dengarkan dulu audionya sampai paham, baru pilih jawaban. Teks Arabnya
        muncul setelah kamu menjawab.
      </p>

      <div className="mb-3 flex gap-1">
        {lesson.items.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-full transition ${
              i <= current ? "bg-emerald-500" : "bg-slate-200"
            }`}
          />
        ))}
      </div>

      <ItemCard
        key={current}
        item={lesson.items[current]}
        index={current}
        total={total}
        onNext={() => setCurrent((c) => c + 1)}
      />

      {done && (
        <button
          onClick={() => setCurrent(0)}
          className="mt-3 w-full rounded-full bg-slate-100 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-200"
        >
          Ulangi dari awal
        </button>
      )}
    </div>
  );
}
