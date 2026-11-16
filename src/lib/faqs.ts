import { site } from "./site";

const nearby = `${site.nearby.slice(0, -1).join(", ")} and ${site.nearby[site.nearby.length - 1]}`;
const domain = site.url.replace("https://", "");

/** Shown on the home page and published as FAQPage structured data. */
export const faqs = [
  {
    q: "Where is Swagat Public School located?",
    a: `Swagat Public School is in ${site.address.locality}, ${site.address.district} district, ${site.address.region} ${site.address.postalCode}, India. Directions are on the Contact page and on Google Maps.`,
  },
  {
    q: `Which is a good school for Nursery to Class 5 in ${site.address.locality}, ${site.address.district}?`,
    a: `Swagat Public School (SPS Lakhna) is a kindergarten and primary school in ${site.address.locality}, established in ${site.founded}. It teaches Nursery, LKG, UKG and Class 1 to 5 with small classes (about one teacher for every 15 children), a play-based early years programme, and art, music and physical education alongside academics. Parents are welcome to visit and see the classrooms before applying.`,
  },
  {
    q: `Is there a kindergarten or primary school near ${site.nearby[1]}, ${site.nearby[2]} or ${site.nearby[0]} town?`,
    a: `Yes. Swagat Public School in ${site.address.locality} welcomes children from ${site.address.locality} and nearby parts of ${site.address.district} district, including ${nearby}. Call or WhatsApp ${site.phone} to plan a visit.`,
  },
  {
    q: "Which classes does Swagat Public School offer?",
    a: "The school offers Nursery, LKG and UKG in the Early Years programme and Class 1 to Class 5 in the Primary Years programme.",
  },
  {
    q: "What is the admission age for Nursery, LKG and UKG?",
    a: "Children aged 3 to 4 years are admitted to Nursery. LKG is for ages 4 to 5 and UKG is for ages 5 to 6. Class 1 starts at around 6 years.",
  },
  {
    q: "How do I apply for admission at SPS Lakhna?",
    a: `Fill in the application form on the Admissions page of ${domain} — it is sent to the school office on WhatsApp — then visit the school to meet the teachers. You can also call or WhatsApp ${site.phone}, or email ${site.email}.`,
  },
  {
    q: "What are the school timings?",
    a: "The school is open Monday to Saturday from 8:00 AM to 2:00 PM. Early Years classes (Nursery, LKG, UKG) finish at 12:00 PM. The school is closed on Sundays.",
  },
  {
    q: "When was Swagat Public School established?",
    a: `Swagat Public School, ${site.address.locality} was established in ${site.founded}. "Swagat" means "welcome", and the school's motto is "${site.tagline}".`,
  },
  {
    q: "How can I contact Swagat Public School, Lakhna?",
    a: `Call or WhatsApp ${site.phone}, email ${site.email}, or send a message through the Contact page of ${domain}.`,
  },
] as const;
