import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Chart from "@/components/ui/chart";
import { ArrowUpRight, Users, MessageSquare, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Analytics = () => {
  const messageData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Messages",
        data: [65, 59, 80, 81, 56, 89, 70],
        borderColor: "#10B981",
      },
    ],
  };

  const userData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Users",
        data: [28, 48, 40, 19, 86, 27, 50],
        borderColor: "#10B981",
      },
    ],
  };

  const engagementData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Engagement",
        data: [45, 52, 38, 64, 42, 58, 48],
        borderColor: "#10B981",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-mint mb-2">Analytics Dashboard</h1>
          <p className="text-white/60">
            Detailed analytics and insights for your Telegram groups
          </p>
        </div>

        <Tabs defaultValue="messages" className="space-y-8">
          <TabsList className="bg-forest-light border-mint/10">
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
          </TabsList>

          <TabsContent value="messages">
            <Card className="p-6 bg-forest-light border-mint/10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Message Activity</h3>
                <div className="flex items-center text-green-400">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  +15.3%
                </div>
              </div>
              <Chart data={messageData} />
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card className="p-6 bg-forest-light border-mint/10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">User Activity</h3>
                <div className="flex items-center text-green-400">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  +8.7%
                </div>
              </div>
              <Chart data={userData} />
            </Card>
          </TabsContent>

          <TabsContent value="engagement">
            <Card className="p-6 bg-forest-light border-mint/10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Engagement Rate</h3>
                <div className="flex items-center text-green-400">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  +12.1%
                </div>
              </div>
              <Chart data={engagementData} />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Analytics;
