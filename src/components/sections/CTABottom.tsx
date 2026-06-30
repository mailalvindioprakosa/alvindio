import { useTranslations } from "next-intl";

interface CtaBottomContent { label: string; heading: string; subtext: string; button: string }

export default function CTABottom({ content }: { content?: CtaBottomContent }) {
  const t = useTranslations("cta_bottom");
  const f = (key: keyof CtaBottomContent) => content?.[key] || t(key);

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Dark card — pill inside */}
        <div
          className="rounded-2xl py-16 px-8"
          style={{ backgroundColor: "#200033" }}
        >
          {/* Pill label — inside card */}
          <div
            className="inline-block mb-6 px-4 py-1 rounded-full text-xs font-medium"
            style={{ border: "0.8px solid rgb(202,192,190)", color: "rgba(255,255,255,0.7)" }}
          >
            {f("label")}
          </div>

          <h2 className="text-3xl sm:text-5xl font-medium text-white mb-4 leading-tight">
            {f("heading")}
          </h2>
          <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
            {f("subtext")}
          </p>
          <a
            href="https://wa.me/6285117257892"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium px-8 py-4 rounded-lg text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#ffffff", color: "#200033" }}
          >
            {f("button")}
            <svg viewBox="0 0 32 32" className="w-4 h-4 shrink-0" style={{ fill: "#200033" }}>
              <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.736 5.46 2.02 7.745L0 32l8.48-2.22A15.936 15.936 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.894 22.292c-.334.94-1.66 1.72-2.733 1.946-.727.153-1.676.276-4.872-.047-4.097-.404-6.762-3.19-6.953-3.44-.192-.25-1.562-2.072-1.562-3.952s1.016-2.797 1.376-3.17c.36-.372.785-.465 1.045-.465.26 0 .52.002.748.014.24.012.562-.091.88.67.333.8 1.133 2.764 1.232 2.965.1.2.166.434.034.7-.132.266-.2.431-.392.662-.192.23-.404.515-.577.692-.192.196-.393.41-.17.803.224.393.995 1.64 2.137 2.657 1.468 1.308 2.707 1.713 3.1 1.906.393.192.622.16.852-.097.23-.257.984-1.146 1.247-1.54.263-.394.525-.328.884-.197.36.131 2.283 1.077 2.675 1.272.393.196.655.294.75.457.097.163.097.943-.237 1.883z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
