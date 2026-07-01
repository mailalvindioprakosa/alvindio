import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceDetailClient from "@/components/sections/ServiceDetailClient";
import { DEFAULT_HERO_IMG, DEFAULT_ABOUT_IMG, DEFAULT_PROCESS_IMGS } from "@/components/sections/WebsiteServiceClient";
import { getPageFields, getFaqs, getNavServices, getPageImages } from "@/lib/content";

const SLUG = "iklan-google-ads";
const FALLBACK_HERO = DEFAULT_HERO_IMG;
const FALLBACK_ABOUT = DEFAULT_ABOUT_IMG;
const FALLBACK_PROCESS = DEFAULT_PROCESS_IMGS;

export const dynamic = "force-dynamic";

export default async function IklanGoogleAdsPage({
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
