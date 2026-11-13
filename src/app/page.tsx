import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import VisionSection from "@/components/home/VisionSection";
import TeachersSection from "@/components/home/TeachersSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import AdmissionsPreview from "@/components/home/AdmissionsPreview";
import FAQSection from "@/components/home/FAQSection";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import CTAStrip from "@/components/home/CTAStrip";
import MapSection from "@/components/home/MapSection";

export default function Home() {
  return (
    <main style={{ overflowX: 'hidden' }}>
      <FaqJsonLd />
      <HeroSection />      {/* CREAM bg  → straight thin divider  */}
      <AboutSection />     {/* WHITE bg  → purple wave at bottom  */}
      <VisionSection />    {/* PURPLE bg → white wave at bottom   */}
      <TeachersSection />  {/* WHITE bg  → teal wave at bottom    */}
      <FeaturesSection />  {/* TEAL bg   → cream wave at bottom   */}
      <ProgramsSection />  {/* CREAM bg  → straight (no wave)     */}
      <FAQSection />       {/* CREAM bg  → straight (no wave)     */}
      <AdmissionsPreview />{/* CREAM bg  → purple wave at bottom  */}
      <CTAStrip />         {/* PURPLE bg → teal wave at bottom    */}
      <MapSection />       {/* TEAL bg   → directly above Footer  */}
                           {/* FOOTER: TEAL bg (in layout.tsx)    */}
    </main>
  );
}
