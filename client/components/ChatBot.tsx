import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Send, User, Bot, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

type MessageAction = {
  label: string;
  value: string;
};

type Message = {
  type: "bot" | "user";
  content: string;
  actions?: MessageAction[];
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      content: "Hi! 👋 Welcome to Deal Moja Safi. How can I help you today?",
      actions: [
        { label: "Our Services", value: "services" },
        { label: "Pricing & Quotes", value: "pricing" },
        { label: "Support & FAQs", value: "faqs" },
        { label: "Talk to Agent", value: "agent" },
      ],
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showAgentForm, setShowAgentForm] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Auto-open on first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem("dms_bot_visited_v2");
    if (!hasVisited) {
      setTimeout(() => setIsOpen(true), 2000); // Slight delay for better UX
      localStorage.setItem("dms_bot_visited_v2", "true");
    }
  }, []);

  const simulateBotTyping = (callback: () => void) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, 1000);
  };

  const handleActionClick = (value: string) => {
    // Add user selection as a message
    const selectedAction = messages[messages.length - 1].actions?.find(
      (a) => a.value === value,
    );
    if (selectedAction) {
      setMessages((prev) => [
        ...prev,
        { type: "user", content: selectedAction.label },
      ]);
    }

    processBotResponse(value);
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    // Add user message
    const newUserMessage: Message = {
      type: "user",
      content: userInput,
    };
    setMessages((prev) => [...prev, newUserMessage]);
    const input = userInput;
    setUserInput("");

    simulateBotTyping(() => {
      // Simple keyword matching for free-text input
      const lowerInput = input.toLowerCase();

      if (
        lowerInput.includes("agent") ||
        lowerInput.includes("live") ||
        lowerInput.includes("human")
      ) {
        processBotResponse("agent");
      } else if (
        lowerInput.includes("price") ||
        lowerInput.includes("cost") ||
        lowerInput.includes("quote")
      ) {
        processBotResponse("pricing");
      } else if (lowerInput.includes("service")) {
        processBotResponse("services");
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content: "Hello! How can I assist you today?",
            actions: [
              { label: "Our Services", value: "services" },
              { label: "Pricing", value: "pricing" },
              { label: "Talk to Agent", value: "agent" },
            ],
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content: "I'm not sure I understand. Could you please select one of the options below or ask to speak to an agent?",
            actions: [
              { label: "View Services", value: "services" },
              { label: "See FAQs", value: "faqs" },
              { label: "Talk to Agent", value: "agent" },
            ],
          },
        ]);
      }
    });
  };

  const processBotResponse = (actionValue: string) => {
    simulateBotTyping(() => {
      let botMessage: Message;

      switch (actionValue) {
        case "services":
          botMessage = {
            type: "bot",
            content: "We offer a wide range of digital solutions. Which one are you interested in?",
            actions: [
              { label: "Web Design & Dev", value: "web_design" },
              { label: "Digital Marketing", value: "marketing" },
              { label: "App Development", value: "apps" },
              { label: "Back to Menu", value: "menu" },
            ],
          };
          break;
        case "web_design":
          botMessage = {
            type: "bot",
            content: "Our Web Design services include custom responsive websites, eCommerce solutions, and high-converting landing pages. We ensure your site is fast, secure, and SEO-friendly.",
            actions: [
              { label: "See Pricing", value: "pricing" },
              { label: "See Portfolio", value: "menu" }, // Placeholder, could link to portfolio
              { label: "Other Services", value: "services" },
            ],
          };
          break;
        case "marketing":
          botMessage = {
            type: "bot",
            content: "Our Digital Marketing strategies are data-driven. We handle social media management, SEO, PPC campaigns, and content creation to boost your brand visibility.",
            actions: [
              { label: "Start a Campaign", value: "agent" },
              { label: "Other Services", value: "services" },
            ],
          };
          break;
        case "apps":
          botMessage = {
            type: "bot",
            content: "We build native iOS and Android applications, as well as cross-platform solutions using React Native and Flutter. Perfect for startups and established businesses.",
            actions: [
              { label: "Discuss App Idea", value: "agent" },
              { label: "Other Services", value: "services" },
            ],
          };
          break;
        case "pricing":
          botMessage = {
            type: "bot",
            content: "Our pricing varies based on the project. \n\n• Websites start from $199\n• Marketing packages from $299/mo\n• Apps from $1,299\n\nWould you like a custom quote?",
            actions: [
              { label: "Get Free Quote", value: "agent" },
              { label: "View Services", value: "services" },
            ],
          };
          break;
        case "faqs":
          botMessage = {
            type: "bot",
            content: "Here are some common questions:",
            actions: [
              { label: "How long does a website take?", value: "faq_timeline" },
              { label: "Do you offer payment plans?", value: "faq_payment" },
              { label: "Can you update my current site?", value: "faq_update" },
              { label: "Back to Menu", value: "menu" },
            ],
          };
          break;
        case "faq_timeline":
          botMessage = {
            type: "bot",
            content: "A standard business website typically takes 1-2 weeks. More complex eCommerce sites or custom apps may take 4-8 weeks. We also offer express 24-hour delivery for urgent projects!",
            actions: [
              { label: "That helps!", value: "menu" },
              { label: "I have more questions", value: "agent" },
            ],
          };
          break;
        case "faq_payment":
          botMessage = {
            type: "bot",
            content: "Yes! We require a 50% deposit to start, and the remaining 50% upon completion and your satisfaction. We also offer installment plans for larger projects.",
            actions: [
              { label: "That helps!", value: "menu" },
              { label: "Talk to Agent", value: "agent" },
            ],
          };
          break;
        case "faq_update":
          botMessage = {
            type: "bot",
            content: "Absolutely. We can audit your existing website and propose a redesign or performance optimization plan to bring it up to modern standards.",
            actions: [
              { label: "Audit my site", value: "agent" },
              { label: "Back to FAQs", value: "faqs" },
            ],
          };
          break;
        case "agent":
          botMessage = {
            type: "bot",
            content: "I can connect you with a live agent right now. Please provide your details below, and we'll reach out immediately.",
          };
          setShowAgentForm(true);
          break;
        case "menu":
        default:
          botMessage = {
            type: "bot",
            content: "What else can I help you with?",
            actions: [
              { label: "Our Services", value: "services" },
              { label: "Pricing & Quotes", value: "pricing" },
              { label: "Support & FAQs", value: "faqs" },
              { label: "Talk to Agent", value: "agent" },
            ],
          };
          break;
      }

      setMessages((prev) => [...prev, botMessage]);
    });
  };

  const handleLiveAgentSubmit = async () => {
    if (email) {
      const messageContent = userInput || "Request for live agent support";

      try {
        // Create URL-encoded form data
        const params = new URLSearchParams();
        params.append("name", "Chat Bot User"); // Could add name field
        params.append("email", email);
        params.append("phone", phone || "");
        params.append("company", "");
        params.append("service", "Live Agent Support");
        params.append("budget", "");
        params.append("message", messageContent);

        // Send to Google Sheet (Fire and forget style for UX speed)
        fetch(
          "https://script.google.com/macros/s/AKfycbxamHsmi6gybjmuwEZJqKKxbgiRCul1lGuQgdncWYiBPcws-ZVlQkxs7-SO6hfFgANvJg/exec",
          {
            method: "POST",
            body: params,
            mode: "no-cors",
          },
        );

        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content: `Thanks! We've received your request. An agent will contact you at ${email} shortly.`,
          },
        ]);
        setEmail("");
        setPhone("");
        setUserInput("");
        setShowAgentForm(false);

        // Return to main menu after delay
        setTimeout(() => {
          processBotResponse("menu");
        }, 3000);

      } catch (error) {
        console.error("Error submitting agent request:", error);
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content: "There was a temporary issue connecting. Please try again or email us directly at support@digit-all.com",
            actions: [
              { label: "Try Again", value: "agent" },
              { label: "Back to Menu", value: "menu" },
            ],
          },
        ]);
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col mb-4 border border-gray-100 overflow-hidden"
            style={{ maxHeight: "600px", height: "80vh" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-neon-blue to-neon-yellow p-4 flex justify-between items-center shadow-md">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">DMS Assistant</h3>
                  <p className="text-white/80 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-2 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scrollbar-thin scrollbar-thumb-gray-200">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${msg.type === "user" ? "items-end" : "items-start"}`}
                >
                  <div className={`flex items-end gap-2 max-w-[85%] ${msg.type === "user" ? "flex-row-reverse" : ""}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.type === "user" ? "bg-neon-blue/10" : "bg-gradient-to-br from-neon-blue to-neon-yellow"
                      }`}>
                      {msg.type === "user" ? <User className="w-5 h-5 text-neon-blue" /> : <Bot className="w-5 h-5 text-white" />}
                    </div>

                    <div
                      className={`px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.type === "user"
                        ? "bg-neon-blue text-white rounded-br-none"
                        : "bg-white text-gray-700 border border-gray-100 rounded-bl-none"
                        }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>

                  {/* Actions / Buttons */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="mt-2 ml-10 flex flex-wrap gap-2">
                      {msg.actions.map((action, actionIdx) => (
                        <button
                          key={actionIdx}
                          onClick={() => handleActionClick(action.value)}
                          className="text-xs bg-white border border-neon-blue/30 text-neon-blue hover:bg-neon-blue hover:text-white px-3 py-1.5 rounded-full transition-all duration-300 shadow-sm"
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-blue to-neon-yellow flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-none">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce duration-1000"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce duration-1000 delay-100"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce duration-1000 delay-200"></span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Footer Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              {showAgentForm ? (
                <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <p className="text-sm font-semibold text-gray-700">Enter your contact info:</p>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm text-black border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="Phone Number (Optional)"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm text-black border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => setShowAgentForm(false)}
                      variant="outline"
                      className="flex-1 text-xs"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleLiveAgentSubmit}
                      disabled={!email}
                      className="flex-1 bg-gradient-to-r from-neon-blue to-neon-yellow text-white text-xs"
                    >
                      Submit Request
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex gap-2 relative">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1 px-4 py-2 text-sm text-black border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!userInput.trim()}
                    className="bg-gradient-to-r from-neon-blue to-neon-yellow text-white p-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-yellow rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-neon-blue/50 transition-all duration-300 relative group"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
        {isOpen ? (
          <X className="w-8 h-8" />
        ) : (
          <MessageCircle className="w-8 h-8" />
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;
