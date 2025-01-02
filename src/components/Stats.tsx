const Stats = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { value: "50K+", label: "Active Users" },
            { value: "24/7", label: "Monitoring" },
            { value: "100%", label: "Privacy Rate" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="space-y-2 animate-fade-in hover:transform hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <p className="text-4xl font-bold text-mint">{stat.value}</p>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;