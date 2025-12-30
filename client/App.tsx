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

// Lazy load pages
const HomePage = lazy(() => import("./pages/HomePage"));
const Services = lazy(() => import("./pages/Services"));
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const DigitalMarketingSolutions = lazy(() => import("./pages/DigitalMarketingSolutions"));
const WebSEOEcommerceSolutions = lazy(() => import("./pages/WebSEOEcommerceSolutions"));
const MediaCreativesSolutions = lazy(() => import("./pages/MediaCreativesSolutions"));
const Contact = lazy(() => import("./pages/Contact"));
const Templates = lazy(() => import("./pages/Templates"));
const BusinessCardTemplates = lazy(() => import("./pages/BusinessCardTemplates"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AffiliateDashboard = lazy(() => import("./pages/AffiliateDashboard"));
const Login = lazy(() => import("./pages/Login"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

const queryClient = new QueryClient();

// Simple Loader Component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
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
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions/software-development" element={<WebDevelopment />} />
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
            </Suspense>
          </Layout>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
