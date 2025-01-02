import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bell, Settings, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-mint hover:text-mint/90 transition-colors">
          TeleTrack
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/analytics" className="text-white/90 hover:text-mint transition-colors">
            Analytics
          </Link>
          <div className="relative group">
            <button className="text-white/90 hover:text-mint transition-colors flex items-center">
              Features <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-forest-light rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-mint/10">
              <Link to="/realtime-tracking" className="block px-4 py-2 text-white/90 hover:bg-mint/10 hover:text-mint">
                Real-time Tracking
              </Link>
              <Link to="/notifications" className="block px-4 py-2 text-white/90 hover:bg-mint/10 hover:text-mint">
                Smart Notifications
              </Link>
              <Link to="/analytics-dashboard" className="block px-4 py-2 text-white/90 hover:bg-mint/10 hover:text-mint">
                Analytics Dashboard
              </Link>
            </div>
          </div>
          <Link to="/pricing" className="text-white/90 hover:text-mint transition-colors">
            Pricing
          </Link>
          <Link to="/developers" className="text-white/90 hover:text-mint transition-colors">
            Developers
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-white/90 hover:text-mint">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white/90 hover:text-mint">
            <Settings className="h-5 w-5" />
          </Button>
          <Button className="bg-mint hover:bg-mint/90 text-forest font-medium">
            Sign in with Telegram
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;