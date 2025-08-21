import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Billing from "./pages/dashboard/Billing";
import Settings from "./pages/dashboard/Settings";
import SocialAccounts from "./pages/dashboard/SocialAccounts";
import BusinessKit from "./pages/dashboard/BusinessKit";
import ContentStudio from "./pages/dashboard/ContentStudio";
import ContentCalendar from "./pages/dashboard/ContentCalendar";
import TrendDiscovery from "./pages/dashboard/TrendDiscovery";
import ContentLibrary from "./pages/dashboard/ContentLibrary";
import Analytics from "./pages/dashboard/Analytics";
import Notifications from "./pages/dashboard/Notifications";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/billing" element={<Billing />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route
            path="/dashboard/social-accounts"
            element={<SocialAccounts />}
          />
          <Route path="/dashboard/business-kit" element={<BusinessKit />} />
          <Route path="/dashboard/content-studio" element={<ContentStudio />} />
          <Route path="/dashboard/calendar" element={<ContentCalendar />} />
          <Route path="/dashboard/trends" element={<TrendDiscovery />} />
          <Route path="/dashboard/library" element={<ContentLibrary />} />
          <Route path="/dashboard/analytics" element={<Analytics />} />
          <Route path="/dashboard/notifications" element={<Notifications />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
