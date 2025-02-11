import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { gumelaArabic } from "@/assets/fonts";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Naim's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gumelaArabic.className} antialiased`}>{children}</body>
    </html>
  );
}
