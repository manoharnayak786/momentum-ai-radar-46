
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, Image, Video, Music, Trash2, Eye } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BusinessKit = () => {
  const uploadedFiles = [
    { name: "Brand Guidelines.pdf", type: "pdf", size: "2.4 MB", status: "Processed" },
    { name: "Logo-Primary.png", type: "image", size: "180 KB", status: "Processed" },
    { name: "Product Demo.mp4", type: "video", size: "15.2 MB", status: "Processing" },
    { name: "Brand Voice Sample.txt", type: "text", size: "12 KB", status: "Processed" },
    { name: "Company Jingle.mp3", type: "audio", size: "3.1 MB", status: "Processed" }
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
      case 'text':
        return <FileText className="h-8 w-8 text-red-500" />;
      case 'image':
        return <Image className="h-8 w-8 text-blue-500" />;
      case 'video':
        return <Video className="h-8 w-8 text-purple-500" />;
      case 'audio':
        return <Music className="h-8 w-8 text-green-500" />;
      default:
        return <FileText className="h-8 w-8 text-gray-500" />;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Business Kit</h1>
          <p className="text-gray-600 mt-2">Upload and manage your business content to train our AI for better, more personalized content generation.</p>
        </div>

        <Tabs defaultValue="upload" className="space-y-6">
          <TabsList>
            <TabsTrigger value="upload">Upload Content</TabsTrigger>
            <TabsTrigger value="library">Content Library</TabsTrigger>
            <TabsTrigger value="analysis">AI Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="upload">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* File Upload */}
              <Card>
                <CardHeader>
                  <CardTitle>Upload Files</CardTitle>
                  <CardDescription>Upload your business documents, media, and content for AI analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Drop files here</h3>
                    <p className="text-gray-600 mb-4">or click to browse and upload</p>
                    <Button className="bg-indigo-600 hover:bg-indigo-700">Choose Files</Button>
                    <p className="text-xs text-gray-500 mt-2">
                      Supports: PDF, PNG, JPG, MP4, MP3, TXT, DOCX (Max: 50MB per file)
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Text Input */}
              <Card>
                <CardHeader>
                  <CardTitle>Add Text Content</CardTitle>
                  <CardDescription>Quickly add text content like mission statements, brand voice examples, or product descriptions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Content Title</label>
                    <Input placeholder="e.g., Brand Voice Sample, Mission Statement" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                    <Textarea 
                      placeholder="Paste your text content here..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    Add Content
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Content Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Recommended Content Types</CardTitle>
                <CardDescription>Upload these types of content to improve AI performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 border rounded-lg text-center">
                    <FileText className="h-8 w-8 text-red-500 mx-auto mb-2" />
                    <h4 className="font-medium">Brand Guidelines</h4>
                    <p className="text-sm text-gray-600">Style guides, brand books, voice & tone documents</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <Image className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <h4 className="font-medium">Visual Assets</h4>
                    <p className="text-sm text-gray-600">Logos, product photos, brand imagery</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <Video className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                    <h4 className="font-medium">Video Content</h4>
                    <p className="text-sm text-gray-600">Promotional videos, tutorials, brand storytelling</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <Music className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <h4 className="font-medium">Audio Assets</h4>
                    <p className="text-sm text-gray-600">Jingles, voice samples, podcast excerpts</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="library">
            <Card>
              <CardHeader>
                <CardTitle>Uploaded Content</CardTitle>
                <CardDescription>Manage your uploaded files and content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        {getFileIcon(file.type)}
                        <div>
                          <h4 className="font-medium">{file.name}</h4>
                          <p className="text-sm text-gray-600">{file.size} • {file.status}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          file.status === 'Processed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {file.status}
                        </span>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>AI Analysis Results</CardTitle>
                  <CardDescription>See how our AI interprets your uploaded content</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Brand Voice Analysis</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">Professional</span>
                          <span className="text-sm font-medium">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-sm">Friendly</span>
                          <span className="text-sm font-medium">72%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-sm">Authoritative</span>
                          <span className="text-sm font-medium">68%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '68%' }}></div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Visual Style Analysis</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <h5 className="text-sm font-medium">Primary Colors</h5>
                          <div className="flex space-x-2 mt-2">
                            <div className="w-6 h-6 bg-indigo-600 rounded"></div>
                            <div className="w-6 h-6 bg-teal-500 rounded"></div>
                            <div className="w-6 h-6 bg-gray-900 rounded"></div>
                          </div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <h5 className="text-sm font-medium">Style Keywords</h5>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="px-2 py-1 bg-white text-xs rounded">Modern</span>
                            <span className="px-2 py-1 bg-white text-xs rounded">Clean</span>
                            <span className="px-2 py-1 bg-white text-xs rounded">Tech-focused</span>
                            <span className="px-2 py-1 bg-white text-xs rounded">Professional</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Content Insights</CardTitle>
                  <CardDescription>Key themes and topics identified from your content</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Top Keywords</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div>Innovation (42 mentions)</div>
                        <div>Technology (38 mentions)</div>
                        <div>Solutions (29 mentions)</div>
                        <div>Growth (24 mentions)</div>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Content Categories</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div>Product Features (35%)</div>
                        <div>Company Culture (28%)</div>
                        <div>Industry Insights (22%)</div>
                        <div>Customer Stories (15%)</div>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Sentiment Analysis</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div>Positive: 78%</div>
                        <div>Neutral: 18%</div>
                        <div>Negative: 4%</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default BusinessKit;
