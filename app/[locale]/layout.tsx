import { Header } from "@/components/Header";
import "./globals.css";
import s from "./app.module.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { useLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import ParticlesBackground from "@/components/ParticlesBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miguel Bermúdez",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale} className="dark">
      <body className={inter.className}>
      <ParticlesBackground />
        <div className="flex flex-col gap-8 min-h-screen bg-gray-300 justify-center dark:bg-black">
          <Header
            me={useTranslations("navbar")("me")}
            experience={useTranslations("navbar")("experience")}
            resume={useTranslations("navbar")("resume")}
          />
          <section className={s.content}>{children}</section>
          <Footer />
        </div>
      </body>
    </html>
  );
}
