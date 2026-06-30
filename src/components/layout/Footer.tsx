"use client";
import { useTranslations, useLocale } from "next-intl";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const menuLinks: string[] = t.raw("menu_links") as string[];
  const services: string[] = t.raw("services") as string[];

  const navHrefs: Record<string, string> = {
    BERANDA: `/${locale}`,
    LAYANAN: `/${locale}/layanan`,
    PORTFOLIO: `/${locale}/portofolio`,
    "DEMO WEBSITE": `/${locale}/demo-website`,
    "CEK DOMAIN": `/${locale}/cek-domain`,
    KONTAK: `/${locale}/contact`,
  };

  return (
    <footer>
      {/* Main footer */}
      <div style={{ backgroundColor: "#F7F3F9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo size="md" />
            </div>
            <p className="text-xs leading-relaxed mb-5" style={{ color: "#554B4E" }}>
              {t("desc")}
            </p>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#554B4E" }}>
              {t("social_title")}
            </p>
            <div className="flex gap-3">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-80" style={{ backgroundColor: "#1877F2" }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* Twitter/X */}
              <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-80" style={{ backgroundColor: "#1DA1F2" }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-80" style={{ backgroundColor: "#FF0000" }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#1D2B64" }}>
              {t("menu_title")}
            </h4>
            <ul className="space-y-2.5">
              {menuLinks.map((label) => (
                <li key={label}>
                  <a
                    href={navHrefs[label] ?? "#"}
                    className="text-xs font-semibold uppercase tracking-wide transition-colors hover:opacity-70"
                    style={{ color: "#554B4E" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#1D2B64" }}>
              {t("services_title")}
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-xs font-semibold uppercase tracking-wide transition-colors hover:opacity-70"
                    style={{ color: "#554B4E" }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#1D2B64" }}>
              {t("contact_title")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "#480E6A" }} />
                <span className="text-xs" style={{ color: "#554B4E" }}>{t("address")}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="shrink-0" style={{ color: "#480E6A" }} />
                <a
                  href={`mailto:${t("email")}`}
                  className="text-xs transition-colors hover:opacity-70"
                  style={{ color: "#554B4E" }}
                >
                  {t("email")}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="shrink-0" style={{ color: "#480E6A" }} />
                <a
                  href={`https://wa.me/6285117257892`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs transition-colors hover:opacity-70"
                  style={{ color: "#554B4E" }}
                >
                  {t("phone")}
                </a>
              </li>
            </ul>

            {/* Map */}
            <div className="mt-5 w-full h-28 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.014!2d110.4103!3d-7.0055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4d3f0d024d%3A0x0!2sGajah+Mungkur%2C+Semarang!5e0!3m2!1sid!2sid!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      </div>{/* end white section */}

      {/* Bottom bar — dark */}
      <div style={{ backgroundColor: "#200033" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-xs font-bold tracking-widest text-white">
            {t("copyright")}
          </p>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/6285117257892"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Chat WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.736 5.46 2.02 7.745L0 32l8.48-2.22A15.936 15.936 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.894 22.292c-.334.94-1.66 1.72-2.733 1.946-.727.153-1.676.276-4.872-.047-4.097-.404-6.762-3.19-6.953-3.44-.192-.25-1.562-2.072-1.562-3.952s1.016-2.797 1.376-3.17c.36-.372.785-.465 1.045-.465.26 0 .52.002.748.014.24.012.562-.091.88.67.333.8 1.133 2.764 1.232 2.965.1.2.166.434.034.7-.132.266-.2.431-.392.662-.192.23-.404.515-.577.692-.192.196-.393.41-.17.803.224.393.995 1.64 2.137 2.657 1.468 1.308 2.707 1.713 3.1 1.906.393.192.622.16.852-.097.23-.257.984-1.146 1.247-1.54.263-.394.525-.328.884-.197.36.131 2.283 1.077 2.675 1.272.393.196.655.294.75.457.097.163.097.943-.237 1.883z"/>
        </svg>
      </a>
    </footer>
  );
}
