import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const Landing = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-forest">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-mint font-semibold text-xl">TeleTrack</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-mint hover:text-mint/80"
              onClick={() => window.location.href = "https://oauth.telegram.org/auth?bot_id=7987549773&origin=http://localhost:8084/telegram-callback&request_access=write"}
            >
              Sign In with Telegram
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-2 bg-mint/10 w-fit px-4 py-2 rounded-full border border-mint/20">
              <span className="text-mint text-sm font-medium">Real-time Tracking</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              Track your
              <br />
              Telegram contacts
              <br />
              in real-time
            </h1>
            <p className="text-lg text-white/80 max-w-md">
              Monitor online status, receive notifications, and keep track of your important Telegram contacts effortlessly.
            </p>
            <div className="flex items-center gap-4">
              <Button 
                className="bg-mint hover:bg-mint/90 text-forest font-medium px-8 py-6 text-lg"
                onClick={() => window.location.href = "https://oauth.telegram.org/auth?bot_id=7987549773&origin=http://localhost:8084/telegram-callback&request_access=write"}
              >
                Connect with Telegram <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-mint/20 text-mint hover:bg-mint/10"
                onClick={() => navigate("/about")}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-mint/20 rounded-2xl blur opacity-30" />
            <img
              src="/placeholder.svg"
              alt="Telegram contact tracking dashboard preview"
              className="relative rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-10 -left-10 bg-forest-light p-6 rounded-xl shadow-xl border border-mint/10">
              <p className="text-mint text-4xl font-bold">Real-time</p>
              <p className="text-white/80">Contact tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-forest-light">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border border-mint/10 bg-forest"
              >
                <h3 className="text-mint font-semibold text-xl mb-4">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-mint/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              2024 TeleTrack. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Button variant="link" className="text-white/60 hover:text-mint">
                Privacy Policy
              </Button>
              <Button variant="link" className="text-white/60 hover:text-mint">
                Terms of Service
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    title: "Real-time Status",
    description: "Monitor your contacts' online status instantly with live updates.",
  },
  {
    title: "Smart Notifications",
    description: "Get notified when specific contacts come online or go offline.",
  },
  {
    title: "Activity Logs",
    description: "Track and analyze contact activity patterns over time.",
  },
]

export default Landing