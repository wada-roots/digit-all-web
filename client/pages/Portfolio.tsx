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
      title: "KimKen Safaris",
      client: "KimKen Safaris Ltd.",
      description:
        "Safari and tourism booking platform with stunning photography gallery and seamless reservations",
      longDescription:
        "Complete safari booking platform featuring wildlife photography galleries, virtual tour previews, real-time availability, secure booking system, and itinerary management. Optimized for mobile with high-quality imagery and fast loading times.",
      thumbnail:
        "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg",
      url: "http://kimkensafaris.com/",
      features: [
        "Online Booking System",
        "Photo Gallery",
        "Itinerary Builder",
        "Responsive Design",
      ],
      industry: "Travel & Tourism",
      completionDate: "Aug 2024",
      testimonial:
        "Stunning website with seamless booking experience. Increased bookings significantly!",
      testimonialAuthor: "Kim & Ken, Founders",
    },
    {
      id: "web-2",
      category: "websites",
      title: "Infinite Walls",
      client: "Infinite Walls Ltd.",
      description:
        "Interior design and decoration services showcase with portfolio and project gallery",
      longDescription:
        "Professional portfolio website for interior design services. Features before/after project galleries, service descriptions, design consultation booking system, and client testimonials. Showcases diverse design styles and completed projects.",
      thumbnail:
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
      url: "https://infinitewalls.co.ke/",
      features: [
        "Project Portfolio",
        "Service Showcase",
        "Consultation Booking",
        "Image Galleries",
      ],
      industry: "Interior Design & Decoration",
      completionDate: "Jul 2024",
      testimonial:
        "Beautiful design work and fantastic website. Our inquiries doubled!",
      testimonialAuthor: "Infinite Walls Team",
    },
    {
      id: "web-3",
      category: "websites",
      title: "Dr. PJ Onyango",
      client: "Dr. PJ Onyango",
      description:
        "Professional medical practice website for gynecological and women's health services",
      longDescription:
        "Professional medical practice website featuring service information, doctor biography, appointment scheduling system, patient testimonials, and health resources. Designed with patient confidentiality and accessibility in mind.",
      thumbnail:
        "https://images.pexels.com/photos/263399/pexels-photo-263399.jpeg",
      url: "https://drpjonyangogynae.com/",
      features: [
        "Appointment Booking",
        "Service Information",
        "Patient Resources",
        "Contact Forms",
      ],
      industry: "Healthcare & Medical",
      completionDate: "Jun 2024",
      testimonial:
        "Professional and patient-friendly website. Great feedback from clients!",
      testimonialAuthor: "Dr. PJ Onyango",
    },
    {
      id: "web-4",
      category: "websites",
      title: "Masaki Magack",
      client: "Masaki Magack",
      description:
        "Professional portfolio and services website showcasing expertise and accomplishments",
      longDescription:
        "Personal professional portfolio website featuring detailed service offerings, expertise showcase, client work samples, and contact information. Designed to establish credibility and attract new clients with professional presentation.",
      thumbnail:
        "https://cdn.builder.io/api/v1/image/assets%2Fafa4cdfd9cfb4fbfb22388ee70a44e49%2F1af6e9dbbdf24ad39b30a6d567f1b053?format=webp&width=800&height=1200",
      url: "http://masakimagack.co.ke/",
      features: [
        "Portfolio Showcase",
        "Service Details",
        "Professional Profile",
        "Contact Integration",
      ],
      industry: "Professional Services",
      completionDate: "May 2024",
      testimonial:
        "Professional presentation of services. Excellent client acquisition tool!",
      testimonialAuthor: "Masaki Magack",
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
              Discover the diverse range of projects we've completed for
              satisfied clients across various industries. From websites to
              social media campaigns to professional video production.
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
            Showing {filteredItems.length} project
            {filteredItems.length !== 1 ? "s" : ""}
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
                              (c) => c.id === item.category,
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
                              <div
                                key={key}
                                className="border border-neon-blue/30 rounded p-2"
                              >
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
                No projects found matching "{searchTerm}". Try a different
                search.
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
                    {
                      portfolioCategories.find(
                        (c) => c.id === selectedItem.category,
                      )?.title
                    }
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
                      {Object.entries(selectedItem.stats).map(
                        ([key, value]) => (
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
                        ),
                      )}
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
