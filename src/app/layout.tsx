import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahir Arab — Belajar Bahasa Arab",
  description: "Ruang belajar bahasa Arab interaktif: kosakata, kaidah, menyimak, dan latihan.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-[#f8f5ed] text-slate-900">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
