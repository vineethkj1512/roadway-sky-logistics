
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MapPin, Clock, Truck } from "lucide-react";

const TrackingSection = () => {
  const [trackingId, setTrackingId] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [trackingMode, setTrackingMode] = useState("id"); // 'id' or 'mobile'

  const handleTrack = () => {
    console.log("Tracking shipment:", trackingMode === "id" ? trackingId : mobileNumber);
    // Here you would implement the actual tracking logic
  };

  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Track Your Shipment</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with real-time tracking of your shipments
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-2xl border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">Shipment Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Tracking Mode Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    trackingMode === "id" 
                      ? "bg-sky-600 text-white" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setTrackingMode("id")}
                >
                  Track by Shipment ID
                </button>
                <button
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    trackingMode === "mobile" 
                      ? "bg-sky-600 text-white" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setTrackingMode("mobile")}
                >
                  Track by Mobile
                </button>
              </div>
              
              {/* Input Field */}
              <div className="space-y-4">
                {trackingMode === "id" ? (
                  <Input
                    type="text"
                    placeholder="Enter Shipment ID (e.g., RW123456789)"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    className="h-12 text-lg border-sky-200 focus:border-sky-400"
                  />
                ) : (
                  <Input
                    type="tel"
                    placeholder="Enter Mobile Number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="h-12 text-lg border-sky-200 focus:border-sky-400"
                  />
                )}
                
                <Button 
                  onClick={handleTrack}
                  className="w-full h-12 text-lg bg-sky-600 hover:bg-sky-700"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Track Shipment
                </Button>
              </div>
              
              {/* Sample Tracking Info */}
              <div className="mt-8 p-4 bg-sky-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-3">Sample tracking for demo:</div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">Package Picked Up</div>
                      <div className="text-sm text-gray-600">Mumbai - Today, 10:30 AM</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-sky-500 rounded-full mr-3"></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">In Transit</div>
                      <div className="text-sm text-gray-600">Pune - Today, 2:15 PM</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-300 rounded-full mr-3"></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-400">Out for Delivery</div>
                      <div className="text-sm text-gray-400">Expected: Tomorrow, 11:00 AM</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;
