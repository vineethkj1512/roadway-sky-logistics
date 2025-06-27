
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Truck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TruckRegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const TruckRegistrationForm = ({ isOpen, onClose }: TruckRegistrationFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    ownerName: "Rajesh Kumar",
    phone: "+91 9876543210",
    email: "rajesh.kumar@email.com",
    truckNumber: "MH 14 GH 4567",
    truckType: "Container Truck",
    capacity: "20 Tons",
    licenseNumber: "DL123456789",
    experience: "8 years"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "We'll contact you within 24 hours for verification.",
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
              <Truck className="h-6 w-6 text-sky-600" />
              <CardTitle>Register Your Truck</CardTitle>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription>
            Join our network of trusted truck owners and start earning more
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="ownerName">Owner Name</Label>
                <Input
                  id="ownerName"
                  value={formData.ownerName}
                  onChange={(e) => handleInputChange('ownerName', e.target.value)}
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
                <Label htmlFor="truckNumber">Truck Number</Label>
                <Input
                  id="truckNumber"
                  value={formData.truckNumber}
                  onChange={(e) => handleInputChange('truckNumber', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="truckType">Truck Type</Label>
                <Input
                  id="truckType"
                  value={formData.truckType}
                  onChange={(e) => handleInputChange('truckType', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="capacity">Capacity</Label>
                <Input
                  id="capacity"
                  value={formData.capacity}
                  onChange={(e) => handleInputChange('capacity', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="licenseNumber">License Number</Label>
                <Input
                  id="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="experience">Experience</Label>
                <Input
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1 bg-sky-600 hover:bg-sky-700">
                Submit Registration
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

export default TruckRegistrationForm;
