import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.png";

const items = [
  { date: "2023 - Present", role: "Lead Designer", company: "Tech Corp", logo: logo1 },
  { date: "2021 - 2023", role: "Frontend Developer", company: "Web Studios", logo: logo2 },
];

const Experience = () => {
  return (
    <section id="experience" className="container px-6 py-20">
      <h2 className="font-heading text-3xl md:text-4xl font-bold">Experience</h2>
      <ol className="mt-10 relative border-l border-border ml-4">
        {items.map((item) => (
          <li key={item.company} className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-background border border-border">
              <img src={item.logo} alt={`${item.company} logo`} className="h-4 w-4 object-contain" />
            </span>
            <div className="glass-panel rounded-xl p-5">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <h3 className="text-xl font-semibold">{item.role} · {item.company}</h3>
                <time className="text-sm text-muted-foreground">{item.date}</time>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
