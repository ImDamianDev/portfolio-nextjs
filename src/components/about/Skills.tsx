"use client"

// Importacion de componentes
import { TitleSection } from "./TitleSection"
//Importacion de iconos
import { BiLogoTypescript } from "react-icons/bi";
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

// Importación de animaciones
import { motion } from "framer-motion";
// Importacion de variantes de animacion personalizadas
import { fadeIn, slideInFromLeft, sectionVariants } from '../animations/Variants';

export const SkillsSection: React.FC = () => {
    return (
        <motion.section
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >

            <motion.div variants={slideInFromLeft}>
                <TitleSection text="Habilidades y Tecnologias" />
            </motion.div>

            <motion.p variants={fadeIn} viewport={{ once: true, amount: 0.2 }} className="mb-3">
                Durante la formación, aprendí tecnologías y herramientas como HTML, CSS, JavaScript, Bootstrap, Git, Github, Node Js aunque he seguido aprendiendo también sobre React, NextJs, Tailwind CSS y Typescript.
            </motion.p>

            {/* Subsección de desarrollo FRONTEND */}
            <motion.h3
                variants={slideInFromLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                className="font-semibold mt-6 mb-3"
            >
                Desarrollo FRONTEND
            </motion.h3>

            <motion.ul
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="flex flex-row flex-wrap gap-3">
                <motion.li variants={slideInFromLeft} className="border-1 border-secondary px-3 py-2 rounded-xl flex items-center gap-2"><FaHtml5 size="1.5em" /> HTML</motion.li>
                <motion.li variants={slideInFromLeft} className="border-1 border-secondary px-3 py-2 rounded-xl flex items-center gap-2"><FaCss3Alt size="1.5em" /> CSS</motion.li>
                <motion.li variants={slideInFromLeft} className="border-1 border-secondary px-3 py-2 rounded-xl flex items-center gap-2"><IoLogoJavascript size="1.5em" /> JavaScript</motion.li>
                <motion.li variants={slideInFromLeft} className="border-1 border-secondary px-3 py-2 rounded-xl flex items-center gap-2"><FaBootstrap size="1.5em" /> Bootstrap</motion.li>
                <motion.li variants={slideInFromLeft} className="border-1 border-secondary px-3 py-2 rounded-xl flex items-center gap-2"><FaReact size="1.5em" /> React</motion.li>
                <motion.li variants={slideInFromLeft} className="border-1 border-secondary px-3 py-2 rounded-xl flex items-center gap-2"><RiNextjsFill size="1.5em" /> NextJs</motion.li>
                <motion.li variants={slideInFromLeft} className="border-1 border-secondary px-3 py-2 rounded-xl flex items-center gap-2"><RiTailwindCssFill size="1.5em" /> Tailwind Css</motion.li>
                <motion.li variants={slideInFromLeft} className="border-1 border-secondary px-3 py-2 rounded-xl flex items-center gap-2"><BiLogoTypescript size="1.5em" />TypeScript</motion.li>
            </motion.ul>

            {/* Subsección de desarrollo BACKEND */}
            <motion.h3
                variants={slideInFromLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="font-semibold mt-6 mb-3"
            >
                Desarrollo BACKEND
            </motion.h3>

            <motion.ul
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                className="flex flex-row flex-wrap gap-3"
            >
                <motion.li variants={slideInFromLeft} className="border-1 border-secondary px-4 py-2 rounded-xl flex items-center gap-2"><FaNodeJs size="1.5em" /> Node Js</motion.li>
                <motion.li variants={slideInFromLeft} className="border-1 border-secondary px-4 py-2 rounded-xl flex items-center gap-2"><SiExpress size="1.5em" /> Express Js</motion.li>
                <motion.li variants={slideInFromLeft} className="border-1 border-secondary px-4 py-2 rounded-xl flex items-center gap-2"><IoLogoJavascript size="1.5em" /> JavaScript</motion.li>
            </motion.ul>

            {/* Subsección de control de versiones */}
            <motion.h3
                variants={slideInFromLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="font-semibold mt-6 mb-3"
            >
                Control de versiones
            </motion.h3>

            <motion.ul
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                className="flex flex-row flex-wrap gap-3"
            >
                <motion.li variants={slideInFromLeft} className="border-1 border-secondary px-4 py-2 rounded-xl flex items-center gap-2"><FaGitAlt size="1.5em" /> Git</motion.li>
                <motion.li variants={slideInFromLeft} className="border-1 border-secondary px-4 py-2 rounded-xl flex items-center gap-2"><FaGithub size="1.5em" /> GitHub</motion.li>
            </motion.ul>

            {/* Comentario sobre la experiencia y motivación */}
            <motion.p
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 1 }}
                className="mt-6"
            >
                Con estas habilidades, por el momento he desarrollado varios proyectos web (casos de estudio), incluido este portafolio en el que estás navegando.
            </motion.p>

        </motion.section>
    );
};