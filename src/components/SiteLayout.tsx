import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface SiteLayoutProps {
  children: ReactNode;
  className?: string;
}

export const SiteLayout = ({ children, className = "" }: SiteLayoutProps) => {
  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>
      
      <Header />
      
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};