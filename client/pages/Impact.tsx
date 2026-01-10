import { motion } from "framer-motion";
import { Users, Globe, BookOpen, Handshake, Heart, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Impact = () => {
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

  const impactAreas = [
    {
      icon: Users,
      title: "Our Team",
      description:
        "Passionate professionals dedicated to delivering excellence and driving innovation across all projects. Our diverse team brings expertise, creativity, and commitment to every challenge.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      color: "from-neon-blue/20 to-neon-blue/5",
      borderColor: "border-neon-blue/30",
      hoverColor: "hover:border-neon-blue/60",
    },
    {
      icon: Globe,
      title: "Sustainable Development Goals",
      description:
        "We align our initiatives with the UN's SDGs, focusing on quality education, poverty reduction, and creating sustainable job opportunities. Technology is our tool for positive change.",
      image:
        "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      color: "from-neon-yellow/20 to-neon-yellow/5",
      borderColor: "border-neon-yellow/30",
      hoverColor: "hover:border-neon-yellow/60",
    },
    {
      icon: BookOpen,
      title: "Mentorship Program",
      description:
        "Nurturing young talent through guidance, training, and real-world experience in digital innovation. We invest in the future by empowering the next generation of digital leaders.",
      image:
        "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      color: "from-neon-blue/20 to-neon-blue/5",
      borderColor: "border-neon-blue/30",
      hoverColor: "hover:border-neon-blue/60",
    },
    {
      icon: Handshake,
      title: "Corporate Social Responsibility",
      description:
        "Building sustainable communities through technology initiatives and giving back to society. We believe success is measured by the positive impact we create for others.",
      image:
        "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      color: "from-neon-yellow/20 to-neon-yellow/5",
      borderColor: "border-neon-yellow/30",
      hoverColor: "hover:border-neon-yellow/60",
    },
  ];

  const achievements = [
    { icon: Heart, label: "Lives Impacted", value: "5000+", color: "text-red-500" },
    { icon: Target, label: "Projects with Purpose", value: "250+", color: "text-neon-blue" },
    { icon: Users, label: "Mentees Trained", value: "500+", color: "text-neon-yellow" },
    {
      icon: Globe,
      label: "Global Reach",
      value: "3 Countries",
      color: "text-green-500",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 px-4">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-space-darker/95 via-space-dark/90 to-blue-900/80" />
          <motion.div
            className="absolute top-1/4 -left-40 w-96 h-96 bg-neon-blue/15 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-40 w-full h-96 bg-neon-yellow/10 rounded-full blur-3xl"
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
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-neon-blue/10 border border-neon-blue/30 rounded-full px-4 py-2 mb-8"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
            <span className="text-neon-blue font-semibold text-sm">
              Our Commitment to Change
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-white via-neon-blue to-neon-yellow bg-clip-text text-transparent">
              Making Real
            </span>
            <br />
            <span className="bg-gradient-to-r from-neon-yellow via-neon-blue to-white bg-clip-text text-transparent">
              Impact Together
            </span>
          </h1>

          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            We're dedicated to creating meaningful change through technology,
            mentorship, and social responsibility. Our mission extends beyond
            profit to purpose.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white font-bold py-6 px-8 text-lg rounded-full shadow-lg transition-all duration-300"
            asChild
          >
            <Link to="/contact">Join Our Movement</Link>
          </Button>
        </motion.div>
      </section>

      {/* Achievements Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-space-dark/70 to-space-darker/70 border-b border-neon-blue/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Icon className={`w-12 h-12 mx-auto mb-4 ${achievement.color}`} />
                  <p className="text-4xl font-bold mb-2 bg-gradient-to-r from-neon-blue to-neon-yellow bg-clip-text text-transparent">
                    {achievement.value}
                  </p>
                  <p className="text-foreground/70 font-medium">
                    {achievement.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-yellow bg-clip-text text-transparent">
              Areas of Focus
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Four pillars that drive our mission for sustainable impact
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {impactAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group"
                >
                  <Card
                    className={`bg-gradient-to-br ${area.color} ${area.borderColor} ${area.hoverColor} border transition-all duration-300 overflow-hidden h-full`}
                  >
                    {/* Image Container */}
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <img
                        src={area.image}
                        alt={area.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-space-dark/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <Icon className="w-8 h-8 text-neon-blue flex-shrink-0 mt-1" />
                        <h3 className="text-2xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                          {area.title}
                        </h3>
                      </div>
                      <p className="text-foreground/80 leading-relaxed">
                        {area.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neon-blue/10 to-neon-yellow/10 border-t border-b border-neon-blue/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-yellow bg-clip-text text-transparent">
              Be Part of the Change
            </h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Whether you're a partner, mentor, mentee, or supporter, there's a
              way for you to contribute to our mission of creating lasting impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white font-bold py-6 px-8 text-lg rounded-full shadow-lg transition-all duration-300"
                asChild
              >
                <Link to="/contact">Get Involved</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white font-bold py-6 px-8 text-lg rounded-full transition-all duration-300"
                asChild
              >
                <Link to="/portfolio">See Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
