
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Clock, Truck, CheckCircle, Package } from "lucide-react";

const Track = () => {
  const [trackingId, setTrackingId] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [trackingMode, setTrackingMode] = useState("id");
  const [showResults, setShowResults] = useState(false);

  const handleTrack = () => {
    console.log("Tracking shipment:", trackingMode === "id" ? trackingId : mobileNumber);
    setShowResults(true);
  };

  const trackingSteps = [
    {
      status: "completed",
      title: "Order Confirmed",
      description: "Your booking has been confirmed",
      time: "Today, 8:30 AM",
      location: "Mumbai"
    },
    {
      status: "completed",
      title: "Package Picked Up",
      description: "Package collected from origin",
      time: "Today, 10:30 AM",
      location: "Mumbai"
    },
    {
      status: "completed",
      title: "In Transit",
      description: "Package is on the way",
      time: "Today, 2:15 PM",
      location: "Pune"
    },
    {
      status: "current",
      title: "Out for Delivery",
      description: "Package is out for delivery",
      time: "Tomorrow, 9:00 AM",
      location: "Bangalore"
    },
    {
      status: "pending",
      title: "Delivered",
      description: "Package delivered successfully",
      time: "Expected: Tomorrow, 11:00 AM",
      location: "Bangalore"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Track Your Shipment</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay updated with real-time tracking of your shipments and get instant delivery notifications
          </p>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-2xl border-0 mb-8">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">Enter Tracking Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Tracking Mode Toggle */}
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
                      trackingMode === "id" 
                        ? "bg-sky-600 text-white" 
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    onClick={() => setTrackingMode("id")}
                  >
                    Track by Shipment ID
                  </button>
                  <button
                    className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
                      trackingMode === "mobile" 
                        ? "bg-sky-600 text-white" 
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    onClick={() => setTrackingMode("mobile")}
                  >
                    Track by Mobile Number
                  </button>
                </div>
                
                {/* Input Field */}
                <div className="space-y-4">
                  {trackingMode === "id" ? (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Shipment ID
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter Shipment ID (e.g., RW123456789)"
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                        className="h-12 text-lg border-sky-200 focus:border-sky-400"
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="Enter Mobile Number (e.g., +91 9999888777)"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="h-12 text-lg border-sky-200 focus:border-sky-400"
                      />
                    </div>
                  )}
                  
                  <Button 
                    onClick={handleTrack}
                    className="w-full h-12 text-lg bg-sky-600 hover:bg-sky-700"
                  >
                    <Search className="mr-2 h-5 w-5" />
                    Track Shipment
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Tracking Results */}
            {showResults && (
              <Card className="shadow-xl border-sky-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-900">Shipment ID: RW123456789</CardTitle>
                      <p className="text-gray-600 mt-1">From Mumbai to Bangalore</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Estimated Delivery</div>
                      <div className="font-semibold text-sky-600">Tomorrow, 11:00 AM</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Shipment Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-4 bg-sky-50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-600">Package Type</div>
                      <div className="font-medium">Electronics</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Weight</div>
                      <div className="font-medium">15 kg</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Vehicle</div>
                      <div className="font-medium">MH 02 AB 1234</div>
                    </div>
                  </div>

                  {/* Tracking Timeline */}
                  <div className="space-y-6">
                    {trackingSteps.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          {step.status === "completed" ? (
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                              <CheckCircle className="h-6 w-6 text-white" />
                            </div>
                          ) : step.status === "current" ? (
                            <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center">
                              <Truck className="h-6 w-6 text-white" />
                            </div>
                          ) : (
                            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                              <Package className="h-6 w-6 text-gray-500" />
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className={`font-semibold ${
                              step.status === "completed" ? "text-green-700" :
                              step.status === "current" ? "text-sky-700" : "text-gray-400"
                            }`}>
                              {step.title}
                            </h3>
                            <div className="flex items-center text-sm text-gray-500">
                              <MapPin className="h-4 w-4 mr-1" />
                              {step.location}
                            </div>
                          </div>
                          <p className={`text-sm ${
                            step.status === "pending" ? "text-gray-400" : "text-gray-600"
                          }`}>
                            {step.description}
                          </p>
                          <div className="flex items-center mt-1 text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {step.time}
                          </div>
                        </div>
                        
                        {index < trackingSteps.length - 1 && (
                          <div className="absolute left-5 mt-10 w-0.5 h-6 bg-gray-300"></div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Contact Support */}
                  <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <p className="text-gray-600 mb-2">Need help with your shipment?</p>
                      <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50">
                        Contact Support
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Track;
