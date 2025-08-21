
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Users, Eye, Download, Calendar } from "lucide-react";

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
            <p className="text-gray-600 mt-2">Track your content performance and audience engagement.</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Last 30 Days
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45.2K</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+12%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.7%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+2.3%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Followers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+18%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Posts Published</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+8%</span> from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Engagement Over Time</CardTitle>
              <CardDescription>Daily engagement metrics for the past 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-indigo-400 mx-auto mb-4" />
                  <p className="text-gray-600">Engagement Chart</p>
                  <p className="text-sm text-gray-500">Interactive chart would go here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Platform Performance</CardTitle>
              <CardDescription>Compare performance across different platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Badge className="bg-blue-100 text-blue-800">Twitter</Badge>
                    <span className="text-sm">Engagement Rate</span>
                  </div>
                  <span className="font-medium">12.4%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Badge className="bg-pink-100 text-pink-800">Instagram</Badge>
                    <span className="text-sm">Engagement Rate</span>
                  </div>
                  <span className="font-medium">9.8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-pink-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Badge className="bg-indigo-100 text-indigo-800">LinkedIn</Badge>
                    <span className="text-sm">Engagement Rate</span>
                  </div>
                  <span className="font-medium">6.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Performing Content */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Content</CardTitle>
            <CardDescription>Your best-performing posts from the last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Monday Motivation Coffee Post", platform: "Twitter", engagement: "2.4K", rate: "15.2%" },
                { title: "Product Showcase Video", platform: "Instagram", engagement: "1.8K", rate: "12.8%" },
                { title: "Industry Insights Article", platform: "LinkedIn", engagement: "987", rate: "8.9%" },
                { title: "Behind the Scenes Photo", platform: "Instagram", engagement: "756", rate: "7.2%" }
              ].map((post, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{post.title}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline">{post.platform}</Badge>
                      <span className="text-sm text-gray-600">{post.engagement} engagements</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-green-600">{post.rate}</div>
                    <div className="text-sm text-gray-600">engagement rate</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Audience Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Audience Demographics</CardTitle>
              <CardDescription>Age and gender breakdown of your followers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">18-24</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                    <span className="text-sm w-12 text-right">25%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">25-34</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <span className="text-sm w-12 text-right">45%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">35-44</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                    <span className="text-sm w-12 text-right">20%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">45+</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                    <span className="text-sm w-12 text-right">10%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Best Posting Times</CardTitle>
              <CardDescription>When your audience is most active</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">9:00 AM</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="text-sm w-16 text-right">High</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">1:00 PM</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <span className="text-sm w-16 text-right">Medium</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">6:00 PM</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                    <span className="text-sm w-16 text-right">High</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">9:00 PM</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '55%' }}></div>
                    </div>
                    <span className="text-sm w-16 text-right">Medium</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
