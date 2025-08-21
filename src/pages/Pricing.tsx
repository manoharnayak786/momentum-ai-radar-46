
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Creator",
      description: "For individuals and creators getting started",
      monthlyPrice: 29,
      yearlyPrice: 23,
      features: [
        "5 Social Accounts",
        "1 Brand Kit",
        "500 Opportunity Alerts/month",
        "Core AI Generation",
        "Standard Analytics",
        "Email Support"
      ],
      cta: "Start Free Trial",
      highlighted: false
    },
    {
      name: "Pro",
      description: "For businesses and marketers ready to grow",
      monthlyPrice: 99,
      yearlyPrice: 79,
      features: [
        "15 Social Accounts",
        "5 Brand Kits",
        "Unlimited Opportunity Alerts",
        "Brand Voice & Vision Engine",
        "Fine-Tuning & DreamBooth",
        "Actionable ROI Dashboard",
        "CRM Integrations",
        "Priority Support"
      ],
      cta: "Start Free Trial",
      highlighted: true
    },
    {
      name: "Agency",
      description: "For agencies managing multiple clients",
      monthlyPrice: null,
      yearlyPrice: null,
      features: [
        "Unlimited Social Accounts",
        "Unlimited Brand Kits",
        "White-Label Reporting",
        "Team Collaboration & Approvals",
        "Advanced Analytics",
        "API Access",
        "Dedicated Account Manager",
        "Custom Integrations"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  const allFeatures = [
    { category: "Core Platform", features: [
      { name: "Multi-platform scheduling", creator: true, pro: true, agency: true },
      { name: "Social inbox management", creator: true, pro: true, agency: true },
      { name: "Content calendar", creator: true, pro: true, agency: true },
      { name: "Basic analytics", creator: true, pro: true, agency: true },
      { name: "Team collaboration", creator: false, pro: true, agency: true },
    ]},
    { category: "Opportunity Feed", features: [
      { name: "Trend monitoring", creator: "Limited", pro: true, agency: true },
      { name: "Event tracking", creator: false, pro: true, agency: true },
      { name: "Competitor alerts", creator: false, pro: true, agency: true },
      { name: "Industry news", creator: false, pro: true, agency: true },
      { name: "Custom keywords", creator: false, pro: true, agency: true },
    ]},
    { category: "Brand Engine", features: [
      { name: "Basic AI generation", creator: true, pro: true, agency: true },
      { name: "Brand voice fine-tuning", creator: false, pro: true, agency: true },
      { name: "Visual style training", creator: false, pro: true, agency: true },
      { name: "Branded video generation", creator: false, pro: true, agency: true },
      { name: "ControlNet integration", creator: false, pro: true, agency: true },
    ]},
    { category: "Analytics", features: [
      { name: "Standard metrics", creator: true, pro: true, agency: true },
      { name: "ROI tracking", creator: false, pro: true, agency: true },
      { name: "CRM integrations", creator: false, pro: true, agency: true },
      { name: "White-label reports", creator: false, pro: false, agency: true },
      { name: "Custom dashboards", creator: false, pro: false, agency: true },
    ]},
    { category: "Support", features: [
      { name: "Email support", creator: true, pro: true, agency: true },
      { name: "Priority support", creator: false, pro: true, agency: true },
      { name: "Phone support", creator: false, pro: false, agency: true },
      { name: "Dedicated manager", creator: false, pro: false, agency: true },
      { name: "Custom training", creator: false, pro: false, agency: true },
    ]}
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Find the Plan That's Right for You
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Simple, transparent pricing that scales with your needs. Start your 14-day free trial on any plan today.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-16">
            <span className={`text-lg ${!isYearly ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                isYearly ? 'bg-indigo-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${isYearly ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border-2 p-8 ${
                  plan.highlighted
                    ? 'border-indigo-600 bg-white shadow-xl scale-105'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  {plan.monthlyPrice ? (
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-600 ml-2">/ month</span>
                      {isYearly && plan.monthlyPrice && (
                        <div className="text-sm text-gray-500 mt-1">
                          Billed annually (${plan.yearlyPrice * 12}/year)
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">Let's Talk</span>
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? 'bg-indigo-600 hover:bg-indigo-700'
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Compare All Features
            </h2>
            <p className="text-xl text-gray-600">
              See exactly what's included in each plan
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Features</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Creator</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900 bg-indigo-50">Pro</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Agency</th>
                  </tr>
                </thead>
                <tbody>
                  {allFeatures.map((category, categoryIndex) => (
                    <>
                      <tr key={categoryIndex}>
                        <td colSpan={4} className="py-6 px-6">
                          <h3 className="font-bold text-gray-900 text-lg">{category.category}</h3>
                        </td>
                      </tr>
                      {category.features.map((feature, featureIndex) => (
                        <tr key={`${categoryIndex}-${featureIndex}`} className="border-b border-gray-100">
                          <td className="py-3 px-6 text-gray-700">{feature.name}</td>
                          <td className="py-3 px-6 text-center">
                            {feature.creator === true ? (
                              <Check className="h-5 w-5 text-green-500 mx-auto" />
                            ) : feature.creator === false ? (
                              <span className="text-gray-300">—</span>
                            ) : (
                              <span className="text-sm text-gray-600">{feature.creator}</span>
                            )}
                          </td>
                          <td className="py-3 px-6 text-center bg-indigo-50">
                            {feature.pro === true ? (
                              <Check className="h-5 w-5 text-green-500 mx-auto" />
                            ) : feature.pro === false ? (
                              <span className="text-gray-300">—</span>
                            ) : (
                              <span className="text-sm text-gray-600">{feature.pro}</span>
                            )}
                          </td>
                          <td className="py-3 px-6 text-center">
                            {feature.agency === true ? (
                              <Check className="h-5 w-5 text-green-500 mx-auto" />
                            ) : feature.agency === false ? (
                              <span className="text-gray-300">—</span>
                            ) : (
                              <span className="text-sm text-gray-600">{feature.agency}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What happens during the free trial?
                </h3>
                <p className="text-gray-600">
                  You get full access to all Pro features for 14 days. No credit card required. Set up your Brand Kit, connect your social accounts, and experience the power of proactive AI.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I change plans anytime?
                </h3>
                <p className="text-gray-600">
                  Absolutely! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How does the Brand Voice training work?
                </h3>
                <p className="text-gray-600">
                  Upload your best marketing content, and our AI analyzes your writing style, tone, and vocabulary. We then fine-tune a custom language model that generates content in your authentic brand voice.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What integrations do you support?
                </h3>
                <p className="text-gray-600">
                  We integrate with all major social platforms (Facebook, Instagram, LinkedIn, X, TikTok), plus CRM systems (HubSpot, Salesforce) and e-commerce platforms (Shopify, WooCommerce).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Stop Reacting and Start Creating?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the growing community of brands using Momentum AI to stay ahead of trends and create authentic content at scale.
          </p>
          <Button 
            size="lg" 
            className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-4 h-auto"
          >
            Start Your 14-Day Free Trial
          </Button>
          <p className="text-gray-400 mt-4">No credit card required • Cancel anytime</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
