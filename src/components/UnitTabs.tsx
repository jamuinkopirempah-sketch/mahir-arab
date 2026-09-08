"use client";

import { useState } from "react";
import { Unit } from "@/lib/types";
import VocabularyTab from "./VocabularyTab";
import QawaidTab from "./QawaidTab";
import AshwatTab from "./AshwatTab";
import IstimaTab from "./IstimaTab";
import SpeakingTab from "./SpeakingTab";
import QiraahTab from "./QiraahTab";
import QuizTab from "./QuizTab";

const tabs = [
  { key: "vocabulary", label: "Kosakata", icon: "📇" },
  { key: "ashwat", label: "Bunyi", icon: "👂" },
  { key: "istima", label: "Istima'", icon: "🎧" },
  { key: "speaking", label: "Hiwar", icon: "🎙️" },
  { key: "qiraah", label: "Qiroah", icon: "📖" },
  { key: "qawaid", label: "Kaidah", icon: "📐" },
  { key: "quiz", label: "Kuis", icon: "🧩" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export default function UnitTabs({ unit }: { unit: Unit }) {
  const [active, setActive] = useState<TabKey>("vocabulary");

  return (
    <div className="pb-10">
      <div className="mb-6 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-7 sm:overflow-visible sm:rounded-2xl sm:bg-[#e8eee7] sm:p-1.5">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`flex min-w-[76px] flex-col items-center gap-0.5 rounded-xl px-2 py-2.5 text-xs font-bold transition sm:min-w-0 sm:text-sm ${
              active === t.key
                ? "bg-[#0d6b60] text-white shadow-sm sm:bg-white sm:text-[#0d6b60]"
                : "bg-white text-[#70827b] ring-1 ring-[#dce6dc] hover:text-[#0d6b60] sm:bg-transparent sm:ring-0"
            }`}
          >
            <span className="text-lg">{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {active === "vocabulary" && <VocabularyTab words={unit.vocabulary} />}
      {active === "ashwat" && <AshwatTab lesson={unit.ashwat} />}
      {active === "istima" && <IstimaTab lesson={unit.istima} />}
      {active === "speaking" && <SpeakingTab dialogues={unit.dialogues} />}
      {active === "qiraah" && <QiraahTab text={unit.qiraah} />}
      {active === "qawaid" && <QawaidTab rules={unit.qawaid} />}
      {active === "quiz" && <QuizTab questions={unit.quiz} />}
    </div>
  );
}
