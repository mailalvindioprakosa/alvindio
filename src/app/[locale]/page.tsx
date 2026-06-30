import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import DomainChecker from "@/components/sections/DomainChecker";
import Pricing from "@/components/sections/Pricing";
import Portfolio from "@/components/sections/Portfolio";
import CTABanner from "@/components/sections/CTABanner";
import WhyUs from "@/components/sections/WhyUs";
import Testimonial from "@/components/sections/Testimonial";
import FAQ from "@/components/sections/FAQ";
import CTABottom from "@/components/sections/CTABottom";
import {
  getPageFields,
  getPageImages,
  getTestimonials,
  getPortfolio,
  getFaqs,
  getPricing,
  getNavServices,
} from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale === "en" ? "en" : "id";

  const [fields, heroImgs, ctaBannerImgs, whyUsImgs, testimonials, portfolio, faqs, pricing, navServices] = await Promise.all([
    getPageFields(loc, "home"),
    getPageImages("home", "hero", loc),
    getPageImages("home", "cta_banner", loc),
    getPageImages("home", "whyus", loc),
    getTestimonials(loc),
    getPortfolio(),
    getFaqs(loc),
    getPricing(loc),
    getNavServices(loc),
  ]);

  const hero = {
    welcome: fields.hero_label ?? "",
    heading: fields.hero_heading ?? "",
    subtext: fields.hero_subtext ?? "",
  };
  const domainContent = {
    label: fields.domain_label ?? "",
    heading: fields.domain_heading ?? "",
    placeholder: fields.domain_placeholder ?? "",
    button: fields.domain_button ?? "",
  };
  const ctaBannerContent = {
    heading: fields.ctabanner_heading ?? "",
    subtext: fields.ctabanner_subtext ?? "",
    button: fields.ctabanner_button ?? "",
  };
  const whyUsContent = {
    label: fields.whyus_label ?? "",
    heading: fields.whyus_heading ?? "",
    subtext: fields.whyus_subtext ?? "",
  };
  const whyUsFeatures = [0, 1, 2, 3, 4, 5, 6, 7]
    .map((i) => ({ title: fields[`whyus_feature_${i}`] ?? "" }))
    .filter((f) => f.title);
  const ctaBottomContent = {
    label: fields.ctabottom_label ?? "",
    heading: fields.ctabottom_heading ?? "",
    subtext: fields.ctabottom_subtext ?? "",
    button: fields.ctabottom_button ?? "",
  };

  const portfolioItems = portfolio.slice(0, 15).map((p) => ({ src: p.img, alt: p.title, url: p.url }));

  return (
    <>
      <Navbar services={navServices} />
      <main>
        <Hero content={hero} image={heroImgs[0]?.url} />
        <DomainChecker content={domainContent} />
        <Pricing packages={pricing} />
        <Portfolio items={portfolioItems} />
        <CTABanner content={ctaBannerContent} pillLabel={ctaBottomContent.label} image={ctaBannerImgs[0]?.url} />
        <WhyUs content={whyUsContent} features={whyUsFeatures} image={whyUsImgs[0]?.url} />
        <Testimonial items={testimonials} />
        <FAQ items={faqs} />
        <CTABottom content={ctaBottomContent} />
      </main>
      <Footer />
    </>
  );
}
