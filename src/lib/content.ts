/** Shared page content used by the home page, inner pages and structured data. */

/** Classes running now (Nursery to Class 5). The school is permitted to run classes up to Class 8 (see site.gradesPermitted). */
export const programs = [
  { title: "Nursery", age: "3 – 4 years", desc: "Gentle routines and play-based activities help the youngest learners explore safely and build social skills." },
  { title: "LKG", age: "4 – 5 years", desc: "First steps in phonics, numbers and art through hands-on discovery." },
  { title: "UKG", age: "5 – 6 years", desc: "Structured reading, writing and logical thinking that prepare children for primary school." },
  { title: "Classes 1 & 2", age: "6 – 8 years", desc: "English-medium primary lessons on the CBSE pattern, building strong reading, writing and number skills with a joyful, exploratory approach." },
  { title: "Classes 3 & 4", age: "8 – 10 years", desc: "Independent thought, teamwork and a deeper understanding of English, Maths and EVS." },
  { title: "Class 5", age: "10 – 11 years", desc: "Confidence, critical thinking and solid preparation for the middle classes, which the school is permitted to run up to Class 8." },
] as const;

/** Activities named on the school's own admission banner. */
export const activities = [
  "Yoga and meditation",
  "Dance classes",
  "Song and music classes",
  "GK quiz",
  "Essay writing",
  "Drawing and art",
] as const;

export type StaffMember = {
  id: string;
  name: string;
  givenName: string;
  familyName: string;
  honorific: string;
  role: string;
  initials: string;
  bio: string;
  leadership?: boolean;
};

/** School leadership and staff, as confirmed by the school (November 2026). */
export const staff: StaffMember[] = [
  {
    id: "narendra-nag",
    name: "Mr. Narendra Nag",
    givenName: "Narendra",
    familyName: "Nag",
    honorific: "Mr.",
    role: "Founder",
    initials: "NN",
    bio: "Founded Swagat Public School in Lakhna in 2024 and guides its growth from Nursery towards Class 8.",
    leadership: true,
  },
  {
    id: "reena-kumbhar",
    name: "Mrs. Reena Kumbhar",
    givenName: "Reena",
    familyName: "Kumbhar",
    honorific: "Mrs.",
    role: "Director",
    initials: "RK",
    bio: "Directs the day-to-day running of the school and is the first point of contact for parents.",
    leadership: true,
  },
  {
    id: "smita-bisi",
    name: "Ms. Smita Bisi",
    givenName: "Smita",
    familyName: "Bisi",
    honorific: "Ms.",
    role: "Lead Primary Teacher",
    initials: "SB",
    bio: "Leads teaching in the primary section, from Class 1 to Class 5.",
  },
  {
    id: "babli-das",
    name: "Ms. Babli Das",
    givenName: "Babli",
    familyName: "Das",
    honorific: "Ms.",
    role: "Senior Educator",
    initials: "BD",
    bio: "A senior member of the teaching team, working with children across the school's classes.",
  },
  {
    id: "nageswari-tiwari",
    name: "Mrs. Nageswari Tiwari",
    givenName: "Nageswari",
    familyName: "Tiwari",
    honorific: "Mrs.",
    role: "Pre-Primary Specialist",
    initials: "NT",
    bio: "Teaches the Early Years — Nursery, LKG and UKG — through play, stories and hands-on activity.",
  },
  {
    id: "mina-nial",
    name: "Ms. Mina Nial",
    givenName: "Mina",
    familyName: "Nial",
    honorific: "Ms.",
    role: "Support Staff",
    initials: "MN",
    bio: "Looks after the children's comfort and keeps classrooms clean, safe and ready every day.",
  },
];

export const founder = staff.find((p) => p.role === "Founder")!;
export const director = staff.find((p) => p.role === "Director")!;
