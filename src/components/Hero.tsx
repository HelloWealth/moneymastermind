import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Transform Your Financial Future Today
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Expert coaching in personal finance management, life insurance, and proven wealth-building strategies.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Schedule Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};