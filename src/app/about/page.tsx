import { SlideInLeft, Timeline } from "@/components"; // Importación del componente Timeline
import { BiLogoTypescript } from "react-icons/bi";
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

// Componente principal para la página "Sobre Mí"
export default function AboutPage() {
  return (
    <div className="min-h-screen m-0 p-0 mb-16">
      <div className="flex flex-col gap-3 px-6">

        {/*  motivación */}

        <SlideInLeft>
          <div className="bg-gray-300/10 p-6 rounded-lg shadow-md text-center mt-6 mb-16">
            <p className="text-lg italic text-secondary">
              "Lo bueno de aprender algo es que nadie puede arrebatárnoslo."
            </p>
            <p className="text-xs mt-4 text-foreground">- B.B. King</p>
          </div>
        </SlideInLeft>

        {/* Sección de introducción personal */}
        <h2 className="text-xl font-bold mb-4">Sobre Mí</h2>
        <p className="mb-4">
          ¡Hola! Soy Damian Cortés, un entusiasta de la programación aunque Ingeniero mecánico de profesión.
        </p>
        <p className="mb-4">
          En 2022, por curiosidad me inscribi en un bootcamp intensivo de JavaScript y fue experiencia enriquesedora. Ahí descubrí lo esencial que es programar como habilidad. Desde entonces y aunque no siempre con la constancia que desearía, no he dejado de aprender cosas nuevas.
        </p>

        {/* Sección de habilidades y tecnologías */}
        <h2 className="text-xl font-bold mb-4">Habilidades y Tecnologías</h2>
        <p className="mb-4">
          Durante la formación, aprendí tecnologías y herramientas como HTML, CSS, JavaScript, Bootstrap, Git, Github, Node Js aunque he seguido aprendiendo también sobre React, NextJs, Tailwind CSS y Typescript.
        </p>

        {/* Subsección de desarrollo FRONTEND */}
        <h3 className="font-semibold mb-4">Desarrollo FRONTEND</h3>
        <div className="flex flex-row flex-wrap gap-3 mb-4">
          <span className="border-1 border-secondary px-6 py-2 rounded-xl flex items-center gap-2"><FaHtml5 size="2em" /> HTML</span>
          <span className="border-1 border-secondary px-6 py-2 rounded-xl flex items-center gap-2"><FaCss3Alt size="2em" /> CSS</span>
          <span className="border-1 border-secondary px-6 py-2 rounded-xl flex items-center gap-2"><IoLogoJavascript size="2em" /> JavaScript</span>
          <span className="border-1 border-secondary px-6 py-2 rounded-xl flex items-center gap-2"><FaBootstrap size="2em" /> Bootstrap</span>
          <span className="border-1 border-secondary px-6 py-2 rounded-xl flex items-center gap-2"><FaReact size="2em" /> React</span>
          <span className="border-1 border-secondary px-6 py-2 rounded-xl flex items-center gap-2"><RiNextjsFill size="2em" /> NextJs</span>
          <span className="border-1 border-secondary px-6 py-2 rounded-xl flex items-center gap-2"><RiTailwindCssFill size="2em" /> Tailwind Css</span>
          <span className="border-1 border-secondary px-6 py-2 rounded-xl flex items-center gap-2"><BiLogoTypescript size="2em" />TypeScript</span>
        </div>

        {/* Subsección de desarrollo BACKEND */}
        <h3 className="font-semibold mb-4">Desarrollo BACKEND</h3>
        <div className="flex flex-row flex-wrap gap-3 mb-4">
          <span className="border-1 border-secondary px-8 py-2 rounded-xl flex items-center gap-2"><FaNodeJs size="2em" /> Node Js</span>
          <span className="border-1 border-secondary px-8 py-2 rounded-xl flex items-center gap-2"><SiExpress size="2em" /> Express Js</span>
          <span className="border-1 border-secondary px-8 py-2 rounded-xl flex items-center gap-2"><IoLogoJavascript size="2em" /> JavaScript</span>
        </div>

        {/* Subsección de control de versiones */}
        <h3 className="font-semibold mb-4">Control de versiones</h3>
        <div className="flex flex-row flex-wrap gap-3 mb-4">
          <span className="border-1 border-secondary px-8 py-2 rounded-xl flex items-center gap-2"><FaGitAlt size="2em" /> Git</span>
          <span className="border-1 border-secondary px-8 py-2 rounded-xl flex items-center gap-2"><FaGithub size="2em" /> GitHub</span>
        </div>

        {/* Comentario sobre la experiencia y motivación */}
        <p className="mb-4">
          Con estas habilidades, por el momento he desarrollado varios proyectos web (casos de estudio), incluido este portafolio en el que estás navegando.
        </p>

        {/* Sección de experiencia y formación */}
        <h2 className="text-xl font-bold my-6">Experiencia y Formación</h2>
        <p className="mb-4"></p>
        <Timeline /> {/* Renderización del componente Timeline */}

      </div>
    </div>
  );
}
