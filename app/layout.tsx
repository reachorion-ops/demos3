import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "THE ROTUNDA ROYALE — Flagship Gallerie & Commercial Precinct",
  description:
    "An ultra-premium commercial flagship gallerie and Pritzker-prize architectural landmark housing 140+ haute horlogerie houses, luxury couture salons, and Michelin culinary ateliers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#FFFFFF] text-[#1C1C1E]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen bg-[#FFFFFF] text-[#1C1C1E] selection:bg-[#1E3A5F] selection:text-[#FFFFFF]`}
      >
        {children}
      </body>
    </html>
  );
}
