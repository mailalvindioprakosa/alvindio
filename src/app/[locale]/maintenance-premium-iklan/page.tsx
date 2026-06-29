"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const WA = "https://wa.me/6285117257892";
const BASE = "https://saraya.website/wp-content/uploads/";

const CLIENT_LOGOS = [
  "2024/08/Less-Technology-1.webp","2024/10/Mitra-Sahabat-Tani.webp","2024/10/Desa-Wisata-Pinge.webp",
  "2024/09/El-Hakim-Partners.webp","2024/09/Harfintax.webp","2024/08/Wolu-EO.webp",
  "2024/08/Sinergi-Institute.webp","2024/08/Seven-Media-Tech.webp","2024/08/PPID.webp",
  "2024/08/Niyura-Kebaya.webp","2024/08/Lenka-Desain.webp","2024/08/Kusminantiek.webp",
].map(p => BASE + p);

const PORTFOLIO = [
  { img: BASE+"2025/12/Featured-Image-SRY-12-1.webp", cat: "Company Profile", title: "Pawon Tembaga" },
  { img: BASE+"2024/10/lesstechnology.png", cat: "Company Profile", title: "Less Technology" },
  { img: BASE+"2024/10/mitrasahabattani.png", cat: "Company Profile", title: "Mitra Sahabat Tani" },
  { img: BASE+"2024/10/wisata-pinge.png", cat: "Company Profile", title: "Desa Wisata Pinge" },
  { img: BASE+"2024/09/th-fintax.png", cat: "Company Profile", title: "Website Harfintax" },
  { img: BASE+"2024/09/El-Hakim-Partners.webp", cat: "Company Profile", title: "El Hakim & Partners" },
  { img: BASE+"2024/08/Frame-5-1.png", cat: "Company Profile", title: "Website DGC Semarang" },
  { img: BASE+"2024/08/Sinergi-Institute.webp", cat: "Company Profile", title: "Synergy of Ideas Institute" },
  { img: BASE+"2024/08/Frame-6-1.png", cat: "Landing Page", title: "Niyura Butik Kebaya" },
  { img: BASE+"2024/08/Frame-1.png", cat: "Company Profile", title: "LPK GASTERA" },
  { img: BASE+"2024/08/Frame-1-2.png", cat: "Company Profile", title: "KAP Titus Haryanto" },
  { img: BASE+"2024/08/Frame-1-1.png", cat: "Company Profile", title: "Klinik Yuda Medika" },
  { img: BASE+"2024/08/Lenka-Desain.webp", cat: "Landing Page", title: "Lenka Desain 9" },
  { img: BASE+"2024/08/Frame-1-3.png", cat: "Landing Page", title: "Law Office Bima Putra" },
  { img: BASE+"2024/08/Wolu-EO.webp", cat: "Company Profile", title: "Wolu Event Organizer" },
];

const WHY_US = [
  { img: BASE+"2025/06/crown-2.webp", title: "Template Premium", desc: "Desain eksklusif dengan kualitas tinggi yang siap pakai untuk tampil profesional tanpa repot." },
  { img: BASE+"2025/06/Garansi-Selamanya.webp", title: "Garansi Terjamin", desc: "Sekali Menggunakan layanan jasa kami, Anda mendapatkan dukungan layanan seumur hidup." },
  { img: BASE+"2025/06/Website-Berkualitas.webp", title: "Seo Friendly", desc: "Website mudah ditemukan di Google, bantu tingkatkan trafik dan jangkauan bisnis Anda." },
  { img: BASE+"2025/06/mudah-digunakan.webp", title: "Mudah Digunakan", desc: "Antarmuka yang simpel dan intuitif, siapa pun bisa mengelola tanpa perlu keahlian teknis." },
];

const PROCESS = [
  { img: BASE+"2025/07/Konsultasi-Target-Pasar-pada-Bisnis-Anda.png", title: "Konsultasi Target Pasar pada Bisnis Anda" },
  { img: BASE+"2025/07/Strategi-Maintenance-SEO-Premium-Iklan.png", title: "Strategi Maintenance SEO Premium + Iklan" },
  { img: BASE+"2025/07/Melakukan-Premium-Iklan-Basic-pada-Website.png", title: "Melakukan Premium + Iklan Basic pada Website" },
];

const FAQ_ITEMS = [
  { q: "Apa itu Jasa Maintenance Premium + Iklan?", a: "Jasa Maintenance Premium + Iklan adalah layanan lengkap yang mencakup perawatan website secara berkala sekaligus pengelolaan iklan digital untuk memastikan bisnis Anda terus berkembang secara online." },
  { q: "Apa yang termasuk dalam layanan maintenance premium ini?", a: "Layanan mencakup pembaruan konten, optimasi kecepatan website, pembaruan plugin/tema, monitoring keamanan, backup rutin, serta pengelolaan kampanye iklan Google Ads atau media sosial." },
  { q: "Kenapa penting menggunakan maintenance premium ini?", a: "Website yang tidak dirawat rentan mengalami masalah teknis, penurunan performa, dan kerentanan keamanan. Dengan maintenance rutin, bisnis Anda tetap berjalan optimal dan kompetitif." },
  { q: "Seberapa sering layanan ini diberikan?", a: "Layanan maintenance diberikan secara bulanan, mencakup semua aspek teknis dan pemasaran digital yang diperlukan untuk menjaga performa website dan efektivitas iklan Anda." },
  { q: "Apakah layanan ini cocok untuk semua jenis bisnis?", a: "Ya, layanan Maintenance Premium + Iklan cocok untuk semua jenis bisnis, mulai dari UMKM hingga perusahaan besar yang ingin mempertahankan kehadiran digital yang kuat dan konsisten." },
  { q: "Bagaimana cara memulai layanan maintenance premium ini?", a: "Hubungi kami melalui WhatsApp atau formulir kontak, dan tim kami akan melakukan analisis kebutuhan website Anda sebelum menyusun paket yang paling sesuai." },
  { q: "Apakah ada laporan berkala dari layanan ini?", a: "Ya, kami memberikan laporan bulanan yang mencakup performa website, statistik iklan, dan rekomendasi strategi untuk bulan berikutnya." },
  { q: "Apakah layanan iklan mencakup platform media sosial?", a: "Ya, layanan iklan kami mencakup Google Ads, Facebook Ads, dan Instagram Ads sesuai dengan kebutuhan dan target audiens bisnis Anda." },
];

export default function MaintenancePremiumIklan() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? PORTFOLIO : PORTFOLIO.slice(0, 9);

  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* HERO — light bg Hero-Saraya, centered */}
        <section className="py-20 lg:py-28 text-center"
          style={{ backgroundImage: "url(https://saraya.website/wp-content/uploads/2025/06/Hero-Saraya-ThemeS.webp)", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5" style={{ color: "#200033" }}>
              Maintenance Premium + Iklan
            </h1>
            <p className="text-lg mb-8" style={{ color: "#554B4E" }}>
              Jangan biarkan website Anda berhenti berkembang! Dengan Layanan Maintenance Premium + Iklan dari Saraya, pastikan website Anda selalu optimal, aman, dan terus menarik pelanggan baru setiap harinya.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#480E6A" }}>
                Konsultasi Gratis
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.122 1.526 5.852L.057 23.428a.75.75 0 0 0 .916.916l5.576-1.469A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              </a>
              <a href="#portofolio"
                className="inline-block px-7 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity border"
                style={{ borderColor: "#480E6A", color: "#480E6A" }}>
                Lihat Portfolio
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT 1 — white, img left, text right */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div className="flex justify-center">
                <img src={BASE+"2025/07/Website-Landing-Page-1-1024x797.png"} alt="Maintenance Premium + Iklan" className="max-w-full rounded-2xl shadow-lg" loading="lazy" />
              </div>
              <div>
                <span className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: "#480E6A" }}>Tentang Jasa Maintenance Premium + Iklan</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 leading-snug" style={{ color: "#200033" }}>
                  Solusi Lengkap untuk Website Aktif &amp; Bisnis yang Terus Tumbuh
                </h2>
                <p className="text-base mb-4 leading-relaxed" style={{ color: "#554B4E" }}>
                  Layanan ini kami rancang untuk membantu bisnis Anda tidak hanya hadir, tapi terus berkembang dan bertumbuh di era digital. Dengan kombinasi maintenance rutin dan strategi iklan yang tepat, website Anda akan selalu optimal dan menghasilkan.
                </p>
                <p className="text-base mb-6 leading-relaxed" style={{ color: "#554B4E" }}>
                  Kami memastikan setiap aspek website Anda terjaga—mulai dari keamanan, kecepatan, hingga visibilitas di mesin pencari. Ditambah dengan kampanye iklan yang terkelola dengan baik, bisnis Anda siap menjangkau lebih banyak pelanggan potensial.
                </p>
                <a href="#layanan" className="text-sm font-semibold" style={{ color: "#480E6A" }}>Pilihan Layanan Website &gt;</a>
              </div>
            </div>
          </div>
        </section>

        {/* PROSES */}
        <section className="py-20" style={{ backgroundColor: "#f9f7ff" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: "#480E6A" }}>Saraya Website</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "#200033" }}>Proses Maintenance Premium + Iklan</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {PROCESS.map((step, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                  <img src={step.img} alt={step.title} className="w-full aspect-video object-cover" loading="lazy" />
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
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-xl sm:text-2xl font-semibold leading-relaxed italic" style={{ color: "#200033" }}>
              &ldquo;Website cepat, aman, dan selalu update—ditambah strategi iklan digital yang menjangkau pelanggan lebih luas setiap saat. Layanan ini cocok untuk Anda yang ingin menjaga website tetap optimal, cepat, dan relevan di Google. Fokus pada Anda, biarkan kami yang merawat perjalanannya.&rdquo;
            </blockquote>
          </div>
        </section>

        {/* ABOUT 2 — light, text left, img right */}
        <section className="py-20" style={{ backgroundColor: "#f9f7ff" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: "#480E6A" }}>Maintenance Premium + Iklan</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 leading-snug" style={{ color: "#200033" }}>
                  Tingkatkan Bisnis Anda dengan Website yang Dirancang untuk Berkembang
                </h2>
                <p className="text-base mb-4 leading-relaxed" style={{ color: "#554B4E" }}>
                  Memiliki website hanya langkah strategi yang tepat untuk membuat bisnis terus berkembang di luar batas. Dengan layanan maintenance premium kami, website Anda selalu bekerja optimal—cepat, aman, dan siap mengkonversi.
                </p>
                <p className="text-base mb-8 leading-relaxed" style={{ color: "#554B4E" }}>
                  Kombinasikan dengan strategi iklan digital yang terencana untuk menjangkau pelanggan baru dan meningkatkan performa bisnis Anda secara konsisten setiap bulannya.
                </p>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="inline-block px-7 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#480E6A" }}>
                  Konsultasi Gratis ↗
                </a>
              </div>
              <div className="flex justify-center">
                <img src={BASE+"2025/07/Maintenance-Premium.png"} alt="Maintenance Premium Dashboard" className="max-w-full rounded-2xl shadow-lg" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* MENGAPA SARAYA */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: "#480E6A" }}>Saraya Website</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "#200033" }}>Mengapa Saraya Website?</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHY_US.map((item) => (
                <div key={item.title} className="rounded-2xl p-6 border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
                  <img src={item.img} alt={item.title} className="w-12 h-12 object-contain mx-auto mb-4" loading="lazy" />
                  <h3 className="font-bold text-base mb-2" style={{ color: "#200033" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#554B4E" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portofolio" className="py-20" style={{ backgroundColor: "#f9f7ff" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: "#480E6A" }}>Portofolio</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "#200033" }}>Hasil Karya Kami</h2>
              <p className="mt-3 text-sm" style={{ color: "#554B4E" }}>Pengalaman mengerjakan ratusan projek website, kami memastikan kualitas memuaskan.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {displayed.map((item, i) => (
                <div key={i} className="rounded-xl overflow-hidden relative group cursor-pointer">
                  <img src={item.img} alt={item.title} className="w-full aspect-video object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <span className="text-xs text-white/70 font-medium">{item.cat}</span>
                    <span className="text-sm font-bold text-white">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
            {!showAll && <div className="text-center mt-8"><button onClick={() => setShowAll(true)} className="px-8 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "#480E6A" }}>Load More</button></div>}
          </div>
        </section>

        {/* MINI CTA */}
        <section className="py-10 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "#200033" }}>
              <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 px-10 py-14">
                <div className="flex-1 max-w-xl">
                  <div className="inline-block mb-5 px-4 py-1 rounded-full text-xs font-medium" style={{ border: "0.8px solid rgb(202,192,190)", color: "rgba(255,255,255,0.7)" }}>Percayakan Saraya Website</div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-5 leading-tight">Hubungi Kami Sekarang Juga</h2>
                  <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>Buat Website untuk Bisnis Anda Sekarang Juga, Dapatkan promo menarik untuk hari ini</p>
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-medium px-7 py-3 rounded-lg text-sm transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#ffffff", color: "#200033" }}>
                    Hubungi Kami
                  </a>
                </div>
                <div className="flex-1 flex justify-center lg:justify-end">
                  <img src={BASE+"2026/02/cta-1.png"} alt="Hubungi Saraya" className="object-contain w-full max-w-xs lg:max-w-md" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — 2 kolom */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: "#480E6A" }}>Frequently Asked Questions</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ color: "#200033" }}>Pertanyaan yang sering ditanyakan</h2>
              <p className="text-sm" style={{ color: "#554B4E" }}>Semua yang perlu Anda ketahui sebelum memulai layanan Maintenance Premium yang terpercaya.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i} className="rounded-xl border border-gray-200 overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold bg-white hover:bg-gray-50 transition-colors"
                    style={{ color: "#200033" }}>
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
              <div className="inline-block mb-6 px-4 py-1 rounded-full text-xs font-medium" style={{ border: "0.8px solid rgb(202,192,190)", color: "rgba(255,255,255,0.7)" }}>Percayakan Pada Saraya Website</div>
              <h2 className="text-3xl sm:text-5xl font-medium text-white mb-4 leading-tight">Hubungi Kami Sekarang Juga</h2>
              <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>Buat website untuk bisnis anda sekarang juga dan dapatkan promo menarik</p>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium px-8 py-4 rounded-lg text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#ffffff", color: "#200033" }}>Hubungi Kami</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
