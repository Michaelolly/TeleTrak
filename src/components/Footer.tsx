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
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-mint">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-white/60 hover:text-mint transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-white/60 hover:text-mint transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/integrations" className="text-white/60 hover:text-mint transition-colors">Integrations</Link>
              </li>
              <li>
                <Link to="/changelog" className="text-white/60 hover:text-mint transition-colors">Changelog</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-mint">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/message-tracking" className="text-white/60 hover:text-mint transition-colors">Message Tracking</Link>
              </li>
              <li>
                <Link to="/user-analytics" className="text-white/60 hover:text-mint transition-colors">User Analytics</Link>
              </li>
              <li>
                <Link to="/group-insights" className="text-white/60 hover:text-mint transition-colors">Group Insights</Link>
              </li>
              <li>
                <Link to="/reports" className="text-white/60 hover:text-mint transition-colors">Reports & Exports</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-mint">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/60 hover:text-mint transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-mint transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/careers" className="text-white/60 hover:text-mint transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/60 hover:text-mint transition-colors">Blog</Link>
              </li>
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