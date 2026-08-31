import { Unit } from "./types";

// Konten orisinal: kosakata, kaidah, dialog, dan kuis disusun sendiri
// (bukan salinan dari buku ajar manapun), mengikuti alur tema umum
// pembelajaran bahasa Arab pemula-menengah.
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
  {
    id: 4,
    title: "Keluarga",
    titleAr: "الْأُسْرَة",
    theme: "Menyebutkan anggota keluarga dan kepemilikan",
    color: "emerald",
    vocabulary: [
      { ar: "أَب", translit: "ab", id: "ayah", emoji: "👨" },
      { ar: "أُمّ", translit: "umm", id: "ibu", emoji: "👩" },
      { ar: "أَخ", translit: "akh", id: "saudara laki-laki", emoji: "🧑" },
      { ar: "أُخْت", translit: "ukht", id: "saudara perempuan", emoji: "👧" },
      { ar: "جَدّ", translit: "jadd", id: "kakek", emoji: "👴" },
      { ar: "جَدَّة", translit: "jaddah", id: "nenek", emoji: "👵" },
    ],
    qawaid: [
      {
        title: "Kata ganti kepemilikan (dhamir muttashil)",
        titleAr: "الضَّمَائِر الْمُتَّصِلَة",
        explanation:
          "Akhiran kata ganti seperti '-ي' (-ku), '-كَ' (-mu, lk), '-كِ' (-mu, pr) ditambahkan pada kata benda untuk menunjukkan kepemilikan.",
        pattern: [
          { label: "Ayahku", ar: "أَبِي" },
          { label: "Ayahmu (lk)", ar: "أَبُوكَ" },
          { label: "Ibumu (pr)", ar: "أُمُّكِ" },
        ],
        examples: [
          {
            ar: "هَذَا أَبِي",
            id: "Ini ayahku",
            highlights: [{ wordIndex: 1, role: "subject" }],
          },
          {
            ar: "هَذِهِ أُخْتِي الصَّغِيرَة",
            id: "Ini adikku (saudara perempuan yang kecil)",
            highlights: [{ wordIndex: 1, role: "subject" }],
          },
        ],
      },
    ],
    dialogue: [
      { speaker: "خالد", ar: "كَمْ فَرْدًا فِي أُسْرَتِكَ؟", id: "Berapa anggota keluargamu?" },
      { speaker: "يوسف", ar: "أُسْرَتِي خَمْسَة: أَبِي وَأُمِّي وَأَخِي وَأُخْتِي وَأَنَا", id: "Keluargaku lima orang: ayahku, ibuku, saudaraku, saudariku, dan aku" },
      { speaker: "خالد", ar: "هَلْ جَدُّكَ يَسْكُنُ مَعَكُمْ؟", id: "Apakah kakekmu tinggal bersama kalian?" },
      { speaker: "يوسف", ar: "نَعَمْ، جَدِّي وَجَدَّتِي يَسْكُنَانِ مَعَنَا", id: "Ya, kakek dan nenekku tinggal bersama kami" },
    ],
    quiz: [
      {
        type: "mcq",
        prompt: "'أُخْت' artinya...",
        options: ["Saudara laki-laki", "Saudara perempuan", "Ibu", "Nenek"],
        answerIndex: 1,
      },
      {
        type: "listen",
        audioText: "هَذَا أَبِي",
        options: ["Ini ibuku", "Ini ayahku", "Ini kakekku", "Ini saudaraku"],
        answerIndex: 1,
      },
      {
        type: "order",
        promptId: "Susun jadi: 'Ini nenekku'",
        words: ["هَذِهِ", "جَدَّتِي"],
        correctOrder: [0, 1],
      },
    ],
  },
  {
    id: 5,
    title: "Angka dan Warna",
    titleAr: "الْأَرْقَام وَالْأَلْوَان",
    theme: "Menghitung benda dan menyebutkan warna",
    color: "sky",
    vocabulary: [
      { ar: "وَاحِد", translit: "waahid", id: "satu", emoji: "1️⃣" },
      { ar: "ثَلَاثَة", translit: "tsalaatsah", id: "tiga", emoji: "3️⃣" },
      { ar: "أَحْمَر", translit: "ahmar", id: "merah", emoji: "🔴" },
      { ar: "أَزْرَق", translit: "azraq", id: "biru", emoji: "🔵" },
      { ar: "أَخْضَر", translit: "akhdhar", id: "hijau", emoji: "🟢" },
      { ar: "أَصْفَر", translit: "ashfar", id: "kuning", emoji: "🟡" },
    ],
    qawaid: [
      {
        title: "Sifat mengikuti benda (na'at-man'ut)",
        titleAr: "النَّعْت وَالْمَنْعُوت",
        explanation:
          "Kata sifat (termasuk warna) diletakkan setelah kata benda, dan mengikuti bentuk mudzakkar/muannats-nya.",
        pattern: [
          { label: "Buku merah (mudzakkar)", ar: "كِتَاب أَحْمَر" },
          { label: "Tas merah (muannats)", ar: "حَقِيبَة حَمْرَاء" },
        ],
        examples: [
          {
            ar: "عِنْدِي كِتَابٌ أَخْضَر",
            id: "Aku punya buku hijau",
            highlights: [
              { wordIndex: 1, role: "object" },
              { wordIndex: 2, role: "subject" },
            ],
          },
        ],
      },
    ],
    dialogue: [
      { speaker: "نورة", ar: "كَمْ كِتَابًا عِنْدَكِ؟", id: "Berapa buku yang kamu punya?" },
      { speaker: "هند", ar: "عِنْدِي ثَلَاثَة كُتُب", id: "Aku punya tiga buku" },
      { speaker: "نورة", ar: "مَا لَوْنُ حَقِيبَتِكِ؟", id: "Apa warna tasmu?" },
      { speaker: "هند", ar: "حَقِيبَتِي زَرْقَاء", id: "Tasku biru" },
    ],
    quiz: [
      {
        type: "mcq",
        prompt: "'أَحْمَر' artinya...",
        options: ["Biru", "Hijau", "Merah", "Kuning"],
        answerIndex: 2,
      },
      {
        type: "mcq",
        prompt: "'ثَلَاثَة' artinya angka...",
        options: ["1", "2", "3", "4"],
        answerIndex: 2,
      },
      {
        type: "order",
        promptId: "Susun jadi: 'Aku punya tiga buku'",
        words: ["عِنْدِي", "ثَلَاثَة", "كُتُب"],
        correctOrder: [0, 1, 2],
      },
    ],
  },
  {
    id: 6,
    title: "Aktivitas Harian",
    titleAr: "الْأَنْشِطَة الْيَوْمِيَّة",
    theme: "Menceritakan kegiatan sehari-hari",
    color: "amber",
    vocabulary: [
      { ar: "يَسْتَيْقِظُ", translit: "yastaiqizhu", id: "(dia) bangun tidur", emoji: "⏰" },
      { ar: "يَذْهَبُ", translit: "yadzhabu", id: "(dia) pergi", emoji: "🚶" },
      { ar: "يَأْكُلُ", translit: "ya'kulu", id: "(dia) makan", emoji: "🍽️" },
      { ar: "يَنَامُ", translit: "yanaamu", id: "(dia) tidur", emoji: "😴" },
      { ar: "يَلْعَبُ", translit: "yal'abu", id: "(dia) bermain", emoji: "⚽" },
      { ar: "يُصَلِّي", translit: "yushallii", id: "(dia) shalat", emoji: "🕌" },
    ],
    qawaid: [
      {
        title: "Keterangan waktu dengan fi'il mudhari'",
        titleAr: "ظَرْف الزَّمَان مَعَ الْفِعْل الْمُضَارِع",
        explanation:
          "Keterangan waktu seperti 'كُلَّ يَوْمٍ' (setiap hari) atau 'صَبَاحًا' (di pagi hari) biasa diletakkan setelah fi'il mudhari' untuk menjelaskan kapan aktivitas dilakukan.",
        pattern: [
          { label: "setiap hari", ar: "كُلَّ يَوْمٍ" },
          { label: "di pagi hari", ar: "صَبَاحًا" },
        ],
        examples: [
          {
            ar: "أَنَا أَسْتَيْقِظُ مُبَكِّرًا",
            id: "Aku bangun pagi-pagi",
            highlights: [
              { wordIndex: 0, role: "subject" },
              { wordIndex: 1, role: "verb" },
            ],
          },
        ],
      },
    ],
    dialogue: [
      { speaker: "سعيد", ar: "مَاذَا تَفْعَلُ صَبَاحًا؟", id: "Apa yang kamu lakukan di pagi hari?" },
      { speaker: "كريم", ar: "أَسْتَيْقِظُ ثُمَّ أُصَلِّي ثُمَّ أَذْهَبُ إِلَى الْمَدْرَسَةِ", id: "Aku bangun, lalu shalat, lalu pergi ke sekolah" },
      { speaker: "سعيد", ar: "وَمَاذَا تَفْعَلُ مَسَاءً؟", id: "Dan apa yang kamu lakukan di sore hari?" },
      { speaker: "كريم", ar: "أَلْعَبُ قَلِيلًا ثُمَّ أَنَامُ", id: "Aku bermain sebentar lalu tidur" },
    ],
    quiz: [
      {
        type: "mcq",
        prompt: "'يَأْكُلُ' artinya...",
        options: ["(dia) tidur", "(dia) bermain", "(dia) makan", "(dia) pergi"],
        answerIndex: 2,
      },
      {
        type: "listen",
        audioText: "أَنَا أَسْتَيْقِظُ مُبَكِّرًا",
        options: [
          "Aku tidur larut",
          "Aku bangun pagi-pagi",
          "Aku pergi ke sekolah",
          "Aku bermain sebentar",
        ],
        answerIndex: 1,
      },
      {
        type: "order",
        promptId: "Susun jadi: 'Aku pergi ke sekolah'",
        words: ["أَذْهَبُ", "إِلَى", "الْمَدْرَسَةِ"],
        correctOrder: [0, 1, 2],
      },
    ],
  },
  {
    id: 7,
    title: "Profesi dan Tempat",
    titleAr: "الْمِهَن وَالْأَمَاكِن",
    theme: "Menyebutkan pekerjaan dan tempat bekerja",
    color: "emerald",
    vocabulary: [
      { ar: "طَبِيب", translit: "thabiib", id: "dokter", emoji: "🩺" },
      { ar: "مُهَنْدِس", translit: "muhandis", id: "insinyur", emoji: "👷" },
      { ar: "تَاجِر", translit: "taajir", id: "pedagang", emoji: "🛍️" },
      { ar: "مُسْتَشْفَى", translit: "mustasyfaa", id: "rumah sakit", emoji: "🏥" },
      { ar: "سُوق", translit: "suuq", id: "pasar", emoji: "🏪" },
      { ar: "مَكْتَب", translit: "maktab", id: "kantor", emoji: "🏢" },
    ],
    qawaid: [
      {
        title: "Bertanya tentang pekerjaan dengan 'ماذا يعمل'",
        titleAr: "مَاذَا يَعْمَلُ؟",
        explanation:
          "'مَاذَا يَعْمَلُ...؟' dipakai menanyakan pekerjaan seseorang, dijawab dengan 'هُوَ + profesi' atau '...يَعْمَلُ فِي + tempat'.",
        pattern: [
          { label: "Apa pekerjaannya?", ar: "مَاذَا يَعْمَلُ؟" },
          { label: "Dia bekerja di...", ar: "هُوَ يَعْمَلُ فِي..." },
        ],
        examples: [
          {
            ar: "أَبِي طَبِيب فِي الْمُسْتَشْفَى",
            id: "Ayahku dokter di rumah sakit",
            highlights: [
              { wordIndex: 0, role: "subject" },
              { wordIndex: 1, role: "object" },
            ],
          },
        ],
      },
    ],
    dialogue: [
      { speaker: "ليلى", ar: "مَاذَا يَعْمَلُ وَالِدُكَ؟", id: "Apa pekerjaan ayahmu?" },
      { speaker: "عمر", ar: "هُوَ مُهَنْدِس، يَعْمَلُ فِي مَكْتَبٍ كَبِيرٍ", id: "Dia insinyur, bekerja di kantor besar" },
      { speaker: "ليلى", ar: "وَأَيْنَ تَعْمَلُ أُمُّكَ؟", id: "Dan di mana ibumu bekerja?" },
      { speaker: "عمر", ar: "أُمِّي طَبِيبَة، تَعْمَلُ فِي الْمُسْتَشْفَى", id: "Ibuku dokter, bekerja di rumah sakit" },
    ],
    quiz: [
      {
        type: "mcq",
        prompt: "'مُهَنْدِس' artinya...",
        options: ["Dokter", "Pedagang", "Insinyur", "Guru"],
        answerIndex: 2,
      },
      {
        type: "listen",
        audioText: "أَبِي طَبِيب فِي الْمُسْتَشْفَى",
        options: [
          "Ayahku insinyur di kantor",
          "Ayahku dokter di rumah sakit",
          "Ayahku pedagang di pasar",
          "Ayahku guru di sekolah",
        ],
        answerIndex: 1,
      },
      {
        type: "order",
        promptId: "Susun jadi: 'Dia bekerja di pasar'",
        words: ["هُوَ", "يَعْمَلُ", "فِي", "السُّوقِ"],
        correctOrder: [0, 1, 2, 3],
      },
    ],
  },
  {
    id: 8,
    title: "Waktu dan Cuaca",
    titleAr: "الْوَقْت وَالطَّقْس",
    theme: "Menyebutkan jam, hari, dan keadaan cuaca",
    color: "sky",
    vocabulary: [
      { ar: "السَّاعَة", translit: "as-saa'ah", id: "jam/waktu", emoji: "🕐" },
      { ar: "يَوْم", translit: "yaum", id: "hari", emoji: "📅" },
      { ar: "حَارّ", translit: "haarr", id: "panas", emoji: "☀️" },
      { ar: "بَارِد", translit: "baarid", id: "dingin", emoji: "❄️" },
      { ar: "مُمْطِر", translit: "mumthir", id: "hujan", emoji: "🌧️" },
      { ar: "غَائِم", translit: "ghaa'im", id: "berawan", emoji: "☁️" },
    ],
    qawaid: [
      {
        title: "Bertanya waktu dan cuaca",
        titleAr: "كَمِ السَّاعَة؟ وَكَيْفَ الطَّقْس؟",
        explanation:
          "'كَمِ السَّاعَة؟' untuk menanyakan jam, dijawab 'السَّاعَة + angka'. 'كَيْفَ الطَّقْسُ؟' untuk menanyakan cuaca, dijawab dengan kata sifat cuaca.",
        pattern: [
          { label: "Jam berapa?", ar: "كَمِ السَّاعَة؟" },
          { label: "Bagaimana cuacanya?", ar: "كَيْفَ الطَّقْسُ؟" },
        ],
        examples: [
          {
            ar: "الطَّقْسُ حَارٌّ الْيَوْمَ",
            id: "Cuaca hari ini panas",
            highlights: [
              { wordIndex: 0, role: "subject" },
              { wordIndex: 1, role: "object" },
            ],
          },
        ],
      },
    ],
    dialogue: [
      { speaker: "منى", ar: "كَمِ السَّاعَة الْآنَ؟", id: "Jam berapa sekarang?" },
      { speaker: "زيد", ar: "السَّاعَة السَّابِعَة صَبَاحًا", id: "Jam tujuh pagi" },
      { speaker: "منى", ar: "كَيْفَ الطَّقْسُ الْيَوْمَ؟", id: "Bagaimana cuaca hari ini?" },
      { speaker: "زيد", ar: "الطَّقْسُ بَارِدٌ وَغَائِم", id: "Cuacanya dingin dan berawan" },
    ],
    quiz: [
      {
        type: "mcq",
        prompt: "'حَارّ' artinya...",
        options: ["Dingin", "Panas", "Berawan", "Hujan"],
        answerIndex: 1,
      },
      {
        type: "listen",
        audioText: "الطَّقْسُ حَارٌّ الْيَوْمَ",
        options: [
          "Cuaca hari ini dingin",
          "Cuaca hari ini panas",
          "Cuaca hari ini berawan",
          "Cuaca hari ini hujan",
        ],
        answerIndex: 1,
      },
      {
        type: "order",
        promptId: "Susun jadi: 'Jam tujuh pagi'",
        words: ["السَّاعَة", "السَّابِعَة", "صَبَاحًا"],
        correctOrder: [0, 1, 2],
      },
    ],
  },
];

export function getUnit(id: number): Unit | undefined {
  return units.find((u) => u.id === id);
}
