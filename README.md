# Belajar Bahasa Arab Interaktif

Aplikasi web pendamping belajar bahasa Arab. Dibangun dengan Next.js + Tailwind CSS + Framer Motion.

## Tentang konten

Seluruh materi (kosakata, kaidah/tata bahasa, dialog, dan soal kuis) di `src/lib/data.ts` adalah **konten orisinal** yang disusun sendiri untuk proyek ini — bukan salinan dari buku ajar berhak cipta manapun. Urutan tema (perkenalan, keluarga, rumah, sekolah, angka & warna, aktivitas harian, profesi, waktu & cuaca) dan pola tata bahasa mengikuti alur umum pembelajaran bahasa Arab pemula-menengah, yang merupakan pengetahuan linguistik umum dan bukan objek hak cipta.

## Fitur

Setiap unit memiliki 4 menu:

- **Kosakata (مفردات)** — flashcard interaktif dengan audio pelafalan (Web Speech API) dan permainan mencocokkan kata.
- **Kaidah (قواعد)** — penjelasan tata bahasa dengan contoh kalimat yang bisa diklik per kata untuk melihat perannya (subjek/kata kerja/objek).
- **Bicara (speaking)** — latihan dialog (hiwar) dengan role-play, audio (TTS), dan rekam suara untuk latihan pelafalan.
- **Kuis** — soal pilihan ganda, dengar-lalu-jawab, dan menyusun kata, dengan skor dan progress bar.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Menambah/mengubah unit

Tambahkan entri baru ke array `units` di `src/lib/data.ts` sesuai bentuk `Unit` yang didefinisikan di `src/lib/types.ts`. Pastikan kosakata, kalimat contoh, dan dialog tetap ditulis sendiri (orisinal), bukan disalin dari sumber berhak cipta.
