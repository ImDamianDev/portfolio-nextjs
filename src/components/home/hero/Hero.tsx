"use client"
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import { titleFont } from '@/config/fonts';

export const Hero = () => {

    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ['Desarrollador web.', 'hola Carolina',],
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
                    <p className={`${titleFont.className} text-primary text-xl lg:text-3xl mb-1 pl-0.5 font-semibold`}>
                        Hola, mi nombre es
                    </p>
                    <h1 className={`${titleFont.className} text-secondary text-5xl lg:text-7xl font-bold antialiased`}>
                        Damian Cortés
                    </h1>
                </div>

                <div className="text-primary pl-0.5 mt-7 text-xl lg:text-3xl font-semibold antialiased">
                    <span ref={typedRef}>
                    </span>
                </div>

                <div>

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

                <div className='absolute w-28 lg:w-40 h-10 md:h-14 lg:h-20 rounded-full bg-primary bottom-10 right-10 bounce border-3 border-secondary' />

            </div>
        </div>
    )
}