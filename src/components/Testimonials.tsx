import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-white/80">Join thousands of satisfied users tracking their Telegram contacts</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "This app has revolutionized how I stay connected with my Telegram contacts. The real-time tracking is incredible!",
              author: "Sarah Chen",
              role: "Business Owner",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            },
            {
              quote: "The activity logs feature helps me understand when my contacts are most active. It's a game-changer!",
              author: "Michael Rodriguez",
              role: "Digital Marketer",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            },
            {
              quote: "Simple, efficient, and respects privacy. Exactly what I needed for managing my Telegram contacts.",
              author: "Emily Watson",
              role: "Content Creator",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-forest-light p-8 rounded-xl relative">
              <Quote className="text-mint w-8 h-8 mb-4" />
              <p className="text-white/90 mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;