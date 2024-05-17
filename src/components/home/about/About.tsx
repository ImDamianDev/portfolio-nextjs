"use client"
import Image from 'next/image';

export const About = () => {

    return (
        <div id="hero-section" className='min-h-screen bg-violet-900 flex flex-col md:flex-row justify-center'>

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
                    <h1 className="text-5xl md:text-5xl mb-5 font-bold antialiased">
                        Damián Cortés
                    </h1>
                </div>

            </div>
        </div>
    )
}