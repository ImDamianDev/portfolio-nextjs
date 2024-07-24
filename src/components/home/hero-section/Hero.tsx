"use client";

import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
// Importación de fuentes
import { titleFont } from '@/config/fonts';
// Importación de componentes
import { ScrollToSectionButton } from '@/components';
// Importación de animaciones
import Typed from 'typed.js';

// Importación de iconos
import { BsPerson } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa6';

export const HeroSection = () => {
    const typedRef = useRef(null);

    // Configuración de la animación de escritura con Typed.js
    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ['Desarrollo web.'],
            typeSpeed: 100,
            backSpeed: 110,
            loop: true,
        });

        // Limpieza al desmontar el componente
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        // Contenedor principal con animación
        <section
            id="hero"
            className="grid sm:grid-cols-3 content-center"
        >

            {/* Imagen ilustrativa en la segunda columna */}
            <Image
                src="/img/imdamian_profile_img.svg"
                alt="Ilustración del héroe"
                width={250}
                height={250}
                className="w-[80px] h-[80px] sm:mx-auto sm:w-auto sm:h-auto lg:max-h-[250px] my-auto rounded-full border-2 border-secondary"
            />

            {/* Descripción y enlaces en la primera columna */}
            <div className="sm:col-span-2 sm:ps-6 content-center">

                <p className="mt-4 sm:m-0 text-2xl">
                    ¡Hola! Soy
                </p>

                <h1
                    className={`${titleFont.className} outlined-text text-background text-7xl font-bold antialiased -mt-1 mb-4`}
                >
                    Damian
                </h1>

                <p className="dark:text-foreground/75 text-lg sm:pr-16">
                    Ingeniero Mecánico de profesión con +8 años de experiencia, apasionado por la tecnología y el <span ref={typedRef} className="font-mono text-secondary"></span>
                </p>

                {/* Enlaces a otras secciones */}
                <div
                    className="flex flex-row sm:flex-row gap-3 mt-6"
                >

                    <ScrollToSectionButton
                        targetId="about-me"
                        className="text-center py-1 px-4 bg-secondary/25 border border-secondary/25 rounded-xl text-secondary hover:bg-secondary hover:text-foreground hover:scale-95 transition-all"
                    >
                        <div className='flex items-center gap-2 text-sm'>
                            <BsPerson size="1.3em" />
                            Sobre Mí
                        </div>
                    </ScrollToSectionButton>

                    <ScrollToSectionButton
                        targetId="study-cases"
                        className="text-center py-1 px-4 border border-secondary rounded-xl text-secondary hover:bg-secondary hover:text-foreground hover:scale-95 transition-all"
                    >
                        <div className='flex items-center gap-2 text-sm'>
                            <FaCode size="1.3em" />
                            Proyectos
                        </div>
                    </ScrollToSectionButton>


                </div>
            </div>



        </section>
    );
};
