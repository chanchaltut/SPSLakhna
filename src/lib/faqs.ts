import { site } from "./site";

/** Shown on the home page and published as FAQPage structured data. */
export const faqs = [
  {
    q: "Where is Swagat Public School located?",
    a: `Swagat Public School is located in ${site.address.locality}, ${site.address.district} district, ${site.address.region} ${site.address.postalCode}, India. Directions are available on the Contact page.`,
  },
  {
    q: "Which classes does Swagat Public School offer?",
    a: "The school offers Nursery, LKG and UKG in the Early Years programme and Class 1 to Class 5 in the Primary Years programme.",
  },
  {
    q: "What is the admission age for Nursery?",
    a: "Children aged 3 to 4 years are admitted to Nursery. LKG is for ages 4 to 5 and UKG is for ages 5 to 6.",
  },
  {
    q: "How do I apply for admission at SPS Lakhna?",
    a: `Fill in the online application form on the Admissions page, then visit the school to meet the teachers. You can also call ${site.phone} or email ${site.email}.`,
  },
  {
    q: "What are the school timings?",
    a: "The school is open Monday to Saturday from 8:00 AM to 2:00 PM. Early Years classes finish at 12:00 PM. The school is closed on Sundays.",
  },
  {
    q: "How can I contact Swagat Public School, Lakhna?",
    a: `Call ${site.phone}, email ${site.email}, or send a message through the Contact page of ${site.url.replace("https://", "")}.`,
  },
] as const;
