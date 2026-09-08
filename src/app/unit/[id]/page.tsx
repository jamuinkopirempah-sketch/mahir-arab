import { notFound } from "next/navigation";
import { getUnit, units } from "@/lib/data";
import UnitTabs from "@/components/UnitTabs";
import Link from "next/link";

export const dynamicParams = false;

export function generateStaticParams() {
  return units.map((unit) => ({ id: String(unit.id) }));
}

export default async function UnitPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const unit = getUnit(Number(id));
  if (!unit) notFound();

  return (
    <main className="min-h-[calc(100vh-72px)] bg-[#f8f5ed] py-6 sm:py-10">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
      <Link
        href="/"
        className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-[#52746b] transition hover:text-[#0d6b60]"
      >
        <span aria-hidden="true">←</span> Semua wihdah
      </Link>

      <section className="relative mb-6 overflow-hidden rounded-[24px] bg-[#0d6b60] px-6 py-7 text-white shadow-[0_12px_30px_rgb(13_107_96_/_15%)] sm:px-9 sm:py-8">
        <div className="absolute -right-4 -top-9 h-36 w-36 rounded-full border-[17px] border-[#f3bd4e]/80" />
        <div className="relative flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#f5ce76]">Wihdah 0{unit.id}</span>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{unit.title}</h1>
            <p className="mt-2 text-sm text-white/70 sm:text-base">{unit.theme}</p>
          </div>
          <span dir="rtl" className="font-arabic text-3xl text-[#f9da90] sm:text-4xl">
            {unit.titleAr}
          </span>
        </div>
      </section>

      <UnitTabs unit={unit} />
      </div>
    </main>
  );
}
