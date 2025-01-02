import React from "react";
import { Bell, Clock, Shield } from "lucide-react";

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Key Features
          </h2>
          <p className="text-white/80">Stay connected with your Telegram contacts like never before</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Bell,
              title: "Real-time Notifications",
              description: "Get instant alerts when your contacts come online or go offline",
            },
            {
              icon: Clock,
              title: "Activity History",
              description: "Track and analyze contact activity patterns over time",
            },
            {
              icon: Shield,
              title: "Privacy Focused",
              description: "Secure tracking with complete respect for user privacy",
            },
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-forest-light p-8 rounded-xl border border-mint/10"
            >
              <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center mb-6">
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