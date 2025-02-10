import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Memry - The Memory Layer for AI",
  description: "Enable your AI agents to remember context, learn from interactions, and deliver personalized experiences at scale.",
  openGraph: {
    title: "Memry - The Memory Layer for AI",
    description: "Enable your AI agents to remember context, learn from interactions, and deliver personalized experiences at scale.",
    url: "https://memry.dev",
    siteName: "Memry",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Memry - The Memory Layer for AI",
    description: "Enable your AI agents to remember context, learn from interactions, and deliver personalized experiences at scale.",
    creator: "@memrydev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased bg-black text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
