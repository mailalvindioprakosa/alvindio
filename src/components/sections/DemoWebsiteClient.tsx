"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

type Demo = { slug: string; title: string; img: string };

function DemoCard({ demo, viewText }: { demo: Demo; viewText: string }) {
  return (
    <a
      href={`https://websitedemos.net/${demo.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50"
    >
      <div className="overflow-hidden bg-gray-200" style={{ aspectRatio: "558/1024" }}>
        <img src={demo.img} alt={demo.slug} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="text-white font-semibold text-sm px-4 py-2 rounded-lg border border-white">{viewText}</span>
      </div>
    </a>
  );
}

const I = "https://saraya.website/wp-content/uploads/";

const WHY_IMGS = [
  I + "2025/06/crown-2.webp",
  I + "2025/06/Garansi-Selamanya.webp",
  I + "2025/06/Website-Berkualitas.webp",
  I + "2025/06/mudah-digunakan.webp",
];

export default function DemoWebsiteClient({
  fields,
  demos,
}: {
  fields: Record<string, string>;
  demos: Record<string, Demo[]>;
}) {
  const ts = useTranslations("shared");
  const f = (key: string) => fields[key] ?? "";
  const [activeTab, setActiveTab] = useState("All");

  const WHY_US = WHY_IMGS.map((img, i) => ({ img, title: ts(`why_${i}_title`), desc: ts(`why_${i}_desc`) }));

  const categoryKeys = ["All", ...Object.keys(demos)];
  const allDemos = Object.values(demos).flat();
  const currentDemos = activeTab === "All" ? allDemos : (demos[activeTab] ?? []);
  const viewText = f("view_demo");

  return (
    <main className="pt-16">
      {/* HERO DARK */}
      <section style={{ backgroundColor: "#200033" }} className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">{f("hero_heading")}</h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.7)" }}>{f("hero_subtext")}</p>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap gap-3">
          {categoryKeys.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
              style={activeTab === cat ? { backgroundColor: "#480E6A", color: "#fff" } : { backgroundColor: "#f3f4f6", color: "#554B4E" }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Demo Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentDemos.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {currentDemos.map((demo, i) => (
                <DemoCard key={`${demo.slug}-${i}`} demo={demo} viewText={viewText} />
              ))}
            </div>
          ) : (
            <div className="py-16" />
          )}
        </div>
      </section>

      {/* BANGUN BISNIS DIGITAL */}
      <section className="py-20" style={{ backgroundColor: "#f9f7ff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="flex justify-center">
              <img src={`${I}2026/02/mengapa.png`} alt="Mengapa Alvin Dio Prakosa" className="max-w-full rounded-2xl" loading="lazy" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-snug" style={{ color: "#200033" }}>{ts("bangun_heading")}</h2>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#481d69" }}>{ts("bangun_subheading")}</h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#554B4E" }}>{ts("bangun_text")}</p>
              <a href="https://wa.me/6285117257892" target="_blank" rel="noopener noreferrer" className="inline-block px-7 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: "#480E6A" }}>{ts("bangun_button")}</a>
            </div>
          </div>
        </div>
      </section>

      {/* MENGAPA */}
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
                <img src={item.img} alt={item.title} className="w-12 h-12 object-contain mx-auto mb-4" loading="lazy" />
                <h3 className="font-bold text-base mb-2" style={{ color: "#200033" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#554B4E" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl py-16 px-8" style={{ backgroundColor: "#200033" }}>
            <div className="inline-block mb-6 px-4 py-1 rounded-full text-xs font-medium" style={{ border: "0.8px solid rgb(202,192,190)", color: "rgba(255,255,255,0.7)" }}>{ts("cta_bottom_label")}</div>
            <h2 className="text-3xl sm:text-5xl font-medium text-white mb-4 leading-tight">{ts("cta_bottom_heading")}</h2>
            <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>{ts("cta_bottom_subtext")}</p>
            <a href="https://wa.me/6285117257892" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium px-8 py-4 rounded-lg text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: "#ffffff", color: "#200033" }}>{ts("cta_bottom_button")}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
