import { useTranslations } from "next-intl";
import Image from "next/image";
import { Star } from "lucide-react";

interface TestItem { name: string; role: string; text: string; avatar?: string | null }

const AVATARS = [
  "https://saraya.website/wp-content/uploads/2025/06/unnamed.png",
  "https://saraya.website/wp-content/uploads/2025/06/syahrul.jpg",
  "https://saraya.website/wp-content/uploads/2025/06/ChatGPT-Image-16-Jun-2025-15.08.49-1.webp",
];

export default function Testimonial({ items: dbItems }: { items?: TestItem[] }) {
  const t = useTranslations("testimonial");
  const fallback: TestItem[] = t.raw("items") as TestItem[];
  const items: TestItem[] = dbItems && dbItems.length > 0 ? dbItems : fallback;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#480E6A" }}>
            {t("label")}
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: "#1D2B64" }}>
            {t("heading")}
          </h2>
          <p className="text-sm" style={{ color: "#554B4E" }}>{t("subtext")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={14} fill="#FBBF24" color="#FBBF24" />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6 italic" style={{ color: "#554B4E" }}>
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={item.avatar || AVATARS[i % AVATARS.length]}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                  unoptimized
                />
                <div>
                  <div className="font-bold text-sm" style={{ color: "#1D2B64" }}>{item.name}</div>
                  <div className="text-xs" style={{ color: "#9CA3AF" }}>{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
