import React from "react";
import { Bell, Shield, Activity } from "lucide-react";

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Powerful Features
          </h2>
          <p className="text-white/80">Advanced tools to enhance your Telegram experience</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Bell,
              title: "Instant Alerts",
              description: "Get notified the moment your important contacts come online",
            },
            {
              icon: Activity,
              title: "Activity Analytics",
              description: "Track and analyze online patterns with detailed insights",
            },
            {
              icon: Shield,
              title: "Secure & Private",
              description: "Your data is encrypted and never shared with third parties",
            },
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-forest-light p-8 rounded-xl border border-mint/10 hover:border-mint/30 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center mb-6 animate-bounce-slow">
                {React.createElement(feature.icon, { className: "w-6 h-6 text-forest" })}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;