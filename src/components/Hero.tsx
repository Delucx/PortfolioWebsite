import { Github, Linkedin, Mail, Gamepad2 } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <Gamepad2 className="h-5 w-5 text-primary" />
              <span className="text-sm text-primary">Game Developer</span>
            </div>
            <h1 className="text-5xl md:text-7xl tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Julius Miguel Rayray
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Student & Aspiring Game Programmer
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crafting interactive experiences with Godot Engine. Passionate about game design,
            mechanics, and bringing creative ideas to life through code.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button onClick={() => scrollToSection("projects")} size="lg" className="group">
              View Projects
              <Gamepad2 className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
            >
              Get in Touch
            </Button>
          </div>

          <div className="flex gap-4 justify-center pt-8">
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10">
              <a href="https://github.com/Delucx" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10">
              <a href="https://www.linkedin.com/in/julius-rayray-2380a925b/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10">
              <a href="jlstrayray@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}