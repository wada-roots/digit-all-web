import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MessageCircle,
  Globe,
  ArrowUp,
  Heart,
} from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Templates", href: "/templates" },
    { name: "Web/App Design", href: "/webdevelopment" },
    { name: "DMS Club", href: "/trifidclub" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Website Development", href: "/services" },
    { name: "App Development", href: "/services" },
    { name: "Social Media Marketing", href: "/services" },
    { name: "SEO Services", href: "/services" },
    { name: "Photography & Video", href: "/services" },
    { name: "Business Cards", href: "/services" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://facebook.com/dms",
      color: "hover:text-blue-500",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/dms",
      color: "hover:text-pink-500",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/company/dms",
      color: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/dms",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <footer className="bg-space-darker text-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-blue/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-neon-yellow/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                <div className="mb-6">
                  <img
                    src="/logo.png"
                    alt="DMS Logo"
                    className="h-12 w-auto mb-4"
                  />
                  <p className="text-foreground/80 leading-relaxed">
                    We create powerful digital solutions that launch your
                    business into the stratosphere of success. From websites to
                    marketing campaigns, we've got you covered.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-neon-blue mr-3" />
                    <span className="text-foreground/90">+254 738 849 148</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-neon-blue mr-3" />
                    <span className="text-foreground/90">
                      info@dealmojasafi.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-neon-blue mr-3" />
                    <span className="text-foreground/90">Nairobi, Kenya</span>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-6">
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-10 h-10 bg-space-light rounded-lg flex items-center justify-center text-foreground/70 ${social.color} transition-all duration-300`}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-6 text-neon-yellow">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="text-foreground/80 hover:text-neon-blue transition-colors duration-300 flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-6 text-neon-yellow">
                  Our Services
                </h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link
                        to={service.href}
                        className="text-foreground/80 hover:text-neon-blue transition-colors duration-300 flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {service.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Newsletter & Contact */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-6 text-neon-yellow">
                  Stay Connected
                </h3>
                <p className="text-foreground/80 mb-4">
                  Get updates on our latest projects and digital marketing tips.
                </p>

                <div className="space-y-4">
                  <Button
                    className="w-full bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white font-semibold py-2 rounded-full transition-all duration-300"
                    onClick={() =>
                      window.open("https://wa.me/254738849148", "_blank")
                    }
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Us
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white rounded-full transition-all duration-300"
                    asChild
                  >
                    <Link to="/contact">
                      <Mail className="w-4 h-4 mr-2" />
                      Get in Touch
                    </Link>
                  </Button>
                </div>

                {/* Working Hours */}
                <div className="mt-6 p-4 bg-space-light/30 rounded-lg border border-space-light">
                  <h4 className="font-semibold text-foreground mb-2">
                    Working Hours
                  </h4>
                  <div className="text-sm text-foreground/80 space-y-1">
                    <div>24/7 - Monday to Sunday</div>
                    <div className="text-neon-yellow font-semibold mt-2">
                      Always available for you!
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-space-light">
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <p className="text-foreground/70 text-sm">
                    © {currentYear} DMS (Digital Marketing Solutions). All
                    rights reserved.
                  </p>
                  <p className="text-foreground/60 text-xs mt-1 flex items-center justify-center md:justify-start">
                    Made with{" "}
                    <Heart className="w-3 h-3 mx-1 text-red-500 fill-current" />{" "}
                    by DMS Team
                  </p>
                </div>

                <div className="flex items-center space-x-6">
                  <Link
                    to="/privacy"
                    className="text-foreground/70 hover:text-neon-blue text-sm transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/terms"
                    className="text-foreground/70 hover:text-neon-blue text-sm transition-colors duration-300"
                  >
                    Terms of Service
                  </Link>

                  {/* Back to Top Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={scrollToTop}
                    className="text-foreground/70 hover:text-neon-blue hover:bg-space-light rounded-full transition-all duration-300"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
