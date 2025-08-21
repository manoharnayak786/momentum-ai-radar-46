
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Check, X, TrendingUp, Calendar, User, CreditCard } from "lucide-react";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: "trend",
      title: "New trending topic detected",
      message: "AI productivity tools are trending in your industry",
      time: "2 minutes ago",
      read: false,
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      id: 2,
      type: "content",
      title: "Content published successfully",
      message: "Your Monday motivation post was published to Twitter",
      time: "1 hour ago",
      read: false,
      icon: Calendar,
      color: "text-blue-600"
    },
    {
      id: 3,
      type: "team",
      title: "Team member joined",
      message: "Sarah Johnson has joined your workspace",
      time: "3 hours ago",
      read: true,
      icon: User,
      color: "text-purple-600"
    },
    {
      id: 4,
      type: "billing",
      title: "Payment successful",
      message: "Your monthly subscription has been renewed",
      time: "1 day ago",
      read: true,
      icon: CreditCard,
      color: "text-indigo-600"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
            <p className="text-gray-600 mt-2">Stay updated with your content and account activities.</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Check className="h-4 w-4 mr-2" />
              Mark All Read
            </Button>
            <Button variant="outline">
              <X className="h-4 w-4 mr-2" />
              Clear All
            </Button>
          </div>
        </div>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <span>Notification Settings</span>
            </CardTitle>
            <CardDescription>Manage how you receive notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Bell className="h-6 w-6" />
                <span className="text-sm">In-App</span>
                <Badge className="bg-green-100 text-green-800">Enabled</Badge>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <span className="text-lg">📧</span>
                <span className="text-sm">Email</span>
                <Badge className="bg-green-100 text-green-800">Enabled</Badge>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <span className="text-lg">📱</span>
                <span className="text-sm">SMS</span>
                <Badge className="bg-gray-100 text-gray-800">Disabled</Badge>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notifications List */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Notifications</CardTitle>
            <CardDescription>Your latest updates and alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notification) => {
                const IconComponent = notification.icon;
                return (
                  <div
                    key={notification.id}
                    className={`flex items-start space-x-4 p-4 rounded-lg border ${
                      notification.read ? 'bg-gray-50' : 'bg-blue-50 border-blue-200'
                    }`}
                  >
                    <div className={`p-2 rounded-full bg-white ${notification.color}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className={`font-medium ${notification.read ? 'text-gray-900' : 'text-gray-900 font-semibold'}`}>
                            {notification.title}
                          </h4>
                          <p className="text-gray-600 text-sm mt-1">{notification.message}</p>
                          <p className="text-gray-500 text-xs mt-2">{notification.time}</p>
                        </div>
                        <div className="flex space-x-2">
                          {!notification.read && (
                            <Button size="sm" variant="ghost">
                              <Check className="h-4 w-4" />
                            </Button>
                          )}
                          <Button size="sm" variant="ghost">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Notification Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="text-center">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Trend Alerts</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600 mb-4">Get notified when new trends are detected in your industry</p>
              <Badge className="bg-green-100 text-green-800">Active</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Publishing Updates</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600 mb-4">Receive updates when content is published or scheduled</p>
              <Badge className="bg-blue-100 text-blue-800">Active</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <User className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Team Activity</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600 mb-4">Stay informed about team member actions and approvals</p>
              <Badge className="bg-purple-100 text-purple-800">Active</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <CreditCard className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Account Updates</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600 mb-4">Important billing and account notifications</p>
              <Badge className="bg-indigo-100 text-indigo-800">Active</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;
