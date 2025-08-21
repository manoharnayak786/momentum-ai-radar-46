import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>
      
      <main id="main-content" className="w-full max-w-md focus:outline-none" tabIndex={-1}>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-teal-500 rounded-lg"></div>
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Momentum AI
            </Link>
          </div>
        </div>
        {children}
      </main>
    </div>
  );
};