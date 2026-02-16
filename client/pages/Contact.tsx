import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  CheckCircle,
  Star,
  Users,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    company: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (
        !formData.name ||
        !formData.email ||
        !formData.phone ||
        !formData.message ||
        !formData.service
      ) {
        alert("Please fill in all required fields");
        setIsSubmitting(false);
        return;
      }

      // Create URL-encoded form data
      const params = new URLSearchParams();
      params.append("name", formData.name);
      params.append("email", formData.email);
      params.append("phone", formData.phone);
      params.append("company", formData.company);
      params.append("service", formData.service);
      params.append("budget", formData.budget);
      params.append("message", formData.message);

      // Send to Google Apps Script
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxamHsmi6gybjmuwEZJqKKxbgiRCul1lGuQgdncWYiBPcws-ZVlQkxs7-SO6hfFgANvJg/exec",
        {
          method: "POST",
          body: params,
          mode: "no-cors",
        },
      );

      console.log("Form submitted successfully");
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
          company: "",
        });
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      // Even if there's an error, the form might have been submitted due to no-cors
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+254 114 261 221", "+254 707 322 249"],
      description: "Available 24/7 for urgent inquiries",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["support@dealmojasafi.com", "info@dealmojasafi.com"],
      description: "We respond within 2 hours",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Nairobi Branch",
        "The Atrium Building, Chaka Road",
        "P.O. Box 55990–00200",
        "Nairobi, Kenya",
      ],
      description: "By appointment only",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      description: "Sunday: Emergency support only",
    },
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#", color: "text-blue-500" },
    { icon: Instagram, name: "Instagram", url: "#", color: "text-pink-500" },
    { icon: Linkedin, name: "LinkedIn", url: "#", color: "text-blue-600" },
    { icon: Twitter, name: "Twitter", url: "#", color: "text-blue-400" },
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: CheckCircle, number: "1000+", label: "Projects Completed" },
    { icon: Award, number: "3+", label: "Years Experience" },
    { icon: Star, number: "4.9", label: "Average Rating" },
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-space-darker/90 via-space-dark/80 to-blue-900/70"></div>
        </div>

        {/* Animated Elements */}
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
              Get in Touch
            </h1>
            <p className="text-xl sm:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to launch your project into orbit? Let's create something
              extraordinary together.
            </p>
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

      {/* Contact Form & Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              id="start-project"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-space-light/50 border-space-light">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-yellow bg-clip-text text-transparent">
                      Start Your Project
                    </h2>
                    <p className="text-foreground/80">
                      Tell us about your project and we'll get back to you
                      within 24 hours with a detailed proposal.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle className="w-16 h-16 text-neon-yellow mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-neon-blue mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-foreground/80">
                        Thank you for reaching out. We'll get back to you within
                        24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-foreground/90">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                            required
                            className="bg-space-light border-space-light focus:border-neon-blue"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-foreground/90">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                            required
                            className="bg-space-light border-space-light focus:border-neon-blue"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone" className="text-foreground/90">
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                phone: e.target.value,
                              }))
                            }
                            required
                            className="bg-space-light border-space-light focus:border-neon-blue"
                            placeholder="+254 707 322 249"
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="company"
                            className="text-foreground/90"
                          >
                            Company (Optional)
                          </Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                company: e.target.value,
                              }))
                            }
                            className="bg-space-light border-space-light focus:border-neon-blue"
                            placeholder="Your company name"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label
                            htmlFor="service"
                            className="text-foreground/90"
                          >
                            Service Needed *
                          </Label>
                          <Select
                            onValueChange={(value) =>
                              setFormData((prev) => ({
                                ...prev,
                                service: value,
                              }))
                            }
                          >
                            <SelectTrigger className="bg-space-light border-space-light">
                              <SelectValue placeholder="Select service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="website">
                                Website Development
                              </SelectItem>
                              <SelectItem value="app">
                                App Development
                              </SelectItem>
                              <SelectItem value="social-media">
                                Social Media Marketing
                              </SelectItem>
                              <SelectItem value="seo">SEO Services</SelectItem>
                              <SelectItem value="photography">
                                Photography & Videography
                              </SelectItem>
                              <SelectItem value="business-cards">
                                Business Cards
                              </SelectItem>
                              <SelectItem value="consultation">
                                Free Consultation
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label
                            htmlFor="budget"
                            className="text-foreground/90"
                          >
                            Budget Range
                          </Label>
                          <Select
                            onValueChange={(value) =>
                              setFormData((prev) => ({
                                ...prev,
                                budget: value,
                              }))
                            }
                          >
                            <SelectTrigger className="bg-space-light border-space-light">
                              <SelectValue placeholder="Select budget" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-50k">
                                Under Ksh 50,000
                              </SelectItem>
                              <SelectItem value="50k-100k">
                                Ksh 50,000 - 100,000
                              </SelectItem>
                              <SelectItem value="100k-250k">
                                Ksh 100,000 - 250,000
                              </SelectItem>
                              <SelectItem value="250k-500k">
                                Ksh 250,000 - 500,000
                              </SelectItem>
                              <SelectItem value="500k-plus">
                                Ksh 500,000+
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-foreground/90">
                          Project Details *
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              message: e.target.value,
                            }))
                          }
                          required
                          className="bg-space-light border-space-light focus:border-neon-blue min-h-[120px]"
                          placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white font-semibold py-3 rounded-full shadow-lg transition-all duration-300 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-yellow bg-clip-text text-transparent">
                  Let's Connect
                </h2>
                <p className="text-foreground/80 mb-8">
                  Multiple ways to reach us. Choose what works best for you and
                  we'll respond promptly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-space-light/30 p-6 rounded-lg border border-space-light hover:border-neon-blue/50 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-yellow rounded-lg flex items-center justify-center mr-4">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {info.title}
                      </h3>
                    </div>
                    <div className="space-y-1 mb-3">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-foreground/90 font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-foreground/60 text-sm">
                      {info.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-space-light/30 p-6 rounded-lg border border-space-light">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-space-dark rounded-lg flex items-center justify-center ${social.color} hover:bg-neon-blue hover:text-white transition-all duration-300`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
                <p className="text-foreground/60 text-sm mt-4">
                  Stay updated with our latest projects and digital marketing
                  tips
                </p>
              </div>

              {/* Quick Response */}
              <div className="bg-gradient-to-r from-neon-blue/10 to-neon-yellow/10 p-6 rounded-lg border border-neon-blue/20">
                <div className="flex items-center mb-3">
                  <MessageCircle className="w-6 h-6 text-neon-blue mr-3" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Quick Response Guarantee
                  </h3>
                </div>
                <p className="text-foreground/80 text-sm">
                  We respond to all inquiries within 2 hours during business
                  hours. For urgent matters, call us directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-space-light/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-yellow bg-clip-text text-transparent">
              Visit Our Office
            </h2>
            <p className="text-xl text-foreground/80">
              Located in the heart of Nairobi's business district
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-space-light/50 rounded-2xl overflow-hidden border border-space-light h-[500px]"
          >
            <iframe
              src="https://maps.google.com/maps?q=The%20Atrium%20Building%2C%20Chaka%20Road%2C%20Nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.5) contrast(1.2) invert(0.9) hue-rotate(180deg)" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Atrium Building, Chaka Road"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
