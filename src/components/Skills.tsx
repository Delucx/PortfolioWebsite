import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        "GDScript",
        "C#",
        "Python",
        "JavaScript",
        "HTML/CSS",
      ],
    },
    {
      title: "Development Tools",
      skills: [
        "Godot",
        "Visual Studio",
        "Visual Studio Code",
        "Git",
        "Github",
      ],
    },
    {
      title: "Databases",
      skills: [
        "MySQL",
        "PostgreSQL",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem-Solving",
        "Creativity",
        "Teamwork",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tools and techniques I'm learning and using in game development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 space-y-4 bg-card border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10">
                <h3 className="text-xl">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="px-3 py-1 bg-primary/10 text-foreground border-primary/20 hover:bg-primary/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}