import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PortfolioSection from "@/components/PortfolioSection";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      label: "Location",
      value: "City, Country",
      href: null
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <PortfolioSection id="contact" className="bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects. 
          Let's connect and discuss how we can work together.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
          <div className="space-y-4 mb-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a 
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="prose prose-sm text-muted-foreground">
            <p>
              Feel free to reach out through any of the above channels. I typically 
              respond to emails within 24 hours and am always happy to discuss 
              potential opportunities, collaborations, or just chat about technology.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <Card 
          className="border-border"
          style={{ 
            boxShadow: "var(--card-shadow)",
            transition: "var(--transition-smooth)"
          }}
        >
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-border focus:ring-primary"
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-border focus:ring-primary"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="border-border focus:ring-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                style={{ transition: "var(--transition-smooth)" }}
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </PortfolioSection>
  );
};

export default ContactSection;