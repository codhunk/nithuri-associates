import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Nithuri Singh & Sons Associates | Real Estate, Consultancy & Legal Advisory",
  description: "One Platform for Real Estate, Business Guidance, Legal Advisory & Social Welfare by Bageshwar Singh.",
};

import { CookieBanner } from "@/components/CookieBanner";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto.variable} antialiased font-sans`}
      >
        {children}
        <CookieBanner />
        <WhatsAppWidget />
      </body>
    </html>
  );
}

