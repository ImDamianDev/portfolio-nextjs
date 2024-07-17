import { Hero, Works, ContactSection, Timeline } from "@/components";
import { AboutMeSection } from "@/components/about/AboutMe";
import { SkillsSection } from "@/components/about/Skills";

export default function HomePage() {
  return (
    <div className="min-h-screen m-0 p-0">


      <div
        className="flex flex-col gap-16 px-6 mt-8"
      >
        <Hero />

        {/* Introducción personal */}
        <AboutMeSection />

        {/* Habilidades y tecnologías */}
        <SkillsSection />

        {/* Experiencia y formación */}
        <section>
          <h2 className="text-xl font-bold my-6">Experiencia y Formación</h2>
          <Timeline />
        </section>

      </div>

      <Works />

      <ContactSection />

    </div>
  );
}
