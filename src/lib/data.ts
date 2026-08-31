import { Unit } from "./types";

// Data contoh (placeholder). Ganti dengan materi asli dari buku
// (mis. Baina Yadaika 2) per unit/wihdah saat sudah tersedia.
export const units: Unit[] = [
  {
    id: 1,
    title: "Perkenalan",
    titleAr: "التعارف",
    theme: "Menyapa dan memperkenalkan diri",
    color: "emerald",
    vocabulary: [
      { ar: "اِسْم", translit: "ism", id: "nama", emoji: "🪪" },
      { ar: "صَدِيق", translit: "shadiiq", id: "teman", emoji: "🤝" },
      { ar: "مُدَرِّس", translit: "mudarris", id: "guru (laki-laki)", emoji: "👨‍🏫" },
      { ar: "طَالِب", translit: "thaalib", id: "murid (laki-laki)", emoji: "🧑‍🎓" },
      { ar: "مِنْ أَيْنَ", translit: "min ayna", id: "dari mana", emoji: "🌍" },
      { ar: "بَلَد", translit: "balad", id: "negara", emoji: "🏳️" },
    ],
    qawaid: [
      {
        title: "Kata tanya 'siapa' dan 'apa'",
        titleAr: "مَنْ وَ مَا",
        explanation:
          "'مَنْ' (man) dipakai untuk menanyakan orang, sedangkan 'مَا' (maa) dipakai untuk menanyakan benda.",
        pattern: [
          { label: "Menanyakan orang", ar: "مَنْ + ...؟" },
          { label: "Menanyakan benda", ar: "مَا + ...؟" },
        ],
        examples: [
          {
            ar: "مَنْ هَذَا؟",
            id: "Siapa ini?",
            highlights: [{ wordIndex: 0, role: "harf" }],
          },
          {
            ar: "هَذَا مُحَمَّد",
            id: "Ini Muhammad",
            highlights: [{ wordIndex: 1, role: "subject" }],
          },
          {
            ar: "مَا هَذَا؟",
            id: "Apa ini?",
            highlights: [{ wordIndex: 0, role: "harf" }],
          },
        ],
      },
    ],
    dialogue: [
      { speaker: "أحمد", ar: "السَّلَامُ عَلَيْكُمْ", id: "Assalamu'alaikum" },
      { speaker: "علي", ar: "وَعَلَيْكُمُ السَّلَامُ", id: "Wa'alaikumussalam" },
      { speaker: "أحمد", ar: "مَا اسْمُكَ؟", id: "Siapa namamu?" },
      { speaker: "علي", ar: "اِسْمِي عَلِيّ، وَمَا اسْمُكَ؟", id: "Namaku Ali, siapa namamu?" },
      { speaker: "أحمد", ar: "اِسْمِي أَحْمَد", id: "Namaku Ahmad" },
    ],
    quiz: [
      {
        type: "mcq",
        prompt: "Apa arti kata 'اِسْم'?",
        options: ["Nama", "Teman", "Guru", "Negara"],
        answerIndex: 0,
      },
      {
        type: "listen",
        audioText: "مَنْ هَذَا؟",
        options: ["Apa ini?", "Siapa ini?", "Dari mana ini?", "Ini apa?"],
        answerIndex: 1,
      },
      {
        type: "order",
        promptId: "Susun jadi: 'Namaku Ali'",
        words: ["اِسْمِي", "عَلِيّ"],
        correctOrder: [0, 1],
      },
    ],
  },
  {
    id: 2,
    title: "Di Rumah",
    titleAr: "فِي الْبَيْتِ",
    theme: "Menyebutkan benda dan ruangan di rumah",
    color: "sky",
    vocabulary: [
      { ar: "بَيْت", translit: "bait", id: "rumah", emoji: "🏠" },
      { ar: "غُرْفَة", translit: "ghurfah", id: "kamar", emoji: "🛏️" },
      { ar: "مَطْبَخ", translit: "mathbakh", id: "dapur", emoji: "🍳" },
      { ar: "بَاب", translit: "baab", id: "pintu", emoji: "🚪" },
      { ar: "نَافِذَة", translit: "naafidzah", id: "jendela", emoji: "🪟" },
      { ar: "كُرْسِيّ", translit: "kursiy", id: "kursi", emoji: "🪑" },
    ],
    qawaid: [
      {
        title: "Kata tunjuk dekat (mudzakkar & muannats)",
        titleAr: "اِسْم الْإِشَارَة لِلْقَرِيبِ",
        explanation:
          "'هَذَا' (haadzaa) untuk benda mudzakkar (laki-laki/maskulin), 'هَذِهِ' (haadzihi) untuk benda muannats (perempuan/feminin, biasanya berakhiran tā' marbūthah ة).",
        pattern: [
          { label: "Mudzakkar", ar: "هَذَا + اسم" },
          { label: "Muannats", ar: "هَذِهِ + اسم" },
        ],
        examples: [
          { ar: "هَذَا بَيْت", id: "Ini rumah", highlights: [{ wordIndex: 0, role: "harf" }] },
          { ar: "هَذِهِ غُرْفَة", id: "Ini kamar", highlights: [{ wordIndex: 0, role: "harf" }] },
        ],
      },
    ],
    dialogue: [
      { speaker: "سارة", ar: "أَيْنَ غُرْفَتُكِ؟", id: "Di mana kamarmu?" },
      { speaker: "فاطمة", ar: "غُرْفَتِي بِجَانِبِ الْمَطْبَخِ", id: "Kamarku di sebelah dapur" },
      { speaker: "سارة", ar: "هَلْ هَذِهِ نَافِذَةٌ؟", id: "Apakah ini jendela?" },
      { speaker: "فاطمة", ar: "نَعَمْ، هَذِهِ نَافِذَة", id: "Ya, ini jendela" },
    ],
    quiz: [
      {
        type: "mcq",
        prompt: "'غُرْفَة' artinya...",
        options: ["Dapur", "Kamar", "Pintu", "Kursi"],
        answerIndex: 1,
      },
      {
        type: "mcq",
        prompt: "Kata tunjuk yang benar untuk 'بَيْت' (rumah, mudzakkar) adalah...",
        options: ["هَذِهِ", "هَذَا"],
        answerIndex: 1,
      },
      {
        type: "order",
        promptId: "Susun jadi: 'Ini kamar'",
        words: ["هَذِهِ", "غُرْفَة"],
        correctOrder: [0, 1],
      },
    ],
  },
  {
    id: 3,
    title: "Di Sekolah",
    titleAr: "فِي الْمَدْرَسَةِ",
    theme: "Aktivitas dan benda di sekolah",
    color: "amber",
    vocabulary: [
      { ar: "مَدْرَسَة", translit: "madrasah", id: "sekolah", emoji: "🏫" },
      { ar: "كِتَاب", translit: "kitaab", id: "buku", emoji: "📖" },
      { ar: "قَلَم", translit: "qalam", id: "pena", emoji: "🖊️" },
      { ar: "فَصْل", translit: "fashl", id: "kelas", emoji: "🧑‍🏫" },
      { ar: "يَكْتُبُ", translit: "yaktubu", id: "(dia) menulis", emoji: "✍️" },
      { ar: "يَقْرَأُ", translit: "yaqra'u", id: "(dia) membaca", emoji: "📚" },
    ],
    qawaid: [
      {
        title: "Kata kerja sekarang (fi'il mudhari')",
        titleAr: "الْفِعْل الْمُضَارِع",
        explanation:
          "Fi'il mudhari' menunjukkan pekerjaan yang sedang/akan dilakukan, diawali huruf mudhara'ah (أ ن ي ت).",
        pattern: [
          { label: "Dia (lk) menulis", ar: "هُوَ يَكْتُبُ" },
          { label: "Dia (pr) menulis", ar: "هِيَ تَكْتُبُ" },
        ],
        examples: [
          {
            ar: "الطَّالِب يَكْتُبُ الدَّرْسَ",
            id: "Murid itu menulis pelajaran",
            highlights: [
              { wordIndex: 0, role: "subject" },
              { wordIndex: 1, role: "verb" },
              { wordIndex: 2, role: "object" },
            ],
          },
        ],
      },
    ],
    dialogue: [
      { speaker: "المعلم", ar: "مَاذَا تَفْعَلُ؟", id: "Apa yang kamu lakukan?" },
      { speaker: "الطالب", ar: "أَنَا أَقْرَأُ الْكِتَابَ", id: "Saya sedang membaca buku" },
      { speaker: "المعلم", ar: "أَيْنَ قَلَمُكَ؟", id: "Di mana penamu?" },
      { speaker: "الطالب", ar: "قَلَمِي فِي حَقِيبَتِي", id: "Penaku di dalam tasku" },
    ],
    quiz: [
      {
        type: "mcq",
        prompt: "'يَكْتُبُ' artinya...",
        options: ["(dia) membaca", "(dia) menulis", "buku", "pena"],
        answerIndex: 1,
      },
      {
        type: "listen",
        audioText: "أَنَا أَقْرَأُ الْكِتَابَ",
        options: [
          "Saya sedang menulis buku",
          "Saya sedang membaca buku",
          "Saya punya buku",
          "Ini buku saya",
        ],
        answerIndex: 1,
      },
      {
        type: "order",
        promptId: "Susun jadi: 'Murid itu menulis'",
        words: ["الطَّالِب", "يَكْتُبُ"],
        correctOrder: [0, 1],
      },
    ],
  },
];

export function getUnit(id: number): Unit | undefined {
  return units.find((u) => u.id === id);
}
