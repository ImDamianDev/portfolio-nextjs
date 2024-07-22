import { HeroSection, AboutMeSection, SkillsSection, Works, ContactSection, Timeline } from "@/components";

export default function HomePage() {
  return (
    <div
      className="flex flex-col gap-16 px-6 mt-8"
    >
      <HeroSection />

      <AboutMeSection />

      <SkillsSection />

      {/* Experiencia y formación */}
      <Timeline />

      <Works />

      <ContactSection />
    </div>
  )
}
