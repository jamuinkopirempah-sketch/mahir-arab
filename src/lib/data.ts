import { Unit } from "./types";

// Konten orisinal: kosakata, kaidah, dialog, fonetik, dan kuis disusun sendiri
// untuk proyek ini — bukan salinan dari buku ajar manapun. Tema dan cakupan
// kaidah mengikuti peta di docs/PETA-BUKU-ABY2.md (level menengah).
export const units: Unit[] = [
  {
    id: 1,
    title: "Menjaga Kesehatan",
    titleAr: "الْعِنَايَةُ بِالصِّحَّةِ",
    theme: "Mengungkapkan keluhan sakit dan bertanya tentang pengobatan",
    color: "emerald",
    vocabulary: [
      { ar: "صِحَّة", translit: "shihhah", id: "kesehatan", emoji: "💚" },
      { ar: "مَرِيض", translit: "mariidh", id: "orang sakit", emoji: "🤒" },
      { ar: "عِلَاج", translit: "'ilaaj", id: "pengobatan", emoji: "🩺" },
      { ar: "حِمْيَة", translit: "himyah", id: "diet, pantangan makan", emoji: "🥗" },
      { ar: "صُدَاع", translit: "shudaa'", id: "sakit kepala", emoji: "🤕" },
      { ar: "دَوَاء", translit: "dawaa'", id: "obat", emoji: "💊" },
      { ar: "رَاحَة", translit: "raahah", id: "istirahat", emoji: "🛌" },
      { ar: "يَشْعُرُ", translit: "yasy'uru", id: "(dia) merasakan", emoji: "🫤" },
    ],
    qawaid: [
      {
        title: "Huruf jar",
        titleAr: "حُرُوفُ الْجَرِّ",
        explanation:
          "Huruf jar masuk pada kata benda dan membuat akhirannya berharakat kasrah. Yang paling sering dipakai: مِنْ (dari), فِي (di dalam), إِلَى (ke), عَلَى (di atas), عَنْ (tentang), بِـ (dengan), لِـ (untuk).",
        pattern: [
          { label: "di rumah sakit", ar: "فِي الْمُسْتَشْفَى" },
          { label: "ke dokter", ar: "إِلَى الطَّبِيبِ" },
          { label: "tentang penyakit", ar: "عَنِ الْمَرَضِ" },
        ],
        examples: [
          {
            ar: "ذَهَبْتُ إِلَى الطَّبِيبِ",
            id: "Aku pergi ke dokter",
            highlights: [
              { wordIndex: 0, role: "verb" },
              { wordIndex: 1, role: "harf" },
            ],
          },
          {
            ar: "أَشْعُرُ بِأَلَمٍ فِي رَأْسِي",
            id: "Aku merasakan sakit di kepalaku",
            highlights: [
              { wordIndex: 0, role: "verb" },
              { wordIndex: 2, role: "harf" },
            ],
          },
        ],
      },
      {
        title: "Lā penafi",
        titleAr: "لَا النَّافِيَةُ",
        explanation:
          "لَا yang masuk pada fi'il mudhari' berarti 'tidak' — menyatakan sesuatu yang tidak dilakukan, tanpa mengubah bentuk akhir kata kerjanya.",
        pattern: [
          { label: "Aku tidak merokok", ar: "لَا أُدَخِّنُ" },
          { label: "Dia tidak tidur larut", ar: "لَا يَنَامُ مُتَأَخِّرًا" },
        ],
        examples: [
          {
            ar: "لَا آكُلُ الْحَلْوَى كَثِيرًا",
            id: "Aku tidak banyak makan manisan",
            highlights: [
              { wordIndex: 0, role: "harf" },
              { wordIndex: 1, role: "verb" },
            ],
          },
        ],
      },
    ],
    ashwat: {
      title: "Hamzah qath' dan alif washal",
      titleAr: "هَمْزَةُ الْقَطْعِ وَأَلِفُ الْوَصْلِ",
      explanation:
        "Hamzah qath' (أ) selalu terdengar di mana pun letaknya. Alif washal (ا) hanya terdengar di awal ucapan; kalau ada kata sebelumnya, bunyinya hilang dan langsung disambung.",
      leftLabel: "Hamzah qath' — selalu dibaca",
      rightLabel: "Alif washal — hilang saat disambung",
      contrasts: [
        {
          left: { ar: "أُسْرَة", translit: "usrah", id: "keluarga" },
          right: { ar: "اِسْم", translit: "ism", id: "nama" },
        },
        {
          left: { ar: "أَكْرَمَ", translit: "akrama", id: "(dia) memuliakan" },
          right: { ar: "اِنْتَظَرَ", translit: "intazhara", id: "(dia) menunggu" },
        },
        {
          left: { ar: "أَحْمَد", translit: "Ahmad", id: "Ahmad (nama)" },
          right: { ar: "اِبْن", translit: "ibn", id: "anak (laki-laki)" },
        },
      ],
      tip: "Uji dengan menambahkan وَ di depannya: وَأَحْمَد tetap terdengar 'wa-Ahmad', tetapi وَابْن berubah jadi 'wabnu' — alifnya hilang.",
    },
    dialogue: [
      { speaker: "الطبيب", ar: "مَا الَّذِي تَشْكُو مِنْهُ؟", id: "Apa keluhan Anda?" },
      { speaker: "المريض", ar: "أَشْعُرُ بِصُدَاعٍ شَدِيدٍ مُنْذُ يَوْمَيْنِ", id: "Saya merasakan sakit kepala berat sejak dua hari" },
      { speaker: "الطبيب", ar: "هَلْ تَنَامُ جَيِّدًا؟", id: "Apakah Anda tidur dengan nyenyak?" },
      { speaker: "المريض", ar: "لَا، أَنَامُ قَلِيلًا وَأَعْمَلُ كَثِيرًا", id: "Tidak, saya tidur sedikit dan bekerja banyak" },
      { speaker: "الطبيب", ar: "خُذْ هَذَا الدَّوَاءَ، وَلَا تَشْرَبِ الْقَهْوَةَ لَيْلًا", id: "Minumlah obat ini, dan jangan minum kopi di malam hari" },
      { speaker: "المريض", ar: "شُكْرًا لَكَ، سَأَلْتَزِمُ بِنَصِيحَتِكَ", id: "Terima kasih, saya akan mengikuti nasihat Anda" },
    ],
    quiz: [
      {
        type: "mcq",
        prompt: "'حِمْيَة' artinya...",
        options: ["Pengobatan", "Diet / pantangan makan", "Istirahat", "Sakit kepala"],
        answerIndex: 1,
      },
      {
        type: "listen",
        audioText: "أَشْعُرُ بِصُدَاعٍ شَدِيدٍ",
        options: [
          "Saya merasa lelah sekali",
          "Saya merasakan sakit kepala yang berat",
          "Saya butuh istirahat",
          "Saya sudah minum obat",
        ],
        answerIndex: 1,
      },
      {
        type: "fillblank",
        before: "ذَهَبْتُ",
        after: "الطَّبِيبِ",
        wordBox: ["إِلَى", "عَنْ", "مِنْ", "عَلَى"],
        answerIndex: 0,
        translationId: "Aku pergi ke dokter",
      },
      {
        type: "truefalse",
        statementAr: "الدَّوَاءُ يُؤْخَذُ بَعْدَ اسْتِشَارَةِ الطَّبِيبِ",
        statementId: "Obat diminum setelah berkonsultasi dengan dokter",
        answer: true,
      },
      {
        type: "matchpairs",
        instruction: "Jodohkan kata dengan artinya",
        pairs: [
          { a: "صُدَاع", b: "sakit kepala" },
          { a: "دَوَاء", b: "obat" },
          { a: "رَاحَة", b: "istirahat" },
          { a: "عِلَاج", b: "pengobatan" },
        ],
      },
      {
        type: "categorize",
        instruction: "Kelompokkan kata berikut",
        categories: [
          { name: "Keluhan", words: ["صُدَاع", "مَرِيض"] },
          { name: "Penanganan", words: ["دَوَاء", "رَاحَة", "حِمْيَة"] },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Rekreasi",
    titleAr: "التَّرْوِيحُ عَنِ النَّفْسِ",
    theme: "Merencanakan liburan dan membicarakan hobi",
    color: "sky",
    vocabulary: [
      { ar: "عُطْلَة", translit: "'uthlah", id: "liburan", emoji: "🏖️" },
      { ar: "رِحْلَة", translit: "rihlah", id: "perjalanan, tamasya", emoji: "🧳" },
      { ar: "شَاطِئ", translit: "syaathi'", id: "pantai", emoji: "🏝️" },
      { ar: "سِبَاحَة", translit: "sibaahah", id: "berenang", emoji: "🏊" },
      { ar: "نُزْهَة", translit: "nuzhah", id: "piknik, jalan-jalan", emoji: "🧺" },
      { ar: "مَلْعَب", translit: "mal'ab", id: "lapangan", emoji: "⚽" },
      { ar: "هِوَايَة", translit: "hiwaayah", id: "hobi", emoji: "🎨" },
      { ar: "يَسْتَمْتِعُ", translit: "yastamti'u", id: "(dia) menikmati", emoji: "😄" },
    ],
    qawaid: [
      {
        title: "Kata tanya",
        titleAr: "أَدَوَاتُ الِاسْتِفْهَامِ",
        explanation:
          "Tiap kata tanya menanyakan hal yang berbeda: مَنْ (siapa), مَاذَا (apa), لِمَاذَا (mengapa), كَيْفَ (bagaimana), مَتَى (kapan), أَيْنَ (di mana), كَمْ (berapa), هَلْ (apakah — dijawab ya/tidak).",
        pattern: [
          { label: "Kapan?", ar: "مَتَى؟" },
          { label: "Di mana?", ar: "أَيْنَ؟" },
          { label: "Mengapa?", ar: "لِمَاذَا؟" },
        ],
        examples: [
          {
            ar: "مَتَى تَبْدَأُ الْعُطْلَةُ؟",
            id: "Kapan liburan dimulai?",
            highlights: [
              { wordIndex: 0, role: "harf" },
              { wordIndex: 1, role: "verb" },
            ],
          },
          {
            ar: "لِمَاذَا تُحِبُّ السِّبَاحَةَ؟",
            id: "Mengapa kamu suka berenang?",
            highlights: [
              { wordIndex: 0, role: "harf" },
              { wordIndex: 2, role: "object" },
            ],
          },
        ],
      },
      {
        title: "Lā larangan",
        titleAr: "لَا النَّاهِيَةُ",
        explanation:
          "Berbeda dengan لَا penafi, لَا nahiyah dipakai untuk melarang. Akhir kata kerjanya menjadi sukun (majzum).",
        pattern: [
          { label: "Jangan terlambat", ar: "لَا تَتَأَخَّرْ" },
          { label: "Jangan lupa", ar: "لَا تَنْسَ" },
        ],
        examples: [
          {
            ar: "لَا تَنْسَ الْمَاءَ فِي الرِّحْلَةِ",
            id: "Jangan lupa (bawa) air saat perjalanan",
            highlights: [
              { wordIndex: 0, role: "harf" },
              { wordIndex: 1, role: "verb" },
              { wordIndex: 2, role: "object" },
            ],
          },
        ],
      },
    ],
    ashwat: {
      title: "Hamzah pendek dan alif mad",
      titleAr: "الْهَمْزَةُ وَأَلِفُ الْمَدِّ",
      explanation:
        "Hamzah berharakat (أَ) dibaca satu ketukan, sedangkan alif mad (آ) dibaca panjang dua ketukan. Panjang-pendeknya bisa mengubah arti kata.",
      leftLabel: "Hamzah pendek (أَ)",
      rightLabel: "Alif mad (آ) — panjang 2 ketukan",
      contrasts: [
        {
          left: { ar: "أَمِنَ", translit: "amina", id: "(dia) merasa aman" },
          right: { ar: "آمَنَ", translit: "aamana", id: "(dia) beriman" },
        },
        {
          left: { ar: "أَكَلَ", translit: "akala", id: "(dia) makan" },
          right: { ar: "آكُلُ", translit: "aakulu", id: "aku makan" },
        },
        {
          left: { ar: "أَخَذَ", translit: "akhadza", id: "(dia) mengambil" },
          right: { ar: "آخَر", translit: "aakhar", id: "yang lain" },
        },
      ],
      tip: "Tahan bunyi 'aa' selama dua ketukan pada kolom kanan — sepanjang dua kali kolom kiri.",
    },
    dialogue: [
      { speaker: "سالم", ar: "أَيْنَ سَتَقْضِي الْعُطْلَةَ؟", id: "Di mana kamu akan menghabiskan liburan?" },
      { speaker: "بلال", ar: "سَأَذْهَبُ إِلَى الشَّاطِئِ مَعَ أَصْدِقَائِي", id: "Aku akan pergi ke pantai bersama teman-temanku" },
      { speaker: "سالم", ar: "مَاذَا تَفْعَلُونَ هُنَاكَ؟", id: "Apa yang kalian lakukan di sana?" },
      { speaker: "بلال", ar: "نَسْبَحُ وَنَلْعَبُ الْكُرَةَ عَلَى الرَّمْلِ", id: "Kami berenang dan bermain bola di atas pasir" },
      { speaker: "سالم", ar: "فِكْرَةٌ جَمِيلَةٌ! لَا تَنْسَوْا الْمَاءَ وَالطَّعَامَ", id: "Ide yang bagus! Jangan lupa air dan makanan" },
      { speaker: "بلال", ar: "لَنْ نَنْسَى، شُكْرًا لِنَصِيحَتِكَ", id: "Kami tidak akan lupa, terima kasih atas nasihatmu" },
    ],
    quiz: [
      {
        type: "mcq",
        prompt: "'هِوَايَة' artinya...",
        options: ["Liburan", "Hobi", "Perjalanan", "Lapangan"],
        answerIndex: 1,
      },
      {
        type: "fillblank",
        before: "",
        after: "تَبْدَأُ الْعُطْلَةُ؟",
        wordBox: ["مَتَى", "أَيْنَ", "كَمْ", "مَنْ"],
        answerIndex: 0,
        translationId: "Kapan liburan dimulai?",
      },
      {
        type: "listen",
        audioText: "لَا تَنْسَ الْمَاءَ",
        options: [
          "Jangan lupa air",
          "Aku tidak minum air",
          "Air itu dingin",
          "Bawakan aku air",
        ],
        answerIndex: 0,
      },
      {
        type: "truefalse",
        statementAr: "«لِمَاذَا» تُسْتَعْمَلُ لِلسُّؤَالِ عَنِ الْمَكَانِ",
        statementId: "'لِمَاذَا' dipakai untuk menanyakan tempat",
        answer: false,
      },
      {
        type: "matchpairs",
        instruction: "Jodohkan kata tanya dengan fungsinya",
        pairs: [
          { a: "مَتَى", b: "menanyakan waktu" },
          { a: "أَيْنَ", b: "menanyakan tempat" },
          { a: "كَمْ", b: "menanyakan jumlah" },
          { a: "لِمَاذَا", b: "menanyakan sebab" },
        ],
      },
      {
        type: "order",
        promptId: "Susun jadi: 'Aku akan pergi ke pantai'",
        words: ["سَأَذْهَبُ", "إِلَى", "الشَّاطِئِ"],
        correctOrder: [0, 1, 2],
      },
    ],
  },
  {
    id: 3,
    title: "Kehidupan Rumah Tangga",
    titleAr: "الْحَيَاةُ الزَّوْجِيَّةُ",
    theme: "Membicarakan pernikahan, tanggung jawab, dan keharmonisan",
    color: "amber",
    vocabulary: [
      { ar: "زَوَاج", translit: "zawaaj", id: "pernikahan", emoji: "💍" },
      { ar: "خِطْبَة", translit: "khithbah", id: "lamaran", emoji: "💐" },
      { ar: "مَسْؤُولِيَّة", translit: "mas'uuliyyah", id: "tanggung jawab", emoji: "🤲" },
      { ar: "تَفَاهُم", translit: "tafaahum", id: "saling pengertian", emoji: "🤝" },
      { ar: "سَعَادَة", translit: "sa'aadah", id: "kebahagiaan", emoji: "😊" },
      { ar: "خِلَاف", translit: "khilaaf", id: "perselisihan", emoji: "⚡" },
      { ar: "صَبْر", translit: "shabr", id: "kesabaran", emoji: "🌱" },
      { ar: "أَخْلَاق", translit: "akhlaaq", id: "akhlak, perangai", emoji: "✨" },
    ],
    qawaid: [
      {
        title: "Kalimat nominal dan kalimat verbal",
        titleAr: "الْجُمْلَةُ الِاسْمِيَّةُ وَالْجُمْلَةُ الْفِعْلِيَّةُ",
        explanation:
          "Kalimat yang diawali kata benda disebut jumlah ismiyyah (susunannya mubtada' + khabar). Kalimat yang diawali kata kerja disebut jumlah fi'liyyah (fi'il + fa'il).",
        pattern: [
          { label: "Nominal", ar: "الزَّوَاجُ مَسْؤُولِيَّةٌ" },
          { label: "Verbal", ar: "يَحْتَاجُ الزَّوَاجُ إِلَى صَبْرٍ" },
        ],
        examples: [
          {
            ar: "الْأُسْرَةُ أَسَاسُ الْمُجْتَمَعِ",
            id: "Keluarga adalah pondasi masyarakat",
            highlights: [
              { wordIndex: 0, role: "subject" },
              { wordIndex: 1, role: "object" },
            ],
          },
          {
            ar: "يَحْتَاجُ الزَّوَاجُ إِلَى صَبْرٍ",
            id: "Pernikahan membutuhkan kesabaran",
            highlights: [
              { wordIndex: 0, role: "verb" },
              { wordIndex: 1, role: "subject" },
              { wordIndex: 2, role: "harf" },
            ],
          },
        ],
      },
      {
        title: "Kata ganti terpisah",
        titleAr: "ضَمَائِرُ الرَّفْعِ الْمُنْفَصِلَةُ",
        explanation:
          "Kata ganti yang berdiri sendiri, biasa menjadi mubtada' di awal kalimat: أَنَا (aku), نَحْنُ (kami), أَنْتَ (kamu lk), أَنْتِ (kamu pr), هُوَ (dia lk), هِيَ (dia pr), هُمْ (mereka).",
        pattern: [
          { label: "Dia (lk) sabar", ar: "هُوَ صَبُورٌ" },
          { label: "Dia (pr) sabar", ar: "هِيَ صَبُورَةٌ" },
        ],
        examples: [
          {
            ar: "هُوَ زَوْجٌ صَالِحٌ وَهِيَ زَوْجَةٌ صَالِحَةٌ",
            id: "Dia suami yang baik dan dia istri yang baik",
            highlights: [
              { wordIndex: 0, role: "subject" },
              { wordIndex: 3, role: "subject" },
            ],
          },
        ],
      },
    ],
    ashwat: {
      title: "Wawu panjang dan wawu konsonan",
      titleAr: "وَاوُ الْمَدِّ وَوَاوُ اللِّينِ",
      explanation:
        "Wawu bisa menjadi vokal panjang 'uu' (setelah huruf berharakat dhammah), atau menjadi konsonan yang dibaca 'wa'. Perhatikan posisinya dalam kata.",
      leftLabel: "Wawu mad — vokal panjang 'uu'",
      rightLabel: "Wawu konsonan — dibaca 'wa'",
      contrasts: [
        {
          left: { ar: "مَحْمُود", translit: "mahmuud", id: "terpuji" },
          right: { ar: "وَلَد", translit: "walad", id: "anak" },
        },
        {
          left: { ar: "نُور", translit: "nuur", id: "cahaya" },
          right: { ar: "وَرْد", translit: "ward", id: "bunga mawar" },
        },
        {
          left: { ar: "صَبُور", translit: "shabuur", id: "penyabar" },
          right: { ar: "وَعْد", translit: "wa'd", id: "janji" },
        },
      ],
    },
    dialogue: [
      { speaker: "خالد", ar: "سَمِعْتُ أَنَّكَ سَتَتَزَوَّجُ قَرِيبًا", id: "Aku dengar kamu akan segera menikah" },
      { speaker: "فيصل", ar: "نَعَمْ، تَمَّتِ الْخِطْبَةُ الْأُسْبُوعَ الْمَاضِيَ", id: "Ya, lamaran sudah dilakukan minggu lalu" },
      { speaker: "خالد", ar: "مَا أَهَمُّ شَيْءٍ فِي رَأْيِكَ؟", id: "Menurutmu apa hal yang paling penting?" },
      { speaker: "فيصل", ar: "التَّفَاهُمُ وَالْأَخْلَاقُ قَبْلَ كُلِّ شَيْءٍ", id: "Saling pengertian dan akhlak sebelum segalanya" },
      { speaker: "خالد", ar: "صَدَقْتَ، الزَّوَاجُ مَسْؤُولِيَّةٌ كَبِيرَةٌ", id: "Benar, pernikahan itu tanggung jawab yang besar" },
      { speaker: "فيصل", ar: "وَيَحْتَاجُ إِلَى صَبْرٍ طَوِيلٍ", id: "Dan membutuhkan kesabaran yang panjang" },
    ],
    quiz: [
      {
        type: "mcq",
        prompt: "'تَفَاهُم' artinya...",
        options: ["Perselisihan", "Saling pengertian", "Kesabaran", "Tanggung jawab"],
        answerIndex: 1,
      },
      {
        type: "mcq",
        prompt: "Kalimat 'يَحْتَاجُ الزَّوَاجُ إِلَى صَبْرٍ' termasuk jenis kalimat...",
        options: ["Jumlah ismiyyah", "Jumlah fi'liyyah"],
        answerIndex: 1,
      },
      {
        type: "listen",
        audioText: "الزَّوَاجُ مَسْؤُولِيَّةٌ كَبِيرَةٌ",
        options: [
          "Pernikahan itu tanggung jawab yang besar",
          "Pernikahan itu kebahagiaan yang besar",
          "Keluarga itu tanggung jawab bersama",
          "Kesabaran itu sangat penting",
        ],
        answerIndex: 0,
      },
      {
        type: "fillblank",
        before: "",
        after: "زَوْجَةٌ صَالِحَةٌ",
        wordBox: ["هِيَ", "هُوَ", "أَنْتَ", "نَحْنُ"],
        answerIndex: 0,
        translationId: "Dia (perempuan) istri yang salihah",
      },
      {
        type: "truefalse",
        statementAr: "الْجُمْلَةُ الِاسْمِيَّةُ تَبْدَأُ بِفِعْلٍ",
        statementId: "Jumlah ismiyyah diawali dengan kata kerja",
        answer: false,
      },
      {
        type: "matchpairs",
        instruction: "Jodohkan kata ganti dengan artinya",
        pairs: [
          { a: "أَنَا", b: "aku" },
          { a: "نَحْنُ", b: "kami" },
          { a: "هُوَ", b: "dia (laki-laki)" },
          { a: "هِيَ", b: "dia (perempuan)" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Hidup di Kota",
    titleAr: "الْحَيَاةُ فِي الْمَدِينَةِ",
    theme: "Membandingkan kota dan desa, serta menanyakan arah",
    color: "sky",
    vocabulary: [
      { ar: "مَدِينَة", translit: "madiinah", id: "kota", emoji: "🏙️" },
      { ar: "رِيف", translit: "riif", id: "desa, pedesaan", emoji: "🌾" },
      { ar: "زِحَام", translit: "zihaam", id: "kemacetan", emoji: "🚗" },
      { ar: "ضَجِيج", translit: "dhajiij", id: "kebisingan", emoji: "🔊" },
      { ar: "تَلَوُّث", translit: "talawwuts", id: "polusi", emoji: "🏭" },
      { ar: "مُوَاصَلَات", translit: "muwaashalaat", id: "transportasi", emoji: "🚌" },
      { ar: "هُدُوء", translit: "huduu'", id: "ketenangan", emoji: "🍃" },
      { ar: "شَارِع", translit: "syaari'", id: "jalan", emoji: "🛣️" },
    ],
    qawaid: [
      {
        title: "Kata sambung",
        titleAr: "حُرُوفُ الْعَطْفِ",
        explanation:
          "وَ menyambung dua hal tanpa urutan waktu, ثُمَّ menunjukkan urutan berjeda ('lalu'), dan أَوْ menyatakan pilihan ('atau').",
        pattern: [
          { label: "dan", ar: "وَ" },
          { label: "lalu (berurutan)", ar: "ثُمَّ" },
          { label: "atau", ar: "أَوْ" },
        ],
        examples: [
          {
            ar: "أَرْكَبُ الْحَافِلَةَ ثُمَّ أَمْشِي قَلِيلًا",
            id: "Aku naik bus lalu berjalan sedikit",
            highlights: [
              { wordIndex: 0, role: "verb" },
              { wordIndex: 1, role: "object" },
              { wordIndex: 2, role: "harf" },
            ],
          },
        ],
      },
      {
        title: "Mubtada' dan khabar",
        titleAr: "الْمُبْتَدَأُ وَالْخَبَرُ",
        explanation:
          "Mubtada' adalah kata benda yang dibicarakan, khabar adalah keterangan tentangnya. Keduanya berakhiran dhammah dan harus cocok jenis kelaminnya.",
        pattern: [
          { label: "Kota itu padat", ar: "الْمَدِينَةُ مُزْدَحِمَةٌ" },
          { label: "Desa itu tenang", ar: "الرِّيفُ هَادِئٌ" },
        ],
        examples: [
          {
            ar: "الرِّيفُ هَادِئٌ وَجَمِيلٌ",
            id: "Desa itu tenang dan indah",
            highlights: [
              { wordIndex: 0, role: "subject" },
              { wordIndex: 1, role: "object" },
            ],
          },
        ],
      },
    ],
    ashwat: {
      title: "Ya panjang dan ya lin",
      titleAr: "يَاءُ الْمَدِّ وَيَاءُ اللِّينِ",
      explanation:
        "Ya setelah huruf berharakat kasrah dibaca panjang 'ii'. Ya sukun setelah huruf berharakat fathah dibaca 'ai' (bunyi luncur).",
      leftLabel: "Ya mad — vokal panjang 'ii'",
      rightLabel: "Ya lin — dibaca 'ai'",
      contrasts: [
        {
          left: { ar: "كَبِير", translit: "kabiir", id: "besar" },
          right: { ar: "بَيْت", translit: "bait", id: "rumah" },
        },
        {
          left: { ar: "طَوِيل", translit: "thawiil", id: "panjang" },
          right: { ar: "خَيْر", translit: "khair", id: "kebaikan" },
        },
        {
          left: { ar: "جَمِيل", translit: "jamiil", id: "indah" },
          right: { ar: "عَيْن", translit: "'ain", id: "mata" },
        },
      ],
    },
    dialogue: [
      { speaker: "عادل", ar: "كَيْفَ تَجِدُ الْحَيَاةَ فِي الْمَدِينَةِ؟", id: "Bagaimana menurutmu kehidupan di kota?" },
      { speaker: "بشير", ar: "فِيهَا فُرَصٌ كَثِيرَةٌ، لَكِنَّ الزِّحَامَ يُتْعِبُنِي", id: "Di sini banyak peluang, tapi kemacetan melelahkanku" },
      { speaker: "عادل", ar: "وَأَنَا أَشْتَاقُ إِلَى هُدُوءِ الرِّيفِ", id: "Dan aku merindukan ketenangan desa" },
      { speaker: "بشير", ar: "عَفْوًا، أَيْنَ مَحَطَّةُ الْحَافِلَاتِ؟", id: "Permisi, di mana halte bus?" },
      { speaker: "عادل", ar: "اِمْشِ مُسْتَقِيمًا ثُمَّ اِتَّجِهْ يَمِينًا عِنْدَ الْإِشَارَةِ", id: "Jalan lurus lalu belok kanan di lampu lalu lintas" },
      { speaker: "بشير", ar: "شُكْرًا جَزِيلًا عَلَى الْإِرْشَادِ", id: "Terima kasih banyak atas petunjuknya" },
    ],
    quiz: [
      {
        type: "mcq",
        prompt: "'زِحَام' artinya...",
        options: ["Kebisingan", "Kemacetan", "Polusi", "Ketenangan"],
        answerIndex: 1,
      },
      {
        type: "fillblank",
        before: "أَرْكَبُ الْحَافِلَةَ",
        after: "أَمْشِي قَلِيلًا",
        wordBox: ["ثُمَّ", "أَوْ", "لَا", "فِي"],
        answerIndex: 0,
        translationId: "Aku naik bus lalu berjalan sedikit",
      },
      {
        type: "listen",
        audioText: "اِمْشِ مُسْتَقِيمًا ثُمَّ اِتَّجِهْ يَمِينًا",
        options: [
          "Jalan lurus lalu belok kanan",
          "Belok kiri lalu jalan lurus",
          "Naik bus lalu turun di halte",
          "Berhenti di lampu lalu lintas",
        ],
        answerIndex: 0,
      },
      {
        type: "truefalse",
        statementAr: "«أَوْ» حَرْفُ عَطْفٍ يُفِيدُ التَّخْيِيرَ",
        statementId: "'أَوْ' adalah kata sambung yang menyatakan pilihan",
        answer: true,
      },
      {
        type: "categorize",
        instruction: "Kelompokkan sesuai tempatnya",
        categories: [
          { name: "Ciri kota", words: ["زِحَام", "ضَجِيج", "تَلَوُّث"] },
          { name: "Ciri desa", words: ["هُدُوء", "رِيف"] },
        ],
      },
      {
        type: "matchpairs",
        instruction: "Jodohkan kata dengan artinya",
        pairs: [
          { a: "مُوَاصَلَات", b: "transportasi" },
          { a: "شَارِع", b: "jalan" },
          { a: "تَلَوُّث", b: "polusi" },
          { a: "هُدُوء", b: "ketenangan" },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Ilmu dan Belajar",
    titleAr: "الْعِلْمُ وَالتَّعَلُّمُ",
    theme: "Membicarakan pendidikan, penelitian, dan kemajuan peradaban",
    color: "emerald",
    vocabulary: [
      { ar: "عِلْم", translit: "'ilm", id: "ilmu", emoji: "📚" },
      { ar: "حَضَارَة", translit: "hadhaarah", id: "peradaban", emoji: "🏛️" },
      { ar: "بَحْث", translit: "bahts", id: "penelitian", emoji: "🔬" },
      { ar: "اِخْتِرَاع", translit: "ikhtiraa'", id: "penemuan", emoji: "💡" },
      { ar: "مَكْتَبَة", translit: "maktabah", id: "perpustakaan", emoji: "📖" },
      { ar: "مِنْحَة", translit: "minhah", id: "beasiswa", emoji: "🎓" },
      { ar: "تَقَدُّم", translit: "taqaddum", id: "kemajuan", emoji: "📈" },
      { ar: "يَجْتَهِدُ", translit: "yajtahidu", id: "(dia) bersungguh-sungguh", emoji: "💪" },
    ],
    qawaid: [
      {
        title: "Penjazam fi'il mudhari'",
        titleAr: "جَوَازِمُ الْمُضَارِعِ",
        explanation:
          "لَمْ meniadakan pekerjaan yang sudah lewat ('belum/tidak'), sedangkan لَا nahiyah melarang. Keduanya membuat akhir fi'il mudhari' menjadi sukun.",
        pattern: [
          { label: "Dia belum belajar", ar: "لَمْ يَدْرُسْ" },
          { label: "Jangan malas", ar: "لَا تَكْسَلْ" },
        ],
        examples: [
          {
            ar: "لَمْ يَنَمْ حَتَّى أَنْهَى بَحْثَهُ",
            id: "Dia tidak tidur sampai menyelesaikan penelitiannya",
            highlights: [
              { wordIndex: 0, role: "harf" },
              { wordIndex: 1, role: "verb" },
            ],
          },
        ],
      },
      {
        title: "Mudhaf dan mudhaf ilaih",
        titleAr: "الْمُضَافُ وَالْمُضَافُ إِلَيْهِ",
        explanation:
          "Susunan dua kata benda yang menyatakan kepemilikan atau keterkaitan. Kata pertama (mudhaf) tidak memakai ال dan tidak bertanwin; kata kedua (mudhaf ilaih) berakhiran kasrah.",
        pattern: [
          { label: "perpustakaan universitas", ar: "مَكْتَبَةُ الْجَامِعَةِ" },
          { label: "buku pelajaran", ar: "كِتَابُ الدَّرْسِ" },
        ],
        examples: [
          {
            ar: "زُرْتُ مَكْتَبَةَ الْجَامِعَةِ",
            id: "Aku mengunjungi perpustakaan universitas",
            highlights: [
              { wordIndex: 0, role: "verb" },
              { wordIndex: 1, role: "object" },
              { wordIndex: 2, role: "subject" },
            ],
          },
        ],
      },
    ],
    ashwat: {
      title: "Tasydid",
      titleAr: "الشَّدَّةُ",
      explanation:
        "Tasydid menandakan huruf yang dibaca ganda — ditekan dan ditahan sesaat. Kehadirannya bisa mengubah arti kata sepenuhnya.",
      leftLabel: "Tanpa tasydid",
      rightLabel: "Dengan tasydid",
      contrasts: [
        {
          left: { ar: "دَرَسَ", translit: "darasa", id: "(dia) belajar" },
          right: { ar: "دَرَّسَ", translit: "darrasa", id: "(dia) mengajar" },
        },
        {
          left: { ar: "عَلِمَ", translit: "'alima", id: "(dia) mengetahui" },
          right: { ar: "عَلَّمَ", translit: "'allama", id: "(dia) mengajarkan" },
        },
        {
          left: { ar: "فَهِمَ", translit: "fahima", id: "(dia) memahami" },
          right: { ar: "فَهَّمَ", translit: "fahhama", id: "(dia) menjelaskan" },
        },
      ],
      tip: "Satu tasydid mengubah 'belajar' menjadi 'mengajar' — tahan huruf bertasydid kira-kira dua kali lebih lama.",
    },
    dialogue: [
      { speaker: "منصور", ar: "هَلْ حَصَلْتَ عَلَى الْمِنْحَةِ؟", id: "Apakah kamu mendapatkan beasiswa?" },
      { speaker: "طارق", ar: "نَعَمْ، سَأَدْرُسُ فِي الْخَارِجِ السَّنَةَ الْقَادِمَةَ", id: "Ya, aku akan belajar di luar negeri tahun depan" },
      { speaker: "منصور", ar: "مَا تَخَصُّصُكَ؟", id: "Apa jurusanmu?" },
      { speaker: "طارق", ar: "تَارِيخُ الْحَضَارَةِ الْإِسْلَامِيَّةِ", id: "Sejarah peradaban Islam" },
      { speaker: "منصور", ar: "اِجْتَهِدْ وَلَا تُضَيِّعِ الْوَقْتَ", id: "Bersungguh-sungguhlah dan jangan sia-siakan waktu" },
      { speaker: "طارق", ar: "إِنْ شَاءَ اللهُ، لَنْ أُخَيِّبَ ظَنَّكَ", id: "Insya Allah, aku tidak akan mengecewakanmu" },
    ],
    quiz: [
      {
        type: "mcq",
        prompt: "'حَضَارَة' artinya...",
        options: ["Penemuan", "Peradaban", "Penelitian", "Kemajuan"],
        answerIndex: 1,
      },
      {
        type: "mcq",
        prompt: "Bentuk yang benar setelah لَمْ adalah...",
        promptAr: "لَمْ ...",
        options: ["يَدْرُسُ", "يَدْرُسْ", "يَدْرُسَ"],
        answerIndex: 1,
      },
      {
        type: "listen",
        audioText: "زُرْتُ مَكْتَبَةَ الْجَامِعَةِ",
        options: [
          "Aku mengunjungi perpustakaan universitas",
          "Aku belajar di perpustakaan",
          "Perpustakaan universitas itu besar",
          "Aku mencari buku di universitas",
        ],
        answerIndex: 0,
      },
      {
        type: "fillblank",
        before: "زُرْتُ",
        after: "الْجَامِعَةِ",
        wordBox: ["مَكْتَبَةَ", "مَكْتَبَةٌ", "الْمَكْتَبَةُ", "بِمَكْتَبَةٍ"],
        answerIndex: 0,
        translationId: "Aku mengunjungi perpustakaan universitas",
      },
      {
        type: "truefalse",
        statementAr: "الْمُضَافُ لَا يَقْبَلُ التَّنْوِينَ",
        statementId: "Mudhaf tidak boleh bertanwin",
        answer: true,
      },
      {
        type: "matchpairs",
        instruction: "Jodohkan kata dengan artinya",
        pairs: [
          { a: "بَحْث", b: "penelitian" },
          { a: "اِخْتِرَاع", b: "penemuan" },
          { a: "مِنْحَة", b: "beasiswa" },
          { a: "تَقَدُّم", b: "kemajuan" },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Profesi",
    titleAr: "الْمِهَنُ",
    theme: "Melamar pekerjaan dan membicarakan dunia kerja",
    color: "amber",
    vocabulary: [
      { ar: "مِهْنَة", translit: "mihnah", id: "profesi", emoji: "🧑‍💼" },
      { ar: "وَظِيفَة", translit: "wazhiifah", id: "pekerjaan, jabatan", emoji: "📋" },
      { ar: "مُقَابَلَة", translit: "muqaabalah", id: "wawancara", emoji: "🗣️" },
      { ar: "خِبْرَة", translit: "khibrah", id: "pengalaman", emoji: "⭐" },
      { ar: "رَاتِب", translit: "raatib", id: "gaji", emoji: "💰" },
      { ar: "بَطَالَة", translit: "bathaalah", id: "pengangguran", emoji: "📉" },
      { ar: "شَهَادَة", translit: "syahaadah", id: "ijazah", emoji: "📜" },
      { ar: "يَتَقَدَّمُ", translit: "yataqaddamu", id: "(dia) melamar, maju", emoji: "➡️" },
    ],
    qawaid: [
      {
        title: "Kata kerja transitif dan intransitif",
        titleAr: "الْفِعْلُ اللَّازِمُ وَالْمُتَعَدِّي",
        explanation:
          "Fi'il lazim cukup dengan pelakunya saja. Fi'il muta'addi membutuhkan objek (maf'ul bih) yang berakhiran fathah agar maknanya lengkap.",
        pattern: [
          { label: "Lazim (tanpa objek)", ar: "جَلَسَ الْمُوَظَّفُ" },
          { label: "Muta'addi (butuh objek)", ar: "كَتَبَ الْمُوَظَّفُ التَّقْرِيرَ" },
        ],
        examples: [
          {
            ar: "كَتَبَ الْمُوَظَّفُ التَّقْرِيرَ",
            id: "Pegawai itu menulis laporan",
            highlights: [
              { wordIndex: 0, role: "verb" },
              { wordIndex: 1, role: "subject" },
              { wordIndex: 2, role: "object" },
            ],
          },
        ],
      },
      {
        title: "Jamak muannats salim",
        titleAr: "جَمْعُ الْمُؤَنَّثِ السَّالِمِ",
        explanation:
          "Bentuk jamak untuk kata benda perempuan, dibentuk dengan mengganti akhiran ة menjadi ات.",
        pattern: [
          { label: "pegawai (pr) → para pegawai", ar: "مُوَظَّفَة ← مُوَظَّفَات" },
          { label: "ijazah → ijazah-ijazah", ar: "شَهَادَة ← شَهَادَات" },
        ],
        examples: [
          {
            ar: "الْمُوَظَّفَاتُ يَعْمَلْنَ بِجِدٍّ",
            id: "Para pegawai perempuan bekerja dengan giat",
            highlights: [
              { wordIndex: 0, role: "subject" },
              { wordIndex: 1, role: "verb" },
            ],
          },
        ],
      },
    ],
    ashwat: {
      title: "Hamzah washal saat disambung",
      titleAr: "هَمْزَةُ الْوَصْلِ",
      explanation:
        "Kata berawalan hamzah washal terdengar penuh jika berada di awal ucapan, tetapi bunyi hamzahnya hilang ketika ada kata sebelumnya.",
      leftLabel: "Di awal ucapan — terdengar",
      rightLabel: "Saat disambung — hilang",
      contrasts: [
        {
          left: { ar: "اِسْم", translit: "ism", id: "nama" },
          right: { ar: "وَاسْمُهُ", translit: "wasmuhu", id: "dan namanya" },
        },
        {
          left: { ar: "اِبْن", translit: "ibn", id: "anak (laki-laki)" },
          right: { ar: "وَابْنُهُ", translit: "wabnuhu", id: "dan anaknya" },
        },
        {
          left: { ar: "اِنْتَظَرَ", translit: "intazhara", id: "(dia) menunggu" },
          right: { ar: "وَانْتَظَرَ", translit: "wantazhara", id: "dan (dia) menunggu" },
        },
      ],
    },
    dialogue: [
      { speaker: "المدير", ar: "كَمْ سَنَةً مِنَ الْخِبْرَةِ لَدَيْكَ؟", id: "Berapa tahun pengalaman yang Anda miliki?" },
      { speaker: "المتقدم", ar: "لَدَيَّ خَمْسُ سَنَوَاتٍ فِي هَذَا الْمَجَالِ", id: "Saya punya lima tahun di bidang ini" },
      { speaker: "المدير", ar: "لِمَاذَا تَرَكْتَ عَمَلَكَ السَّابِقَ؟", id: "Mengapa Anda meninggalkan pekerjaan sebelumnya?" },
      { speaker: "المتقدم", ar: "بَحَثْتُ عَنْ فُرْصَةٍ أَفْضَلَ لِلتَّطَوُّرِ", id: "Saya mencari kesempatan yang lebih baik untuk berkembang" },
      { speaker: "المدير", ar: "مَتَى تَسْتَطِيعُ الْبَدْءَ؟", id: "Kapan Anda bisa mulai?" },
      { speaker: "المتقدم", ar: "فِي أَيِّ وَقْتٍ تُرِيدُونَ", id: "Kapan saja Anda mau" },
    ],
    quiz: [
      {
        type: "mcq",
        prompt: "'خِبْرَة' artinya...",
        options: ["Gaji", "Pengalaman", "Wawancara", "Ijazah"],
        answerIndex: 1,
      },
      {
        type: "mcq",
        prompt: "Bentuk jamak dari 'مُوَظَّفَة' adalah...",
        options: ["مُوَظَّفُونَ", "مُوَظَّفَات", "مُوَظَّفَانِ"],
        answerIndex: 1,
      },
      {
        type: "listen",
        audioText: "كَمْ سَنَةً مِنَ الْخِبْرَةِ لَدَيْكَ؟",
        options: [
          "Berapa gaji yang Anda inginkan?",
          "Berapa tahun pengalaman yang Anda miliki?",
          "Kapan Anda bisa mulai bekerja?",
          "Di mana Anda bekerja sebelumnya?",
        ],
        answerIndex: 1,
      },
      {
        type: "fillblank",
        before: "كَتَبَ الْمُوَظَّفُ",
        after: "",
        wordBox: ["التَّقْرِيرَ", "التَّقْرِيرُ", "بِالتَّقْرِيرِ"],
        answerIndex: 0,
        translationId: "Pegawai itu menulis laporan",
      },
      {
        type: "truefalse",
        statementAr: "الْفِعْلُ اللَّازِمُ يَحْتَاجُ إِلَى مَفْعُولٍ بِهِ",
        statementId: "Fi'il lazim membutuhkan objek",
        answer: false,
      },
      {
        type: "categorize",
        instruction: "Kelompokkan kata berikut",
        categories: [
          { name: "Proses melamar", words: ["مُقَابَلَة", "شَهَادَة", "خِبْرَة"] },
          { name: "Kondisi kerja", words: ["رَاتِب", "بَطَالَة", "وَظِيفَة"] },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Bahasa Arab",
    titleAr: "اللُّغَةُ الْعَرَبِيَّةُ",
    theme: "Mendaftar kursus dan membicarakan cara menguasai bahasa",
    color: "emerald",
    vocabulary: [
      { ar: "لُغَة", translit: "lughah", id: "bahasa", emoji: "🗣️" },
      { ar: "فُصْحَى", translit: "fushhaa", id: "bahasa Arab baku", emoji: "📘" },
      { ar: "لَهْجَة", translit: "lahjah", id: "dialek", emoji: "💬" },
      { ar: "قَامُوس", translit: "qaamuus", id: "kamus", emoji: "📕" },
      { ar: "نُطْق", translit: "nuthq", id: "pelafalan", emoji: "🔊" },
      { ar: "تَرْجَمَة", translit: "tarjamah", id: "terjemahan", emoji: "🔁" },
      { ar: "قَوَاعِد", translit: "qawaa'id", id: "kaidah, tata bahasa", emoji: "📐" },
      { ar: "يُتْقِنُ", translit: "yutqinu", id: "(dia) menguasai", emoji: "🎯" },
    ],
    qawaid: [
      {
        title: "Kata sambung penghubung",
        titleAr: "الِاسْمُ الْمَوْصُولُ",
        explanation:
          "الَّذِي berarti 'yang' untuk kata benda mudzakkar tunggal, dan الَّتِي untuk muannats tunggal. Keduanya menghubungkan kata benda dengan kalimat penjelasnya.",
        pattern: [
          { label: "yang (mudzakkar)", ar: "الَّذِي" },
          { label: "yang (muannats)", ar: "الَّتِي" },
        ],
        examples: [
          {
            ar: "هَذَا هُوَ الْقَامُوسُ الَّذِي اشْتَرَيْتُهُ",
            id: "Ini kamus yang aku beli",
            highlights: [
              { wordIndex: 2, role: "subject" },
              { wordIndex: 3, role: "harf" },
            ],
          },
          {
            ar: "هَذِهِ هِيَ اللُّغَةُ الَّتِي أُحِبُّهَا",
            id: "Inilah bahasa yang aku cintai",
            highlights: [
              { wordIndex: 2, role: "subject" },
              { wordIndex: 3, role: "harf" },
            ],
          },
        ],
      },
      {
        title: "Kāna dan saudaranya",
        titleAr: "كَانَ وَأَخَوَاتُهَا",
        explanation:
          "كَانَ masuk pada kalimat nominal untuk menyatakan keadaan di masa lampau. Mubtada' tetap berakhiran dhammah (menjadi isim kana), sedangkan khabar berubah menjadi fathah.",
        pattern: [
          { label: "Pelajaran itu mudah", ar: "الدَّرْسُ سَهْلٌ" },
          { label: "Pelajaran itu dulu mudah", ar: "كَانَ الدَّرْسُ سَهْلًا" },
        ],
        examples: [
          {
            ar: "كَانَتِ اللُّغَةُ الْعَرَبِيَّةُ صَعْبَةً فِي الْبِدَايَةِ",
            id: "Bahasa Arab dulu terasa sulit di awal",
            highlights: [
              { wordIndex: 0, role: "verb" },
              { wordIndex: 1, role: "subject" },
              { wordIndex: 3, role: "object" },
            ],
          },
        ],
      },
    ],
    ashwat: {
      title: "Hamzah washal dan hamzah qath'",
      titleAr: "هَمْزَةُ الْوَصْلِ وَهَمْزَةُ الْقَطْعِ",
      explanation:
        "Hamzah qath' ditulis dengan tanda (أ / إ) dan selalu dibaca. Hamzah washal ditulis polos (ا) dan hanya dibaca di awal ucapan. Membedakannya penting agar bacaan tidak salah.",
      leftLabel: "Hamzah qath' (أ / إ)",
      rightLabel: "Hamzah washal (ا)",
      contrasts: [
        {
          left: { ar: "أَكْرَمَ", translit: "akrama", id: "(dia) memuliakan" },
          right: { ar: "اِسْتَمَعَ", translit: "istama'a", id: "(dia) mendengarkan" },
        },
        {
          left: { ar: "أَخْبَرَ", translit: "akhbara", id: "(dia) mengabarkan" },
          right: { ar: "اِنْتَقَلَ", translit: "intaqala", id: "(dia) pindah" },
        },
        {
          left: { ar: "أَنْتَ", translit: "anta", id: "kamu (laki-laki)" },
          right: { ar: "اِثْنَانِ", translit: "itsnaani", id: "dua" },
        },
      ],
      tip: "Pola praktis: kata kerja berpola اِفْتَعَلَ dan اِسْتَفْعَلَ selalu berhamzah washal.",
    },
    dialogue: [
      { speaker: "الموظف", ar: "أَهْلًا وَسَهْلًا، كَيْفَ أُسَاعِدُكَ؟", id: "Selamat datang, ada yang bisa saya bantu?" },
      { speaker: "الطالب", ar: "أُرِيدُ الِالْتِحَاقَ بِدَوْرَةِ اللُّغَةِ الْعَرَبِيَّةِ", id: "Saya ingin mendaftar kursus bahasa Arab" },
      { speaker: "الموظف", ar: "هَلْ دَرَسْتَ الْعَرَبِيَّةَ مِنْ قَبْلُ؟", id: "Apakah Anda pernah belajar bahasa Arab sebelumnya?" },
      { speaker: "الطالب", ar: "نَعَمْ، لَكِنَّ نُطْقِي مَا زَالَ ضَعِيفًا", id: "Ya, tetapi pelafalan saya masih lemah" },
      { speaker: "الموظف", ar: "لَا تَقْلَقْ، الْمُهِمُّ أَنْ تُمَارِسَ كُلَّ يَوْمٍ", id: "Jangan khawatir, yang penting berlatih setiap hari" },
      { speaker: "الطالب", ar: "هَلْ تَنْصَحُنِي بِقَامُوسٍ مُنَاسِبٍ؟", id: "Apakah Anda menyarankan kamus yang cocok?" },
    ],
    quiz: [
      {
        type: "mcq",
        prompt: "'لَهْجَة' artinya...",
        options: ["Bahasa baku", "Dialek", "Pelafalan", "Terjemahan"],
        answerIndex: 1,
      },
      {
        type: "fillblank",
        before: "هَذِهِ هِيَ اللُّغَةُ",
        after: "أُحِبُّهَا",
        wordBox: ["الَّتِي", "الَّذِي", "الَّذِينَ"],
        answerIndex: 0,
        translationId: "Inilah bahasa yang aku cintai",
      },
      {
        type: "mcq",
        prompt: "Bentuk khabar yang benar setelah كَانَ: 'كَانَ الدَّرْسُ ...'",
        options: ["سَهْلٌ", "سَهْلًا", "سَهْلٍ"],
        answerIndex: 1,
      },
      {
        type: "listen",
        audioText: "أُرِيدُ الِالْتِحَاقَ بِدَوْرَةِ اللُّغَةِ الْعَرَبِيَّةِ",
        options: [
          "Saya ingin mendaftar kursus bahasa Arab",
          "Saya sedang belajar bahasa Arab",
          "Saya mencari guru bahasa Arab",
          "Saya suka bahasa Arab",
        ],
        answerIndex: 0,
      },
      {
        type: "truefalse",
        statementAr: "الْفِعْلُ «اِسْتَمَعَ» يَبْدَأُ بِهَمْزَةِ وَصْلٍ",
        statementId: "Kata kerja 'اِسْتَمَعَ' diawali hamzah washal",
        answer: true,
      },
      {
        type: "matchpairs",
        instruction: "Jodohkan kata dengan artinya",
        pairs: [
          { a: "قَامُوس", b: "kamus" },
          { a: "نُطْق", b: "pelafalan" },
          { a: "تَرْجَمَة", b: "terjemahan" },
          { a: "قَوَاعِد", b: "tata bahasa" },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Penghargaan",
    titleAr: "الْجَوَائِزُ",
    theme: "Mengucapkan selamat dan membicarakan lomba serta prestasi",
    color: "sky",
    vocabulary: [
      { ar: "جَائِزَة", translit: "jaa'izah", id: "penghargaan, hadiah", emoji: "🏆" },
      { ar: "مُسَابَقَة", translit: "musaabaqah", id: "lomba", emoji: "🥇" },
      { ar: "فَوْز", translit: "fauz", id: "kemenangan", emoji: "🎉" },
      { ar: "تَهْنِئَة", translit: "tahni'ah", id: "ucapan selamat", emoji: "🎊" },
      { ar: "تَفَوُّق", translit: "tafawwuq", id: "keunggulan, prestasi", emoji: "⭐" },
      { ar: "جُهْد", translit: "juhd", id: "usaha, jerih payah", emoji: "🔥" },
      { ar: "مُشَارِك", translit: "musyaarik", id: "peserta", emoji: "🙋" },
      { ar: "يَسْتَحِقُّ", translit: "yastahiqqu", id: "(dia) berhak, layak", emoji: "✅" },
    ],
    qawaid: [
      {
        title: "Jamak mudzakkar salim",
        titleAr: "جَمْعُ الْمُذَكَّرِ السَّالِمِ",
        explanation:
          "Bentuk jamak untuk kata benda laki-laki berakal. Akhirannya ونَ ketika berkedudukan rafa', dan ينَ ketika nashab atau jar.",
        pattern: [
          { label: "Rafa' (subjek)", ar: "مُشَارِكُونَ" },
          { label: "Nashab / jar", ar: "مُشَارِكِينَ" },
        ],
        examples: [
          {
            ar: "الْفَائِزُونَ يَسْتَحِقُّونَ التَّهْنِئَةَ",
            id: "Para pemenang berhak mendapat ucapan selamat",
            highlights: [
              { wordIndex: 0, role: "subject" },
              { wordIndex: 1, role: "verb" },
              { wordIndex: 2, role: "object" },
            ],
          },
        ],
      },
      {
        title: "An dan lan penashab",
        titleAr: "أَنْ وَلَنْ النَّاصِبَتَانِ",
        explanation:
          "أَنْ ('untuk/bahwa') dan لَنْ ('tidak akan') membuat akhir fi'il mudhari' berharakat fathah.",
        pattern: [
          { label: "Aku ingin ikut serta", ar: "أُرِيدُ أَنْ أُشَارِكَ" },
          { label: "Dia tidak akan menang", ar: "لَنْ يَفُوزَ" },
        ],
        examples: [
          {
            ar: "لَنْ يَفُوزَ إِلَّا الْمُجْتَهِدُ",
            id: "Tidak akan menang kecuali orang yang bersungguh-sungguh",
            highlights: [
              { wordIndex: 0, role: "harf" },
              { wordIndex: 1, role: "verb" },
              { wordIndex: 3, role: "subject" },
            ],
          },
        ],
      },
    ],
    ashwat: {
      title: "Tanwin",
      titleAr: "التَّنْوِينُ",
      explanation:
        "Tanwin adalah bunyi 'n' di akhir kata benda tak tentu. Bentuknya mengikuti kedudukan kata: dhamm (un) untuk rafa', fath (an) untuk nashab, kasr (in) untuk jar.",
      leftLabel: "Tanwin dhamm (ٌ) — rafa'",
      rightLabel: "Tanwin fath / kasr (ً ٍ)",
      contrasts: [
        {
          left: { ar: "كِتَابٌ", translit: "kitaabun", id: "sebuah buku (subjek)" },
          right: { ar: "كِتَابًا", translit: "kitaaban", id: "sebuah buku (objek)" },
        },
        {
          left: { ar: "جَائِزَةٌ", translit: "jaa'izatun", id: "sebuah hadiah (subjek)" },
          right: { ar: "جَائِزَةٍ", translit: "jaa'izatin", id: "sebuah hadiah (setelah huruf jar)" },
        },
        {
          left: { ar: "طَالِبٌ", translit: "thaalibun", id: "seorang murid (subjek)" },
          right: { ar: "طَالِبًا", translit: "thaaliban", id: "seorang murid (objek)" },
        },
      ],
      tip: "Saat berhenti (waqaf), tanwin fath dibaca panjang 'aa', sedangkan tanwin dhamm dan kasr tidak terdengar.",
    },
    dialogue: [
      { speaker: "سعاد", ar: "مَبْرُوكٌ! سَمِعْتُ أَنَّكِ فُزْتِ بِالْجَائِزَةِ الْأُولَى", id: "Selamat! Aku dengar kamu memenangkan hadiah pertama" },
      { speaker: "ريم", ar: "شُكْرًا جَزِيلًا، لَمْ أَتَوَقَّعْ ذَلِكَ", id: "Terima kasih banyak, aku tidak menyangka" },
      { speaker: "سعاد", ar: "أَنْتِ تَسْتَحِقِّينَ ذَلِكَ بَعْدَ جُهْدٍ طَوِيلٍ", id: "Kamu layak mendapatkannya setelah usaha yang panjang" },
      { speaker: "ريم", ar: "كُلُّ الْمُشَارِكِينَ كَانُوا مُتَفَوِّقِينَ", id: "Semua peserta sangat berprestasi" },
      { speaker: "سعاد", ar: "بَارَكَ اللهُ فِيكِ، وَإِلَى نَجَاحٍ أَكْبَرَ", id: "Semoga Allah memberkahimu, menuju sukses yang lebih besar" },
      { speaker: "ريم", ar: "آمِينَ، وَلَنْ أَتَوَقَّفَ عَنِ الْمُحَاوَلَةِ", id: "Amin, dan aku tidak akan berhenti mencoba" },
    ],
    quiz: [
      {
        type: "mcq",
        prompt: "'تَهْنِئَة' artinya...",
        options: ["Kemenangan", "Ucapan selamat", "Lomba", "Peserta"],
        answerIndex: 1,
      },
      {
        type: "mcq",
        prompt: "Bentuk yang benar: 'لَنْ ...' ",
        options: ["يَفُوزُ", "يَفُوزَ", "يَفُزْ"],
        answerIndex: 1,
      },
      {
        type: "listen",
        audioText: "مَبْرُوكٌ! فُزْتِ بِالْجَائِزَةِ الْأُولَى",
        options: [
          "Selamat! Kamu memenangkan hadiah pertama",
          "Selamat! Kamu lulus ujian",
          "Semoga kamu menang tahun depan",
          "Siapa yang memenangkan lomba?",
        ],
        answerIndex: 0,
      },
      {
        type: "fillblank",
        before: "",
        after: "يَسْتَحِقُّونَ التَّهْنِئَةَ",
        wordBox: ["الْفَائِزُونَ", "الْفَائِزِينَ", "الْفَائِزَ"],
        answerIndex: 0,
        translationId: "Para pemenang berhak mendapat ucapan selamat",
      },
      {
        type: "truefalse",
        statementAr: "جَمْعُ الْمُذَكَّرِ السَّالِمِ يَنْتَهِي بِـ«ينَ» فِي حَالَةِ الرَّفْعِ",
        statementId: "Jamak mudzakkar salim berakhiran 'ينَ' saat berkedudukan rafa'",
        answer: false,
      },
      {
        type: "order",
        promptId: "Susun jadi: 'Aku ingin ikut serta dalam lomba'",
        words: ["أُرِيدُ", "أَنْ", "أُشَارِكَ", "فِي", "الْمُسَابَقَةِ"],
        correctOrder: [0, 1, 2, 3, 4],
      },
    ],
  },
];

export function getUnit(id: number): Unit | undefined {
  return units.find((u) => u.id === id);
}
