import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PortfolioPageClient from "./PortfolioPageClient";
import { getPortfolio, getNavServices } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function PortofolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale === "en" ? "en" : "id";
  const [portfolio, navServices] = await Promise.all([getPortfolio(), getNavServices(loc)]);
  const items = portfolio.map((p) => ({ img: p.img, title: p.title, category: p.category, url: p.url }));

  return (
    <>
      <Navbar services={navServices} />
      <PortfolioPageClient items={items} />
      <Footer />
    </>
  );
}
