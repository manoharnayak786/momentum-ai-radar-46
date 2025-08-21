
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp } from "lucide-react";

export const Hero = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-indigo-50 via-white to-teal-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Stop Reacting. <br />
                <span className="bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">
                  Start Creating.
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Momentum AI is the first proactive AI partner for social media. We scan the digital world for content opportunities 24/7, so you can focus on what matters. We find the opportunities, you take the credit.
              </p>
            </div>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-4 h-auto"
              >
                Start Your 14-Day Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-gray-500">No credit card required</p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border">
              <div className="bg-gray-900 rounded-lg p-4 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Opportunity Feed</h3>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-sm font-medium">Trending Hashtag</span>
                    </div>
                    <p className="text-sm">#AIRevolution is trending in your industry</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="h-4 w-4" />
                      <span className="text-sm font-medium">Competitor Viral Post</span>
                    </div>
                    <p className="text-sm">TechCorp's post gained 10x usual engagement</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="h-4 w-4" />
                      <span className="text-sm font-medium">Local Event</span>
                    </div>
                    <p className="text-sm">Tech Conference starting tomorrow in your city</p>
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
