import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceDetailClient from "@/components/sections/ServiceDetailClient";
import { getPageFields, getFaqs, getNavServices, getPageImages } from "@/lib/content";

const SLUG = "maintenance-premium-iklan";
const FALLBACK_HERO = "https://saraya.website/wp-content/uploads/2025/07/Hero-Premium.png";
const FALLBACK_ABOUT = "https://saraya.website/wp-content/uploads/2025/07/UMKM-About-1024x797.png";
const FALLBACK_PROCESS = [
  "https://saraya.website/wp-content/uploads/2025/07/Diskusi-Website-Yang-Dibutuhkan.png",
  "https://saraya.website/wp-content/uploads/2025/07/Perancangan-Website-Sesuai-Hasil-Diskusi.png",
  "https://saraya.website/wp-content/uploads/2025/07/Website-Di-Kembangkan-hingga-siap-digunakan.png",
];

export const dynamic = "force-dynamic";

export default async function MaintenancePremiumIklanPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale === "en" ? "en" : "id";

  const [fields, faqs, navServices, heroImgs, aboutImgs, processImgs, trustedByImgs] = await Promise.all([
    getPageFields(loc, SLUG),
    getFaqs(loc, SLUG),
    getNavServices(loc),
    getPageImages(SLUG, "hero", loc),
    getPageImages(SLUG, "about", loc),
    getPageImages(SLUG, "process", loc),
    getPageImages("_global", "trusted_by", loc),
  ]);

  return (
    <>
      <Navbar services={navServices} />
      <ServiceDetailClient
        fields={fields}
        faqs={faqs}
        heroImage={heroImgs[0]?.url ?? FALLBACK_HERO}
        aboutImage={aboutImgs[0]?.url ?? FALLBACK_ABOUT}
        processImages={processImgs.length ? processImgs.map((p) => p.url) : FALLBACK_PROCESS}
        trustedByImages={trustedByImgs.map((p) => p.url)}
      />
      <Footer />
    </>
  );
}
