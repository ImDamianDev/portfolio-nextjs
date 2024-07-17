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
import { BsPerson } from "react-icons/bs";

export const SkillsSection: React.FC = () => {
    return (
        <section id="skills">

            <div className='flex items-center mb-8 gap-3 text-secondary'>
                <BsPerson size="1.5em" />
                <TitleSection text="Habilidades y Tecnologias" />
            </div>


            <div className="grid lg:grid-cols-2 gap-6 items-center">

                <div>
                    <p className="text-foreground/75 mb-3">
                        Durante la formación, aprendí tecnologías y herramientas como HTML, CSS, JavaScript, Bootstrap, Git, Github, Node Js aunque he seguido aprendiendo también sobre React, NextJs, Tailwind CSS y Typescript.
                    </p>
                    <p className="text-foreground/75 ">
                        Con estas habilidades, por el momento he desarrollado varios proyectos web (casos de estudio), incluido este portafolio en el que estás navegando.
                    </p>
                </div>

                <div className="grid sm:grid-rows-2 sm:grid-flow-col sm:gap-3 lg:order-first">

                    <div className="row-span-2 bg-secondary/5 rounded-xl">
                        <h3 className="py-1 mb-6 bg-secondary/20 rounded-xl text-center text-secondary"> Desarrollo FRONTEND</h3>

                        <ul className="flex flex-row flex-wrap gap-3">
                            <li className="justify-center bg-secondary/10 px-2 py-1.5 rounded-xl flex items-center gap-1 text-sm"><FaHtml5 size="1.5em" /> HTML</li>
                            <li className="justify-center bg-secondary/10 px-2 py-1.5 rounded-xl flex items-center gap-1 text-sm grow"><FaCss3Alt size="1.5em" /> CSS</li>
                            <li className="justify-center bg-secondary/10 px-2 py-1.5 rounded-xl flex items-center gap-1 text-sm grow"><IoLogoJavascript size="1.5em" /> JavaScript</li>
                            <li className="justify-center bg-secondary/10 px-2 py-1.5 rounded-xl flex items-center gap-1 text-sm"><FaBootstrap size="1.5em" /> Bootstrap</li>
                            <li className="justify-center bg-secondary/10 px-2 py-1.5 rounded-xl flex items-center gap-1 text-sm grow"><FaReact size="1.5em" /> React</li>
                            <li className="justify-center bg-secondary/10 px-2 py-1.5 rounded-xl flex items-center gap-1 text-sm grow"><RiNextjsFill size="1.5em" /> NextJs</li>
                            <li className="justify-center bg-secondary/10 px-2 py-1.5 rounded-xl flex items-center gap-1 text-sm grow"><RiTailwindCssFill size="1.5em" /> Tailwind Css</li>
                            <li className="justify-center bg-secondary/10 px-2 py-1.5 rounded-xl flex items-center gap-1 text-sm grow"><BiLogoTypescript size="1.5em" />TypeScript</li>
                        </ul>
                    </div>

                    <div className="col-span-2 bg-secondary/5 rounded-xl mt-3 sm:mt-0">
                        <h3 className="py-1 mb-6 bg-secondary/20 rounded-xl text-center text-secondary">Desarrollo BACKEND</h3>

                        <ul className="flex flex-row flex-wrap gap-3">
                            <li className="justify-center bg-secondary/10 px-2 py-1.5 rounded-xl flex items-center gap-1 text-sm grow"><FaNodeJs size="1.5em" /> Node Js</li>
                            <li className="justify-center bg-secondary/10 px-2 py-1.5 rounded-xl flex items-center gap-1 text-sm"><SiExpress size="1.5em" /> Express Js</li>
                            <li className="justify-center bg-secondary/10 px-2 py-1.5 rounded-xl flex items-center gap-1 text-sm grow"><IoLogoJavascript size="1.5em" /> JavaScript</li>
                        </ul>
                    </div>

                    <div className="col-span-2 bg-secondary/5 rounded-xl mt-3 sm:mt-0">
                        <h3 className="py-1 mb-6 bg-secondary/20 rounded-xl text-center text-secondary">Control de versiones</h3>

                        <ul className="flex flex-row flex-wrap gap-3">
                            <li className="justify-center bg-secondary/10 px-2 py-1.5 rounded-xl flex items-center gap-1 text-sm grow"><FaGitAlt size="1.5em" /> Git</li>
                            <li className="justify-center bg-secondary/10 px-2 py-1.5 rounded-xl flex items-center gap-1 text-sm grow"><FaGithub size="1.5em" /> GitHub</li>
                        </ul>
                    </div>
                </div>

            </div>



        </section>
    );
};