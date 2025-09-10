import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PortfolioSection from "@/components/PortfolioSection";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "PHP", "C++"]
    },
    {
      title: "Frontend Technologies",
      skills: ["React", "Vue.js", "Angular", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend Technologies",
      skills: ["Spring Boot", "Laravel", "Node.js", "Express", "Django", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "UML", "Linux", "Jest", "HelpDesk", "Scrum"]
    }
  ];

  return (
    <PortfolioSection id="skills">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Skills & Technologies</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of the technologies and tools I work with, 
          constantly expanding my skillset to stay current with industry trends.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <Card 
            key={index}
            className="border-border"
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
              <h3 className="text-xl font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PortfolioSection>
  );
};

export default SkillsSection;