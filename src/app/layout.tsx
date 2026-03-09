import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

import Navbar from "@/components/layout/Navbar";
import SocialBar from "@/components/layout/SocialBar";
import PageTransition from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Fatima Zohra | Personal Portfolio",
  description: "Master Student in AI • Automation & Data Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <Navbar />
        <SocialBar />
        <main className="pt-24 min-h-screen relative">
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}
