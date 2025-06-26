
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clock, Calendar, MapPin, Package, Truck } from "lucide-react";

const ExpressQuote = () => {
  const [pickupDate, setPickupDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  
  const handleGetQuote = () => {
    // Demo functionality
    alert("Quote generated! You'll receive it via SMS and email within 5 minutes.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Express Delivery Quote</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get instant quotes for same-day and express delivery services
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Quote Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Get Express Quote</CardTitle>
                  <CardDescription>Fill in your delivery details for instant pricing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="pickup">Pickup Location</Label>
                      <Input id="pickup" placeholder="Enter pickup city" />
                    </div>
                    <div>
                      <Label htmlFor="delivery">Delivery Location</Label>
                      <Input id="delivery" placeholder="Enter delivery city" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Pickup Date</Label>
                      <Input 
                        id="date" 
                        type="date" 
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Preferred Time</Label>
                      <select 
                        className="w-full p-2 border rounded-md"
                        value={deliveryTime}
                        onChange={(e) => setDeliveryTime(e.target.value)}
                      >
                        <option value="">Select time slot</option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                        <option value="evening">Evening (4 PM - 8 PM)</option>
                        <option value="urgent">Urgent (Within 4 hours)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="weight">Package Weight (kg)</Label>
                    <Input id="weight" type="number" placeholder="Enter weight" />
                  </div>

                  <Button onClick={handleGetQuote} className="w-full bg-sky-600 hover:bg-sky-700">
                    Get Instant Quote
                  </Button>
                </CardContent>
              </Card>

              {/* Demo Delivery Details */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Sample Delivery Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-sky-50 rounded-lg">
                        <span>Same Day Express</span>
                        <span className="font-bold text-sky-600">Within 8 hours</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span>Super Express</span>
                        <span className="font-bold text-green-600">Within 4 hours</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                        <span>Ultra Express</span>
                        <span className="font-bold text-orange-600">Within 2 hours</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Service Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Package className="h-4 w-4 text-sky-500" />
                        <span>Priority handling at all stages</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Truck className="h-4 w-4 text-sky-500" />
                        <span>Dedicated express vehicles</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-sky-500" />
                        <span>Real-time tracking updates</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-sky-500" />
                        <span>Time-slot guarantee</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Demo Pricing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center p-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg">
                      <div className="text-2xl font-bold">₹299 - ₹899</div>
                      <div className="text-sm opacity-90">Based on distance and urgency</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExpressQuote;
