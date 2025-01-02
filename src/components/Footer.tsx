import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 px-4 border-t border-mint/10 bg-forest-light">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-mint">TeleTrack</h3>
            <p className="text-white/60 max-w-xs">
              Advanced Telegram analytics and monitoring platform powered by cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-white/60 hover:text-mint transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-white/60 hover:text-mint transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-white/60 hover:text-mint transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://teletrack.com" className="text-white/60 hover:text-mint transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-mint">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/analytics" className="text-white/60 hover:text-mint transition-colors">Analytics</Link></li>
              <li><Link to="/pricing" className="text-white/60 hover:text-mint transition-colors">Pricing</Link></li>
              <li><Link to="/api" className="text-white/60 hover:text-mint transition-colors">API Access</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-mint">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/documentation" className="text-white/60 hover:text-mint transition-colors">Documentation</Link></li>
              <li><Link to="/developers" className="text-white/60 hover:text-mint transition-colors">Developers</Link></li>
              <li><Link to="/integrations" className="text-white/60 hover:text-mint transition-colors">Integrations</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-mint">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-white/60 hover:text-mint transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white/60 hover:text-mint transition-colors">Terms of Service</Link></li>
              <li><Link to="/security" className="text-white/60 hover:text-mint transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-mint/10 mt-16 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} TeleTrack. Empowering digital connections.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;