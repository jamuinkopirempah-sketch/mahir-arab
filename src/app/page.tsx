import { units } from "@/lib/data";
import UnitCard from "@/components/UnitCard";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-6 sm:px-8 sm:pt-10">
        <div className="hero-pattern relative overflow-hidden rounded-[28px] bg-[#0d6b60] px-6 py-9 text-white shadow-[0_16px_40px_rgb(13_107_96_/_18%)] sm:px-12 sm:py-14">
          <div className="absolute -right-12 -top-10 h-52 w-52 rounded-full border-[22px] border-[#f3bd4e]/80 orb-float" />
          <div className="absolute bottom-8 right-[25%] h-11 w-11 rounded-full bg-[#ffdc86]/75 orb-float-delayed" />
          <div className="relative grid items-center gap-9 md:grid-cols-[1.18fr_.82fr]">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#f9d989]">
                Belajar sedikit, setiap hari
              </p>
              <h1 className="max-w-xl text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl lg:text-[58px] lg:leading-[1.05]">
                Bahasa Arab terasa dekat.
              </h1>
              <p dir="rtl" className="mt-4 font-arabic text-3xl text-[#f9d989] sm:text-4xl">لُغَةٌ تُعَاشُ لَا تُحْفَظُ فَقَطْ</p>
              <p className="mt-5 max-w-lg text-[15px] leading-7 text-white/75 sm:text-base">
                Pelajari kosakata, dengarkan pengucapan, dan berlatih membangun kalimat dalam satu ruang belajar yang nyaman.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link href="/unit/1" className="rounded-full bg-[#f3bd4e] px-5 py-3 text-sm font-extrabold text-[#183732] shadow-[0_5px_0_#d99a27] transition hover:-translate-y-0.5">
                  Lanjutkan belajar <span aria-hidden="true">→</span>
                </Link>
                <span className="text-sm font-medium text-white/75">8 wihdah tersedia</span>
              </div>
            </div>

            <div className="relative mx-auto hidden w-full max-w-[320px] md:block" aria-hidden="true">
              <div className="relative rounded-[28px] bg-[#f9f4e6] p-5 text-[#193b36] shadow-2xl rotate-[-3deg]">
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#72877f]"><span>Hari ini</span><span>12 menit</span></div>
                <p className="mt-7 font-arabic text-center text-5xl text-[#0d6b60]">صَبَاحُ الْخَيْرِ</p>
                <p className="mt-2 text-center text-sm font-bold">Selamat pagi</p>
                <div className="mt-6 h-2 overflow-hidden rounded-full bg-[#e1e8df]"><div className="h-full w-3/4 rounded-full bg-[#f0b847]" /></div>
                <div className="mt-3 flex justify-between text-xs text-[#71837e]"><span>Latihan 3 dari 4</span><span>75%</span></div>
              </div>
              <div className="absolute -bottom-5 -left-7 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-[#0d6b60] shadow-xl rotate-[4deg]">✦ Kamu konsisten!</div>
            </div>
          </div>
        </div>

        <section className="mt-8 grid gap-3 sm:grid-cols-3" aria-label="Keunggulan aplikasi">
          {[
            ["01", "Dengar & tirukan", "Audio pelafalan untuk setiap bagian."],
            ["02", "Pahami pola", "Kaidah dijelaskan lewat contoh nyata."],
            ["03", "Uji diri", "Kuis kecil untuk menguatkan ingatan."],
          ].map(([number, title, copy]) => (
            <div key={number} className="rounded-2xl border border-[#dde7df] bg-[#fcfbf6] p-4 sm:p-5">
              <span className="text-xs font-extrabold tracking-widest text-[#d09224]">{number}</span>
              <h2 className="mt-2 font-extrabold text-[#24453e]">{title}</h2>
              <p className="mt-1 text-sm leading-6 text-[#6d817a]">{copy}</p>
            </div>
          ))}
        </section>
      </section>

      <section id="materi" className="border-y border-[#e5e7dc] bg-[#fdfcf8] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:mb-9 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#c8891f]">Peta perjalanan</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.035em] text-[#183b35] sm:text-4xl">Pilih wihdahmu</h2>
              <p className="mt-2 text-sm text-[#71837c] sm:text-base">Setiap wihdah berisi tujuh cara untuk berlatih.</p>
            </div>
            <p className="text-sm font-semibold text-[#0d6b60]">{units.length} wihdah · level menengah</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {units.map((unit, i) => <UnitCard key={unit.id} unit={unit} index={i} />)}
          </div>
        </div>
      </section>

      <section id="tentang" className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="rounded-[26px] border border-[#dfe7dc] bg-[#e6f0e9] p-7 sm:flex sm:items-center sm:justify-between sm:p-10">
          <div><p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#0d6b60]">Cara terbaik memulai</p><h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#173b35] sm:text-3xl">Satu wihdah, satu langkah nyata.</h2></div>
          <Link href="/unit/1" className="mt-5 inline-flex rounded-full border-2 border-[#0d6b60] px-5 py-2.5 text-sm font-extrabold text-[#0d6b60] transition hover:bg-[#0d6b60] hover:text-white sm:mt-0">Mulai dari wihdah 1 →</Link>
        </div>
      </section>
    </main>
  );
}
