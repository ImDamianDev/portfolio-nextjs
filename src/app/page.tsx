import { About, Hero, Footer, NavBar,} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen m-0 p-0">
      <NavBar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}
