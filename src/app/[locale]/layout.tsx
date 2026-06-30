import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "Alvin Dio Prakosa | Jasa Pembuatan Website Profesional",
  description:
    "Alvin Dio Prakosa - Jasa Pembuatan Website Profesional untuk Bisnis Anda.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
      <ChatWidget />
    </NextIntlClientProvider>
  );
}
