import { useTranslations } from "next-intl";
import Image from "next/image";

interface CtaBannerContent { heading: string; subtext: string; button: string }

export default function CTABanner({
  content,
  pillLabel,
  image,
}: {
  content?: CtaBannerContent;
  pillLabel?: string;
  image?: string;
}) {
  const t = useTranslations("cta_banner");
  const tBottom = useTranslations("cta_bottom");
  const f = (key: keyof CtaBannerContent) => content?.[key] || t(key);
  const ctaImage = image || "https://saraya.website/wp-content/uploads/2026/02/cta-1.png";

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "#200033" }}>
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 px-10 py-14">
            {/* Left — text */}
            <div className="flex-1 max-w-xl">
              {/* Pill badge — same as CTABottom */}
              <div
                className="inline-block mb-5 px-4 py-1 rounded-full text-xs font-medium"
                style={{ border: "0.8px solid rgb(202,192,190)", color: "rgba(255,255,255,0.7)" }}
              >
                {pillLabel || tBottom("label")}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-5 leading-tight">
                {f("heading")}
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
                {f("subtext")}
              </p>
              <a
                href="https://wa.me/6285117257892"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium px-7 py-3 rounded-lg text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#ffffff", color: "#200033" }}
              >
                {f("button")}
                <svg viewBox="0 0 32 32" className="w-4 h-4 shrink-0" style={{ fill: "#200033" }}>
                  <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.736 5.46 2.02 7.745L0 32l8.48-2.22A15.936 15.936 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.894 22.292c-.334.94-1.66 1.72-2.733 1.946-.727.153-1.676.276-4.872-.047-4.097-.404-6.762-3.19-6.953-3.44-.192-.25-1.562-2.072-1.562-3.952s1.016-2.797 1.376-3.17c.36-.372.785-.465 1.045-.465.26 0 .52.002.748.014.24.012.562-.091.88.67.333.8 1.133 2.764 1.232 2.965.1.2.166.434.034.7-.132.266-.2.431-.392.662-.192.23-.404.515-.577.692-.192.196-.393.41-.17.803.224.393.995 1.64 2.137 2.657 1.468 1.308 2.707 1.713 3.1 1.906.393.192.622.16.852-.097.23-.257.984-1.146 1.247-1.54.263-.394.525-.328.884-.197.36.131 2.283 1.077 2.675 1.272.393.196.655.294.75.457.097.163.097.943-.237 1.883z"/>
                </svg>
              </a>
            </div>

            {/* Right — CTA image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <Image
                src={ctaImage}
                alt="CTA illustration"
                width={500}
                height={400}
                className="object-contain w-full max-w-xs lg:max-w-md"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
