import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const projects = [
  { title: "Project One", image: project1, tags: ["AI", "Web"], link: "#" },
  { title: "Project Two", image: project2, tags: ["ML", "App"], link: "#" },
  { title: "Project Three", image: project3, tags: ["Design", "UX"], link: "#" },
];

const Projects = () => {
  const allTags = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.tags))),
    []
  );
  const [active, setActive] = useState<string | 'All'>('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.tags.includes(active as string));

  return (
    <section id="projects" className="container px-6 py-20">
      <header className="flex items-end justify-between gap-6 flex-wrap">
        <h2 className="font-heading text-3xl md:text-4xl font-bold">Projects</h2>
        <div className="flex flex-wrap gap-2">
          <Button variant={active === 'All' ? 'hero' : 'glass'} size="sm" onClick={() => setActive('All')}>All</Button>
          {allTags.map(t => (
            <Button key={t} variant={active === t ? 'hero' : 'glass'} size="sm" onClick={() => setActive(t)}>
              {t}
            </Button>
          ))}
        </div>
      </header>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <a key={p.title} href={p.link} className="group block">
            <article className="glass-panel rounded-2xl overflow-hidden h-full">
              <div className="aspect-[3/2] overflow-hidden">
                <img src={p.image} alt={`${p.title} preview image`} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
