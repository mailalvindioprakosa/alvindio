import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

type FeatureItem = string | { label: string; available: boolean };

interface Package {
  name: string;
  original: string;
  price: string;
  renewal_cost: string;
  features: FeatureItem[];
  is_highlighted?: boolean;
}

function featureLabel(f: FeatureItem): string {
  return typeof f === "string" ? f : f.label;
}

export default function Pricing({ packages: dbPackages }: { packages?: Package[] }) {
  const t = useTranslations("pricing");
  const fallback: Package[] = t.raw("packages") as Package[];
  const packages: Package[] = dbPackages && dbPackages.length > 0 ? dbPackages : fallback;

  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#480E6A" }}>
            {t("label")}
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3" style={{ color: "#1D2B64" }}>
            {t("heading")}
          </h2>
          <p className="text-sm max-w-2xl mx-auto" style={{ color: "#554B4E" }}>
            {t("subtext")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => {
            const isPopular = pkg.is_highlighted ?? i === 1;
            return (
              <div
                key={pkg.name}
                className="relative rounded-2xl p-7 flex flex-col border-2 transition-all"
                style={{
                  borderColor: isPopular ? "#480E6A" : "#E5E7EB",
                  backgroundColor: isPopular ? "#480E6A" : "#fff",
                  transform: isPopular ? "scale(1.02)" : "scale(1)",
                  boxShadow: isPopular ? "0 20px 60px rgba(72,14,106,0.25)" : "none",
                }}
              >
                {isPopular && (
                  <span
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full"
                    style={{ backgroundColor: "#E56F98", color: "#fff" }}
                  >
                    {t("popular")}
                  </span>
                )}

                <div className="mb-5">
                  <h3
                    className="font-extrabold text-xl mb-1"
                    style={{ color: isPopular ? "#fff" : "#1D2B64" }}
                  >
                    {pkg.name}
                  </h3>
                  <div
                    className="text-sm line-through mb-1"
                    style={{ color: isPopular ? "rgba(255,255,255,0.5)" : "#9CA3AF" }}
                  >
                    {pkg.original}
                  </div>
                  <div
                    className="text-2xl font-extrabold"
                    style={{ color: isPopular ? "#fff" : "#480E6A" }}
                  >
                    {pkg.price}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: isPopular ? "rgba(255,255,255,0.65)" : "#6B7280" }}
                  >
                    {t("renewal")} {pkg.renewal_cost}
                  </div>
                </div>

                <ul className="space-y-2.5 flex-1 mb-7">
                  {pkg.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm">
                      <Check
                        size={15}
                        className="shrink-0"
                        style={{ color: isPopular ? "#E56F98" : "#480E6A" }}
                      />
                      <span style={{ color: isPopular ? "rgba(255,255,255,0.9)" : "#554B4E" }}>
                        {featureLabel(f)}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/6285117257892"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 rounded-lg font-bold text-sm transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: isPopular ? "#fff" : "#480E6A",
                    color: isPopular ? "#480E6A" : "#fff",
                  }}
                >
                  {t("select")}
                </a>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs mt-6" style={{ color: "#9CA3AF" }}>
          {t("note")}
        </p>
      </div>
    </section>
  );
}
