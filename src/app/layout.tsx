import type { Metadata, Viewport } from "next";
import { Fraunces, Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SchoolJsonLd } from "@/components/seo/JsonLd";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { site } from "@/lib/site";
import { ogImages } from "@/lib/seo";

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
  // Kept to roughly 160 characters so Google shows it whole; the long version lives in site.description.
  description:
    "Swagat Public School (SPS Lakhna): English-medium, CBSE-pattern school in Lakhna, Nuapada, Odisha. Nursery to Class 5 and Navodaya coaching. Admissions open 2026-27.",
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
    "Swagat Public School Nuapada",
    "swagatpublicschoollakhna.in",
    "best school in Lakhna for children",
    "best English medium school in Lakhna",
    "best school in Komna block",
    "best school in Nuapada for kids",
    "school near me Lakhna",
    "English medium school near Komna",
    "Navodaya coaching in Lakhna",
    "Navodaya entrance coaching Nuapada",
    "Sainik School coaching Nuapada",
    "Model School entrance coaching Komna",
    "Class 5 Navodaya preparation Nuapada",
    "Narendra Nag Swagat Public School",
    "Reena Kumbhar Swagat Public School",
    "Nursery to Class 5 school Lakhna",
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
    title: "Swagat Public School, Lakhna | English Medium School in Nuapada, Odisha",
    description:
      "Nursery to Class 5 · CBSE pattern · Estd 2024. Co-ed English-medium school in Purna Basti, Lakhna (Komna block, Nuapada). Admissions open for 2026-27. Call or WhatsApp +91 84579 69611.",
    url: "/",
    siteName: site.fullName,
    images: ogImages,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swagat Public School, Lakhna | English Medium School in Nuapada",
    description:
      "Co-ed, English-medium, CBSE-pattern school in Lakhna, Nuapada, Odisha. Nursery to Class 5, permitted up to Class 8. Admissions open 2026-27.",
    images: [{ url: site.ogImage, alt: site.ogImageAlt }],
  },
  ...(site.googleSiteVerification || site.bingSiteVerification
    ? {
        verification: {
          ...(site.googleSiteVerification ? { google: site.googleSiteVerification } : {}),
          ...(site.bingSiteVerification ? { other: { "msvalidate.01": site.bingSiteVerification } } : {}),
        },
      }
    : {}),
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
    "geo.country": site.address.countryCode,
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
