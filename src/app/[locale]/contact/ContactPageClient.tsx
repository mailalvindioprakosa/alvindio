"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const BASE = "https://saraya.website/wp-content/uploads/";

type Settings = {
  email: string;
  address: string;
  wa_number: string;
  phone_display: string;
};

export default function ContactPageClient({ settings }: { settings: Settings }) {
  const t = useTranslations("contact");
  const ts = useTranslations("shared");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const WA = `https://wa.me/${settings.wa_number}`;

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setSubmitted(true);
    } catch {
      setError("Gagal mengirim pesan. Coba lagi.");
    } finally {
      setSending(false);
    }
  };

  const WHY_US = [
    { img: BASE + "2025/06/crown-2.webp", title: ts("why_0_title"), desc: ts("why_0_desc") },
    { img: BASE + "2025/06/Garansi-Selamanya.webp", title: ts("why_1_title"), desc: ts("why_1_desc") },
    { img: BASE + "2025/06/Website-Berkualitas.webp", title: ts("why_2_title"), desc: ts("why_2_desc") },
    { img: BASE + "2025/06/mudah-digunakan.webp", title: ts("why_3_title"), desc: ts("why_3_desc") },
  ];

  return (
    <main className="pt-16">
      {/* HERO DARK */}
      <section style={{ backgroundColor: "#200033" }} className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">{t("hero_heading")}</h1>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ color: "#200033" }}>{t("heading")}</h2>
              <h3 className="text-xl font-semibold mb-8" style={{ color: "#481d69" }}>{t("subheading")}</h3>

              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#f3e8ff" }}>
                    <svg className="w-5 h-5" fill="none" stroke="#480E6A" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-1" style={{ color: "#200033" }}>{t("email_label")}</h3>
                    <a href={`mailto:${settings.email}`} className="text-sm hover:underline" style={{ color: "#554B4E" }}>{settings.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#f3e8ff" }}>
                    <svg className="w-5 h-5" fill="none" stroke="#480E6A" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-1" style={{ color: "#200033" }}>{t("address_label")}</h3>
                    <p className="text-sm" style={{ color: "#554B4E" }}>{settings.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#f3e8ff" }}>
                    <svg className="w-5 h-5" fill="none" stroke="#480E6A" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-1" style={{ color: "#200033" }}>{t("phone_label")}</h3>
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline" style={{ color: "#554B4E" }}>{settings.phone_display}</a>
                  </div>
                </div>
              </div>

              {submitted ? (
                <div className="rounded-xl p-8 text-center" style={{ backgroundColor: "#f3e8ff" }}>
                  <div className="text-4xl mb-3">✓</div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: "#480E6A" }}>{t("form_success_heading")}</h3>
                  <p className="text-sm" style={{ color: "#554B4E" }}>{t("form_success_text")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" required placeholder={t("form_name")} value={form.name} onChange={(e) => set("name", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
                  <input type="email" required placeholder={t("form_email")} value={form.email} onChange={(e) => set("email", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
                  <input type="tel" required placeholder={t("form_phone")} value={form.phone} onChange={(e) => set("phone", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
                  <textarea required rows={4} placeholder={t("form_message")} value={form.message} onChange={(e) => set("message", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none" />
                  {error && <p className="text-sm text-red-500">{error}</p>}
                  <button type="submit" disabled={sending} className="w-full py-3 rounded-lg text-white font-semibold text-sm transition-opacity hover:opacity-90 disabled:opacity-60" style={{ backgroundColor: "#480E6A" }}>
                    {sending ? "Mengirim..." : t("form_submit")}
                  </button>
                </form>
              )}
            </div>

            <div className="flex justify-center lg:justify-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={BASE + "2026/02/Hero-images.png"} alt="Kontak Alvin Dio Prakosa" className="max-w-full rounded-2xl shadow-xl" loading="lazy" />
            </div>
          </div>
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
