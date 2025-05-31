import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Clock } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo variant="light" />
            <p className="mt-4 text-gray-400 leading-relaxed">
              Premium door and window solutions for residential and commercial spaces across Uttar Pradesh.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary-600 transition-colors p-2 rounded-full"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary-600 transition-colors p-2 rounded-full"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary-600 transition-colors p-2 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/products/gi-doors-windows"
                  className="text-gray-400 hover:text-primary-300 transition-colors"
                >
                  GI Doors and Windows
                </Link>
              </li>
              <li>
                <Link
                  to="/products/upvc-doors-windows"
                  className="text-gray-400 hover:text-primary-300 transition-colors"
                >
                  UPVC Doors and Windows
                </Link>
              </li>
              <li>
                <Link
                  to="/products/aluminium-system"
                  className="text-gray-400 hover:text-primary-300 transition-colors"
                >
                  Aluminium System Windows & Doors
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-primary-300 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Business Street, Lucknow, Uttar Pradesh, India - 226001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-400 hover:text-primary-300 transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@siddhivinayak.com"
                  className="text-gray-400 hover:text-primary-300 transition-colors"
                >
                  info@siddhivinayak.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-primary-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  Monday - Saturday: 9:00 AM - 7:00 PM
                  <br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Siddhi Vinayak Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;