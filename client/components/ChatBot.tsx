import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Send, Phone } from "lucide-react";
import { Button } from "./ui/button";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    Array<{ type: "bot" | "user"; content: string }>
  >([
    {
      type: "bot",
      content: "Hi! 👋 Welcome to Deal Moja Safi. How can I help you today?",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showAgentForm, setShowAgentForm] = useState(false);

  // Auto-open on first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem("dms_bot_visited");
    if (!hasVisited) {
      setIsOpen(true);
      localStorage.setItem("dms_bot_visited", "true");
    }
  }, []);

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    // Add user message
    const newUserMessage = {
      type: "user" as const,
      content: userInput,
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setUserInput("");

    // Check if user wants to talk to an agent
    const lowerInput = userInput.toLowerCase();
    if (
      lowerInput.includes("agent") ||
      lowerInput.includes("live") ||
      lowerInput.includes("speak") ||
      lowerInput.includes("talk") ||
      lowerInput.includes("contact")
    ) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content:
              "I'd be happy to connect you with our team! Please provide your email and we'll have an agent reach out to you shortly.",
          },
        ]);
        setShowAgentForm(true);
      }, 300);
    } else {
      // Provide helpful bot response
      setTimeout(() => {
        let botResponse = "";

        if (
          lowerInput.includes("service") ||
          lowerInput.includes("solution") ||
          lowerInput.includes("help")
        ) {
          botResponse =
            "We offer a range of services including Digital Marketing, Web Development & SEO, Media & Creatives, Social Media Management, Video Production, and Graphic Design. What would you like to know more about?";
        } else if (
          lowerInput.includes("price") ||
          lowerInput.includes("cost") ||
          lowerInput.includes("budget")
        ) {
          botResponse =
            "Our pricing varies based on your specific needs. I recommend speaking with our team for a personalized quote. Would you like to connect with an agent?";
        } else if (
          lowerInput.includes("team") ||
          lowerInput.includes("about")
        ) {
          botResponse =
            "Deal Moja Safi is a leading digital solutions agency. Learn more about our team and values on our Impact page, or feel free to ask any specific questions!";
        } else {
          botResponse =
            "Thanks for your message! If you need more detailed assistance, I can connect you with one of our agents. Just let me know!";
        }

        setMessages((prev) => [...prev, { type: "bot", content: botResponse }]);
      }, 300);
    }
  };

  const handleLiveAgentSubmit = async () => {
    if (email && userInput) {
      const messageContent = userInput || "Request for live agent support";

      try {
        // Create URL-encoded form data
        const params = new URLSearchParams();
        params.append("name", "Chat Bot Inquiry");
        params.append("email", email);
        params.append("phone", phone || "");
        params.append("company", "");
        params.append("service", "Live Agent Support");
        params.append("budget", "");
        params.append("message", messageContent);

        // Send to Google Sheet
        await fetch(
          "https://script.google.com/macros/s/AKfycbxamHsmi6gybjmuwEZJqKKxbgiRCul1lGuQgdncWYiBPcws-ZVlQkxs7-SO6hfFgANvJg/exec",
          {
            method: "POST",
            body: params,
            mode: "no-cors",
          },
        );

        console.log("Agent request submitted");
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              type: "bot",
              content: `Perfect! Our agent will contact you at ${email} shortly. We typically respond within 1 hour. 🎉`,
            },
          ]);
          setEmail("");
          setPhone("");
          setUserInput("");
          setShowAgentForm(false);
          setTimeout(() => {
            setIsOpen(false);
          }, 2000);
        }, 300);
      } catch (error) {
        console.error("Error submitting agent request:", error);
        // Still show success message due to no-cors limitations
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              type: "bot",
              content: `Perfect! Our agent will contact you at ${email} shortly. We typically respond within 1 hour. 🎉`,
            },
          ]);
          setEmail("");
          setPhone("");
          setUserInput("");
          setShowAgentForm(false);
          setTimeout(() => {
            setIsOpen(false);
          }, 2000);
        }, 300);
      }
    }
  };

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
                Deal Moja Safi
              </h3>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowAgentForm(false);
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

            {/* Agent Form or Chat Input */}
            {showAgentForm ? (
              <div className="p-4 border-t border-gray-200 bg-white space-y-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neon-blue"
                />
                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neon-blue"
                />
                <Button
                  className="w-full text-sm"
                  onClick={handleLiveAgentSubmit}
                  disabled={!email}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Connect to Agent
                </Button>
              </div>
            ) : (
              <div className="p-4 border-t border-gray-200 bg-white flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage();
                    }
                  }}
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neon-blue"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!userInput.trim()}
                  className="bg-gradient-to-r from-neon-blue to-neon-yellow text-white p-2 rounded hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            )}
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
