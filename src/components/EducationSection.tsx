import { Card, CardContent } from "@/components/ui/card";
import PortfolioSection from "@/components/PortfolioSection";
import { GraduationCap, Calendar, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2021 - 2025",
      status: "In Progress",
      description: "Focusing on software engineering, algorithms, and data structures. Current GPA: 3.8/4.0",
      highlights: ["Data Structures & Algorithms", "Software Engineering", "Database Systems", "Machine Learning"]
    },
    {
      degree: "High School Diploma",
      institution: "Science & Technology High School",
      period: "2017 - 2021",
      status: "Completed",
      description: "Graduated with honors, specializing in Mathematics and Computer Science.",
      highlights: ["Valedictorian", "Computer Science Club President", "Mathematics Competition Winner"]
    }
  ];

  const certifications = [
    "AWS Cloud Practitioner",
    "Google Analytics Certified",
    "MongoDB University Certificate",
    "React Professional Developer"
  ];

  return (
    <PortfolioSection id="education">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Education & Certifications</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My academic journey and professional certifications that have shaped 
          my understanding of computer science and software development.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Education Timeline */}
        <div className="lg:col-span-2 space-y-6">
          {education.map((item, index) => (
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
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-foreground">{item.degree}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.status === 'In Progress' 
                          ? 'bg-accent/20 text-accent' 
                          : 'bg-primary/20 text-primary'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    
                    <p className="text-primary font-medium mb-2">{item.institution}</p>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{item.period}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-3">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, highlightIndex) => (
                        <span 
                          key={highlightIndex}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <Card 
            className="border-border h-fit"
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
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
              </div>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PortfolioSection>
  );
};

export default EducationSection;