import type { Metadata, Viewport } from "next";
import { Fraunces, Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SchoolJsonLd } from "@/components/seo/JsonLd";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { site } from "@/lib/site";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  display: "swap",
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#47206B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Swagat Public School, Lakhna | English Medium School in Nuapada, Odisha",
    template: "%s | Swagat Public School, Lakhna",
  },
  description: site.description,
  applicationName: site.fullName,
  keywords: [
    "Swagat Public School",
    "Swagat Public School Lakhna",
    "SPS Lakhna",
    "school in Lakhna",
    "school in Nuapada",
    "primary school in Lakhna Nuapada",
    "kindergarten in Nuapada Odisha",
    "Nursery LKG UKG admission Lakhna",
    "English medium school in Lakhna",
    "CBSE pattern school in Nuapada",
    "English medium school in Komna block",
    "school in Purna Basti Lakhna",
    "Swagat Play School Lakhna",
    "Narendra Nag Swagat Public School",
    "Reena Kumbhar Swagat Public School",
    "Nursery to Class 8 school Nuapada",
    "public school Nuapada district",
    "best school in Lakhna",
    "best primary school in Nuapada",
    "school near Khariar Road",
    "school near Komna",
    "play school in Lakhna Nuapada",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "education",
  alternates: { canonical: "/", languages: { "en-IN": "/", "x-default": "/" } },
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    title: "Swagat Public School, Lakhna | Where Every Child is Welcome",
    description:
      "English-medium, CBSE-pattern school in Purna Basti, Lakhna, Nuapada, Odisha. Admissions open for Nursery to Class 1; permitted up to Class 8.",
    url: site.url,
    siteName: site.fullName,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: "Swagat Public School, Lakhna — Where Every Child is Welcome",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swagat Public School, Lakhna",
    description:
      "English-medium, CBSE-pattern school in Lakhna, Nuapada, Odisha. Nursery to Class 1 now, permitted up to Class 8.",
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Local / geographic signals
  other: {
    "geo.region": site.address.regionCode,
    "geo.placename": `${site.address.locality}, ${site.address.district}, ${site.address.region}`,
    "geo.position": `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={`${display.variable} ${body.variable}`}>
        <SchoolJsonLd />
        <a href="#main" className="visually-hidden">Skip to content</a>
        <Navbar />
        <div id="main">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
