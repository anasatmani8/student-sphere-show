import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ background: "var(--hero-gradient)" }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-primary/20 shadow-lg"
            style={{ 
              boxShadow: "var(--card-shadow-hover)",
              transition: "var(--transition-smooth)"
            }}
          />
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Computer Science Student
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about creating innovative solutions through code. 
            Exploring the intersection of technology and creativity to build 
            meaningful digital experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            style={{ transition: "var(--transition-smooth)" }}
          >
            Get In Touch
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
            style={{ transition: "var(--transition-smooth)" }}
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:your.email@example.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;