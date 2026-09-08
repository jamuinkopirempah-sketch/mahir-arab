import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Mahir Arab, ke beranda">
          <span className="brand-mark" aria-hidden="true">
            <span>ع</span>
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-extrabold tracking-tight text-[#173b37]">Mahir Arab</span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#7c938c]">Ruang belajar</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-[#55716a] md:flex" aria-label="Navigasi utama">
          <Link href="/" className="transition hover:text-[#0b6a5f]">Beranda</Link>
          <Link href="/#materi" className="transition hover:text-[#0b6a5f]">Materi</Link>
          <Link href="/#tentang" className="transition hover:text-[#0b6a5f]">Tentang belajar</Link>
        </nav>

        <Link href="/unit/1" className="rounded-full bg-[#f0b847] px-4 py-2 text-xs font-extrabold text-[#183732] shadow-[0_5px_0_#d99a27] transition hover:-translate-y-0.5 hover:bg-[#f6c65a] sm:px-5 sm:text-sm">
          Mulai belajar
        </Link>
      </div>
    </header>
  );
}
