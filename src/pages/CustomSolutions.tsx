
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Building, Truck, Settings, Users, Package, MapPin } from "lucide-react";

const CustomSolutions = () => {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    phone: "",
    requirements: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Our enterprise team will contact you within 24 hours to discuss your requirements.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Custom Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Tailored logistics solutions designed specifically for your business needs
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Solutions Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Enterprise Solutions */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Enterprise Solutions</CardTitle>
                <CardDescription>Scalable logistics for large enterprises</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm">Dedicated account management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm">Custom pricing models</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm">Advanced analytics dashboard</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm">API integration support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm">24/7 priority support</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bulk Transportation */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-4">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Bulk Transportation</CardTitle>
                <CardDescription>High-volume cargo movement solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Multi-vehicle coordination</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Volume-based discounts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Scheduled regular pickups</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Dedicated logistics team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Flexible routing options</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Specialized Handling */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Specialized Handling</CardTitle>
                <CardDescription>Custom handling for unique cargo types</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm">Temperature-controlled transport</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm">Hazardous material handling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm">Fragile cargo protection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm">Oversized cargo solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm">Compliance documentation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Requirements Form */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Discuss Your Requirements</CardTitle>
                <CardDescription className="text-center">
                  Share your logistics needs and our experts will design a custom solution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input 
                        id="company" 
                        placeholder="Enter company name"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="requirements">Detailed Requirements</Label>
                    <Textarea 
                      id="requirements" 
                      placeholder="Describe your logistics requirements, cargo types, volumes, frequency, special handling needs, etc."
                      rows={5}
                      value={formData.requirements}
                      onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-lg py-3">
                    Submit Requirements
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Demo Statistics */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Users className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Enterprise Clients</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Package className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900">1M+</div>
              <div className="text-gray-600">Shipments Handled</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900">15K+</div>
              <div className="text-gray-600">Vehicles Network</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomSolutions;
