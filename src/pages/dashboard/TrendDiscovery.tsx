
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Search, Filter, Lightbulb, BarChart3, Globe, Clock } from "lucide-react";

const TrendDiscovery = () => {
  const trends = [
    {
      id: 1,
      keyword: "#AITrends2024",
      category: "Technology",
      velocity: "Exploding",
      engagement: "245K",
      sentiment: "Positive",
      description: "Artificial Intelligence trends gaining massive traction across social media platforms.",
      relatedTerms: ["machine learning", "chatbots", "automation"]
    },
    {
      id: 2,
      keyword: "Sustainable Living",
      category: "Lifestyle",
      velocity: "Rising",
      engagement: "89K",
      sentiment: "Positive",
      description: "Growing interest in eco-friendly lifestyle choices and sustainable products.",
      relatedTerms: ["eco-friendly", "zero waste", "green products"]
    },
    {
      id: 3,
      keyword: "Remote Work Tips",
      category: "Business",
      velocity: "Steady",
      engagement: "156K",
      sentiment: "Neutral",
      description: "Consistent demand for remote work productivity and wellness advice.",
      relatedTerms: ["work from home", "productivity", "digital nomad"]
    },
    {
      id: 4,
      keyword: "Plant-Based Recipes",
      category: "Food & Health",
      velocity: "Rising",
      engagement: "78K",
      sentiment: "Positive",
      description: "Increased interest in plant-based cooking and nutrition.",
      relatedTerms: ["vegan", "healthy eating", "meal prep"]
    }
  ];

  const getVelocityColor = (velocity: string) => {
    switch (velocity) {
      case "Exploding": return "bg-red-100 text-red-800";
      case "Rising": return "bg-green-100 text-green-800";
      case "Steady": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "Positive": return "bg-green-100 text-green-800";
      case "Negative": return "bg-red-100 text-red-800";
      case "Neutral": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Trend Discovery</h1>
          <p className="text-gray-600 mt-2">Discover trending topics and get AI-powered content ideas for your brand.</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search for specific trends or keywords..." 
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button variant="outline">
              <Globe className="h-4 w-4 mr-2" />
              Location
            </Button>
            <Button variant="outline">
              <Clock className="h-4 w-4 mr-2" />
              Time Range
            </Button>
          </div>
        </div>

        {/* Trending Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {["Technology", "Business", "Lifestyle", "Health", "Entertainment", "Sports"].map((category) => (
            <Button key={category} variant="outline" className="h-auto p-4 flex flex-col items-center">
              <BarChart3 className="h-5 w-5 mb-2" />
              <span className="text-sm">{category}</span>
            </Button>
          ))}
        </div>

        {/* Trending Topics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {trends.map((trend) => (
            <Card key={trend.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-indigo-600" />
                      <span>{trend.keyword}</span>
                    </CardTitle>
                    <CardDescription className="mt-2">{trend.description}</CardDescription>
                  </div>
                  <Badge className={getVelocityColor(trend.velocity)}>
                    {trend.velocity}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-600">Category:</span>
                      <Badge variant="outline">{trend.category}</Badge>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-600">Engagement:</span>
                      <span className="font-medium">{trend.engagement}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-gray-600">Sentiment:</span>
                    <Badge className={getSentimentColor(trend.sentiment)}>
                      {trend.sentiment}
                    </Badge>
                  </div>

                  {/* Related Terms */}
                  <div>
                    <span className="text-sm text-gray-600 block mb-2">Related Terms:</span>
                    <div className="flex flex-wrap gap-1">
                      {trend.relatedTerms.map((term, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {term}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Get Content Ideas
                    </Button>
                    <Button size="sm" variant="outline">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      View Analytics
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Content Suggestions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              <span>AI-Powered Content Ideas</span>
            </CardTitle>
            <CardDescription>Based on trending topics and your brand voice</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">💡 AI Trend Angle</h4>
                <p className="text-blue-800 text-sm">
                  "How AI is revolutionizing small business operations - share your experience with automation tools and their impact on productivity."
                </p>
                <Button size="sm" className="mt-3" variant="outline">Use This Idea</Button>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">🌱 Sustainability Hook</h4>
                <p className="text-green-800 text-sm">
                  "3 simple sustainable swaps that saved our office $200 last month - which eco-friendly change made the biggest impact for you?"
                </p>
                <Button size="sm" className="mt-3" variant="outline">Use This Idea</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default TrendDiscovery;
