import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import client1 from "@/assets/client1.jpg";
import client2 from "@/assets/client2.jpg";

const testimonials = [
  { name: "Jane Smith", quote: "John is an exceptional designer.", image: client1 },
  { name: "Mark Lee", quote: "Delivers high-quality work on time.", image: client2 },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="container px-6 py-20">
      <h2 className="font-heading text-3xl md:text-4xl font-bold">Testimonials</h2>
      <div className="mt-10">
        <Carousel className="relative">
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="md:basis-1/2">
                <figure className="glass-panel rounded-2xl p-6 h-full flex items-center gap-5">
                  <img src={t.image} alt={`${t.name} portrait`} className="h-16 w-16 rounded-full object-cover" loading="lazy" />
                  <blockquote>
                    <p className="text-lg">“{t.quote}”</p>
                    <figcaption className="mt-2 text-sm text-muted-foreground">{t.name}</figcaption>
                  </blockquote>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="glass-panel" />
          <CarouselNext className="glass-panel" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
