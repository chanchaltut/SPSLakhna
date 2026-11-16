/** Shared page content used by the home page, inner pages and structured data. */

export const programs = [
  { title: "Nursery", age: "3 – 4 years", desc: "Gentle routines and play-based activities help the youngest learners explore safely and build social skills." },
  { title: "LKG", age: "4 – 5 years", desc: "First steps in phonics, numbers and art through hands-on discovery." },
  { title: "UKG", age: "5 – 6 years", desc: "Structured reading, writing and logical thinking that prepare children for primary school." },
  { title: "Classes 1 & 2", age: "6 – 8 years", desc: "Strong academic fundamentals, taught with a joyful, exploratory approach." },
  { title: "Classes 3 & 4", age: "8 – 10 years", desc: "Independent thought, teamwork and a deeper understanding of core subjects." },
  { title: "Class 5", age: "10 – 11 years", desc: "Leadership, critical thinking and solid preparation for middle school." },
] as const;

/**
 * Teaching staff shown on the home page.
 * Replace with the school's confirmed staff list (name, role, photo) before launch.
 */
export const teachers = [
  { name: "Mrs. Anita Sharma", role: "Lead Primary Teacher", bio: "With over 10 years of experience in primary education, Anita creates interactive maths and science lessons that children love.", initials: "AS" },
  { name: "Mr. Rajesh Kumar", role: "Senior Educator, Class 4–5", bio: "Rajesh builds critical thinking with a warm approach, making sure every child feels valued and supported.", initials: "RK" },
  { name: "Ms. Priya Patel", role: "Pre-Primary Specialist", bio: "Priya brings warmth and creativity to our youngest learners in Nursery and KG.", initials: "PP" },
] as const;
