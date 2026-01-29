import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Gamepad2, Code2, Puzzle } from "lucide-react";
import { Card } from "./ui/card";
import profilePic from "@/assets/Formal photo.jpg";

export function About() {
  const highlights = [
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Building games with Godot Engine and GDScript",
    },
    {
      icon: Code2,
      title: "Programming Student",
      description: "Learning game programming fundamentals and design patterns",
    },
    {
      icon: Puzzle,
      title: "Problem Solver",
      description: "Turning game ideas into playable experiences",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A student developer passionate about creating games
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I’m a Computer Engineering student from the Polytechnic University of the Philippines 
                with a strong interest in game development and programming. Now I'm focusing on 
                mastering the Godot Engine, learning everything from 2D game mechanics to physics systems.
              </p>
              <p className="text-muted-foreground">
                I’m passionate about turning ideas into interactive experiences and enjoy collaborating 
                with teams to design, implement, and refine gameplay features. I’m currently seeking 
                opportunities to grow through hands-on experience and contribute to meaningful game projects.
              </p>
            </div>

            <div className="relative aspect-square rounded-lg overflow-hidden border border-primary/20">
              <ImageWithFallback
                src={profilePic}
                alt="Profile Photo"
                className="w-full h-screen object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 space-y-3 bg-card border-primary/20 hover:border-primary/40 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}