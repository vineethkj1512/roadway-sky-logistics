import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, Users, Settings, Phone, CheckCircle, Home } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomSolutions = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [industry, setIndustry] = useState("");
  const [requirements, setRequirements] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", {
      companyName,
      contactName,
      email,
      phone,
      industry,
      requirements,
    });
    alert("Form submitted! We will contact you soon.");
  };

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
          <h1 className="text-5xl font-bold mb-6">Custom Logistics Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Tailored logistics solutions designed specifically for your business needs
          </p>
        </div>
      </section>

      {/* Solutions and Requirements Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Solutions Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Supply Chain Optimization */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Supply Chain Optimization</CardTitle>
                <CardDescription>Streamline your supply chain for maximum efficiency</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Demand forecasting</li>
                  <li>Inventory management</li>
                  <li>Distribution network design</li>
                  <li>Logistics technology integration</li>
                </ul>
              </CardContent>
            </Card>

            {/* Transportation Management */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Transportation Management</CardTitle>
                <CardDescription>Customized transportation solutions for your unique needs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Route optimization</li>
                  <li>Mode selection</li>
                  <li>Freight consolidation</li>
                  <li>Real-time tracking</li>
                </ul>
              </CardContent>
            </Card>

            {/* Warehouse Solutions */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-4">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Warehouse Solutions</CardTitle>
                <CardDescription>Efficient warehousing and distribution services</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Inventory storage</li>
                  <li>Order fulfillment</li>
                  <li>Cross-docking</li>
                  <li>Returns management</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Requirements Form */}
          <Card className="shadow-2xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 text-center">
                Tell us about your requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="companyName"
                  >
                    Company Name
                  </label>
                  <Input
                    type="text"
                    id="companyName"
                    placeholder="Enter your company name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="h-11 border-sky-200 focus:border-sky-400"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="contactName"
                  >
                    Contact Name
                  </label>
                  <Input
                    type="text"
                    id="contactName"
                    placeholder="Enter your contact name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="h-11 border-sky-200 focus:border-sky-400"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 border-sky-200 focus:border-sky-400"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-11 border-sky-200 focus:border-sky-400"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="industry"
                  >
                    Industry
                  </label>
                  <Select onValueChange={setIndustry}>
                    <SelectTrigger className="h-11 border-sky-200 focus:border-sky-400">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Retail">Retail</SelectItem>
                      <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="Healthcare">Healthcare</SelectItem>
                      <SelectItem value="Automotive">Automotive</SelectItem>
                      <SelectItem value="E-commerce">E-commerce</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="requirements"
                  >
                    Specific Requirements
                  </label>
                  <Textarea
                    id="requirements"
                    placeholder="Describe your specific logistics requirements"
                    rows={4}
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    className="border-sky-200 focus:border-sky-400 resize-none"
                    required
                  />
                </div>
                <Button className="w-full h-12 text-lg bg-sky-600 hover:bg-sky-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Request a Quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomSolutions;
