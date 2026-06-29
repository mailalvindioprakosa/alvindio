"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const WA = "https://wa.me/6285117257892";
const BASE = "https://saraya.website/wp-content/uploads/";

const WHY_US = [
  { img: BASE+"2025/06/crown-2.webp", title: "Template Premium", desc: "Desain eksklusif dengan kualitas tinggi yang siap pakai untuk tampil profesional tanpa repot." },
  { img: BASE+"2025/06/Garansi-Selamanya.webp", title: "Garansi Terjamin", desc: "Sekali Menggunakan layanan jasa kami, Anda mendapatkan dukungan layanan seumur hidup." },
  { img: BASE+"2025/06/Website-Berkualitas.webp", title: "Seo Friendly", desc: "Website mudah ditemukan di Google, bantu tingkatkan trafik dan jangkauan bisnis Anda." },
  { img: BASE+"2025/06/mudah-digunakan.webp", title: "Mudah Digunakan", desc: "Antarmuka yang simpel dan intuitif, siapa pun bisa mengelola tanpa perlu keahlian teknis." },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* HERO DARK */}
        <section style={{ backgroundColor: "#200033" }} className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Kontak Kami</h1>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              {/* Left: info + form */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ color: "#200033" }}>Kontak Kami</h2>
                <h3 className="text-xl font-semibold mb-8" style={{ color: "#481d69" }}>
                  Konsultasi Gratis! Hubungi Saraya Website Sekarang
                </h3>

                <div className="space-y-5 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#f3e8ff" }}>
                      <svg className="w-5 h-5" fill="none" stroke="#480E6A" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-base mb-1" style={{ color: "#200033" }}>Alamat Email</h3>
                      <a href="mailto:saraya.website@gmail.com" className="text-sm hover:underline" style={{ color: "#554B4E" }}>saraya.website@gmail.com</a>
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
                      <h3 className="font-bold text-base mb-1" style={{ color: "#200033" }}>Alamat Kantor</h3>
                      <p className="text-sm" style={{ color: "#554B4E" }}>Gajah Mungkur, Semarang, Jawa Tengah</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#f3e8ff" }}>
                      <svg className="w-5 h-5" fill="none" stroke="#480E6A" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-base mb-1" style={{ color: "#200033" }}>Nomor Telepon</h3>
                      <a href={WA} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline" style={{ color: "#554B4E" }}>+62-851-1725-7892</a>
                    </div>
                  </div>
                </div>

                {submitted ? (
                  <div className="rounded-xl p-8 text-center" style={{ backgroundColor: "#f3e8ff" }}>
                    <div className="text-4xl mb-3">✓</div>
                    <h3 className="font-bold text-lg mb-1" style={{ color: "#480E6A" }}>Pesan Terkirim!</h3>
                    <p className="text-sm" style={{ color: "#554B4E" }}>Terima kasih, tim kami akan segera menghubungi Anda.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                    <input type="text" required placeholder="Nama lengkap Anda"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
                    <input type="email" required placeholder="email@contoh.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
                    <input type="tel" required placeholder="08xxxxxxxxxx"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
                    <textarea required rows={4} placeholder="Ceritakan kebutuhan website Anda..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none" />
                    <button type="submit" className="w-full py-3 rounded-lg text-white font-semibold text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: "#480E6A" }}>
                      Kirim Pesan
                    </button>
                  </form>
                )}
              </div>

              {/* Right: image */}
              <div className="flex justify-center lg:justify-end">
                <img src={BASE+"2026/02/Hero-images.png"} alt="Kontak Saraya"
                  className="max-w-full rounded-2xl shadow-xl" loading="lazy" />
              </div>
            </div>
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
              <h2 className="text-3xl sm:text-5xl font-medium text-white mb-4 leading-tight">Hubungi Kami Sekarang Juga​</h2>
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
