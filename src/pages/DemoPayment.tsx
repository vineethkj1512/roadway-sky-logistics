
import { useState } from "react";
import { ArrowLeft, CreditCard, Lock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DemoPayment = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
    }, 2000);
  };

  const handleBackToTrucks = () => {
    navigate('/freight-booking');
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
        <Navbar />
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
              <p className="text-gray-600 mb-8">Your truck booking has been confirmed. You will receive a confirmation email shortly.</p>
              <div className="space-y-4">
                <Button onClick={handleBackToTrucks} className="bg-sky-600 hover:bg-sky-700">
                  Book Another Truck
                </Button>
                <Button variant="outline" onClick={() => navigate('/')}>
                  Back to Home
                </Button>
              </div>
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
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Button 
            onClick={handleBackToTrucks}
            variant="outline" 
            className="mb-6 border-sky-300 text-sky-600 hover:bg-sky-50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Truck Selection
          </Button>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Booking Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="mr-2 h-5 w-5 text-sky-600" />
                  Booking Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-900">Container Truck</h3>
                  <p className="text-gray-600">Capacity: 32 Tons</p>
                  <p className="text-gray-600">Driver: Rajesh Kumar</p>
                  <p className="text-gray-600">From: Mumbai</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Price</span>
                    <span>₹45,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service Fee</span>
                    <span>₹2,250</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Insurance</span>
                    <span>₹1,500</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold text-lg">
                    <span>Total Amount</span>
                    <span className="text-sky-600">₹48,750</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="mr-2 h-5 w-5 text-sky-600" />
                  Payment Details
                </CardTitle>
                <CardDescription>
                  Demo payment form - No real charges will be made
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input 
                    id="cardNumber" 
                    placeholder="4242 4242 4242 4242" 
                    defaultValue="4242 4242 4242 4242"
                    disabled={isProcessing}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input 
                      id="expiry" 
                      placeholder="MM/YY" 
                      defaultValue="12/25"
                      disabled={isProcessing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input 
                      id="cvv" 
                      placeholder="123" 
                      defaultValue="123"
                      disabled={isProcessing}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cardName">Cardholder Name</Label>
                  <Input 
                    id="cardName" 
                    placeholder="John Doe" 
                    defaultValue="John Doe"
                    disabled={isProcessing}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    defaultValue="john@example.com"
                    disabled={isProcessing}
                  />
                </div>
                
                <Button 
                  onClick={handlePayment}
                  className="w-full bg-sky-600 hover:bg-sky-700 mt-6"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing Payment..." : "Pay ₹48,750"}
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  🔒 This is a demo payment. No real charges will be made.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DemoPayment;
