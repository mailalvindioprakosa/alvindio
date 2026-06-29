"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const EXTENSIONS = [".com", ".net", ".org", ".info", ".eu", ".de", ".uk", ".nl", ".br", ".fr", ".it", ".ca", ".pl"];

export default function DomainChecker() {
  const t = useTranslations("domain");
  const [domain, setDomain] = useState("");

  const handleCheck = () => {
    if (!domain.trim()) return;
    const q = domain.trim().replace(/\s+/g, "").toLowerCase();
    window.open(`https://www.niagahoster.co.id/domain-checker?domain=${q}`, "_blank");
  };

  return (
    <section id="domain" className="py-14" style={{ backgroundColor: "#F6F4F7" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#480E6A" }}>
          {t("label")}
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6" style={{ color: "#1D2B64" }}>
          {t("heading")}
        </h2>

        {/* Search box */}
        <div className="flex flex-col sm:flex-row bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 mt-6">
          <div className="flex items-center px-4 py-1">
            <span className="text-gray-400 font-semibold">.</span>
          </div>
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCheck()}
            placeholder={t("placeholder")}
            className="flex-1 px-2 py-4 text-sm outline-none placeholder:text-gray-400"
            style={{ color: "#1D2B64" }}
          />
          {/* Extension tabs */}
          <div className="hidden sm:flex items-center gap-1 px-3 border-l border-gray-100 overflow-x-auto">
            {EXTENSIONS.slice(0, 6).map((ext) => (
              <span key={ext} className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded whitespace-nowrap">
                {ext}
              </span>
            ))}
          </div>
          <button
            onClick={handleCheck}
            className="text-white font-semibold px-6 py-4 text-sm transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ backgroundColor: "#480E6A" }}
          >
            {t("button")}
          </button>
        </div>

        {/* All extensions */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {EXTENSIONS.map((ext) => (
            <span key={ext} className="text-xs text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded-full">
              {ext}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
