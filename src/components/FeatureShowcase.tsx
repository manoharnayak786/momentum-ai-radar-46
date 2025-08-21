import { Brain, Target } from "lucide-react";

export const FeatureShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 space-y-20">
        {/* Opportunity Feed Feature */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Your Proactive Content Radar
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Momentum AI constantly scans the internet for you. From trending
              hashtags and local events to breaking industry news and competitor
              posts that are going viral, our Opportunity Feed identifies and
              prioritizes the moments that matter most for your brand.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                <span className="text-gray-700">
                  Real-time trend monitoring
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-gray-700">
                  Competitor activity alerts
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700">Industry news summaries</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-indigo-50 to-teal-50 rounded-2xl p-8">
              <Target className="h-16 w-16 text-indigo-600 mb-4" />
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-indigo-600">
                  <p className="font-medium text-gray-900">
                    Trending: #WorkFromAnywhere
                  </p>
                  <p className="text-sm text-gray-600">
                    43% increase in mentions today
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-teal-500">
                  <p className="font-medium text-gray-900">Competitor Alert</p>
                  <p className="text-sm text-gray-600">
                    TechCorp's post performing 5x above average
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Engine Feature */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              AI That Speaks Your Brand's Language
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Generic AI is dead. Our Brand Voice & Vision engine goes beyond
              simple prompts. We fine-tune a dedicated AI model on your
              marketing copy, blog posts, and product photos to generate content
              that is indistinguishable from your own.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                <span className="text-gray-700">
                  Train on your brand documents
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-gray-700">
                  Custom visual style learning
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700">Branded video generation</span>
              </div>
            </div>
          </div>

          <div className="lg:order-1 relative">
            <div className="bg-gradient-to-br from-teal-50 to-indigo-50 rounded-2xl p-8">
              <Brain className="h-16 w-16 text-teal-500 mb-4" />
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="font-medium text-gray-900 mb-2">
                    Brand Voice Training
                  </p>
                  <div className="bg-gray-100 rounded p-2 text-sm text-gray-600">
                    "Analyzing your content style..."
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="font-medium text-gray-900 mb-2">
                    Visual Style Learning
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-gradient-to-br from-indigo-100 to-teal-100 rounded aspect-square"></div>
                    <div className="bg-gradient-to-br from-teal-100 to-purple-100 rounded aspect-square"></div>
                    <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded aspect-square"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
