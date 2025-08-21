import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const featuredPosts = [
    {
      title: "5 Ways to Beat the Instagram Algorithm in 2025",
      excerpt:
        "The Instagram algorithm has evolved significantly. Here's what you need to know to maintain and grow your reach in the new year.",
      author: "Sarah Chen",
      date: "Dec 15, 2024",
      category: "Strategy",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    },
    {
      title:
        "Case Study: How We Used a Single Trend to Triple a Client's Engagement",
      excerpt:
        "A deep dive into how proactive trend monitoring and quick execution led to a 300% engagement increase for a B2B SaaS company.",
      author: "Marcus Rodriguez",
      date: "Dec 12, 2024",
      category: "Case Study",
      readTime: "12 min read",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      title: "Is Your Brand Voice Consistent? A 5-Minute AI-Powered Audit",
      excerpt:
        "Learn how to evaluate your brand's voice consistency across all social platforms and why it matters for audience trust.",
      author: "Emily Thompson",
      date: "Dec 10, 2024",
      category: "Tools",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    },
    {
      title:
        "Beyond the Prompt: Why Fine-Tuning is the Future of Branded AI Content",
      excerpt:
        "Generic AI prompts produce generic content. Discover how fine-tuning creates authentically branded content that converts.",
      author: "David Kim",
      date: "Dec 8, 2024",
      category: "AI & Technology",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    },
    {
      title: "The Social Media Manager's Guide to Proving ROI",
      excerpt:
        "Stop struggling to justify your social media budget. Here's how to track and demonstrate real business impact.",
      author: "Lisa Park",
      date: "Dec 5, 2024",
      category: "Analytics",
      readTime: "15 min read",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
      title:
        "From Meme to Marketing: A Framework for Capitalizing on Viral Moments",
      excerpt:
        "A step-by-step guide to identifying, evaluating, and acting on viral trends before your competitors do.",
      author: "Alex Johnson",
      date: "Dec 2, 2024",
      category: "Strategy",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    },
  ];

  const categories = [
    "All",
    "Strategy",
    "AI & Technology",
    "Case Studies",
    "Analytics",
    "Tools",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            The Momentum Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, strategies, and case studies to help you master proactive
            social media marketing with AI.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPosts[0].image}
                    alt={featuredPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                      {featuredPosts[0].category}
                    </span>
                    <span>{featuredPosts[0].readTime}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-700">
                        {featuredPosts[0].author}
                      </span>
                      <Calendar className="h-5 w-5 text-gray-400 ml-2" />
                      <span className="text-gray-700">
                        {featuredPosts[0].date}
                      </span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-indigo-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    category === "All"
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100 border"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.slice(1).map((post, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{post.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-700">
                          {post.author}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Stay Ahead of the Curve
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the latest insights on AI-powered social media marketing
              delivered to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
