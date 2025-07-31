import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, Play, Star, Zap, Rocket, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Modal from '@/components/Modal';
import SocialMediaPopup from '@/components/popups/SocialMediaPopup';
import SEOPopup from '@/components/popups/SEOPopup';
import PhotographyPopup from '@/components/popups/PhotographyPopup';
import WebsitePopup from '@/components/popups/WebsitePopup';
import AppPopup from '@/components/popups/AppPopup';
import BusinessCardsPopup from '@/components/popups/BusinessCardsPopup';

const HomePage = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const handleOrderClick = (serviceType: string) => {
    setActivePopup(serviceType);
  };

  const handleClosePopup = () => {
    setActivePopup(null);
  };

  const handleSubmit = (serviceType: string, data: any) => {
    console.log(`${serviceType} form submitted:`, data);
    // Here you would typically send the data to your backend
    alert(`Thank you for your ${serviceType} inquiry! We'll get back to you within 24 hours.`);
    setActivePopup(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-space-darker via-space-dark to-purple-900/20">
          {/* Animated Stars */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-purple/20 rounded-full blur-3xl"
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl"
            animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
            transition={{ duration: 25, repeat: Infinity, delay: 5 }}
          />
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Astronaut Icon */}
          <motion.div
            className="mb-8 flex justify-center"
            variants={itemVariants}
            animate={floatingAnimation}
          >
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center shadow-2xl">
                <Rocket className="w-16 h-16 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full blur-xl opacity-50 animate-pulse" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-neon-purple to-neon-pink bg-clip-text text-transparent leading-tight"
            variants={itemVariants}
          >
            Marketing
            <br />
            <span className="text-neon-blue">Elevated</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We create powerful digital solutions that launch your business into the stratosphere of success.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={itemVariants}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-neon-purple/25 transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Our Story
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Explore Services
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <p className="text-sm text-foreground/60 mb-2">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6 text-neon-purple" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Packages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              Our Service Packages
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Choose from our comprehensive packages designed to elevate your digital presence and boost your business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

export default HomePage;
