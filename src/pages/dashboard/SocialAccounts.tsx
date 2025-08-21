
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

const SocialAccounts = () => {
  const socialPlatforms = [
    {
      name: "Twitter",
      icon: "🐦",
      connected: true,
      account: "@yourhandle",
      followers: "2.5K",
      autoPublish: true,
      status: "Active"
    },
    {
      name: "Instagram",
      icon: "📷",
      connected: true,
      account: "@yourbusiness",
      followers: "5.2K",
      autoPublish: false,
      status: "Active"
    },
    {
      name: "Facebook",
      icon: "📘",
      connected: false,
      account: "",
      followers: "",
      autoPublish: false,
      status: "Not Connected"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      connected: true,
      account: "Your Business",
      followers: "1.8K",
      autoPublish: true,
      status: "Active"
    },
    {
      name: "TikTok",
      icon: "🎵",
      connected: false,
      account: "",
      followers: "",
      autoPublish: false,
      status: "Not Connected"
    },
    {
      name: "Pinterest",
      icon: "📌",
      connected: false,
      account: "",
      followers: "",
      autoPublish: false,
      status: "Not Connected"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Social Accounts</h1>
          <p className="text-gray-600 mt-2">Connect and manage your social media accounts for automated publishing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPlatforms.map((platform, index) => (
            <Card key={index} className={platform.connected ? "border-green-200 bg-green-50/30" : ""}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{platform.icon}</span>
                    <span>{platform.name}</span>
                  </div>
                  <Badge variant={platform.connected ? "default" : "secondary"}>
                    {platform.status}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {platform.connected ? (
                  <>
                    <div>
                      <p className="font-medium">{platform.account}</p>
                      <p className="text-sm text-gray-600">{platform.followers} followers</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Auto-publish</span>
                      <Switch checked={platform.autoPublish} />
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Settings
                      </Button>
                      <Button variant="destructive" size="sm" className="flex-1">
                        Disconnect
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-gray-600">
                      Connect your {platform.name} account to enable automated content publishing.
                    </p>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                      Connect {platform.name}
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Publishing Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Global Publishing Settings</CardTitle>
            <CardDescription>Configure default settings for all connected accounts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Auto-publish all content</h4>
                <p className="text-sm text-gray-600">Automatically publish approved content to all connected accounts</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Optimal timing</h4>
                <p className="text-sm text-gray-600">Use AI to determine the best times to post for each platform</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Cross-post content</h4>
                <p className="text-sm text-gray-600">Automatically adapt and post content across multiple platforms</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* OAuth Permissions */}
        <Card>
          <CardHeader>
            <CardTitle>Permissions & Access</CardTitle>
            <CardDescription>Review the permissions granted to Momentum AI</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Read Permissions</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• View profile information</li>
                    <li>• Read post analytics</li>
                    <li>• Access follower insights</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Write Permissions</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Create and publish posts</li>
                    <li>• Upload images and videos</li>
                    <li>• Schedule content</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                These permissions allow Momentum AI to manage your social media content effectively. 
                You can revoke access at any time by disconnecting your accounts.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SocialAccounts;
