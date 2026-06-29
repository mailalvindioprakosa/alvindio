"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const t = useTranslations("nav");
  const layananItems = [
    { label: t("layanan_1"), badge: null, badgeColor: undefined, href: "website-landing-page" },
    { label: t("layanan_2"), badge: t("layanan_2_badge"), badgeColor: "#E53E3E", href: "website-ukm" },
    { label: t("layanan_3"), badge: t("layanan_3_badge"), badgeColor: "#E53E3E", href: "website-bisnis" },
    { label: t("layanan_4"), badge: null, badgeColor: undefined, href: "maintenance-seo-basic" },
    { label: t("layanan_5"), badge: t("layanan_5_badge"), badgeColor: "#2D3748", href: "iklan-google-ads" },
    { label: t("layanan_6"), badge: null, badgeColor: undefined, href: "maintenance-premium-iklan" },
  ];
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: `/${locale}/portofolio`, label: t("portfolio") },
    { href: `/${locale}/demo-website`, label: t("demo") },
    { href: `/${locale}/cek-domain`, label: t("domain") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const switchLocale = () => {
    const next = locale === "id" ? "en" : "id";
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/"));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center">
            <Image
              src="https://saraya.website/wp-content/uploads/2025/06/Untitled-design-18-2.png"
              alt="Logo Saraya Web"
              width={120}
              height={40}
              className="object-contain h-10 w-auto"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Home */}
            <Link href={`/${locale}/`} style={{ color: "#1D2B64" }} className="text-sm hover:opacity-70 transition-opacity font-medium">
              {t("home")}
            </Link>

            {/* Layanan dropdown */}
            <div
              className="relative cursor-pointer pb-3 -mb-3"
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium pointer-events-none hover:opacity-70 transition-opacity"
                style={{ color: "#1D2B64" }}
              >
                {t("services")}
                <ChevronDown
                  size={14}
                  className="transition-transform duration-200"
                  style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  {layananItems.map((item) => (
                    <Link
                      key={item.label}
                      href={`/${locale}/${item.href}`}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center justify-between px-4 py-3 text-sm hover:bg-gray-50 transition-colors"
                      style={{ color: "#1D2B64" }}
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span
                          className="text-white text-xs font-semibold px-2 py-0.5 rounded"
                          style={{ backgroundColor: item.badgeColor }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Remaining links */}
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{ color: "#1D2B64" }}
                className="text-sm hover:opacity-70 transition-opacity font-medium"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={switchLocale}
              className="flex items-center gap-1 text-sm text-gray-500 hover:opacity-70 transition-opacity"
            >
              <Globe size={15} />
              {locale.toUpperCase()}
            </button>
            <a
              href="https://wa.me/6285117257892"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm font-semibold px-5 py-2 rounded-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#480E6A" }}
            >
              {t("cta")}
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            style={{ color: "#554B4E" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <Link
            href={`/${locale}`}
            onClick={() => setIsOpen(false)}
            style={{ color: "#1D2B64" }}
            className="block py-3 text-sm border-b border-gray-100 font-medium"
          >
            {t("home")}
          </Link>

          {/* Layanan mobile accordion */}
          <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full flex items-center justify-between py-3 text-sm border-b border-gray-100 font-medium"
              style={{ color: "#1D2B64" }}
            >
              {t("services")}
              <ChevronDown size={14} style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
            </button>
            {dropdownOpen && (
              <div className="pl-4 border-b border-gray-100">
                {layananItems.map((item) => (
                  <Link
                    key={item.label}
                    href={`/${locale}/${item.href}`}
                    onClick={() => { setIsOpen(false); setDropdownOpen(false); }}
                    className="flex items-center justify-between py-2.5 text-sm"
                    style={{ color: "#554B4E" }}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span
                        className="text-white text-xs font-semibold px-2 py-0.5 rounded"
                        style={{ backgroundColor: item.badgeColor }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setIsOpen(false)}
              style={{ color: "#1D2B64" }}
              className="block py-3 text-sm border-b border-gray-100 font-medium"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={switchLocale}
              className="flex items-center gap-1 text-sm text-gray-500"
            >
              <Globe size={15} />
              {locale === "id" ? "EN" : "ID"}
            </button>
            <a
              href="https://wa.me/6285117257892"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm font-semibold px-5 py-2 rounded-lg"
              style={{ backgroundColor: "#480E6A" }}
            >
              {t("cta")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
