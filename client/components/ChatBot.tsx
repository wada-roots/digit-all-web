import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MessageCircle,
  Send,
  Phone,
  Home,
  Briefcase,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<
    "main" | "navigation" | "services" | "support"
  >("main");
  const [messages, setMessages] = useState<
    Array<{ type: "bot" | "user"; content: string }>
  >([
    {
      type: "bot",
      content: "Hi! 👋 Welcome to Deal Moja Safi. How can I help you today?",
    },
  ]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [supportMessage, setSupportMessage] = useState("");

  const handleNavigationClick = (option: string) => {
    const newMessage = {
      type: "user" as const,
      content: option,
    };
    setMessages([...messages, newMessage]);

    setTimeout(() => {
      let botResponse = "";
      switch (option) {
        case "Home":
          botResponse = "Taking you to our home page...";
          setTimeout(() => (window.location.href = "/"), 1000);
          break;
        case "Impact":
          botResponse = "Exploring our impact and values...";
          setTimeout(() => (window.location.href = "/impact"), 1000);
          break;
        case "Portfolio":
          botResponse = "Showcasing our recent projects...";
          setTimeout(() => (window.location.href = "/portfolio"), 1000);
          break;
        case "Contact":
          botResponse = "Opening contact page...";
          setTimeout(() => (window.location.href = "/contact"), 1000);
          break;
        default:
          botResponse = "Option selected.";
      }
      setMessages((prev) => [...prev, { type: "bot", content: botResponse }]);
    }, 300);
  };

  const handleServiceClick = (service: string) => {
    const newMessage = {
      type: "user" as const,
      content: `I'm interested in ${service}`,
    };
    setMessages([...messages, newMessage]);

    const serviceRoutes: Record<string, string> = {
      "Digital Marketing": "/solutions/digital-marketing",
      "Web Development & SEO": "/solutions/web-seo-ecommerce",
      "Media & Creatives": "/solutions/media-creatives",
      "Social Media": "/solutions/digital-marketing#social-media",
      "Video Production": "/solutions/media-creatives#video",
      "Graphic Design": "/solutions/media-creatives#design",
    };

    setTimeout(() => {
      const response = `Great! Exploring ${service} services for you. You can also reach out to our team for a custom quote.`;
      setMessages((prev) => [...prev, { type: "bot", content: response }]);
    }, 300);
  };

  const handleLiveAgentSubmit = () => {
    if (email && supportMessage) {
      const newMessage = {
        type: "user" as const,
        content: `Message: ${supportMessage}`,
      };
      setMessages([...messages, newMessage]);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content: `Thanks! Our agent will contact you at ${email} shortly. We typically respond within 1 hour.`,
          },
        ]);
        setEmail("");
        setPhone("");
        setSupportMessage("");
        setTimeout(() => setStep("main"), 2000);
      }, 300);
    }
  };

  const navigationOptions = [
    { label: "🏠 Home", value: "Home" },
    { label: "🎯 Impact", value: "Impact" },
    { label: "📂 Portfolio", value: "Portfolio" },
    { label: "📧 Contact", value: "Contact" },
  ];

  const serviceOptions = [
    "Digital Marketing",
    "Web Development & SEO",
    "Media & Creatives",
    "Social Media",
    "Video Production",
    "Graphic Design",
  ];

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white rounded-lg shadow-2xl w-80 h-96 flex flex-col mb-4 border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-neon-blue to-neon-yellow p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Deal Moja Safi Bot
              </h3>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setStep("main");
                  setMessages([
                    {
                      type: "bot",
                      content:
                        "Hi! 👋 Welcome to Deal Moja Safi. How can I help you today?",
                    },
                  ]);
                }}
                className="text-white hover:bg-white hover:text-neon-blue rounded-full p-1 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg ${
                      msg.type === "user"
                        ? "bg-neon-blue text-white rounded-br-none"
                        : "bg-white text-gray-700 border border-gray-200 rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Options */}
            <div className="p-4 border-t border-gray-200 bg-white space-y-2 max-h-24 overflow-y-auto">
              {step === "main" && (
                <>
                  <Button
                    variant="outline"
                    className="w-full text-xs justify-start"
                    onClick={() => {
                      setStep("navigation");
                      setMessages([
                        ...messages,
                        { type: "bot", content: "Where would you like to go?" },
                      ]);
                    }}
                  >
                    <Home className="w-4 h-4 mr-2" />
                    Navigate Site
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full text-xs justify-start"
                    onClick={() => {
                      setStep("services");
                      setMessages([
                        ...messages,
                        {
                          type: "bot",
                          content: "What service are you interested in?",
                        },
                      ]);
                    }}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Order Services
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full text-xs justify-start"
                    onClick={() => {
                      setStep("support");
                      setMessages([
                        ...messages,
                        {
                          type: "bot",
                          content:
                            "I'll connect you to a live agent. Please provide your details.",
                        },
                      ]);
                    }}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Live Agent
                  </Button>
                </>
              )}

              {step === "navigation" && (
                <>
                  {navigationOptions.map((option) => (
                    <Button
                      key={option.value}
                      variant="outline"
                      className="w-full text-xs justify-start"
                      onClick={() => handleNavigationClick(option.value)}
                    >
                      {option.label}
                    </Button>
                  ))}
                </>
              )}

              {step === "services" && (
                <>
                  {serviceOptions.map((service) => (
                    <Button
                      key={service}
                      variant="outline"
                      className="w-full text-xs justify-start"
                      onClick={() => handleServiceClick(service)}
                    >
                      <Briefcase className="w-4 h-4 mr-2" />
                      {service}
                    </Button>
                  ))}
                </>
              )}

              {step === "support" && (
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-2 py-1 text-xs border border-gray-300 rounded"
                  />
                  <input
                    type="tel"
                    placeholder="Phone (optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-2 py-1 text-xs border border-gray-300 rounded"
                  />
                  <textarea
                    placeholder="How can we help?"
                    value={supportMessage}
                    onChange={(e) => setSupportMessage(e.target.value)}
                    className="w-full px-2 py-1 text-xs border border-gray-300 rounded h-12 resize-none"
                  />
                  <Button
                    className="w-full text-xs"
                    onClick={handleLiveAgentSubmit}
                    disabled={!email || !supportMessage}
                  >
                    <Send className="w-3 h-3 mr-1" />
                    Connect to Agent
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-neon-blue to-neon-yellow rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;
