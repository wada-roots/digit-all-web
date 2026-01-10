import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthProvider } from "@/context/AuthContext";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { AdminRoute } from "@/components/auth/AdminRoute";

// Import pages
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import Impact from "./pages/Impact";
import Services from "./pages/Services";
import WebDevelopment from "./pages/WebDevelopment";
import DigitalMarketingSolutions from "./pages/DigitalMarketingSolutions";
import WebSEOEcommerceSolutions from "./pages/WebSEOEcommerceSolutions";
import MediaCreativesSolutions from "./pages/MediaCreativesSolutions";
import Contact from "./pages/Contact";
import Templates from "./pages/Templates";
import BusinessCardTemplates from "./pages/BusinessCardTemplates";
import NotFound from "./pages/NotFound";
import AffiliateDashboard from "./pages/AffiliateDashboard";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";

const queryClient = new QueryClient();

// Simple Loader Component
const PageLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-screen pt-32">
    <div className="animate-spin rounded-full h-20 w-20 border-4 border-neon-blue/30 border-t-neon-blue border-r-neon-yellow mb-4"></div>
    <p className="text-neon-blue font-semibold">Loading page...</p>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services" element={<Services />} />
              <Route
                path="/solutions/digital-marketing"
                element={<DigitalMarketingSolutions />}
              />
              <Route
                path="/solutions/web-seo-ecommerce"
                element={<WebSEOEcommerceSolutions />}
              />
              <Route
                path="/solutions/media-creatives"
                element={<MediaCreativesSolutions />}
              />
              <Route
                path="/solutions/software-development"
                element={<WebDevelopment />}
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/templates" element={<Templates />} />
              <Route
                path="/business-card-templates"
                element={<BusinessCardTemplates />}
              />
              <Route path="/login" element={<Login />} />
              <Route
                path="/affiliates"
                element={
                  <ProtectedRoute>
                    <AffiliateDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/kk"
                element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
