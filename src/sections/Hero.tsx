import { Button } from "@/components/ui/button";
import { SplineSceneBasic } from "@/components/ui/demo";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 hero-animated-bg" aria-hidden />
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left content */}
          <div className="text-left">
            <header className="max-w-2xl">
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight animate-fade-in">
                Hello, I'm John Doe
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-muted-foreground animate-fade-in">
                I'm a UX/UI Designer crafting delightful, accessible experiences.
              </p>
            </header>
            <div className="mt-10 flex items-center gap-4 animate-enter">
              <Button asChild variant="glass" size="lg">
                <a href="#contact" aria-label="Go to contact section">Get In Touch</a>
              </Button>
              <Button asChild variant="hero" size="lg">
                <a href="#projects" aria-label="View my projects">My Work</a>
              </Button>
            </div>
          </div>
          
          {/* Right content - Spline Scene */}
          <div className="hidden lg:block">
            <SplineSceneBasic />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;