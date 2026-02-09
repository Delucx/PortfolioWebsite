import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";

// Importing images
import beastCover from "@/assets/Beast_of_Reverie_Cover.jpg";
import platformCover from "@/assets/2D_Platform_Cover.jpg";
import miniGamesCover from "@/assets/Godot_4_Mini_Games_Cover.jpg";
import ojtCover from "@/assets/OJT_Cover.jpg";
import numberGuessingCover from "@/assets/Number_Guessing_Cover.jpg";
import rpsCover from "@/assets/Rock_Paper_Scissor_Cover.jpg";
import flip7Cover from "@/assets/Flip7Cover.png";
import mineSweeperCover from "@/assets/MineSweeperCover.png";
import ticTacToeCover from "@/assets/tictactoe_cover.png";

export function Projects() {
  const projects = [
    {
      title: "Beast of Reverie",
      description:
        "A group project where I developed core gameplay mechanics including player movement and advanced traversal systems such as grappling and gliding. Worked on animation systems (sprite-based and procedural) and collaborated in a team environment to plan, implement, and iterate gameplay features.",
      image: beastCover,
      tags: ["Godot", "GDScript", "Team Project"],
      github: null,
      demo: null,
    },
    {
      title: "Godot 2D Game Platform",
      description:
        "A personal project where I created a simple game to expand my skills with a basic understanding of Godot and GDScript to construct a complete 2D platform game and learn the core mechanics.",
      image: platformCover,
      tags: ["Godot", "GDScript", "2D", "Personal Project"],
      github: null,
      demo: null,
    },
    {
      title: "Godot 4 Mini Game Projects",
      description:
        "A collection of simple games developed to gain a basic understanding of Godot by learning the basics of programming fundamentals through practical game development.",
      image: miniGamesCover,
      tags: ["Godot", "GDScript", "Personal Project"],
      github: null,
      demo: null,
    },
    {
      title: "ITech OJT Feedback and Management Portal",
      description:
        "An academic project where I worked as a back-end developer to create a website that handles students' feedback forms and documents, with automated data analytics management for the OJT Coordinator.",
      image: ojtCover,
      tags: ["PostgreSQL", "MySQL", "Python", "JavaScript", "NodeJs", "Git"],
      github: null,
      demo: null,
    },
    {
      title: "Number Guessing Game",
      description:
        "A game website developed using HTML, CSS, and JavaScript as an activity project for AWS Cloud Club. Front-end development practice focusing on interactive game logic.",
      image: numberGuessingCover,
      tags: ["HTML", "CSS", "JavaScript", "Personal Project"],
      github: "https://github.com/Delucx/Guess-the-Number",
      demo: null,
    },
    {
      title: "Rock-Paper-Scissor",
      description:
        "A game website developed using HTML, CSS, and JavaScript as an activity project for AWS Cloud Club. Front-end development practice creating a classic game with interactive UI.",
      image: rpsCover,
      tags: ["HTML", "CSS", "JavaScript", "Personal Project"],
      github: "https://github.com/Delucx/Rock-Paper-Scissor",
      demo: null,
    },
    {
      title: "Flip 7",
      description:
        "A card game where players compete to reach the target score by drawing cards, banking points, and avoiding busts. Features unique mechanics like the Flip 7 bonus.",
      image: flip7Cover,
      tags: ["Card Game", "Multiplayer", "Windows"],
      github: null,
      demo: "https://delucx.itch.io/flip-7",
    },
    {
      title: "Mine Sweeper",
      description:
        "A simple puzzle game created using assets from Chequered Ink. Available for both Windows and Android.",
      image: mineSweeperCover,
      tags: ["Puzzle", "Windows", "Android"],
      github: null,
      demo: "https://delucx.itch.io/mine-sweeper",
    },
    {
      title: "Tic Tac Toe",
      description:
        "A cross-platform game built with Godot 4.x. Features PvP, PvE, and online multiplayer modes with unique mechanics to prevent traditional draws.",
      image: ticTacToeCover,
      tags: ["Godot", "Multiplayer", "Windows", "Android"],
      github: null,
      demo: "https://delucx.itch.io/tic-tac-toe",
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
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-primary/30 hover:bg-primary/10"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
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