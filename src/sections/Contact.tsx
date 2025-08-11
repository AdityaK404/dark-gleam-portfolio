import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "Thanks for reaching out. I’ll get back to you shortly." });
    }, 800);
  };

  return (
    <section id="contact" className="container px-6 py-20">
      <h2 className="font-heading text-3xl md:text-4xl font-bold">Contact</h2>
      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <form onSubmit={onSubmit} className="glass-panel rounded-2xl p-6 space-y-4">
          <div>
            <label htmlFor="name" className="text-sm text-foreground">Name</label>
            <Input id="name" name="name" required className="mt-2" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm text-foreground">Email</label>
            <Input id="email" name="email" type="email" required className="mt-2" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-foreground">Message</label>
            <Textarea id="message" name="message" required className="mt-2" rows={5} />
          </div>
          <Button type="submit" variant="hero" disabled={loading} className="w-full">{loading ? 'Sending…' : 'Send Message'}</Button>
        </form>
        <aside className="glass-panel rounded-2xl p-6 self-start">
          <p className="text-muted-foreground">Prefer socials?</p>
          <div className="mt-4 flex gap-3">
            <Button asChild variant="glass">
              <a href="https://linkedin.com/in/johndoe" aria-label="LinkedIn profile" target="_blank" rel="noreferrer">
                <Linkedin className="mr-2" /> LinkedIn
              </a>
            </Button>
            <Button asChild variant="glass">
              <a href="https://github.com/johndoe" aria-label="GitHub profile" target="_blank" rel="noreferrer">
                <Github className="mr-2" /> GitHub
              </a>
            </Button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
