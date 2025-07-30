import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PortfolioSection from "@/components/PortfolioSection";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js, featuring user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current conditions and forecasts with interactive charts and location-based services.",
      technologies: ["JavaScript", "Chart.js", "Weather API", "CSS3"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and optimized performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false
    }
  ];

  return (
    <PortfolioSection id="projects" className="bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A selection of projects that showcase my skills in full-stack development, 
          problem-solving, and attention to detail.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={index}
            className={`border-border ${project.featured ? 'ring-2 ring-primary/20' : ''}`}
            style={{ 
              boxShadow: "var(--card-shadow)",
              transition: "var(--transition-smooth)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "var(--card-shadow-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "var(--card-shadow)";
            }}
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                {project.featured && (
                  <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                )}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex}
                    variant="outline"
                    className="text-xs border-primary/30 text-primary"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3 pt-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button 
                  variant="default" 
                  size="sm"
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PortfolioSection>
  );
};

export default ProjectsSection;