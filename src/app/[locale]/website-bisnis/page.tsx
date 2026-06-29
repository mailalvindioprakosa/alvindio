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

const HERO_GALLERY = [
  "2025/06/14.webp","2025/06/9.webp","2025/06/5-1.webp","2025/06/18.webp","2025/06/17.webp",
  "2025/06/16.webp","2025/06/15.webp","2025/06/13.webp","2025/06/12.webp",
  "2025/06/11.webp","2025/06/8.webp","2025/06/10.webp","2025/06/6-1.webp","2025/06/7-1.webp",
  "2025/06/2.-Balai-Bahasa.webp","2025/06/3.webp","2025/06/4.webp","2025/06/1.-Brida-1.webp",
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
  { img: BASE+"2025/07/Diskusi-Website-Yang-Dibutuhkan.png", title: "Diskusi Tentang Website yang Anda butuhkan" },
  { img: BASE+"2025/07/Perancangan-Website-Sesuai-Hasil-Diskusi.png", title: "Perancangan Website Sesuai Kebutuhan Anda" },
  { img: BASE+"2025/07/Website-Di-Kembangkan-hingga-siap-digunakan.png", title: "Pengembangan Website Hingga Siap Digunakan" },
];

const COCOK = [
  { title: "Bisnis Profesional", img: BASE+"2024/08/Frame-5-1.png" },
  { title: "E-commerce", img: BASE+"2024/08/Frame-6-1.png" },
  { title: "Hotel / Homestay", img: BASE+"2024/08/Lenka-Desain.webp" },
];

const FAQ_ITEMS = [
  { q: "Apa yang dimaksud dengan pembuatan website bisnis?", a: "Website bisnis adalah website yang dirancang khusus untuk mempromosikan dan mengoperasikan bisnis secara online, membantu perusahaan menjangkau lebih banyak pelanggan dan meningkatkan kredibilitas mereka." },
  { q: "Berapa lama waktu pembuatan website bisnis?", a: "Rata-rata pembuatan website bisnis membutuhkan waktu 5–10 hari kerja, tergantung kompleksitas fitur dan jumlah halaman yang dibutuhkan." },
  { q: "Apakah website bisnis bisa dikelola sendiri?", a: "Ya, kami membangun website dengan CMS yang mudah digunakan sehingga Anda bisa memperbarui konten, menambah produk, dan mengelola website tanpa keahlian teknis." },
  { q: "Apakah website bisnis mobile friendly?", a: "Tentu! Semua website bisnis yang kami buat sudah responsive dan mobile-friendly sehingga tampil sempurna di semua perangkat." },
  { q: "Apakah website bisnis bisa menampilkan toko online?", a: "Ya, kami bisa mengintegrasikan fitur e-commerce ke dalam website bisnis Anda sehingga pelanggan bisa melihat dan membeli produk secara langsung." },
  { q: "Apakah website bisnis ramah mesin pencari untuk SEO?", a: "Ya, setiap website bisnis yang kami buat sudah dioptimalkan dengan struktur SEO-friendly untuk membantu bisnis Anda muncul di halaman pertama Google." },
  { q: "Apakah ada garansi setelah website selesai dibuat?", a: "Ya, kami memberikan garansi dukungan teknis seumur hidup untuk memastikan website Anda selalu berjalan optimal." },
  { q: "Apakah Website Bisnis Bisa Dioptimasi untuk SEO?", a: "Ya, website bisnis dapat dioptimalkan dengan teknik SEO on-page dan off-page untuk meningkatkan visibilitas di mesin pencari dan mendatangkan lebih banyak traffic organik." },
];

export default function WebsiteBisnis() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? PORTFOLIO : PORTFOLIO.slice(0, 9);

  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* HERO — full bg Hero-Saraya (light), split: cards left + text right */}
        <section className="py-16 lg:py-20"
          style={{ backgroundImage: "url(https://saraya.website/wp-content/uploads/2025/06/Hero-Saraya-ThemeS.webp)", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
              {/* LEFT: image */}
              <div className="hidden lg:flex lg:col-span-3 items-center justify-center">
                <img src="https://saraya.website/wp-content/uploads/2025/07/Hero-Bisnis.png" alt="Jasa Website Bisnis" className="w-full max-w-lg drop-shadow-xl" loading="eager" />
              </div>
              {/* RIGHT: text */}
              <div className="lg:col-span-2">
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5" style={{ color: "#200033" }}>
                  Jasa pembuatan website Bisnis Terbaik
                </h1>
                <p className="text-lg mb-8" style={{ color: "#554B4E" }}>
                  Buat website kini makin mudah dan cepat! Tingkatkan kredibilitas, jangkau lebih banyak pelanggan, dan hadirkan pengalaman digital yang profesional. Ayo bangun citra digital untuk bisnis Anda bersama Saraya!
                </p>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#480E6A" }}>
                  Konsultasi Gratis
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.122 1.526 5.852L.057 23.428a.75.75 0 0 0 .916.916l5.576-1.469A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENT LOGOS STRIP — 9 kolom, 2 baris */}
        <section className="bg-white py-4 px-4">
          <div className="max-w-7xl mx-auto">
            <p className="text-sm font-semibold mb-3 text-center" style={{ color: "#554B4E" }}>Telah dipercaya oleh:</p>
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

        {/* ABOUT — text left, img right */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 leading-snug" style={{ color: "#200033" }}>
                  Website Modern, Langkah Cerdas untuk Membesarkan Bisnis Anda
                </h2>
                <p className="text-base mb-4 leading-relaxed" style={{ color: "#554B4E" }}>
                  Di era digital yang serba cepat, tampil online bukan lagi pilihan—ini keharusan. Jadikan website Anda sebagai aset bisnis terkuat yang bekerja 24/7, menjangkau pelanggan baru, dan membangun kepercayaan merek yang solid.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "#554B4E" }}>
                  Website bisnis yang dirancang dengan baik akan meningkatkan kredibilitas perusahaan, mempermudah pelanggan menemukan produk atau layanan Anda, dan membuka peluang konversi yang lebih besar di setiap kunjungan.
                </p>
              </div>
              <div className="flex justify-center">
                <img src={BASE+"2025/07/UMKM-About-1024x797.png"} alt="Target Pasar Bisnis" className="max-w-full rounded-2xl shadow-lg" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <section className="py-14" style={{ backgroundColor: "#f9f7ff" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-xl sm:text-2xl font-semibold leading-relaxed" style={{ color: "#200033" }}>
              &ldquo;Tingkatkan Citra Bisnis Anda dengan Website Profesional yang Menggugah Kepercayaan&rdquo;
            </blockquote>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="py-20 bg-white">
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

        {/* MENGAPA SARAYA */}
        <section className="py-20" style={{ backgroundColor: "#f9f7ff" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: "#480E6A" }}>Saraya Website</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "#200033" }}>Mengapa Saraya Website?</h2>
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
              <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "#200033" }}>Website Bisnis cocok untuk siapa?</h2>
              <p className="text-base leading-relaxed" style={{ color: "#554B4E" }}>
                Website Bisnis cocok untuk berbagai jenis pelaku usaha yang membutuhkan kehadiran digital profesional untuk memperluas jangkauan pasar dan membangun kepercayaan pelanggan yang kuat secara online.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-56 mb-4 cursor-pointer group">
              <img src={COCOK[0].img} alt={COCOK[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-6"><h3 className="text-white font-bold text-xl">{COCOK[0].title}</h3></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COCOK.slice(1).map((item) => (
                <div key={item.title} className="relative rounded-2xl overflow-hidden h-48 cursor-pointer group">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
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
              <span className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: "#480E6A" }}>Saraya Website</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "#200033" }}>Proses Kami Membuat Website</h2>
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

        {/* MINI CTA */}
        <section className="py-10 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "#200033" }}>
              <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 px-10 py-14">
                <div className="flex-1 max-w-xl">
                  <div className="inline-block mb-5 px-4 py-1 rounded-full text-xs font-medium" style={{ border: "0.8px solid rgb(202,192,190)", color: "rgba(255,255,255,0.7)" }}>Percayakan Pada Saraya Website</div>
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
              <p className="text-sm" style={{ color: "#554B4E" }}>Semua yang perlu Anda ketahui sebelum memulai website bisnis yang profesional dan berdampak.</p>
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
