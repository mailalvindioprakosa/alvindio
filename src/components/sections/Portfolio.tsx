import { useTranslations } from "next-intl";
import Image from "next/image";

const PORTFOLIOS = [
  { src: "https://saraya.website/wp-content/uploads/2025/12/Featured-Image-SRY-12-1.webp", alt: "Saraya Featured" },
  { src: "https://saraya.website/wp-content/uploads/2024/10/lesstechnology.png", alt: "Less Technology" },
  { src: "https://saraya.website/wp-content/uploads/2024/10/mitrasahabattani.png", alt: "Mitra Sahabat Tani" },
  { src: "https://saraya.website/wp-content/uploads/2024/10/wisata-pinge.png", alt: "Wisata Pinge" },
  { src: "https://saraya.website/wp-content/uploads/2024/09/th-fintax.png", alt: "TH Fintax" },
  { src: "https://saraya.website/wp-content/uploads/2024/09/El-Hakim-Partners.webp", alt: "El Hakim Partners" },
  { src: "https://saraya.website/wp-content/uploads/2024/08/Frame-5-1.png", alt: "Frame 5" },
  { src: "https://saraya.website/wp-content/uploads/2024/08/Sinergi-Institute.webp", alt: "Sinergi Institute" },
  { src: "https://saraya.website/wp-content/uploads/2024/08/Frame-6-1.png", alt: "Frame 6" },
  { src: "https://saraya.website/wp-content/uploads/2024/08/Frame-1.png", alt: "Frame 1" },
  { src: "https://saraya.website/wp-content/uploads/2024/08/Frame-1-2.png", alt: "Frame 1-2" },
  { src: "https://saraya.website/wp-content/uploads/2024/08/Frame-1-1.png", alt: "Frame 1-1" },
  { src: "https://saraya.website/wp-content/uploads/2024/08/Lenka-Desain.webp", alt: "Lenka Desain" },
  { src: "https://saraya.website/wp-content/uploads/2024/08/Frame-1-3.png", alt: "Frame 1-3" },
  { src: "https://saraya.website/wp-content/uploads/2024/08/Wolu-EO.webp", alt: "Wolu EO" },
];

export default function Portfolio() {
  const t = useTranslations("portfolio");

  return (
    <section id="portofolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#480E6A" }}>
            {t("label")}
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3" style={{ color: "#1D2B64" }}>
            {t("heading")}
          </h2>
          <p className="text-sm max-w-xl mx-auto" style={{ color: "#554B4E" }}>
            {t("subtext")}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {PORTFOLIOS.map((p, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer bg-white"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                unoptimized
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ backgroundColor: "rgba(72,14,106,0.55)" }}
              >
                <span className="text-white text-sm font-semibold">Lihat Detail</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
