import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DemoWebsiteClient from "@/components/sections/DemoWebsiteClient";
import { getPageFields, getNavServices, getDemoItems } from "@/lib/content";

const SLUG = "demo-website";

export const dynamic = "force-dynamic";

export default async function DemoWebsitePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale === "en" ? "en" : "id";

  const [fields, navServices, demos] = await Promise.all([
    getPageFields(loc, SLUG),
    getNavServices(loc),
    getDemoItems(),
  ]);

  return (
    <>
      <Navbar services={navServices} />
      <DemoWebsiteClient fields={fields} demos={demos} />
      <Footer />
    </>
  );
}
