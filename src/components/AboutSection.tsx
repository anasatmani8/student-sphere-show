import { Card, CardContent } from "@/components/ui/card";
import PortfolioSection from "@/components/PortfolioSection";
import { Code, Database, Globe, Cpu } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Full-Stack Development",
      description: "Experienced in both frontend and backend technologies"
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Data Structures",
      description: "Strong foundation in algorithms and data structures"
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Web Technologies",
      description: "Modern web frameworks and responsive design"
    },
    {
      icon: <Cpu className="h-6 w-6 text-primary" />,
      title: "Problem Solving",
      description: "Analytical thinking and creative solution development"
    }
  ];

  return (
    <PortfolioSection id="about" className="bg-muted/30">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">About Me</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I'm a dedicated Computer Science student with a passion for creating 
              innovative software solutions. Currently pursuing my degree, I've 
              developed a strong foundation in programming, algorithms, and 
              software engineering principles.
            </p>
            <p>
              My journey in technology began with curiosity about how things work, 
              and has evolved into a deep appreciation for clean code, user 
              experience, and the power of technology to solve real-world problems.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies, contributing 
              to open-source projects, and staying up-to-date with the latest 
              industry trends and best practices.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300"
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
              <CardContent className="p-6">
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PortfolioSection>
  );
};

export default AboutSection;