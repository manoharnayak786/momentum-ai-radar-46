import { Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-teal-500 rounded-lg"></div>
              <span className="text-xl font-bold text-white">Momentum AI</span>
            </div>
            <p className="text-gray-400">
              The first proactive AI partner for social media management.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/features"
                  className="hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2025 Momentum AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};
