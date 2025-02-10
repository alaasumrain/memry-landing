import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Fira_Code as FontMono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
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
