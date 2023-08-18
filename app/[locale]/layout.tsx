import { Navbar } from "@/components/Navbar";
import "./globals.css";
import s from "./app.module.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { useLocale, useTranslations } from 'next-intl';
import {notFound} from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miguel Ángel Bermúdez Cruz",
};

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: any
}) {

  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  } 

  return (
    <html lang={locale} className="dark">
      <body className={inter.className}>
        <div className="flex flex-col gap-8 min-h-screen bg-gray-300 justify-center dark:bg-black">
          <Navbar 
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
