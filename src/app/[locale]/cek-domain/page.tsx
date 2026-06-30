import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CekDomainClient from "@/components/sections/CekDomainClient";
import { getPageFields, getNavServices } from "@/lib/content";

const SLUG = "cek-domain";

export const dynamic = "force-dynamic";

export default async function CekDomainPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale === "en" ? "en" : "id";

  const [fields, navServices] = await Promise.all([getPageFields(loc, SLUG), getNavServices(loc)]);

  return (
    <>
      <Navbar services={navServices} />
      <CekDomainClient fields={fields} />
      <Footer />
    </>
  );
}
