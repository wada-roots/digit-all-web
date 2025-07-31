import { useState } from 'react';
import { Camera, Video, Image } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';

interface PhotographyPopupProps {
  onSubmit: (data: any) => void;
}

const PhotographyPopup = ({ onSubmit }: PhotographyPopupProps) => {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    projectType: [] as string[],
    eventDate: '',
    location: '',
    duration: '',
    deliverables: '',
    style: '',
    budget: '',
    additionalInfo: ''
  });

  const projectTypes = [
    { id: 'brand-photos', label: 'Brand Photography' },
    { id: 'product-photos', label: 'Product Photography' },
    { id: 'promotional-video', label: 'Promotional Video' },
    { id: 'corporate-video', label: 'Corporate Video' },
    { id: 'event-coverage', label: 'Event Coverage' },
    { id: 'social-content', label: 'Social Media Content' }
  ];

  const handleProjectTypeChange = (type: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      projectType: checked 
        ? [...prev.projectType, type]
        : prev.projectType.filter(t => t !== type)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Camera className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          Photography & Videography
        </h2>
        <p className="text-foreground/80 text-sm mt-2">
          Get your brand photoshoot in one session
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="businessName">Business Name *</Label>
            <Input
              id="businessName"
              value={formData.businessName}
              onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
              required
              className="bg-space-light border-space-light"
            />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
              className="bg-space-light border-space-light"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="bg-space-light border-space-light"
            />
          </div>
          <div>
            <Label htmlFor="eventDate">Preferred Date</Label>
            <Input
              id="eventDate"
              type="date"
              value={formData.eventDate}
              onChange={(e) => setFormData(prev => ({ ...prev, eventDate: e.target.value }))}
              className="bg-space-light border-space-light"
            />
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium">Project Type *</Label>
          <div className="grid grid-cols-2 gap-3 mt-2">
            {projectTypes.map((type) => (
              <div key={type.id} className="flex items-center space-x-2">
                <Checkbox
                  id={type.id}
                  checked={formData.projectType.includes(type.id)}
                  onCheckedChange={(checked) => handleProjectTypeChange(type.id, !!checked)}
                />
                <Label htmlFor={type.id} className="cursor-pointer">
                  {type.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              placeholder="Studio, outdoor, your office..."
              className="bg-space-light border-space-light"
            />
          </div>
          <div>
            <Label htmlFor="duration">Duration</Label>
            <select
              id="duration"
              value={formData.duration}
              onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
              className="w-full px-3 py-2 bg-space-light border border-space-light rounded-md text-sm"
            >
              <option value="">Select duration</option>
              <option value="1-2-hours">1-2 hours</option>
              <option value="half-day">Half day (4 hours)</option>
              <option value="full-day">Full day (8 hours)</option>
              <option value="multi-day">Multiple days</option>
            </select>
          </div>
        </div>

        <div>
          <Label htmlFor="style">Style Preference</Label>
          <Input
            id="style"
            value={formData.style}
            onChange={(e) => setFormData(prev => ({ ...prev, style: e.target.value }))}
            placeholder="Modern, classic, artistic, corporate..."
            className="bg-space-light border-space-light"
          />
        </div>

        <div>
          <Label htmlFor="deliverables">Expected Deliverables</Label>
          <Textarea
            id="deliverables"
            value={formData.deliverables}
            onChange={(e) => setFormData(prev => ({ ...prev, deliverables: e.target.value }))}
            placeholder="Number of photos, video length, editing requirements..."
            className="bg-space-light border-space-light"
          />
        </div>

        <div>
          <Label htmlFor="budget">Project Budget</Label>
          <select
            id="budget"
            value={formData.budget}
            onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
            className="w-full px-3 py-2 bg-space-light border border-space-light rounded-md text-sm"
          >
            <option value="">Select budget</option>
            <option value="799-1499">$799 - $1,499</option>
            <option value="1500-2999">$1,500 - $2,999</option>
            <option value="3000-4999">$3,000 - $4,999</option>
            <option value="5000+">$5,000+</option>
          </select>
        </div>

        <div>
          <Label htmlFor="additionalInfo">Additional Information</Label>
          <Textarea
            id="additionalInfo"
            value={formData.additionalInfo}
            onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
            placeholder="Any special requirements or details..."
            className="bg-space-light border-space-light"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-white py-3 mt-6"
        >
          Book My Photo/Video Session
        </Button>
      </form>
    </div>
  );
};

export default PhotographyPopup;
