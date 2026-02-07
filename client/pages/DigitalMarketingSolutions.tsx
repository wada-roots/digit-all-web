import { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  ArrowRight,
  TrendingUp,
  Target,
  Users,
  BarChart3,
  Smartphone,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Modal from "@/components/Modal";
import SocialMediaPopup from "@/components/popups/SocialMediaPopup";

const DigitalMarketingSolutions = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

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

      console.log(`${serviceType} inquiry:`, data);
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
      id: "social-media",
      title: "Social Media Marketing",
      description: "Build and engage your community across all major platforms",
      icon: Users,
      features: [
        "Content Creation & Strategy",
        "Community Management",
        "Paid Social Advertising",
        "Analytics & Reporting",
        "Influencer Partnerships",
        "Crisis Management",
      ],
      price: "From $299/month",
    },
    {
      id: "ppc",
      title: "Google & PPC Advertising",
      description: "Get immediate results with targeted paid advertising",
      icon: Target,
      features: [
        "Google Ads Management",
        "Landing Page Optimization",
        "Conversion Tracking",
        "A/B Testing",
        "Bid Optimization",
        "Monthly Reporting",
      ],
      price: "From $499/month",
    },
    {
      id: "youtube",
      title: "YouTube Advertising",
      description: "Reach millions with video advertising on YouTube",
      icon: Smartphone,
      features: [
        "Video Ad Creation",
        "Channel Optimization",
        "Audience Targeting",
        "View Tracking",
        "Content Strategy",
        "Performance Analytics",
      ],
      price: "From $399/month",
    },
    {
      id: "tiktok",
      title: "TikTok Advertising",
      description: "Connect with younger audiences on TikTok",
      icon: Globe,
      features: [
        "TikTok Ads Management",
        "Viral Content Strategy",
        "Hashtag Research",
        "Influencer Collaborations",
        "Trend Analysis",
        "Performance Reports",
      ],
      price: "From $349/month",
    },
    {
      id: "email",
      title: "Email Marketing",
      description: "Nurture leads and drive conversions with email campaigns",
      icon: TrendingUp,
      features: [
        "Email List Building",
        "Campaign Design",
        "Automation Setup",
        "A/B Testing",
        "Segmentation",
        "Analytics & Optimization",
      ],
      price: "From $199/month",
    },
    {
      id: "pr",
      title: "Public Relations Services",
      description: "Build your brand reputation and media presence",
      icon: BarChart3,
      features: [
        "Media Relations",
        "Press Release Distribution",
        "Crisis Communication",
        "Brand Positioning",
        "Media Outreach",
        "Reputation Management",
      ],
      price: "From $699/month",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
            alt="Digital Marketing"
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
            Digital Marketing Solutions
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital marketing strategies to grow your business online
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
              onClick={() => setActivePopup("social-media")}
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
              Our Digital Marketing Services
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Choose the right channels to reach your target audience
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
                        onClick={() => setActivePopup(solution.id)}
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
            Ready to Boost Your Digital Presence?
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's create a custom digital marketing strategy for your business
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
            onClick={() => setActivePopup("social-media")}
          >
            <Zap className="w-5 h-5 mr-2" />
            Get Free Consultation
          </Button>
        </motion.div>
      </section>

      {/* Popup */}
      <Modal isOpen={activePopup === "social-media"} onClose={handleClosePopup}>
        <SocialMediaPopup
          onSubmit={(data) => handleSubmit("Social Media Marketing", data)}
        />
      </Modal>
    </div>
  );
};

export default DigitalMarketingSolutions;
