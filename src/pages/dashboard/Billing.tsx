import { DashboardLayout } from "@/components/DashboardLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Download } from "lucide-react";

const Billing = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Billing & Subscription
          </h1>
          <p className="text-gray-600 mt-2">
            Manage your subscription and billing information.
          </p>
        </div>

        {/* Current Plan */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Current Plan</span>
              <Badge variant="secondary">Professional</Badge>
            </CardTitle>
            <CardDescription>Your current subscription details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold">$99/month</h3>
                <p className="text-gray-600">
                  Next billing date: January 15, 2025
                </p>
              </div>
              <Button variant="outline">Change Plan</Button>
            </div>
          </CardContent>
        </Card>

        {/* Usage Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Current Usage</CardTitle>
            <CardDescription>
              Your usage for this billing period
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Text Content</span>
                  <span className="text-sm font-medium">75 / 200</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: "37.5%" }}
                  ></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">
                    Images Generated
                  </span>
                  <span className="text-sm font-medium">42 / 100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-teal-600 h-2 rounded-full"
                    style={{ width: "42%" }}
                  ></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Videos Created</span>
                  <span className="text-sm font-medium">8 / 20</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Available Plans */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Available Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Text Only</CardTitle>
                <CardDescription>
                  Perfect for content creators focusing on written content
                </CardDescription>
                <div className="text-3xl font-bold">
                  $29
                  <span className="text-lg font-normal text-gray-600">
                    /month
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">100 AI text posts/month</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">5 social accounts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Basic analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Email notifications</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Select Plan
                </Button>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 bg-indigo-50/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Text + Images</span>
                  <Badge>Current</Badge>
                </CardTitle>
                <CardDescription>
                  Complete content creation with visuals
                </CardDescription>
                <div className="text-3xl font-bold">
                  $99
                  <span className="text-lg font-normal text-gray-600">
                    /month
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">200 AI text posts/month</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">100 AI images/month</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">15 social accounts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Advanced analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Auto-publishing</span>
                  </li>
                </ul>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Current Plan
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Text + Images + Video</CardTitle>
                <CardDescription>Full multimedia content suite</CardDescription>
                <div className="text-3xl font-bold">
                  $199
                  <span className="text-lg font-normal text-gray-600">
                    /month
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Unlimited AI content</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">20 AI videos/month</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Unlimited social accounts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Premium analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Priority support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Payment Method & Invoice History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5" />
                <span>Payment Method</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                    VISA
                  </div>
                  <div>
                    <p className="font-medium">**** **** **** 4242</p>
                    <p className="text-sm text-gray-600">Expires 12/26</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Update
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { date: "Dec 15, 2024", amount: "$99.00", status: "Paid" },
                  { date: "Nov 15, 2024", amount: "$99.00", status: "Paid" },
                  { date: "Oct 15, 2024", amount: "$99.00", status: "Paid" },
                ].map((invoice, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{invoice.date}</p>
                      <p className="text-sm text-gray-600">{invoice.amount}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">{invoice.status}</Badge>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
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

export default Billing;
