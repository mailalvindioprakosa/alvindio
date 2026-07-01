import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WebsiteServiceClient, { DEFAULT_HERO_IMG, DEFAULT_ABOUT_IMG, DEFAULT_CTA_IMG } from "@/components/sections/WebsiteServiceClient";
import { getPageFields, getFaqs, getNavServices, getPageImages, getPortfolio } from "@/lib/content";

const SLUG = "website-bisnis";
const FALLBACK_HERO = DEFAULT_HERO_IMG;
const FALLBACK_ABOUT = DEFAULT_ABOUT_IMG;
const FALLBACK_CTA = DEFAULT_CTA_IMG;

export const dynamic = "force-dynamic";

export default async function WebsiteBisnisPage({
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
