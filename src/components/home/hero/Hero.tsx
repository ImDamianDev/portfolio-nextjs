"use client";

import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
// Importación de fuentes
import { titleFont } from '@/config/fonts';
// Importación de componentes
import { ScrollToSectionButton, SectionTitle } from '@/components';
// Importación de animaciones
import { motion } from "framer-motion";
import Typed from 'typed.js';

// Variantes de animación para el contenedor principal
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

// Variantes de animación para los elementos secundarios (vertical)
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

// Variantes de animación para los elementos secundarios (horizontal)
const item2Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
    },
};

export const Hero = () => {
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
        <motion.div
            id="hero"
            className="lg:min-h-[90vh]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Título de la sección con animación */}
            <motion.div
                variants={itemVariants}
                className="hidden sm:block border-b-2 border-secondary w-fit ml-6 lg:ml-0 sticky top-17 mt-6"
            >
                <SectionTitle text="Presentación" />
            </motion.div>

            {/* Cuerpo principal del héroe, dividido en dos columnas */}
            <div id="hero-body" className="grid md:grid-cols-2 lg:min-h-[80vh]">
                {/* Descripción y enlaces en la primera columna */}
                <div
                    id="hero-description"
                    className="grid content-center pt-8 px-6 md:py-6 lg:p-0"
                >
                    <motion.p variants={itemVariants} className="text-lg">
                        ¡Hola! Soy
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className={`${titleFont.className} text-secondary text-5xl lg:text-7xl font-bold antialiased -my-1 mb-6`}
                    >
                        Damian
                    </motion.h1>

                    <motion.p variants={itemVariants} className="mb-4 text-sm lg:text-base">
                        Ingeniero Mecánico de profesión, apasionado por la tecnología y el <span ref={typedRef} className="font-mono text-secondary"></span>
                    </motion.p>

                    <motion.p variants={itemVariants} className="mb-4 text-sm lg:text-base">
                        En 2022, mi curiosidad me llevó a inscribirme en un bootcamp intensivo de <strong className='text-secondary'>JavaScript</strong>, transformando mi perspectiva y habilidades.
                    </motion.p>

                    <motion.p variants={itemVariants} className="mb-4 text-sm lg:text-base">
                        ¿Quieres saber más sobre mí y ver en qué he estado trabajando? Echa un vistazo.
                    </motion.p>

                    {/* Enlaces a otras secciones */}
                    <motion.div
                        id="hero-links"
                        className="flex flex-row md:flex-row gap-3 mt-6"
                        variants={itemVariants}
                    >
                        <Link
                            href="/about"
                            className="text-center py-2 px-8 border border-secondary rounded-full text-secondary hover:bg-secondary hover:text-foreground hover:scale-105 hover:font-bold focus:scale-95 transition-all"
                        >
                            <motion.div variants={item2Variants}>
                                Sobre mí
                            </motion.div>
                        </Link>

                        <ScrollToSectionButton
                            targetId="study-cases"
                            className="text-center py-2 px-8 border border-secondary rounded-full text-secondary hover:bg-secondary hover:text-foreground hover:scale-105 hover:font-bold transition-all"
                        >
                            <motion.div variants={item2Variants}>
                                Portafolio
                            </motion.div>
                        </ScrollToSectionButton>


                    </motion.div>
                </div>

                {/* Imagen ilustrativa en la segunda columna */}
                <motion.div
                    id="hero-image"
                    className="hidden sm:block p-10"
                    variants={item2Variants}
                >
                    <Image
                        src="/img/hero_ilustration.svg"
                        alt="Ilustración del héroe"
                        width={500}
                        height={500}
                        className="my-auto scale-110 -z-10"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};
