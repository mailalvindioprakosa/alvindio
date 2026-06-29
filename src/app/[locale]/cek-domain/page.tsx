"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const BASE = "https://saraya.website/wp-content/uploads/";

const WHY_US = [
  { img: BASE+"2025/06/crown-2.webp", title: "Template Premium", desc: "Desain eksklusif dengan kualitas tinggi yang siap pakai untuk tampil profesional tanpa repot." },
  { img: BASE+"2025/06/Garansi-Selamanya.webp", title: "Garansi Terjamin", desc: "Sekali Menggunakan layanan jasa kami, Anda mendapatkan dukungan layanan seumur hidup." },
  { img: BASE+"2025/06/Website-Berkualitas.webp", title: "Seo Friendly", desc: "Website mudah ditemukan di Google, bantu tingkatkan trafik dan jangkauan bisnis Anda." },
  { img: BASE+"2025/06/mudah-digunakan.webp", title: "Mudah Digunakan", desc: "Antarmuka yang simpel dan intuitif, siapa pun bisa mengelola tanpa perlu keahlian teknis." },
];

const POPULAR_TLDS = [".com", ".id", ".co.id", ".net", ".org", ".info", ".biz", ".web.id", ".my.id"];

export default function CekDomainPage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<null | { domain: string; available: boolean }[]>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const base = query.trim().replace(/\.[a-z.]+$/, "").toLowerCase();
    setTimeout(() => {
      setResults(
        POPULAR_TLDS.map((tld) => ({
          domain: base + tld,
          available: Math.random() > 0.4,
        }))
      );
      setLoading(false);
    }, 1200);
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* HERO DARK */}
        <section style={{ backgroundColor: "#200033" }} className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.6)" }}>
              Cek Ketersediaan Domain
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3 leading-tight">
              Temukan Domain Impianmu
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "rgba(255,255,255,0.85)" }}>
              Cek Domain Impianmu Sekarang!
            </h2>
            <p className="text-base mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
              Bangun identitas online yang kuat bersama <strong className="text-white">Saraya</strong>.<br />
              Mulai dari nama domain yang tepat, kami bantu wujudkan bisnismu tampil lebih profesional.
            </p>
            {/* Domain Search Form */}
            <form onSubmit={handleCheck} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Masukkan nama domain (contoh: saraya)"
                className="flex-1 px-5 py-4 rounded-xl text-base bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 rounded-xl font-bold text-white text-base transition-opacity hover:opacity-90 disabled:opacity-60 shrink-0"
                style={{ backgroundColor: "#480E6A" }}
              >
                {loading ? "Mengecek..." : "Cek Domain"}
              </button>
            </form>
          </div>
        </section>

        {/* RESULTS */}
        {results && (
          <section className="py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-extrabold mb-8 text-center" style={{ color: "#200033" }}>Hasil Pencarian Domain</h2>
              <div className="space-y-3">
                {results.map((r) => (
                  <div key={r.domain} className="flex items-center justify-between px-6 py-4 rounded-xl border"
                    style={{ borderColor: r.available ? "#d1fae5" : "#fee2e2", backgroundColor: r.available ? "#f0fdf4" : "#fff5f5" }}>
                    <span className="font-semibold text-base" style={{ color: "#200033" }}>{r.domain}</span>
                    <div className="flex items-center gap-3">
                      <span className={`text-sm font-semibold px-3 py-1 rounded-full ${r.available ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
                        {r.available ? "Tersedia" : "Tidak Tersedia"}
                      </span>
                      {r.available && (
                        <a
                          href="https://wa.me/6285117257892"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity"
                          style={{ backgroundColor: "#480E6A" }}
                        >
                          Daftar
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-center mt-6" style={{ color: "#554B4E" }}>
                Hubungi kami via WhatsApp untuk mendaftarkan domain yang tersedia.
              </p>
            </div>
          </section>
        )}

        {/* BENEFITS */}
        <section className="py-20" style={{ backgroundColor: "#f9f7ff" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: "#480E6A" }}>
                Kenapa Saraya?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "#200033" }}>
                Domain + Website Siap Pakai
              </h2>
              <p className="mt-3 text-base max-w-2xl mx-auto" style={{ color: "#554B4E" }}>
                Tidak hanya domain, kami juga membantu Anda membangun website profesional yang siap tumbuh bersama bisnis Anda.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHY_US.map((item) => (
                <div key={item.title} className="rounded-2xl p-6 border border-gray-100 bg-white shadow-sm text-center hover:shadow-md transition-shadow">
                  <img src={item.img} alt={item.title} className="w-12 h-12 object-contain mx-auto mb-4" loading="lazy" />
                  <h3 className="font-bold text-base mb-2" style={{ color: "#200033" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#554B4E" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-2xl py-16 px-8" style={{ backgroundColor: "#200033" }}>
              <div className="inline-block mb-6 px-4 py-1 rounded-full text-xs font-medium" style={{ border: "0.8px solid rgb(202,192,190)", color: "rgba(255,255,255,0.7)" }}>
                Percayakan Pada Saraya Website
              </div>
              <h2 className="text-3xl sm:text-5xl font-medium text-white mb-4 leading-tight">Hubungi Kami Sekarang Juga</h2>
              <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
                Buat website untuk bisnis anda sekarang juga dan dapatkan promo menarik
              </p>
              <a href="https://wa.me/6285117257892" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium px-8 py-4 rounded-lg text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#ffffff", color: "#200033" }}>
                Hubungi Kami
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
