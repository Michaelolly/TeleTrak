import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleTelegramLogin = () => {
    window.location.href = "https://oauth.telegram.org/auth?bot_id=7987549773&origin=https://teletrak.vercel.app/telegram-callback&request_access=write";
  };

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center gap-2 bg-mint/10 w-fit px-4 py-2 rounded-full border border-mint/20">
            <MessageCircle className="w-4 h-4 text-mint animate-pulse" />
            <span className="text-mint text-sm font-medium">Real-time Tracking</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white animate-slide-in-right">
            Smart Contact
            <br />
            Monitoring for
            <br />
            <span className="text-mint">Telegram</span>
          </h1>
          <p className="text-lg text-white/80 max-w-md animate-fade-in">
            Advanced analytics and real-time monitoring for your Telegram network. Stay connected with intelligent tracking and instant notifications.
          </p>
          <div className="flex items-center gap-4">
            <Button 
              onClick={handleTelegramLogin}
              className="bg-mint hover:bg-mint/90 text-forest font-medium px-8 py-6 text-lg animate-scale-in"
            >
              Connect with Telegram <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-mint/20 text-mint hover:bg-mint/10 animate-scale-in"
              onClick={() => navigate("/features")}
            >
              View Features
            </Button>
          </div>
        </div>
        <div className="relative animate-fade-in">
          <div className="absolute -inset-0.5 bg-mint/20 rounded-2xl blur opacity-30" />
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Modern code interface"
            className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute -bottom-10 -left-10 bg-forest-light p-6 rounded-xl shadow-xl border border-mint/10 animate-bounce-slow">
            <p className="text-mint text-4xl font-bold">256-bit</p>
            <p className="text-white/80">Encryption</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;