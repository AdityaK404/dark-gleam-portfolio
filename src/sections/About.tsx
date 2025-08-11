import profile from "@/assets/profile.jpg";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Deep Learning", progress: 90 },
  { name: "APIs", progress: 85 },
  { name: "Data Analysis", progress: 88 },
];

const About = () => {
  return (
    <section id="about" className="container px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1 space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-muted-foreground">
            I’m a software developer specializing in AI-powered applications.
            Passionate about creating efficient, scalable solutions.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Python','JavaScript','Machine Learning'].map((t) => (
              <Badge key={t} className="glass-panel">{t}</Badge>
            ))}
          </div>
          <div className="space-y-4">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-foreground">{s.name}</span>
                  <span className="text-sm text-muted-foreground">{s.progress}%</span>
                </div>
                <Progress value={s.progress} className="h-2" />
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="glass-panel rounded-2xl p-4 w-full max-w-md mx-auto hover-scale">
            <img
              src={profile}
              alt="Portrait of John Doe, UX/UI Designer"
              loading="lazy"
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
