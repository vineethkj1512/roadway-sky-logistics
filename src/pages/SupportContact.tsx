import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, Clock, Headphones, Users, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SupportContact = () => {
  const navigate = useNavigate();

  const handleCall = () => {
    window.open('tel:+918000123456');
  };

  const handleEmail = () => {
    window.open('mailto:support@roadwayslogistics.com');
  };

  const handleChat = () => {
    alert("Chat support will be available shortly. Our team will connect with you in 2-3 minutes.");
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
          <h1 className="text-5xl font-bold mb-6">24/7 Customer Support</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Round-the-clock assistance for all your logistics needs
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone Support */}
            <Card className="hover:shadow-xl transition-all duration-300 text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl">Phone Support</CardTitle>
                <CardDescription>Instant assistance over phone call</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-green-600">+91 8000-123-456</div>
                  <div className="text-sm text-gray-600">Toll-free number</div>
                  <div className="text-sm text-gray-600">Average wait time: &lt; 30 seconds</div>
                  <Button onClick={handleCall} className="w-full bg-green-600 hover:bg-green-700">
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Email Support */}
            <Card className="hover:shadow-xl transition-all duration-300 text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl">Email Support</CardTitle>
                <CardDescription>Detailed assistance via email</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-lg font-semibold text-blue-600">support@roadwayslogistics.com</div>
                  <div className="text-sm text-gray-600">Response time: 2-4 hours</div>
                  <div className="text-sm text-gray-600">24/7 email monitoring</div>
                  <Button onClick={handleEmail} className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Chat Support */}
            <Card className="hover:shadow-xl transition-all duration-300 text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl">Live Chat</CardTitle>
                <CardDescription>Instant messaging support</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-lg font-semibold text-purple-600">Live Chat Available</div>
                  <div className="text-sm text-gray-600">Connect time: &lt; 2 minutes</div>
                  <div className="text-sm text-gray-600">AI + Human support</div>
                  <Button onClick={handleChat} className="w-full bg-purple-600 hover:bg-purple-700">
                    Start Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-sky-600" />
                  Support Hours & Response Times
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span>Phone Support</span>
                    <span className="font-semibold text-green-600">24/7 Available</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span>Email Response</span>
                    <span className="font-semibold text-blue-600">2-4 Hours</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span>Live Chat</span>
                    <span className="font-semibold text-purple-600">Instant</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span>Emergency Support</span>
                    <span className="font-semibold text-orange-600">Immediate</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-sky-600" />
                  Support Team Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Headphones className="h-5 w-5 text-sky-500" />
                    <div>
                      <div className="font-semibold">200+ Support Agents</div>
                      <div className="text-sm text-gray-600">Multilingual support in 12 languages</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-sky-500" />
                    <div>
                      <div className="font-semibold">Technical Experts</div>
                      <div className="text-sm text-gray-600">Specialized team for complex issues</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-sky-500" />
                    <div>
                      <div className="font-semibold">Emergency Response</div>
                      <div className="text-sm text-gray-600">Dedicated emergency helpline</div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-sky-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-sky-600">99.2%</div>
                      <div className="text-sm text-gray-600">Customer Satisfaction Rate</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupportContact;
