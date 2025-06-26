
import { useState, useEffect } from "react";
import { ArrowLeft, MapPin, Truck, Clock, Phone, Mail, Navigation, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RealTimeTracking = () => {
  const navigate = useNavigate();
  const [currentLocation, setCurrentLocation] = useState({ lat: 19.0760, lng: 72.8777 }); // Mumbai
  const [isTracking, setIsTracking] = useState(false);
  const [trackingId, setTrackingId] = useState("RW987654321");
  const [phoneNumber, setPhoneNumber] = useState("+91 9876543210");
  const [email, setEmail] = useState("user@example.com");
  const [speed, setSpeed] = useState(65);
  const [distance, setDistance] = useState(234);
  const [estimatedTime, setEstimatedTime] = useState("3h 45m");

  // Demo GPS tracking simulation
  useEffect(() => {
    if (isTracking) {
      const interval = setInterval(() => {
        setCurrentLocation(prev => ({
          lat: prev.lat + (Math.random() - 0.5) * 0.01,
          lng: prev.lng + (Math.random() - 0.5) * 0.01
        }));
        setSpeed(prev => Math.max(30, Math.min(80, prev + (Math.random() - 0.5) * 10)));
        setDistance(prev => Math.max(0, prev - Math.random() * 2));
        
        // Update estimated time based on distance
        const hours = Math.floor(distance / 60);
        const minutes = Math.floor(distance % 60);
        setEstimatedTime(`${hours}h ${minutes}m`);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isTracking, distance]);

  const handleStartTracking = () => {
    setIsTracking(true);
  };

  const handleStopTracking = () => {
    setIsTracking(false);
  };

  const handleSendSMS = () => {
    alert(`SMS sent to ${phoneNumber}: Your shipment ${trackingId} is currently at ${currentLocation.lat.toFixed(4)}, ${currentLocation.lng.toFixed(4)}. ETA: ${estimatedTime}`);
  };

  const handleSendEmail = () => {
    alert(`Email sent to ${email}: Your shipment tracking update for ${trackingId} has been sent with current location and estimated delivery time.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <Button 
            onClick={() => navigate('/')}
            variant="outline" 
            className="mb-6 border-white text-white hover:bg-white hover:text-sky-600"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Real-Time GPS Tracking</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Monitor your shipment in real-time with live GPS updates, SMS/Email alerts, and precise location tracking
            </p>
          </div>
        </div>
      </section>

      {/* Tracking Controls */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Map Demo */}
              <Card className="shadow-xl border-sky-200">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-sky-600" />
                    Live GPS Tracking Map
                  </CardTitle>
                  <CardDescription>
                    Real-time location of your shipment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-80 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg border-2 border-sky-200 overflow-hidden">
                    {/* Demo Map Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50">
                      {/* Grid lines to simulate map */}
                      <div className="absolute inset-0 opacity-30">
                        {[...Array(10)].map((_, i) => (
                          <div key={`h-${i}`} className="absolute w-full border-t border-gray-300" style={{ top: `${i * 10}%` }} />
                        ))}
                        {[...Array(10)].map((_, i) => (
                          <div key={`v-${i}`} className="absolute h-full border-l border-gray-300" style={{ left: `${i * 10}%` }} />
                        ))}
                      </div>
                      
                      {/* Route line */}
                      <svg className="absolute inset-0 w-full h-full">
                        <path
                          d="M 50 300 Q 150 200 200 150 Q 250 100 300 120"
                          stroke="#3b82f6"
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray="5,5"
                        />
                      </svg>
                      
                      {/* Moving truck icon */}
                      <div 
                        className={`absolute transition-all duration-3000 ${isTracking ? 'animate-pulse' : ''}`}
                        style={{ 
                          left: `${45 + Math.sin(Date.now() / 2000) * 10}%`, 
                          top: `${55 + Math.cos(Date.now() / 2000) * 5}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      >
                        <div className="bg-red-500 p-2 rounded-full shadow-lg">
                          <Truck className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      
                      {/* Start point */}
                      <div className="absolute top-16 left-12 bg-green-500 p-2 rounded-full shadow-lg">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div className="absolute top-12 left-16 text-xs font-medium text-green-700">Mumbai</div>
                      
                      {/* End point */}
                      <div className="absolute top-28 right-16 bg-blue-500 p-2 rounded-full shadow-lg">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div className="absolute top-24 right-12 text-xs font-medium text-blue-700">Bangalore</div>
                    </div>
                    
                    {/* Tracking status overlay */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${isTracking ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                        <span className="text-sm font-medium">
                          {isTracking ? 'Live Tracking' : 'Tracking Stopped'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Map Controls */}
                  <div className="mt-4 flex gap-2">
                    <Button 
                      onClick={handleStartTracking}
                      disabled={isTracking}
                      className="flex-1 bg-green-600 hover:bg-green-700"
                    >
                      <Navigation className="mr-2 h-4 w-4" />
                      Start Tracking
                    </Button>
                    <Button 
                      onClick={handleStopTracking}
                      disabled={!isTracking}
                      variant="outline"
                      className="flex-1 border-red-300 text-red-600 hover:bg-red-50"
                    >
                      Stop Tracking
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tracking Info & Alerts */}
              <div className="space-y-6">
                
                {/* Shipment Details */}
                <Card className="shadow-xl border-sky-200">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Truck className="mr-2 h-5 w-5 text-sky-600" />
                      Shipment Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-600">Tracking ID</label>
                        <Input value={trackingId} onChange={(e) => setTrackingId(e.target.value)} />
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Vehicle: MH 02 AB 1234</label>
                        <div className="text-lg font-semibold text-sky-600">Container Truck</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-sky-600">{speed} km/h</div>
                        <div className="text-sm text-gray-600">Current Speed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{distance} km</div>
                        <div className="text-sm text-gray-600">Distance Left</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">{estimatedTime}</div>
                        <div className="text-sm text-gray-600">ETA</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* SMS/Email Alerts */}
                <Card className="shadow-xl border-sky-200">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="mr-2 h-5 w-5 text-sky-600" />
                      SMS/Email Alerts
                    </CardTitle>
                    <CardDescription>
                      Get instant notifications about your shipment
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-600">Phone Number</label>
                      <div className="flex gap-2">
                        <Input 
                          value={phoneNumber} 
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="flex-1"
                        />
                        <Button onClick={handleSendSMS} size="sm" className="bg-green-600 hover:bg-green-700">
                          <Phone className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm text-gray-600">Email Address</label>
                      <div className="flex gap-2">
                        <Input 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)}
                          className="flex-1"
                        />
                        <Button onClick={handleSendEmail} size="sm" className="bg-blue-600 hover:bg-blue-700">
                          <Mail className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    {/* Alert History */}
                    <div className="pt-4 border-t">
                      <h4 className="font-medium mb-3">Recent Alerts</h4>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-gray-600">SMS sent - Package picked up (2:30 PM)</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-gray-600">Email sent - In transit update (3:15 PM)</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="h-4 w-4 text-orange-500 mr-2" />
                          <span className="text-gray-600">Next alert - Delivery notification (Expected)</span>
                        </div>
                      </div>
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

export default RealTimeTracking;
