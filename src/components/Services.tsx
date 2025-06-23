
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, MapPin, Clock, Shield, Globe, Zap, Users, FileText } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Freight Booking",
      description: "Book trucks for full truckload and part load shipments with instant pricing",
      features: ["Instant quotes", "Multiple vehicle types", "Flexible scheduling"]
    },
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description: "Track your shipments live with GPS-enabled vehicles and get updates",
      features: ["Live GPS tracking", "SMS/Email alerts", "Route optimization"]
    },
    {
      icon: Users,
      title: "Fleet Management",
      description: "Complete fleet management solutions for logistics companies",
      features: ["Driver management", "Vehicle maintenance", "Performance analytics"]
    },
    {
      icon: Globe,
      title: "Supply Chain Solutions",
      description: "End-to-end supply chain management and optimization services",
      features: ["Warehouse management", "Inventory control", "Distribution planning"]
    },
    {
      icon: Shield,
      title: "Insurance & Safety",
      description: "Comprehensive insurance coverage and safety measures for all shipments",
      features: ["Cargo insurance", "Transit protection", "24/7 monitoring"]
    },
    {
      icon: Clock,
      title: "Express Delivery",
      description: "Time-critical deliveries with guaranteed on-time performance",
      features: ["Same-day delivery", "Priority handling", "Time-slot booking"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive logistics solutions designed to streamline your supply chain operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-sky-100 hover:border-sky-300"
            >
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
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
