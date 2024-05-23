'use client'
import { About, ContactForm, Hero } from "@/components";
import { FramerMagnetic } from "@/components/ui/framer-magnetic/FramerMagnetic";
import { motion, Variants } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


const cardVariants: Variants = {
  offscreen: {
    y: 150,
    rotate: -10,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    opacity: 100,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.8
    }
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen m-0 p-0">

      <Hero />
      <About />

      <div className="p-7">
        <div className=" max-w-[850px] mx-auto flex flex-col md:flex-row content-center p-7 gap-7">
          <div className="mb-0 md:mb-7 flex flex-col">
            <h1 className="text-center md:text-left font-bold text-5xl text-secondary mb-16">Contacto</h1>
            <p className="text-md font-light">¿Tienes una pregunta, propuesta, proyecto o quieres trabajar juntos en algo?<br />No dudes en comunicarte.</p>
            <div className="w-[150px] h-1 bg-secondary rounded my-5" />
            <div className="flex flex-row justify-left gap-8">
              <FramerMagnetic>
                <a href="https://github.com/ImDamianDev/"><FaGithub size="2em" /></a>
              </FramerMagnetic>
              <FramerMagnetic>
                <a href="https://www.linkedin.com/in/imdamian-dev/"><FaLinkedin size="2em" /></a>
              </FramerMagnetic>
              <FramerMagnetic>
                <a href="mailto:imdamian.dev@gmail.com"><IoMdMail size="2em" /></a>
              </FramerMagnetic>
            </div>
          </div>


          <motion.div
            className="w-full"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div
              variants={cardVariants}
              className="w-full py-7 md:p-7 border-0 md:border-2 border-secondary rounded-lg md:shadow-lg shadow-secondary">

              <ContactForm />
            </motion.div>

          </motion.div>
        </div>
      </div>


    </div>
  );
}
