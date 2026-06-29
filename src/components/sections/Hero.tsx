"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

const BASE_HERO = "https://saraya.website/wp-content/uploads/2025/06/";
const SLIDER_IMAGES = [
  { src: `${BASE_HERO}14.webp`, alt: "Portfolio 14" },
  { src: `${BASE_HERO}9.webp`, alt: "Portfolio 9" },
  { src: `${BASE_HERO}5-1.webp`, alt: "Portfolio 5" },
  { src: `${BASE_HERO}18.webp`, alt: "Portfolio 18" },
  { src: `${BASE_HERO}17.webp`, alt: "Portfolio 17" },
  { src: `${BASE_HERO}16.webp`, alt: "Portfolio 16" },
  { src: `${BASE_HERO}15.webp`, alt: "Portfolio 15" },
  { src: `${BASE_HERO}13.webp`, alt: "Portfolio 13" },
  { src: `${BASE_HERO}12.webp`, alt: "Portfolio 12" },
  { src: `${BASE_HERO}11.webp`, alt: "Portfolio 11" },
  { src: `${BASE_HERO}8.webp`, alt: "Portfolio 8" },
  { src: `${BASE_HERO}10.webp`, alt: "Portfolio 10" },
  { src: `${BASE_HERO}6-1.webp`, alt: "Portfolio 6" },
  { src: `${BASE_HERO}7-1.webp`, alt: "Portfolio 7" },
  { src: `${BASE_HERO}2.-Balai-Bahasa.webp`, alt: "Balai Bahasa" },
  { src: `${BASE_HERO}3.webp`, alt: "Portfolio 3" },
  { src: `${BASE_HERO}4.webp`, alt: "Portfolio 4" },
  { src: `${BASE_HERO}1.-Brida-1.webp`, alt: "Brida" },
];

const CARD_W = 120;
const CARD_GAP = 12;
const CARD_STEP = CARD_W + CARD_GAP;

function LogoSlider() {
  const [offset, setOffset] = useState(0);
  const [sliding, setSliding] = useState(false);
  const total = SLIDER_IMAGES.length;
  const looped = [...SLIDER_IMAGES, ...SLIDER_IMAGES];

  useEffect(() => {
    const id = setInterval(() => {
      setSliding(true);
      setOffset((prev) => prev + 1);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const handleTransitionEnd = () => {
    if (offset >= total) {
      setSliding(false);
      setOffset(0);
    }
  };

  return (
    <div className="overflow-hidden mb-7" style={{ width: 4 * CARD_W + 3 * CARD_GAP }}>
      <div
        style={{
          display: "flex",
          gap: CARD_GAP,
          transform: `translateX(-${offset * CARD_STEP}px)`,
          transition: sliding ? "transform 0.5s ease" : "none",
          width: "max-content",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {looped.map((img, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shrink-0"
            style={{ width: CARD_W, height: 60 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="beranda"
      className="pt-24 pb-16 bg-white overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-6">
          {/* Left */}
          <div className="flex-1 max-w-xl">
            <p
              className="text-sm font-semibold mb-4 uppercase tracking-wide"
              style={{ color: "#480E6A" }}
            >
              {t("welcome")}
            </p>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5"
              style={{ color: "#1D2B64" }}
            >
              {t("heading")}
            </h1>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "#554B4E" }}
            >
              {t("subtext")}
            </p>

            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#554B4E" }}>
              {t("trust")}
            </p>

            <LogoSlider />

            <a
              href="https://wa.me/6285117257892"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-lg transition-opacity hover:opacity-90 text-sm"
              style={{ backgroundColor: "#480E6A" }}
            >
              {t("cta")}
              <svg viewBox="0 0 32 32" className="w-4 h-4 fill-white shrink-0">
                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.736 5.46 2.02 7.745L0 32l8.48-2.22A15.936 15.936 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.894 22.292c-.334.94-1.66 1.72-2.733 1.946-.727.153-1.676.276-4.872-.047-4.097-.404-6.762-3.19-6.953-3.44-.192-.25-1.562-2.072-1.562-3.952s1.016-2.797 1.376-3.17c.36-.372.785-.465 1.045-.465.26 0 .52.002.748.014.24.012.562-.091.88.67.333.8 1.133 2.764 1.232 2.965.1.2.166.434.034.7-.132.266-.2.431-.392.662-.192.23-.404.515-.577.692-.192.196-.393.41-.17.803.224.393.995 1.64 2.137 2.657 1.468 1.308 2.707 1.713 3.1 1.906.393.192.622.16.852-.097.23-.257.984-1.146 1.247-1.54.263-.394.525-.328.884-.197.36.131 2.283 1.077 2.675 1.272.393.196.655.294.75.457.097.163.097.943-.237 1.883z"/>
              </svg>
            </a>
          </div>

          {/* Right — Hero illustration */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <Image
              src="https://saraya.website/wp-content/uploads/2026/02/Hero-images.png"
              alt="Hero illustration"
              width={580}
              height={480}
              className="object-contain w-full max-w-sm lg:max-w-lg xl:max-w-xl"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
