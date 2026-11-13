import type { Metadata, Viewport } from "next";
import { Baloo_2, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SchoolJsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
  weight: ["400", "500", "600", "700", "800"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700", "900"],
});

export const viewport: Viewport = {
  themeColor: "#7B3FA0",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Swagat Public School, Lakhna | Nursery to Class 5 School in Nuapada, Odisha",
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
    "Nursery to Class 5 school Odisha",
    "public school Nuapada district",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "education",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    title: "Swagat Public School, Lakhna | Where Every Child is Welcome",
    description:
      "A caring kindergarten and primary school in Lakhna, Nuapada, Odisha. Admissions open for Nursery to Class 5.",
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
      "Kindergarten and primary school (Nursery to Class 5) in Lakhna, Nuapada, Odisha.",
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
      <body className={`${baloo.variable} ${lato.variable}`}>
        <SchoolJsonLd />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
