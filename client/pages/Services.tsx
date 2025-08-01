import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Camera,
  Search,
  Share2,
  CreditCard,
  Star,
  ArrowRight,
  Check,
  Zap,
  Users,
  Target,
  TrendingUp,
  Award,
  Clock,
  Shield
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

const Services = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const handleQuoteClick = (serviceType: string) => {
    setActivePopup(serviceType);
  };

  const handleClosePopup = () => {
    setActivePopup(null);
  };

  const handleSubmit = (serviceType: string, data: any) => {
    console.log(`${serviceType} quote request:`, data);
    alert(`Thank you for your ${serviceType} quote request! We'll get back to you within 24 hours.`);
    setActivePopup(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const mainServices = [
    {
      id: "website",
      icon: Globe,
      title: "Website Development",
      description: "Professional websites that convert visitors into customers",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      price: "From Ksh 15,000",
      features: [
        "Responsive Design",
        "SEO Optimized", 
        "Fast Loading Speed",
        "Mobile Friendly",
        "Content Management",
        "Security Features"
      ],
      deliverables: [
        "Custom Website Design",
        "Domain & Hosting Setup", 
        "SSL Certificate",
        "Google Analytics",
        "Contact Forms",
        "Social Media Integration"
      ]
    },
    {
      id: "app",
      icon: Smartphone,
      title: "App Development",
      description: "Native mobile apps for iOS and Android platforms",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg",
      price: "From Ksh 50,000",
      features: [
        "Cross-Platform Development",
        "Native Performance",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
        "Cloud Integration"
      ],
      deliverables: [
        "iOS & Android Apps",
        "App Store Submission",
        "User Authentication",
        "Database Integration",
        "API Development",
        "App Maintenance"
      ]
    },
    {
      id: "social-media",
      icon: Share2,
      title: "Social Media Marketing",
      description: "Boost your online presence with strategic social media campaigns",
      image: "https://images.pexels.com/photos/13883892/pexels-photo-13883892.jpeg",
      price: "From Ksh 25,000/month",
      features: [
        "Content Creation",
        "Social Media Strategy",
        "Community Management",
        "Influencer Outreach",
        "Analytics & Reporting",
        "Paid Advertising"
      ],
      deliverables: [
        "Monthly Content Calendar",
        "Daily Posting",
        "Engagement Management",
        "Performance Reports",
        "Brand Growth Strategy",
        "Campaign Optimization"
      ]
    },
    {
      id: "seo",
      icon: Search,
      title: "SEO Services",
      description: "Rank higher on Google and drive organic traffic to your business",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg",
      price: "From Ksh 20,000/month",
      features: [
        "Keyword Research",
        "On-Page Optimization",
        "Technical SEO",
        "Link Building",
        "Local SEO",
        "SEO Audits"
      ],
      deliverables: [
        "SEO Strategy Plan",
        "Monthly Reports",
        "Keyword Rankings",
        "Content Optimization",
        "Backlink Building",
        "Traffic Growth"
      ]
    },
    {
      id: "photography",
      icon: Camera,
      title: "Photography & Videography",
      description: "Professional visual content that tells your brand story",
      image: "https://images.pexels.com/photos/3379942/pexels-photo-3379942.jpeg",
      price: "From Ksh 30,000/project",
      features: [
        "Product Photography",
        "Corporate Videos",
        "Event Coverage",
        "Promotional Content",
        "Drone Photography",
        "Video Editing"
      ],
      deliverables: [
        "High-Quality Images",
        "Professional Videos",
        "Edited Content",
        "Multiple Formats",
        "Commercial License",
        "Quick Turnaround"
      ]
    },
    {
      icon: CreditCard,
      title: "Business Cards",
      description: "Premium business card designs that make lasting impressions",
      image: "https://images.pexels.com/photos/7648514/pexels-photo-7648514.jpeg",
      price: "From Ksh 5,000",
      features: [
        "Custom Design",
        "Premium Materials",
        "Multiple Finishes",
        "Quick Delivery",
        "Design Revisions",
        "Bulk Printing"
      ],
      deliverables: [
        "Custom Card Design",
        "Print-Ready Files",
        "Multiple Variations",
        "Business Card Printing",
        "Design Source Files",
        "Brand Guidelines"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We understand your business goals, target audience, and project requirements to create a tailored strategy.",
      icon: Target
    },
    {
      step: "02", 
      title: "Design & Development",
      description: "Our expert team creates stunning designs and develops robust solutions using the latest technologies.",
      icon: Zap
    },
    {
      step: "03",
      title: "Testing & Launch",
      description: "Rigorous testing ensures everything works perfectly before we launch your project to the world.",
      icon: Shield
    },
    {
      step: "04",
      title: "Support & Growth",
      description: "Ongoing support and optimization to ensure your digital presence continues to grow and succeed.",
      icon: TrendingUp
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Expert Team",
      description: "Skilled professionals with years of experience in digital marketing and development."
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality or attention to detail."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our priority. We work closely with you throughout the entire process."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track record of delivering measurable results and growing businesses online."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
            alt="Services Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-space-darker/90 via-space-dark/80 to-blue-900/70"></div>
        </div>

        {/* Animated Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-blue/20 rounded-full blur-2xl"
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-neon-yellow/20 rounded-full blur-2xl"
            animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
        </div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-neon-blue to-neon-yellow bg-clip-text text-transparent leading-tight">
              Our Services
            </h1>
            <p className="text-xl sm:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions to grow your business online. From websites to marketing campaigns, we've got you covered.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Started Today
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              View Portfolio
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-yellow bg-clip-text text-transparent">
              What We Offer
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Complete digital solutions designed to elevate your business and drive measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-space-light/50 border-space-light hover:border-neon-blue/50 transition-all duration-300 group overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-dark/90 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-neon-blue/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-neon-yellow" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-2xl font-bold text-white mb-1">{service.title}</div>
                      <div className="text-neon-yellow font-semibold">{service.price}</div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-neon-blue mb-3">Features</h4>
                        <div className="space-y-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-foreground/80">
                              <Check className="w-4 h-4 text-neon-yellow mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-neon-blue mb-3">Deliverables</h4>
                        <div className="space-y-2">
                          {service.deliverables.slice(0, 3).map((deliverable, idx) => (
                            <div key={idx} className="flex items-center text-sm text-foreground/80">
                              <Star className="w-4 h-4 text-neon-yellow mr-2 flex-shrink-0" />
                              {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-space-light">
                      <Button
                        className="w-full bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white font-semibold py-3 rounded-full shadow-lg transition-all duration-300"
                      >
                        Get Quote
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-space-light/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-yellow bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery every time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-neon-blue to-neon-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-neon-yellow text-space-dark rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-yellow bg-clip-text text-transparent">
              Why Choose DMS?
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              We're committed to delivering exceptional results that drive your business forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{reason.title}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-space-dark to-space-darker">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-yellow bg-clip-text text-transparent">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives real results for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              View Our Work
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
