"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

import { DEFAULT_PROCESS_IMGS, DEFAULT_HERO_IMG, DEFAULT_ABOUT_IMG } from "./WebsiteServiceClient";

const WA = "https://wa.me/6285117257892";
const BASE = "https://saraya.website/wp-content/uploads/";
const onErr = (e: React.SyntheticEvent<HTMLImageElement>) => {
  if (e.currentTarget.src !== DEFAULT_HERO_IMG) e.currentTarget.src = DEFAULT_HERO_IMG;
};

const FALLBACK_TRUSTED_BY = [
  "2025/06/14.webp","2025/06/9.webp","2025/06/5-1.webp","2025/06/18.webp","2025/06/17.webp",
  "2025/06/16.webp","2025/06/15.webp","2025/06/13.webp","2025/06/12.webp",
  "2025/06/11.webp","2025/06/8.webp","2025/06/10.webp","2025/06/6-1.webp","2025/06/7-1.webp",
  "2025/06/2.-Balai-Bahasa.webp","2025/06/3.webp","2025/06/4.webp","2025/06/1.-Brida-1.webp",
].map((p) => BASE + p);

const WHY_IMGS = [
  BASE + "2025/06/crown-2.webp",
  BASE + "2025/06/Garansi-Selamanya.webp",
  BASE + "2025/06/Website-Berkualitas.webp",
  BASE + "2025/06/mudah-digunakan.webp",
];

type Faq = { q: string; a: string };

export default function ServiceDetailClient({
  fields,
  faqs,
  heroImage,
  aboutImage,
  processImages,
  trustedByImages,
}: {
  fields: Record<string, string>;
  faqs: Faq[];
  heroImage: string;
  aboutImage: string;
  processImages: string[];
  trustedByImages?: string[];
}) {
  const ts = useTranslations("shared");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const f = (key: string) => fields[key] ?? "";

  const WHY_US = WHY_IMGS.map((img, i) => ({
    img,
    title: ts(`why_${i}_title`),
    desc: ts(`why_${i}_desc`),
  }));

  const PROCESS = processImages.map((img, i) => ({ img: img || DEFAULT_PROCESS_IMGS[i] || DEFAULT_HERO_IMG, title: f(`process_${i}`) }));
  const HERO_GALLERY = trustedByImages && trustedByImages.length > 0 ? trustedByImages : FALLBACK_TRUSTED_BY;

  return (
    <main className="pt-16">
      {/* HERO */}
      <section
        className="py-16 lg:py-20"
        style={{
          backgroundImage: "url(https://saraya.website/wp-content/uploads/2025/06/Hero-Saraya-ThemeS.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="hidden lg:flex lg:col-span-3 items-center justify-center">
              <img src={heroImage} alt={f("hero_heading")} className="w-full max-w-lg drop-shadow-xl rounded-2xl" loading="eager" onError={onErr} />
            </div>
            <div className="lg:col-span-2">
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5" style={{ color: "#200033" }}>
                {f("hero_heading")}
              </h1>
              <p className="text-lg mb-8" style={{ color: "#554B4E" }}>{f("hero_subtext")}</p>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#480E6A" }}
              >
                {ts("free_consult")}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.122 1.526 5.852L.057 23.428a.75.75 0 0 0 .916.916l5.576-1.469A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="bg-white py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold mb-3 text-center" style={{ color: "#554B4E" }}>{ts("trusted_by")}</p>
          <div className="border border-gray-200 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-9">
              {HERO_GALLERY.map((src, i) => (
                <div key={i} className={`overflow-hidden flex items-center justify-center p-3 bg-white transition-colors group${i % 9 !== 8 ? " border-r border-gray-200" : ""}${i < 9 ? " border-b border-gray-200" : ""}`}>
                  <img src={src} alt="" className="h-8 w-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 ease-in-out" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT 1 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-xs font-semibold mb-4 px-3 py-1 inline-block rounded-full border" style={{ color: "#480E6A", borderColor: "#480E6A" }}>{f("about_label")}</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 leading-snug" style={{ color: "#200033" }}>{f("about_heading")}</h2>
              <p className="text-base mb-4 leading-relaxed" style={{ color: "#554B4E" }}>{f("about_p1")}</p>
              <p className="text-base leading-relaxed" style={{ color: "#554B4E" }}>{f("about_p2")}</p>
            </div>
            <div className="flex justify-center">
              <img src={aboutImage} alt={f("about_heading")} className="max-w-full rounded-2xl shadow-lg" loading="lazy" onError={onErr} />
            </div>
          </div>
        </div>
      </section>

      {/* PROSES */}
      <section className="py-20" style={{ backgroundColor: "#f9f7ff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: "#480E6A" }}>{ts("process_label")}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "#200033" }}>{f("process_heading")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PROCESS.map((step, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                <img src={step.img} alt={step.title} className="w-full aspect-video object-cover rounded-t-2xl" loading="lazy" onError={onErr} />
                <div className="p-5">
                  <span className="text-xs font-bold px-2 py-1 rounded text-white mb-3 inline-block" style={{ backgroundColor: "#480E6A" }}>0{i + 1}</span>
                  <h3 className="font-bold text-base mt-2" style={{ color: "#200033" }}>{step.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-14" style={{ backgroundColor: "#200033" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl sm:text-2xl font-semibold leading-relaxed text-white">{f("quote")}</blockquote>
        </div>
      </section>

      {/* ABOUT 2 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="flex justify-center order-last lg:order-first">
              <img src={aboutImage} alt={f("about2_heading")} className="max-w-full rounded-2xl shadow-lg" loading="lazy" onError={onErr} />
            </div>
            <div>
              <p className="text-xs font-semibold mb-4 px-3 py-1 inline-block rounded-full border" style={{ color: "#480E6A", borderColor: "#480E6A" }}>{f("about2_label")}</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 leading-snug" style={{ color: "#200033" }}>{f("about2_heading")}</h2>
              <p className="text-base mb-4 leading-relaxed" style={{ color: "#554B4E" }}>{f("about2_p1")}</p>
              <p className="text-base leading-relaxed" style={{ color: "#554B4E" }}>{f("about2_p2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MENGAPA */}
      <section className="py-20" style={{ backgroundColor: "#f9f7ff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: "#480E6A" }}>{ts("why_label")}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "#200033" }}>{ts("why_heading")}</h2>
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

      {/* BANGUN BISNIS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-snug" style={{ color: "#200033" }}>{ts("bangun_heading")}</h2>
              <p className="font-semibold text-base mb-3" style={{ color: "#480E6A" }}>{ts("bangun_subheading")}</p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#554B4E" }}>{ts("bangun_text")}</p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: "#480E6A" }}>{ts("bangun_button")}</a>
            </div>
            <div className="flex justify-center">
              <img src={aboutImage} alt={ts("bangun_heading")} className="max-w-full rounded-3xl shadow-lg" loading="lazy" onError={onErr} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "#f9f7ff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: "#480E6A" }}>{ts("faq_label")}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ color: "#200033" }}>{ts("faq_heading")}</h2>
            <p className="text-sm" style={{ color: "#554B4E" }}>{f("faq_subtext")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((item, i) => (
              <div key={i} className="rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold bg-white hover:bg-gray-50 transition-colors"
                  style={{ color: "#200033" }}
                >
                  <span>{item.q}</span>
                  <svg className={`w-4 h-4 shrink-0 ml-3 transition-transform ${openFaq === i ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openFaq === i && <div className="px-5 py-4 text-sm border-t border-gray-100" style={{ color: "#554B4E" }}>{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl py-16 px-8" style={{ backgroundColor: "#200033" }}>
            <div className="inline-block mb-6 px-4 py-1 rounded-full text-xs font-medium" style={{ border: "0.8px solid rgb(202,192,190)", color: "rgba(255,255,255,0.7)" }}>{ts("cta_bottom_label")}</div>
            <h2 className="text-3xl sm:text-5xl font-medium text-white mb-4 leading-tight">{ts("cta_bottom_heading")}</h2>
            <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>{ts("cta_bottom_subtext")}</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium px-8 py-4 rounded-lg text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: "#ffffff", color: "#200033" }}>{ts("cta_bottom_button")}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
