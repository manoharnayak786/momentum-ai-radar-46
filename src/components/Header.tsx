import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-teal-500 rounded-lg"></div>
            <Link to="/" className="text-xl font-bold text-gray-900">
              Momentum AI
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <Link
              to="/"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/features"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Blog
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700" asChild>
              <Link to="/signup">Start Free Trial</Link>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-4" role="navigation" aria-label="Mobile navigation">
              <Link to="/" className="text-gray-700">
                Home
              </Link>
              <Link to="/features" className="text-gray-700">
                Features
              </Link>
              <Link to="/pricing" className="text-gray-700">
                Pricing
              </Link>
              <Link to="/blog" className="text-gray-700">
                Blog
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="ghost" className="justify-start" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="bg-indigo-600 hover:bg-indigo-700" asChild>
                  <Link to="/signup">Start Free Trial</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
