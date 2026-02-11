import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  ArrowUp,
  Users,
  Lightbulb,
  Target,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Team = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const teamMembers = [
    {
      id: 1,
      name: "Masaki Magack",
      role: "Founder & CEO",
      bio: "A 360° digital marketer — For 10 years, he has led digital campaigns that boost visibility and drive ROI. He specialize in media buying (Ads) on Google, Meta, YouTube, LinkedIn, and programmatic platforms.",
      image:
        "https://res.cloudinary.com/dqk0axaoc/image/upload/v1770728142/Masaki_qfjra9.jpg",
      social: {
        linkedin: "https://www.linkedin.com/company/dealmojasafi/",
        twitter: "https://twitter.com",
      },
    },
    {
      id: 2,
      name: "Kioko Kelvin",
      role: "Head Software Engineer",
      bio: "Kelvin is our tech backbone, specializing in backend web development and app development. From building seamless systems to powering user-friendly apps, he makes sure everything runs smoothly behind the scenes.",
      image:
        "https://res.cloudinary.com/dqk0axaoc/image/upload/v1770728716/Kioko_d74far.jpg",
      social: {
        linkedin: "https://www.linkedin.com/company/dealmojasafi/",
        twitter: "https://twitter.com",
      },
    },
    {
      id: 3,
      name: "Ann Mwendwa",
      role: "Social Media Manager",
      bio: "Ann is our trilingual Kenyan journalist turned social-media powerhouse. As a manager, editor, and content strategist, she knows how to make brands shine online. ",
      image:
        "https://res.cloudinary.com/dqk0axaoc/image/upload/v1770729157/Ann_xk3vvc.jpg",
      social: {
        linkedin: "https://www.linkedin.com/company/dealmojasafi/",
        twitter: "https://twitter.com",
      },
    },
    {
      id: 4,
      name: "James Monchoi",
      role: "UX/UI & Graphic Designer",
      bio: "Monchoi is our creative powerhouse. As a graphic designer, he transforms ideas into bold, eye-catching visuals that speak louder than words. ",
      image:
        "https://res.cloudinary.com/dqk0axaoc/image/upload/v1770729483/Jemmo_uvufxj.jpg",
      social: {
        linkedin: "https://www.linkedin.com/company/dealmojasafi/",
        twitter: "https://twitter.com",
      },
    },
    {
      id: 5,
      name: "Samuel Matoya",
      role: "App Developer",
      bio: "Matoya codes sleek apps by day—and crafts eye‑catching graphics by night",
      image:
        "https://res.cloudinary.com/dqk0axaoc/image/upload/v1770730039/Matoya_fo9lnf.jpg",
      social: {
        linkedin: "https://www.linkedin.com/company/dealmojasafi/",
        twitter: "https://twitter.com",
      },
    },
  ];

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly pushing boundaries and exploring new solutions",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering exceptional results every time",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together to achieve greater success",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest, transparent, and ethical in all we do",
    },
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
    hidden: { opacity: 0, y: 20 },
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
    <div className="min-h-screen bg-space-dark text-foreground">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fafa4cdfd9cfb4fbfb22388ee70a44e49%2Fce4d4d8e590c40d8b037449dea804cd8?format=webp&width=800&height=1200"
            alt="Team Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-space-darker/90 via-space-dark/80 to-space-dark/85"></div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-neon-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-neon-yellow/10 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-yellow to-neon-blue bg-clip-text text-transparent leading-tight"
          >
            Our Expert Team
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Meet the talented professionals behind Deal Moja Safi. We're a diverse
            team of digital innovators, creative thinkers, and solution builders
            dedicated to transforming your business.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto"
          >
            With combined expertise spanning digital marketing, web development,
            design, and strategy, we bring your vision to life.
          </motion.p>
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-space-light/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-yellow bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-foreground/70">
              What drives us every single day
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-space-dark p-6 rounded-xl border border-space-light hover:border-neon-blue/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-yellow rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-neon-blue">
                  {value.title}
                </h3>
                <p className="text-foreground/70 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-yellow bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Talented individuals working together to deliver excellence
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-space-light/30 rounded-xl overflow-hidden border border-space-light hover:border-neon-blue/50 transition-all duration-300 group"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gradient-to-br from-neon-blue/20 to-neon-yellow/20 h-64 flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-neon-blue font-semibold text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-foreground/70 text-sm mb-5 line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gradient-to-r from-neon-blue to-blue-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                      aria-label={`${member.name} LinkedIn profile`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gradient-to-r from-neon-yellow to-yellow-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                      aria-label={`${member.name} Twitter profile`}
                    >
                      <Twitter className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Photos Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-space-dark/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-yellow bg-clip-text text-transparent">
              Our Team in Action
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Passionate professionals delivering solutions and making an impact
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-xl border border-neon-blue/30 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fafa4cdfd9cfb4fbfb22388ee70a44e49%2Fe725ba8d35fe4a3c8bbf2fa93e81d647?format=webp&width=800&height=1200"
                alt="Team collaboration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-xl border border-neon-yellow/30 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fafa4cdfd9cfb4fbfb22388ee70a44e49%2Fd9ee7f5609a042bf8cf02e103c9fea13?format=webp&width=800&height=1200"
                alt="Team success"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-neon-blue/10 to-neon-yellow/10 border-t border-b border-space-light">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Connect with our team and bring your vision to life
            </p>
            <Button
              className="bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <a href="/contact">Get in Touch</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-32 right-6 z-40 w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-yellow rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
};

export default Team;