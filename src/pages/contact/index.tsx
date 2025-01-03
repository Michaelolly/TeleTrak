import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-mint" />,
      title: "Email",
      description: "Our friendly team is here to help.",
      contact: "support@teletrack.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-mint" />,
      title: "Phone",
      description: "Mon-Fri from 8am to 5pm.",
      contact: "+1 (555) 000-0000",
    },
    {
      icon: <MapPin className="h-6 w-6 text-mint" />,
      title: "Office",
      description: "Come say hello at our office.",
      contact: "123 Market St, San Francisco, CA",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-mint" />,
      title: "Live Chat",
      description: "Available 24/7 for urgent issues.",
      contact: "Start a conversation",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-mint mb-4">Get in Touch</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Have a question about TeleTrack? We're here to help. Send us a message or
            contact us using one of the methods below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="p-8 bg-forest-light border-mint/10">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    First Name
                  </label>
                  <Input
                    type="text"
                    placeholder="John"
                    className="bg-forest border-mint/20 text-white placeholder:text-white/40"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Doe"
                    className="bg-forest border-mint/20 text-white placeholder:text-white/40"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-forest border-mint/20 text-white placeholder:text-white/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  placeholder="How can we help?"
                  className="bg-forest border-mint/20 text-white placeholder:text-white/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Your message..."
                  className="bg-forest border-mint/20 text-white placeholder:text-white/40 min-h-[150px]"
                />
              </div>

              <Button className="w-full bg-mint hover:bg-mint/90 text-forest">
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Other Ways to Connect</h2>
            <div className="grid grid-cols-1 gap-6">
              {contactMethods.map((method) => (
                <Card
                  key={method.title}
                  className="p-6 bg-forest-light border-mint/10 hover:border-mint/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-mint/10 rounded-lg">{method.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {method.title}
                      </h3>
                      <p className="text-white/60 mb-2">{method.description}</p>
                      <p className="text-mint">{method.contact}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/60">
            By submitting this form, you agree to our{" "}
            <a href="/privacy" className="text-mint hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms" className="text-mint hover:underline">
              Terms of Service
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
