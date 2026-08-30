import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.birdroti.com"),

  title: {
    default: "Bird Roti | Rotisserie Chicken & Crispy Chicken",
    template: "%s | Bird Roti",
  },

  description:
    "Bird Roti, rotisserie chicken, crispy chicken burgers, wraps ve signature soslarıyla yeni nesil tavuk deneyimi sunar.",

  keywords: [
    "Bird Roti",
    "Rotisserie Chicken",
    "Çıtır Tavuk",
    "Chicken Burger",
    "Wrap",
    "Bowl",
    "Tavuk Restoranı",
    "İstanbul"
  ],

  applicationName: "Bird Roti",
  icons: {
    icon: "/logos/bird-roti-symbol.svg",
    shortcut: "/logos/bird-roti-symbol.svg",
    apple: "/logos/bird-roti-symbol.svg",
  },

  authors: [
    {
      name: "Bird Roti",
    },
  ],

  creator: "Bird Roti",

  publisher: "Bird Roti",

  alternates: {
    canonical: "https://www.birdroti.com",
  },

  openGraph: {
    title: "Bird Roti",
    description:
      "Rotisserie Chicken • Crispy Chicken • Wrap • Bowl",
    url: "https://www.birdroti.com",
    siteName: "Bird Roti",
    locale: "tr_TR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}