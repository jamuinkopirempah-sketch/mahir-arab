import { notFound } from "next/navigation";
import { getUnit } from "@/lib/data";
import UnitTabs from "@/components/UnitTabs";
import Link from "next/link";

export default async function UnitPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const unit = getUnit(Number(id));
  if (!unit) notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Link
        href="/"
        className="mb-4 inline-flex items-center gap-1 text-sm text-emerald-600 hover:underline"
      >
        ← Kembali ke daftar unit
      </Link>

      <div className="mb-6">
        <span className="text-xs uppercase tracking-wide text-emerald-500">
          Wihdah {unit.id}
        </span>
        <div className="flex items-baseline justify-between">
          <h1 className="text-2xl font-extrabold text-slate-800">{unit.title}</h1>
          <span dir="rtl" className="font-arabic text-2xl text-emerald-700">
            {unit.titleAr}
          </span>
        </div>
        <p className="text-slate-500">{unit.theme}</p>
      </div>

      <UnitTabs unit={unit} />
    </main>
  );
}
