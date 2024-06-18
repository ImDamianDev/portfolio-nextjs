"use client"

import React, { useRef } from 'react';

// Importacion de componentes
import { SlideInLeft, Timeline } from "@/components"; // Importación del componente Timeline
import { AboutMeSection } from '@/components/about/AboutMe';
import { SkillsSection } from '@/components/about/Skills';

// Importación de animaciones
import { motion, useInView } from "framer-motion";

// Importacion de variantes de animacion personalizadas
import { fadeIn, slideInFromLeft, sectionVariants } from '@/components/animations/Variants';

// Componente principal para la página "Sobre Mí"
export default function AboutPage() {

  const itemRef = useRef(null);
  const isInView = useInView(itemRef);

  return (
    <div
      className="min-h-screen m-0 p-0 mb-16 text-sm"
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-3 px-6"
      >

        {/* Sección de introducción personal */}
        <AboutMeSection />

        {/* Sección de habilidades y tecnologías */}
        <SkillsSection />

        {/* Sección de experiencia y formación */}
        <section>
          <motion.h2 className="text-xl font-bold my-6">Experiencia y Formación</motion.h2>
          <Timeline />
        </section>

        {/*  motivación */}

        <div className="bg-gray-300/10 p-6 rounded-lg shadow-md text-center mt-6 mb-16">
          <p className="text-base italic text-secondary">
            "Lo bueno de aprender algo es que nadie puede arrebatárnoslo."
          </p>
          <p className="text-xs mt-4 text-foreground">- B.B. King</p>
        </div>

      </motion.div>
    </div>
  );
}
