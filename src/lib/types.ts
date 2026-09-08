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

/** Satu hiwar utuh. Tiap wihdah punya dua, seperti pola buku rujukan. */
export type Dialogue = {
  title: string;
  titleAr: string;
  /** Latar situasi, dibaca sebelum dialog dimulai. */
  setting: string;
  lines: DialogueLine[];
};

/** Kosakata pendukung teks — tanpa emoji, karena disajikan sebagai glosarium. */
export type GlossItem = {
  ar: string;
  translit: string;
  id: string;
};

/** Nash qira'i: teks bacaan panjang, didahului kosakata barunya. */
export type QiraahText = {
  title: string;
  titleAr: string;
  /** Kosakata baru yang muncul di teks — dipelajari sebelum membaca. */
  preVocab: GlossItem[];
  paragraphs: { ar: string; id: string }[];
  /** Pertanyaan pemahaman; jawabannya disembunyikan sampai diminta. */
  questions: { ar: string; id: string; answerAr: string; answerId: string }[];
};

/** Fahm al-masmu': latihan menyimak, teks baru dibuka setelah audio diputar. */
export type IstimaLesson = {
  title: string;
  titleAr: string;
  /** Audio pembuka yang mengantar tema wihdah. */
  intro: { ar: string; id: string };
  /** Butir simakan, dikerjakan satu per satu. */
  items: {
    ar: string;
    id: string;
    question: string;
    options: string[];
    answerIndex: number;
  }[];
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
  istima: IstimaLesson;
  dialogues: Dialogue[];
  qiraah: QiraahText;
  quiz: QuizQuestion[];
};
