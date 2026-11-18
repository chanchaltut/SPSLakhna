/**
 * Single source of truth for school identity and contact details.
 * Every page, schema block, sitemap and llms file reads from this file.
 */
export const site = {
  name: "Swagat Public School",
  shortName: "SPS Lakhna",
  fullName: "Swagat Public School, Lakhna",
  tagline: "Where Every Child is Welcome",
  description:
    "Swagat Public School (SPS Lakhna) is a co-educational, English-medium school following the CBSE pattern in Lakhna (Purna Basti), Komna block, Nuapada district, Odisha. Classes run from Nursery to Class 5 today, and the school is permitted to teach up to Class 8. Established 2024.",
  founded: "2024",
  medium: "English medium, CBSE-pattern curriculum",

  // Live domain (the bare domain redirects here on Vercel)
  url: "https://www.swagatpublicschoollakhna.in",
  domain: "swagatpublicschoollakhna.in",

  email: "swagatlakhna24@gmail.com",
  phone: "+91 84579 69611",
  phoneE164: "+918457969611",
  phoneHref: "tel:+918457969611",
  // Second office number (calls), from the school's admission banner
  phone2: "+91 99386 96958",
  phone2E164: "+919938696958",
  phone2Href: "tel:+919938696958",
  // Same number is used for calls and WhatsApp
  whatsapp: "918457969611",
  whatsappHref: "https://wa.me/918457969611",

  address: {
    area: "Purna Basti",
    street: "Purna Basti, Lakhna",
    locality: "Lakhna",
    block: "Komna",
    district: "Nuapada",
    region: "Odisha",
    regionCode: "IN-OD",
    postalCode: "766105",
    country: "India",
    countryCode: "IN",
    line: "Purna Basti, Lakhna, Block Komna, Dist. Nuapada, Odisha 766105",
  },

  // Other names people use for the school (the building's signboard reads "Swagat Play School")
  alsoKnownAs: [
    "SPS Lakhna",
    "SPS",
    "Swagat Public School Lakhna",
    "Swagat Public School, Nuapada",
    "Swagat Play School",
    "Swagat Play School, Lakhna",
  ],

  // Search Console HTML-tag token (content="..." value only). Leave empty until the school verifies.
  googleSiteVerification: "",
  bingSiteVerification: "",

  // Towns and areas around Lakhna that the school serves
  nearby: ["Nuapada", "Khariar Road", "Komna", "Khariar"],

  // Lakhna village centre (approximate)
  geo: { lat: 20.7334, lng: 82.6512 },

  hours: {
    days: "Mon – Sat",
    open: "08:00",
    close: "14:00",
    label: "Mon – Sat: 8:00 AM – 2:00 PM",
    short: "Mon – Sat, 8 am – 2 pm",
    closedLabel: "Sunday: Closed",
  },

  // Classes running now, and the range the school has permission to run
  grades: "Nursery to Class 5",
  gradesPermitted: "Nursery to Class 8",
  // Link-preview image for WhatsApp, Facebook, X, LinkedIn. JPEG under 300 KB so WhatsApp shows it.
  // Source: design-og/og.html (real school building photo). Rename the file when it changes, to bust preview caches.
  ogImage: "/og-image-v2.jpg",
  ogImageType: "image/jpeg",
  ogImageAlt:
    "Swagat Public School, Lakhna, Nuapada, Odisha: students in purple uniform lined up outside the school building in Purna Basti, Lakhna. English medium, CBSE pattern, Nursery to Class 5. Admissions open 2026-27.",
  logo: "/images/sps-seal.svg",
  logoPng: "/images/sps-logo-square.png",

  maps: {
    link: "https://www.google.com/maps/search/?api=1&query=Swagat+Public+School+Lakhna+Nuapada+Odisha",
    embed:
      "https://www.google.com/maps?q=Swagat+Public+School,+Lakhna,+Nuapada,+Odisha&z=15&output=embed",
  },

  // Add real profile URLs here when the school has them; empty entries are not rendered.
  socials: {
    facebook: "",
    instagram: "https://www.instagram.com/swagat_public_school2024/",
    youtube: "",
  },
  instagramHandle: "@swagat_public_school2024",
} as const;

export const absoluteUrl = (path = "/") => `${site.url}${path === "/" ? "" : path}`;

/** WhatsApp chat link, optionally with a pre-filled message. */
export const whatsappLink = (text?: string) =>
  text ? `${site.whatsappHref}?text=${encodeURIComponent(text)}` : site.whatsappHref;

export const defaultWhatsappText =
  "Hello Swagat Public School, I would like to know more about admissions.";
