import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react";
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
    { name: "Software Development", href: "/solutions/web-seo-ecommerce" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Get in Touch", href: "/contact" },
  ];

  const solutionsCategories = [
    {
      title: "Digital Marketing",
      items: [
        {
          name: "Digital Marketing Services",
          href: "/solutions/digital-marketing",
        },
        {
          name: "Sponsored Content & Banners",
          href: "/solutions/digital-marketing#banners",
        },
        {
          name: "Public Relations Services",
          href: "/solutions/digital-marketing#pr",
        },
        {
          name: "Events Digital Marketing",
          href: "/solutions/digital-marketing#events",
        },
        {
          name: "Influencer Marketing",
          href: "/solutions/digital-marketing#influencer",
        },
        {
          name: "Social Media Marketing",
          href: "/solutions/digital-marketing#social-media",
        },
        {
          name: "Google/PPC Advertising",
          href: "/solutions/digital-marketing#google-ppc",
        },
        {
          name: "YouTube Advertising",
          href: "/solutions/digital-marketing#youtube",
        },
        { name: "Shopping Ads", href: "/solutions/digital-marketing#shopping" },
        {
          name: "TikTok Advertising",
          href: "/solutions/digital-marketing#tiktok",
        },
        { name: "Email Marketing", href: "/solutions/digital-marketing#email" },
      ],
    },
    {
      title: "Websites, SEO & Ecommerce",
      items: [
        {
          name: "Web Hosting & Domain Registration",
          href: "/solutions/web-seo-ecommerce#hosting",
        },
        { name: "Website Design", href: "/solutions/web-seo-ecommerce#design" },
        {
          name: "Search Engine Optimization (SEO)",
          href: "/solutions/web-seo-ecommerce#seo",
        },
        {
          name: "eCommerce Website Design",
          href: "/solutions/web-seo-ecommerce#ecommerce",
        },
        {
          name: "Website Maintenance",
          href: "/solutions/web-seo-ecommerce#maintenance",
        },
        {
          name: "Content Writing Services",
          href: "/solutions/web-seo-ecommerce#content",
        },
      ],
    },
    {
      title: "TTL, Media & Creatives",
      items: [
        {
          name: "Billboard Advertising",
          href: "/solutions/media-creatives#billboard",
        },
        {
          name: "Roadshows & Activations",
          href: "/solutions/media-creatives#roadshows",
        },
        {
          name: "Print Media Advertising",
          href: "/solutions/media-creatives#print",
        },
        {
          name: "Experiential Marketing",
          href: "/solutions/media-creatives#experiential",
        },
        {
          name: "Printing Services",
          href: "/solutions/media-creatives#printing",
        },
        { name: "Radio Advertising", href: "/solutions/media-creatives#radio" },
        { name: "Graphic Design", href: "/solutions/media-creatives#design" },
        {
          name: "Photography Services",
          href: "/solutions/media-creatives#photography",
        },
        {
          name: "Video Creation & Editing",
          href: "/solutions/media-creatives#video",
        },
      ],
    },
  ];

  return (
    <nav className="fixed top-8 w-full z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[49px] mt-[33px]">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src="/logo.png" alt="DMS Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {/* Home Link */}
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                location.pathname === "/"
                  ? "text-neon-blue bg-blue-50"
                  : "text-gray-700 hover:text-neon-blue hover:bg-gray-50"
              }`}
            >
              Home
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-neon-blue rounded-md group-hover:bg-gray-50 transition-all">
                Solutions
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Mega Dropdown Menu */}
              <div className="absolute left-0 mt-0 w-max bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-6">
                <div className="grid grid-cols-3 gap-8 px-6">
                  {solutionsCategories.map((category, idx) => (
                    <div key={idx}>
                      <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide text-neon-blue">
                        {category.title}
                      </h3>
                      <ul className="space-y-2">
                        {category.items.map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.href}
                              className="text-sm text-gray-700 hover:text-neon-blue hover:font-medium transition-colors block py-1"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Navigation Items */}
            {navItems.slice(1).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  location.pathname === item.href
                    ? "text-neon-blue bg-blue-50"
                    : "text-gray-700 hover:text-neon-blue hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-2 bg-white border-t border-gray-200 max-h-[calc(100vh-120px)] overflow-y-auto">
            {/* Mobile Home Link */}
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-neon-blue font-medium"
            >
              Home
            </Link>

            {/* Mobile Solutions Dropdown */}
            <div className="border-t border-gray-200">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex justify-between items-center w-full px-4 py-2 font-medium text-gray-700 hover:bg-gray-50 hover:text-neon-blue"
              >
                Solutions
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    solutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {solutionsOpen && (
                <div className="bg-gray-50 border-t border-gray-200">
                  {solutionsCategories.map((category, idx) => (
                    <div key={idx}>
                      <div className="px-4 py-3 font-semibold text-sm text-neon-blue uppercase tracking-wide bg-white border-t border-gray-200">
                        {category.title}
                      </div>
                      {category.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-6 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-neon-blue border-b border-gray-100 break-words"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Other Navigation Items */}
            {navItems.slice(1).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-neon-blue font-medium border-t border-gray-200"
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
