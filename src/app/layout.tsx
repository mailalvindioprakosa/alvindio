import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saraya Website | Jasa Pembuatan Website Profesional",
  description:
    "Saraya Web Design & SEO - Jasa Pembuatan Website Profesional untuk Bisnis Anda.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
