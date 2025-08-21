
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Eye, Edit, Trash2, Plus } from "lucide-react";

const ContentCalendar = () => {
  const scheduledPosts = [
    { id: 1, title: "Monday Motivation Coffee Post", platform: "Twitter", time: "09:00", status: "scheduled", date: "2024-01-15" },
    { id: 2, title: "Product Showcase Video", platform: "Instagram", time: "14:30", status: "draft", date: "2024-01-15" },
    { id: 3, title: "Weekly Newsletter Promotion", platform: "LinkedIn", time: "10:00", status: "scheduled", date: "2024-01-16" },
    { id: 4, title: "Behind the Scenes Content", platform: "Instagram", time: "16:00", status: "pending", date: "2024-01-17" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled": return "bg-green-100 text-green-800";
      case "draft": return "bg-gray-100 text-gray-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "Twitter": return "bg-blue-100 text-blue-800";
      case "Instagram": return "bg-pink-100 text-pink-800";
      case "LinkedIn": return "bg-indigo-100 text-indigo-800";
      case "Facebook": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Content Calendar</h1>
            <p className="text-gray-600 mt-2">Schedule and manage your social media content.</p>
          </div>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </div>

        {/* Calendar View Options */}
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Month View
          </Button>
          <Button variant="outline" size="sm">Week View</Button>
          <Button variant="outline" size="sm">Day View</Button>
          <Button variant="outline" size="sm">List View</Button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Calendar */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>January 2024</span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Previous</Button>
                    <Button variant="outline" size="sm">Next</Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="p-2 text-center font-medium text-gray-500 text-sm">
                      {day}
                    </div>
                  ))}
                  
                  {/* Calendar Days */}
                  {Array.from({ length: 35 }, (_, i) => {
                    const date = i + 1;
                    const hasContent = [15, 16, 17, 20, 23].includes(date);
                    return (
                      <div key={i} className={`p-2 min-h-[80px] border rounded-lg ${hasContent ? 'bg-blue-50' : 'bg-gray-50'}`}>
                        <div className="text-sm font-medium text-gray-700 mb-1">{date <= 31 ? date : ''}</div>
                        {hasContent && (
                          <div className="space-y-1">
                            <div className="bg-indigo-100 text-indigo-800 text-xs px-1 py-0.5 rounded">
                              Twitter
                            </div>
                            {date === 16 && (
                              <div className="bg-pink-100 text-pink-800 text-xs px-1 py-0.5 rounded">
                                Instagram
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <Clock className="h-4 w-4 text-green-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Monday Motivation</p>
                      <p className="text-xs text-gray-600">9:00 AM - Twitter</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <Clock className="h-4 w-4 text-yellow-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Product Showcase</p>
                      <p className="text-xs text-gray-600">2:30 PM - Instagram</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Scheduled Posts</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Draft Posts</span>
                    <span className="font-medium">5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Published Today</span>
                    <span className="font-medium">3</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scheduled Posts List */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Posts</CardTitle>
            <CardDescription>Manage your scheduled and draft content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {scheduledPosts.map((post) => (
                <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{post.title}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge className={getPlatformColor(post.platform)}>{post.platform}</Badge>
                        <Badge className={getStatusColor(post.status)}>{post.status}</Badge>
                        <span className="text-sm text-gray-500">{post.date} at {post.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ContentCalendar;
