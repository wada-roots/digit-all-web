import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Modal from '@/components/Modal';
import SocialMediaPopup from '@/components/popups/SocialMediaPopup';
import SEOPopup from '@/components/popups/SEOPopup';
import PhotographyPopup from '@/components/popups/PhotographyPopup';
import WebsitePopup from '@/components/popups/WebsitePopup';
import AppPopup from '@/components/popups/AppPopup';
import BusinessCardsPopup from '@/components/popups/BusinessCardsPopup';

const TestPopups = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const handleOrderClick = (serviceType: string) => {
    setActivePopup(serviceType);
  };

  const handleClosePopup = () => {
    setActivePopup(null);
  };

  const handleSubmit = (serviceType: string, data: any) => {
    console.log(`${serviceType} form submitted:`, data);
    alert(`Thank you for your ${serviceType} inquiry! We'll get back to you within 24 hours.`);
    setActivePopup(null);
  };

  const services = [
    {
      id: "social-media",
      image: "https://images.pexels.com/photos/13883892/pexels-photo-13883892.jpeg",
      title: "Social Media Marketing",
      description: "Boost your online presence with 10x engagement",
      caption: "Get your social media strategy in 24 hours",
      price: "From $299/month"
    },
    {
      id: "seo",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg",
      title: "Search Engine Optimization",
      description: "Rank #1 on Google within 90 days",
      caption: "80% of your SEO work is done automatically",
      price: "From $499/month"
    },
    {
      id: "photography",
      image: "https://images.pexels.com/photos/3379942/pexels-photo-3379942.jpeg",
      title: "Photography & Videography",
      description: "Professional content that converts",
      caption: "Get your brand photoshoot in one session",
      price: "From $799/project"
    },
    {
      id: "website",
      image: "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg",
      title: "Website Development",
      description: "Lightning-fast, mobile-responsive websites",
      caption: "Get your website template in 10 minutes",
      price: "From $1,299"
    },
    {
      id: "app",
      image: "https://images.pexels.com/photos/7947951/pexels-photo-7947951.jpeg",
      title: "App Development",
      description: "Native iOS & Android apps that scale",
      caption: "80% of your app is done with our templates",
      price: "From $2,999"
    },
    {
      id: "business-cards",
      image: "https://images.pexels.com/photos/7648514/pexels-photo-7648514.jpeg",
      title: "Business Cards",
      description: "Premium designs that make lasting impressions",
      caption: "Get your business cards designed in 2 hours",
      price: "From $99"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
            Test Service Popups
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Click "Order Now" on any service to test the popup functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.id} className="bg-space-light/50 border-space-light hover:border-neon-purple/50 transition-all duration-300 group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-dark/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-neon-blue text-sm font-semibold bg-space-dark/70 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                    {service.caption}
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-neon-purple font-bold text-lg">
                    {service.price}
                  </span>
                  <Button 
                    size="sm"
                    onClick={() => handleOrderClick(service.id)}
                    className="bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple text-white px-4 py-2 text-sm rounded-full shadow-lg transition-all duration-300"
                  >
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Service Popups */}
      <Modal isOpen={activePopup === 'social-media'} onClose={handleClosePopup}>
        <SocialMediaPopup onSubmit={(data) => handleSubmit('Social Media Marketing', data)} />
      </Modal>

      <Modal isOpen={activePopup === 'seo'} onClose={handleClosePopup}>
        <SEOPopup onSubmit={(data) => handleSubmit('SEO', data)} />
      </Modal>

      <Modal isOpen={activePopup === 'photography'} onClose={handleClosePopup}>
        <PhotographyPopup onSubmit={(data) => handleSubmit('Photography & Videography', data)} />
      </Modal>

      <Modal isOpen={activePopup === 'website'} onClose={handleClosePopup}>
        <WebsitePopup onSubmit={(data) => handleSubmit('Website Development', data)} />
      </Modal>

      <Modal isOpen={activePopup === 'app'} onClose={handleClosePopup}>
        <AppPopup onSubmit={(data) => handleSubmit('App Development', data)} />
      </Modal>

      <Modal isOpen={activePopup === 'business-cards'} onClose={handleClosePopup}>
        <BusinessCardsPopup onSubmit={(data) => handleSubmit('Business Cards', data)} />
      </Modal>
    </div>
  );
};

export default TestPopups;
