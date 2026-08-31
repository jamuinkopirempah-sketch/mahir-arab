export type VocabWord = {
  ar: string;
  translit: string;
  id: string;
  emoji: string;
};

export type QawaidExample = {
  ar: string;
  id: string;
  // index kata (dipisah spasi) yang diberi warna peran gramatikal
  highlights?: { wordIndex: number; role: "subject" | "verb" | "object" | "harf" }[];
};

export type QawaidRule = {
  title: string;
  titleAr: string;
  explanation: string;
  pattern?: { label: string; ar: string }[];
  examples: QawaidExample[];
};

export type DialogueLine = {
  speaker: string;
  ar: string;
  id: string;
};

/** Pelajaran fonetik: membandingkan dua bunyi yang mirip. */
export type AshwatLesson = {
  title: string;
  titleAr: string;
  explanation: string;
  /** Pasangan minimal: dua kata yang hanya beda pada bunyi yang dipelajari. */
  contrasts: {
    left: { ar: string; translit: string; id: string };
    right: { ar: string; translit: string; id: string };
  }[];
  leftLabel: string;
  rightLabel: string;
  tip?: string;
};

export type QuizQuestion =
  | {
      type: "mcq";
      prompt: string;
      promptAr?: string;
      options: string[];
      answerIndex: number;
    }
  | {
      type: "listen";
      audioText: string;
      options: string[];
      answerIndex: number;
    }
  | {
      type: "order";
      promptId: string;
      words: string[];
      correctOrder: number[];
    }
  | {
      type: "truefalse";
      statementAr: string;
      statementId: string;
      answer: boolean;
    }
  | {
      type: "fillblank";
      /** Kalimat dipecah jadi bagian sebelum dan sesudah rumpang (arah RTL). */
      before: string;
      after: string;
      wordBox: string[];
      answerIndex: number;
      translationId: string;
    }
  | {
      type: "matchpairs";
      instruction: string;
      pairs: { a: string; b: string }[];
    }
  | {
      type: "categorize";
      instruction: string;
      categories: { name: string; words: string[] }[];
    };

export type Unit = {
  id: number;
  title: string;
  titleAr: string;
  theme: string;
  color: string;
  vocabulary: VocabWord[];
  qawaid: QawaidRule[];
  ashwat: AshwatLesson;
  dialogue: DialogueLine[];
  quiz: QuizQuestion[];
};
