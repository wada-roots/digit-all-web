import { motion } from 'framer-motion';
import { ExternalLink, Star, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BusinessCardTemplates = () => {
  const businessCardTemplates = [
    {
      id: 1,
      title: "Modern Minimalist",
      description: "Clean, professional design with bold typography and minimal color palette. Perfect for corporate professionals.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Professional",
      style: "Minimalist",
      colors: ["Black", "White", "Blue"],
      format: "Standard (3.5 × 2 inches)"
    },
    {
      id: 2,
      title: "Creative Gradient",
      description: "Eye-catching gradient design with modern typography. Ideal for creative agencies and designers.",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Creative",
      style: "Modern",
      colors: ["Purple", "Pink", "Orange"],
      format: "Standard (3.5 × 2 inches)"
    },
    {
      id: 3,
      title: "Elegant Gold Foil",
      description: "Luxury design with gold foil accents and premium finish. Perfect for high-end businesses.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Luxury",
      style: "Elegant",
      colors: ["Black", "Gold", "White"],
      format: "Standard (3.5 × 2 inches)"
    },
    {
      id: 4,
      title: "Tech Startup",
      description: "Modern tech-inspired design with geometric patterns and vibrant colors for startups.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Technology",
      style: "Modern",
      colors: ["Blue", "Green", "White"],
      format: "Standard (3.5 × 2 inches)"
    },
    {
      id: 5,
      title: "Vintage Classic",
      description: "Timeless vintage design with classic typography and traditional elements.",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Traditional",
      style: "Vintage",
      colors: ["Brown", "Cream", "Gold"],
      format: "Standard (3.5 × 2 inches)"
    },
    {
      id: 6,
      title: "Artistic Watercolor",
      description: "Creative watercolor background with artistic flair. Great for artists and creative professionals.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Artistic",
      style: "Creative",
      colors: ["Multicolor", "Blue", "Purple"],
      format: "Standard (3.5 × 2 inches)"
    },
    {
      id: 7,
      title: "Corporate Professional",
      description: "Traditional corporate design with clean lines and professional appearance.",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Corporate",
      style: "Professional",
      colors: ["Navy", "White", "Silver"],
      format: "Standard (3.5 × 2 inches)"
    },
    {
      id: 8,
      title: "Bold Geometric",
      description: "Strong geometric patterns with bold colors for maximum impact and brand recognition.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Modern",
      style: "Bold",
      colors: ["Red", "Black", "White"],
      format: "Standard (3.5 × 2 inches)"
    },
    {
      id: 9,
      title: "Nature Eco-Friendly",
      description: "Organic design with natural elements and earth tones. Perfect for eco-conscious businesses.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Eco-Friendly",
      style: "Natural",
      colors: ["Green", "Brown", "Cream"],
      format: "Standard (3.5 × 2 inches)"
    },
    {
      id: 10,
      title: "Premium Black Card",
      description: "Sophisticated black card with metallic accents and premium finishing for exclusive brands.",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Premium",
      style: "Luxury",
      colors: ["Black", "Silver", "White"],
      format: "Standard (3.5 × 2 inches)"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
            Business Card Templates
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Professional business card designs that make lasting impressions. Choose from our premium collection of templates.
          </p>
          <div className="flex items-center justify-center mt-6 space-x-2">
            <Star className="w-5 h-5 text-neon-purple fill-current" />
            <span className="text-foreground/70">Premium Quality Designs</span>
            <Star className="w-5 h-5 text-neon-purple fill-current" />
          </div>
        </motion.div>

        {/* Templates Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {businessCardTemplates.map((template) => (
            <motion.div
              key={template.id}
              variants={itemVariants}
              className="group"
            >
              <Card className="bg-space-light/50 border-space-light hover:border-neon-purple/50 transition-all duration-300 overflow-hidden">
                {/* Template Preview Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-dark/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-neon-purple/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {template.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </div>

                {/* Template Info */}
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-neon-purple transition-colors duration-300">
                    {template.title}
                  </h3>
                  <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                    {template.description}
                  </p>

                  {/* Template Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-foreground/70">Style:</span>
                      <span className="text-xs text-neon-purple font-semibold">{template.style}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-foreground/70">Colors:</span>
                      <div className="flex gap-1">
                        {template.colors.map((color, index) => (
                          <span key={index} className="text-xs bg-space-dark/50 px-2 py-1 rounded">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-foreground/70">Format:</span>
                      <span className="text-xs text-foreground/80">{template.format}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      className="flex-1 bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple text-white shadow-lg transition-all duration-300"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Use Template
                    </Button>
                    <Button
                      variant="outline"
                      className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
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
            Need Custom Business Cards?
          </h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Can't find the perfect design? Our team can create custom business cards tailored specifically to your brand identity and business needs.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
          >
            Request Custom Design
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessCardTemplates;
