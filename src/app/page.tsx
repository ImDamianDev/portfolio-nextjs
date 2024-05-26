'use client'
import { ContactForm, Hero, Works, SectionTitle, SocialLink, } from "@/components";
import { motion, Variants } from "framer-motion";

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

      <Works />

      <div id="contact" className="p-7">
        <div className=" max-w-[850px] mx-auto flex flex-col md:flex-row content-center p-7 gap-7">
          <div className="mb-0 md:mb-7 flex flex-col">
            <SectionTitle text="Contacto" />
            <p className="text-md font-light">¿Tienes una pregunta, propuesta, proyecto o quieres trabajar juntos en algo?<br />No dudes en comunicarte.</p>
            <div className="w-[150px] h-1 bg-secondary rounded my-5" />
            <div className="flex flex-row justify-left gap-8">
              <SocialLink type="github" href="https://github.com/ImDamianDev/" />
              <SocialLink type="linkedin" href="https://www.linkedin.com/in/imdamian-dev/" />
              <SocialLink type="mail" href="mailto:imdamian.dev@gmail.com" />
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
