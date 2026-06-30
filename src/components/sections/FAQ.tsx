"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";

interface FAQItem { q: string; a: string }

export default function FAQ({ items: dbItems }: { items?: FAQItem[] }) {
  const t = useTranslations("faq");
  const fallback: FAQItem[] = t.raw("items") as FAQItem[];
  const items: FAQItem[] = dbItems && dbItems.length > 0 ? dbItems : fallback;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left — illustration */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <Image
              src="https://saraya.website/wp-content/uploads/2026/02/mengapa.png"
              alt="FAQ illustration"
              width={480}
              height={400}
              className="object-contain w-full max-w-xs lg:max-w-sm"
              unoptimized
            />
          </div>

          {/* Right — heading + accordion */}
          <div className="flex-1 w-full">
            <h2 className="text-base font-bold mb-1" style={{ color: "#480E6A" }}>
              {t("heading")}
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight" style={{ color: "#200033" }}>
              {t("subheading")}
            </h3>
            <p className="text-sm mb-8 leading-relaxed" style={{ color: "#554B4E" }}>
              {t("subtext")}
            </p>

            <div className="space-y-3">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden"
                  style={{ border: "1px solid #480E6A" }}
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-3 text-left"
                    style={{ backgroundColor: "#480E6A" }}
                  >
                    <span className="text-sm font-medium pr-4 text-white">
                      {item.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className="shrink-0 transition-transform duration-200 text-white"
                      style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>
                  {open === i && (
                    <div
                      className="px-5 pb-5 pt-3 text-sm leading-relaxed"
                      style={{ color: "#554B4E", backgroundColor: "#fff" }}
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
