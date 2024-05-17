"use client"
import Image from 'next/image';
//import profile picture
import ProfilePicture from '../img/profile_picture_imdamiandev.png';
import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

export const Hero = () => {

    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ['Desarrollador web.'],
            typeSpeed: 110,
            backSpeed: 110,
            loop: true
        });

        return () => {
            typed.destroy();
        }
    }, []);


    return (
        <div id="hero" className='relative min-h-screen flex flex-col-reverse md:flex-row justify-center'>

            <div className='absolute w-20 h-20 rounded-full bg-primary-200 top-20 left-10 md:w-28 md:h-28 md:top-32 lg:left-20 lg:top-32 xl:left-40 xl:top-40 2xl:w-48 2xl:h-48 transition-all opacity-60 -z-10'>

            </div>

            <div className="grid content-center p-5">

                <div>
                    <p className='text-2xl mb-1 pl-1 font-semibold text-primary-700'>
                        Hola, mi nombre es
                    </p>
                    <h1 className="text-5xl lg:text-7xl font-bold antialiased pulse">
                        Damian Cortés
                    </h1>
                </div>

                <div className="text-primary-700 pl-1 mt-7 text-2xl lg:text-3xl font-semibold antialiased">
                    <span ref={typedRef}>
                    </span>
                </div>

                <div>

                </div>

            </div>

            <div className='flex items-center p-7'>
                <Image
                    src='/profile_picture/profile_picture_imdamiandev.png'
                    alt="hero-image-imdamiandev"
                    width={500}
                    height={500}
                    className='rounded-full'
                />
            </div>
        </div>
    )
}