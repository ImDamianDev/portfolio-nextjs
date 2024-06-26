'use client'
import { ContactForm, SectionTitle, SocialLink } from '@/components';
import { Variants, motion } from 'framer-motion';

const cardVariants: Variants = {
    offscreen: {
      y: 150,
      rotate: 0,
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

export const ContactSection = () => {

    return (
        <div id="contact-section">

        <div id="contact-title" className='border-b-2 border-secondary w-fit ml-6 lg:ml-0 sticky top-17 mt-6'>
          <SectionTitle text="Contacto" />
        </div>

        <div id="contact-body" className='grid md:grid-cols-12 py-6 md:pb-16'>

          <div id="contact-description" className='col-span-6 md:col-span-5 lg:col-span-6 content-center pt-8 px-6 md:py-6 lg:p-0'>

            <p className="font-light">¿Tienes una pregunta, propuesta, proyecto o quieres trabajar juntos en algo?<br />No dudes en comunicarte.</p>
            <div className="w-[150px] h-1 bg-secondary rounded my-5" />
            <div className="flex flex-row justify-left gap-8">
              <SocialLink type="github" href="https://github.com/ImDamianDev/" size="2em" />
              <SocialLink type="linkedin" href="https://www.linkedin.com/in/imdamian-dev/" size="2em" />
              <SocialLink type="mail" href="mailto:imdamian.dev@gmail.com" size="2em" />
            </div>

          </div>

          <div id="contact-form" className='col-span-6 md:col-span-7 lg:col-span-6 mx-6 md:mx-0 lg:ml-6'>
            <motion.div
              className="w-full"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div
                variants={cardVariants}
                className="w-full py-7 md:p-7 border-0 md:border-1 border-secondary rounded-lg md:shadow-lg shadow-secondary">

                <ContactForm />
              </motion.div>

            </motion.div>
          </div>

        </div>

      </div>
    )
}