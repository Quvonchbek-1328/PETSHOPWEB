import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Footer, HeaderMobile, Navbar } from "@/components/layout";
import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PetShop Uz",
  description:
    "Uzworks Uz is a platform for freelancers and clients to connect and work together.",
};

export default function DefaultLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen w-full flex flex-col`}>
        <HeaderMobile />
        <Navbar />
        <Toaster richColors />
        <main className="flex-grow">{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
