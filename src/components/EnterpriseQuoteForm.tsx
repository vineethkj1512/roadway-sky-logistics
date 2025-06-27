
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EnterpriseQuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnterpriseQuoteForm = ({ isOpen, onClose }: EnterpriseQuoteFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "ABC Manufacturing Ltd",
    contactPerson: "Priya Sharma",
    email: "priya.sharma@abc-manufacturing.com",
    phone: "+91 9123456789",
    industry: "Manufacturing",
    monthlyVolume: "500+ shipments",
    routes: "Pan India",
    requirements: "Need dedicated fleet for regular shipments between Mumbai-Delhi-Bangalore routes. Require temperature controlled vehicles for sensitive goods."
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description: "Our enterprise team will contact you within 2 business hours.",
    });
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Users className="h-6 w-6 text-sky-600" />
              <CardTitle>Get Enterprise Quote</CardTitle>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription>
            Get customized logistics solutions for your business needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="contactPerson">Contact Person</Label>
                <Input
                  id="contactPerson"
                  value={formData.contactPerson}
                  onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="industry">Industry</Label>
                <Input
                  id="industry"
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="monthlyVolume">Monthly Shipment Volume</Label>
                <Input
                  id="monthlyVolume"
                  value={formData.monthlyVolume}
                  onChange={(e) => handleInputChange('monthlyVolume', e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="routes">Primary Routes</Label>
              <Input
                id="routes"
                value={formData.routes}
                onChange={(e) => handleInputChange('routes', e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="requirements">Specific Requirements</Label>
              <Textarea
                id="requirements"
                value={formData.requirements}
                onChange={(e) => handleInputChange('requirements', e.target.value)}
                rows={4}
                placeholder="Describe your logistics requirements..."
                required
              />
            </div>
            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1 bg-sky-600 hover:bg-sky-700">
                Request Quote
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnterpriseQuoteForm;
