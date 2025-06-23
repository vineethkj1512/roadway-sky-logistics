
import { Link } from "react-router-dom";
import { Truck, MapPin, Clock, Mail, User } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">Roadways</div>
                <div className="text-sm text-sky-400 font-medium">Logistics</div>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              India's most trusted logistics platform connecting businesses with reliable transportation solutions.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-sky-700 transition-colors">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-sky-700 transition-colors">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-sky-700 transition-colors">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/track" className="text-gray-400 hover:text-white transition-colors">Track Shipment</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Freight Booking</span></li>
              <li><span className="text-gray-400">Fleet Management</span></li>
              <li><span className="text-gray-400">Supply Chain</span></li>
              <li><span className="text-gray-400">Express Delivery</span></li>
              <li><span className="text-gray-400">Insurance</span></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-sky-400 mr-3" />
                <span className="text-gray-400">Mumbai, Maharashtra</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-sky-400 mr-3" />
                <span className="text-gray-400">info@roadwayslogistics.com</span>
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 text-sky-400 mr-3" />
                <span className="text-gray-400">+91 9999 888 777</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-sky-400 mr-3" />
                <span className="text-gray-400">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Roadways Logistics. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/faq" className="text-gray-400 hover:text-white text-sm transition-colors">
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
