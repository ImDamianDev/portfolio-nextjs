
import { ContactForm, SocialLink, TitleSection } from '@/components';
import { PiNotebookDuotone } from 'react-icons/pi';


export const ContactSection = () => {

  return (
    <div id="contact">

      <div id="contact-body" className='grid md:grid-cols-12 py-6 md:pb-16'>

        <div id="contact-description" className='col-span-6 md:col-span-5 lg:col-span-6 pt-8 md:py-6 lg:p-0'>

          <div className='flex items-center mb-8 gap-3 text-secondary'>
            <PiNotebookDuotone size="1.5em" />
            <TitleSection text="Contacto" />
          </div>

          <p className="dark:text-foreground/80">Algo de lo que haz visto a llamado tu atencion ¿Tienes una pregunta, propuesta, proyecto o quieres trabajar juntos en algo?<br />No dudes en comunicarte.</p>
          <div className="w-[250px] h-[1px] bg-secondary rounded my-5" />
          <div className="flex flex-col justify-left gap-5 text-sm dark:text-foreground/80">
            <SocialLink type="github" href="https://github.com/ImDamianDev/" text="github.com/ImDamianDev/" size="2em" />
            <SocialLink type="linkedin" href="https://www.linkedin.com/in/imdamian-dev/" text="linkedin.com/in/imdamian-dev/" size="2em" />
            <SocialLink type="mail" href="mailto:imdamian.dev@gmail.com" text="imdamian.dev@gmail.com" size="2em" />
          </div>
          <div className="md:hidden w-[250px] h-[1px] bg-secondary rounded my-5" />

        </div>

        <div id="contact-form" className='col-span-6 md:col-span-7 lg:col-span-6 lg:ml-6'>
            <div className="w-full px-4 py-6 rounded-xl md:border-[1px] md:border-secondary dark:bg-[radial-gradient(ellipse_100%_100%_at_50%_-20%,rgba(27,104,141,0.3),rgba(15,23,42,0))]">
              <ContactForm />
            </div>
        </div>

      </div>

    </div>
  )
}