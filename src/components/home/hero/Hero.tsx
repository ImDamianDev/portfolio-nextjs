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
        <motion.section
            id="hero"
            className="grid md:grid-cols-2 min-h-[80vh] content-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Descripción y enlaces en la primera columna */}
            <div className="grid content-center px-6">

                <motion.p variants={itemVariants} className="mt-8 sm:m-0 text-xl">
                    ¡Hola! Soy
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className={`${titleFont.className} outlined-text text-background text-7xl font-bold antialiased -mt-1 mb-6`}
                >
                    Damian
                </motion.h1>

                <motion.p variants={itemVariants} className="lg:text-xl text-foreground/75">
                    Ingeniero Mecánico de profesión, apasionado por la tecnología y el <span ref={typedRef} className="font-mono text-secondary"></span>
                </motion.p>

                {/* Enlaces a otras secciones */}
                <motion.div
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
                            Proyectos
                        </motion.div>
                    </ScrollToSectionButton>


                </motion.div>
            </div>

            {/* Imagen ilustrativa en la segunda columna */}
            <motion.div
                id="hero-image"
                className="p-6"
                variants={item2Variants}
            >
                <Image
                    src="/img/imdamian_profile_img_v3.svg"
                    alt="Ilustración del héroe"
                    width={500}
                    height={500}
                    className="my-auto p-4"
                />
            </motion.div>

        </motion.section>
    );
};
