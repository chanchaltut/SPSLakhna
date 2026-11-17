import {
  Hero, About, Pillars, Programs, Features, SchoolLife, Teachers, AdmissionSteps, FAQSection, Visit,
} from "@/components/home/HomeSections";
import CTABand from "@/components/ui/CTABand";
import { FaqJsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <main>
      <FaqJsonLd />
      <Hero />
      <About />
      <Pillars />
      <Programs />
      <Features />
      <SchoolLife />
      <Teachers />
      <AdmissionSteps />
      <FAQSection />
      <CTABand />
      <Visit />
    </main>
  );
}
