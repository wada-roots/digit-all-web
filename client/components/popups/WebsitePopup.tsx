import { useState } from 'react';
import { Code, Globe, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';

interface WebsitePopupProps {
  onSubmit: (data: any) => void;
}

const WebsitePopup = ({ onSubmit }: WebsitePopupProps) => {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    industry: '',
    websiteType: '',
    features: [] as string[],
    hasExistingWebsite: '',
    existingWebsite: '',
    pages: '',
    timeline: '',
    budget: '',
    designPreference: '',
    additionalInfo: ''
  });

  const featureOptions = [
    { id: 'ecommerce', label: 'E-commerce/Online Store' },
    { id: 'booking', label: 'Booking System' },
    { id: 'cms', label: 'Content Management' },
    { id: 'seo', label: 'SEO Optimization' },
    { id: 'analytics', label: 'Analytics Integration' },
    { id: 'social', label: 'Social Media Integration' }
  ];

  const handleFeatureChange = (feature: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      features: checked 
        ? [...prev.features, feature]
        : prev.features.filter(f => f !== feature)
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
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Code className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Website Development
        </h2>
        <p className="text-foreground/80 text-sm mt-2">
          Get your website template in 10 minutes
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
            <Label htmlFor="industry">Industry</Label>
            <Input
              id="industry"
              value={formData.industry}
              onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
              className="bg-space-light border-space-light"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="websiteType">Website Type *</Label>
          <select
            id="websiteType"
            value={formData.websiteType}
            onChange={(e) => setFormData(prev => ({ ...prev, websiteType: e.target.value }))}
            required
            className="w-full px-3 py-2 bg-space-light border border-space-light rounded-md text-sm"
          >
            <option value="">Select website type</option>
            <option value="business">Business/Corporate</option>
            <option value="ecommerce">E-commerce Store</option>
            <option value="portfolio">Portfolio/Creative</option>
            <option value="blog">Blog/Content Site</option>
            <option value="landing">Landing Page</option>
            <option value="custom">Custom Application</option>
          </select>
        </div>

        <div>
          <Label className="text-sm font-medium">Required Features</Label>
          <div className="grid grid-cols-2 gap-3 mt-2">
            {featureOptions.map((feature) => (
              <div key={feature.id} className="flex items-center space-x-2">
                <Checkbox
                  id={feature.id}
                  checked={formData.features.includes(feature.id)}
                  onCheckedChange={(checked) => handleFeatureChange(feature.id, !!checked)}
                />
                <Label htmlFor={feature.id} className="cursor-pointer">
                  {feature.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Label htmlFor="hasExistingWebsite">Do you have an existing website?</Label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="hasExistingWebsite"
                value="yes"
                checked={formData.hasExistingWebsite === 'yes'}
                onChange={(e) => setFormData(prev => ({ ...prev, hasExistingWebsite: e.target.value }))}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="hasExistingWebsite"
                value="no"
                checked={formData.hasExistingWebsite === 'no'}
                onChange={(e) => setFormData(prev => ({ ...prev, hasExistingWebsite: e.target.value }))}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

        {formData.hasExistingWebsite === 'yes' && (
          <div>
            <Label htmlFor="existingWebsite">Current Website URL</Label>
            <Input
              id="existingWebsite"
              type="url"
              value={formData.existingWebsite}
              onChange={(e) => setFormData(prev => ({ ...prev, existingWebsite: e.target.value }))}
              placeholder="https://yoursite.com"
              className="bg-space-light border-space-light"
            />
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="pages">Estimated Pages</Label>
            <select
              id="pages"
              value={formData.pages}
              onChange={(e) => setFormData(prev => ({ ...prev, pages: e.target.value }))}
              className="w-full px-3 py-2 bg-space-light border border-space-light rounded-md text-sm"
            >
              <option value="">Select page count</option>
              <option value="1-5">1-5 pages</option>
              <option value="6-10">6-10 pages</option>
              <option value="11-20">11-20 pages</option>
              <option value="20+">20+ pages</option>
            </select>
          </div>
          <div>
            <Label htmlFor="timeline">Timeline</Label>
            <select
              id="timeline"
              value={formData.timeline}
              onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
              className="w-full px-3 py-2 bg-space-light border border-space-light rounded-md text-sm"
            >
              <option value="">Select timeline</option>
              <option value="1-week">1 week</option>
              <option value="2-weeks">2 weeks</option>
              <option value="1-month">1 month</option>
              <option value="2-months">2+ months</option>
            </select>
          </div>
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
            <option value="1299-2499">$1,299 - $2,499</option>
            <option value="2500-4999">$2,500 - $4,999</option>
            <option value="5000-9999">$5,000 - $9,999</option>
            <option value="10000+">$10,000+</option>
          </select>
        </div>

        <div>
          <Label htmlFor="designPreference">Design Preference</Label>
          <Input
            id="designPreference"
            value={formData.designPreference}
            onChange={(e) => setFormData(prev => ({ ...prev, designPreference: e.target.value }))}
            placeholder="Modern, minimalist, colorful, professional..."
            className="bg-space-light border-space-light"
          />
        </div>

        <div>
          <Label htmlFor="additionalInfo">Additional Requirements</Label>
          <Textarea
            id="additionalInfo"
            value={formData.additionalInfo}
            onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
            placeholder="Any specific requirements or functionality needed..."
            className="bg-space-light border-space-light"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white py-3 mt-6"
        >
          Get My Website Quote
        </Button>
      </form>
    </div>
  );
};

export default WebsitePopup;
