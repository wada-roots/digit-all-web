import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Navigation from './Navigation';
import { Button } from './ui/button';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your services.");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-space-dark text-foreground">
      <Navigation />
      
      {/* Main Content */}
      <main className="pt-16 lg:pt-20">
        {children}
      </main>

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
            className="w-full bg-gradient-to-t from-neon-purple to-neon-pink rounded-full transition-all duration-300"
            style={{
              height: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
