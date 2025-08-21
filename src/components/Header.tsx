
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-teal-500 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">Momentum AI</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</a>
            <a href="/features" className="text-gray-700 hover:text-indigo-600 transition-colors">Features</a>
            <a href="/pricing" className="text-gray-700 hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="/blog" className="text-gray-700 hover:text-indigo-600 transition-colors">Blog</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700">Login</Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700">Start Free Trial</Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700">Home</a>
              <a href="/features" className="text-gray-700">Features</a>
              <a href="/pricing" className="text-gray-700">Pricing</a>
              <a href="/blog" className="text-gray-700">Blog</a>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="ghost" className="justify-start">Login</Button>
                <Button className="bg-indigo-600 hover:bg-indigo-700">Start Free Trial</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
