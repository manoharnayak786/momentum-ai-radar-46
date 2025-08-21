import { DashboardLayout } from "@/components/DashboardLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  FileText,
  Calendar,
  BarChart3,
  Zap,
  Eye,
} from "lucide-react";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Welcome back! Here's what's happening with your social media.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Content Generated
              </CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">247</div>
              <p className="text-xs text-muted-foreground">
                +15% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Posts Published
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">
                +8% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Engagement Rate
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.5%</div>
              <p className="text-xs text-muted-foreground">
                +2.3% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Trending Opportunities
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">5 high priority</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-indigo-600" />
              <span>Quick Actions</span>
            </CardTitle>
            <CardDescription>
              Jump into your most common workflows
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="h-20 flex-col space-y-2 bg-indigo-600 hover:bg-indigo-700">
                <FileText className="h-6 w-6" />
                <span>Generate Content</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <TrendingUp className="h-6 w-6" />
                <span>Explore Trends</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Calendar className="h-6 w-6" />
                <span>Schedule Posts</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity & Trending Topics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Content</CardTitle>
              <CardDescription>Your latest generated content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-teal-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">AI-Generated Post #{item}</h4>
                      <p className="text-sm text-gray-600">
                        Created 2 hours ago
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Trending Now</CardTitle>
              <CardDescription>Hot topics for your industry</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    topic: "#AITrends2025",
                    engagement: "High",
                    color: "bg-red-500",
                  },
                  {
                    topic: "#TechInnovation",
                    engagement: "Medium",
                    color: "bg-yellow-500",
                  },
                  {
                    topic: "#DigitalMarketing",
                    engagement: "Rising",
                    color: "bg-green-500",
                  },
                ].map((trend, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-3 h-3 rounded-full ${trend.color}`}
                      ></div>
                      <span className="font-medium">{trend.topic}</span>
                    </div>
                    <span className="text-sm text-gray-600">
                      {trend.engagement}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
