import { Header } from "@/components/Header";
import "./globals.css";
import s from "./app.module.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { HeaderClient } from "@/components/HeaderClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miguel Bermúdez",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex flex-col gap-8 min-h-screen bg-gray-300 justify-center dark:bg-black">
            <HeaderClient />
            <section className={s.content}>{children}</section>
            {/* <Footer /> */}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
