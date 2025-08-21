import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
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
    <AuthProvider>
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
            
            {/* Protected Dashboard Routes */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/dashboard/billing" element={<ProtectedRoute><Billing /></ProtectedRoute>} />
            <Route path="/dashboard/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
            <Route path="/dashboard/social-accounts" element={<ProtectedRoute><SocialAccounts /></ProtectedRoute>} />
            <Route path="/dashboard/business-kit" element={<ProtectedRoute><BusinessKit /></ProtectedRoute>} />
            <Route path="/dashboard/content-studio" element={<ProtectedRoute><ContentStudio /></ProtectedRoute>} />
            <Route path="/dashboard/calendar" element={<ProtectedRoute><ContentCalendar /></ProtectedRoute>} />
            <Route path="/dashboard/trends" element={<ProtectedRoute><TrendDiscovery /></ProtectedRoute>} />
            <Route path="/dashboard/library" element={<ProtectedRoute><ContentLibrary /></ProtectedRoute>} />
            <Route path="/dashboard/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
            <Route path="/dashboard/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
