import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const TestServices = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const handleOrderClick = (serviceType: string) => {
    setActivePopup(serviceType);
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
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
            Service Packages with Templates
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Each service now includes both "Order Now" and "View Templates" buttons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-space-light/50 border-space-light hover:border-neon-purple/50 transition-all duration-300 group overflow-hidden">
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
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-neon-purple font-bold text-lg">
                        {service.price}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm"
                        onClick={() => handleOrderClick(service.id)}
                        className="flex-1 bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple text-white px-4 py-2 text-sm rounded-full shadow-lg transition-all duration-300"
                      >
                        Order Now
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white px-4 py-2 text-sm rounded-full transition-all duration-300"
                      >
                        <Link to="/templates">
                          <Eye className="w-4 h-4 mr-1" />
                          Templates
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestServices;
