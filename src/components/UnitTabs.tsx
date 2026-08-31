"use client";

import { useState } from "react";
import { Unit } from "@/lib/types";
import VocabularyTab from "./VocabularyTab";
import QawaidTab from "./QawaidTab";
import SpeakingTab from "./SpeakingTab";
import QuizTab from "./QuizTab";

const tabs = [
  { key: "vocabulary", label: "Kosakata", icon: "📇" },
  { key: "qawaid", label: "Kaidah", icon: "📐" },
  { key: "speaking", label: "Bicara", icon: "🎙️" },
  { key: "quiz", label: "Kuis", icon: "🧩" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export default function UnitTabs({ unit }: { unit: Unit }) {
  const [active, setActive] = useState<TabKey>("vocabulary");

  return (
    <div>
      <div className="mb-6 grid grid-cols-4 gap-1 rounded-2xl bg-slate-100 p-1">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`flex flex-col items-center gap-0.5 rounded-xl py-2 text-xs font-medium transition sm:text-sm ${
              active === t.key
                ? "bg-white text-emerald-700 shadow"
                : "text-slate-500 hover:text-emerald-600"
            }`}
          >
            <span className="text-lg">{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {active === "vocabulary" && <VocabularyTab words={unit.vocabulary} />}
      {active === "qawaid" && <QawaidTab rules={unit.qawaid} />}
      {active === "speaking" && <SpeakingTab dialogue={unit.dialogue} />}
      {active === "quiz" && <QuizTab questions={unit.quiz} />}
    </div>
  );
}
