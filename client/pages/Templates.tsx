import { motion } from "framer-motion";
import { ExternalLink, Star, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Templates = () => {
  const templates = [
    {
      id: 1,
      title: "Foods and Bakery Template",
      description:
        "Professional bakery and restaurant website with online ordering, menu showcase, and delivery integration. Perfect for food businesses.",
      url: "https://preview--foods-and-bakery.lovable.app/",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fafa4cdfd9cfb4fbfb22388ee70a44e49%2F77bb014385f34745aa37a20528be287d?format=webp&width=800",
      category: "Food & Restaurant",
      features: [
        "Online Ordering",
        "Menu Display",
        "Delivery Integration",
        "Contact Forms",
      ],
    },
    {
      id: 2,
      title: "Safari Adventures Template",
      description:
        "Stunning safari and tourism website featuring breathtaking landscapes, tour packages, and booking systems for adventure companies.",
      url: "https://preview--vybz-tours-voyage-kenya.lovable.app/",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fafa4cdfd9cfb4fbfb22388ee70a44e49%2Fa63d3005451e452e9fb98fc415143881?format=webp&width=800",
      category: "Travel & Tourism",
      features: [
        "Tour Packages",
        "Booking System",
        "Photo Gallery",
        "Testimonials",
      ],
    },
    {
      id: 3,
      title: "Safaris Template",
      description:
        "Premium safari website template with elegant design, wildlife photography showcase, and comprehensive tour management system.",
      url: "https://builder.io/app/projects/1d30dacd73954ad08ba84a6f4b2dd5af/main",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fafa4cdfd9cfb4fbfb22388ee70a44e49%2F8257e18852c64464b1240bdb849fff2b?format=webp&width=800",
      category: "Travel & Safari",
      features: [
        "Wildlife Gallery",
        "Tour Management",
        "Booking Calendar",
        "Multi-language",
      ],
    },
    {
      id: 4,
      title: "Sugar & Spice Eats",
      description:
        "Vibrant restaurant template showcasing authentic Swahili cuisine with rich imagery, online menu, and ordering capabilities.",
      url: "https://preview--sugar-spice-swahili-bites.lovable.app/",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fafa4cdfd9cfb4fbfb22388ee70a44e49%2F35f7aa21676040ca81c40045df3c9e6a?format=webp&width=800",
      category: "Restaurant & Cuisine",
      features: [
        "Recipe Showcase",
        "Cultural Menu",
        "Order Online",
        "Location Finder",
      ],
    },
    {
      id: 5,
      title: "Construction Template",
      description:
        "Professional construction company website with project portfolios, service listings, and client testimonials for building contractors.",
      url: "https://80ddfba2a53540f6a9bb8e6a8342aa36-nova-lab.projects.builder.my/",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fafa4cdfd9cfb4fbfb22388ee70a44e49%2Ff632aae694bd4ce08967e3bdac490110?format=webp&width=800",
      category: "Construction & Building",
      features: [
        "Project Portfolio",
        "Service Catalog",
        "Quote Requests",
        "Team Showcase",
      ],
    },
  ];

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

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
            Website Templates
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Choose from our premium collection of professionally designed
            templates. Get your website up and running in minutes!
          </p>
          <div className="flex items-center justify-center mt-6 space-x-2">
            <Star className="w-5 h-5 text-neon-purple fill-current" />
            <span className="text-foreground/70">
              Premium Quality Templates
            </span>
            <Star className="w-5 h-5 text-neon-purple fill-current" />
          </div>
        </motion.div>

        {/* Templates Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {templates.map((template) => (
            <motion.div
              key={template.id}
              variants={itemVariants}
              className="group"
            >
              <Card className="bg-space-light/50 border-space-light hover:border-neon-purple/50 transition-all duration-300 overflow-hidden">
                {/* Template Preview Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-dark/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-neon-purple/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {template.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
                      onClick={() => window.open(template.url, "_blank")}
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </div>

                {/* Template Info */}
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-neon-purple transition-colors duration-300">
                    {template.title}
                  </h3>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {template.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground/90 mb-2">
                      Key Features:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {template.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-space-dark/50 text-neon-blue px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      className="flex-1 bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple text-white shadow-lg transition-all duration-300"
                      onClick={() => window.open(template.url, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white transition-all duration-300"
                    >
                      Use Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-space-light/30 to-space-light/50 rounded-2xl border border-space-light"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Need a Custom Template?
          </h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Can't find exactly what you're looking for? Our team can create a
            custom template tailored specifically to your business needs.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
          >
            Request Custom Template
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Templates;
