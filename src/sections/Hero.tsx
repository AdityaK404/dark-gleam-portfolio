import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 hero-animated-bg" aria-hidden />
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex flex-col items-center justify-center text-center">
        <header className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight animate-fade-in">
            Hello, I’m John Doe
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground animate-fade-in">
            I’m a UX/UI Designer crafting delightful, accessible experiences.
          </p>
        </header>
        <div className="mt-10 flex items-center justify-center gap-4 animate-enter">
          <Button asChild variant="glass" size="lg">
            <a href="#contact" aria-label="Go to contact section">Get In Touch</a>
          </Button>
          <Button asChild variant="hero" size="lg">
            <a href="#projects" aria-label="View my projects">My Work</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
