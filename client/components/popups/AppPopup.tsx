import { useState } from 'react';
import { Smartphone, Tablet, Monitor } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';

interface AppPopupProps {
  onSubmit: (data: any) => void;
}

const AppPopup = ({ onSubmit }: AppPopupProps) => {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    appType: '',
    platforms: [] as string[],
    features: [] as string[],
    userBase: '',
    monetization: '',
    timeline: '',
    budget: '',
    hasDesigns: '',
    competition: '',
    additionalInfo: ''
  });

  const platformOptions = [
    { id: 'ios', label: 'iOS (iPhone/iPad)', icon: Smartphone },
    { id: 'android', label: 'Android', icon: Tablet },
    { id: 'web', label: 'Web App', icon: Monitor }
  ];

  const featureOptions = [
    { id: 'user-auth', label: 'User Authentication' },
    { id: 'push-notifications', label: 'Push Notifications' },
    { id: 'payment', label: 'Payment Integration' },
    { id: 'chat', label: 'In-app Chat/Messaging' },
    { id: 'location', label: 'Location Services' },
    { id: 'social-login', label: 'Social Media Login' },
    { id: 'analytics', label: 'Analytics Dashboard' },
    { id: 'offline', label: 'Offline Functionality' }
  ];

  const handlePlatformChange = (platform: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      platforms: checked 
        ? [...prev.platforms, platform]
        : prev.platforms.filter(p => p !== platform)
    }));
  };

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
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Smartphone className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          App Development
        </h2>
        <p className="text-foreground/80 text-sm mt-2">
          80% of your app is done with our templates
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
            <Label htmlFor="appType">App Category *</Label>
            <select
              id="appType"
              value={formData.appType}
              onChange={(e) => setFormData(prev => ({ ...prev, appType: e.target.value }))}
              required
              className="w-full px-3 py-2 bg-space-light border border-space-light rounded-md text-sm"
            >
              <option value="">Select app type</option>
              <option value="business">Business/Productivity</option>
              <option value="ecommerce">E-commerce/Shopping</option>
              <option value="social">Social/Community</option>
              <option value="education">Education/Learning</option>
              <option value="health">Health/Fitness</option>
              <option value="entertainment">Entertainment/Media</option>
              <option value="utility">Utility/Tools</option>
              <option value="custom">Custom Solution</option>
            </select>
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium">Target Platforms *</Label>
          <div className="grid grid-cols-1 gap-3 mt-2">
            {platformOptions.map((platform) => {
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
          <Label className="text-sm font-medium">Core Features</Label>
          <div className="grid grid-cols-2 gap-3 mt-2">
            {featureOptions.map((feature) => (
              <div key={feature.id} className="flex items-center space-x-2">
                <Checkbox
                  id={feature.id}
                  checked={formData.features.includes(feature.id)}
                  onCheckedChange={(checked) => handleFeatureChange(feature.id, !!checked)}
                />
                <Label htmlFor={feature.id} className="cursor-pointer text-sm">
                  {feature.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="userBase">Expected Users</Label>
            <select
              id="userBase"
              value={formData.userBase}
              onChange={(e) => setFormData(prev => ({ ...prev, userBase: e.target.value }))}
              className="w-full px-3 py-2 bg-space-light border border-space-light rounded-md text-sm"
            >
              <option value="">Select user base</option>
              <option value="100-1k">100 - 1,000</option>
              <option value="1k-10k">1,000 - 10,000</option>
              <option value="10k-100k">10,000 - 100,000</option>
              <option value="100k+">100,000+</option>
            </select>
          </div>
          <div>
            <Label htmlFor="monetization">Monetization</Label>
            <select
              id="monetization"
              value={formData.monetization}
              onChange={(e) => setFormData(prev => ({ ...prev, monetization: e.target.value }))}
              className="w-full px-3 py-2 bg-space-light border border-space-light rounded-md text-sm"
            >
              <option value="">Select model</option>
              <option value="free">Free</option>
              <option value="freemium">Freemium</option>
              <option value="subscription">Subscription</option>
              <option value="one-time">One-time Purchase</option>
              <option value="ads">Advertising</option>
            </select>
          </div>
        </div>

        <div>
          <Label htmlFor="hasDesigns">Do you have app designs/wireframes?</Label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="hasDesigns"
                value="yes"
                checked={formData.hasDesigns === 'yes'}
                onChange={(e) => setFormData(prev => ({ ...prev, hasDesigns: e.target.value }))}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="hasDesigns"
                value="no"
                checked={formData.hasDesigns === 'no'}
                onChange={(e) => setFormData(prev => ({ ...prev, hasDesigns: e.target.value }))}
                className="mr-2"
              />
              No, need design help
            </label>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="timeline">Timeline</Label>
            <select
              id="timeline"
              value={formData.timeline}
              onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
              className="w-full px-3 py-2 bg-space-light border border-space-light rounded-md text-sm"
            >
              <option value="">Select timeline</option>
              <option value="1-2-months">1-2 months</option>
              <option value="3-4-months">3-4 months</option>
              <option value="5-6-months">5-6 months</option>
              <option value="6+-months">6+ months</option>
            </select>
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
              <option value="2999-9999">$2,999 - $9,999</option>
              <option value="10000-24999">$10,000 - $24,999</option>
              <option value="25000-49999">$25,000 - $49,999</option>
              <option value="50000+">$50,000+</option>
            </select>
          </div>
        </div>

        <div>
          <Label htmlFor="competition">Similar Apps (Competition)</Label>
          <Input
            id="competition"
            value={formData.competition}
            onChange={(e) => setFormData(prev => ({ ...prev, competition: e.target.value }))}
            placeholder="Apps similar to what you want to build..."
            className="bg-space-light border-space-light"
          />
        </div>

        <div>
          <Label htmlFor="additionalInfo">Additional Information</Label>
          <Textarea
            id="additionalInfo"
            value={formData.additionalInfo}
            onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
            placeholder="Detailed description of your app idea..."
            className="bg-space-light border-space-light"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white py-3 mt-6"
        >
          Get My App Development Quote
        </Button>
      </form>
    </div>
  );
};

export default AppPopup;
