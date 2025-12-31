import { Phone, Mail, Clock } from "lucide-react";

const ContactBar = () => {
  return (
    <div className="fixed top-0 w-full z-50 bg-blue-600 text-white py-1 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm gap-2 sm:gap-0">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>+254 738 849 148</span>
          </div>
          <div className="hidden sm:flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>info@digitallke.net</span>
          </div>
          <div className="hidden sm:flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>Mon - Sun: 8:00 AM - 6:00 PM</span>
          </div>
        </div>

        {/* CTA Message */}
        <div className="text-white font-medium">
          Get your free consultation today!
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
