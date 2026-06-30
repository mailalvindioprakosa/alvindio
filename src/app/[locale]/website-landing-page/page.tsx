import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WebsiteServiceClient from "@/components/sections/WebsiteServiceClient";
import { getPageFields, getFaqs, getNavServices, getPageImages, getPortfolio } from "@/lib/content";

const SLUG = "website-landing-page";
const FALLBACK_HERO = "https://saraya.website/wp-content/uploads/2025/07/Hero-Landing.png";
const FALLBACK_ABOUT = "https://saraya.website/wp-content/uploads/2025/07/UMKM-About-1024x797.png";
const FALLBACK_CTA = "https://saraya.website/wp-content/uploads/2026/02/cta-1.png";

export const dynamic = "force-dynamic";

export default async function WebsiteLandingPagePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale === "en" ? "en" : "id";

  const [fields, faqs, navServices, heroImgs, aboutImgs, ctaImgs, cocokImgs, portfolio, trustedByImgs] = await Promise.all([
    getPageFields(loc, SLUG),
    getFaqs(loc, SLUG),
    getNavServices(loc),
    getPageImages(SLUG, "hero", loc),
    getPageImages(SLUG, "about", loc),
    getPageImages(SLUG, "cta", loc),
    getPageImages(SLUG, "cocok", loc),
    getPortfolio(),
    getPageImages("_global", "trusted_by", loc),
  ]);
  const portfolioItems = portfolio.map((p) => ({ url: p.img, caption: p.title }));

  return (
    <>
      <Navbar services={navServices} />
      <WebsiteServiceClient
        fields={fields}
        faqs={faqs}
        heroImage={heroImgs[0]?.url ?? FALLBACK_HERO}
        aboutImage={aboutImgs[0]?.url ?? FALLBACK_ABOUT}
        ctaImage={ctaImgs[0]?.url ?? FALLBACK_CTA}
        cocokImages={cocokImgs}
        portfolioItems={portfolioItems}
        trustedByImages={trustedByImgs.map((p) => p.url)}
      />
      <Footer />
    </>
  );
}
