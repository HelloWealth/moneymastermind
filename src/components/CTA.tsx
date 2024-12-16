import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Take Control of Your Financial Future?
        </h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Download our free wealth-building guide and schedule a consultation with one of our expert financial coaches.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg">
            Schedule Consultation
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
            <Download className="mr-2 h-4 w-4" /> Download Free Guide
          </Button>
        </div>
      </div>
    </section>
  );
};