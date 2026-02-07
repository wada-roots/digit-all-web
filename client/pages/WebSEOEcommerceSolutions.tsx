import { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  ArrowRight,
  Globe,
  Search,
  ShoppingCart,
  Code,
  Wrench,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Modal from "@/components/Modal";
import SEOPopup from "@/components/popups/SEOPopup";
import WebsitePopup from "@/components/popups/WebsitePopup";

const WebSEOEcommerceSolutions = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const handleClosePopup = () => {
    setActivePopup(null);
  };

  const handleSubmit = async (serviceType: string, data: any) => {
    try {
      console.log(`${serviceType} form data received:`, data);

      // Validate required fields
      if (!data.email) {
        alert("Email is required");
        return;
      }

      // Create URL-encoded form data
      const params = new URLSearchParams();

      // Add basic info - handle both businessName and companyName
      const name = data.businessName || data.companyName || data.name || "";
      const email = data.email || "";
      const phone = data.phone || "";
      const company = data.company || "";
      const budget = data.budget || "";

      params.append("name", name);
      params.append("email", email);
      params.append("phone", phone);
      params.append("company", company);
      params.append("service", serviceType);
      params.append("budget", budget);

      // Add all other form fields as JSON string
      const additionalFields = { ...data };
      delete additionalFields.businessName;
      delete additionalFields.companyName;
      delete additionalFields.name;
      delete additionalFields.email;
      delete additionalFields.phone;
      delete additionalFields.company;
      delete additionalFields.budget;

      const messageJSON = JSON.stringify(additionalFields);
      params.append("message", messageJSON);

      console.log("Sending to Google Apps Script:", {
        name,
        email,
        phone,
        company,
        service: serviceType,
        budget,
        message: messageJSON,
      });

      // Send to Google Apps Script
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwmdQ2jhIFvoRXwfsqp8Mby6OxwhU_ldyBK7gU04Fy5rylZmvmIVcFfpR2p7UWI7JfkUQ/exec",
        {
          method: "POST",
          body: params,
          mode: "no-cors",
        }
      );

      console.log("Fetch response status:", response.status);
      console.log(`${serviceType} inquiry submitted successfully`);

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

  const solutions = [
    {
      id: "web-hosting",
      title: "Web Hosting & Domain Registration",
      description: "Secure, fast, and reliable hosting for your website",
      icon: Globe,
      features: [
        "99.9% Uptime Guarantee",
        "Free SSL Certificate",
        "Daily Backups",
        "24/7 Support",
        "One-Click WordPress Install",
        "DDoS Protection",
      ],
      price: "From $9.99/month",
    },
    {
      id: "web-design",
      title: "Website Design",
      description: "Beautiful, responsive websites that convert visitors",
      icon: Code,
      features: [
        "Custom Design",
        "Mobile Responsive",
        "SEO Optimized",
        "Fast Loading",
        "CMS Integration",
        "Analytics Setup",
      ],
      price: "From $1,499",
    },
    {
      id: "seo",
      title: "Search Engine Optimization (SEO)",
      description: "Rank higher on Google and drive organic traffic",
      icon: Search,
      features: [
        "Keyword Research",
        "On-Page Optimization",
        "Technical SEO",
        "Link Building",
        "Local SEO",
        "Monthly Reports",
      ],
      price: "From $499/month",
    },
    {
      id: "ecommerce",
      title: "eCommerce Website Design",
      description: "Powerful online stores that drive sales",
      icon: ShoppingCart,
      features: [
        "Product Management",
        "Shopping Cart Integration",
        "Payment Gateway Setup",
        "Inventory Management",
        "Order Tracking",
        "Mobile Optimization",
      ],
      price: "From $2,499",
    },
    {
      id: "maintenance",
      title: "Website Maintenance",
      description: "Keep your website updated and secure",
      icon: Wrench,
      features: [
        "Regular Updates",
        "Security Monitoring",
        "Performance Optimization",
        "Bug Fixes",
        "Content Updates",
        "Priority Support",
      ],
      price: "From $199/month",
    },
    {
      id: "content-writing",
      title: "Content Writing Services",
      description: "Engaging content that drives conversions",
      icon: FileText,
      features: [
        "Blog Posts",
        "Product Descriptions",
        "Website Copy",
        "SEO Optimization",
        "Editing & Proofreading",
        "Content Strategy",
      ],
      price: "From $99/article",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Web Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-space-darker/90 via-space-dark/80 to-blue-900/70"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-neon-blue to-neon-yellow bg-clip-text text-transparent leading-tight">
            Websites, SEO & eCommerce Solutions
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Complete web solutions to establish and grow your online presence
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
              onClick={() => setActivePopup("web-design")}
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Started
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Solutions Grid */}
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
              Web Development & eCommerce Services
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Everything you need for a successful online presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-space-light/50 border-space-light hover:border-neon-blue/50 transition-all duration-300 group h-full">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-neon-blue to-neon-yellow rounded-lg flex items-center justify-center mb-4">
                      <solution.icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-semibold mb-3 text-foreground">
                      {solution.title}
                    </h3>

                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-neon-blue mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-foreground/80 flex items-center"
                          >
                            <span className="w-2 h-2 bg-neon-yellow rounded-full mr-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-neon-blue font-bold">
                        {solution.price}
                      </span>
                      <Button
                        size="sm"
                        onClick={() =>
                          setActivePopup(
                            solution.id === "seo"
                              ? "seo"
                              : solution.id === "web-design"
                                ? "web-design"
                                : "web-design",
                          )
                        }
                        className="bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white rounded-full transition-all duration-300"
                      >
                        Learn More
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
            Ready to Launch Your Online Presence?
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's build a powerful website that drives real business results
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
            onClick={() => setActivePopup("web-design")}
          >
            <Zap className="w-5 h-5 mr-2" />
            Get Free Consultation
          </Button>
        </motion.div>
      </section>

      {/* Popups */}
      <Modal isOpen={activePopup === "web-design"} onClose={handleClosePopup}>
        <WebsitePopup
          onSubmit={(data) => handleSubmit("Website Design", data)}
        />
      </Modal>

      <Modal isOpen={activePopup === "seo"} onClose={handleClosePopup}>
        <SEOPopup onSubmit={(data) => handleSubmit("SEO Services", data)} />
      </Modal>
    </div>
  );
};

export default WebSEOEcommerceSolutions;
