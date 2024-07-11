"use client"

// Importacion de componentes
import { TitleSection } from "./TitleSection"
// Importación de animaciones
import { motion } from "framer-motion";
// Importacion de variantes de animacion personalizadas
import { fadeIn, slideInFromLeft, sectionVariants } from '../animations/Variants';

export const AboutMeSection: React.FC = () => {
    return (
        <motion.section
            id="about-me"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={slideInFromLeft}>
                <TitleSection text="Sobre Mí" />
            </motion.div>

            <motion.p variants={fadeIn} className="mb-3">
                Ingeniero mecánico desde el 2015.
            </motion.p>

            <motion.p variants={fadeIn}>
                En 2022, buscando nuevos conocimientos por curiosidad me inscribi en un bootcamp intensivo de JavaScript, donde descubrí lo esencial que es <strong className="text-secondary">programar</strong> como <strong className="text-secondary">habilidad</strong>. Desde entonces y aunque no siempre con la constancia que desearía he continuado aprendiendo cosas nuevas.
            </motion.p>

        </motion.section>
    );
};