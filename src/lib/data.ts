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
    istima: {
      title: "Kesehatan itu mahkota",
      titleAr: "الصِّحَّةُ تَاجٌ",
      intro: {
        ar: "الصِّحَّةُ نِعْمَةٌ عَظِيمَةٌ لَا يَعْرِفُ قَدْرَهَا إِلَّا مَنْ فَقَدَهَا. وَالْعِنَايَةُ بِالصِّحَّةِ لَا تَحْتَاجُ إِلَى مَالٍ كَثِيرٍ، بَلْ تَبْدَأُ مِنْ عَادَاتٍ صَغِيرَةٍ نُكَرِّرُهَا كُلَّ يَوْمٍ.",
        id: "Kesehatan adalah nikmat besar yang nilainya hanya diketahui oleh orang yang telah kehilangannya. Menjaga kesehatan tidak butuh biaya besar, tetapi dimulai dari kebiasaan-kebiasaan kecil yang kita ulangi setiap hari.",
      },
      items: [
        {
          ar: "يَنْصَحُ الْأَطِبَّاءُ بِشُرْبِ ثَمَانِيَةِ أَكْوَابٍ مِنَ الْمَاءِ يَوْمِيًّا، خَاصَّةً فِي أَيَّامِ الصَّيْفِ الْحَارَّةِ.",
          id: "Para dokter menganjurkan minum delapan gelas air setiap hari, terutama pada hari-hari musim panas yang terik.",
          question: "Berapa gelas air yang dianjurkan setiap hari?",
          options: ["Lima gelas", "Enam gelas", "Delapan gelas", "Sepuluh gelas"],
          answerIndex: 2,
        },
        {
          ar: "مَنْ نَامَ مُبَكِّرًا اسْتَيْقَظَ نَشِيطًا، وَمَنْ سَهِرَ طَوِيلًا أَمَامَ الشَّاشَةِ شَعَرَ بِالتَّعَبِ فِي الصَّبَاحِ.",
          id: "Siapa yang tidur lebih awal akan bangun dengan segar, dan siapa yang begadang lama di depan layar akan merasa lelah di pagi hari.",
          question: "Apa akibat begadang menurut teks?",
          options: [
            "Bangun dalam keadaan segar",
            "Merasa lelah di pagi hari",
            "Tidak berpengaruh apa pun",
            "Nafsu makan bertambah",
          ],
          answerIndex: 1,
        },
        {
          ar: "الْمَشْيُ نِصْفَ سَاعَةٍ كُلَّ يَوْمٍ يُقَوِّي الْقَلْبَ وَيُخَفِّفُ التَّوَتُّرَ بَعْدَ يَوْمِ عَمَلٍ طَوِيلٍ.",
          id: "Berjalan kaki setengah jam setiap hari menguatkan jantung dan meredakan stres setelah hari kerja yang panjang.",
          question: "Apa manfaat berjalan kaki setengah jam?",
          options: [
            "Menguatkan jantung dan meredakan stres",
            "Menambah berat badan",
            "Menyembuhkan demam",
            "Menajamkan penglihatan",
          ],
          answerIndex: 0,
        },
        {
          ar: "إِذَا اسْتَمَرَّ الْأَلَمُ أَكْثَرَ مِنْ ثَلَاثَةِ أَيَّامٍ فَلَا تَتَأَخَّرْ عَنْ زِيَارَةِ الطَّبِيبِ، وَلَا تَعْتَمِدْ عَلَى وَصْفَةِ صَدِيقٍ.",
          id: "Jika rasa sakit berlanjut lebih dari tiga hari, jangan menunda berkunjung ke dokter, dan jangan mengandalkan resep dari teman.",
          question: "Kapan seseorang harus pergi ke dokter?",
          options: [
            "Setelah satu hari sakit",
            "Jika nyeri berlanjut lebih dari tiga hari",
            "Setelah satu bulan",
            "Cukup meminta resep kepada teman",
          ],
          answerIndex: 1,
        },
      ],
    },
    dialogues: [
      {
        title: "Di klinik",
        titleAr: "فِي الْعِيَادَةِ",
        setting: "Seorang pasien datang ke klinik dan menemui dokter.",
        lines: [
          { speaker: "الطبيب", ar: "تَفَضَّلْ بِالْجُلُوسِ. مَا الَّذِي تَشْكُو مِنْهُ؟", id: "Silakan duduk. Apa keluhan Anda?" },
          { speaker: "المريض", ar: "أَشْعُرُ بِصُدَاعٍ شَدِيدٍ مُنْذُ يَوْمَيْنِ، وَلَا يَذْهَبُ الْأَلَمُ أَبَدًا.", id: "Saya merasakan sakit kepala berat sejak dua hari, dan sakitnya tidak hilang sama sekali." },
          { speaker: "الطبيب", ar: "هَلْ يَزْدَادُ الْأَلَمُ فِي وَقْتٍ مُعَيَّنٍ مِنَ الْيَوْمِ؟", id: "Apakah sakitnya bertambah pada waktu tertentu?" },
          { speaker: "المريض", ar: "نَعَمْ، يَزْدَادُ فِي آخِرِ النَّهَارِ بَعْدَ سَاعَاتِ الْعَمَلِ الطَّوِيلَةِ.", id: "Ya, bertambah di sore hari setelah jam kerja yang panjang." },
          { speaker: "الطبيب", ar: "وَكَمْ سَاعَةً تَنَامُ فِي اللَّيْلَةِ الْوَاحِدَةِ؟", id: "Dan berapa jam Anda tidur dalam semalam?" },
          { speaker: "المريض", ar: "أَرْبَعَ سَاعَاتٍ تَقْرِيبًا. أَنَامُ قَلِيلًا وَأَعْمَلُ كَثِيرًا.", id: "Kira-kira empat jam. Saya tidur sedikit dan bekerja banyak." },
          { speaker: "الطبيب", ar: "هَذَا هُوَ السَّبَبُ. وَهَلْ تَشْرَبُ الْقَهْوَةَ فِي اللَّيْلِ؟", id: "Inilah sebabnya. Apakah Anda minum kopi di malam hari?" },
          { speaker: "المريض", ar: "أَشْرَبُ ثَلَاثَةَ أَكْوَابٍ عَلَى الْأَقَلِّ حَتَّى أَبْقَى مُسْتَيْقِظًا.", id: "Saya minum paling sedikit tiga gelas supaya tetap terjaga." },
          { speaker: "الطبيب", ar: "لَا تَشْرَبِ الْقَهْوَةَ بَعْدَ الْمَغْرِبِ، وَنَمْ سَبْعَ سَاعَاتٍ عَلَى الْأَقَلِّ.", id: "Jangan minum kopi setelah magrib, dan tidurlah minimal tujuh jam." },
          { speaker: "المريض", ar: "وَهَلْ أَحْتَاجُ إِلَى فَحْصٍ أَوْ تَحْلِيلٍ؟", id: "Apakah saya perlu pemeriksaan atau tes laboratorium?" },
          { speaker: "الطبيب", ar: "لَا، لَيْسَ الْآنَ. سَأَكْتُبُ لَكَ دَوَاءً خَفِيفًا لِمُدَّةِ أُسْبُوعٍ.", id: "Tidak, belum perlu sekarang. Saya akan menuliskan obat ringan untuk seminggu." },
          { speaker: "المريض", ar: "وَمَتَى أَعُودُ إِلَيْكَ؟", id: "Kapan saya harus kembali ke Anda?" },
          { speaker: "الطبيب", ar: "بَعْدَ أُسْبُوعٍ. وَإِنْ لَمْ يَتَحَسَّنِ الْأَلَمُ فَسَنُعِيدُ النَّظَرَ.", id: "Setelah seminggu. Kalau sakitnya tidak membaik, kita akan tinjau ulang." },
          { speaker: "المريض", ar: "شُكْرًا لَكَ يَا دُكْتُور، سَأَلْتَزِمُ بِنَصِيحَتِكَ.", id: "Terima kasih, Dokter. Saya akan mengikuti nasihat Anda." },
        ],
      },
      {
        title: "Nasihat seorang teman",
        titleAr: "نَصِيحَةُ صَدِيقٍ",
        setting: "Dua teman bertemu di kantor dan membicarakan kebiasaan makan.",
        lines: [
          { speaker: "سَالِم", ar: "وَجْهُكَ شَاحِبٌ يَا خَالِد. هَلْ أَنْتَ بِخَيْرٍ؟", id: "Wajahmu pucat, Khalid. Apakah kamu baik-baik saja?" },
          { speaker: "خَالِد", ar: "لَسْتُ مَرِيضًا، وَلَكِنِّي أَشْعُرُ بِالتَّعَبِ طُولَ الْيَوْمِ.", id: "Aku tidak sakit, tetapi aku merasa lelah sepanjang hari." },
          { speaker: "سَالِم", ar: "مَاذَا تَأْكُلُ فِي الصَّبَاحِ عَادَةً؟", id: "Biasanya kamu makan apa di pagi hari?" },
          { speaker: "خَالِد", ar: "لَا آكُلُ شَيْئًا. أَخْرُجُ مِنَ الْبَيْتِ مُسْرِعًا كُلَّ صَبَاحٍ.", id: "Aku tidak makan apa pun. Setiap pagi aku keluar rumah terburu-buru." },
          { speaker: "سَالِم", ar: "هَذِهِ عَادَةٌ سَيِّئَةٌ. الْفَطُورُ يُعْطِي الْجِسْمَ طَاقَتَهُ الْأُولَى.", id: "Itu kebiasaan buruk. Sarapan memberi tubuh energi pertamanya." },
          { speaker: "خَالِد", ar: "وَلَكِنَّنِي لَا أَجِدُ وَقْتًا كَافِيًا فِي الصَّبَاحِ.", id: "Tetapi aku tidak punya cukup waktu di pagi hari." },
          { speaker: "سَالِم", ar: "يَكْفِيكَ عَشْرُ دَقَائِقَ: تَمْرٌ وَلَبَنٌ وَبَعْضُ الْفَاكِهَةِ.", id: "Sepuluh menit sudah cukup: kurma, susu, dan sedikit buah." },
          { speaker: "خَالِد", ar: "وَمَاذَا عَنِ الْغَدَاءِ؟ أَنَا آكُلُ فِي الْمَطْعَمِ كُلَّ يَوْمٍ.", id: "Bagaimana dengan makan siang? Aku makan di restoran setiap hari." },
          { speaker: "سَالِم", ar: "قَلِّلْ مِنَ الْمَقْلِيَّاتِ، وَأَكْثِرْ مِنَ الْخُضَارِ وَالسَّلَطَةِ.", id: "Kurangi gorengan, dan perbanyak sayur serta salad." },
          { speaker: "خَالِد", ar: "أَخْشَى أَنَّ هَذَا صَعْبٌ عَلَيَّ فِي الْبِدَايَةِ.", id: "Aku khawatir itu berat bagiku pada awalnya." },
          { speaker: "سَالِم", ar: "لَا تُغَيِّرْ كُلَّ شَيْءٍ مَرَّةً وَاحِدَةً. اِبْدَأْ بِعَادَةٍ وَاحِدَةٍ فَقَطْ.", id: "Jangan mengubah semuanya sekaligus. Mulailah dengan satu kebiasaan saja." },
          { speaker: "خَالِد", ar: "حَسَنًا، سَأَبْدَأُ بِالْفَطُورِ مِنْ غَدٍ إِنْ شَاءَ اللهُ.", id: "Baiklah, aku akan mulai dari sarapan besok, insya Allah." },
          { speaker: "سَالِم", ar: "وَبَعْدَ شَهْرٍ سَتَشْعُرُ بِالْفَرْقِ بِنَفْسِكَ.", id: "Dan setelah sebulan kamu akan merasakan sendiri perbedaannya." },
        ],
      },
    ],
    qiraah: {
      title: "Kebiasaan kecil, tubuh yang sehat",
      titleAr: "عَادَاتٌ صَغِيرَةٌ وَجِسْمٌ سَلِيمٌ",
      preVocab: [
        { ar: "مَنَاعَة", translit: "manaa'ah", id: "kekebalan tubuh" },
        { ar: "وِقَايَة", translit: "wiqaayah", id: "pencegahan" },
        { ar: "عَادَة", translit: "'aadah", id: "kebiasaan" },
        { ar: "تَوَتُّر", translit: "tawattur", id: "ketegangan, stres" },
        { ar: "مُتَوَازِن", translit: "mutawaazin", id: "seimbang" },
        { ar: "يَتَجَنَّبُ", translit: "yatajannabu", id: "(dia) menghindari" },
        { ar: "يُقَوِّي", translit: "yuqawwii", id: "(dia) menguatkan" },
        { ar: "جِسْم سَلِيم", translit: "jism saliim", id: "tubuh yang sehat" },
      ],
      paragraphs: [
        {
          ar: "يَظُنُّ كَثِيرٌ مِنَ النَّاسِ أَنَّ الْعِنَايَةَ بِالصِّحَّةِ تَحْتَاجُ إِلَى مَالٍ كَثِيرٍ وَوَقْتٍ طَوِيلٍ، وَأَنَّهَا لَا تَكُونُ إِلَّا فِي الْمُسْتَشْفَيَاتِ وَالنَّوَادِي الرِّيَاضِيَّةِ الْغَالِيَةِ. وَالْحَقِيقَةُ غَيْرُ ذَلِكَ؛ فَإِنَّ الصِّحَّةَ تُبْنَى مِنْ عَادَاتٍ صَغِيرَةٍ يُكَرِّرُهَا الْإِنْسَانُ كُلَّ يَوْمٍ حَتَّى تَصِيرَ جُزْءًا مِنْ حَيَاتِهِ.",
          id: "Banyak orang mengira bahwa menjaga kesehatan membutuhkan banyak uang dan waktu panjang, dan bahwa itu hanya bisa dilakukan di rumah sakit dan klub olahraga yang mahal. Kenyataannya tidak demikian; kesehatan dibangun dari kebiasaan-kebiasaan kecil yang diulang seseorang setiap hari hingga menjadi bagian dari hidupnya.",
        },
        {
          ar: "وَأَوَّلُ هَذِهِ الْعَادَاتِ هُوَ الْغِذَاءُ الْمُتَوَازِنُ. فَالْجِسْمُ يَحْتَاجُ إِلَى أَنْوَاعٍ مُخْتَلِفَةٍ مِنَ الطَّعَامِ: الْخُضَارِ وَالْفَاكِهَةِ وَالْحُبُوبِ وَاللُّحُومِ. وَمَنِ اكْتَفَى بِنَوْعٍ وَاحِدٍ حَرَمَ جِسْمَهُ مِمَّا يَحْتَاجُ إِلَيْهِ. وَلَيْسَ الْمَقْصُودُ أَنْ يَتْرُكَ الْإِنْسَانُ مَا يُحِبُّ مِنَ الطَّعَامِ، وَلَكِنْ أَنْ يَتَجَنَّبَ الْإِسْرَافَ فِيهِ.",
          id: "Kebiasaan yang pertama adalah pola makan yang seimbang. Tubuh membutuhkan berbagai jenis makanan: sayur, buah, biji-bijian, dan daging. Siapa yang mencukupkan diri dengan satu jenis saja berarti telah menghalangi tubuhnya dari apa yang ia butuhkan. Maksudnya bukan meninggalkan makanan yang disukai, melainkan menghindari berlebihan dalam menyantapnya.",
        },
        {
          ar: "أَمَّا الْعَادَةُ الثَّانِيَةُ فَهِيَ الْحَرَكَةُ. لَا يَحْتَاجُ الْإِنْسَانُ إِلَى رِيَاضَةٍ شَاقَّةٍ، بَلْ يَكْفِيهِ أَنْ يَمْشِيَ نِصْفَ سَاعَةٍ فِي الْيَوْمِ. فَالْمَشْيُ يُقَوِّي الْقَلْبَ، وَيُنَشِّطُ الدَّوْرَةَ الدَّمَوِيَّةَ، وَيُخَفِّفُ التَّوَتُّرَ الَّذِي يَجْمَعُهُ الْإِنْسَانُ فِي أَثْنَاءِ عَمَلِهِ.",
          id: "Adapun kebiasaan kedua adalah bergerak. Seseorang tidak memerlukan olahraga yang berat; cukup baginya berjalan kaki setengah jam sehari. Berjalan kaki menguatkan jantung, melancarkan peredaran darah, dan meredakan ketegangan yang terkumpul selama ia bekerja.",
        },
        {
          ar: "وَالْعَادَةُ الثَّالِثَةُ هِيَ النَّوْمُ الْكَافِي. فَفِي أَثْنَاءِ النَّوْمِ يُصْلِحُ الْجِسْمُ مَا فَسَدَ مِنْ خَلَايَاهُ، وَتَقْوَى الْمَنَاعَةُ الَّتِي تَحْمِيهِ مِنَ الْأَمْرَاضِ. وَمَنْ سَهِرَ لَيْلَهُ أَمَامَ الشَّاشَاتِ ثُمَّ اسْتَيْقَظَ مُتْعَبًا، فَقَدْ ضَيَّعَ عَلَى نَفْسِهِ سَاعَاتٍ لَا تُعَوَّضُ.",
          id: "Kebiasaan ketiga adalah tidur yang cukup. Saat tidur, tubuh memperbaiki sel-selnya yang rusak, dan menguat pula kekebalan yang melindunginya dari penyakit. Siapa yang menghabiskan malamnya di depan layar lalu bangun dalam keadaan letih, sungguh ia telah menyia-nyiakan jam-jam yang tak tergantikan.",
        },
        {
          ar: "وَتَبْقَى الْوِقَايَةُ خَيْرًا مِنَ الْعِلَاجِ. فَزِيَارَةُ الطَّبِيبِ مَرَّةً فِي السَّنَةِ تَكْشِفُ الْمَرَضَ قَبْلَ أَنْ يَشْتَدَّ، وَتُوَفِّرُ عَلَى الْإِنْسَانِ أَيَّامًا طَوِيلَةً مِنَ الْأَلَمِ. وَمَنْ حَافَظَ عَلَى هَذِهِ الْعَادَاتِ الْبَسِيطَةِ فَقَدْ حَافَظَ عَلَى نِعْمَةٍ لَا يَعْرِفُ قَدْرَهَا إِلَّا مَنْ فَقَدَهَا.",
          id: "Dan pencegahan tetap lebih baik daripada pengobatan. Berkunjung ke dokter sekali dalam setahun dapat menemukan penyakit sebelum ia parah, dan menghemat hari-hari panjang penuh rasa sakit. Siapa yang menjaga kebiasaan-kebiasaan sederhana ini, sungguh ia telah menjaga sebuah nikmat yang nilainya hanya diketahui oleh orang yang kehilangannya.",
        },
      ],
      questions: [
        {
          ar: "مِمَّ تُبْنَى الصِّحَّةُ فِي رَأْيِ الْكَاتِبِ؟",
          id: "Menurut penulis, dari apa kesehatan itu dibangun?",
          answerAr: "تُبْنَى مِنْ عَادَاتٍ صَغِيرَةٍ يُكَرِّرُهَا الْإِنْسَانُ كُلَّ يَوْمٍ.",
          answerId: "Dibangun dari kebiasaan-kebiasaan kecil yang diulang setiap hari.",
        },
        {
          ar: "مَاذَا يَحْدُثُ لِمَنِ اكْتَفَى بِنَوْعٍ وَاحِدٍ مِنَ الطَّعَامِ؟",
          id: "Apa yang terjadi pada orang yang hanya makan satu jenis makanan?",
          answerAr: "يَحْرِمُ جِسْمَهُ مِمَّا يَحْتَاجُ إِلَيْهِ.",
          answerId: "Ia menghalangi tubuhnya dari apa yang dibutuhkannya.",
        },
        {
          ar: "اُذْكُرْ ثَلَاثَ فَوَائِدَ لِلْمَشْيِ.",
          id: "Sebutkan tiga manfaat berjalan kaki.",
          answerAr: "يُقَوِّي الْقَلْبَ، وَيُنَشِّطُ الدَّوْرَةَ الدَّمَوِيَّةَ، وَيُخَفِّفُ التَّوَتُّرَ.",
          answerId: "Menguatkan jantung, melancarkan peredaran darah, dan meredakan stres.",
        },
        {
          ar: "لِمَاذَا كَانَتِ الْوِقَايَةُ خَيْرًا مِنَ الْعِلَاجِ؟",
          id: "Mengapa pencegahan lebih baik daripada pengobatan?",
          answerAr: "لِأَنَّهَا تَكْشِفُ الْمَرَضَ قَبْلَ أَنْ يَشْتَدَّ وَتُوَفِّرُ أَيَّامًا طَوِيلَةً مِنَ الْأَلَمِ.",
          answerId: "Karena ia menemukan penyakit sebelum parah dan menghemat hari-hari panjang penuh rasa sakit.",
        },
      ],
    },
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
    istima: {
      title: "Mengapa kita butuh istirahat?",
      titleAr: "لِمَاذَا نَحْتَاجُ إِلَى الرَّاحَةِ؟",
      intro: {
        ar: "لَيْسَ التَّرْوِيحُ عَنِ النَّفْسِ إِضَاعَةً لِلْوَقْتِ كَمَا يَظُنُّ بَعْضُهُمْ، وَإِنَّمَا هُوَ حَاجَةٌ يَعُودُ بِهَا الْإِنْسَانُ إِلَى عَمَلِهِ بِنَشَاطٍ جَدِيدٍ.",
        id: "Rekreasi bukanlah membuang-buang waktu seperti yang dikira sebagian orang, melainkan sebuah kebutuhan yang membuat seseorang kembali kepada pekerjaannya dengan semangat baru.",
      },
      items: [
        {
          ar: "قَضَتِ الْأُسْرَةُ يَوْمَ الْجُمُعَةِ فِي حَدِيقَةٍ عَامَّةٍ قَرِيبَةٍ مِنَ الْبَيْتِ، وَلَمْ تُنْفِقْ مَالًا كَثِيرًا.",
          id: "Keluarga itu menghabiskan hari Jumat di sebuah taman umum dekat rumah, dan tidak mengeluarkan banyak uang.",
          question: "Di mana keluarga itu menghabiskan harinya?",
          options: [
            "Di taman umum dekat rumah",
            "Di sebuah hotel mahal",
            "Di tepi pantai yang jauh",
            "Di rumah kakek",
          ],
          answerIndex: 0,
        },
        {
          ar: "أَفْضَلُ الْهِوَايَاتِ مَا جَمَعَ بَيْنَ الْمُتْعَةِ وَالْفَائِدَةِ، كَالْقِرَاءَةِ وَالسِّبَاحَةِ وَتَعَلُّمِ الطَّبْخِ.",
          id: "Hobi yang terbaik adalah yang memadukan kesenangan dan manfaat, seperti membaca, berenang, dan belajar memasak.",
          question: "Hobi seperti apa yang paling baik?",
          options: [
            "Yang paling murah",
            "Yang memadukan kesenangan dan manfaat",
            "Yang dilakukan sendirian",
            "Yang memakan waktu paling lama",
          ],
          answerIndex: 1,
        },
        {
          ar: "مَنْ عَمِلَ سِتَّةَ أَيَّامٍ مُتَوَاصِلَةٍ بِلَا رَاحَةٍ قَلَّ إِنْتَاجُهُ فِي الْيَوْمِ السَّابِعِ.",
          id: "Siapa yang bekerja enam hari berturut-turut tanpa istirahat, produktivitasnya akan menurun pada hari ketujuh.",
          question: "Apa akibat bekerja tanpa istirahat?",
          options: [
            "Hasil kerjanya bertambah",
            "Hasil kerjanya menurun",
            "Tidak ada pengaruhnya",
            "Ia menjadi lebih cepat",
          ],
          answerIndex: 1,
        },
        {
          ar: "لَا تَجْعَلْ عُطْلَتَكَ كُلَّهَا أَمَامَ الشَّاشَةِ، فَالْخُرُوجُ إِلَى الْهَوَاءِ الطَّلْقِ يُجَدِّدُ النَّفْسَ أَكْثَرَ.",
          id: "Jangan jadikan seluruh liburanmu di depan layar, sebab keluar ke udara terbuka lebih menyegarkan jiwa.",
          question: "Apa yang dinasihatkan dalam kalimat ini?",
          options: [
            "Menonton lebih lama",
            "Tidur sepanjang liburan",
            "Keluar ke udara terbuka",
            "Bekerja saat liburan",
          ],
          answerIndex: 2,
        },
      ],
    },
    dialogues: [
      {
        title: "Rencana liburan",
        titleAr: "خُطَّةُ الْعُطْلَةِ",
        setting: "Dua teman merencanakan liburan akhir pekan bersama.",
        lines: [
          { speaker: "سَالِم", ar: "أَيْنَ سَتَقْضِي الْعُطْلَةَ هَذَا الْأُسْبُوعَ؟", id: "Di mana kamu akan menghabiskan liburan pekan ini?" },
          { speaker: "بِلَال", ar: "سَأَذْهَبُ إِلَى الشَّاطِئِ مَعَ أَصْدِقَائِي، وَقَدِ اتَّفَقْنَا مُنْذُ شَهْرٍ.", id: "Aku akan pergi ke pantai bersama teman-temanku; kami sudah sepakat sejak sebulan lalu." },
          { speaker: "سَالِم", ar: "وَمَاذَا تَفْعَلُونَ هُنَاكَ طُولَ الْيَوْمِ؟", id: "Apa yang kalian lakukan di sana sepanjang hari?" },
          { speaker: "بِلَال", ar: "نَسْبَحُ فِي الصَّبَاحِ، ثُمَّ نَلْعَبُ الْكُرَةَ عَلَى الرَّمْلِ بَعْدَ الْعَصْرِ.", id: "Kami berenang di pagi hari, lalu bermain bola di atas pasir setelah asar." },
          { speaker: "سَالِم", ar: "أَلَا تَخَافُونَ مِنْ حَرَارَةِ الشَّمْسِ فِي وَسَطِ النَّهَارِ؟", id: "Apakah kalian tidak takut panas matahari di tengah hari?" },
          { speaker: "بِلَال", ar: "نَسْتَرِيحُ تَحْتَ الْمِظَلَّاتِ، وَنَأْكُلُ غَدَاءَنَا هُنَاكَ.", id: "Kami beristirahat di bawah payung-payung, dan makan siang di sana." },
          { speaker: "سَالِم", ar: "فِكْرَةٌ جَمِيلَةٌ! كَمْ يَوْمًا سَتَبْقَوْنَ؟", id: "Ide yang bagus! Berapa hari kalian akan tinggal?" },
          { speaker: "بِلَال", ar: "يَوْمَيْنِ فَقَطْ. نَعُودُ مَسَاءَ السَّبْتِ لِأَنَّ الْعَمَلَ يَبْدَأُ يَوْمَ الْأَحَدِ.", id: "Hanya dua hari. Kami pulang Sabtu malam karena kerja mulai hari Ahad." },
          { speaker: "سَالِم", ar: "وَهَلْ حَجَزْتُمْ مَكَانًا لِلْمَبِيتِ؟", id: "Apakah kalian sudah memesan tempat menginap?" },
          { speaker: "بِلَال", ar: "نَعَمْ، شَقَّةٌ صَغِيرَةٌ قَرِيبَةٌ مِنَ الْبَحْرِ، وَأُجْرَتُهَا مُنَاسِبَةٌ.", id: "Ya, sebuah apartemen kecil dekat laut, dan sewanya terjangkau." },
          { speaker: "سَالِم", ar: "لَا تَنْسَوُا الْمَاءَ وَالطَّعَامَ وَشَيْئًا لِلْإِسْعَافَاتِ الْأَوَّلِيَّةِ.", id: "Jangan lupa air, makanan, dan sesuatu untuk pertolongan pertama." },
          { speaker: "بِلَال", ar: "لَنْ نَنْسَى. وَلِمَ لَا تَأْتِي مَعَنَا؟ الْمَكَانُ يَتَّسِعُ لِوَاحِدٍ آخَرَ.", id: "Kami tidak akan lupa. Kenapa kamu tidak ikut? Tempatnya masih muat untuk satu orang lagi." },
          { speaker: "سَالِم", ar: "وَاللهِ فِكْرَةٌ مُغْرِيَةٌ، سَأُرَتِّبُ أَمْرِي وَأُخْبِرُكَ اللَّيْلَةَ.", id: "Sungguh ide yang menggoda. Aku akan atur urusanku dan mengabarimu malam ini." },
        ],
      },
      {
        title: "Setelah sembuh",
        titleAr: "بَعْدَ الشِّفَاءِ",
        setting: "Seorang teman menjenguk temannya yang baru sembuh dan menasihatinya.",
        lines: [
          { speaker: "يُوسُف", ar: "الْحَمْدُ لِلَّهِ عَلَى سَلَامَتِكَ. كَيْفَ حَالُكَ الْآنَ؟", id: "Alhamdulillah atas kesembuhanmu. Bagaimana keadaanmu sekarang?" },
          { speaker: "عَامِر", ar: "أَحْسَنُ مِنْ قَبْلُ، وَلَكِنِّي مَا زِلْتُ ضَعِيفًا قَلِيلًا.", id: "Lebih baik dari sebelumnya, tetapi aku masih agak lemah." },
          { speaker: "يُوسُف", ar: "كَمْ يَوْمًا بَقِيتَ فِي الْبَيْتِ؟", id: "Berapa hari kamu berada di rumah?" },
          { speaker: "عَامِر", ar: "عَشَرَةَ أَيَّامٍ كَامِلَةً، لَمْ أَخْرُجْ فِيهَا إِلَّا مَرَّتَيْنِ.", id: "Sepuluh hari penuh; selama itu aku hanya keluar dua kali." },
          { speaker: "يُوسُف", ar: "أَتَعْرِفُ مَا سَبَبُ مَرَضِكَ فِي رَأْيِي؟ الْعَمَلُ بِلَا رَاحَةٍ.", id: "Tahukah kamu apa sebab sakitmu menurutku? Bekerja tanpa istirahat." },
          { speaker: "عَامِر", ar: "رُبَّمَا كُنْتَ عَلَى حَقٍّ. لَمْ آخُذْ عُطْلَةً مُنْذُ سَنَتَيْنِ.", id: "Mungkin kamu benar. Aku tidak mengambil cuti sejak dua tahun." },
          { speaker: "يُوسُف", ar: "سَنَتَيْنِ! هَذَا كَثِيرٌ. الْجِسْمُ لَيْسَ آلَةً يَا صَدِيقِي.", id: "Dua tahun! Itu terlalu lama. Tubuh bukan mesin, kawanku." },
          { speaker: "عَامِر", ar: "وَلَكِنَّ الْعَمَلَ كَثِيرٌ، وَإِذَا تَوَقَّفْتُ تَأَخَّرَ كُلُّ شَيْءٍ.", id: "Tetapi pekerjaannya banyak; kalau aku berhenti, semuanya jadi tertunda." },
          { speaker: "يُوسُف", ar: "وَقَدْ تَوَقَّفْتَ عَشَرَةَ أَيَّامٍ رَغْمًا عَنْكَ. أَلَيْسَ كَذَلِكَ؟", id: "Dan kamu toh berhenti sepuluh hari, mau tidak mau. Bukankah begitu?" },
          { speaker: "عَامِر", ar: "صَدَقْتَ. الرَّاحَةُ الْقَلِيلَةُ خَيْرٌ مِنَ الْمَرَضِ الطَّوِيلِ.", id: "Kamu benar. Istirahat sebentar lebih baik daripada sakit yang lama." },
          { speaker: "يُوسُف", ar: "اِجْعَلْ لِنَفْسِكَ يَوْمًا فِي الْأُسْبُوعِ لَا تَفْتَحُ فِيهِ الْحَاسُوبَ.", id: "Sisihkan satu hari dalam sepekan yang kamu tidak membuka komputer sama sekali." },
          { speaker: "عَامِر", ar: "سَأَجْعَلُهُ يَوْمَ الْجُمُعَةِ، وَأَخْرُجُ فِيهِ مَعَ أَوْلَادِي.", id: "Akan kujadikan hari Jumat, dan aku akan keluar bersama anak-anakku." },
          { speaker: "يُوسُف", ar: "هَذَا هُوَ الطَّرِيقُ. وَسَتَجِدُ أَنَّ عَمَلَكَ نَفْسَهُ يَتَحَسَّنُ.", id: "Inilah jalannya. Dan kamu akan mendapati pekerjaanmu sendiri jadi lebih baik." },
        ],
      },
    ],
    qiraah: {
      title: "Waktu luang: nikmat yang sering disia-siakan",
      titleAr: "وَقْتُ الْفَرَاغِ: نِعْمَةٌ كَثِيرًا مَا تَضِيعُ",
      preVocab: [
        { ar: "فَرَاغ", translit: "faraagh", id: "waktu luang" },
        { ar: "تَرْوِيح", translit: "tarwiih", id: "hiburan, penyegaran jiwa" },
        { ar: "رَتَابَة", translit: "rataabah", id: "kejenuhan, rutinitas monoton" },
        { ar: "مُتْعَة", translit: "mut'ah", id: "kesenangan" },
        { ar: "طَاقَة", translit: "thaaqah", id: "energi, tenaga" },
        { ar: "يُجَدِّدُ", translit: "yujaddidu", id: "(dia) memperbarui" },
        { ar: "يُنْفِقُ", translit: "yunfiqu", id: "(dia) membelanjakan" },
        { ar: "مَهَارَة", translit: "mahaarah", id: "keterampilan" },
      ],
      paragraphs: [
        {
          ar: "يَشْكُو كَثِيرٌ مِنَ النَّاسِ فِي هَذَا الزَّمَانِ مِنْ ضِيقِ الْوَقْتِ، ثُمَّ إِذَا جَاءَتْهُمُ الْعُطْلَةُ لَمْ يَعْرِفُوا كَيْفَ يَقْضُونَهَا. يَجْلِسُونَ سَاعَاتٍ طَوِيلَةً أَمَامَ الشَّاشَاتِ، ثُمَّ يَقُومُونَ وَهُمْ أَشَدُّ تَعَبًا مِمَّا كَانُوا قَبْلَ الْجُلُوسِ.",
          id: "Banyak orang di zaman ini mengeluh kekurangan waktu, lalu ketika liburan datang mereka tidak tahu bagaimana menghabiskannya. Mereka duduk berjam-jam di depan layar, kemudian bangkit dalam keadaan lebih lelah daripada sebelum duduk.",
        },
        {
          ar: "وَالسَّبَبُ أَنَّهُمْ يَخْلِطُونَ بَيْنَ الْفَرَاغِ وَالتَّرْوِيحِ. فَالْفَرَاغُ وَقْتٌ خَالٍ لَا غَيْرَ، أَمَّا التَّرْوِيحُ فَهُوَ عَمَلٌ يُخْتَارُ بِقَصْدٍ لِيُجَدِّدَ النَّفْسَ وَيُخْرِجَهَا مِنْ رَتَابَةِ الْأَيَّامِ. وَلِذَلِكَ قَدْ يَمْضِي عَلَى الْإِنْسَانِ يَوْمٌ كَامِلٌ فَارِغٌ وَهُوَ لَمْ يَسْتَرِحْ لَحْظَةً وَاحِدَةً.",
          id: "Sebabnya, mereka mencampuradukkan antara waktu kosong dan rekreasi. Waktu kosong hanyalah waktu yang tak terisi, sedangkan rekreasi adalah kegiatan yang dipilih dengan sengaja untuk menyegarkan jiwa dan mengeluarkannya dari kejenuhan hari-hari. Karena itu, bisa saja seseorang melewati satu hari penuh yang kosong sementara ia tidak beristirahat sedetik pun.",
        },
        {
          ar: "وَخَيْرُ التَّرْوِيحِ مَا جَمَعَ بَيْنَ الْمُتْعَةِ وَالْفَائِدَةِ. فَالْقِرَاءَةُ تُمَتِّعُ وَتُعَلِّمُ، وَالسِّبَاحَةُ تُرِيحُ وَتُقَوِّي، وَتَعَلُّمُ مَهَارَةٍ جَدِيدَةٍ كَالطَّبْخِ أَوِ التَّصْوِيرِ يَمْلَأُ الْوَقْتَ وَيَتْرُكُ فِي صَاحِبِهِ أَثَرًا يَبْقَى.",
          id: "Rekreasi yang terbaik adalah yang memadukan kesenangan dan manfaat. Membaca itu menyenangkan sekaligus mengajarkan, berenang itu menenangkan sekaligus menguatkan, dan mempelajari keterampilan baru seperti memasak atau fotografi mengisi waktu serta meninggalkan bekas yang bertahan pada pelakunya.",
        },
        {
          ar: "وَلَيْسَ التَّرْوِيحُ مُرْتَبِطًا بِالْمَالِ كَمَا يَتَوَهَّمُ بَعْضُهُمْ. فَالْأُسْرَةُ الَّتِي تَخْرُجُ إِلَى حَدِيقَةٍ قَرِيبَةٍ وَتَحْمِلُ طَعَامَهَا مَعَهَا قَدْ تَعُودُ أَسْعَدَ مِنْ أُسْرَةٍ أَنْفَقَتْ مَالًا كَثِيرًا فِي سَفَرٍ مُتْعِبٍ. الْعِبْرَةُ بِالصُّحْبَةِ وَالنِّيَّةِ، لَا بِالثَّمَنِ.",
          id: "Rekreasi juga tidak terikat dengan uang seperti yang dikira sebagian orang. Sebuah keluarga yang pergi ke taman terdekat sambil membawa bekalnya sendiri bisa jadi pulang lebih bahagia daripada keluarga yang menghabiskan banyak uang untuk perjalanan yang melelahkan. Yang menentukan adalah teman dan niatnya, bukan harganya.",
        },
        {
          ar: "وَيَبْقَى الْمِيزَانُ ضَرُورِيًّا. فَمَنْ جَعَلَ حَيَاتَهَا كُلَّهَا عَمَلًا احْتَرَقَ قَبْلَ الْأَوَانِ، وَمَنْ جَعَلَهَا كُلَّهَا لَهْوًا ضَاعَ عُمْرُهُ بَيْنَ يَدَيْهِ. وَالْعَاقِلُ مَنْ أَعْطَى لِكُلِّ وَقْتٍ حَقَّهُ، فَعَادَ إِلَى عَمَلِهِ بَعْدَ رَاحَتِهِ وَفِي نَفْسِهِ طَاقَةٌ جَدِيدَةٌ.",
          id: "Keseimbangan tetap menjadi keharusan. Siapa yang menjadikan seluruh hidupnya kerja akan terbakar sebelum waktunya, dan siapa yang menjadikan seluruhnya main-main akan kehilangan umurnya begitu saja. Orang yang bijak adalah yang memberi setiap waktu haknya, sehingga ia kembali kepada pekerjaannya seusai istirahat dengan energi yang baru.",
        },
      ],
      questions: [
        {
          ar: "مَا الْفَرْقُ بَيْنَ الْفَرَاغِ وَالتَّرْوِيحِ؟",
          id: "Apa perbedaan antara waktu kosong dan rekreasi?",
          answerAr: "الْفَرَاغُ وَقْتٌ خَالٍ فَقَطْ، وَالتَّرْوِيحُ عَمَلٌ يُخْتَارُ بِقَصْدٍ لِيُجَدِّدَ النَّفْسَ.",
          answerId: "Waktu kosong hanyalah waktu yang tak terisi, sedangkan rekreasi adalah kegiatan yang sengaja dipilih untuk menyegarkan jiwa.",
        },
        {
          ar: "مَا خَيْرُ أَنْوَاعِ التَّرْوِيحِ؟",
          id: "Rekreasi jenis apa yang terbaik?",
          answerAr: "مَا جَمَعَ بَيْنَ الْمُتْعَةِ وَالْفَائِدَةِ.",
          answerId: "Yang memadukan kesenangan dan manfaat.",
        },
        {
          ar: "هَلْ يَحْتَاجُ التَّرْوِيحُ إِلَى مَالٍ كَثِيرٍ؟ وَلِمَاذَا؟",
          id: "Apakah rekreasi membutuhkan banyak uang? Mengapa?",
          answerAr: "لَا، لِأَنَّ الْعِبْرَةَ بِالصُّحْبَةِ وَالنِّيَّةِ لَا بِالثَّمَنِ.",
          answerId: "Tidak, karena yang menentukan adalah teman dan niatnya, bukan harganya.",
        },
        {
          ar: "مَاذَا يَحْدُثُ لِمَنْ جَعَلَ حَيَاتَهُ كُلَّهَا عَمَلًا؟",
          id: "Apa yang terjadi pada orang yang menjadikan seluruh hidupnya kerja?",
          answerAr: "يَحْتَرِقُ قَبْلَ الْأَوَانِ.",
          answerId: "Ia akan terbakar (habis tenaganya) sebelum waktunya.",
        },
      ],
    },
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
    istima: {
      title: "Rumah yang tenteram",
      titleAr: "الْبَيْتُ الْهَادِئُ",
      intro: {
        ar: "الْبَيْتُ السَّعِيدُ لَيْسَ بَيْتًا لَا خِلَافَ فِيهِ، وَإِنَّمَا هُوَ بَيْتٌ يُحْسِنُ أَهْلُهُ إِدَارَةَ الْخِلَافِ حِينَ يَقَعُ.",
        id: "Rumah yang bahagia bukanlah rumah yang tidak ada perselisihan di dalamnya, melainkan rumah yang penghuninya pandai mengelola perselisihan ketika ia terjadi.",
      },
      items: [
        {
          ar: "قَالَ الْأَبُ: مَا اخْتَلَفْنَا يَوْمًا أَمَامَ الْأَوْلَادِ، وَإِنَّمَا نُنَاقِشُ أُمُورَنَا بَعْدَ نَوْمِهِمْ.",
          id: "Sang ayah berkata: Kami tidak pernah berselisih di hadapan anak-anak, tetapi kami membicarakan urusan kami setelah mereka tidur.",
          question: "Kapan pasangan itu membicarakan masalah mereka?",
          options: [
            "Di depan anak-anak",
            "Setelah anak-anak tidur",
            "Di hadapan para tamu",
            "Mereka tidak pernah membicarakannya",
          ],
          answerIndex: 1,
        },
        {
          ar: "مِنْ أَسْبَابِ الْخِلَافِ فِي الْبُيُوتِ أَنْ يَنْتَظِرَ كُلُّ وَاحِدٍ مِنَ الْآخَرِ أَنْ يَفْهَمَهُ بِلَا كَلَامٍ.",
          id: "Di antara sebab perselisihan dalam rumah tangga adalah masing-masing menunggu yang lain memahaminya tanpa dibicarakan.",
          question: "Apa salah satu sebab perselisihan menurut teks?",
          options: [
            "Terlalu banyak berbicara",
            "Sedikitnya uang",
            "Menunggu dipahami tanpa berbicara",
            "Banyaknya tamu",
          ],
          answerIndex: 2,
        },
        {
          ar: "قَسَّمَ الزَّوْجَانِ أَعْمَالَ الْبَيْتِ بَيْنَهُمَا، فَصَارَ كُلُّ وَاحِدٍ يَعْرِفُ مَا عَلَيْهِ دُونَ نِقَاشٍ كُلَّ يَوْمٍ.",
          id: "Pasangan itu membagi pekerjaan rumah di antara mereka, sehingga masing-masing tahu tugasnya tanpa berdebat setiap hari.",
          question: "Apa hasil dari pembagian pekerjaan rumah?",
          options: [
            "Bertambahnya perdebatan",
            "Masing-masing tahu tugasnya tanpa berdebat",
            "Salah satu mengerjakan semuanya",
            "Mereka menyewa pembantu",
          ],
          answerIndex: 1,
        },
        {
          ar: "كَلِمَةُ شُكْرٍ صَغِيرَةٌ فِي آخِرِ الْيَوْمِ قَدْ تُطْفِئُ غَضَبًا كَبِيرًا تَجَمَّعَ مُنْذُ الصَّبَاحِ.",
          id: "Sepatah kata terima kasih di penghujung hari bisa memadamkan amarah besar yang menumpuk sejak pagi.",
          question: "Apa yang bisa memadamkan amarah menurut teks?",
          options: [
            "Diam sepanjang hari",
            "Sepatah kata terima kasih",
            "Pergi meninggalkan rumah",
            "Hadiah yang mahal",
          ],
          answerIndex: 1,
        },
      ],
    },
    dialogues: [
      {
        title: "Kabar lamaran",
        titleAr: "خَبَرُ الْخِطْبَةِ",
        setting: "Dua sahabat berbincang tentang rencana pernikahan salah satunya.",
        lines: [
          { speaker: "خَالِد", ar: "سَمِعْتُ أَنَّكَ سَتَتَزَوَّجُ قَرِيبًا. أَهَذَا صَحِيحٌ؟", id: "Aku dengar kamu akan segera menikah. Apakah itu benar?" },
          { speaker: "فَيْصَل", ar: "نَعَمْ، تَمَّتِ الْخِطْبَةُ الْأُسْبُوعَ الْمَاضِيَ فِي بَيْتِ أَهْلِهَا.", id: "Ya, lamaran sudah berlangsung pekan lalu di rumah keluarganya." },
          { speaker: "خَالِد", ar: "مَبْرُوكٌ! وَمَتَى مَوْعِدُ الْعَقْدِ إِنْ شَاءَ اللهُ؟", id: "Selamat! Kapan waktu akad, insya Allah?" },
          { speaker: "فَيْصَل", ar: "بَعْدَ ثَلَاثَةِ أَشْهُرٍ تَقْرِيبًا، حَتَّى نُجَهِّزَ الْبَيْتَ.", id: "Kira-kira tiga bulan lagi, sampai kami menyiapkan rumah." },
          { speaker: "خَالِد", ar: "وَهَلْ كُنْتَ تَعْرِفُهَا مِنْ قَبْلُ، أَمْ رَشَّحَهَا لَكَ أَحَدٌ؟", id: "Apakah kamu sudah mengenalnya sebelumnya, atau ada yang merekomendasikan?" },
          { speaker: "فَيْصَل", ar: "رَشَّحَتْهَا أُخْتِي، ثُمَّ سَأَلْتُ عَنْهَا وَعَنْ أَهْلِهَا.", id: "Saudariku yang merekomendasikan, lalu aku mencari tahu tentangnya dan keluarganya." },
          { speaker: "خَالِد", ar: "وَمَا أَهَمُّ شَيْءٍ نَظَرْتَ إِلَيْهِ فِي رَأْيِكَ؟", id: "Menurutmu apa hal terpenting yang kamu perhatikan?" },
          { speaker: "فَيْصَل", ar: "الدِّينُ وَالْأَخْلَاقُ قَبْلَ كُلِّ شَيْءٍ، ثُمَّ التَّفَاهُمُ بَيْنَنَا.", id: "Agama dan akhlak sebelum segalanya, lalu saling pengertian di antara kami." },
          { speaker: "خَالِد", ar: "وَمَاذَا عَنِ الْعَمَلِ وَالدِّرَاسَةِ؟ أَلَمْ يَكُنْ ذَلِكَ مُهِمًّا؟", id: "Bagaimana dengan pekerjaan dan pendidikan? Bukankah itu penting?" },
          { speaker: "فَيْصَل", ar: "مُهِمٌّ، وَلَكِنَّهُ يَأْتِي بَعْدَ الْأَخْلَاقِ. الشَّهَادَةُ لَا تَصْنَعُ بَيْتًا.", id: "Penting, tetapi datang setelah akhlak. Ijazah tidak membangun rumah tangga." },
          { speaker: "خَالِد", ar: "صَدَقْتَ. الزَّوَاجُ مَسْؤُولِيَّةٌ كَبِيرَةٌ لَا يَحْمِلُهَا إِلَّا الصَّابِرُ.", id: "Kamu benar. Pernikahan itu tanggung jawab besar yang hanya dipikul oleh orang yang sabar." },
          { speaker: "فَيْصَل", ar: "وَلِهَذَا أَنَا خَائِفٌ قَلِيلًا، مَعَ أَنِّي سَعِيدٌ.", id: "Karena itulah aku sedikit takut, meskipun aku bahagia." },
          { speaker: "خَالِد", ar: "الْخَوْفُ هُنَا عَلَامَةٌ طَيِّبَةٌ. مَنْ لَا يَخَافُ لَا يَسْتَعِدُّ.", id: "Rasa takut di sini pertanda baik. Yang tidak takut tidak akan bersiap." },
        ],
      },
      {
        title: "Perselisihan kecil",
        titleAr: "خِلَافٌ صَغِيرٌ",
        setting: "Sepasang suami istri membicarakan pembagian pekerjaan rumah.",
        lines: [
          { speaker: "الزَّوْجَة", ar: "أُرِيدُ أَنْ أُكَلِّمَكَ فِي أَمْرٍ يُتْعِبُنِي مُنْذُ أُسْبُوعٍ.", id: "Aku ingin bicara denganmu tentang sesuatu yang mengganggu sejak sepekan." },
          { speaker: "الزَّوْج", ar: "تَفَضَّلِي، أَنَا أَسْمَعُكِ.", id: "Silakan, aku mendengarkanmu." },
          { speaker: "الزَّوْجَة", ar: "أَعْمَالُ الْبَيْتِ كُلُّهَا عَلَيَّ، وَأَنَا أَعْمَلُ خَارِجَ الْبَيْتِ أَيْضًا.", id: "Semua pekerjaan rumah ada di pundakku, padahal aku juga bekerja di luar rumah." },
          { speaker: "الزَّوْج", ar: "لَمْ أَنْتَبِهْ لِهَذَا، وَاللهِ. كُنْتُ أَظُنُّ أَنَّ الْأَمْرَ عَادِيٌّ.", id: "Sungguh aku tidak menyadari hal itu. Kukira semuanya biasa saja." },
          { speaker: "الزَّوْجَة", ar: "هَذِهِ هِيَ الْمُشْكِلَةُ: أَنْتَظِرُ أَنْ تَفْهَمَ بِلَا كَلَامٍ، ثُمَّ أَغْضَبُ.", id: "Inilah masalahnya: aku menunggumu paham tanpa dibicarakan, lalu aku marah." },
          { speaker: "الزَّوْج", ar: "وَأَنَا لَا أَفْهَمُ سَبَبَ الْغَضَبِ، فَأَسْكُتُ، فَيَزْدَادُ الْأَمْرُ سُوءًا.", id: "Dan aku tidak paham sebab kemarahan itu, lalu aku diam, dan keadaan makin buruk." },
          { speaker: "الزَّوْجَة", ar: "فَلْنَتَّفِقْ إِذَنْ عَلَى تَقْسِيمٍ وَاضِحٍ.", id: "Kalau begitu, mari kita sepakati pembagian yang jelas." },
          { speaker: "الزَّوْج", ar: "مُوَافِقٌ. أَنَا أَتَوَلَّى السُّوقَ وَالْمَطْبَخَ يَوْمَيْنِ فِي الْأُسْبُوعِ.", id: "Aku setuju. Aku mengurus belanja dan dapur dua hari dalam sepekan." },
          { speaker: "الزَّوْجَة", ar: "وَأَنَا أَتَوَلَّى بَقِيَّةَ الْأَيَّامِ، وَنَتَعَاوَنُ فِي يَوْمِ الْعُطْلَةِ.", id: "Dan aku mengurus sisa hari-harinya, dan kita bekerja sama di hari libur." },
          { speaker: "الزَّوْج", ar: "وَالْأَوْلَادُ؟ يَنْبَغِي أَنْ يَأْخُذُوا نَصِيبَهُمْ أَيْضًا.", id: "Bagaimana anak-anak? Mereka juga sebaiknya mengambil bagian." },
          { speaker: "الزَّوْجَة", ar: "فِكْرَةٌ مُمْتَازَةٌ. كُلُّ وَاحِدٍ يُرَتِّبُ غُرْفَتَهُ عَلَى الْأَقَلِّ.", id: "Ide yang bagus sekali. Setidaknya masing-masing merapikan kamarnya sendiri." },
          { speaker: "الزَّوْج", ar: "أَشْكُرُكِ لِأَنَّكِ تَكَلَّمْتِ بَدَلَ أَنْ تَصْمُتِي.", id: "Terima kasih karena kamu berbicara alih-alih diam." },
          { speaker: "الزَّوْجَة", ar: "وَأَشْكُرُكَ لِأَنَّكَ سَمِعْتَ بِلَا غَضَبٍ.", id: "Dan terima kasih karena kamu mendengarkan tanpa marah." },
        ],
      },
    ],
    qiraah: {
      title: "Rumah tangga: kemitraan, bukan pertandingan",
      titleAr: "الْحَيَاةُ الزَّوْجِيَّةُ: شَرَاكَةٌ لَا مُبَارَاةٌ",
      preVocab: [
        { ar: "شَرَاكَة", translit: "syaraakah", id: "kemitraan" },
        { ar: "تَنَازُل", translit: "tanaazul", id: "mengalah, memberi kelonggaran" },
        { ar: "تَوَقُّعَات", translit: "tawaqqu'aat", id: "ekspektasi, harapan" },
        { ar: "حِوَار", translit: "hiwaar", id: "dialog, percakapan" },
        { ar: "أَزْمَة", translit: "azmah", id: "krisis, masa sulit" },
        { ar: "يَتَنَازَلُ", translit: "yatanaazalu", id: "(dia) mengalah" },
        { ar: "يُقَدِّرُ", translit: "yuqaddiru", id: "(dia) menghargai" },
        { ar: "دَافِئ", translit: "daafi'", id: "hangat" },
      ],
      paragraphs: [
        {
          ar: "يَدْخُلُ كَثِيرٌ مِنَ الشَّبَابِ الْحَيَاةَ الزَّوْجِيَّةَ وَفِي أَذْهَانِهِمْ صُورَةٌ جَمِيلَةٌ لَا خِلَافَ فِيهَا وَلَا تَعَبَ. فَإِذَا مَرَّتِ الشُّهُورُ الْأُولَى وَظَهَرَتِ الْحَيَاةُ عَلَى حَقِيقَتِهَا، أُصِيبَ بَعْضُهُمْ بِخَيْبَةٍ، وَظَنَّ أَنَّهُ أَخْطَأَ الِاخْتِيَارَ.",
          id: "Banyak pemuda memasuki kehidupan rumah tangga dengan gambaran indah di benak mereka: tanpa perselisihan dan tanpa lelah. Ketika bulan-bulan pertama berlalu dan kehidupan menampakkan wajah sesungguhnya, sebagian mereka kecewa dan mengira telah salah memilih.",
        },
        {
          ar: "وَالْحَقُّ أَنَّ الْمُشْكِلَةَ لَيْسَتْ فِي الِاخْتِيَارِ غَالِبًا، وَإِنَّمَا فِي التَّوَقُّعَاتِ. فَالْبَيْتُ السَّعِيدُ لَيْسَ بَيْتًا لَا خِلَافَ فِيهِ، بَلْ بَيْتٌ يُحْسِنُ أَهْلُهُ إِدَارَةَ الْخِلَافِ حِينَ يَقَعُ. وَالْخِلَافُ بَيْنَ اثْنَيْنِ يَعِيشَانِ تَحْتَ سَقْفٍ وَاحِدٍ أَمْرٌ طَبِيعِيٌّ، وَإِنَّمَا الْعَيْبُ فِي طَرِيقَةِ مُعَالَجَتِهِ.",
          id: "Yang benar, masalahnya sering kali bukan pada pilihan, melainkan pada ekspektasi. Rumah yang bahagia bukanlah rumah tanpa perselisihan, melainkan rumah yang penghuninya pandai mengelola perselisihan saat terjadi. Perselisihan antara dua orang yang hidup di bawah satu atap adalah hal yang wajar; yang tercela adalah cara menanganinya.",
        },
        {
          ar: "وَأَوَّلُ مَا يَحْتَاجُ إِلَيْهِ الزَّوْجَانِ هُوَ الْحِوَارُ الصَّرِيحُ. فَكَثِيرٌ مِنَ الْخِلَافَاتِ يَنْشَأُ لِأَنَّ كُلَّ وَاحِدٍ يَنْتَظِرُ مِنَ الْآخَرِ أَنْ يَفْهَمَهُ بِلَا كَلَامٍ، فَإِذَا لَمْ يَفْهَمْ غَضِبَ وَصَمَتَ، وَالصَّمْتُ يُكَبِّرُ الْمُشْكِلَةَ وَلَا يَحُلُّهَا.",
          id: "Hal pertama yang dibutuhkan pasangan suami istri adalah dialog yang terus terang. Banyak perselisihan muncul karena masing-masing menunggu yang lain memahaminya tanpa berbicara; ketika tidak dipahami, ia marah lalu diam, sementara diam justru membesarkan masalah, bukan menyelesaikannya.",
        },
        {
          ar: "وَالْأَمْرُ الثَّانِي هُوَ التَّنَازُلُ. فَمَنْ دَخَلَ بَيْتَهُ كَأَنَّهُ دَاخِلٌ فِي مُبَارَاةٍ يُرِيدُ أَنْ يَرْبَحَهَا كُلَّ مَرَّةٍ، فَقَدْ خَسِرَ وَإِنْ رَبِحَ. فَالزَّوَاجُ شَرَاكَةٌ يَتَنَازَلُ فِيهَا كُلُّ وَاحِدٍ عَنْ شَيْءٍ لِيَبْقَى الْبَيْتُ دَافِئًا.",
          id: "Perkara kedua adalah kesediaan mengalah. Siapa yang memasuki rumahnya seolah masuk ke sebuah pertandingan yang ingin ia menangkan setiap kali, sungguh ia telah kalah meski menang. Pernikahan adalah kemitraan; di dalamnya masing-masing melepaskan sesuatu agar rumah tetap hangat.",
        },
        {
          ar: "وَيَبْقَى التَّقْدِيرُ سِرًّا مِنْ أَسْرَارِ الِاسْتِمْرَارِ. فَكَلِمَةُ شُكْرٍ صَغِيرَةٌ عَلَى عَمَلٍ يَتَكَرَّرُ كُلَّ يَوْمٍ تُطْفِئُ غَضَبًا كَبِيرًا. وَمَنْ حَفِظَ لِشَرِيكِهِ جَمِيلَهُ فِي أَيَّامِ الْأَزَمَاتِ، وَجَدَ بَيْتَهُ أَقْوَى مِمَّا كَانَ قَبْلَهَا.",
          id: "Dan penghargaan tetap menjadi salah satu rahasia keberlangsungan. Sepatah kata terima kasih atas pekerjaan yang berulang setiap hari mampu memadamkan amarah yang besar. Siapa yang mengingat kebaikan pasangannya di hari-hari sulit, ia akan mendapati rumahnya lebih kokoh dari sebelumnya.",
        },
      ],
      questions: [
        {
          ar: "أَيْنَ تَكْمُنُ الْمُشْكِلَةُ غَالِبًا فِي رَأْيِ الْكَاتِبِ؟",
          id: "Menurut penulis, di mana letak masalahnya pada umumnya?",
          answerAr: "فِي التَّوَقُّعَاتِ، لَا فِي الِاخْتِيَارِ.",
          answerId: "Pada ekspektasi, bukan pada pilihan pasangan.",
        },
        {
          ar: "لِمَاذَا يَنْشَأُ كَثِيرٌ مِنَ الْخِلَافَاتِ؟",
          id: "Mengapa banyak perselisihan muncul?",
          answerAr: "لِأَنَّ كُلَّ وَاحِدٍ يَنْتَظِرُ مِنَ الْآخَرِ أَنْ يَفْهَمَهُ بِلَا كَلَامٍ.",
          answerId: "Karena masing-masing menunggu yang lain memahaminya tanpa berbicara.",
        },
        {
          ar: "مَاذَا يَحْدُثُ لِمَنْ عَامَلَ بَيْتَهُ كَالْمُبَارَاةِ؟",
          id: "Apa yang terjadi pada orang yang memperlakukan rumahnya seperti pertandingan?",
          answerAr: "يَخْسَرُ وَإِنْ رَبِحَ.",
          answerId: "Ia kalah meskipun menang.",
        },
        {
          ar: "مَا أَثَرُ كَلِمَةِ الشُّكْرِ فِي الْبَيْتِ؟",
          id: "Apa pengaruh kata terima kasih di dalam rumah?",
          answerAr: "تُطْفِئُ غَضَبًا كَبِيرًا.",
          answerId: "Ia memadamkan amarah yang besar.",
        },
      ],
    },
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
    istima: {
      title: "Kota tidak tidur",
      titleAr: "الْمَدِينَةُ لَا تَنَامُ",
      intro: {
        ar: "تَجْذِبُ الْمَدِينَةُ النَّاسَ بِفُرَصِهَا وَخَدَمَاتِهَا، ثُمَّ تَأْخُذُ مِنْهُمْ فِي الْمُقَابِلِ شَيْئًا مِنْ هُدُوئِهِمْ وَوَقْتِهِمْ.",
        id: "Kota menarik orang dengan peluang dan layanannya, lalu sebagai gantinya ia mengambil dari mereka sebagian ketenangan dan waktu mereka.",
      },
      items: [
        {
          ar: "يَقْضِي سُكَّانُ الْمُدُنِ الْكَبِيرَةِ سَاعَتَيْنِ فِي الطَّرِيقِ كُلَّ يَوْمٍ بَيْنَ الذَّهَابِ وَالْإِيَابِ.",
          id: "Penduduk kota besar menghabiskan dua jam di jalan setiap hari untuk pergi dan pulang.",
          question: "Berapa lama waktu di jalan setiap hari?",
          options: ["Setengah jam", "Satu jam", "Dua jam", "Empat jam"],
          answerIndex: 2,
        },
        {
          ar: "اِنْتَقَلَتِ الْأُسْرَةُ إِلَى الرِّيفِ، فَوَجَدَتْ هُدُوءًا لَمْ تَعْرِفْهُ، وَلَكِنَّهَا فَقَدَتْ قُرْبَ الْمُسْتَشْفَى وَالْجَامِعَةِ.",
          id: "Keluarga itu pindah ke desa, lalu menemukan ketenangan yang belum pernah mereka kenal, tetapi mereka kehilangan kedekatan dengan rumah sakit dan universitas.",
          question: "Apa yang hilang setelah pindah ke desa?",
          options: [
            "Ketenangan",
            "Kedekatan dengan rumah sakit dan universitas",
            "Udara bersih",
            "Rumah yang luas",
          ],
          answerIndex: 1,
        },
        {
          ar: "كُلَّمَا زَادَ عَدَدُ السَّيَّارَاتِ فِي الشَّوَارِعِ زَادَ التَّلَوُّثُ وَقَلَّ الْهَوَاءُ النَّظِيفُ.",
          id: "Setiap kali jumlah mobil di jalanan bertambah, polusi bertambah dan udara bersih berkurang.",
          question: "Apa akibat bertambahnya mobil?",
          options: [
            "Polusi bertambah",
            "Jalanan makin lengang",
            "Harga bahan bakar turun",
            "Udara makin bersih",
          ],
          answerIndex: 0,
        },
        {
          ar: "نَصَحَ الْمُهَنْدِسُ بِتَوْسِيعِ وَسَائِلِ الْمُوَاصَلَاتِ الْعَامَّةِ بَدَلَ بِنَاءِ طُرُقٍ جَدِيدَةٍ كُلَّ سَنَةٍ.",
          id: "Sang insinyur menyarankan memperluas sarana transportasi umum alih-alih membangun jalan baru setiap tahun.",
          question: "Apa saran sang insinyur?",
          options: [
            "Membangun jalan baru setiap tahun",
            "Melarang mobil sepenuhnya",
            "Memperluas transportasi umum",
            "Memindahkan penduduk ke desa",
          ],
          answerIndex: 2,
        },
      ],
    },
    dialogues: [
      {
        title: "Kota atau desa?",
        titleAr: "الْمَدِينَةُ أَمِ الرِّيفُ؟",
        setting: "Dua teman berbeda pendapat tentang tempat tinggal yang lebih baik.",
        lines: [
          { speaker: "عَادِل", ar: "كَيْفَ تَجِدُ الْحَيَاةَ فِي الْمَدِينَةِ بَعْدَ سَنَةٍ كَامِلَةٍ؟", id: "Bagaimana menurutmu hidup di kota setelah satu tahun penuh?" },
          { speaker: "بَشِير", ar: "فِيهَا فُرَصٌ كَثِيرَةٌ، وَلَكِنَّ الزِّحَامَ يُتْعِبُنِي كُلَّ صَبَاحٍ.", id: "Di sini banyak peluang, tetapi kemacetan melelahkanku setiap pagi." },
          { speaker: "عَادِل", ar: "كَمْ تَحْتَاجُ مِنَ الْوَقْتِ لِتَصِلَ إِلَى عَمَلِكَ؟", id: "Berapa lama waktu yang kamu butuhkan untuk sampai ke tempat kerja?" },
          { speaker: "بَشِير", ar: "سَاعَةً كَامِلَةً ذَهَابًا، وَمِثْلَهَا إِيَابًا. أَيْ سَاعَتَيْنِ ضَائِعَتَيْنِ.", id: "Satu jam penuh berangkat, dan sama pulangnya. Artinya dua jam terbuang." },
          { speaker: "عَادِل", ar: "وَأَنَا فِي قَرْيَتِي أَصِلُ إِلَى عَمَلِي فِي عَشْرِ دَقَائِقَ مَشْيًا.", id: "Sedangkan aku di desaku sampai ke tempat kerja dalam sepuluh menit berjalan kaki." },
          { speaker: "بَشِير", ar: "مَحْظُوظٌ أَنْتَ! وَلَكِنْ هَلْ تَجِدُ فِي قَرْيَتِكَ مَا تَحْتَاجُ إِلَيْهِ؟", id: "Kamu beruntung! Tetapi apakah kamu menemukan yang kamu butuhkan di desamu?" },
          { speaker: "عَادِل", ar: "هَذَا هُوَ الثَّمَنُ. الْمُسْتَشْفَى الْكَبِيرُ بَعِيدٌ، وَالْجَامِعَةُ أَبْعَدُ.", id: "Inilah harganya. Rumah sakit besar jauh, dan universitas lebih jauh lagi." },
          { speaker: "بَشِير", ar: "إِذَنْ لِكُلِّ مَكَانٍ مَا لَهُ وَمَا عَلَيْهِ.", id: "Jadi setiap tempat punya kelebihan dan kekurangannya." },
          { speaker: "عَادِل", ar: "تَمَامًا. الْمَدِينَةُ أَكْثَرُ فُرَصًا، وَالرِّيفُ أَكْثَرُ هُدُوءًا.", id: "Tepat sekali. Kota lebih banyak peluang, dan desa lebih tenang." },
          { speaker: "بَشِير", ar: "وَأَيُّهُمَا أَفْضَلُ لِتَرْبِيَةِ الْأَوْلَادِ فِي رَأْيِكَ؟", id: "Menurutmu mana yang lebih baik untuk membesarkan anak?" },
          { speaker: "عَادِل", ar: "الرِّيفُ فِي الصِّغَرِ، وَالْمَدِينَةُ عِنْدَ الدِّرَاسَةِ الْجَامِعِيَّةِ.", id: "Desa saat mereka kecil, dan kota ketika kuliah." },
          { speaker: "بَشِير", ar: "رَأْيٌ جَمِيلٌ. لَعَلَّنِي أَنْتَقِلُ إِلَى ضَاحِيَةٍ بَيْنَ الِاثْنَيْنِ.", id: "Pendapat yang bagus. Barangkali aku akan pindah ke pinggiran, di antara keduanya." },
        ],
      },
      {
        title: "Menanyakan arah",
        titleAr: "السُّؤَالُ عَنِ الطَّرِيقِ",
        setting: "Seorang pendatang tersesat dan bertanya kepada penduduk setempat.",
        lines: [
          { speaker: "الزَّائِر", ar: "عَفْوًا يَا أَخِي، أَيْنَ مَحَطَّةُ الْحَافِلَاتِ الْمَرْكَزِيَّةُ؟", id: "Permisi, Saudaraku, di mana terminal bus pusat?" },
          { speaker: "السَّاكِن", ar: "لَيْسَتْ بَعِيدَةً. أَأَنْتَ مَاشٍ أَمْ مَعَكَ سَيَّارَةٌ؟", id: "Tidak jauh. Anda berjalan kaki atau membawa mobil?" },
          { speaker: "الزَّائِر", ar: "أَنَا مَاشٍ، وَصَلْتُ الْمَدِينَةَ الْيَوْمَ وَلَا أَعْرِفُ شَوَارِعَهَا.", id: "Saya jalan kaki; saya baru tiba di kota ini hari ini dan tidak tahu jalan-jalannya." },
          { speaker: "السَّاكِن", ar: "اِمْشِ مُسْتَقِيمًا فِي هَذَا الشَّارِعِ حَتَّى تَصِلَ إِلَى الْإِشَارَةِ الثَّانِيَةِ.", id: "Jalan lurus di jalan ini sampai Anda tiba di lampu lalu lintas kedua." },
          { speaker: "الزَّائِر", ar: "الثَّانِيَةِ وَلَيْسَتِ الْأُولَى؟", id: "Yang kedua, bukan yang pertama?" },
          { speaker: "السَّاكِن", ar: "نَعَمْ، الثَّانِيَةِ. ثُمَّ اِتَّجِهْ يَمِينًا وَسَتَرَى مَسْجِدًا كَبِيرًا.", id: "Ya, yang kedua. Lalu belok kanan dan Anda akan melihat masjid besar." },
          { speaker: "الزَّائِر", ar: "وَبَعْدَ الْمَسْجِدِ؟", id: "Dan setelah masjid?" },
          { speaker: "السَّاكِن", ar: "الْمَحَطَّةُ خَلْفَهُ مُبَاشَرَةً، عَلَى يَسَارِكَ.", id: "Terminalnya persis di belakangnya, di sebelah kiri Anda." },
          { speaker: "الزَّائِر", ar: "كَمْ دَقِيقَةً تَقْرِيبًا مِنْ هُنَا؟", id: "Kira-kira berapa menit dari sini?" },
          { speaker: "السَّاكِن", ar: "عَشْرُ دَقَائِقَ مَشْيًا، أَوْ خَمْسٌ إِنْ أَسْرَعْتَ.", id: "Sepuluh menit jalan kaki, atau lima kalau Anda mempercepat langkah." },
          { speaker: "الزَّائِر", ar: "وَهَلْ هُنَاكَ حَافِلَةٌ تَذْهَبُ إِلَى الْمَطَارِ؟", id: "Apakah ada bus yang menuju bandara?" },
          { speaker: "السَّاكِن", ar: "نَعَمْ، رَقْمُ سَبْعَةَ عَشَرَ. تَخْرُجُ كُلَّ نِصْفِ سَاعَةٍ.", id: "Ya, nomor tujuh belas. Berangkat setiap setengah jam." },
          { speaker: "الزَّائِر", ar: "شُكْرًا جَزِيلًا عَلَى الْإِرْشَادِ، أَرَاحَكَ اللهُ.", id: "Terima kasih banyak atas petunjuknya, semoga Allah memberimu kelapangan." },
        ],
      },
    ],
    qiraah: {
      title: "Kota: yang diberi dan yang diambil",
      titleAr: "الْمَدِينَةُ: مَا تُعْطِي وَمَا تَأْخُذُ",
      preVocab: [
        { ar: "هِجْرَة", translit: "hijrah", id: "perpindahan, urbanisasi" },
        { ar: "ضَاحِيَة", translit: "dhaahiyah", id: "pinggiran kota" },
        { ar: "خَدَمَات", translit: "khadamaat", id: "layanan, fasilitas" },
        { ar: "كَثَافَة", translit: "katsaafah", id: "kepadatan" },
        { ar: "تَخْطِيط", translit: "takhthiith", id: "perencanaan, tata kota" },
        { ar: "يَجْذِبُ", translit: "yajdzibu", id: "(dia/ia) menarik" },
        { ar: "يَشْتَاقُ", translit: "yasytaaqu", id: "(dia) merindukan" },
        { ar: "ثَمَن", translit: "tsaman", id: "harga, konsekuensi" },
      ],
      paragraphs: [
        {
          ar: "تَجْذِبُ الْمُدُنُ الْكَبِيرَةُ كُلَّ سَنَةٍ أُلُوفًا مِنَ الشَّبَابِ الَّذِينَ يَتْرُكُونَ قُرَاهُمْ بَحْثًا عَنْ عَمَلٍ أَوْ دِرَاسَةٍ. وَلَا عَجَبَ فِي ذَلِكَ؛ فَفِي الْمَدِينَةِ الْجَامِعَاتُ وَالْمُسْتَشْفَيَاتُ وَالشَّرِكَاتُ، وَفِيهَا مِنَ الْخَدَمَاتِ مَا لَا يَجِدُهُ الْمَرْءُ فِي قَرْيَتِهِ.",
          id: "Kota-kota besar setiap tahun menarik ribuan pemuda yang meninggalkan desa mereka untuk mencari pekerjaan atau pendidikan. Itu tidak mengherankan; di kota terdapat universitas, rumah sakit, dan perusahaan, serta layanan yang tidak ditemukan seseorang di desanya.",
        },
        {
          ar: "غَيْرَ أَنَّ الْمَدِينَةَ تَأْخُذُ فِي الْمُقَابِلِ ثَمَنًا لَا يَنْتَبِهُ إِلَيْهِ الْقَادِمُ الْجَدِيدُ إِلَّا بَعْدَ حِينٍ. فَهُوَ يَقْضِي سَاعَتَيْنِ كُلَّ يَوْمٍ فِي الطَّرِيقِ بَيْنَ بَيْتِهِ وَعَمَلِهِ، وَيَدْفَعُ أُجْرَةً عَالِيَةً لِشَقَّةٍ صَغِيرَةٍ، وَيَعِيشُ بَيْنَ ضَجِيجٍ لَا يَتَوَقَّفُ.",
          id: "Namun sebagai gantinya, kota mengambil harga yang tidak disadari pendatang baru kecuali setelah beberapa waktu. Ia menghabiskan dua jam setiap hari di jalan antara rumah dan tempat kerjanya, membayar sewa mahal untuk apartemen kecil, dan hidup di tengah kebisingan yang tak berhenti.",
        },
        {
          ar: "وَمَعَ ازْدِيَادِ الْكَثَافَةِ السُّكَّانِيَّةِ تَزْدَادُ الْمَشَاكِلُ. فَكُلَّمَا زَادَ عَدَدُ السَّيَّارَاتِ زَادَ الزِّحَامُ وَالتَّلَوُّثُ، وَكُلَّمَا ارْتَفَعَتِ الْأَبْنِيَةُ قَلَّتِ الْحَدَائِقُ. وَبَعْضُ الْمُدُنِ تَنْمُو بِلَا تَخْطِيطٍ، فَتَصِيرُ وَاسِعَةً فِي مِسَاحَتِهَا ضَيِّقَةً فِي حَيَاتِهَا.",
          id: "Seiring bertambahnya kepadatan penduduk, masalah pun bertambah. Setiap kali jumlah mobil bertambah, kemacetan dan polusi ikut bertambah; setiap kali bangunan meninggi, taman-taman berkurang. Sebagian kota tumbuh tanpa perencanaan, sehingga ia menjadi luas wilayahnya tetapi sempit kehidupannya.",
        },
        {
          ar: "وَلِهَذَا يَشْتَاقُ كَثِيرٌ مِنْ سُكَّانِ الْمُدُنِ إِلَى الرِّيفِ فِي نِهَايَةِ كُلِّ أُسْبُوعٍ. يَذْهَبُونَ إِلَيْهِ لِيَتَنَفَّسُوا هَوَاءً نَظِيفًا وَيَنَامُوا لَيْلَةً بِلَا ضَجِيجٍ، ثُمَّ يَعُودُونَ يَوْمَ الْأَحَدِ إِلَى الْمَدِينَةِ الَّتِي لَا يَسْتَطِيعُونَ تَرْكَهَا.",
          id: "Karena itulah banyak penduduk kota merindukan desa setiap akhir pekan. Mereka pergi ke sana untuk menghirup udara bersih dan tidur satu malam tanpa kebisingan, lalu kembali pada hari Ahad ke kota yang tidak sanggup mereka tinggalkan.",
        },
        {
          ar: "وَالْحَلُّ لَيْسَ فِي تَرْكِ الْمُدُنِ، وَإِنَّمَا فِي حُسْنِ تَخْطِيطِهَا. فَتَوْسِيعُ الْمُوَاصَلَاتِ الْعَامَّةِ يُخَفِّفُ الزِّحَامَ أَكْثَرَ مِنْ بِنَاءِ طَرِيقٍ جَدِيدٍ كُلَّ سَنَةٍ، وَنَقْلُ بَعْضِ الْخَدَمَاتِ إِلَى الضَّوَاحِي وَالْقُرَى يُعِيدُ التَّوَازُنَ بَيْنَ الْمَكَانَيْنِ.",
          id: "Solusinya bukan meninggalkan kota, melainkan menatanya dengan baik. Memperluas transportasi umum lebih meringankan kemacetan daripada membangun jalan baru setiap tahun, dan memindahkan sebagian layanan ke pinggiran kota serta desa akan mengembalikan keseimbangan antara kedua tempat itu.",
        },
      ],
      questions: [
        {
          ar: "لِمَاذَا يَتْرُكُ الشَّبَابُ قُرَاهُمْ؟",
          id: "Mengapa para pemuda meninggalkan desa mereka?",
          answerAr: "بَحْثًا عَنْ عَمَلٍ أَوْ دِرَاسَةٍ.",
          answerId: "Untuk mencari pekerjaan atau pendidikan.",
        },
        {
          ar: "مَا الثَّمَنُ الَّذِي تَأْخُذُهُ الْمَدِينَةُ؟",
          id: "Apa harga yang diambil oleh kota?",
          answerAr: "سَاعَاتٌ ضَائِعَةٌ فِي الطَّرِيقِ، وَأُجْرَةٌ عَالِيَةٌ، وَضَجِيجٌ لَا يَتَوَقَّفُ.",
          answerId: "Waktu yang terbuang di jalan, sewa yang mahal, dan kebisingan yang tak berhenti.",
        },
        {
          ar: "مَاذَا يَحْدُثُ لِلْمَدِينَةِ الَّتِي تَنْمُو بِلَا تَخْطِيطٍ؟",
          id: "Apa yang terjadi pada kota yang tumbuh tanpa perencanaan?",
          answerAr: "تَصِيرُ وَاسِعَةً فِي مِسَاحَتِهَا ضَيِّقَةً فِي حَيَاتِهَا.",
          answerId: "Ia menjadi luas wilayahnya tetapi sempit kehidupannya.",
        },
        {
          ar: "مَا الْحَلُّ الَّذِي اقْتَرَحَهُ الْكَاتِبُ؟",
          id: "Solusi apa yang diusulkan penulis?",
          answerAr: "حُسْنُ التَّخْطِيطِ، وَتَوْسِيعُ الْمُوَاصَلَاتِ الْعَامَّةِ، وَنَقْلُ بَعْضِ الْخَدَمَاتِ إِلَى الضَّوَاحِي.",
          answerId: "Perencanaan yang baik, memperluas transportasi umum, dan memindahkan sebagian layanan ke pinggiran kota.",
        },
      ],
    },
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
    istima: {
      title: "Belajar tidak berhenti",
      titleAr: "التَّعَلُّمُ لَا يَتَوَقَّفُ",
      intro: {
        ar: "لَمْ يَعُدِ التَّعَلُّمُ مَرْحَلَةً تَنْتَهِي بِالشَّهَادَةِ، بَلْ صَارَ عَادَةً تُلَازِمُ الْإِنْسَانَ مَا دَامَ حَيًّا.",
        id: "Belajar tidak lagi menjadi sebuah tahap yang berakhir dengan ijazah, tetapi telah menjadi kebiasaan yang menyertai seseorang selama ia hidup.",
      },
      items: [
        {
          ar: "قَرَأَ الطَّالِبُ عِشْرِينَ صَفْحَةً كُلَّ يَوْمٍ، فَأَنْهَى فِي السَّنَةِ أَكْثَرَ مِنْ عِشْرِينَ كِتَابًا.",
          id: "Seorang mahasiswa membaca dua puluh halaman setiap hari, sehingga dalam setahun ia menyelesaikan lebih dari dua puluh buku.",
          question: "Berapa buku yang ia selesaikan dalam setahun?",
          options: [
            "Kurang dari sepuluh",
            "Lebih dari dua puluh",
            "Tepat lima",
            "Seratus buku",
          ],
          answerIndex: 1,
        },
        {
          ar: "لَمْ تَقُمِ الْحَضَارَاتُ عَلَى الْمَالِ وَحْدَهُ، وَإِنَّمَا قَامَتْ عَلَى الْعِلْمِ وَالْبَحْثِ وَالصَّبْرِ الطَّوِيلِ.",
          id: "Peradaban-peradaban tidak berdiri di atas harta semata, melainkan berdiri di atas ilmu, penelitian, dan kesabaran yang panjang.",
          question: "Di atas apa peradaban berdiri?",
          options: [
            "Di atas harta semata",
            "Di atas ilmu, penelitian, dan kesabaran",
            "Di atas jumlah penduduk",
            "Di atas luas wilayah",
          ],
          answerIndex: 1,
        },
        {
          ar: "قَالَ الْأُسْتَاذُ: مَنْ سَأَلَ فَقَدْ تَعَلَّمَ نِصْفَ الْعِلْمِ، وَمَنْ سَكَتَ خَجَلًا بَقِيَ جَاهِلًا.",
          id: "Sang guru berkata: Siapa yang bertanya sungguh ia telah mempelajari separuh ilmu, dan siapa yang diam karena malu akan tetap bodoh.",
          question: "Apa akibat diam karena malu bertanya?",
          options: [
            "Ia menjadi lebih pandai",
            "Ia tetap bodoh",
            "Ia lulus lebih cepat",
            "Gurunya senang",
          ],
          answerIndex: 1,
        },
        {
          ar: "حَصَلَتِ الْبَاحِثَةُ عَلَى مِنْحَةٍ لِلدِّرَاسَةِ فِي الْخَارِجِ بَعْدَ ثَلَاثِ مُحَاوَلَاتٍ فَاشِلَةٍ.",
          id: "Peneliti perempuan itu memperoleh beasiswa untuk belajar di luar negeri setelah tiga kali percobaan yang gagal.",
          question: "Berapa kali ia gagal sebelum berhasil?",
          options: ["Sekali", "Dua kali", "Tiga kali", "Ia tidak pernah gagal"],
          answerIndex: 2,
        },
      ],
    },
    dialogues: [
      {
        title: "Kabar beasiswa",
        titleAr: "خَبَرُ الْمِنْحَةِ",
        setting: "Seorang teman memberi selamat atas beasiswa dan bertanya tentang rencananya.",
        lines: [
          { speaker: "مَنْصُور", ar: "هَلْ حَصَلْتَ عَلَى الْمِنْحَةِ الَّتِي تَقَدَّمْتَ لَهَا؟", id: "Apakah kamu mendapatkan beasiswa yang kamu lamar?" },
          { speaker: "طَارِق", ar: "نَعَمْ، وَصَلَتْنِي الرِّسَالَةُ أَمْسِ. سَأَدْرُسُ فِي الْخَارِجِ السَّنَةَ الْقَادِمَةَ.", id: "Ya, suratnya sampai kemarin. Aku akan belajar di luar negeri tahun depan." },
          { speaker: "مَنْصُور", ar: "مَبْرُوكٌ! أَلَمْ تُحَاوِلْ مِنْ قَبْلُ مَرَّتَيْنِ؟", id: "Selamat! Bukankah sebelumnya kamu sudah mencoba dua kali?" },
          { speaker: "طَارِق", ar: "ثَلَاثَ مَرَّاتٍ فِي الْحَقِيقَةِ، وَفَشِلْتُ فِي كُلِّهَا.", id: "Sebenarnya tiga kali, dan aku gagal di semuanya." },
          { speaker: "مَنْصُور", ar: "وَمَا الَّذِي تَغَيَّرَ هَذِهِ الْمَرَّةَ؟", id: "Apa yang berbeda kali ini?" },
          { speaker: "طَارِق", ar: "حَسَّنْتُ لُغَتِي، وَكَتَبْتُ خُطَّةَ بَحْثٍ أَوْضَحَ مِنَ السَّابِقَةِ.", id: "Aku memperbaiki bahasaku, dan menulis rencana penelitian yang lebih jelas dari sebelumnya." },
          { speaker: "مَنْصُور", ar: "وَمَا تَخَصُّصُكَ بِالضَّبْطِ؟", id: "Apa persisnya jurusanmu?" },
          { speaker: "طَارِق", ar: "تَارِيخُ الْحَضَارَةِ الْإِسْلَامِيَّةِ، وَبِالتَّحْدِيدِ الْمَكْتَبَاتُ الْقَدِيمَةُ.", id: "Sejarah peradaban Islam, khususnya perpustakaan-perpustakaan kuno." },
          { speaker: "مَنْصُور", ar: "مَوْضُوعٌ جَمِيلٌ! وَكَمْ سَنَةً سَتَبْقَى هُنَاكَ؟", id: "Topik yang menarik! Berapa tahun kamu akan tinggal di sana?" },
          { speaker: "طَارِق", ar: "أَرْبَعَ سَنَوَاتٍ إِنْ شَاءَ اللهُ، وَقَدْ تَزِيدُ سَنَةً.", id: "Empat tahun insya Allah, dan bisa bertambah setahun." },
          { speaker: "مَنْصُور", ar: "أَلَا تَخَافُ مِنَ الْغُرْبَةِ وَالْبُعْدِ عَنِ الْأَهْلِ؟", id: "Apakah kamu tidak takut akan keterasingan dan jauh dari keluarga?" },
          { speaker: "طَارِق", ar: "أَخَافُ، وَلَكِنَّ الْفُرْصَةَ لَا تَتَكَرَّرُ كَثِيرًا فِي الْعُمْرِ.", id: "Aku takut, tetapi kesempatan seperti ini tidak sering berulang dalam hidup." },
          { speaker: "مَنْصُور", ar: "اِجْتَهِدْ وَلَا تُضَيِّعِ الْوَقْتَ، فَالسَّنَوَاتُ تَمُرُّ سَرِيعًا.", id: "Bersungguh-sungguhlah dan jangan sia-siakan waktu, karena tahun-tahun berlalu dengan cepat." },
          { speaker: "طَارِق", ar: "إِنْ شَاءَ اللهُ، لَنْ أُخَيِّبَ ظَنَّكَ وَلَا ظَنَّ أَهْلِي.", id: "Insya Allah, aku tidak akan mengecewakanmu maupun keluargaku." },
        ],
      },
      {
        title: "Di perpustakaan",
        titleAr: "فِي الْمَكْتَبَةِ",
        setting: "Seorang mahasiswa meminta bantuan pustakawan untuk mencari rujukan.",
        lines: [
          { speaker: "الطَّالِب", ar: "لَوْ سَمَحْتِ، أَبْحَثُ عَنْ مَرَاجِعَ فِي تَارِيخِ الطِّبِّ.", id: "Permisi, saya sedang mencari referensi tentang sejarah kedokteran." },
          { speaker: "الْمُوَظَّفَة", ar: "أَتُرِيدُ كُتُبًا عَامَّةً أَمْ بُحُوثًا مُتَخَصِّصَةً؟", id: "Anda ingin buku umum atau penelitian khusus?" },
          { speaker: "الطَّالِب", ar: "بُحُوثًا مُتَخَصِّصَةً، فَأَنَا أُعِدُّ رِسَالَةً جَامِعِيَّةً.", id: "Penelitian khusus, karena saya sedang menyusun skripsi." },
          { speaker: "الْمُوَظَّفَة", ar: "إِذَنِ اصْعَدْ إِلَى الطَّابِقِ الثَّانِي، قِسْمُ الرَّسَائِلِ هُنَاكَ.", id: "Kalau begitu naiklah ke lantai dua, bagian tesis ada di sana." },
          { speaker: "الطَّالِب", ar: "وَهَلْ أَسْتَطِيعُ أَنْ أَسْتَعِيرَ مِنْهَا؟", id: "Apakah saya bisa meminjamnya?" },
          { speaker: "الْمُوَظَّفَة", ar: "لَا، الرَّسَائِلُ لِلْقِرَاءَةِ دَاخِلَ الْمَكْتَبَةِ فَقَطْ.", id: "Tidak, tesis hanya untuk dibaca di dalam perpustakaan." },
          { speaker: "الطَّالِب", ar: "وَمَاذَا عَنِ النُّسَخِ الْإِلِكْتِرُونِيَّةِ؟", id: "Bagaimana dengan salinan elektroniknya?" },
          { speaker: "الْمُوَظَّفَة", ar: "مَوْجُودَةٌ عَلَى مَوْقِعِ الْجَامِعَةِ، وَتَحْتَاجُ إِلَى رَقْمِكَ الطُّلَّابِيِّ.", id: "Tersedia di situs universitas, dan Anda butuh nomor mahasiswa Anda." },
          { speaker: "الطَّالِب", ar: "مُمْتَازٌ. وَكَمْ كِتَابًا يُمْكِنُنِي أَنْ أَسْتَعِيرَ فِي الْمَرَّةِ الْوَاحِدَةِ؟", id: "Bagus. Berapa buku yang bisa saya pinjam sekali waktu?" },
          { speaker: "الْمُوَظَّفَة", ar: "خَمْسَةَ كُتُبٍ لِمُدَّةِ أُسْبُوعَيْنِ، وَيُمْكِنُ التَّجْدِيدُ مَرَّةً وَاحِدَةً.", id: "Lima buku selama dua pekan, dan bisa diperpanjang sekali." },
          { speaker: "الطَّالِب", ar: "وَإِنْ تَأَخَّرْتُ يَوْمًا أَوْ يَوْمَيْنِ؟", id: "Bagaimana kalau saya terlambat satu atau dua hari?" },
          { speaker: "الْمُوَظَّفَة", ar: "هُنَاكَ غَرَامَةٌ صَغِيرَةٌ عَنْ كُلِّ يَوْمٍ، فَانْتَبِهْ لِلْمَوْعِدِ.", id: "Ada denda kecil untuk setiap hari, jadi perhatikan tenggatnya." },
          { speaker: "الطَّالِب", ar: "شُكْرًا لَكِ، سَاعَدْتِنِي كَثِيرًا.", id: "Terima kasih, Anda sangat membantu saya." },
        ],
      },
    ],
    qiraah: {
      title: "Ilmu dibangun setahap demi setahap",
      titleAr: "الْعِلْمُ يُبْنَى دَرَجَةً دَرَجَةً",
      preVocab: [
        { ar: "مَرْجِع", translit: "marji'", id: "rujukan, referensi" },
        { ar: "مُثَابَرَة", translit: "mutsaabarah", id: "ketekunan" },
        { ar: "تَجْرِبَة", translit: "tajribah", id: "percobaan, eksperimen" },
        { ar: "فَشَل", translit: "fasyal", id: "kegagalan" },
        { ar: "نَظَرِيَّة", translit: "nazhariyyah", id: "teori" },
        { ar: "يُرَاجِعُ", translit: "yuraaji'u", id: "(dia) mengulang kaji" },
        { ar: "يُنَاقِشُ", translit: "yunaaqisyu", id: "(dia) mendiskusikan" },
        { ar: "أَثَر", translit: "atsar", id: "jejak, pengaruh" },
      ],
      paragraphs: [
        {
          ar: "يَظُنُّ بَعْضُ الطُّلَّابِ أَنَّ الْعِلْمَ يُؤْخَذُ دَفْعَةً وَاحِدَةً فِي لَيَالٍ قَلِيلَةٍ قَبْلَ الِامْتِحَانِ. وَهَذَا وَهْمٌ كَبِيرٌ؛ فَإِنَّ مَا يَدْخُلُ الذِّهْنَ عَلَى عَجَلٍ يَخْرُجُ مِنْهُ عَلَى عَجَلٍ، وَلَا يَبْقَى مِنْهُ بَعْدَ أُسْبُوعٍ إِلَّا الْقَلِيلُ.",
          id: "Sebagian pelajar mengira bahwa ilmu diraih sekaligus dalam beberapa malam menjelang ujian. Ini anggapan yang keliru; sebab apa yang masuk ke pikiran secara terburu-buru akan keluar darinya dengan terburu-buru pula, dan setelah sepekan hanya tersisa sedikit saja.",
        },
        {
          ar: "وَالطَّرِيقُ الصَّحِيحُ أَنْ يَتَعَلَّمَ الْإِنْسَانُ قَلِيلًا كُلَّ يَوْمٍ. فَمَنْ قَرَأَ عِشْرِينَ صَفْحَةً يَوْمِيًّا أَنْهَى فِي السَّنَةِ أَكْثَرَ مِنْ عِشْرِينَ كِتَابًا وَهُوَ لَا يَشْعُرُ. وَالْمُثَابَرَةُ الْقَلِيلَةُ الدَّائِمَةُ أَنْفَعُ مِنَ الْجُهْدِ الْكَبِيرِ الْمُنْقَطِعِ.",
          id: "Jalan yang benar adalah seseorang belajar sedikit setiap hari. Siapa yang membaca dua puluh halaman setiap hari akan menyelesaikan lebih dari dua puluh buku dalam setahun tanpa ia sadari. Ketekunan yang sedikit tetapi berkelanjutan lebih bermanfaat daripada usaha besar yang terputus-putus.",
        },
        {
          ar: "وَمِنْ آدَابِ الطَّالِبِ أَنْ يَسْأَلَ. فَمَنْ سَأَلَ فَقَدْ تَعَلَّمَ نِصْفَ الْعِلْمِ، وَمَنْ سَكَتَ خَجَلًا بَقِيَ عَلَى جَهْلِهِ. وَلَيْسَ السُّؤَالُ عَيْبًا، وَإِنَّمَا الْعَيْبُ أَنْ يَمُرَّ عَلَى الْإِنْسَانِ الْعُمْرُ وَهُوَ يُخْفِي مَا لَا يَعْرِفُ.",
          id: "Termasuk adab seorang penuntut ilmu adalah bertanya. Siapa yang bertanya sungguh telah mempelajari separuh ilmu, dan siapa yang diam karena malu akan tetap dalam kebodohannya. Bertanya bukanlah aib; yang tercela adalah berlalunya umur seseorang sementara ia menyembunyikan apa yang tidak ia ketahui.",
        },
        {
          ar: "وَلَمْ تَقُمِ الْحَضَارَاتُ يَوْمًا عَلَى الْمَالِ وَحْدَهُ. فَالْأُمَمُ الَّتِي تَقَدَّمَتْ إِنَّمَا تَقَدَّمَتْ لِأَنَّهَا أَكْرَمَتِ الْعُلَمَاءَ، وَأَنْفَقَتْ عَلَى الْبَحْثِ، وَبَنَتِ الْمَكْتَبَاتِ. وَكَمْ مِنِ اخْتِرَاعٍ غَيَّرَ حَيَاةَ النَّاسِ كَانَ فِي أَوَّلِهِ تَجْرِبَةً صَغِيرَةً فِي غُرْفَةٍ ضَيِّقَةٍ.",
          id: "Peradaban tidak pernah berdiri di atas harta semata. Bangsa-bangsa yang maju itu maju karena mereka memuliakan para ilmuwan, membiayai penelitian, dan membangun perpustakaan. Betapa banyak penemuan yang mengubah kehidupan manusia yang pada mulanya hanyalah percobaan kecil di sebuah ruangan sempit.",
        },
        {
          ar: "وَلَا يَنْبَغِي لِلطَّالِبِ أَنْ يَيْأَسَ مِنَ الْفَشَلِ. فَكَثِيرٌ مِنَ الْبَاحِثِينَ لَمْ يَنْجَحُوا إِلَّا بَعْدَ مُحَاوَلَاتٍ خَائِبَةٍ، وَكَانَ كُلُّ فَشَلٍ يَدُلُّهُمْ عَلَى طَرِيقٍ مَسْدُودٍ فَيَتْرُكُونَهُ إِلَى غَيْرِهِ. وَمَنْ لَمْ يُخْطِئْ قَطُّ فَلَعَلَّهُ لَمْ يُحَاوِلْ شَيْئًا.",
          id: "Seorang pelajar tidak sepatutnya berputus asa karena kegagalan. Banyak peneliti tidak berhasil kecuali setelah percobaan-percobaan yang gagal, dan setiap kegagalan menunjukkan kepada mereka satu jalan buntu sehingga mereka meninggalkannya menuju jalan lain. Siapa yang tidak pernah salah sama sekali, barangkali ia memang tidak pernah mencoba apa pun.",
        },
      ],
      questions: [
        {
          ar: "لِمَاذَا لَا يَنْفَعُ التَّعَلُّمُ قَبْلَ الِامْتِحَانِ بِلَيَالٍ قَلِيلَةٍ؟",
          id: "Mengapa belajar beberapa malam sebelum ujian tidak bermanfaat?",
          answerAr: "لِأَنَّ مَا يَدْخُلُ الذِّهْنَ عَلَى عَجَلٍ يَخْرُجُ مِنْهُ عَلَى عَجَلٍ.",
          answerId: "Karena apa yang masuk ke pikiran dengan terburu-buru akan keluar dengan terburu-buru pula.",
        },
        {
          ar: "كَمْ كِتَابًا يُنْهِي مَنْ قَرَأَ عِشْرِينَ صَفْحَةً كُلَّ يَوْمٍ؟",
          id: "Berapa buku yang diselesaikan orang yang membaca dua puluh halaman setiap hari?",
          answerAr: "أَكْثَرَ مِنْ عِشْرِينَ كِتَابًا فِي السَّنَةِ.",
          answerId: "Lebih dari dua puluh buku dalam setahun.",
        },
        {
          ar: "لِمَاذَا تَقَدَّمَتِ الْأُمَمُ فِي رَأْيِ الْكَاتِبِ؟",
          id: "Menurut penulis, mengapa bangsa-bangsa itu maju?",
          answerAr: "لِأَنَّهَا أَكْرَمَتِ الْعُلَمَاءَ، وَأَنْفَقَتْ عَلَى الْبَحْثِ، وَبَنَتِ الْمَكْتَبَاتِ.",
          answerId: "Karena mereka memuliakan ilmuwan, membiayai penelitian, dan membangun perpustakaan.",
        },
        {
          ar: "كَيْفَ يَنْظُرُ الْكَاتِبُ إِلَى الْفَشَلِ؟",
          id: "Bagaimana penulis memandang kegagalan?",
          answerAr: "يَرَاهُ دَلِيلًا عَلَى طَرِيقٍ مَسْدُودٍ يُتْرَكُ إِلَى غَيْرِهِ، وَمَنْ لَمْ يُخْطِئْ لَعَلَّهُ لَمْ يُحَاوِلْ.",
          answerId: "Ia memandangnya sebagai petunjuk jalan buntu yang ditinggalkan menuju jalan lain; siapa yang tak pernah salah barangkali tak pernah mencoba.",
        },
      ],
    },
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
    istima: {
      title: "Setiap pekerjaan punya kehormatan",
      titleAr: "لِكُلِّ مِهْنَةٍ كَرَامَتُهَا",
      intro: {
        ar: "لَيْسَ فِي الْمِهَنِ مَا هُوَ حَقِيرٌ، وَإِنَّمَا الْحَقِيرُ أَنْ يَجْلِسَ الْقَادِرُ عَلَى الْعَمَلِ يَنْتَظِرُ مَا يَأْتِيهِ مِنْ غَيْرِ تَعَبٍ.",
        id: "Tidak ada pekerjaan yang hina; yang hina justru orang yang mampu bekerja tetapi duduk menanti apa yang datang kepadanya tanpa lelah.",
      },
      items: [
        {
          ar: "سَأَلَ الْمُدِيرُ الْمُتَقَدِّمَ عَنْ خِبْرَتِهِ، فَذَكَرَ خَمْسَ سَنَوَاتٍ فِي شَرِكَتَيْنِ مُخْتَلِفَتَيْنِ.",
          id: "Manajer itu bertanya kepada pelamar tentang pengalamannya, lalu ia menyebutkan lima tahun di dua perusahaan berbeda.",
          question: "Berapa lama pengalaman pelamar itu?",
          options: ["Dua tahun", "Tiga tahun", "Lima tahun", "Sepuluh tahun"],
          answerIndex: 2,
        },
        {
          ar: "لَا تَنْظُرِ الشَّرِكَاتُ الْيَوْمَ إِلَى الشَّهَادَةِ وَحْدَهَا، بَلْ تَسْأَلُ عَنِ الْمَهَارَاتِ الَّتِي يُتْقِنُهَا الْمُتَقَدِّمُ.",
          id: "Perusahaan-perusahaan hari ini tidak hanya melihat ijazah, tetapi juga menanyakan keterampilan yang dikuasai pelamar.",
          question: "Apa yang dilihat perusahaan selain ijazah?",
          options: [
            "Usia pelamar",
            "Keterampilan yang dikuasainya",
            "Tempat tinggalnya",
            "Nama keluarganya",
          ],
          answerIndex: 1,
        },
        {
          ar: "مِنْ أَسْبَابِ الْبَطَالَةِ أَنَّ بَعْضَ الشَّبَابِ يَرْفُضُونَ الْمِهَنَ الْيَدَوِيَّةَ وَيَنْتَظِرُونَ وَظِيفَةً مَكْتَبِيَّةً فَقَطْ.",
          id: "Di antara sebab pengangguran adalah sebagian pemuda menolak pekerjaan tangan dan hanya menunggu pekerjaan kantoran.",
          question: "Apa salah satu sebab pengangguran menurut teks?",
          options: [
            "Sedikitnya jumlah perusahaan",
            "Menolak pekerjaan tangan",
            "Tingginya gaji",
            "Banyaknya universitas",
          ],
          answerIndex: 1,
        },
        {
          ar: "بَدَأَ صَاحِبُ الْمَصْنَعِ عَامِلًا بَسِيطًا، ثُمَّ تَعَلَّمَ الْمِهْنَةَ سَنَوَاتٍ حَتَّى فَتَحَ مَصْنَعَهُ الْخَاصَّ.",
          id: "Pemilik pabrik itu memulai sebagai buruh biasa, lalu mempelajari profesinya bertahun-tahun hingga membuka pabriknya sendiri.",
          question: "Bagaimana pemilik pabrik itu memulai?",
          options: [
            "Sebagai manajer",
            "Sebagai buruh biasa",
            "Sebagai pemilik modal",
            "Sebagai guru",
          ],
          answerIndex: 1,
        },
      ],
    },
    dialogues: [
      {
        title: "Wawancara kerja",
        titleAr: "مُقَابَلَةُ عَمَلٍ",
        setting: "Seorang manajer mewawancarai pelamar untuk sebuah posisi.",
        lines: [
          { speaker: "الْمُدِير", ar: "أَهْلًا بِكَ. اِجْلِسْ مِنْ فَضْلِكَ. عَرِّفْنَا بِنَفْسِكَ بِاخْتِصَارٍ.", id: "Selamat datang. Silakan duduk. Perkenalkan diri Anda secara singkat." },
          { speaker: "الْمُتَقَدِّم", ar: "اِسْمِي عُمَرُ، خَرِيجُ كُلِّيَّةِ الْهَنْدَسَةِ سَنَةَ أَلْفَيْنِ وَتِسْعَةَ عَشَرَ.", id: "Nama saya Umar, lulusan Fakultas Teknik tahun 2019." },
          { speaker: "الْمُدِير", ar: "وَكَمْ سَنَةً مِنَ الْخِبْرَةِ لَدَيْكَ فِي هَذَا الْمَجَالِ؟", id: "Berapa tahun pengalaman Anda di bidang ini?" },
          { speaker: "الْمُتَقَدِّم", ar: "لَدَيَّ خَمْسُ سَنَوَاتٍ، قَضَيْتُهَا فِي شَرِكَتَيْنِ مُخْتَلِفَتَيْنِ.", id: "Saya punya lima tahun, saya lalui di dua perusahaan berbeda." },
          { speaker: "الْمُدِير", ar: "لِمَاذَا تَرَكْتَ عَمَلَكَ السَّابِقَ؟", id: "Mengapa Anda meninggalkan pekerjaan sebelumnya?" },
          { speaker: "الْمُتَقَدِّم", ar: "لَمْ يَكُنْ فِيهِ مَجَالٌ لِلتَّطَوُّرِ، وَكُنْتُ أُكَرِّرُ الْعَمَلَ نَفْسَهُ كُلَّ يَوْمٍ.", id: "Di sana tidak ada ruang untuk berkembang; saya mengulang pekerjaan yang sama setiap hari." },
          { speaker: "الْمُدِير", ar: "وَمَا الْمَهَارَاتُ الَّتِي تُتْقِنُهَا غَيْرَ تَخَصُّصِكَ؟", id: "Apa keterampilan yang Anda kuasai selain jurusan Anda?" },
          { speaker: "الْمُتَقَدِّم", ar: "أُجِيدُ اللُّغَةَ الْإِنْجِلِيزِيَّةَ، وَأَعْمَلُ عَلَى بَرَامِجِ التَّصْمِيمِ الْحَدِيثَةِ.", id: "Saya menguasai bahasa Inggris, dan bekerja dengan program desain modern." },
          { speaker: "الْمُدِير", ar: "هَذَا الْعَمَلُ يَحْتَاجُ إِلَى السَّفَرِ أَحْيَانًا. هَلْ تَقْبَلُ ذَلِكَ؟", id: "Pekerjaan ini terkadang menuntut perjalanan dinas. Apakah Anda menerimanya?" },
          { speaker: "الْمُتَقَدِّم", ar: "نَعَمْ، لَا مَانِعَ عِنْدِي إِذَا كَانَ السَّفَرُ مَعْرُوفًا مِنْ قَبْلُ.", id: "Ya, saya tidak keberatan asalkan jadwal perjalanannya diketahui sebelumnya." },
          { speaker: "الْمُدِير", ar: "وَكَمْ رَاتِبًا تَتَوَقَّعُ؟", id: "Berapa gaji yang Anda harapkan?" },
          { speaker: "الْمُتَقَدِّم", ar: "أَتْرُكُ ذَلِكَ لِتَقْدِيرِكُمْ، وَلَكِنِّي آمُلُ أَنْ يُنَاسِبَ خِبْرَتِي.", id: "Saya serahkan pada penilaian Anda, tetapi saya berharap sesuai dengan pengalaman saya." },
          { speaker: "الْمُدِير", ar: "حَسَنًا. وَمَتَى تَسْتَطِيعُ الْبَدْءَ إِنْ وَقَعَ الِاخْتِيَارُ عَلَيْكَ؟", id: "Baik. Kapan Anda bisa mulai jika terpilih?" },
          { speaker: "الْمُتَقَدِّم", ar: "بَعْدَ أُسْبُوعَيْنِ، حَتَّى أُنْهِيَ إِجْرَاءَاتِ عَمَلِي السَّابِقِ.", id: "Setelah dua pekan, agar saya menyelesaikan administrasi pekerjaan lama saya." },
        ],
      },
      {
        title: "Setelah wawancara",
        titleAr: "بَعْدَ الْمُقَابَلَةِ",
        setting: "Dua sahabat membicarakan hasil wawancara dan masalah pengangguran.",
        lines: [
          { speaker: "زَيْد", ar: "كَيْفَ كَانَتِ الْمُقَابَلَةُ؟ هَلْ كَانَتْ صَعْبَةً؟", id: "Bagaimana wawancaranya? Apakah sulit?" },
          { speaker: "عُمَر", ar: "لَمْ تَكُنْ صَعْبَةً، وَلَكِنَّ الْأَسْئِلَةَ كَانَتْ دَقِيقَةً جِدًّا.", id: "Tidak sulit, tetapi pertanyaannya sangat detail." },
          { speaker: "زَيْد", ar: "وَهَلْ سَأَلُوكَ عَنِ الشَّهَادَةِ فَقَطْ؟", id: "Apakah mereka hanya menanyakan ijazah?" },
          { speaker: "عُمَر", ar: "لَا، سَأَلُونِي عَنِ الْمَهَارَاتِ أَكْثَرَ مِنَ الشَّهَادَةِ.", id: "Tidak, mereka lebih banyak bertanya tentang keterampilan daripada ijazah." },
          { speaker: "زَيْد", ar: "هَذَا مَا لَا يَفْهَمُهُ كَثِيرٌ مِنَ الْخِرِّيجِينَ.", id: "Inilah yang tidak dipahami banyak lulusan." },
          { speaker: "عُمَر", ar: "صَحِيحٌ. أَنَا نَفْسِي تَعَلَّمْتُ الْبَرَامِجَ بَعْدَ التَّخَرُّجِ، لَا فِي الْجَامِعَةِ.", id: "Benar. Aku sendiri belajar program-program itu setelah lulus, bukan di kampus." },
          { speaker: "زَيْد", ar: "وَأَخِي مَا زَالَ بِلَا عَمَلٍ مُنْذُ سَنَتَيْنِ.", id: "Sedangkan saudaraku masih menganggur sejak dua tahun." },
          { speaker: "عُمَر", ar: "وَمَاذَا يَفْعَلُ؟ هَلْ يَبْحَثُ حَقًّا أَمْ يَنْتَظِرُ؟", id: "Apa yang ia lakukan? Apakah ia benar-benar mencari atau hanya menunggu?" },
          { speaker: "زَيْد", ar: "يَنْتَظِرُ وَظِيفَةً حُكُومِيَّةً، وَيَرْفُضُ كُلَّ عَمَلٍ آخَرَ.", id: "Ia menunggu pekerjaan pemerintah, dan menolak semua pekerjaan lain." },
          { speaker: "عُمَر", ar: "هَذِهِ مُشْكِلَةٌ. لِكُلِّ مِهْنَةٍ كَرَامَتُهَا، وَالْعَمَلُ الْيَدَوِيُّ لَيْسَ عَيْبًا.", id: "Itu masalah. Setiap pekerjaan punya kehormatannya, dan kerja tangan bukan aib." },
          { speaker: "زَيْد", ar: "قُلْتُ لَهُ ذَلِكَ مَرَّاتٍ، وَلَكِنَّهُ يَخَافُ مِنْ كَلَامِ النَّاسِ.", id: "Aku sudah mengatakannya berkali-kali, tetapi ia takut omongan orang." },
          { speaker: "عُمَر", ar: "وَكَلَامُ النَّاسِ لَا يُطْعِمُ خُبْزًا. اُنْصَحْهُ أَنْ يَبْدَأَ بِأَيِّ شَيْءٍ.", id: "Padahal omongan orang tidak memberi makan. Nasihati dia untuk memulai dari apa pun." },
          { speaker: "زَيْد", ar: "سَأُحَاوِلُ مَرَّةً أُخْرَى، وَلَعَلَّ قِصَّتَكَ تُشَجِّعُهُ.", id: "Aku akan mencoba sekali lagi, semoga kisahmu memberinya semangat." },
        ],
      },
    ],
    qiraah: {
      title: "Antara ijazah dan keterampilan",
      titleAr: "بَيْنَ الشَّهَادَةِ وَالْمَهَارَةِ",
      preVocab: [
        { ar: "سُوقُ الْعَمَلِ", translit: "suuq al-'amal", id: "pasar kerja" },
        { ar: "تَدْرِيب", translit: "tadriib", id: "pelatihan" },
        { ar: "خِرِّيج", translit: "khirriij", id: "lulusan" },
        { ar: "مَجَال", translit: "majaal", id: "bidang" },
        { ar: "أَجْر", translit: "ajr", id: "upah" },
        { ar: "يَتْقِنُ", translit: "yatqinu", id: "(dia) mahir, terampil" },
        { ar: "يَرْفُضُ", translit: "yarfudhu", id: "(dia) menolak" },
        { ar: "كَرَامَة", translit: "karaamah", id: "kehormatan, martabat" },
      ],
      paragraphs: [
        {
          ar: "يَخْرُجُ مِنَ الْجَامِعَاتِ كُلَّ سَنَةٍ أُلُوفٌ مِنَ الْخِرِّيجِينَ، وَفِي أَيْدِيهِمْ شَهَادَاتٌ عَالِيَةٌ. ثُمَّ يَقِفُ كَثِيرٌ مِنْهُمْ عَلَى أَبْوَابِ الشَّرِكَاتِ سَنَةً أَوْ سَنَتَيْنِ لَا يَجِدُ عَمَلًا، فَيَتَسَاءَلُ: أَيْنَ الْخَلَلُ؟",
          id: "Setiap tahun ribuan lulusan keluar dari universitas dengan ijazah tinggi di tangan mereka. Kemudian banyak di antara mereka berdiri di depan pintu perusahaan selama setahun atau dua tahun tanpa mendapat pekerjaan, lalu bertanya-tanya: di mana letak kesalahannya?",
        },
        {
          ar: "وَالْجَوَابُ أَنَّ سُوقَ الْعَمَلِ تَغَيَّرَ. فَالشَّرِكَاتُ الْيَوْمَ لَا تَنْظُرُ إِلَى الشَّهَادَةِ وَحْدَهَا، وَإِنَّمَا تَسْأَلُ: مَاذَا تُتْقِنُ؟ وَمَاذَا تَسْتَطِيعُ أَنْ تَعْمَلَ مِنْ أَوَّلِ يَوْمٍ؟ وَالشَّهَادَةُ تَقُولُ أَيْنَ دَرَسْتَ، وَلَكِنَّهَا لَا تَقُولُ مَاذَا تُحْسِنُ.",
          id: "Jawabannya, pasar kerja telah berubah. Perusahaan hari ini tidak melihat ijazah semata, tetapi bertanya: apa yang kamu kuasai? Dan apa yang bisa kamu kerjakan sejak hari pertama? Ijazah memberitahu di mana kamu belajar, tetapi ia tidak memberitahu apa yang kamu kuasai.",
        },
        {
          ar: "وَلِذَلِكَ صَارَ التَّدْرِيبُ ضَرُورَةً لَا تَرَفًا. فَعَلَى الطَّالِبِ أَنْ يَعْمَلَ فِي عُطْلَتِهِ وَلَوْ بِأَجْرٍ قَلِيلٍ، لِيَتَعَلَّمَ كَيْفَ تَسِيرُ الْأُمُورُ خَارِجَ قَاعَةِ الدَّرْسِ. فَسَنَةٌ وَاحِدَةٌ مِنَ الْعَمَلِ الْحَقِيقِيِّ قَدْ تُعَلِّمُهُ مَا لَا تُعَلِّمُهُ خَمْسُ سَنَوَاتٍ مِنَ الْقِرَاءَةِ.",
          id: "Karena itu pelatihan menjadi kebutuhan, bukan kemewahan. Seorang mahasiswa hendaknya bekerja saat liburan meski dengan upah kecil, agar belajar bagaimana segala sesuatu berjalan di luar ruang kelas. Satu tahun kerja nyata bisa mengajarinya apa yang tidak diajarkan lima tahun membaca.",
        },
        {
          ar: "وَمِنْ أَسْبَابِ الْبَطَالَةِ أَيْضًا نَظْرَةُ النَّاسِ إِلَى الْمِهَنِ. فَبَعْضُ الشَّبَابِ يَرْفُضُ الْعَمَلَ الْيَدَوِيَّ وَيَنْتَظِرُ وَظِيفَةً مَكْتَبِيَّةً وَحْدَهَا، مَعَ أَنَّ الْمُجْتَمَعَ يَحْتَاجُ إِلَى النَّجَّارِ وَالْكَهْرَبَائِيِّ حَاجَتَهُ إِلَى الْمُوَظَّفِ. وَلَيْسَ فِي الْمِهَنِ مَا هُوَ حَقِيرٌ؛ الْحَقِيرُ أَنْ يَقْدِرَ الْإِنْسَانُ عَلَى الْعَمَلِ ثُمَّ يَجْلِسَ.",
          id: "Di antara sebab pengangguran juga adalah cara orang memandang profesi. Sebagian pemuda menolak kerja tangan dan hanya menunggu pekerjaan kantoran, padahal masyarakat membutuhkan tukang kayu dan tukang listrik sebagaimana ia membutuhkan pegawai. Tidak ada profesi yang hina; yang hina adalah orang yang mampu bekerja lalu memilih duduk.",
        },
        {
          ar: "وَكَمْ مِنْ صَاحِبِ مَصْنَعٍ كَبِيرٍ بَدَأَ عَامِلًا بَسِيطًا، تَعَلَّمَ الْمِهْنَةَ بِيَدَيْهِ سَنَوَاتٍ، ثُمَّ فَتَحَ لِنَفْسِهِ بَابًا وَفَتَحَ مَعَهُ أَبْوَابًا لِغَيْرِهِ. فَالْبِدَايَةُ الصَّغِيرَةُ لَيْسَتْ عَيْبًا، وَإِنَّمَا الْعَيْبُ أَنْ تَبْقَى صَغِيرًا وَأَنْتَ تَسْتَطِيعُ أَنْ تَكْبُرَ.",
          id: "Betapa banyak pemilik pabrik besar yang memulai sebagai buruh biasa, mempelajari profesinya dengan tangannya sendiri bertahun-tahun, lalu membuka satu pintu bagi dirinya dan bersamanya membuka pintu-pintu bagi orang lain. Awal yang kecil bukanlah aib; yang tercela adalah tetap kecil padahal kamu mampu bertumbuh.",
        },
      ],
      questions: [
        {
          ar: "مَاذَا تَسْأَلُ الشَّرِكَاتُ الْيَوْمَ غَيْرَ الشَّهَادَةِ؟",
          id: "Apa yang ditanyakan perusahaan hari ini selain ijazah?",
          answerAr: "تَسْأَلُ: مَاذَا تُتْقِنُ؟ وَمَاذَا تَسْتَطِيعُ أَنْ تَعْمَلَ مِنْ أَوَّلِ يَوْمٍ؟",
          answerId: "Mereka bertanya: apa yang kamu kuasai, dan apa yang bisa kamu kerjakan sejak hari pertama?",
        },
        {
          ar: "لِمَاذَا يَنْبَغِي لِلطَّالِبِ أَنْ يَعْمَلَ فِي عُطْلَتِهِ؟",
          id: "Mengapa seorang mahasiswa sebaiknya bekerja saat liburan?",
          answerAr: "لِيَتَعَلَّمَ كَيْفَ تَسِيرُ الْأُمُورُ خَارِجَ قَاعَةِ الدَّرْسِ.",
          answerId: "Agar ia belajar bagaimana segala sesuatu berjalan di luar ruang kelas.",
        },
        {
          ar: "مَا مَوْقِفُ الْكَاتِبِ مِنَ الْعَمَلِ الْيَدَوِيِّ؟",
          id: "Bagaimana sikap penulis terhadap kerja tangan?",
          answerAr: "يَرَى أَنَّهُ لَيْسَ عَيْبًا، وَأَنَّ الْمُجْتَمَعَ يَحْتَاجُ إِلَيْهِ كَحَاجَتِهِ إِلَى الْمُوَظَّفِ.",
          answerId: "Ia memandangnya bukan aib, dan masyarakat membutuhkannya sebagaimana membutuhkan pegawai.",
        },
        {
          ar: "مَتَى تَكُونُ الْبِدَايَةُ الصَّغِيرَةُ عَيْبًا؟",
          id: "Kapan awal yang kecil menjadi sebuah aib?",
          answerAr: "لَيْسَتْ عَيْبًا أَبَدًا، وَإِنَّمَا الْعَيْبُ أَنْ تَبْقَى صَغِيرًا وَأَنْتَ تَسْتَطِيعُ أَنْ تَكْبُرَ.",
          answerId: "Ia tidak pernah menjadi aib; yang tercela adalah tetap kecil padahal mampu bertumbuh.",
        },
      ],
    },
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
    istima: {
      title: "Bahasa yang menyatukan",
      titleAr: "لُغَةٌ تَجْمَعُ",
      intro: {
        ar: "الْعَرَبِيَّةُ لُغَةٌ يَتَكَلَّمُهَا مِئَاتُ الْمَلَايِينِ، وَيَقْرَأُ بِهَا الْمُسْلِمُونَ فِي مَشَارِقِ الْأَرْضِ وَمَغَارِبِهَا، وَهِيَ لُغَةٌ وَاحِدَةٌ رَغْمَ تَعَدُّدِ لَهَجَاتِهَا.",
        id: "Bahasa Arab adalah bahasa yang dituturkan ratusan juta orang, dan dibaca kaum muslimin di belahan timur maupun barat bumi; ia satu bahasa meskipun dialeknya bermacam-macam.",
      },
      items: [
        {
          ar: "يَخْتَلِفُ أَهْلُ الْبِلَادِ الْعَرَبِيَّةِ فِي لَهَجَاتِهِمْ، وَلَكِنَّهُمْ يَتَّفِقُونَ فِي الْفُصْحَى الَّتِي يَكْتُبُونَ بِهَا.",
          id: "Penduduk negeri-negeri Arab berbeda dalam dialek mereka, tetapi mereka bertemu pada bahasa fusha yang mereka gunakan untuk menulis.",
          question: "Dalam hal apa penutur Arab bersatu?",
          options: [
            "Dalam dialek sehari-hari",
            "Dalam bahasa fusha",
            "Dalam cara berpakaian",
            "Dalam makanan",
          ],
          answerIndex: 1,
        },
        {
          ar: "نَصَحَ الْأُسْتَاذُ طُلَّابَهُ بِأَنْ يَسْمَعُوا الْعَرَبِيَّةَ نِصْفَ سَاعَةٍ كُلَّ يَوْمٍ قَبْلَ أَنْ يَحْفَظُوا الْقَوَاعِدَ.",
          id: "Sang guru menasihati murid-muridnya untuk mendengarkan bahasa Arab setengah jam setiap hari sebelum menghafal kaidah.",
          question: "Apa yang dinasihatkan guru itu lebih dahulu?",
          options: [
            "Menghafal kamus",
            "Mendengarkan setengah jam setiap hari",
            "Menulis sepuluh halaman",
            "Menerjemahkan buku",
          ],
          answerIndex: 1,
        },
        {
          ar: "لَا يَكْفِي أَنْ تَعْرِفَ مَعْنَى الْكَلِمَةِ، بَلْ يَنْبَغِي أَنْ تَعْرِفَ مَتَى تُقَالُ وَمَعَ مَنْ تُسْتَعْمَلُ.",
          id: "Tidak cukup kamu mengetahui makna sebuah kata; kamu juga perlu tahu kapan ia diucapkan dan dengan siapa ia digunakan.",
          question: "Apa yang perlu diketahui selain makna kata?",
          options: [
            "Jumlah hurufnya",
            "Asal katanya saja",
            "Kapan dan dengan siapa ia dipakai",
            "Siapa penulisnya",
          ],
          answerIndex: 2,
        },
        {
          ar: "مَنْ خَافَ مِنَ الْخَطَإِ لَمْ يَتَكَلَّمْ أَبَدًا، وَمَنْ لَمْ يَتَكَلَّمْ لَمْ يُتْقِنِ اللُّغَةَ وَلَوْ حَفِظَ أَلْفَ قَاعِدَةٍ.",
          id: "Siapa yang takut salah tidak akan pernah berbicara, dan siapa yang tidak berbicara tidak akan menguasai bahasa meskipun ia hafal seribu kaidah.",
          question: "Apa akibat takut berbuat salah?",
          options: [
            "Kaidahnya makin kuat",
            "Ia tidak akan pernah berbicara",
            "Ia belajar lebih cepat",
            "Ia menjadi penerjemah",
          ],
          answerIndex: 1,
        },
      ],
    },
    dialogues: [
      {
        title: "Mendaftar kursus",
        titleAr: "التَّسْجِيلُ فِي الدَّوْرَةِ",
        setting: "Seorang calon peserta bertanya kepada petugas pendaftaran lembaga bahasa.",
        lines: [
          { speaker: "الْمُوَظَّف", ar: "أَهْلًا وَسَهْلًا، كَيْفَ أُسَاعِدُكَ؟", id: "Selamat datang, ada yang bisa saya bantu?" },
          { speaker: "الطَّالِب", ar: "أُرِيدُ الِالْتِحَاقَ بِدَوْرَةِ اللُّغَةِ الْعَرَبِيَّةِ لِغَيْرِ النَّاطِقِينَ بِهَا.", id: "Saya ingin mendaftar kursus bahasa Arab untuk penutur asing." },
          { speaker: "الْمُوَظَّف", ar: "هَلْ دَرَسْتَ الْعَرَبِيَّةَ مِنْ قَبْلُ؟", id: "Apakah Anda pernah belajar bahasa Arab sebelumnya?" },
          { speaker: "الطَّالِب", ar: "نَعَمْ، سَنَتَيْنِ فِي بَلَدِي، وَلَكِنَّ نُطْقِي مَا زَالَ ضَعِيفًا.", id: "Ya, dua tahun di negara saya, tetapi pelafalan saya masih lemah." },
          { speaker: "الْمُوَظَّف", ar: "إِذَنْ سَتَدْخُلُ اخْتِبَارَ تَحْدِيدِ الْمُسْتَوَى يَوْمَ الْأَحَدِ.", id: "Kalau begitu Anda akan mengikuti tes penempatan pada hari Ahad." },
          { speaker: "الطَّالِب", ar: "وَمَاذَا يَشْمَلُ الِاخْتِبَارُ؟", id: "Apa saja yang dicakup tes itu?" },
          { speaker: "الْمُوَظَّف", ar: "قِرَاءَةً وَاسْتِمَاعًا وَقَوَاعِدَ، ثُمَّ مُقَابَلَةً قَصِيرَةً بِالْعَرَبِيَّةِ.", id: "Membaca, menyimak, dan kaidah, lalu wawancara singkat dalam bahasa Arab." },
          { speaker: "الطَّالِب", ar: "أَخَافُ مِنَ الْمُقَابَلَةِ، فَأَنَا أُخْطِئُ كَثِيرًا حِينَ أَتَكَلَّمُ.", id: "Saya takut wawancaranya, karena saya banyak salah saat berbicara." },
          { speaker: "الْمُوَظَّف", ar: "لَا تَقْلَقْ. مَنْ خَافَ مِنَ الْخَطَإِ لَمْ يَتَكَلَّمْ أَبَدًا.", id: "Jangan khawatir. Siapa yang takut salah tidak akan pernah berbicara." },
          { speaker: "الطَّالِب", ar: "كَمْ سَاعَةً فِي الْأُسْبُوعِ؟ وَهَلِ الدَّوَامُ صَبَاحِيٌّ؟", id: "Berapa jam dalam sepekan? Apakah waktunya pagi hari?" },
          { speaker: "الْمُوَظَّف", ar: "عِشْرُونَ سَاعَةً، وَعِنْدَنَا فَصْلٌ صَبَاحِيٌّ وَآخَرُ مَسَائِيٌّ.", id: "Dua puluh jam, dan kami punya kelas pagi serta kelas sore." },
          { speaker: "الطَّالِب", ar: "الْمَسَائِيُّ أَنْسَبُ لِي لِأَنِّي أَعْمَلُ فِي النَّهَارِ.", id: "Kelas sore lebih cocok bagi saya karena saya bekerja di siang hari." },
          { speaker: "الْمُوَظَّف", ar: "لَا مُشْكِلَةَ. اِمْلَأْ هَذِهِ الِاسْتِمَارَةَ وَأَحْضِرْ صُورَةً مِنْ جَوَازِكَ.", id: "Tidak masalah. Isi formulir ini dan bawa fotokopi paspor Anda." },
          { speaker: "الطَّالِب", ar: "وَهَلْ تَنْصَحُنِي بِقَامُوسٍ مُنَاسِبٍ لِلْمُبْتَدِئِينَ؟", id: "Apakah Anda menyarankan kamus yang cocok untuk pemula?" },
          { speaker: "الْمُوَظَّف", ar: "اِبْدَأْ بِقَامُوسٍ عَرَبِيٍّ عَرَبِيٍّ مُبَسَّطٍ، وَسَيَدُلُّكَ أُسْتَاذُكَ عَلَى غَيْرِهِ.", id: "Mulailah dengan kamus Arab–Arab yang sederhana, dan guru Anda akan menunjukkan yang lain." },
        ],
      },
      {
        title: "Bagaimana cara menguasainya?",
        titleAr: "كَيْفَ نُتْقِنُهَا؟",
        setting: "Seorang murid meminta saran gurunya tentang cara belajar yang efektif.",
        lines: [
          { speaker: "الطَّالِب", ar: "يَا أُسْتَاذُ، أَدْرُسُ مُنْذُ سَنَتَيْنِ وَلَا أَشْعُرُ بِتَقَدُّمٍ.", id: "Ustaz, saya sudah belajar dua tahun tetapi tidak merasa ada kemajuan." },
          { speaker: "الْأُسْتَاذ", ar: "كَيْفَ تَدْرُسُ؟ صِفْ لِي يَوْمَكَ الدِّرَاسِيَّ.", id: "Bagaimana kamu belajar? Gambarkan hari belajarmu kepadaku." },
          { speaker: "الطَّالِب", ar: "أَحْفَظُ الْقَوَاعِدَ وَأَكْتُبُ الْكَلِمَاتِ الْجَدِيدَةَ فِي دَفْتَرٍ.", id: "Saya menghafal kaidah dan menulis kata-kata baru di buku catatan." },
          { speaker: "الْأُسْتَاذ", ar: "وَهَلْ تَسْمَعُ الْعَرَبِيَّةَ؟ وَهَلْ تَتَكَلَّمُ بِهَا مَعَ أَحَدٍ؟", id: "Apakah kamu mendengarkan bahasa Arab? Apakah kamu berbicara dengannya kepada seseorang?" },
          { speaker: "الطَّالِب", ar: "قَلِيلًا جِدًّا. أَكْثَرُ وَقْتِي فِي الْكِتَابِ.", id: "Sangat sedikit. Sebagian besar waktu saya di buku." },
          { speaker: "الْأُسْتَاذ", ar: "هُنَا الْمُشْكِلَةُ. اللُّغَةُ تُسْمَعُ وَتُقَالُ قَبْلَ أَنْ تُحْفَظَ.", id: "Di sinilah masalahnya. Bahasa itu didengar dan diucapkan sebelum dihafal." },
          { speaker: "الطَّالِب", ar: "وَلَكِنِّي لَا أَفْهَمُ كُلَّ مَا أَسْمَعُ.", id: "Tetapi saya tidak memahami semua yang saya dengar." },
          { speaker: "الْأُسْتَاذ", ar: "لَا يُشْتَرَطُ أَنْ تَفْهَمَ كُلَّ شَيْءٍ. يَكْفِي أَنْ تَفْهَمَ الْمَعْنَى الْعَامَّ.", id: "Tidak harus kamu memahami segalanya. Cukup kamu menangkap makna umumnya." },
          { speaker: "الطَّالِب", ar: "وَمَاذَا أَسْمَعُ؟ الْأَخْبَارَ أَمِ الْبَرَامِجَ؟", id: "Apa yang harus saya dengarkan? Berita atau acara-acara?" },
          { speaker: "الْأُسْتَاذ", ar: "اِبْدَأْ بِمَا تُحِبُّ. الْمَادَّةُ الْمُمِلَّةُ لَا يُدَاوِمُ عَلَيْهَا أَحَدٌ.", id: "Mulailah dari yang kamu sukai. Materi yang membosankan tak akan ditekuni siapa pun." },
          { speaker: "الطَّالِب", ar: "وَالْكَلَامُ؟ لَيْسَ حَوْلِي مَنْ يَتَكَلَّمُ الْعَرَبِيَّةَ.", id: "Bagaimana dengan berbicara? Di sekitar saya tidak ada yang berbahasa Arab." },
          { speaker: "الْأُسْتَاذ", ar: "تَكَلَّمْ مَعَ نَفْسِكَ، وَصِفْ مَا تَرَاهُ فِي طَرِيقِكَ بِالْعَرَبِيَّةِ.", id: "Berbicaralah dengan dirimu sendiri, dan deskripsikan apa yang kamu lihat di jalan dengan bahasa Arab." },
          { speaker: "الطَّالِب", ar: "فِكْرَةٌ غَرِيبَةٌ، وَلَكِنِّي سَأُجَرِّبُهَا.", id: "Ide yang aneh, tetapi saya akan mencobanya." },
          { speaker: "الْأُسْتَاذ", ar: "جَرِّبْهَا شَهْرًا، ثُمَّ أَخْبِرْنِي بِمَا وَجَدْتَ.", id: "Cobalah sebulan, lalu kabari aku apa yang kamu dapati." },
        ],
      },
    ],
    qiraah: {
      title: "Bahasa dipelajari dengan digunakan",
      titleAr: "اللُّغَةُ تُتَعَلَّمُ بِالِاسْتِعْمَالِ",
      preVocab: [
        { ar: "نَاطِق", translit: "naathiq", id: "penutur" },
        { ar: "مُمَارَسَة", translit: "mumaarasah", id: "praktik, latihan" },
        { ar: "سِيَاق", translit: "siyaaq", id: "konteks" },
        { ar: "حَصِيلَة", translit: "hashiilah", id: "perbendaharaan (kata)" },
        { ar: "خَطَأ", translit: "khatha'", id: "kesalahan" },
        { ar: "يَتَرَدَّدُ", translit: "yataraddadu", id: "(dia) ragu-ragu" },
        { ar: "يُخْطِئُ", translit: "yukhthi'u", id: "(dia) berbuat salah" },
        { ar: "تَدْرِيجِيّ", translit: "tadriijiyy", id: "bertahap" },
      ],
      paragraphs: [
        {
          ar: "يَقْضِي كَثِيرٌ مِنَ الدَّارِسِينَ سَنَوَاتٍ فِي حِفْظِ الْقَوَاعِدِ وَالْكَلِمَاتِ، ثُمَّ إِذَا لَقِيَ أَحَدُهُمْ نَاطِقًا بِالْعَرَبِيَّةِ وَقَفَ لَا يَسْتَطِيعُ أَنْ يُرَكِّبَ جُمْلَةً وَاحِدَةً. وَالسَّبَبُ أَنَّهُ عَامَلَ اللُّغَةَ كَمَادَّةٍ تُحْفَظُ، وَاللُّغَةُ فِي حَقِيقَتِهَا مَهَارَةٌ تُمَارَسُ.",
          id: "Banyak pembelajar menghabiskan bertahun-tahun menghafal kaidah dan kosakata, lalu ketika salah seorang dari mereka bertemu penutur Arab, ia terdiam tak sanggup menyusun satu kalimat pun. Sebabnya, ia memperlakukan bahasa sebagai materi yang dihafal, padahal bahasa pada hakikatnya adalah keterampilan yang dilatih.",
        },
        {
          ar: "وَأَوَّلُ مَا يَنْبَغِي لِلدَّارِسِ أَنْ يُكْثِرَ مِنَ الِاسْتِمَاعِ. فَالْأُذُنُ تَسْبِقُ اللِّسَانَ دَائِمًا؛ وَالطِّفْلُ يَسْمَعُ سَنَتَيْنِ قَبْلَ أَنْ يَتَكَلَّمَ. وَلَا يُشْتَرَطُ أَنْ يَفْهَمَ الدَّارِسُ كُلَّ كَلِمَةٍ، بَلْ يَكْفِيهِ فِي أَوَّلِ الْأَمْرِ أَنْ يُمْسِكَ الْمَعْنَى الْعَامَّ ثُمَّ يَتَقَدَّمَ تَدْرِيجِيًّا.",
          id: "Hal pertama yang sebaiknya dilakukan pembelajar adalah memperbanyak menyimak. Telinga selalu mendahului lisan; seorang anak mendengar dua tahun sebelum ia berbicara. Tidak disyaratkan pembelajar memahami setiap kata; pada awalnya cukup ia menangkap makna umum lalu maju secara bertahap.",
        },
        {
          ar: "ثُمَّ يَأْتِي الْكَلَامُ، وَهُوَ أَصْعَبُ مَا يَتَرَدَّدُ فِيهِ الدَّارِسُونَ خَوْفًا مِنَ الْخَطَإِ. وَالْحَقُّ أَنَّ الْخَطَأَ جُزْءٌ مِنَ الطَّرِيقِ لَا عَيْبٌ فِيهِ؛ فَمَنْ خَافَ مِنَ الْخَطَإِ لَمْ يَتَكَلَّمْ، وَمَنْ لَمْ يَتَكَلَّمْ لَمْ يُتْقِنِ اللُّغَةَ وَلَوْ حَفِظَ أَلْفَ قَاعِدَةٍ.",
          id: "Kemudian datanglah berbicara, dan inilah yang paling membuat pembelajar ragu karena takut salah. Yang benar, kesalahan adalah bagian dari perjalanan, bukan aib padanya; siapa yang takut salah tidak akan berbicara, dan siapa yang tidak berbicara tidak akan menguasai bahasa meskipun hafal seribu kaidah.",
        },
        {
          ar: "وَمِنَ الْخَطَإِ أَنْ يَحْفَظَ الدَّارِسُ الْكَلِمَاتِ مُفْرَدَةً بِلَا سِيَاقٍ. فَالْكَلِمَةُ الْوَاحِدَةُ قَدْ تَتَغَيَّرُ دَلَالَتُهَا بِتَغَيُّرِ مَوْضِعِهَا، وَلَا يَكْفِي أَنْ تَعْرِفَ مَعْنَاهَا حَتَّى تَعْرِفَ مَتَى تُقَالُ وَمَعَ مَنْ تُسْتَعْمَلُ. وَلِذَلِكَ كَانَ حِفْظُ الْجُمْلَةِ أَنْفَعَ مِنْ حِفْظِ الْمُفْرَدَةِ.",
          id: "Termasuk kekeliruan adalah pembelajar menghafal kata-kata secara terpisah tanpa konteks. Satu kata bisa berubah maknanya seiring berubahnya posisinya, dan tidak cukup kamu tahu artinya sampai kamu tahu kapan ia diucapkan dan dengan siapa ia digunakan. Karena itu menghafal kalimat lebih bermanfaat daripada menghafal kata tunggal.",
        },
        {
          ar: "وَتَبْقَى الْمُدَاوَمَةُ هِيَ السِّرَّ. فَنِصْفُ سَاعَةٍ كُلَّ يَوْمٍ خَيْرٌ مِنْ خَمْسِ سَاعَاتٍ فِي يَوْمٍ وَاحِدٍ ثُمَّ انْقِطَاعٌ أُسْبُوعًا. وَمَنْ لَازَمَ لُغَتَهُ قَلِيلًا قَلِيلًا وَجَدَ بَعْدَ سَنَةٍ أَنَّهُ يَفْهَمُ مَا كَانَ يَبْدُو لَهُ مُسْتَحِيلًا فِي أَوَّلِ الطَّرِيقِ.",
          id: "Dan yang tetap menjadi rahasianya adalah konsistensi. Setengah jam setiap hari lebih baik daripada lima jam dalam sehari lalu terputus sepekan. Siapa yang menekuni bahasanya sedikit demi sedikit akan mendapati setelah setahun bahwa ia memahami apa yang dulu tampak mustahil baginya di awal perjalanan.",
        },
      ],
      questions: [
        {
          ar: "لِمَاذَا يَعْجِزُ بَعْضُ الدَّارِسِينَ عَنِ الْكَلَامِ رَغْمَ حِفْظِهِمُ الْقَوَاعِدَ؟",
          id: "Mengapa sebagian pembelajar tidak mampu berbicara padahal hafal kaidah?",
          answerAr: "لِأَنَّهُمْ عَامَلُوا اللُّغَةَ كَمَادَّةٍ تُحْفَظُ، وَهِيَ مَهَارَةٌ تُمَارَسُ.",
          answerId: "Karena mereka memperlakukan bahasa sebagai materi hafalan, padahal ia keterampilan yang dilatih.",
        },
        {
          ar: "لِمَ كَانَ الِاسْتِمَاعُ أَوَّلَ الْخُطُوَاتِ؟",
          id: "Mengapa menyimak menjadi langkah pertama?",
          answerAr: "لِأَنَّ الْأُذُنَ تَسْبِقُ اللِّسَانَ، كَالطِّفْلِ يَسْمَعُ سَنَتَيْنِ قَبْلَ أَنْ يَتَكَلَّمَ.",
          answerId: "Karena telinga mendahului lisan, seperti anak kecil yang mendengar dua tahun sebelum berbicara.",
        },
        {
          ar: "لِمَاذَا كَانَ حِفْظُ الْجُمْلَةِ أَنْفَعَ مِنْ حِفْظِ الْمُفْرَدَةِ؟",
          id: "Mengapa menghafal kalimat lebih bermanfaat daripada menghafal kata tunggal?",
          answerAr: "لِأَنَّ دَلَالَةَ الْكَلِمَةِ تَتَغَيَّرُ بِتَغَيُّرِ سِيَاقِهَا.",
          answerId: "Karena makna sebuah kata berubah seiring berubahnya konteksnya.",
        },
        {
          ar: "أَيُّهُمَا أَنْفَعُ: نِصْفُ سَاعَةٍ كُلَّ يَوْمٍ أَمْ خَمْسُ سَاعَاتٍ فِي يَوْمٍ وَاحِدٍ؟",
          id: "Mana yang lebih bermanfaat: setengah jam setiap hari atau lima jam dalam sehari?",
          answerAr: "نِصْفُ سَاعَةٍ كُلَّ يَوْمٍ، لِأَنَّ الْمُدَاوَمَةَ هِيَ السِّرُّ.",
          answerId: "Setengah jam setiap hari, karena konsistensi itulah rahasianya.",
        },
      ],
    },
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
    istima: {
      title: "Nilai sebuah penghargaan",
      titleAr: "قِيمَةُ الْجَائِزَةِ",
      intro: {
        ar: "لَيْسَتْ قِيمَةُ الْجَائِزَةِ فِيمَا تَحْمِلُهُ مِنْ مَالٍ، وَإِنَّمَا فِيمَا تَتْرُكُهُ فِي نَفْسِ صَاحِبِهَا مِنْ ثِقَةٍ وَفِي نُفُوسِ غَيْرِهِ مِنْ هِمَّةٍ.",
        id: "Nilai sebuah penghargaan bukan terletak pada uang yang dibawanya, melainkan pada rasa percaya diri yang ditinggalkannya pada penerimanya, dan pada semangat yang ditumbuhkannya pada orang lain.",
      },
      items: [
        {
          ar: "أُقِيمَتِ الْمُسَابَقَةُ لِأَوَّلِ مَرَّةٍ سَنَةَ أَلْفٍ وَتِسْعِمِائَةٍ وَتِسْعِينَ، وَشَارَكَ فِيهَا يَوْمَئِذٍ سَبْعُونَ طَالِبًا فَقَطْ.",
          id: "Lomba itu diadakan pertama kali pada tahun 1990, dan saat itu hanya diikuti tujuh puluh peserta.",
          question: "Berapa peserta pada penyelenggaraan pertama?",
          options: ["Tujuh belas", "Tujuh puluh", "Tujuh ratus", "Tujuh ribu"],
          answerIndex: 1,
        },
        {
          ar: "قَالَتِ الْفَائِزَةُ: لَمْ أَتَوَقَّعِ الْفَوْزَ، وَلَكِنِّي كُنْتُ أَعْمَلُ كُلَّ يَوْمٍ كَأَنِّي سَأَفُوزُ.",
          id: "Sang pemenang berkata: Aku tidak menyangka menang, tetapi aku bekerja setiap hari seolah-olah aku akan menang.",
          question: "Apa yang dikatakan sang pemenang tentang usahanya?",
          options: [
            "Ia bekerja hanya menjelang lomba",
            "Ia yakin pasti menang sejak awal",
            "Ia bekerja tiap hari seolah akan menang",
            "Ia tidak mempersiapkan apa pun",
          ],
          answerIndex: 2,
        },
        {
          ar: "لَا يَنْبَغِي لِلْخَاسِرِ أَنْ يَحْزَنَ طَوِيلًا، فَكَمْ مِنْ خَاسِرٍ فِي عَامٍ صَارَ أَوَّلَ الْفَائِزِينَ فِي الْعَامِ الَّذِي بَعْدَهُ.",
          id: "Orang yang kalah tidak sepatutnya bersedih terlalu lama, karena betapa banyak yang kalah pada satu tahun lalu menjadi juara pertama pada tahun berikutnya.",
          question: "Apa nasihat untuk yang kalah?",
          options: [
            "Berhenti ikut lomba",
            "Jangan bersedih terlalu lama",
            "Menyalahkan juri",
            "Pindah ke bidang lain",
          ],
          answerIndex: 1,
        },
        {
          ar: "شَكَرَ الْفَائِزُ أُسْتَاذَهُ وَوَالِدَيْهِ، وَقَالَ: هَذِهِ الْجَائِزَةُ لَيْسَتْ لِي وَحْدِي.",
          id: "Sang pemenang berterima kasih kepada gurunya dan kedua orang tuanya, dan berkata: Penghargaan ini bukan untukku sendiri.",
          question: "Kepada siapa sang pemenang berterima kasih?",
          options: [
            "Kepada teman-temannya",
            "Kepada gurunya dan kedua orang tuanya",
            "Kepada panitia saja",
            "Ia tidak berterima kasih kepada siapa pun",
          ],
          answerIndex: 1,
        },
      ],
    },
    dialogues: [
      {
        title: "Ucapan selamat",
        titleAr: "التَّهْنِئَةُ",
        setting: "Dua sahabat perempuan bertemu setelah pengumuman pemenang lomba.",
        lines: [
          { speaker: "سُعَاد", ar: "مَبْرُوكٌ! سَمِعْتُ أَنَّكِ فُزْتِ بِالْجَائِزَةِ الْأُولَى.", id: "Selamat! Aku dengar kamu memenangkan hadiah pertama." },
          { speaker: "رِيم", ar: "شُكْرًا جَزِيلًا يَا سُعَادُ، وَاللهِ لَمْ أَتَوَقَّعْ ذَلِكَ أَبَدًا.", id: "Terima kasih banyak, Suad. Sungguh aku sama sekali tidak menyangka." },
          { speaker: "سُعَاد", ar: "وَلِمَ لَا؟ أَنْتِ تَسْتَحِقِّينَهَا بَعْدَ جُهْدٍ طَوِيلٍ.", id: "Kenapa tidak? Kamu layak mendapatkannya setelah usaha yang panjang." },
          { speaker: "رِيم", ar: "كُلُّ الْمُشَارِكِينَ كَانُوا مُتَفَوِّقِينَ، وَبَعْضُهُمْ أَحْسَنُ مِنِّي.", id: "Semua peserta berprestasi, dan sebagian mereka lebih baik dariku." },
          { speaker: "سُعَاد", ar: "لَا تَقُولِي هَذَا. كَمْ شَهْرًا اسْتَعْدَدْتِ لِلْمُسَابَقَةِ؟", id: "Jangan berkata begitu. Berapa bulan kamu bersiap untuk lomba ini?" },
          { speaker: "رِيم", ar: "ثَمَانِيَةَ أَشْهُرٍ، كُنْتُ أَعْمَلُ سَاعَتَيْنِ كُلَّ لَيْلَةٍ بَعْدَ الدِّرَاسَةِ.", id: "Delapan bulan; aku bekerja dua jam setiap malam setelah belajar." },
          { speaker: "سُعَاد", ar: "ثَمَانِيَةَ أَشْهُرٍ! إِذَنِ الْجَائِزَةُ لَمْ تَأْتِ صُدْفَةً.", id: "Delapan bulan! Berarti hadiah itu tidak datang secara kebetulan." },
          { speaker: "رِيم", ar: "وَلَكِنَّنِي فَشِلْتُ فِي السَّنَةِ الْمَاضِيَةِ فِي الْمُسَابَقَةِ نَفْسِهَا.", id: "Tetapi tahun lalu aku gagal di lomba yang sama." },
          { speaker: "سُعَاد", ar: "وَهَذَا أَجْمَلُ فِي قِصَّتِكِ. لَمْ تَتَوَقَّفِي بَعْدَ الْخَسَارَةِ.", id: "Justru itulah yang paling indah dalam kisahmu. Kamu tidak berhenti setelah kalah." },
          { speaker: "رِيم", ar: "بَكَيْتُ يَوْمَهَا كَثِيرًا، ثُمَّ قَرَّرْتُ أَنْ أُحَاوِلَ مَرَّةً أُخْرَى.", id: "Waktu itu aku menangis banyak, lalu aku memutuskan mencoba sekali lagi." },
          { speaker: "سُعَاد", ar: "وَمَاذَا سَتَفْعَلِينَ بِالْجَائِزَةِ؟", id: "Apa yang akan kamu lakukan dengan hadiahnya?" },
          { speaker: "رِيم", ar: "سَأُنْفِقُ نِصْفَهَا عَلَى دَوْرَةٍ تَخَصُّصِيَّةٍ، وَأُهْدِي بَقِيَّتَهَا لِوَالِدَيَّ.", id: "Aku akan pakai separuhnya untuk kursus spesialisasi, dan sisanya kuhadiahkan untuk orang tuaku." },
          { speaker: "سُعَاد", ar: "بَارَكَ اللهُ فِيكِ، وَإِلَى نَجَاحٍ أَكْبَرَ إِنْ شَاءَ اللهُ.", id: "Semoga Allah memberkahimu, menuju sukses yang lebih besar insya Allah." },
          { speaker: "رِيم", ar: "آمِينَ، وَلَنْ أَتَوَقَّفَ عَنِ الْمُحَاوَلَةِ.", id: "Amin, dan aku tidak akan berhenti mencoba." },
        ],
      },
      {
        title: "Sebelum pengumuman",
        titleAr: "قَبْلَ إِعْلَانِ النَّتِيجَةِ",
        setting: "Dua peserta menunggu hasil lomba dan saling menenangkan.",
        lines: [
          { speaker: "أَنَس", ar: "قَلْبِي يَدُقُّ بِسُرْعَةٍ. مَتَى يُعْلِنُونَ النَّتِيجَةَ؟", id: "Jantungku berdebar cepat. Kapan mereka mengumumkan hasilnya?" },
          { speaker: "سَامِي", ar: "بَعْدَ نِصْفِ سَاعَةٍ. اِهْدَأْ، لَنْ يُغَيِّرَ الْقَلَقُ شَيْئًا.", id: "Setengah jam lagi. Tenanglah, kecemasan tidak akan mengubah apa pun." },
          { speaker: "أَنَس", ar: "أَعْرِفُ، وَلَكِنِّي تَعِبْتُ كَثِيرًا مِنْ أَجْلِ هَذَا الْيَوْمِ.", id: "Aku tahu, tetapi aku sudah sangat berlelah demi hari ini." },
          { speaker: "سَامِي", ar: "وَأَنَا مِثْلُكَ. كَمْ مُشَارِكًا فِي هَذَا الْعَامِ؟", id: "Aku juga sepertimu. Berapa peserta tahun ini?" },
          { speaker: "أَنَس", ar: "أَكْثَرُ مِنْ أَرْبَعِمِائَةٍ، وَالْجَوَائِزُ ثَلَاثٌ فَقَطْ.", id: "Lebih dari empat ratus, sedangkan hadiahnya hanya tiga." },
          { speaker: "سَامِي", ar: "إِذَنْ فُرْصَتُنَا صَغِيرَةٌ، وَلَكِنَّ الْمُشَارَكَةَ نَفْسَهَا مَكْسَبٌ.", id: "Berarti peluang kita kecil, tetapi keikutsertaan itu sendiri sudah keuntungan." },
          { speaker: "أَنَس", ar: "كَيْفَ تَقُولُ ذَلِكَ وَأَنْتَ تَعْمَلُ مُنْذُ سَنَةٍ؟", id: "Bagaimana kamu bisa berkata begitu padahal kamu bekerja sejak setahun?" },
          { speaker: "سَامِي", ar: "لِأَنِّي تَعَلَّمْتُ فِي هَذِهِ السَّنَةِ أَكْثَرَ مِمَّا تَعَلَّمْتُ فِي ثَلَاثٍ.", id: "Karena dalam setahun ini aku belajar lebih banyak daripada yang kupelajari dalam tiga tahun." },
          { speaker: "أَنَس", ar: "صَدَقْتَ. الطَّرِيقُ عَلَّمَنَا أَكْثَرَ مِمَّا سَتُعْطِينَا الْجَائِزَةُ.", id: "Kamu benar. Perjalanannya mengajari kita lebih banyak daripada yang akan diberikan hadiah itu." },
          { speaker: "سَامِي", ar: "وَإِنْ لَمْ نَفُزِ الْيَوْمَ فَسَنَعُودُ فِي الْعَامِ الْقَادِمِ أَقْوَى.", id: "Kalau hari ini kita tidak menang, kita akan kembali tahun depan dengan lebih kuat." },
          { speaker: "أَنَس", ar: "اِتَّفَقْنَا. وَمَنْ فَازَ مِنَّا هَنَّأَ الْآخَرَ بِصِدْقٍ.", id: "Sepakat. Siapa pun di antara kita yang menang, ia mengucapkan selamat dengan tulus." },
          { speaker: "سَامِي", ar: "بِإِذْنِ اللهِ. هَا هُمْ يَصْعَدُونَ إِلَى الْمِنَصَّةِ.", id: "Insya Allah. Itu mereka naik ke atas panggung." },
          { speaker: "أَنَس", ar: "تَوَكَّلْنَا عَلَى اللهِ.", id: "Kita bertawakal kepada Allah." },
        ],
      },
    ],
    qiraah: {
      title: "Penghargaan tidak menciptakan orang hebat",
      titleAr: "الْجَوَائِزُ لَا تَصْنَعُ الْمُتَفَوِّقِينَ",
      preVocab: [
        { ar: "تَكْرِيم", translit: "takriim", id: "pemuliaan, penganugerahan" },
        { ar: "لَجْنَة", translit: "lajnah", id: "panitia, dewan juri" },
        { ar: "مِنَصَّة", translit: "minashshah", id: "panggung, podium" },
        { ar: "دَافِع", translit: "daafi'", id: "motivasi, pendorong" },
        { ar: "خَسَارَة", translit: "khasaarah", id: "kekalahan, kerugian" },
        { ar: "يُشَجِّعُ", translit: "yusyajji'u", id: "(dia) menyemangati" },
        { ar: "يُعْلِنُ", translit: "yu'linu", id: "(dia) mengumumkan" },
        { ar: "نَتِيجَة", translit: "natiijah", id: "hasil" },
      ],
      paragraphs: [
        {
          ar: "تُقَامُ فِي كُلِّ عَامٍ مُسَابَقَاتٌ كَثِيرَةٌ فِي الْعِلْمِ وَالْأَدَبِ وَالرِّيَاضَةِ، وَتَجْتَمِعُ لَجْنَةٌ لِتَخْتَارَ مِنْ بَيْنِ مِئَاتِ الْمُشَارِكِينَ ثَلَاثَةً أَوْ أَرْبَعَةً يَصْعَدُونَ إِلَى الْمِنَصَّةِ. وَيَنْظُرُ النَّاسُ إِلَى هَؤُلَاءِ وَحْدَهُمْ، وَيَنْسَوْنَ مَنْ وَقَفَ خَلْفَهُمْ.",
          id: "Setiap tahun diselenggarakan banyak lomba dalam bidang ilmu, sastra, dan olahraga; sebuah dewan juri berkumpul untuk memilih tiga atau empat orang dari ratusan peserta yang akan naik ke panggung. Orang-orang hanya memandang mereka saja, dan melupakan siapa yang berdiri di belakang mereka.",
        },
        {
          ar: "وَالْحَقُّ أَنَّ الْجَائِزَةَ لَا تَصْنَعُ الْمُتَفَوِّقَ، وَإِنَّمَا تَكْشِفُهُ. فَالَّذِي فَازَ الْيَوْمَ كَانَ يَعْمَلُ فِي بَيْتِهِ شُهُورًا لَا يَرَاهُ أَحَدٌ، وَإِنَّمَا جَاءَ التَّكْرِيمُ لِيُعْلِنَ لِلنَّاسِ مَا كَانَ خَافِيًا عَنْهُمْ. وَلِذَلِكَ قِيلَ: الْجَائِزَةُ آخِرُ الطَّرِيقِ لَا أَوَّلُهُ.",
          id: "Yang benar, penghargaan tidak menciptakan orang berprestasi, melainkan menyingkapkannya. Orang yang menang hari ini telah bekerja di rumahnya berbulan-bulan tanpa dilihat siapa pun; penganugerahan itu datang hanya untuk mengumumkan kepada orang banyak apa yang selama ini tersembunyi dari mereka. Karena itu dikatakan: penghargaan adalah ujung jalan, bukan awalnya.",
        },
        {
          ar: "وَلِلْجَوَائِزِ فَائِدَةٌ لَا تُنْكَرُ؛ فَهِيَ دَافِعٌ يُشَجِّعُ الشَّبَابَ عَلَى الْعَمَلِ، وَتُعَرِّفُ الْمُجْتَمَعَ بِأَصْحَابِ الْمَوَاهِبِ، وَتَفْتَحُ لَهُمْ أَبْوَابًا كَانَتْ مُغْلَقَةً. وَكَمْ مِنْ بَاحِثٍ صَغِيرٍ عَرَفَهُ النَّاسُ بَعْدَ جَائِزَةٍ وَاحِدَةٍ فَتَغَيَّرَ طَرِيقُهُ كُلُّهُ.",
          id: "Penghargaan memiliki manfaat yang tak dapat diingkari; ia adalah pendorong yang menyemangati para pemuda untuk bekerja, memperkenalkan masyarakat kepada orang-orang berbakat, dan membuka bagi mereka pintu-pintu yang tadinya tertutup. Betapa banyak peneliti muda yang dikenal orang setelah satu penghargaan, lalu berubahlah seluruh jalan hidupnya.",
        },
        {
          ar: "غَيْرَ أَنَّ الْخَطَرَ يَبْدَأُ حِينَ يَصِيرُ الْفَوْزُ هُوَ الْهَدَفَ وَحْدَهُ. فَمَنْ عَمِلَ لِلْجَائِزَةِ فَقَطْ تَوَقَّفَ إِذَا لَمْ يَنَلْهَا، وَمَنْ عَمِلَ لِحُبِّ عَمَلِهِ اسْتَمَرَّ فَازَ أَوْ خَسِرَ. وَلِذَلِكَ نَرَى بَعْضَ الْفَائِزِينَ يَخْتَفُونَ بَعْدَ سَنَةٍ، بَيْنَمَا يَبْقَى غَيْرُهُمْ يَعْمَلُ فِي صَمْتٍ عِشْرِينَ سَنَةً.",
          id: "Namun bahayanya dimulai ketika kemenangan menjadi satu-satunya tujuan. Siapa yang bekerja hanya demi penghargaan akan berhenti bila tak meraihnya, dan siapa yang bekerja karena mencintai pekerjaannya akan terus berjalan, menang atau kalah. Karena itu kita melihat sebagian pemenang menghilang setelah setahun, sementara yang lain tetap bekerja dalam diam selama dua puluh tahun.",
        },
        {
          ar: "أَمَّا مَنْ خَسِرَ فَلَا يَنْبَغِي لَهُ أَنْ يَحْزَنَ طَوِيلًا. فَالْخَسَارَةُ دَرْسٌ يُقْرَأُ، وَكَمْ مِنْ خَاسِرٍ فِي عَامٍ صَارَ أَوَّلَ الْفَائِزِينَ فِي الْعَامِ الَّذِي بَعْدَهُ. وَالْعِبْرَةُ أَنْ يَخْرُجَ الْإِنْسَانُ مِنَ الْمُسَابَقَةِ وَهُوَ أَعْرَفُ بِنَفْسِهِ مِمَّا دَخَلَ.",
          id: "Adapun yang kalah, ia tidak sepatutnya bersedih terlalu lama. Kekalahan adalah pelajaran yang dibaca, dan betapa banyak yang kalah pada satu tahun lalu menjadi juara pertama pada tahun berikutnya. Yang penting adalah seseorang keluar dari lomba dengan lebih mengenal dirinya daripada ketika ia masuk.",
        },
      ],
      questions: [
        {
          ar: "هَلْ تَصْنَعُ الْجَائِزَةُ الْمُتَفَوِّقَ؟ وَضِّحْ.",
          id: "Apakah penghargaan menciptakan orang berprestasi? Jelaskan.",
          answerAr: "لَا تَصْنَعُهُ وَإِنَّمَا تَكْشِفُهُ، لِأَنَّهُ عَمِلَ شُهُورًا لَا يَرَاهُ أَحَدٌ.",
          answerId: "Ia tidak menciptakannya, melainkan menyingkapkannya, sebab ia telah bekerja berbulan-bulan tanpa dilihat siapa pun.",
        },
        {
          ar: "اُذْكُرْ فَائِدَتَيْنِ لِلْجَوَائِزِ.",
          id: "Sebutkan dua manfaat penghargaan.",
          answerAr: "تُشَجِّعُ الشَّبَابَ عَلَى الْعَمَلِ، وَتُعَرِّفُ الْمُجْتَمَعَ بِأَصْحَابِ الْمَوَاهِبِ.",
          answerId: "Menyemangati para pemuda untuk bekerja, dan memperkenalkan masyarakat kepada orang-orang berbakat.",
        },
        {
          ar: "مَتَى يَبْدَأُ الْخَطَرُ فِي رَأْيِ الْكَاتِبِ؟",
          id: "Menurut penulis, kapan bahayanya dimulai?",
          answerAr: "حِينَ يَصِيرُ الْفَوْزُ هُوَ الْهَدَفَ وَحْدَهُ.",
          answerId: "Ketika kemenangan menjadi satu-satunya tujuan.",
        },
        {
          ar: "بِمَ يَنْصَحُ الْكَاتِبُ مَنْ خَسِرَ؟",
          id: "Apa nasihat penulis bagi orang yang kalah?",
          answerAr: "أَلَّا يَحْزَنَ طَوِيلًا، وَأَنْ يَقْرَأَ الْخَسَارَةَ دَرْسًا، وَيَخْرُجَ أَعْرَفَ بِنَفْسِهِ.",
          answerId: "Agar tidak bersedih terlalu lama, membaca kekalahan sebagai pelajaran, dan keluar dengan lebih mengenal dirinya.",
        },
      ],
    },
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
