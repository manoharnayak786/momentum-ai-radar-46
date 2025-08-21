
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Image, Video, Sparkles, Hash, RotateCcw, Copy, Download } from "lucide-react";

const ContentStudio = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Content Studio</h1>
          <p className="text-gray-600 mt-2">Create AI-powered content for your social media platforms.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Content Creation Panel */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 text-indigo-600" />
                  <span>AI Content Generator</span>
                </CardTitle>
                <CardDescription>Describe what you want to create and let AI generate it for you.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Content Prompt</label>
                  <Textarea 
                    placeholder="Describe the content you want to create (e.g., 'A motivational post about Monday productivity with coffee theme')"
                    className="min-h-[100px]"
                  />
                </div>
                
                <div className="flex space-x-2">
                  <Button className="bg-indigo-600 hover:bg-indigo-700">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Generate Content
                  </Button>
                  <Button variant="outline">
                    <Hash className="h-4 w-4 mr-2" />
                    Suggest Hashtags
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="text" className="space-y-4">
              <TabsList>
                <TabsTrigger value="text" className="flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Text Content</span>
                </TabsTrigger>
                <TabsTrigger value="image" className="flex items-center space-x-2">
                  <Image className="h-4 w-4" />
                  <span>AI Images</span>
                </TabsTrigger>
                <TabsTrigger value="video" className="flex items-center space-x-2">
                  <Video className="h-4 w-4" />
                  <span>AI Videos</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="text">
                <Card>
                  <CardHeader>
                    <CardTitle>Generated Text Content</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <p className="text-gray-800 leading-relaxed">
                        ☕ Monday motivation incoming! There's something magical about that first cup of coffee that transforms 
                        our mindset from "Why is it Monday?" to "Let's make things happen!" ✨
                        
                        What's your Monday morning ritual that sets you up for success? Drop it in the comments! 👇
                        
                        #MondayMotivation #CoffeeLovers #ProductivityTips #MorningRitual #WorkLifeBalance
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Text
                      </Button>
                      <Button variant="outline" size="sm">
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Regenerate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="image">
                <Card>
                  <CardHeader>
                    <CardTitle>AI Generated Images</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gradient-to-br from-amber-100 to-orange-200 rounded-lg h-48 flex items-center justify-center">
                        <span className="text-gray-600">Generated Image 1</span>
                      </div>
                      <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg h-48 flex items-center justify-center">
                        <span className="text-gray-600">Generated Image 2</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm">
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Generate More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="video">
                <Card>
                  <CardHeader>
                    <CardTitle>AI Generated Videos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-br from-purple-100 to-pink-200 rounded-lg h-64 flex items-center justify-center mb-4">
                      <span className="text-gray-600">Generated Video Preview</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm">
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Generate Again
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar with Tools */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Use Template
                </Button>
                <Button className="w-full" variant="outline">
                  <Image className="h-4 w-4 mr-2" />
                  Upload Image
                </Button>
                <Button className="w-full" variant="outline">
                  <Sparkles className="h-4 w-4 mr-2" />
                  From Trending Topic
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Publishing Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Target Platforms</label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-sm">Twitter/X</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-sm">Instagram</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">LinkedIn</span>
                    </label>
                  </div>
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Schedule Post
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ContentStudio;
