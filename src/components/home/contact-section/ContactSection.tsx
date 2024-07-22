
import { ContactForm, SocialLink, TitleSection } from '@/components';
import { PiNotebookDuotone } from 'react-icons/pi';


export const ContactSection = () => {

  return (
    <div id="contact-section">

      <div id="contact-body" className='grid md:grid-cols-12 py-6 md:pb-16'>

        <div id="contact-description" className='col-span-6 md:col-span-5 lg:col-span-6 pt-8 md:py-6 lg:p-0'>

          <div className='flex items-center mb-8 gap-3 text-secondary'>
            <PiNotebookDuotone size="1.5em" />
            <TitleSection text="Contacto" />
          </div>

          <p className="font-light">Algo de lo que haz visto a llamado tu atencion ¿Tienes una pregunta, propuesta, proyecto o quieres trabajar juntos en algo?<br />No dudes en comunicarte.</p>
          <div className="w-[150px] h-1 bg-secondary rounded my-5" />
          <div className="flex flex-row justify-left gap-8">
            <SocialLink type="github" href="https://github.com/ImDamianDev/" size="2em" />
            <SocialLink type="linkedin" href="https://www.linkedin.com/in/imdamian-dev/" size="2em" />
            <SocialLink type="mail" href="mailto:imdamian.dev@gmail.com" size="2em" />
          </div>

        </div>

        <div id="contact-form" className='col-span-6 md:col-span-7 lg:col-span-6 lg:ml-6'>
            <div className="w-full py-7 md:p-7 border-0 md:border-1 border-secondary rounded-lg md:shadow-lg shadow-secondary">
              <ContactForm />
            </div>
        </div>

      </div>

    </div>
  )
}