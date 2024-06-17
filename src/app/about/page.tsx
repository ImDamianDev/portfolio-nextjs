"use client"

import { SlideInLeft, Timeline } from "@/components"; // Importación del componente Timeline
import { BiLogoTypescript } from "react-icons/bi";
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

// Importación de animaciones
import { motion } from "framer-motion";

// Variantes de animación para el contenedor principal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

// Variantes de animación para los elementos secundarios (vertical)
const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

// Variantes de animación para los elementos secundarios (vertical)
const slideInBottomVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

// Variantes de animación para los elementos secundarios (horizontal)
const slideInLeftVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

// Componente principal para la página "Sobre Mí"
export default function AboutPage() {

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="min-h-screen m-0 p-0 mb-16"
    >
      <div className="flex flex-col gap-3 px-6">

        {/* Sección de introducción personal */}
        <motion.h2 variants={slideInBottomVariants} className="text-xl font-bold mb-4">Sobre Mí</motion.h2>
        <motion.p variants={fadeInVariants} className="mb-4">
          ¡Hola! Soy Damian Cortés, un entusiasta de la programación aunque Ingeniero mecánico de profesión.
        </motion.p>
        <motion.p variants={fadeInVariants} className="mb-4">
          En 2022, por curiosidad me inscribi en un bootcamp intensivo de JavaScript y fue experiencia enriquesedora. Ahí descubrí lo esencial que es programar como habilidad. Desde entonces y aunque no siempre con la constancia que desearía, no he dejado de aprender cosas nuevas.
        </motion.p>

        {/* Sección de habilidades y tecnologías */}
        <motion.h2 variants={slideInBottomVariants} className="text-xl font-bold mb-4">Habilidades y Tecnologías</motion.h2>
        <motion.p variants={fadeInVariants} className="mb-4">
          Durante la formación, aprendí tecnologías y herramientas como HTML, CSS, JavaScript, Bootstrap, Git, Github, Node Js aunque he seguido aprendiendo también sobre React, NextJs, Tailwind CSS y Typescript.
        </motion.p>

        {/* Subsección de desarrollo FRONTEND */}
        <motion.h3
          variants={slideInBottomVariants}
          className="font-semibold mb-4"
        >
          Desarrollo FRONTEND
        </motion.h3>

        <motion.ul
          className="flex flex-row flex-wrap gap-3 mb-4"
        >
          <motion.li variants={slideInLeftVariants} className="border-1 border-secondary px-6 py-2 rounded-xl flex items-center gap-2"><FaHtml5 size="2em" /> HTML</motion.li>
          <motion.li variants={slideInLeftVariants} className="border-1 border-secondary px-6 py-2 rounded-xl flex items-center gap-2"><FaCss3Alt size="2em" /> CSS</motion.li>
          <motion.li variants={slideInLeftVariants} className="border-1 border-secondary px-6 py-2 rounded-xl flex items-center gap-2"><IoLogoJavascript size="2em" /> JavaScript</motion.li>
          <motion.li variants={slideInLeftVariants} className="border-1 border-secondary px-6 py-2 rounded-xl flex items-center gap-2"><FaBootstrap size="2em" /> Bootstrap</motion.li>
          <motion.li variants={slideInLeftVariants} className="border-1 border-secondary px-6 py-2 rounded-xl flex items-center gap-2"><FaReact size="2em" /> React</motion.li>
          <motion.li variants={slideInLeftVariants} className="border-1 border-secondary px-6 py-2 rounded-xl flex items-center gap-2"><RiNextjsFill size="2em" /> NextJs</motion.li>
          <motion.li variants={slideInLeftVariants} className="border-1 border-secondary px-6 py-2 rounded-xl flex items-center gap-2"><RiTailwindCssFill size="2em" /> Tailwind Css</motion.li>
          <motion.li variants={slideInLeftVariants} className="border-1 border-secondary px-6 py-2 rounded-xl flex items-center gap-2"><BiLogoTypescript size="2em" />TypeScript</motion.li>
        </motion.ul>

        {/* Subsección de desarrollo BACKEND */}
        <motion.h3
          variants={slideInBottomVariants}
          className="font-semibold mb-4"
        >
          Desarrollo BACKEND
        </motion.h3>

        <motion.ul
          className="flex flex-row flex-wrap gap-3 mb-4"
        >
          <motion.li variants={slideInLeftVariants} className="border-1 border-secondary px-6 py-2 rounded-xl flex items-center gap-2"><FaNodeJs size="2em" /> Node Js</motion.li>
          <motion.li variants={slideInLeftVariants} className="border-1 border-secondary px-6 py-2 rounded-xl flex items-center gap-2"><SiExpress size="2em" /> Express Js</motion.li>
          <motion.li variants={slideInLeftVariants} className="border-1 border-secondary px-6 py-2 rounded-xl flex items-center gap-2"><IoLogoJavascript size="2em" /> JavaScript</motion.li>
        </motion.ul>

        {/* Subsección de control de versiones */}
        <motion.h3
          variants={slideInBottomVariants}
          className="font-semibold mb-4"
        >
          Control de versiones
        </motion.h3>

        <motion.ul
          className="flex flex-row flex-wrap gap-3 mb-4"
        >
          <motion.li variants={slideInLeftVariants} className="border-1 border-secondary px-6 py-2 rounded-xl flex items-center gap-2"><FaGitAlt size="2em" /> Git</motion.li>
          <motion.li variants={slideInLeftVariants} className="border-1 border-secondary px-6 py-2 rounded-xl flex items-center gap-2"><FaGithub size="2em" /> GitHub</motion.li>
        </motion.ul>

        {/* Comentario sobre la experiencia y motivación */}
        <motion.p
          variants={fadeInVariants}
          className="mb-4"
        >
          Con estas habilidades, por el momento he desarrollado varios proyectos web (casos de estudio), incluido este portafolio en el que estás navegando.
        </motion.p>

        {/* Sección de experiencia y formación */}
        <motion.h2 variants={slideInBottomVariants} className="text-xl font-bold my-6">Experiencia y Formación</motion.h2>

        <Timeline /> {/* Renderización del componente Timeline */}

        {/*  motivación */}

        <SlideInLeft>
          <div className="bg-gray-300/10 p-6 rounded-lg shadow-md text-center mt-6 mb-16">
            <p className="text-lg italic text-secondary">
              "Lo bueno de aprender algo es que nadie puede arrebatárnoslo."
            </p>
            <p className="text-xs mt-4 text-foreground">- B.B. King</p>
          </div>
        </SlideInLeft>

      </div>
    </motion.div>
  );
}
