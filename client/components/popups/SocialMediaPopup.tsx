import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Linkedin, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';

interface SocialMediaPopupProps {
  onSubmit: (data: any) => void;
}

const SocialMediaPopup = ({ onSubmit }: SocialMediaPopupProps) => {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    industry: '',
    currentFollowers: '',
    platforms: [] as string[],
    goals: '',
    budget: '',
    timeline: ''
  });

  const platforms = [
    { id: 'instagram', label: 'Instagram', icon: Instagram },
    { id: 'facebook', label: 'Facebook', icon: Facebook },
    { id: 'twitter', label: 'Twitter/X', icon: Twitter },
    { id: 'linkedin', label: 'LinkedIn', icon: Linkedin }
  ];

  const handlePlatformChange = (platform: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      platforms: checked 
        ? [...prev.platforms, platform]
        : prev.platforms.filter(p => p !== platform)
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
        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <TrendingUp className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
          Social Media Marketing
        </h2>
        <p className="text-foreground/80 text-sm mt-2">
          Get your social media strategy in 24 hours
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
          <Label className="text-sm font-medium">Platforms to Focus On *</Label>
          <div className="grid grid-cols-2 gap-3 mt-2">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <div key={platform.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={platform.id}
                    checked={formData.platforms.includes(platform.id)}
                    onCheckedChange={(checked) => handlePlatformChange(platform.id, !!checked)}
                  />
                  <Label htmlFor={platform.id} className="flex items-center space-x-2 cursor-pointer">
                    <Icon className="w-4 h-4" />
                    <span>{platform.label}</span>
                  </Label>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <Label htmlFor="goals">Marketing Goals</Label>
          <Textarea
            id="goals"
            value={formData.goals}
            onChange={(e) => setFormData(prev => ({ ...prev, goals: e.target.value }))}
            placeholder="Brand awareness, lead generation, sales..."
            className="bg-space-light border-space-light"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="budget">Monthly Budget</Label>
            <select
              id="budget"
              value={formData.budget}
              onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
              className="w-full px-3 py-2 bg-space-light border border-space-light rounded-md text-sm"
            >
              <option value="">Select budget</option>
              <option value="299-499">$299 - $499</option>
              <option value="500-999">$500 - $999</option>
              <option value="1000-2000">$1,000 - $2,000</option>
              <option value="2000+">$2,000+</option>
            </select>
          </div>
          <div>
            <Label htmlFor="timeline">Start Timeline</Label>
            <select
              id="timeline"
              value={formData.timeline}
              onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
              className="w-full px-3 py-2 bg-space-light border border-space-light rounded-md text-sm"
            >
              <option value="">Select timeline</option>
              <option value="asap">ASAP</option>
              <option value="1-week">Within 1 week</option>
              <option value="2-weeks">Within 2 weeks</option>
              <option value="1-month">Within 1 month</option>
            </select>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white py-3 mt-6"
        >
          Get My Social Media Strategy
        </Button>
      </form>
    </div>
  );
};

export default SocialMediaPopup;
