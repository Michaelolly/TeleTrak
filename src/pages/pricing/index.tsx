import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for individuals and small teams getting started",
      features: [
        "Track up to 5 groups",
        "Basic analytics",
        "7-day message history",
        "Email support",
        "Basic reporting",
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "Ideal for growing businesses and active communities",
      features: [
        "Track up to 25 groups",
        "Advanced analytics",
        "30-day message history",
        "Priority email support",
        "Advanced reporting",
        "Custom dashboards",
        "API access",
        "Webhook integrations",
      ],
      buttonText: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with specific requirements",
      features: [
        "Unlimited group tracking",
        "Enterprise analytics",
        "Unlimited message history",
        "24/7 priority support",
        "Custom reporting",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantee",
        "Security features",
      ],
      buttonText: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-mint mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include core features to help you monitor and analyze your Telegram groups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`p-8 bg-forest-light border-mint/10 relative ${
                plan.popular ? "ring-2 ring-mint" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-mint text-forest px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-mint">{plan.price}</span>
                  {plan.period && (
                    <span className="text-white/60 ml-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-white/60">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-mint flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-mint hover:bg-mint/90 text-forest"
                    : "bg-forest hover:bg-forest-dark text-white border border-mint/20"
                }`}
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/60 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-white/60">
            Need a custom plan?{" "}
            <a href="/contact" className="text-mint hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
