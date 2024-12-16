import { Wallet, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Master Your Money",
    description: "Take control of your financial future with personalized coaching that puts you in the driver's seat.",
    icon: Wallet,
  },
  {
    title: "Protect What Matters",
    description: "Navigate the complex world of life insurance with clarity and confidence.",
    icon: Shield,
  },
  {
    title: "Build Lasting Wealth",
    description: "Transform your financial dreams into reality with proven wealth-building strategies.",
    icon: TrendingUp,
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Personalized Financial Coaching for Every Stage
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};