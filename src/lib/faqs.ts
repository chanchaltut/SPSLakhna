import { site } from "./site";
import { founder, director, staff, activities, entranceCoaching } from "./content";

const nearby = `${site.nearby.slice(0, -1).join(", ")} and ${site.nearby[site.nearby.length - 1]}`;
const domain = site.url.replace("https://", "");
const teachers = staff.filter((p) => !p.leadership && p.role !== "Support Staff");

/** Shown on the home page and published as FAQPage structured data. */
export const faqs = [
  {
    q: "Where is Swagat Public School located?",
    a: `Swagat Public School is in ${site.address.area}, ${site.address.locality}, ${site.address.block} block, ${site.address.district} district, ${site.address.region} ${site.address.postalCode}, India. Directions are on the Contact page and on Google Maps.`,
  },
  {
    q: `Which is the best school in ${site.address.locality} for children?`,
    a: `Families in ${site.address.locality} usually compare the medium of teaching, the curriculum, the classes offered, activities and how close the school is. Swagat Public School (SPS Lakhna) in ${site.address.area}, ${site.address.locality} is a co-educational, English-medium school that follows the CBSE pattern. It was established in ${site.founded}, teaches Nursery, LKG, UKG and Class 1 to Class 5 today, is permitted to run classes up to Class 8, and gives Class 4 and 5 students extra coaching for the Navodaya, Model School and Sainik School entrance tests. Children also take part in ${activities.slice(0, 3).join(", ").toLowerCase()} and drawing classes, and the school's Independence Day 2026 programme was reported in a local Odia newspaper. The best way to decide is to visit: call or WhatsApp ${site.phone}.`,
  },
  {
    q: `Which is a good English-medium school for Nursery to Class 5 in ${site.address.locality}, ${site.address.district}?`,
    a: `Swagat Public School (SPS Lakhna) is a co-educational, English-medium school in ${site.address.locality} that follows the CBSE pattern. It was established in ${site.founded}, teaches Nursery, LKG, UKG and Class 1 to Class 5 today, and is permitted to run classes up to Class 8. Parents are welcome to visit before applying.`,
  },
  {
    q: `Is there Navodaya or Sainik School entrance coaching in ${site.address.locality}?`,
    a: `Yes. Swagat Public School gives special, challenging coaching to ${entranceCoaching.classes} students to prepare for the entrance tests of Jawahar Navodaya Vidyalaya, Model School (Odisha Adarsha Vidyalaya), Sainik School and similar schools. Call ${site.phone} to ask about the coaching timings.`,
  },
  {
    q: `Are "Swagat Play School" and "Swagat Public School" in ${site.address.locality} the same school?`,
    a: `Yes. The signboard on the school building in ${site.address.area}, ${site.address.locality} reads "Swagat Play School — English Medium School, CBSE Pattern". The school's full name is Swagat Public School, also called SPS Lakhna, and it now teaches from Nursery to Class 5.`,
  },
  {
    q: "Which classes does Swagat Public School offer? Does it go up to Class 8?",
    a: `The school currently runs Nursery, LKG, UKG and Class 1 to Class 5. It has permission to run classes from ${site.gradesPermitted}, so Classes 6, 7 and 8 can be added as the school grows. Call ${site.phone} to ask about the class you need.`,
  },
  {
    q: "Who runs Swagat Public School, Lakhna?",
    a: `Swagat Public School was founded by ${founder.name} and is directed by ${director.name}. The teaching team includes ${teachers.map((t) => `${t.name} (${t.role})`).join(", ")}.`,
  },
  {
    q: "Is Swagat Public School English medium? Is it CBSE?",
    a: `Yes, it is an English-medium school that follows the CBSE pattern of teaching. It is co-educational, for boys and girls.`,
  },
  {
    q: `Is there a good English-medium school near me in ${site.nearby[2]}, ${site.nearby[1]} or ${site.nearby[0]}?`,
    a: `Swagat Public School in ${site.address.locality} (${site.address.block} block) welcomes children from ${site.address.locality} and nearby parts of ${site.address.district} district, including ${nearby}. Call or WhatsApp ${site.phone} to plan a visit.`,
  },
  {
    q: "What is the admission age for Nursery, LKG, UKG and Classes 1 to 5?",
    a: "Children aged 3 to 4 years are admitted to Nursery. LKG is for ages 4 to 5 and UKG is for ages 5 to 6. Class 1 starts at around 6 years, and Classes 2 to 5 follow year by year up to about 11 years.",
  },
  {
    q: "What activities are there besides studies?",
    a: `Students have ${activities.join(", ").toLowerCase()}. The school celebrates Independence Day, Janmashtami, Ganesh Puja, Children's Day and Gandhi Jayanti, and has run a plantation programme and a Nutrition Month healthy-food activity. Photos are on the Gallery page and on Instagram (${site.instagramHandle}), and videos are on the school's YouTube channel (${site.socials.youtube}).`,
  },
  {
    q: "How do I apply for admission at SPS Lakhna?",
    a: `Fill in the application form on the Admissions page of ${domain} — it is sent to the school office on WhatsApp — then visit the school to meet the teachers. You can also call ${site.phone} (also on WhatsApp) or ${site.phone2}, or email ${site.email}.`,
  },
  {
    q: "What are the school timings?",
    a: "The school is open Monday to Saturday from 8:00 AM to 2:00 PM. Early Years classes (Nursery, LKG, UKG) finish at 12:00 PM. The school is closed on Sundays.",
  },
  {
    q: "When was Swagat Public School established?",
    a: `Swagat Public School, ${site.address.locality} was established in ${site.founded} by ${founder.name}. "Swagat" means "welcome", and the school's motto is "${site.tagline}".`,
  },
  {
    q: "How can I contact Swagat Public School, Lakhna?",
    a: `Call or WhatsApp ${site.phone}, call ${site.phone2}, email ${site.email}, follow ${site.instagramHandle} on Instagram, watch the school's videos on YouTube (${site.youtubeHandle}), or send a message through the Contact page of ${domain}.`,
  },
] as const;
