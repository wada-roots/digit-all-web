import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setSolutionsOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Digital Marketing", href: "/solutions/digital-marketing" },
    { name: "Media & Creatives", href: "/solutions/media-creatives" },
    { name: "Software Development", href: "/solutions/software-development" },
    { name: "Get in Touch", href: "/contact" },
  ];

  const solutionsItems = [
    { name: "Digital Marketing", href: "/solutions/digital-marketing" },
    { name: "Media & Creatives", href: "/solutions/media-creatives" },
    { name: "Software Development", href: "/solutions/software-development" },
  ];

  return (
    <nav className="fixed top-0 sm:top-8 w-full z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src="/logo.png" alt="DMS Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {/* Static Links */}
            {navItems.slice(0, 1).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
                Solutions
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {solutionsItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Remaining Links */}
            {navItems.slice(1).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}

          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                window.open("https://wa.me/254738849148", "_blank")
              }
            >
              <MessageCircle className="h-5 w-5 text-green-600" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-2 bg-white border rounded-lg shadow-lg">
            <Link to="/" className="block px-4 py-2 hover:bg-gray-50">
              DMS
            </Link>

            {/* Mobile Solutions Dropdown */}
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="flex justify-between items-center w-full px-4 py-2 font-medium hover:bg-gray-50"
            >
              Solutions
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  solutionsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {solutionsOpen && (
              <div className="pl-4">
                {solutionsItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-2 text-sm hover:bg-blue-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            {navItems.slice(1).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-4 py-2 hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
