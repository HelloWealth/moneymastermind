import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="container mx-auto px-4 py-6">
        <Logo />
      </header>
      <Hero />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;