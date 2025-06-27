
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, MapPin, Clock, Shield, ArrowRight, Users, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrackingSection from "@/components/TrackingSection";
import TruckRegistrationForm from "@/components/TruckRegistrationForm";
import EnterpriseQuoteForm from "@/components/EnterpriseQuoteForm";

const Index = () => {
  const [isTruckFormOpen, setIsTruckFormOpen] = useState(false);
  const [isEnterpriseFormOpen, setIsEnterpriseFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      <Navbar />
      <Hero />
      <Services />
      <TrackingSection />
      
      {/* Stats Section */}
      <section className="py-16 bg-sky-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-sky-100">Trucks Connected</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-sky-100">Shipments Delivered</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sky-100">Cities Covered</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">99.5%</div>
              <div className="text-sky-100">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner With Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of truck owners and logistics vendors who trust Roadways Logistics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-sky-200">
              <CardHeader>
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-sky-600" />
                </div>
                <CardTitle className="text-xl">For Truck Owners</CardTitle>
                <CardDescription>
                  Maximize your earnings with our advanced load matching platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                    Guaranteed payments
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                    Real-time load notifications
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                    24/7 support
                  </li>
                </ul>
                <Button 
                  className="w-full bg-sky-600 hover:bg-sky-700"
                  onClick={() => setIsTruckFormOpen(true)}
                >
                  Register Your Truck
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-sky-200">
              <CardHeader>
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-sky-600" />
                </div>
                <CardTitle className="text-xl">For Businesses</CardTitle>
                <CardDescription>
                  Scale your logistics operations with our enterprise solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                    Dedicated account manager
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                    Custom pricing
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                    Advanced analytics
                  </li>
                </ul>
                <Button 
                  className="w-full bg-sky-600 hover:bg-sky-700"
                  onClick={() => setIsEnterpriseFormOpen(true)}
                >
                  Get Enterprise Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />

      <TruckRegistrationForm 
        isOpen={isTruckFormOpen} 
        onClose={() => setIsTruckFormOpen(false)} 
      />
      
      <EnterpriseQuoteForm 
        isOpen={isEnterpriseFormOpen} 
        onClose={() => setIsEnterpriseFormOpen(false)} 
      />
    </div>
  );
};

export default Index;
