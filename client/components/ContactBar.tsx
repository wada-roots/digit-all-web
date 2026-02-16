import { Phone, Mail, Clock } from "lucide-react";

const ContactBar = () => {
  return (
    <div className="hidden sm:block fixed top-0 w-full z-50 bg-blue-600 text-white py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>+254 114 261 221 / +254 708 322 249</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>support@dealmojasafi.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>24/7 Available</span>
          </div>
        </div>

        {/* Social Links or Additional Info */}
        <div className="mt-1 sm:mt-0">
          <span className="text-blue-100">
            Get your free consultation today!
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
