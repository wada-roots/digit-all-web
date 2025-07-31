import { useState } from 'react';
import { CreditCard, Palette, FileText } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

interface BusinessCardsPopupProps {
  onSubmit: (data: any) => void;
}

const BusinessCardsPopup = ({ onSubmit }: BusinessCardsPopupProps) => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    jobTitle: '',
    website: '',
    address: '',
    socialMedia: '',
    style: '',
    colors: '',
    logoProvided: '',
    quantity: '',
    material: '',
    finish: '',
    additionalInfo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CreditCard className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          Business Cards
        </h2>
        <p className="text-foreground/80 text-sm mt-2">
          Get your business cards designed in 2 hours
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
            <Label htmlFor="contactName">Contact Name *</Label>
            <Input
              id="contactName"
              value={formData.contactName}
              onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
              required
              className="bg-space-light border-space-light"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
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
          <div>
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              required
              className="bg-space-light border-space-light"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="jobTitle">Job Title</Label>
            <Input
              id="jobTitle"
              value={formData.jobTitle}
              onChange={(e) => setFormData(prev => ({ ...prev, jobTitle: e.target.value }))}
              className="bg-space-light border-space-light"
            />
          </div>
          <div>
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              value={formData.website}
              onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
              placeholder="www.yourwebsite.com"
              className="bg-space-light border-space-light"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="address">Business Address</Label>
          <Input
            id="address"
            value={formData.address}
            onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
            className="bg-space-light border-space-light"
          />
        </div>

        <div>
          <Label htmlFor="socialMedia">Social Media Handles</Label>
          <Input
            id="socialMedia"
            value={formData.socialMedia}
            onChange={(e) => setFormData(prev => ({ ...prev, socialMedia: e.target.value }))}
            placeholder="@instagram, @linkedin, etc."
            className="bg-space-light border-space-light"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="style">Design Style</Label>
            <select
              id="style"
              value={formData.style}
              onChange={(e) => setFormData(prev => ({ ...prev, style: e.target.value }))}
              className="w-full px-3 py-2 bg-space-light border border-space-light rounded-md text-sm"
            >
              <option value="">Select style</option>
              <option value="modern">Modern/Minimalist</option>
              <option value="professional">Professional/Corporate</option>
              <option value="creative">Creative/Artistic</option>
              <option value="elegant">Elegant/Luxury</option>
              <option value="bold">Bold/Colorful</option>
              <option value="vintage">Vintage/Classic</option>
            </select>
          </div>
          <div>
            <Label htmlFor="colors">Color Preferences</Label>
            <Input
              id="colors"
              value={formData.colors}
              onChange={(e) => setFormData(prev => ({ ...prev, colors: e.target.value }))}
              placeholder="Blue, gold, black, etc."
              className="bg-space-light border-space-light"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="logoProvided">Do you have a logo?</Label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="logoProvided"
                value="yes"
                checked={formData.logoProvided === 'yes'}
                onChange={(e) => setFormData(prev => ({ ...prev, logoProvided: e.target.value }))}
                className="mr-2"
              />
              Yes, I have a logo
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="logoProvided"
                value="no"
                checked={formData.logoProvided === 'no'}
                onChange={(e) => setFormData(prev => ({ ...prev, logoProvided: e.target.value }))}
                className="mr-2"
              />
              No, need logo design
            </label>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="quantity">Quantity</Label>
            <select
              id="quantity"
              value={formData.quantity}
              onChange={(e) => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
              className="w-full px-3 py-2 bg-space-light border border-space-light rounded-md text-sm"
            >
              <option value="">Select qty</option>
              <option value="100">100 cards</option>
              <option value="250">250 cards</option>
              <option value="500">500 cards</option>
              <option value="1000">1,000 cards</option>
              <option value="custom">Custom qty</option>
            </select>
          </div>
          <div>
            <Label htmlFor="material">Material</Label>
            <select
              id="material"
              value={formData.material}
              onChange={(e) => setFormData(prev => ({ ...prev, material: e.target.value }))}
              className="w-full px-3 py-2 bg-space-light border border-space-light rounded-md text-sm"
            >
              <option value="">Select material</option>
              <option value="standard">Standard Paper</option>
              <option value="premium">Premium Paper</option>
              <option value="thick">Thick Cardstock</option>
              <option value="plastic">Plastic/PVC</option>
              <option value="metal">Metal</option>
            </select>
          </div>
          <div>
            <Label htmlFor="finish">Finish</Label>
            <select
              id="finish"
              value={formData.finish}
              onChange={(e) => setFormData(prev => ({ ...prev, finish: e.target.value }))}
              className="w-full px-3 py-2 bg-space-light border border-space-light rounded-md text-sm"
            >
              <option value="">Select finish</option>
              <option value="matte">Matte</option>
              <option value="gloss">Gloss</option>
              <option value="spot-uv">Spot UV</option>
              <option value="foil">Foil Stamping</option>
              <option value="embossed">Embossed</option>
            </select>
          </div>
        </div>

        <div>
          <Label htmlFor="additionalInfo">Additional Information</Label>
          <Textarea
            id="additionalInfo"
            value={formData.additionalInfo}
            onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
            placeholder="Any special requirements, design ideas, or additional text..."
            className="bg-space-light border-space-light"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-blue-600 hover:to-teal-500 text-white py-3 mt-6"
        >
          Order My Business Cards
        </Button>
      </form>
    </div>
  );
};

export default BusinessCardsPopup;
