import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import ContactBar from "./ContactBar";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Button } from "./ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Update scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your services.");
    window.open(`https://wa.me/254738849148?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-space-dark text-foreground">
      <ContactBar />
      <Navigation />

      {/* Main Content */}
      <main className="pt-16 sm:pt-24 lg:pt-28 min-h-screen">
        <Suspense fallback={<FallbackLoader />}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Float Button */}
      <Button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 group"
        size="icon"
      >
        <MessageCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
      </Button>

      {/* Scroll Indicator */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="w-2 h-16 bg-space-light rounded-full overflow-hidden">
          <div
            className="w-full bg-gradient-to-t from-neon-blue to-neon-yellow rounded-full transition-all duration-300"
            style={{
              height: `${scrollProgress}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
