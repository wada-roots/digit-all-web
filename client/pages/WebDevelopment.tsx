import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Globe,
  Zap,
  Star,
  ArrowRight,
  Check,
  Layers,
  Palette,
  Rocket,
  Users,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const WebDevelopment = () => {
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

  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom websites that convert visitors into customers",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Secure",
      ],
      price: "From Ksh 15,000",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native iOS & Android apps that users love",
      features: [
        "Cross Platform",
        "Native Performance",
        "App Store Ready",
        "Push Notifications",
      ],
      price: "From Ksh 50,000",
      image:
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg",
    },
    {
      icon: Layers,
      title: "UI/UX Design",
      description: "Beautiful interfaces that provide amazing user experiences",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
      price: "From Ksh 20,000",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored solutions for your unique business needs",
      features: [
        "API Integration",
        "Database Design",
        "Cloud Deployment",
        "Maintenance",
      ],
      price: "From Ksh 30,000",
      image: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg",
    },
  ];

  const portfolio = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Complete online store with payment integration",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      tech: ["React", "Node.js", "MongoDB"],
      url: "https://preview--foods-and-bakery.lovable.app/",
    },
    {
      title: "Fitness Mobile App",
      category: "Mobile App",
      description: "Cross-platform fitness tracking application",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
      tech: ["React Native", "Firebase", "Redux"],
      url: "#",
    },
    {
      title: "Restaurant Website",
      category: "Web Development",
      description: "Modern restaurant site with online ordering",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
      tech: ["Next.js", "Tailwind", "Stripe"],
      url: "https://preview--sugar-spice-swahili-bites.lovable.app/",
    },
    {
      title: "Business Dashboard",
      category: "Web App",
      description: "Analytics dashboard for business insights",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
      tech: ["Vue.js", "D3.js", "Express"],
      url: "#",
    },
    {
      title: "Travel Booking App",
      category: "Mobile App",
      description: "Complete travel booking and management app",
      image:
        "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg",
      tech: ["Flutter", "Firebase", "Maps API"],
      url: "https://preview--vybz-tours-voyage-kenya.lovable.app/",
    },
    {
      title: "Corporate Website",
      category: "Web Development",
      description: "Professional corporate website with CMS",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      tech: ["WordPress", "PHP", "MySQL"],
      url: "#",
    },
  ];

  const stats = [
    { number: "150+", label: "Projects Completed", icon: Trophy },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Users },
    { number: "3+", label: "Years Experience", icon: Rocket },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg"
            alt="Web Development Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-space-darker/90 via-space-dark/80 to-blue-900/70"></div>
        </div>

        {/* Floating Elements */}
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
              Web & App Development
            </h1>
            <p className="text-xl sm:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              We build digital experiences that users love and businesses depend
              on. From concept to deployment, we create solutions that drive
              results.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            variants={itemVariants}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Start Your Project
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

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-neon-yellow mb-1">
                  {stat.number}
                </div>
                <div className="text-foreground/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
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
              Our Services
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Comprehensive development services to bring your digital vision to
              life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
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
                    <div className="absolute inset-0 bg-gradient-to-t from-space-dark/80 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-neon-blue/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-neon-yellow" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-neon-blue transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-foreground/80 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-foreground/80"
                          >
                            <Check className="w-4 h-4 text-neon-yellow mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-neon-blue font-bold text-lg">
                        {service.price}
                      </span>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white px-6 py-2 rounded-full shadow-lg transition-all duration-300"
                      >
                        Get Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
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
              Our Portfolio
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Showcasing our latest projects and digital innovations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Card className="bg-space-light/50 border-space-light hover:border-neon-blue/50 transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-dark/80 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-neon-yellow/90 text-space-dark px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
                        onClick={() =>
                          project.url !== "#" &&
                          window.open(project.url, "_blank")
                        }
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-neon-blue transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-space-dark/50 text-neon-blue px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
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
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and turn your vision into reality. Get a
            free consultation and project estimate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Your Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              <Palette className="w-5 h-5 mr-2" />
              View More Work
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default WebDevelopment;
