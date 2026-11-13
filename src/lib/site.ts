/**
 * Single source of truth for school identity and contact details.
 * Update the placeholder values here (domain, email, phone, hours) once the
 * final details are confirmed — every page, schema block and sitemap reads from this file.
 */
export const site = {
  name: "Swagat Public School",
  shortName: "SPS Lakhna",
  fullName: "Swagat Public School, Lakhna",
  tagline: "Where Every Child is Welcome",
  description:
    "Swagat Public School (SPS Lakhna) is a kindergarten and primary school in Lakhna, Nuapada district, Odisha, offering caring, activity-based education from Nursery to Class 5.",

  // Placeholder domain and contact details
  url: "https://spslakhna.in",
  email: "contact@spslakhna.in",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",

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

  // Lakhna village centre (approximate)
  geo: { lat: 20.7334, lng: 82.6512 },

  hours: {
    days: "Mon – Sat",
    open: "08:00",
    close: "14:00",
    label: "Mon – Sat: 8:00 AM – 2:00 PM",
    closedLabel: "Sunday: Closed",
  },

  grades: "Nursery to Class 5",
  ogImage: "/og-banner.png",

  maps: {
    link: "https://www.google.com/maps/search/?api=1&query=Swagat+Public+School+Lakhna+Nuapada+Odisha",
    embed:
      "https://www.google.com/maps?q=Swagat+Public+School,+Lakhna,+Nuapada,+Odisha&z=15&output=embed",
  },

  socials: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },
} as const;

export const absoluteUrl = (path = "/") => `${site.url}${path === "/" ? "" : path}`;
