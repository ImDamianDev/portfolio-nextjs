
import Image from 'next/image';
// Importacion de componentes
import { TitleSection } from "./TitleSection"
import { BsPerson } from 'react-icons/bs';

export const AboutMeSection: React.FC = () => {
    return (
        <section
            id="about-me"
            className='grid sm:grid-cols-2 gap-8'
        >
            {/* Descripción y enlaces en la primera columna */}
            <div className="grid content-center">
                
                <div className='flex items-center mb-8 gap-3 text-secondary'>
                    <BsPerson size="1.5em" />
                    <TitleSection text="Sobre Mí" />
                </div>

                <p className="dark:text-foreground/75 mb-3">
                    Ingeniero mecánico desde el 2015.
                </p>

                <p className="dark:text-foreground/75 mb-3">
                    En 2022, buscando nuevos conocimientos por curiosidad me inscribi en un <strong className="text-secondary/80 font-normal">bootcamp</strong> intensivo de <strong className="text-secondary/80 font-normal">JavaScript</strong>, donde descubrí lo esencial que es <strong className="text-secondary/80 font-normal">programar</strong> como una <strong className="text-secondary/80 font-normal">habilidad</strong>.
                </p>

                <p className='dark:text-foreground/75 '>
                    Desde entonces y aunque no siempre con la constancia que desearía continuo aprendiendo cosas nuevas.
                </p>
            </div>

            {/* Imagen ilustrativa en la segunda columna */}
            <Image
                src="/img/imdamian_develope_img.svg"
                alt="Ilustración del héroe"
                width={500}
                height={500}
                className="my-auto mx-auto rounded-xl bg-primary/5"
            />

        </section>
    );
};