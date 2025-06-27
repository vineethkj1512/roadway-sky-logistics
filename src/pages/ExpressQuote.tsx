
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Zap, Shield, Calendar, Package, Home } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExpressQuote = () => {
  const navigate = useNavigate();
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [packageType, setPackageType] = useState("");
  const [weight, setWeight] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetQuote = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Generate a dummy quote
    const basePrice = 500;
    const weightFactor = parseFloat(weight) * 10;
    const distanceFactor = 200; // Assume a fixed distance factor
    const expressFactor = 300; // Express delivery surcharge

    const calculatedQuote = basePrice + weightFactor + distanceFactor + expressFactor;

    setQuote({
      price: calculatedQuote,
      deliveryTime: "1-2 business days",
      insuranceCoverage: "₹50,000",
    });
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-700 text-white relative">
        <Button 
          onClick={() => navigate('/')} 
          variant="outline" 
          className="absolute top-4 left-4 border-white text-white hover:bg-white hover:text-sky-600"
        >
          <Home className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Express Delivery Quote</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get instant quotes for time-critical deliveries with guaranteed on-time performance
          </p>
        </div>
      </section>

      {/* Quote Form and Results */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto shadow-xl border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">Get an Instant Quote</CardTitle>
              <CardDescription>Fill out the details below to get an express delivery quote</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Origin and Destination */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Origin
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter origin city"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="h-12 text-lg border-sky-200 focus:border-sky-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Destination
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter destination city"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="h-12 text-lg border-sky-200 focus:border-sky-400"
                  />
                </div>
              </div>

              {/* Package Type and Weight */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Package Type
                  </label>
                  <Select onValueChange={setPackageType}>
                    <SelectTrigger className="h-12 text-lg w-full border-sky-200 focus:border-sky-400">
                      <SelectValue placeholder="Select package type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="documents">Documents</SelectItem>
                      <SelectItem value="clothing">Clothing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Weight (in kg)
                  </label>
                  <Input
                    type="number"
                    placeholder="Enter weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="h-12 text-lg border-sky-200 focus:border-sky-400"
                  />
                </div>
              </div>

              {/* Delivery Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Date
                </label>
                <Input
                  type="date"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="h-12 text-lg border-sky-200 focus:border-sky-400"
                />
              </div>

              {/* Get Quote Button */}
              <Button
                onClick={handleGetQuote}
                className="w-full h-12 text-lg bg-sky-600 hover:bg-sky-700"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Clock className="mr-2 h-5 w-5 animate-spin" />
                    Getting Quote...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-5 w-5" />
                    Get Express Quote
                  </>
                )}
              </Button>

              {/* Quote Results */}
              {quote && (
                <div className="mt-8 p-6 bg-sky-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Quote Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600">Price</div>
                      <div className="font-medium text-lg">₹{quote.price}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">
                        Estimated Delivery Time
                      </div>
                      <div className="font-medium text-lg">{quote.deliveryTime}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">
                        Insurance Coverage
                      </div>
                      <div className="font-medium text-lg">{quote.insuranceCoverage}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Guaranteed</div>
                      <div className="font-medium text-lg">On-time Delivery</div>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                    Book Express Delivery
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExpressQuote;
