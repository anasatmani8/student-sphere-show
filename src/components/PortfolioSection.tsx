import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PortfolioSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const PortfolioSection = ({ children, className, id }: PortfolioSectionProps) => {
  return (
    <section 
      id={id}
      className={cn(
        "py-20 px-4 sm:px-6 lg:px-8",
        className
      )}
      style={{ padding: "var(--section-padding) 1rem" }}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default PortfolioSection;