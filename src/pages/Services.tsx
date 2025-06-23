
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, MapPin, Clock, Shield, Globe, Zap, Users, FileText, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Freight Booking",
      description: "Book trucks for full truckload and part load shipments with instant pricing and real-time availability.",
      features: [
        "Instant quotes and pricing",
        "Multiple vehicle types available",
        "Flexible scheduling options",
        "Digital documentation",
        "Payment protection"
      ],
      popular: true
    },
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description: "Track your shipments live with GPS-enabled vehicles and get regular updates throughout the journey.",
      features: [
        "Live GPS tracking",
        "SMS and Email alerts",
        "Route optimization",
        "Delivery confirmation",
        "Photo proof of delivery"
      ]
    },
    {
      icon: Users,
      title: "Fleet Management",
      description: "Complete fleet management solutions for logistics companies and businesses with multiple vehicles.",
      features: [
        "Driver management system",
        "Vehicle maintenance tracking",
        "Performance analytics",
        "Fuel management",
        "Compliance monitoring"
      ]
    },
    {
      icon: Globe,
      title: "Supply Chain Solutions",
      description: "End-to-end supply chain management and optimization services for businesses of all sizes.",
      features: [
        "Warehouse management",
        "Inventory control systems",
        "Distribution planning",
        "Demand forecasting",
        "Cost optimization"
      ]
    },
    {
      icon: Shield,
      title: "Insurance & Safety",
      description: "Comprehensive insurance coverage and safety measures for all your shipments and cargo.",
      features: [
        "Cargo insurance coverage",
        "Transit protection",
        "24/7 monitoring",
        "Risk assessment",
        "Claims support"
      ]
    },
    {
      icon: Clock,
      title: "Express Delivery",
      description: "Time-critical deliveries with guaranteed on-time performance for urgent shipments.",
      features: [
        "Same-day delivery",
        "Priority handling",
        "Time-slot booking",
        "Express lanes",
        "Urgent cargo support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive logistics solutions designed to streamline your supply chain operations and drive business growth
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-sky-100 hover:border-sky-300 relative ${
                  service.popular ? 'ring-2 ring-sky-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-sky-400 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-sky-600 hover:bg-sky-700">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Roadways Logistics?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with industry expertise to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast & Reliable</h3>
              <p className="text-gray-600">
                Quick turnaround times with 99.5% on-time delivery rate
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure & Safe</h3>
              <p className="text-gray-600">
                Complete insurance coverage and advanced security measures
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock customer support for all your logistics needs
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pan-India Network</h3>
              <p className="text-gray-600">
                Extensive network covering 500+ cities across India
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
