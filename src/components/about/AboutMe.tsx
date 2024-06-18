// Importacion de componentes
import { TitleSection } from "./TitleSection"
// Importación de animaciones
import { motion } from "framer-motion";
// Importacion de variantes de animacion personalizadas
import { fadeIn, slideInFromLeft, sectionVariants } from '../animations/Variants';

export const AboutMeSection: React.FC = () => {
    return (
        <motion.section
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={slideInFromLeft}>
                <TitleSection text="Sobre Mí" />
            </motion.div>

            <motion.p variants={fadeIn} className="mb-3">
                ¡Hola! Soy Damian Cortés, un entusiasta de la programación aunque Ingeniero mecánico de profesión.
            </motion.p>

            <motion.p variants={fadeIn} className="mb-3">
                En 2022, por curiosidad me inscribi en un bootcamp intensivo de JavaScript, donde descubrí lo esencial que es <strong className="text-secondary">programar</strong> como <strong className="text-secondary">habilidad</strong>. Desde entonces y aunque no siempre con la constancia que desearía he continuado aprendiendo cosas nuevas.
            </motion.p>

            <motion.p variants={fadeIn}>
                En pleno 2024 retomo la practica con la finalidad de poder aplicar esta habilidad profesionalmente hablando.
            </motion.p>

        </motion.section>
    );
};