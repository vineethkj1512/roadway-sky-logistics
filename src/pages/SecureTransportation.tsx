
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Lock, Phone, CheckCircle, Clock, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SecureTransportation = () => {
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
          <h1 className="text-5xl font-bold mb-6">Secure Transportation</h1>
          <p className="text-xl max-w-3xl mx-auto">
            End-to-end security solutions for your valuable cargo with comprehensive protection
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Insurance Coverage */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Insurance Coverage</CardTitle>
                <CardDescription>Comprehensive protection for your cargo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Up to ₹50 Lakh coverage per shipment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Transit damage protection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Theft and pilferage coverage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Natural disaster protection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Quick claim processing (24-48 hours)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 24/7 Monitoring */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">24/7 Monitoring</CardTitle>
                <CardDescription>Round-the-clock surveillance and tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <span>Live GPS tracking system</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <span>Route deviation alerts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <span>Emergency response team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <span>Speed monitoring alerts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <span>Control room monitoring</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tamper-proof Sealing */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-4">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Tamper-proof Sealing</CardTitle>
                <CardDescription>Advanced security sealing systems</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-red-500" />
                    <span>Electronic security seals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-red-500" />
                    <span>RFID tracking technology</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-red-500" />
                    <span>Breach notification system</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-red-500" />
                    <span>Multi-layer security protocols</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-red-500" />
                    <span>Digital seal verification</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Secure Transportation?</h2>
            <p className="text-xl text-gray-600 mb-8">Contact our security experts for a customized solution</p>
            <Button className="bg-sky-600 hover:bg-sky-700 text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Contact Security Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecureTransportation;
