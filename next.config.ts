import type { NextConfig } from "next";

// Situs disajikan di root domain kustom (pintararab.my.id), bukan sub-path
// github.io/mahir-arab, jadi basePath tidak dipakai lagi.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
