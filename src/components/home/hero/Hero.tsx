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
            strings: ['Desarrollador web'],
            typeSpeed: 85,
            backSpeed: 85,
            loop: true
        });

        return () => {
            typed.destroy();
        }
    }, []);


    return (
        <div id="hero-section" className='min-h-screen bg-slate-600 flex flex-col md:flex-row justify-center'>

            <div className='flex items-center p-5'>
                <Image
                    src='/profile_picture/profile_picture_imdamiandev.png'
                    alt="hero-image-imdamiandev"
                    width={500}
                    height={500}
                    className='rounded-full'
                />
            </div>


            <div className="grid content-center p-5">

                <div>
                    <h1 className="text-5xl md:text-5xl mb-10 font-bold antialiased">
                        Hola, me llamó Damián.
                    </h1>
                </div>

                <div className="text-white">
                    <span ref={typedRef}>
                    </span>
                </div>

            </div>
        </div>
    )
}