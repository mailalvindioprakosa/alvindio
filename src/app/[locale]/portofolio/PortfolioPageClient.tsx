"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const WA = "https://wa.me/6285117257892";
const BASE = "https://saraya.website/wp-content/uploads/";

export type PortfolioItem = { img: string; title: string; category: string; url?: string | null };

export default function PortfolioPageClient({ items }: { items: PortfolioItem[] }) {
  const t = useTranslations("portofolio");
  const ts = useTranslations("shared");
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Build category tabs dynamically from the data
  const categories = ["All", ...Array.from(new Set(items.map((i) => i.category))).sort()];

  const WHY_US = [
    { img: BASE + "2025/06/crown-2.webp", title: ts("why_0_title"), desc: ts("why_0_desc") },
    { img: BASE + "2025/06/Garansi-Selamanya.webp", title: ts("why_1_title"), desc: ts("why_1_desc") },
    { img: BASE + "2025/06/Website-Berkualitas.webp", title: ts("why_2_title"), desc: ts("why_2_desc") },
    { img: BASE + "2025/06/mudah-digunakan.webp", title: ts("why_3_title"), desc: ts("why_3_desc") },
  ];

  const filtered = activeTab === "All" ? items : items.filter((p) => p.category === activeTab);
  const displayed = showAll ? filtered : filtered.slice(0, 15);

  return (
    <main className="pt-16">
      {/* HERO */}
      <section style={{ backgroundColor: "#200033" }} className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">{t("hero_heading")}</h1>
        </div>
      </section>

      {/* FILTER TABS (dynamic) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveTab(cat); setShowAll(false); }}
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
              style={activeTab === cat ? { backgroundColor: "#480E6A", color: "#fff" } : { backgroundColor: "#f3f4f6", color: "#554B4E" }}
            >
              {cat === "All" ? t("filter_all") : cat}
            </button>
          ))}
        </div>
      </div>

      {/* PORTFOLIO GRID */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="py-16 text-center text-gray-400">Belum ada item.</div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {displayed.map((item, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden relative group cursor-pointer border border-gray-100 shadow-sm">
                    <div className="aspect-video overflow-hidden bg-gray-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300" loading="lazy" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-sm" style={{ color: "#200033" }}>{item.title}</h3>
                      <p className="text-xs mt-0.5" style={{ color: "#9B6BC4" }}>{item.category}</p>
                    </div>
                  </div>
                ))}
              </div>
              {!showAll && filtered.length > 15 && (
                <div className="text-center mt-10">
                  <button onClick={() => setShowAll(true)} className="px-8 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "#480E6A" }}>
                    {ts("load_more")}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* BANGUN BISNIS DIGITAL */}
      <section className="py-20" style={{ backgroundColor: "#f9f7ff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={BASE + "2026/02/mengapa.png"} alt="Mengapa Alvin Dio Prakosa" className="max-w-full rounded-2xl" loading="lazy" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-snug" style={{ color: "#200033" }}>{ts("bangun_heading")}</h2>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#481d69" }}>{ts("bangun_subheading")}</h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#554B4E" }}>{ts("bangun_text")}</p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-block px-7 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: "#480E6A" }}>{ts("bangun_button")}</a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: "#480E6A" }}>{ts("why_label")}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-2" style={{ color: "#200033" }}>{ts("why_heading")}</h2>
            <p className="text-base" style={{ color: "#554B4E" }}>{ts("why_subtext")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((item) => (
              <div key={item.title} className="rounded-2xl p-6 border border-gray-100 bg-white shadow-sm text-center hover:shadow-md transition-shadow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.img} alt={item.title} className="w-12 h-12 object-contain mx-auto mb-4" loading="lazy" />
                <h3 className="font-bold text-base mb-2" style={{ color: "#200033" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#554B4E" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl py-16 px-8" style={{ backgroundColor: "#200033" }}>
            <div className="inline-block mb-6 px-4 py-1 rounded-full text-xs font-medium" style={{ border: "0.8px solid rgb(202,192,190)", color: "rgba(255,255,255,0.7)" }}>
              {ts("cta_bottom_label")}
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium text-white mb-4 leading-tight">{ts("cta_bottom_heading")}</h2>
            <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>{ts("cta_bottom_subtext")}</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium px-8 py-4 rounded-lg text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: "#ffffff", color: "#200033" }}>
              {ts("cta_bottom_button")}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
