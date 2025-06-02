import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Facebook, Instagram, Linkedin, Phone } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuItems = [
    {
      name: 'Products',
      path: '#',
      dropdown: true,
      items: [
        { name: 'GI Doors and Windows', path: '/products/gi-doors-windows' },
        { name: 'UPVC Doors and Windows', path: '/products/upvc-doors-windows' },
        { name: 'Aluminium System Windows & Doors', path: '/products/aluminium-system' },
      ],
    },
    { name: 'Contact Us', path: '/contact', dropdown: false },
  ];

  const WhatsAppIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <WhatsAppIcon />, href: "https://wa.me/919336509009", label: "WhatsApp" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      } ${isScrolled ? 'py-2' : 'py-6'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="z-10 transition-transform duration-300">
            <Logo variant={isScrolled ? 'dark' : 'light'} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <>
                    <button className={`flex items-center font-medium group-hover:text-[#0057B8] transition-colors ${
                      isScrolled ? 'text-[#0057B8]' : 'text-white'
                    }`}>
                      {item.name}
                      <ChevronDown className={`ml-1 w-4 h-4 ${isScrolled ? 'text-[#0057B8]' : 'text-white'}`} />
                    </button>
                    <div className="absolute left-0 mt-2 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                      <div className="bg-white rounded-md shadow-lg overflow-hidden">
                        {item.items?.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className="block px-6 py-3 text-sm text-gray-700 hover:bg-[#0057B8]/10 hover:text-[#0057B8] transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-medium transition-colors ${
                      location.pathname === item.path 
                        ? 'text-[#0057B8]' 
                        : isScrolled 
                          ? 'text-[#0057B8] hover:text-[#0057B8]/80' 
                          : 'text-white hover:text-white/80'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Desktop Social Icons */}
            <div className="flex items-center space-x-4 ml-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors ${
                    isScrolled 
                      ? 'text-[#0057B8] hover:text-[#0057B8]/80' 
                      : 'text-white hover:text-white/80'
                  }`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="lg:hidden z-10 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-[#0057B8]' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-[#0057B8]' : 'text-white'}`} />
            )}
          </button>

          {/* Mobile Navigation */}
          <div
            className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            } lg:hidden`}
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-8">
                <Logo />
                <button onClick={toggleMenu} className="focus:outline-none">
                  <X className="w-6 h-6 text-gray-800" />
                </button>
              </div>
              <nav className="flex flex-col space-y-6">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    {item.dropdown ? (
                      <div className="space-y-4">
                        <div className="font-medium text-gray-800">{item.name}</div>
                        <div className="pl-4 space-y-3">
                          {item.items?.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className="block text-gray-600 hover:text-primary-600"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`font-medium transition-colors ${
                          location.pathname === item.path
                            ? 'text-primary-600'
                            : 'text-gray-800 hover:text-primary-600'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              
              {/* Mobile Social Icons */}
              <div className="mt-8">
                <h3 className="text-gray-800 font-medium mb-4">Connect With Us</h3>
                <div className="flex space-x-6">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <Link
                  to="/contact"
                  className="inline-block bg-primary-600 text-white font-medium px-5 py-2 rounded-md hover:bg-primary-700 transition-colors w-full text-center"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;