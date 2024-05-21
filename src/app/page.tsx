import { About, ContactForm, Hero } from "@/components";

export default function HomePage() {
  return (
    <div className="min-h-screen m-0 p-0">
      <Hero />
      <About />

      <div className="flex justify-center py-10 px-4 md:px-0">
        <ContactForm />
      </div>
    </div>
  );
}
