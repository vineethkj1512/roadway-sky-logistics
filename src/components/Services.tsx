
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Shield, Clock, MapPin, Phone, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const handleRealTimeTracking = () => {
    navigate('/real-time-tracking');
  };

  const handleBookShipment = () => {
    navigate('/freight-booking');
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive logistics solutions designed to meet all your transportation needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Freight Booking */}
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-sky-100 hover:border-sky-300">
            <CardHeader>
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-sky-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">Freight Booking</CardTitle>
              <CardDescription className="text-gray-600">
                Book trucks instantly for your cargo transportation needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                  Instant booking
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                  Verified drivers
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                  Competitive pricing
                </li>
              </ul>
              <Button 
                className="w-full bg-sky-600 hover:bg-sky-700"
                onClick={handleBookShipment}
              >
                Book Now
              </Button>
            </CardContent>
          </Card>

          {/* Real-time Tracking */}
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-sky-100 hover:border-sky-300">
            <CardHeader>
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-sky-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">Real-time Tracking</CardTitle>
              <CardDescription className="text-gray-600">
                Track your shipments with live GPS updates and notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                  Live GPS tracking
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                  SMS/Email alerts
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                  Route optimization
                </li>
              </ul>
              <Button 
                className="w-full bg-sky-600 hover:bg-sky-700"
                onClick={handleRealTimeTracking}
              >
                Track Now
              </Button>
            </CardContent>
          </Card>

          {/* Secure Transportation */}
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-sky-100 hover:border-sky-300">
            <CardHeader>
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-sky-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">Secure Transportation</CardTitle>
              <CardDescription className="text-gray-600">
                End-to-end security for your valuable cargo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                  Insurance coverage
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                  24/7 monitoring
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                  Tamper-proof sealing
                </li>
              </ul>
              <Button className="w-full bg-sky-600 hover:bg-sky-700">
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* Express Delivery */}
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-sky-100 hover:border-sky-300">
            <CardHeader>
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-sky-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">Express Delivery</CardTitle>
              <CardDescription className="text-gray-600">
                Fast and reliable same-day delivery services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                  Same-day delivery
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                  Priority handling
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                  Time-critical solutions
                </li>
              </ul>
              <Button className="w-full bg-sky-600 hover:bg-sky-700">
                Get Quote
              </Button>
            </CardContent>
          </Card>

          {/* 24/7 Support */}
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-sky-100 hover:border-sky-300">
            <CardHeader>
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-sky-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">24/7 Support</CardTitle>
              <CardDescription className="text-gray-600">
                Round-the-clock customer support for all your queries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                  Instant chat support
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                  Phone assistance
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                  Email support
                </li>
              </ul>
              <Button className="w-full bg-sky-600 hover:bg-sky-700">
                Contact Us
              </Button>
            </CardContent>
          </Card>

          {/* Custom Solutions */}
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-sky-100 hover:border-sky-300">
            <CardHeader>
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-sky-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">Custom Solutions</CardTitle>
              <CardDescription className="text-gray-600">
                Tailored logistics solutions for your specific business needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                  Enterprise solutions
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                  Bulk transportation
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                  Specialized handling
                </li>
              </ul>
              <Button className="w-full bg-sky-600 hover:bg-sky-700">
                Discuss Requirements
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
