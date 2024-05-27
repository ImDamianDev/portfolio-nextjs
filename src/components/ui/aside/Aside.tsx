'use client'
import { SocialLink } from '@/components';
import Image from 'next/image';
import { useState } from 'react';
import { FaCopy } from 'react-icons/fa';

export const Aside = () => {

    const [copiedText, setCopiedText] = useState<string>('')

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopiedText(text);
                setTimeout(() => setCopiedText(''), 2000);
            })
            .catch((err) => console.error('Error copying text: ', err));
    };

    return (
        <div className="flex flex-col sm:flex-row lg:flex-col min-w-full md:min-h-full p-4 lg:border-r border-secondary/50">

            <div className='flex items-start justify-center px-8'>
                <Image
                    src='/img/profile/imdamian.png'
                    alt="hero-image-imdamiandev"
                    width={350}
                    height={350}
                    className='rounded-full'
                />
            </div>

            <div className='hidden md:block sm:basis-3/4 md:ml-6 lg:ml-0 text-center md:text-left'>

                <div className='py-3'>

                    <h1 className='text-3xl text-secondary font-bold'>
                        Damian Cortes
                    </h1>
                    <p className='text-md'>
                        Desarrollador web
                    </p>


                </div>

                <div className='flex justify-center md:flex-col md:justify-start gap-8 md:gap-3 py-3 border-y border-secondary/50'>

                    <div className='flex items-center'>
                        <SocialLink type="github" href="https://github.com/ImDamianDev/" size="1.8em" />
                        <p className='hidden md:block md:pl-3 text-xs'>github.com/ImDamianDev</p>
                        <button
                            onClick={() => handleCopy('https://github.com/ImDamianDev/')}
                            className='hidden md:block ml-2 text-xs hover:text-secondary hover:origin-bottom hover:-rotate-12 transition-all'
                        >
                            {copiedText === 'https://github.com/ImDamianDev/' ? <FaCopy className='text-secondary scale-125' /> : <FaCopy />}
                        </button>
                    </div>

                    <div className='flex items-center'>
                        <SocialLink type="linkedin" href="https://www.linkedin.com/in/imdamian-dev/" size="1.8em" />
                        <p className='hidden md:block md:pl-3 text-xs'>linkedin.com/in/imdamian-dev</p>
                        <button
                            onClick={() => handleCopy('https://www.linkedin.com/in/imdamian-dev/')}
                            className='hidden md:block ml-2 text-xs hover:text-secondary hover:origin-bottom hover:-rotate-12 transition-all'
                        >
                            {copiedText === 'https://www.linkedin.com/in/imdamian-dev/' ? <FaCopy className='text-secondary scale-125' /> : <FaCopy />}
                        </button>
                    </div>

                    <div className='flex items-center '>
                        <SocialLink type="mail" href="mailto:imdamian.dev@gmail.com" size="1.8em" />
                        <p className='hidden md:block md:pl-3 text-xs'>imdamian.dev@gmail.com</p>
                        <button
                            onClick={() => handleCopy('imdamian.dev@gmail.com')}
                            className='hidden md:block ml-2 text-xs hover:text-secondary hover:origin-bottom hover:-rotate-12 transition-all'
                        >
                            {copiedText === 'imdamian.dev@gmail.com' ? <FaCopy className='text-secondary scale-125' /> : <FaCopy />}
                        </button>
                    </div>


                </div>


            </div>

        </div>
    )
}
