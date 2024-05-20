"use client"
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import { titleFont } from '@/config/fonts';
import { FaArrowDown } from 'react-icons/fa';

export const Hero = () => {

    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ['Desarrollador web.',],
            typeSpeed: 110,
            backSpeed: 110,
            loop: true
        });

        return () => {
            typed.destroy();
        }
    }, []);


    return (
        <div id="hero" className='relative min-h-screen flex flex-col-reverse md:flex-row justify-center items-center'>

            <div className='absolute w-20 h-20 rounded-full bg-secondary top-20 left-10 md:w-28 md:h-28 md:top-32 lg:left-20 lg:top-32 xl:left-40 xl:top-40 2xl:w-48 2xl:h-48 transition-all opacity-60 -z-10 pulse' />

            <div className="grid content-center text-center md:text-left p-5 h-fit w-full md:w-auto lg:mr-5">

                <div>
                    <p className={`${titleFont.className} text-xl lg:text-3xl mb-1 pl-0.5`}>
                        Hola, mi nombre es
                    </p>
                    <h1 className={`${titleFont.className} text-secondary text-5xl lg:text-7xl font-bold antialiased`}>
                        Damian Cortés
                    </h1>
                </div>

                <div className="pl-0.5 mt-7 text-xl lg:text-3xl antialiased">
                    <span ref={typedRef}>
                    </span>
                </div>

            </div>

            <div className='basis-1/4 md:basis-2/4 lg:basis-auto relative flex items-center px-14 md:px-0 -mt-36 md:mt-0'>
                <Image
                    src='/profile-picture/profile-picture.png'
                    alt="hero-image-imdamiandev"
                    width={500}
                    height={500}
                    className='rounded-full'
                />
            </div>

            <div className='absolute w-12 h-20 rounded-full border-3 border-secondary bottom-20'>
                <FaArrowDown size={25} className='text-secondary absolute bottom-3 left-[9px]'/>
            </div>
        </div>
    )
}