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
    "Swagat Public School (SPS Lakhna) is a kindergarten and primary school in Lakhna, Nuapada district, Odisha, offering caring, activity-based education from Nursery to Class 5. Established 2024.",
  founded: "2024",

  // Placeholder domain — update once the final domain is confirmed
  url: "https://spslakhna.in",

  email: "swagatlakhna24@gmail.com",
  phone: "+91 84579 69611",
  phoneE164: "+918457969611",
  phoneHref: "tel:+918457969611",
  // Same number is used for calls and WhatsApp
  whatsapp: "918457969611",
  whatsappHref: "https://wa.me/918457969611",

  address: {
    locality: "Lakhna",
    block: "Komna",
    district: "Nuapada",
    region: "Odisha",
    regionCode: "IN-OD",
    postalCode: "766105",
    country: "India",
    countryCode: "IN",
    line: "Lakhna, Dist. Nuapada, Odisha 766105",
  },

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

  grades: "Nursery to Class 5",
  ogImage: "/og-banner.png",
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
    instagram: "",
    youtube: "",
  },
} as const;

export const absoluteUrl = (path = "/") => `${site.url}${path === "/" ? "" : path}`;

/** WhatsApp chat link, optionally with a pre-filled message. */
export const whatsappLink = (text?: string) =>
  text ? `${site.whatsappHref}?text=${encodeURIComponent(text)}` : site.whatsappHref;

export const defaultWhatsappText =
  "Hello Swagat Public School, I would like to know more about admissions.";
