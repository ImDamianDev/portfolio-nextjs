"use client"
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import { titleFont } from '@/config/fonts';
import { ScrollToSectionButton, SectionTitle } from '@/components';
import Link from 'next/link';
import ImDamianIlustration from '@/components/ui/brand/ImDamianIlustration';

export const Hero = () => {

    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ['Desarrollador web.',],
            typeSpeed: 100,
            backSpeed: 110,
            loop: true
        });

        return () => {
            typed.destroy();
        }
    }, []);


    return (
        <div id="hero" className='lg:min-h-[90vh]'>

            <div className='border-b-2 border-secondary w-fit ml-6 lg:ml-0 sticky top-17 mt-6'>
                <SectionTitle text="Presentacion" />
            </div>

            <div id="hero-body" className='grid md:grid-cols-2 lg:min-h-[80vh]'>

                <div id="hero-description" className='grid content-center pt-8 px-6 md:py-6 lg:p-0'>

                    <p className='text-lg'>
                        ¡Hola! Soy
                    </p>
                    <h1 className={`${titleFont.className} text-secondary text-5xl lg:text-7xl font-bold antialiased -my-1`}>
                        Damian
                    </h1>

                    <div className='text-lg h-6 text-secondary/50 mb-6'>
                        <span ref={typedRef} className='w-fit'>
                        </span>
                    </div>

                    <p className='mb-4'>
                        En 2022, mi curiosidad me llevó a inscribirme en un bootcamp intensivo de JavaScript, una experiencia que transformó mi perspectiva.
                    </p>

                    <p className='mb-12'>
                        Desde entonces no he dejado de aprender cosas nuevas.
                    </p>

                    <div id="hero-links" className='flex flex-col md:flex-row gap-5'>
                        <Link href="/about" className='text-center py-3 px-8 border border-secondary rounded-md text-secondary hover:bg-secondary hover:text-foreground hover:scale-105 hover:font-bold transition-all'
                        >
                            Sobre mi
                        </Link>

                        <ScrollToSectionButton targetId="study-cases" className="text-center py-3 px-8 border border-secondary rounded-md text-secondary hover:bg-secondary hover:text-foreground hover:scale-105 hover:font-bold transition-all">
                            <span>Portafolio</span>
                        </ScrollToSectionButton>

                    </div>

                </div>


                <div id="hero-image" className='p-10 grid'>
                    <Image
                        src='/img/hero_ilustration.svg'
                        alt="hero-ilustration"
                        width={500}
                        height={500}
                        className='my-auto scale-110 -z-10'
                    />
                </div>

            </div>

        </div>
    )
}