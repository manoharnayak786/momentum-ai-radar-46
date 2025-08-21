import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account settings and preferences.</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="publishing">Publishing</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal information and preferences.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline">Change Avatar</Button>
                    <p className="text-sm text-gray-600 mt-1">JPG, PNG or GIF. Max size 2MB.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input id="jobTitle" placeholder="Social Media Manager" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Acme Corp" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" placeholder="Tell us about yourself..." />
                </div>

                <Button className="bg-indigo-600 hover:bg-indigo-700">Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Choose how you want to receive notifications.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Daily Content Digest</h4>
                      <p className="text-sm text-gray-600">Receive 3-5 AI-generated content ideas daily</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Publishing Notifications</h4>
                      <p className="text-sm text-gray-600">Get notified when content is published</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Trend Alerts</h4>
                      <p className="text-sm text-gray-600">High-priority trending topics in your industry</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Performance Reports</h4>
                      <p className="text-sm text-gray-600">Weekly analytics and performance summaries</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Team Collaboration</h4>
                      <p className="text-sm text-gray-600">Notifications about team member actions</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">SMS Notifications</h4>
                      <p className="text-sm text-gray-600">Receive critical alerts via SMS</p>
                    </div>
                    <Switch />
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium mb-3">Notification Delivery</h4>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (for SMS)</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                <Button className="bg-indigo-600 hover:bg-indigo-700">Save Preferences</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="publishing">
            <Card>
              <CardHeader>
                <CardTitle>Publishing Preferences</CardTitle>
                <CardDescription>Configure how your content is published and delivered.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Auto-Publishing</h4>
                      <p className="text-sm text-gray-600">Automatically publish approved content to connected social accounts</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Review Before Publishing</h4>
                      <p className="text-sm text-gray-600">Always review content before it goes live</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Email Content Delivery</h4>
                      <p className="text-sm text-gray-600">Receive generated content via email with download links</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Optimal Timing</h4>
                      <p className="text-sm text-gray-600">Use AI to determine the best times to post</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium mb-3">Content Generation Schedule</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dailyContent">Daily Content Count</Label>
                      <select className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="3">3 posts per day</option>
                        <option value="5" selected>5 posts per day</option>
                        <option value="7">7 posts per day</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deliveryTime">Delivery Time</Label>
                      <Input id="deliveryTime" type="time" defaultValue="09:00" />
                    </div>
                  </div>
                </div>

                <Button className="bg-indigo-600 hover:bg-indigo-700">Save Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage your account security and authentication.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">Change Password</h4>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                      <Button variant="outline">Update Password</Button>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium">Two-Factor Authentication</h4>
                        <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                      </div>
                      <Switch />
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-3">Active Sessions</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Chrome on MacOS</p>
                          <p className="text-sm text-gray-600">Current session • San Francisco, CA</p>
                        </div>
                        <Badge variant="secondary">Current</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Safari on iPhone</p>
                          <p className="text-sm text-gray-600">2 hours ago • San Francisco, CA</p>
                        </div>
                        <Button variant="outline" size="sm">Revoke</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
