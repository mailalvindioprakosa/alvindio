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

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DomainChecker />
        <Pricing />
        <Portfolio />
        <CTABanner />
        <WhyUs />
        <Testimonial />
        <FAQ />
        <CTABottom />
      </main>
      <Footer />
    </>
  );
}
