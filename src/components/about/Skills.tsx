"use client"

import Image from 'next/image';
// Importacion de componentes
import { TitleSection } from "./TitleSection"
import { BsPerson } from "react-icons/bs";

export const SkillsSection: React.FC = () => {
    return (
        <section id="skills" className='grid sm:grid-cols-2 gap-8'>


            <div className="grid content-center sm:order-last">

                <div className='flex items-center mb-8 gap-3 text-secondary'>
                    <BsPerson size="1.5em" />
                    <TitleSection text="Habilidades y Tecnologias" />
                </div>

                <p className="text-foreground/75 mb-3">
                    Durante la formación, aprendí tecnologías y herramientas como HTML, CSS, JavaScript, Bootstrap, Git, Github, Node Js aunque he seguido aprendiendo también sobre React, NextJs, Tailwind CSS y Typescript.
                </p>
                <p className="text-foreground/75 ">
                    Con estas habilidades, por el momento he desarrollado varios proyectos web (casos de estudio), incluido este portafolio en el que estás navegando.
                </p>
            </div>

            {/* Imagen ilustrativa en la segunda columna */}
            <Image
                src="/img/skills_img.svg"
                alt="Ilustración del héroe"
                width={500}
                height={500}
                className="my-auto mx-auto rounded-xl p-4 sm:p-16"
            />


        </section>
    );
};