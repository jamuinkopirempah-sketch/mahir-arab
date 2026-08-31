@AGENTS.md

# Proyek: Web App Belajar Bahasa Arab Interaktif

Aplikasi pendamping belajar bahasa Arab (Next.js + Tailwind + Framer Motion).
Setiap unit punya 4 menu: Kosakata, Kaidah, Bicara, Kuis.

## Aturan konten (WAJIB)

1. **Semua materi harus orisinal.** Jangan pernah menyalin teks, kalimat contoh,
   daftar kosakata, atau dialog persis dari buku ajar berhak cipta (termasuk
   Al-'Arabiyyah Bayna Yadayk / Baina Yadaika, yang hak ciptanya dipegang penuh
   oleh penerbit Arabic For All dan melarang pengutipan tanpa izin).
2. Boleh mengikuti **tema** (perkenalan, keluarga, rumah, dst.) dan **konsep tata
   bahasa** (isim isyarah, fi'il mudhari', dhamir muttashil, dst.) — ini
   pengetahuan linguistik umum, bukan objek hak cipta.
3. Jangan commit file PDF/scan buku berhak cipta ke repo ini.

## Konvensi penulisan materi

- Teks Arab **wajib berharakat lengkap** (untuk pemula).
- Setiap kosakata punya: `ar` (Arab berharakat), `translit` (transliterasi latin),
  `id` (arti bahasa Indonesia), `emoji` (ilustrasi visual).
- Terjemahan memakai bahasa Indonesia yang natural, bukan terjemahan harfiah kaku.
- Untuk kata kerja, tulis artinya dengan penanda pelaku, mis. "(dia) menulis".
- Hindari mengulang kosakata yang sudah dipakai di unit lain — cek
  `docs/GLOSARIUM.md`.

## Struktur kode

- `src/lib/data.ts` — seluruh materi per unit (sumber kebenaran konten).
- `src/lib/types.ts` — bentuk data `Unit`, `VocabWord`, `QawaidRule`, dll.
- `src/lib/speech.ts` — pelafalan via Web Speech API (TTS `ar-SA`).
- `src/components/` — komponen per tab (VocabularyTab, QawaidTab, SpeakingTab,
  QuizTab) dan komponen pendukung.
- `src/app/unit/[id]/page.tsx` — halaman unit.

## Rujukan tambahan

- `docs/KURIKULUM.md` — rencana tema dan urutan unit.
- `docs/GAYA-KONTEN.md` — panduan gaya penulisan materi.
- `docs/GLOSARIUM.md` — daftar kosakata yang sudah dipakai.
- `docs/PETA-BUKU-ABY2.md` — peta tema & kaidah buku rujukan (struktur saja,
  bukan isi materinya).

## Sebelum commit

Jalankan `npm run lint` dan `npm run build` — keduanya harus bersih.
