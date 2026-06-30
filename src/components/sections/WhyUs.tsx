import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  Palette, Search, DollarSign, Smartphone,
  Shield, MessageSquare, Zap, Headphones,
} from "lucide-react";

const ICONS = [Palette, Search, DollarSign, Smartphone, Shield, MessageSquare, Zap, Headphones];

interface Feature { title: string }
interface WhyUsContent { label: string; heading: string; subtext: string }

export default function WhyUs({
  content,
  features: featuresProp,
  image,
}: {
  content?: WhyUsContent;
  features?: Feature[];
  image?: string;
}) {
  const t = useTranslations("why_us");
  const tr = (key: keyof WhyUsContent) => content?.[key] || t(key);
  const features: Feature[] = featuresProp && featuresProp.length > 0 ? featuresProp : (t.raw("features") as Feature[]);
  const whyUsImage = image || "https://saraya.website/wp-content/uploads/2026/02/mengapa.png";

  return (
    <section
      className="py-20 relative"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-14">
          {/* Left — mengapa image */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <Image
              src={whyUsImage}
              alt="Mengapa Alvin Dio Prakosa"
              width={520}
              height={440}
              className="object-contain w-full max-w-xs lg:max-w-md"
              unoptimized
            />
          </div>

          {/* Right text */}
          <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#480E6A" }}>
              {tr("label")}
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-tight" style={{ color: "#1D2B64" }}>
              {tr("heading")}
            </h2>
            <p className="text-sm leading-relaxed mb-10" style={{ color: "#554B4E" }}>
              {tr("subtext")}
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              {features.map((f, i) => {
                const Icon = ICONS[i % ICONS.length];
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(72,14,106,0.1)" }}
                    >
                      <Icon size={17} style={{ color: "#480E6A" }} />
                    </div>
                    <span className="font-semibold text-sm" style={{ color: "#1D2B64" }}>
                      {f.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
