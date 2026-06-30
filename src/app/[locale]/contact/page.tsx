import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactPageClient from "./ContactPageClient";
import { getSiteSettings, getNavServices } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale === "en" ? "en" : "id";
  const [s, navServices] = await Promise.all([getSiteSettings(), getNavServices(loc)]);
  const wa = s.wa_number || "6285117257892";

  const settings = {
    email: s.email || "mail.alanari@gmail.com",
    address: s.address || "Semarang, Jawa Tengah",
    wa_number: wa,
    phone_display: s.phone || `+${wa}`,
  };

  return (
    <>
      <Navbar services={navServices} />
      <ContactPageClient settings={settings} />
      <Footer />
    </>
  );
}
