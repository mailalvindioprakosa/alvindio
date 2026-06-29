"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const WA = "https://wa.me/6285117257892";
const BASE = "https://saraya.website/wp-content/uploads/";

const portfolioItems: { img: string; title: string; cat: string | string[] }[] = [
  { img: BASE+"2025/12/Featured-Image-SRY-12-1.webp", title: "Pawon Tembaga", cat: "Company Profile" },
  { img: BASE+"2024/10/lesstechnology.png", title: "Less Technology", cat: "Company Profile" },
  { img: BASE+"2024/10/mitrasahabattani.png", title: "Mitra Sahabat Tani", cat: "Company Profile" },
  { img: BASE+"2024/10/wisata-pinge.png", title: "Desa Wisata Pinge", cat: "Company Profile" },
  { img: BASE+"2024/09/th-fintax.png", title: "Website Harfintax", cat: ["Company Profile", "Web Design"] },
  { img: BASE+"2024/09/El-Hakim-Partners.webp", title: "Website El Hakim & Partners", cat: ["Company Profile", "Web Design"] },
  { img: BASE+"2024/08/Frame-5-1.png", title: "Website DGC Semarang", cat: ["Company Profile", "Web Design"] },
  { img: BASE+"2024/08/Sinergi-Institute.webp", title: "Website Synergy of Ideas Institute", cat: ["Company Profile", "Web Design"] },
  { img: BASE+"2024/08/Frame-6-1.png", title: "Website niyura Butik Kebaya Semarang", cat: ["Landing Page", "Web Design"] },
  { img: BASE+"2024/08/Frame-1.png", title: "Website LPK GASTERA (Global Akarui Sejahtera)", cat: ["Company Profile", "Web Design"] },
  { img: BASE+"2024/08/Frame-1-2.png", title: "Website kAP Titus Haryanto and Mayhotraja", cat: ["Company Profile", "Web Design"] },
  { img: BASE+"2024/08/Frame-1-1.png", title: "Website Klinik Yuda Medika Semarang", cat: ["Company Profile", "Web Design"] },
  { img: BASE+"2024/08/Lenka-Desain.webp", title: "Website Jasa Bangunan Lenka Desain 9 Semarang", cat: ["Landing Page", "Web Design"] },
  { img: BASE+"2024/08/Frame-1-3.png", title: "Website Law Office Bima Putra & Partners", cat: ["Landing Page", "Web Design"] },
  { img: BASE+"2024/08/Wolu-EO.webp", title: "Website Event Organizer Wolu Organizer semarang", cat: ["Company Profile", "Web Design"] },
  { img: BASE+"2024/08/Dinas-Arsip.webp", title: "Website Pemerintah Dinas Kearsipan Dan Perpustakaan Provinsi Jawa Tengah", cat: "E-Government" },
  { img: BASE+"2024/08/PPID.webp", title: "Website Pemerintah PPID Balai Bahasa Provinsi Jawa Tengah", cat: "E-Government" },
  { img: BASE+"2024/08/Cassana.webp", title: "Website PT. Cassanatama Naturindo Semarang", cat: ["Company Profile", "Web Design"] },
  { img: BASE+"2024/08/Bina-Amal.webp", title: "Website Sekolah Yayasan Bina Amal Semarang", cat: ["Company Profile", "Web Design"] },
  { img: BASE+"2024/08/Horecaba.webp", title: "Website Perusahaan Saga Makmur Horecaba", cat: ["E-Commerce", "Web Apps"] },
  { img: BASE+"2024/08/Balai-Bahasa.webp", title: "Website Pemerintah Balai Bahasa Provinsi Jawa Tengah", cat: ["E-Government", "Web Design"] },
  { img: BASE+"2024/08/Aqualux-Indonesia.webp", title: "Website Perusahaan Aqualux Indonesia", cat: ["Company Profile", "Web Design"] },
  { img: BASE+"2024/08/Impocare.webp", title: "Website Perusahaan Pest Control Semarang", cat: ["Company Profile", "Web Design"] },
  { img: BASE+"2024/08/Konveksi-Jesha.webp", title: "Landing Page Konveksi Kaos Semarang", cat: ["Landing Page", "Web Design"] },
  { img: BASE+"2024/08/Brida-Jateng-1920x1080.png", title: "Website Pemerintahan Brida (Badan Riset dan Inovasi Daerah)", cat: ["Company Profile", "Web Design"] },
  { img: BASE+"2023/11/image-60.jpg", title: "Website Wedding Organizer Semarang", cat: "Company Profile" },
  { img: BASE+"2023/11/image-56.jpg", title: "Website Seminar UNDIP", cat: ["Company Profile", "Web Design"] },
  { img: BASE+"2023/11/image-49.webp", title: "Website Sekolah SMP Texmaco Semarang", cat: "Company Profile" },
  { img: BASE+"2023/11/image-46.webp", title: "Website Sekolah SMK Texmaco Subang", cat: "Company Profile" },
  { img: BASE+"2023/11/image-42.webp", title: "Website Sekolah SMK Texmaco Semarang", cat: "Company Profile" },
  { img: BASE+"2023/11/image-39.jpg", title: "Website Sewa Mobil Semarang TPG", cat: "Company Profile" },
  { img: BASE+"2023/11/image-36.webp", title: "Website PT. Mitra Karya Analitika", cat: "E-Commerce" },
  { img: BASE+"2023/11/image-33.webp", title: "Website Landing Page Merbabu Rent Car Semarang", cat: "Landing Page" },
  { img: BASE+"2023/11/image-30.jpg", title: "Website Furniture CV. KUSMIN ANTIEK Jepara", cat: "Company Profile" },
  { img: BASE+"2023/11/image-27.jpg", title: "Website PT. Kurnia Farma Mandiri", cat: "Company Profile" },
  { img: BASE+"2023/11/image-25.jpg", title: "Website Reservasi Hotel Kristal Kupang", cat: "E-Commerce" },
  { img: BASE+"2023/11/image-22.jpg", title: "Website Kantor Imigrasi Tasikmalaya", cat: "E-Government" },
  { img: BASE+"2023/11/image-18-_1_.webp", title: "Website PT Java Mete Indonesia", cat: "Company Profile" },
  { img: BASE+"2023/11/image-15.webp", title: "Website Seminar Internasional UNDIP", cat: "E-Government" },
  { img: BASE+"2023/11/image-12.jpg", title: "Website HCW Hometex", cat: "Company Profile" },
  { img: BASE+"2023/11/image-9.jpg", title: "Website Ginsa Fashion Surakarta", cat: "Company Profile" },
  { img: BASE+"2023/11/image-5.jpg", title: "Website Catering – Pawone Deanis Cirebon", cat: "Landing Page" },
  { img: BASE+"2023/11/image-1_1.webp", title: "Website PT. AUTENTIK KARYA ANALITIKA", cat: "Company Profile" },
  { img: BASE+"2023/09/dpscindonesia-1.webp", title: "Website Public Speaking – DPSC Indonesia", cat: "Landing Page" },
  { img: BASE+"2023/09/konveksisemarangku-1.webp", title: "Website Konveksi Semarang – Jesha Group", cat: "Landing Page" },
  { img: BASE+"2023/09/portfolio-horecabacoid.png", title: "Website Horecaba.co.id", cat: "E-Commerce" },
  { img: BASE+"2023/09/portfolio-cassanatama.png", title: "Website Cassanatama Naturindo", cat: "Company Profile" },
  { img: BASE+"2023/09/P-amposariguesthouse.com_.png", title: "Website Amposari Guesthouse", cat: "Company Profile" },
  { img: BASE+"2023/09/library-poltekkes-1.webp", title: "Perpustakaan Terpadu Poltekkes Kemenkes Tanjungpinang", cat: "E-Government" },
  { img: BASE+"2023/09/portfolio-kusminantiek.webp", title: "Website Furniture Kusminantiek Jepara", cat: "E-Commerce" },
  { img: BASE+"2023/09/portfolio-iconfield.webp", title: "Website studio Desain – Icon field", cat: "E-Commerce" },
  { img: BASE+"2023/09/portfolio-atlantaelectronics.webp", title: "Atlanta Electronics", cat: "E-Commerce" },
  { img: BASE+"2023/09/Portofolio-improcarecoid.webp", title: "Website Perusahaan PT. Mahaka Improcare Indonesia", cat: "Company Profile" },
  { img: BASE+"2023/09/kanimbekasi-1.webp", title: "Website Kantor Imigrasi Bekasi", cat: "E-Government" },
  { img: BASE+"2023/09/Portofolio-Imchain.webp", title: "Website PT. Indonesia Magma Chain", cat: "Company Profile" },
];

const WHY_US = [
  { img: BASE+"2025/06/crown-2.webp", title: "Template Premium", desc: "Desain eksklusif dengan kualitas tinggi yang siap pakai untuk tampil profesional tanpa repot." },
  { img: BASE+"2025/06/Garansi-Selamanya.webp", title: "Garansi Terjamin", desc: "Sekali Menggunakan layanan jasa kami, Anda mendapatkan dukungan layanan seumur hidup." },
  { img: BASE+"2025/06/Website-Berkualitas.webp", title: "Seo Friendly", desc: "Website mudah ditemukan di Google, bantu tingkatkan trafik dan jangkauan bisnis Anda." },
  { img: BASE+"2025/06/mudah-digunakan.webp", title: "Mudah Digunakan", desc: "Antarmuka yang simpel dan intuitif, siapa pun bisa mengelola tanpa perlu keahlian teknis." },
];

const categories = ["All", "Company Profile", "E-Commerce", "E-Government", "Landing Page", "Web Apps", "Web Design"];

export default function PortofolioPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = activeTab === "All"
    ? portfolioItems
    : portfolioItems.filter((p) => Array.isArray(p.cat) ? p.cat.includes(activeTab) : p.cat === activeTab);
  const displayed = showAll ? filtered : filtered.slice(0, 15);

  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* HERO */}
        <section style={{ backgroundColor: "#200033" }} className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Portofolio</h1>
          </div>
        </section>

        {/* FILTER TABS */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveTab(cat); setShowAll(false); }}
                className="px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
                style={
                  activeTab === cat
                    ? { backgroundColor: "#480E6A", color: "#fff" }
                    : { backgroundColor: "#f3f4f6", color: "#554B4E" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PORTFOLIO GRID */}
        <section className="pb-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filtered.length === 0 ? (
              <div className="py-16" />
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {displayed.map((item, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden relative group cursor-pointer border border-gray-100 shadow-sm">
                      <div className="aspect-video overflow-hidden bg-gray-100">
                        <img src={item.img} alt={item.title}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                          loading="lazy" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-sm" style={{ color: "#200033" }}>{item.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
                {!showAll && filtered.length > 15 && (
                  <div className="text-center mt-10">
                    <button onClick={() => setShowAll(true)}
                      className="px-8 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: "#480E6A" }}>
                      Load More
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
                <img src={BASE+"2026/02/mengapa.png"} alt="Mengapa Saraya"
                  className="max-w-full rounded-2xl" loading="lazy" />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-snug" style={{ color: "#200033" }}>
                  Bangun Bisnis Digital Bersama Saraya
                </h2>
                <h3 className="text-xl font-semibold mb-4" style={{ color: "#481d69" }}>
                  Langkah Strategis Menuju Pertumbuhan Bisnis Anda
                </h3>
                <p className="text-base leading-relaxed mb-6" style={{ color: "#554B4E" }}>
                  Saraya Website hadir sebagai mitra digital terpercaya untuk membantu bisnis Anda berkembang. Dari pembuatan website profesional hingga strategi digital marketing yang tepat sasaran, kami siap mendampingi setiap langkah perjalanan bisnis Anda.
                </p>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="inline-block px-7 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#480E6A" }}>
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* MENGAPA SARAYA */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: "#480E6A" }}>Saraya Website</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-2" style={{ color: "#200033" }}>Mengapa Saraya Website?</h2>
              <p className="text-base" style={{ color: "#554B4E" }}>Mengapa Anda Harus Memilih Saraya Website?</p>
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

        {/* CTA BOTTOM */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-2xl py-16 px-8" style={{ backgroundColor: "#200033" }}>
              <div className="inline-block mb-6 px-4 py-1 rounded-full text-xs font-medium" style={{ border: "0.8px solid rgb(202,192,190)", color: "rgba(255,255,255,0.7)" }}>
                Percayakan Pada Saraya Website
              </div>
              <h2 className="text-3xl sm:text-5xl font-medium text-white mb-4 leading-tight">Hubungi Kami Sekarang Juga&#x200B;</h2>
              <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>Buat website untuk bisnis anda sekarang juga dan dapatkan promo menarik</p>
              <a href={WA} target="_blank" rel="noopener noreferrer"
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
