import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Truck, Phone, Mail, MessageSquare, Clock, Shield, Zap, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RealTimeTracking = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <Button 
            onClick={() => navigate('/')} 
            variant="outline" 
            className="mb-6 border-white text-white hover:bg-white hover:text-sky-600"
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-5xl font-bold mb-6">Real-Time Tracking</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Track your shipments live with GPS-enabled vehicles and get instant updates
          </p>
        </div>
      </section>

      {/* Demo Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Map */}
            <div className="md:order-1">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.064447667879!2d73.76307757476824!3d18.56405976748384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c783b319930f%3A0x4b2b9979f3964546!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1708184244929!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Real-Time Tracking Map"
                ></iframe>
              </div>
            </div>

            {/* GPS Tracking Details */}
            <div>
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    GPS Tracking Details
                  </CardTitle>
                  <CardDescription>
                    Real-time updates on your shipment's location
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-sky-600" />
                    <div>
                      <div className="font-semibold">Current Location</div>
                      <div className="text-sm text-gray-600">
                        Phoenix Market City, Pune
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-sky-600" />
                    <div>
                      <div className="font-semibold">Vehicle</div>
                      <div className="text-sm text-gray-600">MH 14 GH 4567</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-sky-600" />
                    <div>
                      <div className="font-semibold">Estimated Arrival</div>
                      <div className="text-sm text-gray-600">
                        Tomorrow, 10:00 AM
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-sky-600" />
                    <div>
                      <div className="font-semibold">Safety Score</div>
                      <div className="text-sm text-gray-600">Excellent</div>
                    </div>
                  </div>

                  <Button className="w-full bg-sky-600 hover:bg-sky-700">
                    Track Another Shipment
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Assistance?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our support team for any queries or assistance
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Support */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Phone Support
                </CardTitle>
                <CardDescription>Instant assistance over phone call</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-green-600">
                    +91 8000-123-456
                  </div>
                  <div className="text-sm text-gray-600">Toll-free number</div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Email Support */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Email Support
                </CardTitle>
                <CardDescription>Detailed assistance via email</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-lg font-semibold text-blue-600">
                    support@roadwayslogistics.com
                  </div>
                  <div className="text-sm text-gray-600">
                    Response time: 2-4 hours
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Chat Support */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Live Chat
                </CardTitle>
                <CardDescription>Instant messaging support</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-lg font-semibold text-purple-600">
                    Live Chat Available
                  </div>
                  <div className="text-sm text-gray-600">
                    Connect time: &lt; 2 minutes
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Start Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RealTimeTracking;
