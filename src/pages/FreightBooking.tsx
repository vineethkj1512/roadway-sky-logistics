
import { useState } from "react";
import { ArrowLeft, Phone, MapPin, Truck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface TruckDetails {
  id: number;
  image: string;
  truckType: string;
  capacity: string;
  price: string;
  city: string;
  mobile: string;
  driverName: string;
  rating: number;
  availability: string;
}

const FreightBooking = () => {
  const [selectedTruck, setSelectedTruck] = useState<TruckDetails | null>(null);

  const demoTrucks: TruckDetails[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      truckType: "Container Truck",
      capacity: "32 Tons",
      price: "₹45,000",
      city: "Mumbai",
      mobile: "+91 98765 43210",
      driverName: "Rajesh Kumar",
      rating: 4.8,
      availability: "Available Now"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1566024287286-457247b70310?w=400&h=300&fit=crop",
      truckType: "Open Truck",
      capacity: "16 Tons",
      price: "₹28,000",
      city: "Delhi",
      mobile: "+91 87654 32109",
      driverName: "Suresh Sharma",
      rating: 4.5,
      availability: "Available in 2 hours"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop",
      truckType: "Trailer Truck",
      capacity: "40 Tons",
      price: "₹65,000",
      city: "Bangalore",
      mobile: "+91 76543 21098",
      driverName: "Amit Patel",
      rating: 4.9,
      availability: "Available Now"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      truckType: "Mini Truck",
      capacity: "3 Tons",
      price: "₹8,500",
      city: "Chennai",
      mobile: "+91 65432 10987",
      driverName: "Ravi Singh",
      rating: 4.3,
      availability: "Available Now"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1566024287286-457247b70310?w=400&h=300&fit=crop",
      truckType: "Refrigerated Truck",
      capacity: "20 Tons",
      price: "₹55,000",
      city: "Hyderabad",
      mobile: "+91 54321 09876",
      driverName: "Vikram Reddy",
      rating: 4.7,
      availability: "Available in 1 hour"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop",
      truckType: "Flatbed Truck",
      capacity: "25 Tons",
      price: "₹42,000",
      city: "Kolkata",
      mobile: "+91 43210 98765",
      driverName: "Manoj Das",
      rating: 4.4,
      availability: "Available Now"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      truckType: "Tanker Truck",
      capacity: "30 Tons",
      price: "₹58,000",
      city: "Pune",
      mobile: "+91 32109 87654",
      driverName: "Deepak Joshi",
      rating: 4.6,
      availability: "Available in 3 hours"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1566024287286-457247b70310?w=400&h=300&fit=crop",
      truckType: "Pickup Truck",
      capacity: "1.5 Tons",
      price: "₹5,500",
      city: "Ahmedabad",
      mobile: "+91 21098 76543",
      driverName: "Kiran Modi",
      rating: 4.2,
      availability: "Available Now"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop",
      truckType: "Heavy Duty Truck",
      capacity: "50 Tons",
      price: "₹85,000",
      city: "Jaipur",
      mobile: "+91 10987 65432",
      driverName: "Ramesh Gupta",
      rating: 4.8,
      availability: "Available Now"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      truckType: "Car Carrier",
      capacity: "12 Cars",
      price: "₹38,000",
      city: "Lucknow",
      mobile: "+91 09876 54321",
      driverName: "Santosh Yadav",
      rating: 4.5,
      availability: "Available in 4 hours"
    }
  ];

  const handleTruckClick = (truck: TruckDetails) => {
    setSelectedTruck(truck);
  };

  const handleBackToList = () => {
    setSelectedTruck(null);
  };

  if (selectedTruck) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
        <Navbar />
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Button 
              onClick={handleBackToList}
              variant="outline" 
              className="mb-6 border-sky-300 text-sky-600 hover:bg-sky-50"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Truck List
            </Button>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden shadow-xl">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={selectedTruck.image} 
                      alt={selectedTruck.truckType}
                      className="w-full h-80 md:h-full object-cover"
                    />
                  </div>
                  
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h1 className="text-3xl font-bold text-gray-900">{selectedTruck.truckType}</h1>
                      <div className="flex items-center bg-sky-100 px-3 py-1 rounded-full">
                        <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                        <span className="text-sm font-medium">{selectedTruck.rating}</span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Truck className="h-5 w-5 mr-3 text-sky-600" />
                        <span>Capacity: {selectedTruck.capacity}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-5 w-5 mr-3 text-sky-600" />
                        <span>Location: {selectedTruck.city}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-5 w-5 mr-3 text-sky-600" />
                        <span>{selectedTruck.mobile}</span>
                      </div>
                    </div>

                    <div className="bg-sky-50 p-4 rounded-lg mb-6">
                      <h3 className="font-semibold text-gray-900 mb-2">Driver Details</h3>
                      <p className="text-gray-600">Name: {selectedTruck.driverName}</p>
                      <p className="text-gray-600">Status: {selectedTruck.availability}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Total Price</p>
                        <p className="text-3xl font-bold text-sky-600">{selectedTruck.price}</p>
                      </div>
                      <Button size="lg" className="bg-sky-600 hover:bg-sky-700">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Available Trucks</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Choose from our verified fleet of trucks for your freight requirements
          </p>
        </div>
      </section>

      {/* Trucks Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demoTrucks.map((truck) => (
              <Card 
                key={truck.id}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-sky-100 hover:border-sky-300 cursor-pointer"
                onClick={() => handleTruckClick(truck)}
              >
                <div className="relative">
                  <img 
                    src={truck.image} 
                    alt={truck.truckType}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full shadow-md">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                      <span className="text-xs font-medium">{truck.rating}</span>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{truck.truckType}</CardTitle>
                  <CardDescription className="text-gray-600">
                    Capacity: {truck.capacity}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-sky-600" />
                      {truck.city}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-2 text-sky-600" />
                      {truck.mobile}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <p className="text-sm text-gray-600">Price</p>
                        <p className="text-xl font-bold text-sky-600">{truck.price}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-green-600 font-medium">{truck.availability}</p>
                        <p className="text-xs text-gray-500">Driver: {truck.driverName}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreightBooking;
