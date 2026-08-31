import { units } from "@/lib/data";
import UnitCard from "@/components/UnitCard";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-10 text-center">
        <p className="mb-1 text-sm font-medium uppercase tracking-widest text-emerald-500">
          Pendamping Buku
        </p>
        <h1 className="text-3xl font-extrabold text-slate-800 sm:text-4xl">
          Belajar Bahasa Arab Interaktif
        </h1>
        <p dir="rtl" className="mt-2 font-arabic text-2xl text-emerald-700">
          تَعَلَّمِ اللُّغَةَ الْعَرَبِيَّةَ
        </p>
        <p className="mx-auto mt-3 max-w-lg text-slate-500">
          Materi mengikuti buku ajar (contoh: Baina Yadaika). Setiap unit punya
          Kosakata, Kaidah, Latihan Bicara, dan Kuis.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {units.map((unit, i) => (
          <UnitCard key={unit.id} unit={unit} index={i} />
        ))}
      </div>
    </main>
  );
}
