import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LayananClient from "@/components/sections/LayananClient";
import { getPageFields, getPricing, getNavServices } from "@/lib/content";

const SLUG = "layanan";

export const dynamic = "force-dynamic";

export default async function LayananPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale === "en" ? "en" : "id";

  const [fields, packages, navServices] = await Promise.all([
    getPageFields(loc, SLUG),
    getPricing(loc, "layanan"),
    getNavServices(loc),
  ]);

  return (
    <>
      <Navbar services={navServices} />
      <LayananClient
        fields={fields}
        packages={packages.map((p) => ({
          name: p.name,
          price: p.price,
          crossed: p.original,
          renewal: p.renewal_cost,
          badge: p.badge,
          features: p.features,
        }))}
      />
      <Footer />
    </>
  );
}
