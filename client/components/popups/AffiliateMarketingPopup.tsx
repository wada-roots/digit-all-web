import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp, Users, DollarSign, Handshake } from 'lucide-react';

interface AffiliateMarketingPopupProps {
  onSubmit: (data: any) => void;
}

const AffiliateMarketingPopup = ({ onSubmit }: AffiliateMarketingPopupProps) => {
  const [formData, setFormData] = useState({
    // Affiliate Details
    affiliateName: '',
    affiliateEmail: '',
    affiliatePhone: '',
    // Client Details
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    clientCompany: '',
    clientService: '',
    clientBudget: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-gradient-to-br from-space-dark to-space-darker p-8 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-neon-yellow to-neon-blue rounded-full flex items-center justify-center mx-auto mb-4">
          <TrendingUp className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-neon-yellow to-neon-blue bg-clip-text text-transparent mb-2">
          Affiliate Marketing Setup
        </h2>
        <p className="text-foreground/80">Launch your affiliate empire with our proven system</p>
        <div className="flex items-center justify-center mt-4 space-x-2">
          <span className="text-2xl font-bold text-neon-yellow">Ksh 10,000</span>
          <span className="text-sm text-foreground/60 line-through">Ksh 30,000</span>
          <span className="bg-neon-blue text-white px-2 py-1 rounded text-xs font-bold">SAVE 67%</span>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="flex items-center space-x-2 text-sm">
          <Target className="w-4 h-4 text-neon-blue" />
          <span>Affiliate Website</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Globe className="w-4 h-4 text-neon-blue" />
          <span>Tracking Setup</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <TrendingUp className="w-4 h-4 text-neon-blue" />
          <span>Revenue Strategies</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Zap className="w-4 h-4 text-neon-blue" />
          <span>Marketing Tools</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="text-foreground/90">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
              className="bg-space-light border-space-light focus:border-neon-blue"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-foreground/90">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
              className="bg-space-light border-space-light focus:border-neon-blue"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phone" className="text-foreground/90">Phone Number *</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              required
              className="bg-space-light border-space-light focus:border-neon-blue"
            />
          </div>
          <div>
            <Label htmlFor="experience" className="text-foreground/90">Marketing Experience</Label>
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}>
              <SelectTrigger className="bg-space-light border-space-light">
                <SelectValue placeholder="Select experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                <SelectItem value="advanced">Advanced (3+ years)</SelectItem>
                <SelectItem value="expert">Expert (5+ years)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="niche" className="text-foreground/90">Target Niche</Label>
            <Input
              id="niche"
              value={formData.niche}
              onChange={(e) => setFormData(prev => ({ ...prev, niche: e.target.value }))}
              placeholder="e.g., Health, Tech, Finance"
              className="bg-space-light border-space-light focus:border-neon-blue"
            />
          </div>
          <div>
            <Label htmlFor="website" className="text-foreground/90">Existing Website (Optional)</Label>
            <Input
              id="website"
              value={formData.website}
              onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
              placeholder="https://yourwebsite.com"
              className="bg-space-light border-space-light focus:border-neon-blue"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="goals" className="text-foreground/90">Your Goals</Label>
          <Textarea
            id="goals"
            value={formData.goals}
            onChange={(e) => setFormData(prev => ({ ...prev, goals: e.target.value }))}
            placeholder="What do you want to achieve with affiliate marketing?"
            className="bg-space-light border-space-light focus:border-neon-blue min-h-[100px]"
          />
        </div>

        <div>
          <Label className="text-foreground/90 mb-3 block">Additional Services (Optional)</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'Social Media Marketing',
              'Email Marketing Setup',
              'Content Creation',
              'SEO Optimization',
              'Paid Advertising',
              'Analytics Setup'
            ].map((service) => (
              <div key={service} className="flex items-center space-x-2">
                <Checkbox
                  id={service}
                  onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                />
                <Label htmlFor={service} className="text-sm text-foreground/80">{service}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            type="submit"
            className="flex-1 bg-gradient-to-r from-neon-yellow to-neon-blue hover:from-neon-blue hover:to-neon-yellow text-white font-semibold py-3 rounded-full shadow-lg transition-all duration-300"
          >
            Get Started - Ksh 10,000
          </Button>
        </div>
      </form>

      <div className="mt-6 p-4 bg-neon-blue/10 rounded-lg border border-neon-blue/20">
        <p className="text-xs text-foreground/70 text-center">
          🚀 Limited time offer! Regular price Ksh 30,000. Save 67% today!
        </p>
      </div>
    </motion.div>
  );
};

export default AffiliateMarketingPopup;
