"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

const WA = "https://wa.me/6285117257892";
const BASE = "https://saraya.website/wp-content/uploads/";

export const DEFAULT_PROCESS_IMGS = [
  "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=600&q=80",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
];
export const DEFAULT_HERO_IMG = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80";
export const DEFAULT_ABOUT_IMG = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80";
export const DEFAULT_CTA_IMG = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80";
export const DEFAULT_COCOK_IMG = "https://images.unsplash.com/photo-1553484771-047a44eee27a?w=600&q=80";

const PLACEHOLDER = DEFAULT_HERO_IMG;
const onErr = (e: React.SyntheticEvent<HTMLImageElement>) => {
  if (e.currentTarget.src !== PLACEHOLDER) e.currentTarget.src = PLACEHOLDER;
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
type PortfolioItem = { url: string; caption: string | null };
type CocokImg = { url: string };

export default function WebsiteServiceClient({
  fields,
  faqs,
  heroImage,
  aboutImage,
  ctaImage,
  cocokImages,
  portfolioItems,
  trustedByImages,
}: {
  fields: Record<string, string>;
  faqs: Faq[];
  heroImage: string;
  aboutImage: string;
  ctaImage: string;
  cocokImages: CocokImg[];
  portfolioItems: PortfolioItem[];
  trustedByImages?: string[];
}) {
  const ts = useTranslations("shared");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? portfolioItems : portfolioItems.slice(0, 9);

  const f = (key: string) => fields[key] ?? "";
  const HERO_GALLERY = trustedByImages && trustedByImages.length > 0 ? trustedByImages : FALLBACK_TRUSTED_BY;
  const hasAbout2 = Boolean(fields.about2_heading);
  const hasMetrics = Boolean(fields.metric_title);

  const WHY_US = WHY_IMGS.map((img, i) => ({ img, title: ts(`why_${i}_title`), desc: ts(`why_${i}_desc`) }));

  const COCOK = [0, 1, 2].map((i) => ({
    title: f(`cocok_${i}`),
    img: cocokImages[i]?.url || DEFAULT_COCOK_IMG,
  }));

  return (
    <main className="pt-16">
      {/* HERO */}
      <section
        className="py-16 lg:py-20"
        style={{ backgroundImage: "url(https://saraya.website/wp-content/uploads/2025/06/Hero-Saraya-ThemeS.webp)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="hidden lg:flex lg:col-span-3 items-center justify-center bg-transparent">
              <img src={heroImage} alt={f("hero_heading")} className="w-full max-w-lg drop-shadow-xl rounded-2xl" loading="eager" onError={onErr} />
            </div>
            <div className="lg:col-span-2">
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5" style={{ color: "#200033" }}>{f("hero_heading")}</h1>
              <p className="text-lg mb-8" style={{ color: "#554B4E" }}>{f("hero_subtext")}</p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: "#480E6A" }}>
                {ts("free_consult")}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.122 1.526 5.852L.057 23.428a.75.75 0 0 0 .916.916l5.576-1.469A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" /></svg>
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

      {/* ABOUT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              {fields.about_label && (
                <p className="text-xs font-semibold mb-4 px-3 py-1 inline-block rounded-full border" style={{ color: "#480E6A", borderColor: "#480E6A" }}>{f("about_label")}</p>
              )}
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 leading-snug" style={{ color: "#200033" }}>{f("about_heading")}</h2>
              {fields.about_p ? (
                <p className="text-base leading-relaxed" style={{ color: "#554B4E" }}>{f("about_p")}</p>
              ) : (
                <>
                  <p className="text-base mb-4 leading-relaxed" style={{ color: "#554B4E" }}>{f("about_p1")}</p>
                  <p className="text-base leading-relaxed" style={{ color: "#554B4E" }}>{f("about_p2")}</p>
                </>
              )}
            </div>
            <div className="flex justify-center">
              <img src={aboutImage} alt={f("about_heading")} className="max-w-full rounded-2xl shadow-lg" loading="lazy" onError={onErr} />
            </div>
          </div>
        </div>
      </section>

      {hasMetrics && (
        <section className="py-20" style={{ backgroundColor: "#200033" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">{f("metric_title")}</h2>
                <div className="flex items-end gap-4 mb-4">
                  <span className="text-7xl font-extrabold text-white leading-none">{f("metric_count")}</span>
                </div>
                <p className="text-lg font-semibold mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>{f("metric_desc")}</p>
                <p className="text-base" style={{ color: "rgba(255,255,255,0.5)" }}>{f("metric_journey")}</p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img src={heroImage} alt={f("metric_title")} className="max-w-full max-w-sm rounded-2xl" loading="lazy" onError={onErr} />
              </div>
            </div>
          </div>
        </section>
      )}

      {hasAbout2 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div className="flex justify-center order-last lg:order-first">
                <img src={aboutImage} alt={f("about2_heading")} className="max-w-full rounded-2xl shadow-lg" loading="lazy" onError={onErr} />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 leading-snug" style={{ color: "#200033" }}>{f("about2_heading")}</h2>
                <p className="text-base mb-4 leading-relaxed" style={{ color: "#554B4E" }}>{f("about2_p1")}</p>
                <p className="text-base leading-relaxed" style={{ color: "#554B4E" }}>{f("about2_p2")}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* QUOTE */}
      <section className="py-14" style={{ backgroundColor: "#f9f7ff" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl sm:text-2xl font-semibold leading-relaxed" style={{ color: "#200033" }}>{f("quote")}</blockquote>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: "#480E6A" }}>{ts("portfolio_label")}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "#200033" }}>{fields.portfolio_heading || ts("portfolio_heading")}</h2>
            <p className="mt-3 text-sm" style={{ color: "#554B4E" }}>{fields.portfolio_subtext || ts("portfolio_subtext")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayed.map((item, i) => (
              <div key={i} className="rounded-xl overflow-hidden relative group cursor-pointer">
                <img src={item.url} alt={item.caption ?? ""} className="w-full aspect-video object-cover rounded-xl" loading="lazy" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <span className="text-sm font-bold text-white">{item.caption}</span>
                </div>
              </div>
            ))}
          </div>
          {!showAll && portfolioItems.length > 9 && (
            <div className="text-center mt-8">
              <button onClick={() => setShowAll(true)} className="px-8 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "#480E6A" }}>{ts("load_more")}</button>
            </div>
          )}
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

      {/* COCOK UNTUK SIAPA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "#200033" }}>{f("cocok_heading")}</h2>
            <p className="text-base leading-relaxed" style={{ color: "#554B4E" }}>{f("cocok_desc")}</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-56 mb-4 cursor-pointer group">
            <img src={COCOK[0].img} alt={COCOK[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" onError={onErr} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-6"><h3 className="text-white font-bold text-xl">{COCOK[0].title}</h3></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {COCOK.slice(1).map((item) => (
              <div key={item.title} className="relative rounded-2xl overflow-hidden h-48 cursor-pointer group">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" onError={onErr} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-5"><h3 className="text-white font-bold text-lg">{item.title}</h3></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROSES */}
      <section className="py-20" style={{ backgroundColor: "#f9f7ff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: "#480E6A" }}>{ts("process_label")}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "#200033" }}>{ts("process_heading")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                <img src={DEFAULT_PROCESS_IMGS[i]} alt={ts(`process_${i}`)} className="w-full aspect-video object-cover rounded-t-2xl" loading="lazy" onError={onErr} />
                <div className="p-5">
                  <span className="text-xs font-bold px-2 py-1 rounded text-white mb-3 inline-block" style={{ backgroundColor: "#480E6A" }}>0{i + 1}</span>
                  <h3 className="font-bold text-base mt-2" style={{ color: "#200033" }}>{ts(`process_${i}`)}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MINI CTA */}
      <section className="py-10 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "#200033" }}>
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 px-10 py-14">
              <div className="flex-1 max-w-xl">
                <div className="inline-block mb-5 px-4 py-1 rounded-full text-xs font-medium" style={{ border: "0.8px solid rgb(202,192,190)", color: "rgba(255,255,255,0.7)" }}>{ts("mini_cta_label")}</div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-5 leading-tight">{ts("mini_cta_heading")}</h2>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>{ts("mini_cta_subtext")}</p>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium px-7 py-3 rounded-lg text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: "#ffffff", color: "#200033" }}>{ts("mini_cta_button")}</a>
              </div>
              <div className="flex-1 flex justify-center lg:justify-end">
                <img src={ctaImage} alt="Hubungi Alvin Dio Prakosa" className="object-contain w-full max-w-xs lg:max-w-md rounded-2xl" loading="lazy" onError={onErr} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: "#480E6A" }}>{ts("faq_label")}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ color: "#200033" }}>{ts("faq_heading")}</h2>
            <p className="text-sm" style={{ color: "#554B4E" }}>{f("faq_subtext")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((item, i) => (
              <div key={i} className="rounded-xl border border-gray-200 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold bg-white hover:bg-gray-50 transition-colors" style={{ color: "#200033" }}>
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
