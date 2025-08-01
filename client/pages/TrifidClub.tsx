import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Crown,
  Users, 
  Zap, 
  Shield, 
  Star,
  CheckCircle,
  ArrowRight,
  Gift,
  Calendar,
  BookOpen,
  MessageCircle,
  Award,
  TrendingUp,
  Globe,
  Rocket,
  Diamond,
  Plus,
  Clock,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TrifidClub = () => {
  const [selectedPlan, setSelectedPlan] = useState("premium");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const membershipPlans = [
    {
      id: "starter",
      name: "Starter",
      price: "Free",
      originalPrice: null,
      period: "Forever",
      icon: Users,
      color: "from-gray-500 to-gray-600",
      borderColor: "border-gray-500/50",
      popular: false,
      features: [
        "Monthly Newsletter",
        "Basic Resources Library",
        "Community Forum Access",
        "2 Free Templates",
        "Email Support"
      ],
      benefits: [
        "Stay updated with industry trends",
        "Access to fundamental business resources",
        "Connect with fellow entrepreneurs"
      ]
    },
    {
      id: "premium",
      name: "Premium",
      price: "Ksh 2,500",
      originalPrice: "Ksh 5,000",
      period: "per month",
      icon: Crown,
      color: "from-neon-blue to-neon-yellow",
      borderColor: "border-neon-blue/50",
      popular: true,
      features: [
        "Everything in Starter",
        "Weekly Masterclasses",
        "1-on-1 Monthly Consultation",
        "Priority Support",
        "Exclusive Templates (10+)",
        "Networking Events",
        "Business Tools Access",
        "Marketing Templates"
      ],
      benefits: [
        "Fast-track your business growth",
        "Learn from industry experts",
        "Get personalized guidance",
        "Access premium resources"
      ]
    },
    {
      id: "elite",
      name: "Elite",
      price: "Ksh 7,500",
      originalPrice: "Ksh 15,000",
      period: "per month",
      icon: Diamond,
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/50",
      popular: false,
      features: [
        "Everything in Premium",
        "Weekly 1-on-1 Sessions",
        "Done-for-You Services",
        "Custom Strategy Development",
        "24/7 Priority Support",
        "Exclusive Mastermind Group",
        "Quarterly Business Reviews",
        "Personal Account Manager"
      ],
      benefits: [
        "Complete business transformation",
        "Hands-on implementation support",
        "Direct access to founders",
        "Fastest path to success"
      ]
    }
  ];

  const clubFeatures = [
    {
      icon: BookOpen,
      title: "Exclusive Learning Hub",
      description: "Access to masterclasses, workshops, and courses from industry experts",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
    },
    {
      icon: Users,
      title: "Networking Community",
      description: "Connect with like-minded entrepreneurs and business owners",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
    },
    {
      icon: Target,
      title: "Business Coaching",
      description: "One-on-one sessions with experienced business mentors",
      image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg"
    },
    {
      icon: Gift,
      title: "Exclusive Resources",
      description: "Templates, tools, and resources to accelerate your growth",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    }
  ];

  const stats = [
    { icon: Users, number: "1,000+", label: "Active Members" },
    { icon: Award, number: "50+", label: "Expert Mentors" },
    { icon: TrendingUp, number: "300%", label: "Average Growth" },
    { icon: Star, number: "4.9", label: "Member Rating" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      text: "DMS Club transformed my business. The mentorship and resources helped me scale from 0 to 6 figures in just 8 months!"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Store",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      text: "The networking opportunities alone are worth the membership. I've found partners, clients, and mentors through the community."
    },
    {
      name: "Amara Okafor",
      company: "Consulting Firm",
      image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg",
      text: "Best investment I've made for my business. The weekly masterclasses and 1-on-1 sessions accelerated my growth exponentially."
    }
  ];

  const upcomingEvents = [
    {
      date: "Dec 15",
      title: "Digital Marketing Masterclass",
      speaker: "Jane Doe, Marketing Expert",
      type: "Masterclass"
    },
    {
      date: "Dec 20",
      title: "Networking Mixer",
      speaker: "DMS Community",
      type: "Event"
    },
    {
      date: "Dec 25",
      title: "Year-End Business Review",
      speaker: "Business Coaches",
      type: "Workshop"
    }
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Membership application:", { ...formData, plan: selectedPlan });
    alert("Thank you for your interest! We'll contact you within 24 hours.");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
            alt="DMS Club Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-space-darker/90 via-space-dark/80 to-purple-900/70"></div>
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
            <div className="w-24 h-24 bg-gradient-to-r from-neon-blue to-neon-yellow rounded-full flex items-center justify-center mx-auto mb-8">
              <Crown className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-neon-blue to-neon-yellow bg-clip-text text-transparent leading-tight">
              DMS Club
            </h1>
            <p className="text-xl sm:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join our exclusive community of innovators and creators. Get access to premium resources, networking opportunities, and insider insights to accelerate your business growth.
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
              Join the Club
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Learn More
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
                <div className="text-3xl font-bold text-neon-yellow mb-1">{stat.number}</div>
                <div className="text-foreground/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Club Features Section */}
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
              What Makes DMS Club Special?
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Exclusive benefits designed to accelerate your business success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clubFeatures.map((feature, index) => (
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
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-dark/80 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-neon-blue/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-neon-yellow" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-neon-blue transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
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
              Choose Your Membership
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Select the perfect plan to accelerate your business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-neon-blue to-neon-yellow text-white px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <Card className={`bg-space-light/50 border-2 ${plan.borderColor} hover:border-neon-blue/70 transition-all duration-300 ${selectedPlan === plan.id ? 'ring-2 ring-neon-blue' : ''} h-full`}>
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <plan.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-neon-blue">{plan.price}</span>
                        {plan.period && <span className="text-foreground/60 ml-2">/{plan.period}</span>}
                      </div>
                      {plan.originalPrice && (
                        <div className="text-foreground/60 line-through text-lg mb-2">
                          {plan.originalPrice}
                        </div>
                      )}
                    </div>

                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-neon-yellow mr-3 flex-shrink-0" />
                          <span className="text-foreground/90">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`w-full ${
                        selectedPlan === plan.id
                          ? 'bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue'
                          : 'bg-space-dark hover:bg-space-light border border-neon-blue/50'
                      } text-white font-semibold py-3 rounded-full transition-all duration-300`}
                    >
                      {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Member Success Stories
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              See how DMS Club members are transforming their businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-space-light/50 border-space-light hover:border-neon-blue/50 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-foreground/60 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-neon-yellow fill-current" />
                      ))}
                    </div>
                    <p className="text-foreground/80 italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-space-light/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Events List */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-yellow bg-clip-text text-transparent">
                Upcoming Events
              </h2>
              <p className="text-foreground/80 mb-8">
                Exclusive events and masterclasses for DMS Club members
              </p>
              
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="bg-space-light/50 p-6 rounded-lg border border-space-light hover:border-neon-blue/50 transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-yellow rounded-lg flex flex-col items-center justify-center mr-4">
                        <span className="text-white font-bold text-sm">{event.date.split(' ')[0]}</span>
                        <span className="text-white text-xs">{event.date.split(' ')[1]}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{event.title}</h3>
                        <p className="text-foreground/60 text-sm mb-1">{event.speaker}</p>
                        <span className="bg-neon-blue/20 text-neon-blue px-2 py-1 rounded text-xs font-medium">
                          {event.type}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Join Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-space-light/50 border-space-light sticky top-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-yellow bg-clip-text text-transparent">
                    Join DMS Club Today
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground/90">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                        className="bg-space-light border-space-light focus:border-neon-blue"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-foreground/90">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="bg-space-light border-space-light focus:border-neon-blue"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-foreground/90">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                        className="bg-space-light border-space-light focus:border-neon-blue"
                        placeholder="+254 700 123 456"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="company" className="text-foreground/90">Company/Business</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        className="bg-space-light border-space-light focus:border-neon-blue"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div className="bg-neon-blue/10 p-4 rounded-lg border border-neon-blue/20">
                      <p className="text-sm text-foreground/80 mb-2">Selected Plan:</p>
                      <p className="font-semibold text-neon-blue capitalize">{selectedPlan}</p>
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white font-semibold py-3 rounded-full shadow-lg transition-all duration-300"
                    >
                      <Crown className="w-4 h-4 mr-2" />
                      Join DMS Club
                    </Button>
                  </form>
                  
                  <div className="mt-6 p-4 bg-neon-yellow/10 rounded-lg border border-neon-yellow/20">
                    <p className="text-xs text-foreground/70 text-center">
                      🚀 Join 1,000+ successful entrepreneurs in DMS Club. Cancel anytime.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrifidClub;
