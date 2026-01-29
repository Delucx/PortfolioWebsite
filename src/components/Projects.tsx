import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Beast of Reverie",
      description:
        "A group project where I developed core gameplay mechanics including player movement and advanced traversal systems such as grappling and gliding. Worked on animation systems (sprite-based and procedural) and collaborated in a team environment to plan, implement, and iterate gameplay features.",
      image: "https://images.unsplash.com/photo-1711936385455-7843da8cbe47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwYmVhc3QlMjBjcmVhdHVyZSUyMGdhbWV8ZW58MXx8fHwxNzY5NzAwMjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Godot", "GDScript", "Team Project"],
      github: "#",
      demo: null,
    },
    {
      title: "Godot 2D Game Platform",
      description:
        "A personal project where I created a simple game to expand my skills with a basic understanding of Godot and GDScript to construct a complete 2D platform game and learn the core mechanics.",
      image: "https://images.unsplash.com/photo-1642678730255-40a9e1847fb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXhlbCUyMGFydCUyMHBsYXRmb3JtZXIlMjBnYW1lfGVufDF8fHx8MTc2OTcwMDI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Godot", "GDScript", "2D", "Personal Project"],
      github: "#",
      demo: null,
    },
    {
      title: "Godot 4 Mini Game Projects",
      description:
        "A collection of simple games developed to gain a basic understanding of Godot by learning the basics of programming fundamentals through practical game development.",
      image: "https://images.unsplash.com/photo-1673350808686-209dc177c898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMGdhbWUlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3Njk1ODA2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Godot", "GDScript", "Personal Project"],
      github: "#",
      demo: null,
    },
    {
      title: "ITech OJT Feedback and Management Portal",
      description:
        "An academic project where I worked as a back-end developer to create a website that handles students' feedback forms and documents, with automated data analytics management for the OJT Coordinator.",
      image: "https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGJhY2tlbmQlMjBjb2RlfGVufDF8fHx8MTc2OTcwMDI3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["PostgreSQL", "MySQL", "Python", "JavaScript", "NodeJs", "Git"],
      github: "#",
      demo: null,
    },
    {
      title: "Number Guessing Game",
      description:
        "A game website developed using HTML, CSS, and JavaScript as an activity project for AWS Cloud Club. Front-end development practice focusing on interactive game logic.",
      image: "https://images.unsplash.com/photo-1740062446976-94a8837e0dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudW1iZXIlMjBndWVzc2luZyUyMGdhbWUlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY5NzAwMjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["HTML", "CSS", "JavaScript", "Personal Project"],
      github: "#",
      demo: null,
    },
    {
      title: "Rock-Paper-Scissor",
      description:
        "A game website developed using HTML, CSS, and JavaScript as an activity project for AWS Cloud Club. Front-end development practice creating a classic game with interactive UI.",
      image: "https://images.unsplash.com/photo-1614032686099-e648d6dea9b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwcGFwZXIlMjBzY2lzc29ycyUyMGdhbWV8ZW58MXx8fHwxNzY5NzAwMjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["HTML", "CSS", "JavaScript", "Personal Project"],
      github: "#",
      demo: null,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Projects and experiences from my journey in game and web development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group bg-card border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="border-primary/30 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild className="border-primary/30 hover:bg-primary/10">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Play className="h-4 w-4 mr-2" />
                          Play
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}