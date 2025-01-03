import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Chart from "@/components/ui/chart";
import { ArrowUpRight, Users, MessageSquare, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DashboardPage = () => {
  const messageData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Messages",
        data: [65, 59, 80, 81, 56, 89],
        borderColor: "#10B981",
      },
    ],
  };

  const userData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Users",
        data: [28, 48, 40, 19, 86, 27],
        borderColor: "#10B981",
      },
    ],
  };

  const stats = [
    {
      title: "Total Users",
      value: "2,345",
      change: "+12.5%",
      icon: Users,
    },
    {
      title: "Total Messages",
      value: "12.5K",
      change: "+8.2%",
      icon: MessageSquare,
    },
    {
      title: "Active Groups",
      value: "128",
      change: "+3.1%",
      icon: Activity,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-mint mb-2">Dashboard</h1>
          <p className="text-white/60">
            Monitor your Telegram groups' activity and user engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => (
            <Card
              key={stat.title}
              className="p-6 bg-forest-light border-mint/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-mint/10 rounded-lg">
                  <stat.icon className="h-6 w-6 text-mint" />
                </div>
                <div className="flex items-center text-green-400">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  {stat.change}
                </div>
              </div>
              <h3 className="text-white/60 mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6 bg-forest-light border-mint/10">
            <h3 className="text-xl font-bold text-white mb-6">Message Activity</h3>
            <Chart data={messageData} />
          </Card>

          <Card className="p-6 bg-forest-light border-mint/10">
            <h3 className="text-xl font-bold text-white mb-6">User Growth</h3>
            <Chart data={userData} />
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
