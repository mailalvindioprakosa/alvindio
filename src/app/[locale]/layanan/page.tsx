"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const WA = "https://wa.me/6285117257892";

type Feature = { label: string; available: boolean };
type Package = {
  name: string;
  price: string;
  crossed: string;
  renewal: string;
  features: Feature[];
  highlighted?: boolean;
  badge?: string;
};

const paketUmum: Package[] = [
  {
    name: "Landing Page",
    price: "Rp 1.499.000",
    crossed: "Rp 1.999.000",
    renewal: "Perpanjangan Rp 499.000/tahun",
    features: [
      { label: "Gratis Domain", available: true },
      { label: "1 Halaman Utama", available: true },
      { label: "1 Email Profesional", available: true },
      { label: "1x Revisi Desain", available: true },
      { label: "Waktu 1-2 Hari", available: true },
      { label: "GRATIS SEO Basic", available: true },
      { label: "Akses Cpanel/Hosting", available: true },
      { label: "Gratis Update Konten", available: true },
      { label: "Laporan Bulanan", available: true },
      { label: "Iklan Google ADS", available: false },
    ],
  },
  {
    name: "UMKM Standar",
    price: "Rp 2.999.000",
    crossed: "Rp 3.999.000",
    renewal: "Perpanjangan Rp 666.000/tahun",
    features: [
      { label: "Gratis Domain", available: true },
      { label: "5 Halaman", available: true },
      { label: "8 Email Profesional", available: true },
      { label: "1x Revisi Desain", available: true },
      { label: "Waktu 3-5 Hari", available: true },
      { label: "SEO Intermediate", available: true },
      { label: "Akses Cpanel", available: true },
      { label: "Desain Responsive", available: false },
      { label: "Integrasi Google Ads", available: false },
      { label: "Integrasi Formulir", available: true },
      { label: "Integrasi Chat", available: false },
      { label: "Laporan Bulanan", available: true },
    ],
  },
  {
    name: "UMKM+",
    price: "Rp 3.999.000",
    crossed: "Rp 4.499.000",
    renewal: "Perpanjangan Rp 999.000/tahun",
    highlighted: true,
    badge: "Terlaris",
    features: [
      { label: "Gratis Domain & Hosting", available: true },
      { label: "10 Halaman", available: true },
      { label: "15 Email Profesional", available: true },
      { label: "1x Revisi Desain", available: true },
      { label: "Waktu 3-5 Hari", available: true },
      { label: "SEO Intermediate", available: true },
      { label: "Akses Cpanel", available: true },
      { label: "Laporan Bulanan", available: true },
    ],
  },
  {
    name: "Bisnis Starter",
    price: "Rp 3.999.000",
    crossed: "Rp 4.499.000",
    renewal: "Perpanjangan Rp 1.499.000/tahun",
    features: [
      { label: "Gratis Domain & Hosting", available: true },
      { label: "20 Halaman", available: true },
      { label: "Unlimited Email", available: true },
      { label: "2x Revisi Desain", available: true },
      { label: "Waktu 5-7 Hari", available: true },
      { label: "SEO Intermediate", available: true },
      { label: "Desain Responsive", available: true },
      { label: "Optimasi Kecepatan Menengah", available: true },
      { label: "Integrasi Google Ads", available: true },
      { label: "Integrasi Formulir", available: true },
      { label: "Integrasi Chat", available: true },
      { label: "Laporan Bulanan", available: true },
    ],
  },
  {
    name: "Profesional",
    price: "Rp 6.999.000",
    crossed: "Rp 7.499.000",
    renewal: "Perpanjangan Rp 1.499.000/tahun",
    features: [
      { label: "Gratis Domain & Hosting", available: true },
      { label: "Unlimited Halaman", available: true },
      { label: "Unlimited Email", available: true },
      { label: "3x Revisi Desain", available: true },
      { label: "Waktu 8-10 Hari", available: true },
      { label: "SEO Intermediate", available: true },
      { label: "Desain Responsive", available: true },
      { label: "Optimasi Kecepatan Lanjutan", available: true },
      { label: "Integrasi Google Ads", available: true },
      { label: "Integrasi Formulir", available: true },
      { label: "Laporan Bulanan", available: true },
    ],
  },
];

function CheckIcon({ available, highlighted }: { available: boolean; highlighted?: boolean }) {
  if (available) {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="10" fill={highlighted ? "rgba(255,255,255,0.2)" : "#480E6A"} />
        <path d="M6 10l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="#e5e7eb" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PackageCard({ pkg }: { pkg: Package }) {
  const hl = pkg.highlighted;
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-6 ${
        hl ? "border-purple-700" : "border-gray-200 bg-white"
      }`}
      style={hl ? { backgroundColor: "#480E6A" } : {}}
    >
      {pkg.badge && (
        <span className="absolute -top-3 left-6 text-xs font-bold px-3 py-1 rounded-full bg-yellow-400 text-yellow-900">
          {pkg.badge}
        </span>
      )}
      <h3 className={`text-lg font-bold mb-1 ${hl ? "text-white" : "text-gray-900"}`}>{pkg.name}</h3>
      <div className="flex items-baseline gap-2 mb-1">
        <span className={`text-2xl font-extrabold ${hl ? "text-white" : "text-gray-900"}`}>{pkg.price}</span>
        <span className={`text-sm line-through ${hl ? "text-purple-200" : "text-gray-400"}`}>{pkg.crossed}</span>
      </div>
      <p className={`text-xs mb-5 ${hl ? "text-purple-200" : "text-gray-500"}`}>{pkg.renewal}</p>
      <ul className="space-y-2.5 flex-1 mb-6">
        {pkg.features.map((f) => (
          <li key={f.label} className="flex items-center gap-2">
            <CheckIcon available={f.available} highlighted={hl} />
            <span
              className={`text-sm ${
                !f.available
                  ? "line-through text-gray-400"
                  : hl
                  ? "text-white"
                  : "text-gray-700"
              }`}
            >
              {f.label}
            </span>
          </li>
        ))}
      </ul>
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className={`block text-center text-sm font-semibold py-3 rounded-lg transition-opacity hover:opacity-90 ${
          hl ? "bg-white text-purple-900" : "text-white"
        }`}
        style={hl ? {} : { backgroundColor: "#480E6A" }}
      >
        Pilih Paket
      </a>
    </div>
  );
}

const tabs = ["Paket Umum", "Maintenance", "Iklan"];

export default function LayananPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* HERO DARK */}
        <section style={{ backgroundColor: "#200033" }} className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Paket Harga Layanan Kami</h1>
            <p className="text-lg" style={{ color: "rgba(255,255,255,0.7)" }}>
              Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket sudah termasuk domain dan hosting.
            </p>
          </div>
        </section>

        {/* Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <div className="flex gap-2 flex-wrap">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className="px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
                style={
                  activeTab === i
                    ? { backgroundColor: "#480E6A", color: "#fff" }
                    : { backgroundColor: "#f3f4f6", color: "#554B4E" }
                }
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {activeTab === 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {paketUmum.map((pkg) => (
                  <PackageCard key={pkg.name} pkg={pkg} />
                ))}
              </div>
            )}
            {activeTab === 1 && (
              <div className="text-center py-24 text-gray-500">
                <p className="text-xl font-semibold mb-2">Paket Maintenance</p>
                <p>Hubungi kami untuk informasi paket maintenance.</p>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block px-8 py-3 rounded-lg text-white font-semibold" style={{ backgroundColor: "#480E6A" }}>
                  Konsultasi Sekarang
                </a>
              </div>
            )}
            {activeTab === 2 && (
              <div className="text-center py-24 text-gray-500">
                <p className="text-xl font-semibold mb-2">Paket Iklan</p>
                <p>Hubungi kami untuk informasi paket iklan Google Ads.</p>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block px-8 py-3 rounded-lg text-white font-semibold" style={{ backgroundColor: "#480E6A" }}>
                  Konsultasi Sekarang
                </a>
              </div>
            )}
          </div>
        </section>

        {/* CTA Bottom */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-2xl py-16 px-8" style={{ backgroundColor: "#200033" }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Siap Memulai Proyek Anda?</h2>
              <p className="mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>Konsultasikan kebutuhan website Anda dengan tim kami sekarang</p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-block font-semibold px-8 py-4 rounded-lg bg-white text-sm transition-opacity hover:opacity-90" style={{ color: "#200033" }}>
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
