
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Download, Edit, Trash2, Eye, Calendar, BarChart3, ExternalLink } from "lucide-react";

const ContentLibrary = () => {
  const contentItems = [
    {
      id: 1,
      title: "Monday Motivation Coffee Post",
      type: "text",
      platform: "Twitter",
      status: "published",
      date: "2024-01-15",
      engagement: { likes: 245, shares: 89, comments: 32 },
      preview: "☕ Monday motivation incoming! There's something magical about that first cup...",
      url: "https://twitter.com/example/status/123"
    },
    {
      id: 2,
      title: "Product Showcase Video",
      type: "video",
      platform: "Instagram",
      status: "published",
      date: "2024-01-14",
      engagement: { likes: 1024, shares: 156, comments: 87 },
      preview: "Behind the scenes of our latest product development...",
      url: "https://instagram.com/p/example"
    },
    {
      id: 3,
      title: "Weekly Newsletter Promotion",
      type: "image",
      platform: "LinkedIn",
      status: "scheduled",
      date: "2024-01-16",
      engagement: { likes: 0, shares: 0, comments: 0 },
      preview: "Don't miss our weekly insights on industry trends and best practices...",
      url: null
    },
    {
      id: 4,
      title: "Team Achievement Post",
      type: "text",
      platform: "LinkedIn",
      status: "draft",
      date: "2024-01-17",
      engagement: { likes: 0, shares: 0, comments: 0 },
      preview: "Celebrating our team's incredible achievement this quarter...",
      url: null
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published": return "bg-green-100 text-green-800";
      case "scheduled": return "bg-blue-100 text-blue-800";
      case "draft": return "bg-gray-100 text-gray-800";
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "text": return "📝";
      case "image": return "🖼️";
      case "video": return "🎥";
      default: return "📄";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Content Library</h1>
          <p className="text-gray-600 mt-2">Manage all your generated and published content in one place.</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search your content library..." 
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
              <option>All Platforms</option>
              <option>Twitter</option>
              <option>Instagram</option>
              <option>LinkedIn</option>
              <option>Facebook</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
              <option>All Status</option>
              <option>Published</option>
              <option>Scheduled</option>
              <option>Draft</option>
            </select>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Content</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {contentItems.map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">{getTypeIcon(item.type)}</span>
                        <div>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <CardDescription className="mt-1">
                            {item.date} • {item.platform}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className={getStatusColor(item.status)}>
                        {item.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Content Preview */}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700 line-clamp-3">
                          {item.preview}
                        </p>
                      </div>

                      {/* Platform and Type */}
                      <div className="flex space-x-2">
                        <Badge className={getPlatformColor(item.platform)}>
                          {item.platform}
                        </Badge>
                        <Badge variant="outline">
                          {item.type}
                        </Badge>
                      </div>

                      {/* Engagement Stats */}
                      {item.status === "published" && (
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-lg font-semibold text-gray-900">
                              {item.engagement.likes}
                            </div>
                            <div className="text-xs text-gray-600">Likes</div>
                          </div>
                          <div>
                            <div className="text-lg font-semibold text-gray-900">
                              {item.engagement.shares}
                            </div>
                            <div className="text-xs text-gray-600">Shares</div>
                          </div>
                          <div>
                            <div className="text-lg font-semibold text-gray-900">
                              {item.engagement.comments}
                            </div>
                            <div className="text-xs text-gray-600">Comments</div>
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        {item.url && (
                          <Button size="sm" variant="outline">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        )}
                        <Button size="sm" variant="outline">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="published">
            <Card>
              <CardHeader>
                <CardTitle>Published Content</CardTitle>
                <CardDescription>Content that has been successfully published to your social media platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Your published content will appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scheduled">
            <Card>
              <CardHeader>
                <CardTitle>Scheduled Content</CardTitle>
                <CardDescription>Content that is scheduled for future publication</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Your scheduled content will appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="drafts">
            <Card>
              <CardHeader>
                <CardTitle>Draft Content</CardTitle>
                <CardDescription>Content that is still being worked on</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Edit className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Your draft content will appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Performance Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Content Performance Summary</CardTitle>
            <CardDescription>Overview of your content's performance across all platforms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">247</div>
                <div className="text-sm text-gray-600">Total Posts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">12.5K</div>
                <div className="text-sm text-gray-600">Total Engagement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">8.2%</div>
                <div className="text-sm text-gray-600">Avg Engagement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">23</div>
                <div className="text-sm text-gray-600">Scheduled</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ContentLibrary;
