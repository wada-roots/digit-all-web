import { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  ArrowRight,
  Image,
  Video,
  Palette,
  Radio,
  Printer,
  Megaphone,
  Users,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Modal from "@/components/Modal";
import PhotographyPopup from "@/components/popups/PhotographyPopup";

const MediaCreativesSolutions = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const handleClosePopup = () => {
    setActivePopup(null);
  };

  const handleSubmit = (serviceType: string, data: any) => {
    console.log(`${serviceType} inquiry:`, data);
    alert(
      `Thank you for your ${serviceType} inquiry! We'll get back to you within 24 hours.`,
    );
    setActivePopup(null);
  };

  const solutions = [
    {
      id: "graphic-design",
      title: "Graphic Design",
      description: "Eye-catching designs that make your brand stand out",
      icon: Palette,
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Marketing Materials",
        "Social Media Graphics",
        "Packaging Design",
        "Print Design",
      ],
      price: "From $299",
    },
    {
      id: "photography",
      title: "Photography Services",
      description: "Professional photography for your business and events",
      icon: Image,
      features: [
        "Product Photography",
        "Corporate Photography",
        "Event Coverage",
        "Portrait Sessions",
        "Drone Photography",
        "High-Resolution Images",
      ],
      price: "From $499/session",
    },
    {
      id: "video",
      title: "Video Creation & Editing",
      description: "Professional videos that tell your brand story",
      icon: Video,
      features: [
        "Promotional Videos",
        "Corporate Videos",
        "Social Media Videos",
        "Product Demos",
        "Testimonial Videos",
        "Professional Editing",
      ],
      price: "From $799",
    },
    {
      id: "billboard",
      title: "Billboard Advertising",
      description: "High-impact outdoor advertising for maximum visibility",
      icon: Megaphone,
      features: [
        "Prime Location Selection",
        "Creative Design",
        "Professional Installation",
        "3-Month Contracts",
        "Design Included",
        "Traffic Analysis",
      ],
      price: "From $1,999/month",
    },
    {
      id: "radio",
      title: "Radio Advertising",
      description: "Reach local audiences with targeted radio campaigns",
      icon: Radio,
      features: [
        "Station Selection",
        "Jingle Creation",
        "Campaign Management",
        "Airtime Booking",
        "Performance Tracking",
        "Flexible Duration",
      ],
      price: "From $499/month",
    },
    {
      id: "print",
      title: "Print Media Advertising",
      description: "Newspapers and magazines advertising campaigns",
      icon: Printer,
      features: [
        "Magazine Ads",
        "Newspaper Ads",
        "Publication Selection",
        "Design Services",
        "Circulation Reports",
        "Multi-Publication",
      ],
      price: "From $399/month",
    },
    {
      id: "roadshows",
      title: "Roadshows & Activations",
      description: "Engaging brand activation events for direct customer engagement",
      icon: Users,
      features: [
        "Event Planning",
        "Venue Coordination",
        "Brand Activation",
        "Crowd Engagement",
        "Product Sampling",
        "Photography Coverage",
      ],
      price: "From $3,999",
    },
    {
      id: "experiential",
      title: "Experiential Marketing",
      description: "Create memorable brand experiences for your customers",
      icon: Lightbulb,
      features: [
        "Event Design",
        "Interactive Installations",
        "Brand Experiences",
        "Customer Engagement",
        "Content Creation",
        "Social Media Integration",
      ],
      price: "From $2,499",
    },
    {
      id: "printing",
      title: "Printing Services",
      description: "High-quality printing for all your marketing materials",
      icon: Printer,
      features: [
        "Business Cards",
        "Brochures",
        "Flyers",
        "Banners",
        "Postcards",
        "Custom Printing",
      ],
      price: "From $99",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3379942/pexels-photo-3379942.jpeg"
            alt="Media & Creatives"
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
            TTL, Media & Creatives Solutions
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Creative services and below-the-line marketing to engage and inspire
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
              onClick={() => setActivePopup("photography")}
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
              Creative & Media Services
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Comprehensive creative solutions to elevate your brand
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
                        onClick={() => setActivePopup("photography")}
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
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Our creative team is ready to bring your vision to life
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
            onClick={() => setActivePopup("photography")}
          >
            <Zap className="w-5 h-5 mr-2" />
            Get Free Consultation
          </Button>
        </motion.div>
      </section>

      {/* Popup */}
      <Modal isOpen={activePopup === "photography"} onClose={handleClosePopup}>
        <PhotographyPopup
          onSubmit={(data) => handleSubmit("Photography & Videography", data)}
        />
      </Modal>
    </div>
  );
};

export default MediaCreativesSolutions;
