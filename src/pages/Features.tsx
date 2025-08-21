import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import {
  Radar,
  Brain,
  Zap,
  BarChart3,
  TrendingUp,
  Globe,
  Eye,
  Palette,
  Video,
  MousePointer,
  Users,
  Calendar,
} from "lucide-react";

const Features = () => {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            A Smarter Way to Do Social
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the powerful, proactive features that set Momentum AI apart
            from every other tool on the market.
          </p>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-32">
          {/* Opportunity Feed */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Radar className="h-8 w-8 text-indigo-600" />
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Never Miss a Moment
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                The Opportunity Feed is your command center for proactive social
                media. Instead of a blank slate, you start your day with a
                prioritized list of content opportunities, tailored to your
                brand and ready for action.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-indigo-600 mt-1" />
                  <span className="text-gray-700">
                    Real-Time Trend & Hashtag Monitoring (X, Google)
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Globe className="h-5 w-5 text-teal-500 mt-1" />
                  <span className="text-gray-700">
                    Local & Global Event and Holiday Tracking
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Eye className="h-5 w-5 text-purple-600 mt-1" />
                  <span className="text-gray-700">
                    Competitor Viral Post Alerts
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <BarChart3 className="h-5 w-5 text-green-600 mt-1" />
                  <span className="text-gray-700">
                    Industry News & Keyword Summaries
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Brain className="h-5 w-5 text-orange-600 mt-1" />
                  <span className="text-gray-700">
                    AI-Powered Relevance Scoring & Prioritization
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-teal-50 rounded-2xl p-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Today's Opportunities
                </h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">#WorkFromAnywhere</span>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded">
                        Hot
                      </span>
                    </div>
                    <p className="text-sm mt-1">
                      Trending in your industry • 43% increase
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">TechCorp Viral Post</span>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded">
                        5x
                      </span>
                    </div>
                    <p className="text-sm mt-1">Performance spike detected</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg p-3">
                    <span className="font-medium">CES 2025 Starting</span>
                    <p className="text-sm mt-1">
                      Perfect timing for tech content
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Engine */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 space-y-6">
              <div className="flex items-center space-x-3">
                <Brain className="h-8 w-8 text-teal-500" />
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Generate Content That's Genuinely Yours
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Solve the authenticity crisis of AI. We build a custom AI model
                for your brand, ensuring every piece of generated content
                reflects your unique voice, style, and visual identity.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Palette className="h-5 w-5 text-indigo-600 mt-1" />
                  <span className="text-gray-700">
                    Textual Voice: Fine-tune an LLM on your documents for
                    authentic copy
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Eye className="h-5 w-5 text-teal-500 mt-1" />
                  <span className="text-gray-700">
                    Visual Style (DreamBooth): Train a model on your product
                    photos
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <MousePointer className="h-5 w-5 text-purple-600 mt-1" />
                  <span className="text-gray-700">
                    Compositional Control (ControlNet): Guide image generation
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Video className="h-5 w-5 text-green-600 mt-1" />
                  <span className="text-gray-700">
                    Branded Video: Generate short-form videos with your brand
                    assets
                  </span>
                </li>
              </ul>
            </div>
            <div className="lg:order-1 bg-gradient-to-br from-teal-50 to-purple-50 rounded-2xl p-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Brand Training Dashboard
                </h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Voice Training</span>
                      <span className="text-green-600 text-sm">Complete</span>
                    </div>
                    <div className="bg-green-100 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Visual Style</span>
                      <span className="text-blue-600 text-sm">Training...</span>
                    </div>
                    <div className="bg-gray-100 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="bg-gradient-to-br from-indigo-100 to-teal-100 rounded-lg aspect-square"></div>
                    <div className="bg-gradient-to-br from-teal-100 to-purple-100 rounded-lg aspect-square"></div>
                    <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg aspect-square"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Campaign Canvas */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Zap className="h-8 w-8 text-purple-600" />
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  From Insight to Published Post in 60 Seconds
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Close the gap between strategy and execution. The Campaign
                Canvas is a unified workflow that takes an opportunity and
                instantly generates a multi-platform campaign draft for your
                review.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Brain className="h-5 w-5 text-indigo-600 mt-1" />
                  <span className="text-gray-700">
                    AI-Powered Auto-Drafting of Text and Visuals
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Globe className="h-5 w-5 text-teal-500 mt-1" />
                  <span className="text-gray-700">
                    Intelligent Multi-Platform Customization
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <BarChart3 className="h-5 w-5 text-purple-600 mt-1" />
                  <span className="text-gray-700">
                    One-Click A/B Test Variations
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-green-600 mt-1" />
                  <span className="text-gray-700">
                    Integrated Scheduling and Team Approval Flow
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">Campaign Canvas</h3>
                  <Button
                    size="sm"
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    Publish All
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border rounded p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      <span className="text-sm font-medium">LinkedIn</span>
                    </div>
                    <div className="bg-gray-100 rounded p-2 text-xs">
                      Professional tone ready
                    </div>
                  </div>
                  <div className="border rounded p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-4 h-4 bg-pink-500 rounded"></div>
                      <span className="text-sm font-medium">Instagram</span>
                    </div>
                    <div className="bg-gray-100 rounded p-2 text-xs">
                      Visual-first version
                    </div>
                  </div>
                  <div className="border rounded p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-4 h-4 bg-black rounded"></div>
                      <span className="text-sm font-medium">X</span>
                    </div>
                    <div className="bg-gray-100 rounded p-2 text-xs">
                      Concise format
                    </div>
                  </div>
                  <div className="border rounded p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-4 h-4 bg-red-500 rounded"></div>
                      <span className="text-sm font-medium">TikTok</span>
                    </div>
                    <div className="bg-gray-100 rounded p-2 text-xs">
                      Video script ready
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Dashboard */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 space-y-6">
              <div className="flex items-center space-x-3">
                <BarChart3 className="h-8 w-8 text-green-600" />
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Measure What Matters: Your Bottom Line
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Move beyond vanity metrics. Our dashboard connects social media
                activity to tangible business results, so you can finally prove
                the ROI of your work.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Zap className="h-5 w-5 text-indigo-600 mt-1" />
                  <span className="text-gray-700">
                    Direct Integration with Shopify, HubSpot & Salesforce
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-teal-500 mt-1" />
                  <span className="text-gray-700">
                    Track Clicks, Leads, and Sales from Social
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Brain className="h-5 w-5 text-purple-600 mt-1" />
                  <span className="text-gray-700">
                    AI-Powered Performance Summaries
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Eye className="h-5 w-5 text-green-600 mt-1" />
                  <span className="text-gray-700">
                    Predictive Engagement Scoring on Drafts
                  </span>
                </li>
              </ul>
            </div>
            <div className="lg:order-1 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">ROI Dashboard</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">
                        Total Revenue
                      </span>
                      <span className="text-green-600 font-bold">$12,430</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      From social media this month
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded">
                      <div className="text-2xl font-bold text-indigo-600">
                        156
                      </div>
                      <div className="text-sm text-gray-600">
                        Leads Generated
                      </div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded">
                      <div className="text-2xl font-bold text-teal-600">24</div>
                      <div className="text-sm text-gray-600">Sales Closed</div>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-sm text-blue-800">
                      <strong>AI Insight:</strong> LinkedIn posts drive 3x more
                      qualified leads than other platforms
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Social Media Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join forward-thinking brands using Momentum AI to stay ahead of
            trends and create authentic content at scale.
          </p>
          <Button
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-4 h-auto"
          >
            Start Your 14-Day Free Trial
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Features;
