
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Truck, Menu, X } from "lucide-react";
import LoginModal from "./LoginModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/freight-booking');
  };

  const handleLogin = () => {
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">Roadways</div>
                <div className="text-sm text-sky-600 font-medium">Logistics</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-sky-600 transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-sky-600 transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-sky-600 transition-colors">
                About Us
              </Link>
              <Link to="/track" className="text-gray-700 hover:text-sky-600 transition-colors">
                Track Shipment
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-sky-600 transition-colors">
                Contact
              </Link>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline" 
                className="border-sky-600 text-sky-600 hover:bg-sky-50"
                onClick={handleLogin}
              >
                Login
              </Button>
              <Button 
                className="bg-sky-600 hover:bg-sky-700"
                onClick={handleGetStarted}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="text-gray-700 hover:text-sky-600 transition-colors px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/services" 
                  className="text-gray-700 hover:text-sky-600 transition-colors px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  to="/about" 
                  className="text-gray-700 hover:text-sky-600 transition-colors px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="/track" 
                  className="text-gray-700 hover:text-sky-600 transition-colors px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Track Shipment
                </Link>
                <Link 
                  to="/contact" 
                  className="text-gray-700 hover:text-sky-600 transition-colors px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="flex flex-col space-y-2 px-4 pt-4">
                  <Button 
                    variant="outline" 
                    className="border-sky-600 text-sky-600 hover:bg-sky-50"
                    onClick={() => {
                      handleLogin();
                      setIsMenuOpen(false);
                    }}
                  >
                    Login
                  </Button>
                  <Button 
                    className="bg-sky-600 hover:bg-sky-700"
                    onClick={() => {
                      handleGetStarted();
                      setIsMenuOpen(false);
                    }}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;
