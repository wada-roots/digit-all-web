import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Play,
  Star,
  Zap,
  Rocket,
  Eye,
  Globe,
  Smartphone,
  Share2,
  Camera,
  ExternalLink,
  Code2,
  Radio,
  Film,
} from "lucide-react";
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
  const navigate = useNavigate();
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel background images - 3 quality responsive photos related to our solutions
  const backgroundImages = [
    "https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&fit=crop", // Digital Marketing & Analytics (Darker)
    "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&fit=crop", // Creative Team & Media Production (Darker)
    "https://images.pexels.com/photos/5380590/pexels-photo-5380590.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&fit=crop", // Software Development & Technology (Darker)
  ];

  // Portfolio data organized by categories
  const portfolioData = [
    {
      id: "websites",
      title: "Websites",
      description: "Custom responsive websites we've built",
      icon: Code2,
      items: [
        {
          name: "Example Website 1",
          description: "E-commerce platform with advanced features",
          thumbnail:
            "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
          url: "https://example.com",
          type: "website",
        },
        {
          name: "Example Website 2",
          description: "Corporate business website",
          thumbnail:
            "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg",
          url: "https://example.com",
          type: "website",
        },
        {
          name: "Example Website 3",
          description: "Service-based company site",
          thumbnail:
            "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg",
          url: "https://example.com",
          type: "website",
        },
      ],
    },
    {
      id: "social-media",
      title: "Social Media Marketing",
      description: "Managed social media accounts with impressive growth",
      icon: Share2,
      items: [
        {
          name: "Client Facebook Page",
          description: "Achieved 250K followers with organic growth",
          thumbnail:
            "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
          url: "https://facebook.com",
          platform: "Facebook",
        },
        {
          name: "Client Instagram Account",
          description: "E-commerce focused with 150K engaged followers",
          thumbnail:
            "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
          url: "https://instagram.com",
          platform: "Instagram",
        },
        {
          name: "Client LinkedIn Profile",
          description: "B2B content strategy driving 50K followers",
          thumbnail:
            "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
          url: "https://linkedin.com",
          platform: "LinkedIn",
        },
      ],
    },
    {
      id: "youtube",
      title: "YouTube Management",
      description: "YouTube channels we manage and optimize",
      icon: Radio,
      items: [
        {
          name: "Channel 1: Tech Reviews",
          description: "500K+ subscribers | 2M+ monthly views",
          thumbnail:
            "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
          url: "https://youtube.com",
          subscribers: "500K+",
        },
        {
          name: "Channel 2: Business Tips",
          description: "250K+ subscribers | 1M+ monthly views",
          thumbnail:
            "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
          url: "https://youtube.com",
          subscribers: "250K+",
        },
      ],
    },
    {
      id: "videography",
      title: "Videography & Video Production",
      description: "Professional video content creation and editing",
      icon: Film,
      items: [
        {
          name: "Corporate Promotional Video",
          description: "High-quality brand awareness video",
          thumbnail:
            "https://images.pexels.com/photos/3379942/pexels-photo-3379942.jpeg",
          url: "https://youtube.com",
          type: "video",
        },
        {
          name: "Product Showcase Video",
          description: "Product demo with motion graphics",
          thumbnail:
            "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
          url: "https://youtube.com",
          type: "video",
        },
        {
          name: "Customer Testimonial Video",
          description: "Authentic client success stories",
          thumbnail:
            "https://images.pexels.com/photos/3178829/pexels-photo-3178829.jpeg",
          url: "https://youtube.com",
          type: "video",
        },
      ],
    },
  ];

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handleOrderClick = (serviceType: string) => {
    setActivePopup(serviceType);
  };

  const handleClosePopup = () => {
    setActivePopup(null);
  };

  const handleSubmit = async (serviceType: string, data: any) => {
    try {
      // Create URL-encoded form data
      const params = new URLSearchParams();

      // Add basic info
      params.append("name", data.businessName || data.companyName || "");
      params.append("email", data.email || "");
      params.append("phone", data.phone || "");
      params.append("company", data.company || "");
      params.append("service", serviceType);
      params.append("budget", data.budget || "");

      // Add all other form fields as JSON string
      const additionalFields = { ...data };
      delete additionalFields.businessName;
      delete additionalFields.companyName;
      delete additionalFields.email;
      delete additionalFields.phone;
      delete additionalFields.company;
      delete additionalFields.budget;

      params.append("message", JSON.stringify(additionalFields));

      // Send to Google Apps Script
      await fetch(
        "https://script.google.com/macros/s/AKfycbwmdQ2jhIFvoRXwfsqp8Mby6OxwhU_ldyBK7gU04Fy5rylZmvmIVcFfpR2p7UWI7JfkUQ/exec",
        {
          method: "POST",
          body: params,
          mode: "no-cors",
        }
      );

      console.log(`${serviceType} form submitted:`, data);
      alert(
        `Thank you for your ${serviceType} inquiry! We'll get back to you within 24 hours.`,
      );
      setActivePopup(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Still show success message due to no-cors limitations
      alert(
        `Thank you for your ${serviceType} inquiry! We'll get back to you within 24 hours.`,
      );
      setActivePopup(null);
    }
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

  return (
    <div className="relative">
      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Tech Background ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0,
                scale: index === currentImageIndex ? 1.05 : 1,
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-space-darker/92 via-space-dark/88 to-blue-900/75"></div>

          {/* Animated Background Elements */}
          <motion.div
            className="absolute top-1/4 -left-40 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-40 w-full h-96 bg-neon-yellow/15 rounded-full blur-3xl"
            animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-neon-blue/10 border border-neon-blue/30 rounded-full px-4 py-2 w-fit">
                <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
                <span className="text-neon-blue font-semibold text-sm">
                  Trusted by 500+ Businesses
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-white via-neon-blue to-neon-yellow bg-clip-text text-transparent">
                    Transform Your
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-neon-yellow via-neon-blue to-white bg-clip-text text-transparent">
                    Digital Presence
                  </span>
                </h1>
                <p className="text-xl text-foreground/80 max-w-lg leading-relaxed font-medium">
                  Professional web design, marketing solutions, and software
                  development to elevate your business.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 border border-neon-blue/20 rounded-lg p-3 sm:p-4 backdrop-blur-sm hover:border-neon-blue/50 transition-all"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-neon-yellow">
                    500+
                  </p>
                  <p className="text-xs sm:text-sm text-foreground/70">
                    Happy Clients
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 border border-neon-yellow/20 rounded-lg p-3 sm:p-4 backdrop-blur-sm hover:border-neon-yellow/50 transition-all"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-neon-blue">
                    1000+
                  </p>
                  <p className="text-xs sm:text-sm text-foreground/70">
                    Projects Done
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 border border-neon-blue/20 rounded-lg p-3 sm:p-4 backdrop-blur-sm hover:border-neon-blue/50 transition-all"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-neon-yellow">
                    98%
                  </p>
                  <p className="text-xs sm:text-sm text-foreground/70">
                    Satisfaction
                  </p>
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white font-bold py-6 text-lg rounded-full shadow-lg transition-all duration-300"
                  >
                    Get Started Now
                    <Zap className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white font-bold py-6 text-lg rounded-full transition-all duration-300"
                    asChild
                  >
                    <Link to="/portfolio">
                      View Our Work
                      <ExternalLink className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Service Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-neon-blue font-semibold text-lg">
                  Our Services
                </h3>

                {[
                  {
                    icon: "🌐",
                    title: "Web Design",
                    desc: "Stunning responsive websites",
                    color: "neon-blue",
                    link: "/solutions/web-seo-ecommerce",
                  },
                  {
                    icon: "📱",
                    title: "App Development",
                    desc: "Native iOS & Android apps",
                    color: "neon-yellow",
                    link: "/solutions/software-development",
                  },
                  {
                    icon: "📊",
                    title: "Digital Marketing",
                    desc: "Growth-focused strategies",
                    color: "neon-blue",
                    link: "/solutions/digital-marketing",
                  },
                ].map((service, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 10 }}
                    onClick={() => navigate(service.link)}
                    className="bg-gradient-to-r from-white/10 to-white/5 border border-neon-blue/20 hover:border-neon-blue/50 rounded-lg p-4 backdrop-blur-sm transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl group-hover:scale-125 transition-transform">
                        {service.icon}
                      </span>
                      <div className="flex-1">
                        <p className="font-semibold text-neon-yellow group-hover:text-neon-blue transition-colors">
                          {service.title}
                        </p>
                        <p className="text-sm text-foreground/70 group-hover:text-foreground/90">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-neon-blue/20 to-neon-yellow/20 border border-neon-blue/30 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-neon-yellow text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-foreground/90 mb-4 italic">
                  "Exceptional service and amazing results. Highly recommended!"
                </p>
                <p className="font-semibold text-neon-blue">
                  — Sarah Johnson, CEO
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm text-foreground/60 font-semibold">
                Scroll to explore
              </p>
              <ChevronDown className="w-5 h-5 text-neon-blue" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-space-darker/50 to-blue-900/30 border-b border-neon-blue/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { num: "50+", label: "Industry Awards" },
              { num: "10+", label: "Years Experience" },
              { num: "24/7", label: "Customer Support" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <p
                  className={`text-4xl font-bold mb-2 ${idx % 2 === 0 ? "text-neon-blue" : "text-neon-yellow"}`}
                >
                  {stat.num}
                </p>
                <p className="text-foreground/70 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Limited Offers Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-yellow bg-clip-text text-transparent">
              Limited Time Offers
            </h2>
            <p className="text-xl text-foreground/70">
              Save up to 60% on our premium services
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Personal Websites Offer */}
            <motion.div
              className="bg-gradient-to-br from-space-light/80 to-space-dark/60 backdrop-blur-lg border border-neon-blue/30 rounded-2xl p-6 hover:border-neon-blue/60 transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              variants={itemVariants}
            >
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
                  alt="Personal Website Design"
                  loading="lazy"
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
                stunning, professional website that showcases your skills and
                achievements!
              </p>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-neon-blue">$99</span>
                  <span className="text-sm text-foreground/60 line-through">
                    $199
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-foreground/80">
                  {[
                    "Responsive Design",
                    "Portfolio Section",
                    "Contact Forms",
                    "SEO Optimized",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Star className="w-4 h-4 text-neon-yellow mr-2" />
                      {feature}
                    </li>
                  ))}
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
              variants={itemVariants}
            >
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg"
                  alt="Affiliate Marketing Strategy"
                  loading="lazy"
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
                Earn with our Affiliate Marketing program by referring us to
                clients. Send potential client details and start earning
                commissions!
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
                  {[
                    "Free Registration",
                    "20% Commission",
                    "Monthly Payouts",
                    "Easy Referral Process",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Star className="w-4 h-4 text-neon-blue mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-neon-yellow to-neon-blue hover:from-neon-blue hover:to-neon-yellow text-white font-semibold py-3 rounded-full shadow-lg transition-all duration-300"
                onClick={() => (window.location.href = "/login")}
              >
                START EARNING!!
              </Button>
            </motion.div>
          </motion.div>
        </div>
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
              🎯 Results-driven packages that transform your business
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
                price: "From $99/month",
              },
              {
                id: "seo",
                image:
                  "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg",
                title: "Search Engine Optimization",
                description: "Rank #1 on Google within 90 days",
                caption: "80% of your SEO work is done automatically",
                price: "From $99/month",
              },
              {
                id: "photography",
                image:
                  "https://images.pexels.com/photos/3379942/pexels-photo-3379942.jpeg",
                title: "Photography & Videography",
                description: "Professional content that converts",
                caption: "Get your brand photoshoot in one session",
                price: "From $99/month",
              },
              {
                id: "website",
                image:
                  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
                title: "Software Development",
                description:
                  "Lightning-fast, mobile-responsive websites & apps",
                caption: "Get your website template in 10 minutes",
                price: "From $99/month",
              },
              {
                id: "app",
                image:
                  "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
                title: "App Development",
                description: "Native iOS & Android apps that scale",
                caption: "80% of your app is done with our templates",
                price: "From $99/month",
              },
              {
                id: "business-cards",
                image:
                  "https://images.pexels.com/photos/7648514/pexels-photo-7648514.jpeg",
                title: "Business Cards",
                description: "Premium designs that make lasting impressions",
                caption: "Get your business cards designed in 2 hours",
                price: "From $99/month",
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
                      loading="lazy"
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
                          className="flex-1 bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white px-4 py-2 text-sm rounded-full shadow-lg transition-all duration-300"
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

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-space-dark/50 to-space-darker/50 border-t border-neon-blue/20"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-yellow bg-clip-text text-transparent">
              Our Portfolio
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              🎯 Proven results across diverse industries. Browse samples of
              work we've delivered.
            </p>
          </motion.div>

          <div className="space-y-16">
            {portfolioData.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <IconComponent className="w-8 h-8 text-neon-blue" />
                      <h3 className="text-3xl font-bold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-foreground/70 text-lg">
                      {category.description}
                    </p>
                  </div>

                  <div
                    className={`grid grid-cols-1 ${category.id === "youtube" ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"} gap-8`}
                  >
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                      >
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block h-full"
                        >
                          <Card className="bg-space-light/50 border-space-light hover:border-neon-blue/50 transition-all duration-300 overflow-hidden h-full flex flex-col">
                            <div className="relative overflow-hidden bg-space-dark h-48">
                              <img
                                src={item.thumbnail}
                                alt={item.name}
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-space-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ExternalLink className="w-8 h-8 text-neon-yellow" />
                              </div>
                            </div>
                            <CardContent className="p-6 flex-1 flex flex-col">
                              <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-neon-blue transition-colors duration-300">
                                {item.name}
                              </h4>
                              <p className="text-foreground/70 text-sm mb-4 flex-1">
                                {item.description}
                              </p>
                            </CardContent>
                          </Card>
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-foreground/80 text-lg mb-6">
              Ready to see your business shine with our expertise?
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
              asChild
            >
              <Link to="/portfolio">View Full Portfolio</Link>
            </Button>
          </motion.div>
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
