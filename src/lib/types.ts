export type VocabWord = {
  ar: string;
  translit: string;
  id: string;
  emoji: string;
};

export type QawaidExample = {
  ar: string;
  id: string;
  // index ranges (word indices, split by space) to highlight with a color role
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
    };

export type Unit = {
  id: number;
  title: string;
  titleAr: string;
  theme: string;
  color: string;
  vocabulary: VocabWord[];
  qawaid: QawaidRule[];
  dialogue: DialogueLine[];
  quiz: QuizQuestion[];
};
