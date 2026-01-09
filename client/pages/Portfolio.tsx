import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Code2,
  Share2,
  Radio,
  Film,
  Search,
  X,
  MapPin,
  Users,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Comprehensive portfolio data
  const portfolioCategories = [
    { id: "all", title: "All Projects", icon: "🎯" },
    { id: "websites", title: "Websites", icon: Code2 },
    { id: "apps", title: "Apps", icon: Smartphone },
    { id: "social-media", title: "Social Media", icon: Share2 },
    { id: "youtube", title: "YouTube", icon: Radio },
    { id: "videography", title: "Videography", icon: Film },
  ];

  const portfolioItems = [
    // Websites
    {
      id: "web-1",
      category: "websites",
      title: "E-Commerce Fashion Platform",
      client: "StyleHub Inc.",
      description:
        "Modern e-commerce platform with advanced product filtering, payment integration, and inventory management",
      longDescription:
        "A comprehensive e-commerce solution for a fashion brand. Features include responsive design, product search with AI recommendations, secure checkout, and admin dashboard for inventory management.",
      thumbnail:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      url: "https://example-fashion.com",
      features: [
        "Responsive Design",
        "Payment Gateway Integration",
        "SEO Optimized",
        "Admin Dashboard",
      ],
      industry: "Fashion & E-Commerce",
      completionDate: "Mar 2024",
      testimonial:
        "The website transformed our online sales. Highly professional team!",
      testimonialAuthor: "Sarah Johnson, CEO",
    },
    {
      id: "web-2",
      category: "websites",
      title: "Corporate Business Portal",
      client: "TechVenture Solutions",
      description: "Enterprise business website with CMS integration and lead capture",
      longDescription:
        "Enterprise-level website for a B2B consulting firm. Includes automated lead capture forms, CMS for easy content updates, analytics integration, and multi-language support.",
      thumbnail:
        "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg",
      url: "https://example-tech.com",
      features: [
        "CMS Integration",
        "Lead Capture Forms",
        "Analytics",
        "Multi-language Support",
      ],
      industry: "Technology & Consulting",
      completionDate: "Feb 2024",
      testimonial: "Professional and effective. The lead generation increased by 40%.",
      testimonialAuthor: "Michael Chen, Marketing Director",
    },
    {
      id: "web-3",
      category: "websites",
      title: "Real Estate Marketplace",
      client: "PropertyPro Ltd",
      description: "Advanced real estate platform with virtual tours and booking system",
      longDescription:
        "Complete real estate solution with 3D virtual tours, interactive maps, automated scheduling, and client CRM integration. Mobile-optimized for property viewing on-the-go.",
      thumbnail:
        "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg",
      url: "https://example-realestate.com",
      features: [
        "Virtual Tours",
        "Interactive Maps",
        "Booking System",
        "CRM Integration",
      ],
      industry: "Real Estate",
      completionDate: "Jan 2024",
      testimonial:
        "The virtual tour feature increased property inquiries by 65%.",
      testimonialAuthor: "Emma Rodriguez, Sales Manager",
    },

    // Social Media
    {
      id: "social-1",
      category: "social-media",
      title: "Fashion Brand Instagram Growth",
      client: "Luxe Wear Co.",
      description: "Scaled Instagram presence from 15K to 250K+ followers with organic growth",
      longDescription:
        "Strategic social media management resulting in exponential growth. Implemented content calendar, influencer partnerships, and community engagement strategies.",
      thumbnail:
        "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
      url: "https://instagram.com/luxewearco",
      platform: "Instagram",
      stats: { followers: "250K+", engagement: "8.5%", growth: "1,566%" },
      completionDate: "Ongoing since Oct 2023",
      testimonial:
        "Exceptional growth and engagement. Highly recommended!",
      testimonialAuthor: "Jessica Martinez, Brand Manager",
    },
    {
      id: "social-2",
      category: "social-media",
      title: "Tech Startup LinkedIn B2B Strategy",
      client: "InnovateTech Startups",
      description:
        "Built LinkedIn presence to establish thought leadership and generate B2B leads",
      longDescription:
        "Created comprehensive LinkedIn strategy including company page optimization, employee advocacy program, and thought leadership content. Generated 500+ qualified leads in 6 months.",
      thumbnail:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      url: "https://linkedin.com/company/innovatetech",
      platform: "LinkedIn",
      stats: { followers: "75K+", posts: "180+", leadsGenerated: "500+" },
      completionDate: "Ongoing since Nov 2023",
      testimonial:
        "LinkedIn strategy generated quality B2B leads consistently.",
      testimonialAuthor: "David Park, CEO",
    },
    {
      id: "social-3",
      category: "social-media",
      title: "Restaurant Group Facebook Management",
      client: "Flavor Haven Restaurants",
      description: "Multi-location restaurant chain with 180K+ engaged Facebook community",
      longDescription:
        "Managed 5 restaurant locations with unified brand voice. Created daily promotions, event promotions, and customer engagement campaigns.",
      thumbnail:
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
      url: "https://facebook.com/flavorhaven",
      platform: "Facebook",
      stats: { followers: "180K+", dailyReach: "45K+", engagement: "12%" },
      completionDate: "Ongoing since Aug 2023",
      testimonial: "Customer engagement and foot traffic increased significantly.",
      testimonialAuthor: "Robert Lewis, Operations Manager",
    },

    // YouTube
    {
      id: "yt-1",
      category: "youtube",
      title: "Tech Reviews Channel",
      client: "GadgetGeek Media",
      description: "Technology review channel with 500K+ subscribers and consistent growth",
      longDescription:
        "Full-channel management including content strategy, video optimization, thumbnail design, and audience growth. Currently producing 4 videos per week with 2M+ monthly views.",
      thumbnail:
        "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
      url: "https://youtube.com/@gadgetgeek",
      platform: "YouTube",
      stats: { subscribers: "500K+", monthlyViews: "2M+", avgViewDuration: "85%" },
      completionDate: "Ongoing since May 2023",
      testimonial: "Grew from 50K to 500K subscribers in one year.",
      testimonialAuthor: "James Wright, Founder",
    },
    {
      id: "yt-2",
      category: "youtube",
      title: "Business Tips & Entrepreneurship",
      client: "BuildYourEmpire",
      description: "Entrepreneurship channel with 250K+ subscribers and strong engagement",
      longDescription:
        "Educational content channel focused on business strategy and entrepreneurship. Managed all aspects from content creation to community management.",
      thumbnail:
        "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
      url: "https://youtube.com/@buildyourempire",
      platform: "YouTube",
      stats: { subscribers: "250K+", monthlyViews: "1M+", avgViewDuration: "78%" },
      completionDate: "Ongoing since Jul 2023",
      testimonial:
        "Professional content strategy that resonates with our audience.",
      testimonialAuthor: "Patricia Moore, Content Director",
    },

    // Videography
    {
      id: "video-1",
      category: "videography",
      title: "Corporate Brand Documentary",
      client: "Global Enterprises Inc.",
      description: "Professional 5-minute brand documentary showcasing company culture and values",
      longDescription:
        "High-production corporate video featuring office tours, employee interviews, and company mission statement. Shot in 4K with professional color grading and music.",
      thumbnail:
        "https://images.pexels.com/photos/3379942/pexels-photo-3379942.jpeg",
      url: "https://youtube.com/embed/example1",
      type: "video",
      duration: "5 minutes",
      production: "4K | 24fps | Drone Footage",
      completionDate: "Dec 2023",
      testimonial:
        "The documentary perfectly captured our company's essence.",
      testimonialAuthor: "Amanda Foster, HR Director",
    },
    {
      id: "video-2",
      category: "videography",
      title: "Product Launch Video",
      client: "TechInnovate Solutions",
      description:
        "High-impact product launch video with motion graphics and testimonials",
      longDescription:
        "Professional product showcase video featuring product demos, customer testimonials, and call-to-action. Includes animated graphics and music.",
      thumbnail:
        "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
      url: "https://youtube.com/embed/example2",
      type: "video",
      duration: "3 minutes",
      production: "4K | Motion Graphics | Testimonials",
      completionDate: "Nov 2023",
      testimonial:
        "The launch video exceeded expectations. Great production quality!",
      testimonialAuthor: "Kevin Shah, Product Manager",
    },
    {
      id: "video-3",
      category: "videography",
      title: "Customer Testimonial Series",
      client: "ServicePro Solutions",
      description: "Series of 10 short customer testimonial videos (30-60 seconds each)",
      longDescription:
        "Professional testimonial video series showcasing real customer success stories. Each video is optimized for social media and features authentic client experiences.",
      thumbnail:
        "https://images.pexels.com/photos/3178829/pexels-photo-3178829.jpeg",
      url: "https://youtube.com/embed/example3",
      type: "video",
      duration: "30-60 seconds each",
      production: "4K | Professional Interviews",
      completionDate: "Oct 2023",
      testimonial: "These testimonials significantly improved our conversion rate.",
      testimonialAuthor: "Linda Chang, Sales Director",
    },
  ];

  // Filter items based on category and search
  const filteredItems = useMemo(() => {
    return portfolioItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-space-dark via-space-darker to-blue-900/20 border-b border-neon-blue/20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-neon-blue via-neon-yellow to-neon-blue bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
              Discover the diverse range of projects we've completed for satisfied
              clients across various industries. From websites to social media campaigns
              to professional video production.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neon-blue w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects by name, client, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-space-light/50 border border-neon-blue/30 rounded-full text-foreground placeholder-foreground/50 focus:outline-none focus:border-neon-blue transition-colors duration-300"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-foreground/50 hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-space-darker/50 border-b border-neon-blue/20 sticky top-[85px] z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {portfolioCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-neon-blue to-neon-yellow text-white shadow-lg"
                    : "bg-space-light/50 text-foreground border border-neon-blue/30 hover:border-neon-blue/60"
                }`}
              >
                {category.id === "all" ? (
                  category.title
                ) : (
                  <>
                    {typeof category.icon === "string" ? (
                      <span className="mr-2">{category.icon}</span>
                    ) : null}
                    {category.title}
                  </>
                )}
              </motion.button>
            ))}
          </div>
          <p className="text-center text-foreground/60 text-sm mt-4">
            Showing {filteredItems.length} project{filteredItems.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredItems.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => setSelectedItem(item)}
                    className="cursor-pointer group"
                  >
                    <Card className="bg-space-light/50 border-space-light hover:border-neon-blue/50 transition-all duration-300 overflow-hidden h-full flex flex-col hover:shadow-xl hover:shadow-neon-blue/20">
                      <div className="relative overflow-hidden bg-space-dark h-48">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-space-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="text-center">
                            <ExternalLink className="w-8 h-8 text-neon-yellow mb-2 mx-auto" />
                            <p className="text-white font-semibold text-sm">
                              View Details
                            </p>
                          </div>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-4 right-4">
                          <span className="bg-neon-blue/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                            {portfolioCategories.find(
                              (c) => c.id === item.category
                            )?.title || item.category}
                          </span>
                        </div>
                      </div>

                      <CardContent className="p-6 flex-1 flex flex-col">
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-neon-blue transition-colors duration-300">
                          {item.title}
                        </h3>

                        <div className="flex items-center gap-2 text-neon-yellow text-sm font-semibold mb-3">
                          <Users className="w-4 h-4" />
                          {item.client}
                        </div>

                        <p className="text-foreground/70 text-sm mb-4 flex-1 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Category-specific stats */}
                        {item.stats && (
                          <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-neon-blue">
                            {Object.entries(item.stats).map(([key, value]) => (
                              <div key={key} className="border border-neon-blue/30 rounded p-2">
                                <p className="font-semibold text-neon-yellow">
                                  {value}
                                </p>
                                <p className="text-foreground/60 capitalize">
                                  {key.replace(/([A-Z])/g, " $1").trim()}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="text-xs text-foreground/50 mb-4">
                          {item.completionDate && (
                            <p>✓ Completed: {item.completionDate}</p>
                          )}
                        </div>

                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (item.url && item.category !== "videography") {
                              window.open(item.url, "_blank");
                            } else {
                              setSelectedItem(item);
                            }
                          }}
                          className="w-full bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white font-semibold py-2 rounded-full transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {item.category === "videography"
                            ? "Watch Video"
                            : "View Project"}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-foreground/60">
                No projects found matching "{searchTerm}". Try a different search.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="mt-6 bg-gradient-to-r from-neon-blue to-neon-yellow text-white font-semibold px-6 py-2 rounded-full"
              >
                Reset Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-space-light border border-neon-blue/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img
                  src={selectedItem.thumbnail}
                  alt={selectedItem.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 bg-space-dark/80 hover:bg-space-dark text-white p-2 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      {selectedItem.title}
                    </h2>
                    <div className="flex items-center gap-2 text-neon-yellow font-semibold">
                      <Users className="w-5 h-5" />
                      {selectedItem.client}
                    </div>
                  </div>
                  <span className="bg-neon-blue/20 text-neon-blue px-4 py-2 rounded-full font-semibold text-sm">
                    {portfolioCategories.find(
                      (c) => c.id === selectedItem.category
                    )?.title}
                  </span>
                </div>

                <div className="mb-6 pb-6 border-b border-neon-blue/20">
                  <h3 className="text-lg font-semibold text-neon-blue mb-3">
                    About This Project
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    {selectedItem.longDescription}
                  </p>
                </div>

                {selectedItem.features && (
                  <div className="mb-6 pb-6 border-b border-neon-blue/20">
                    <h3 className="text-lg font-semibold text-neon-blue mb-3">
                      Key Features
                    </h3>
                    <ul className="grid grid-cols-2 gap-3">
                      {selectedItem.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-foreground/80"
                        >
                          <span className="w-2 h-2 bg-neon-yellow rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedItem.stats && (
                  <div className="mb-6 pb-6 border-b border-neon-blue/20">
                    <h3 className="text-lg font-semibold text-neon-blue mb-3">
                      Project Stats
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(selectedItem.stats).map(([key, value]) => (
                        <div
                          key={key}
                          className="bg-space-dark/50 border border-neon-blue/30 rounded-lg p-4"
                        >
                          <p className="text-2xl font-bold text-neon-yellow">
                            {value}
                          </p>
                          <p className="text-foreground/60 text-sm capitalize mt-1">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedItem.testimonial && (
                  <div className="mb-6 pb-6 border-b border-neon-blue/20 bg-gradient-to-br from-neon-blue/10 to-neon-yellow/10 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-neon-blue mb-3">
                      Client Testimonial
                    </h3>
                    <p className="text-foreground/80 italic mb-3">
                      "{selectedItem.testimonial}"
                    </p>
                    <p className="text-neon-yellow font-semibold">
                      — {selectedItem.testimonialAuthor}
                    </p>
                  </div>
                )}

                {selectedItem.industry && (
                  <div className="mb-6 pb-6 border-b border-neon-blue/20">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-neon-blue" />
                      <div>
                        <p className="text-foreground/60 text-sm">Industry</p>
                        <p className="text-foreground font-semibold">
                          {selectedItem.industry}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-4">
                  {selectedItem.url && (
                    <Button
                      onClick={() => window.open(selectedItem.url, "_blank")}
                      className="flex-1 bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white font-semibold py-3 rounded-full transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {selectedItem.category === "videography"
                        ? "Watch on YouTube"
                        : "Visit Project"}
                    </Button>
                  )}
                  <Button
                    onClick={() => setSelectedItem(null)}
                    variant="outline"
                    className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white font-semibold py-3 rounded-full transition-all duration-300"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
