import CursorGlow from "@/components/CursorGlow";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import { SplineSceneBasic } from "@/components/ui/demo";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <CursorGlow />
      <header className="sticky top-0 z-20 backdrop-blur-lg bg-background/60 border-b border-border">
        <nav className="container px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="font-heading text-lg story-link">John Doe</a>
          <div className="hidden sm:flex gap-6 text-sm text-muted-foreground">
            <a href="#about" className="story-link">About</a>
            <a href="#projects" className="story-link">Projects</a>
            <a href="#experience" className="story-link">Experience</a>
            <a href="#testimonials" className="story-link">Testimonials</a>
            <a href="#contact" className="story-link">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <section className="container mx-auto px-6 py-16">
          <SplineSceneBasic />
        </section>
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
