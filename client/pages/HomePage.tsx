import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Play, Star, Zap, Rocket, Eye, Globe, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Modal from "@/components/Modal";
import SocialMediaPopup from "@/components/popups/SocialMediaPopup";
import SEOPopup from "@/components/popups/SEOPopup";
import PhotographyPopup from "@/components/popups/PhotographyPopup";
import WebsitePopup from "@/components/popups/WebsitePopup";
import AppPopup from "@/components/popups/AppPopup";
import BusinessCardsPopup from "@/components/popups/BusinessCardsPopup";
import AffiliateMarketingPopup from "@/components/popups/AffiliateMarketingPopup";
import PersonalWebsitePopup from "@/components/popups/PersonalWebsitePopup";

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
    alert(
      `Thank you for your ${serviceType} inquiry! We'll get back to you within 24 hours.`,
    );
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
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="relative">
      {/* Persuasive Hero Section */}
      <section className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg"
            alt="Tech Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-space-darker/80 via-space-dark/70 to-blue-900/60"></div>
          {/* Animated Stars */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
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
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl"
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-yellow/20 rounded-full blur-3xl"
            animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
            transition={{ duration: 25, repeat: Infinity, delay: 5 }}
          />
        </div>

        {/* Special Offers Cards */}
        <motion.div
          className="relative z-10 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header with Profile Buttons */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <motion.div
              className="mb-8"
              animate={{
                scale: [1, 1.01, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black mb-2 bg-gradient-to-r from-white via-neon-blue to-neon-yellow bg-clip-text text-transparent leading-tight tracking-tight">
                DIGIT-ALL
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-neon-yellow via-white to-neon-blue bg-clip-text text-transparent leading-tight tracking-wide">
                MARKETING SOLUTIONS
              </h2>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-neon-blue mt-2 tracking-widest uppercase">
                PROFILES
              </h3>

              {/* Decorative Elements */}
              <div className="flex justify-center items-center mt-4 space-x-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-neon-blue"></div>
                <div className="w-2 h-2 bg-neon-yellow rounded-full animate-pulse"></div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-neon-blue via-neon-yellow to-neon-blue"></div>
                <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
                <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-neon-yellow"></div>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-neon-blue to-blue-600 hover:from-blue-600 hover:to-neon-blue text-white px-6 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
                  onClick={() => window.open('/templates', '_self')}
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Company Profile
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-neon-yellow to-yellow-500 hover:from-yellow-500 hover:to-neon-yellow text-space-dark px-6 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
                  onClick={() => handleOrderClick('app')}
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  App Development Profile
                </Button>
              </motion.div>
            </div>

            <motion.p
              className="text-lg text-foreground/80 mt-6"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5,
              }}
            >
              ⚡ Professional solutions tailored to your business needs
            </motion.p>
          </motion.div>

          {/* Offer Cards */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
            variants={itemVariants}
          >
            {/* Personal Websites Offer */}
            <motion.div
              className="bg-gradient-to-br from-space-light/80 to-space-dark/60 backdrop-blur-lg border border-neon-blue/30 rounded-2xl p-6 hover:border-neon-blue/60 transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg"
                  alt="Personal Website Design"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-dark/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-neon-yellow text-space-dark px-3 py-1 rounded-full text-sm font-bold">
                    SPECIAL OFFER
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-neon-yellow transition-colors duration-300">
                Get your personal website within 60 Minutes!
              </h3>

              <p className="text-foreground/80 mb-4 leading-relaxed">
                The personal website is perfect for every profession. Get a
                stunning, professional website that showcases your skills,
                portfolio, and achievements in just 60 minutes!
              </p>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-neon-blue">
                    Ksh 10,000
                  </span>
                  <span className="text-sm text-foreground/60 line-through">
                    Ksh 25,000
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-neon-yellow mr-2" />
                    Responsive Design
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-neon-yellow mr-2" />
                    Portfolio Section
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-neon-yellow mr-2" />
                    Contact Forms
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-neon-yellow mr-2" />
                    SEO Optimized
                  </li>
                </ul>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white font-semibold py-3 rounded-full shadow-lg transition-all duration-300"
                onClick={() => handleOrderClick("personal-website")}
              >
                Order Now - Save 60%
              </Button>
            </motion.div>

            {/* Affiliate Marketing Offer */}
            <motion.div
              className="bg-gradient-to-br from-space-light/80 to-space-dark/60 backdrop-blur-lg border border-neon-yellow/30 rounded-2xl p-6 hover:border-neon-yellow/60 transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg"
                  alt="Affiliate Marketing Strategy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-dark/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-neon-blue text-white px-3 py-1 rounded-full text-sm font-bold">
                    HOT DEAL
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-neon-blue transition-colors duration-300">
                Affiliate Marketing
              </h3>

              <p className="text-foreground/80 mb-4 leading-relaxed">
                Earn with our Affiliate Marketing program by just referring us
                to clients that need our services. Send us potential client
                details and start earning commissions for every successful
                referral!
              </p>

              <div className="mb-6">
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-neon-yellow">
                    FREE TO JOIN
                  </span>
                  <p className="text-sm text-foreground/70 mt-1">
                    Earn up to 20% commission per referral
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-neon-blue mr-2" />
                    Free Registration
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-neon-blue mr-2" />
                    20% Commission
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-neon-blue mr-2" />
                    Monthly Payouts
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-neon-blue mr-2" />
                    Easy Referral Process
                  </li>
                </ul>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-neon-yellow to-neon-blue hover:from-neon-blue hover:to-neon-yellow text-white font-semibold py-3 rounded-full shadow-lg transition-all duration-300"
                onClick={() => handleOrderClick("affiliate-marketing")}
              >
                START EARNING!!
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <p className="text-sm text-neon-blue/80 mb-2 font-semibold">
              👇 Explore More Services Below
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6 text-neon-blue" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Packages Section */}
      <section className="py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-yellow bg-clip-text text-transparent">
              Our Service Packages
            </h2>
            <motion.p
              className="text-xl text-foreground/80 max-w-3xl mx-auto"
              animate={{
                color: [
                  "rgba(255,255,255,0.8)",
                  "rgba(59, 130, 246, 0.9)",
                  "rgba(255,255,255,0.8)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🎯 Results-driven packages that transform your business into a
              market leader
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: "social-media",
                image:
                  "https://images.pexels.com/photos/13883892/pexels-photo-13883892.jpeg",
                title: "Social Media Marketing",
                description: "Boost your online presence with 10x engagement",
                caption: "Get your social media strategy in 24 hours",
                price: "From $299/month",
              },
              {
                id: "seo",
                image:
                  "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg",
                title: "Search Engine Optimization",
                description: "Rank #1 on Google within 90 days",
                caption: "80% of your SEO work is done automatically",
                price: "From $499/month",
              },
              {
                id: "photography",
                image:
                  "https://images.pexels.com/photos/3379942/pexels-photo-3379942.jpeg",
                title: "Photography & Videography",
                description: "Professional content that converts",
                caption: "Get your brand photoshoot in one session",
                price: "From $799/project",
              },
              {
                id: "website",
                image:
                  "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg",
                title: "Website Development",
                description: "Lightning-fast, mobile-responsive websites",
                caption: "Get your website template in 10 minutes",
                price: "From $1,299",
              },
              {
                id: "app",
                image:
                  "https://images.pexels.com/photos/7947951/pexels-photo-7947951.jpeg",
                title: "App Development",
                description: "Native iOS & Android apps that scale",
                caption: "80% of your app is done with our templates",
                price: "From $2,999",
              },
              {
                id: "business-cards",
                image:
                  "https://images.pexels.com/photos/7648514/pexels-photo-7648514.jpeg",
                title: "Business Cards",
                description: "Premium designs that make lasting impressions",
                caption: "Get your business cards designed in 2 hours",
                price: "From $99",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-space-light/50 border-space-light hover:border-neon-blue/50 transition-all duration-300 group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-dark/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-neon-yellow text-sm font-semibold bg-space-dark/70 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
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
                        <span className="text-neon-blue font-bold text-lg">
                          {service.price}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleOrderClick(service.id)}
                          className={`bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white px-4 py-2 text-sm rounded-full shadow-lg transition-all duration-300 ${
                            service.id === "social-media" ||
                            service.id === "seo"
                              ? "flex-1"
                              : "flex-1"
                          }`}
                        >
                          Order Now
                        </Button>
                        {service.id !== "social-media" &&
                          service.id !== "seo" && (
                            <Button
                              size="sm"
                              variant="outline"
                              asChild
                              className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white px-4 py-2 text-sm rounded-full transition-all duration-300"
                            >
                              <Link
                                to={
                                  service.id === "business-cards"
                                    ? "/business-card-templates"
                                    : "/templates"
                                }
                              >
                                <Eye className="w-4 h-4 mr-1" />
                                Templates
                              </Link>
                            </Button>
                          )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Popups */}
      <Modal isOpen={activePopup === "social-media"} onClose={handleClosePopup}>
        <SocialMediaPopup
          onSubmit={(data) => handleSubmit("Social Media Marketing", data)}
        />
      </Modal>

      <Modal isOpen={activePopup === "seo"} onClose={handleClosePopup}>
        <SEOPopup onSubmit={(data) => handleSubmit("SEO", data)} />
      </Modal>

      <Modal isOpen={activePopup === "photography"} onClose={handleClosePopup}>
        <PhotographyPopup
          onSubmit={(data) => handleSubmit("Photography & Videography", data)}
        />
      </Modal>

      <Modal isOpen={activePopup === "website"} onClose={handleClosePopup}>
        <WebsitePopup
          onSubmit={(data) => handleSubmit("Website Development", data)}
        />
      </Modal>

      <Modal isOpen={activePopup === "app"} onClose={handleClosePopup}>
        <AppPopup onSubmit={(data) => handleSubmit("App Development", data)} />
      </Modal>

      <Modal
        isOpen={activePopup === "business-cards"}
        onClose={handleClosePopup}
      >
        <BusinessCardsPopup
          onSubmit={(data) => handleSubmit("Business Cards", data)}
        />
      </Modal>

      <Modal
        isOpen={activePopup === "affiliate-marketing"}
        onClose={handleClosePopup}
      >
        <AffiliateMarketingPopup
          onSubmit={(data) => handleSubmit("Affiliate Marketing", data)}
        />
      </Modal>

      <Modal
        isOpen={activePopup === "personal-website"}
        onClose={handleClosePopup}
      >
        <PersonalWebsitePopup
          onSubmit={(data) => handleSubmit("Personal Website", data)}
        />
      </Modal>
    </div>
  );
};

export default HomePage;
