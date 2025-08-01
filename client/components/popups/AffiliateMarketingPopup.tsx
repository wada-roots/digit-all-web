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
          <Handshake className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-neon-yellow to-neon-blue bg-clip-text text-transparent mb-2">
          Affiliate Marketing Program
        </h2>
        <p className="text-foreground/80">Join our affiliate program and start earning today!</p>
        <div className="flex items-center justify-center mt-4 space-x-2">
          <span className="text-2xl font-bold text-neon-yellow">FREE TO JOIN</span>
          <span className="bg-neon-blue text-white px-2 py-1 rounded text-xs font-bold">20% COMMISSION</span>
        </div>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="flex items-center space-x-2 text-sm">
          <DollarSign className="w-4 h-4 text-neon-blue" />
          <span>20% Commission</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Users className="w-4 h-4 text-neon-blue" />
          <span>Monthly Payouts</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <TrendingUp className="w-4 h-4 text-neon-blue" />
          <span>Easy Tracking</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Handshake className="w-4 h-4 text-neon-blue" />
          <span>Free Registration</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Affiliate Details Section */}
        <div className="bg-space-light/30 p-6 rounded-lg border border-neon-blue/20">
          <h3 className="text-xl font-semibold text-neon-yellow mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2" />
            Your Details (Affiliate)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="affiliateName" className="text-foreground/90">Full Name *</Label>
              <Input
                id="affiliateName"
                value={formData.affiliateName}
                onChange={(e) => setFormData(prev => ({ ...prev, affiliateName: e.target.value }))}
                required
                className="bg-space-light border-space-light focus:border-neon-blue"
                placeholder="Your full name"
              />
            </div>
            <div>
              <Label htmlFor="affiliateEmail" className="text-foreground/90">Email Address *</Label>
              <Input
                id="affiliateEmail"
                type="email"
                value={formData.affiliateEmail}
                onChange={(e) => setFormData(prev => ({ ...prev, affiliateEmail: e.target.value }))}
                required
                className="bg-space-light border-space-light focus:border-neon-blue"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="mt-4">
            <Label htmlFor="affiliatePhone" className="text-foreground/90">Phone Number *</Label>
            <Input
              id="affiliatePhone"
              value={formData.affiliatePhone}
              onChange={(e) => setFormData(prev => ({ ...prev, affiliatePhone: e.target.value }))}
              required
              className="bg-space-light border-space-light focus:border-neon-blue"
              placeholder="+254 700 123 456"
            />
          </div>
        </div>

        {/* Client Details Section */}
        <div className="bg-space-light/30 p-6 rounded-lg border border-neon-yellow/20">
          <h3 className="text-xl font-semibold text-neon-blue mb-4 flex items-center">
            <Handshake className="w-5 h-5 mr-2" />
            Client Details (Your Referral)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="clientName" className="text-foreground/90">Client Full Name *</Label>
              <Input
                id="clientName"
                value={formData.clientName}
                onChange={(e) => setFormData(prev => ({ ...prev, clientName: e.target.value }))}
                required
                className="bg-space-light border-space-light focus:border-neon-yellow"
                placeholder="Client's full name"
              />
            </div>
            <div>
              <Label htmlFor="clientEmail" className="text-foreground/90">Client Email *</Label>
              <Input
                id="clientEmail"
                type="email"
                value={formData.clientEmail}
                onChange={(e) => setFormData(prev => ({ ...prev, clientEmail: e.target.value }))}
                required
                className="bg-space-light border-space-light focus:border-neon-yellow"
                placeholder="client@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <Label htmlFor="clientPhone" className="text-foreground/90">Client Phone *</Label>
              <Input
                id="clientPhone"
                value={formData.clientPhone}
                onChange={(e) => setFormData(prev => ({ ...prev, clientPhone: e.target.value }))}
                required
                className="bg-space-light border-space-light focus:border-neon-yellow"
                placeholder="+254 700 123 456"
              />
            </div>
            <div>
              <Label htmlFor="clientCompany" className="text-foreground/90">Company/Business</Label>
              <Input
                id="clientCompany"
                value={formData.clientCompany}
                onChange={(e) => setFormData(prev => ({ ...prev, clientCompany: e.target.value }))}
                className="bg-space-light border-space-light focus:border-neon-yellow"
                placeholder="Company name (optional)"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <Label htmlFor="clientService" className="text-foreground/90">Service Needed *</Label>
              <Select onValueChange={(value) => setFormData(prev => ({ ...prev, clientService: value }))}>
                <SelectTrigger className="bg-space-light border-space-light">
                  <SelectValue placeholder="Select service needed" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="website">Website Development</SelectItem>
                  <SelectItem value="app">App Development</SelectItem>
                  <SelectItem value="social-media">Social Media Marketing</SelectItem>
                  <SelectItem value="seo">SEO Services</SelectItem>
                  <SelectItem value="photography">Photography & Videography</SelectItem>
                  <SelectItem value="business-cards">Business Cards</SelectItem>
                  <SelectItem value="other">Other Services</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="clientBudget" className="text-foreground/90">Estimated Budget</Label>
              <Select onValueChange={(value) => setFormData(prev => ({ ...prev, clientBudget: value }))}>
                <SelectTrigger className="bg-space-light border-space-light">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-50k">Under Ksh 50,000</SelectItem>
                  <SelectItem value="50k-100k">Ksh 50,000 - 100,000</SelectItem>
                  <SelectItem value="100k-250k">Ksh 100,000 - 250,000</SelectItem>
                  <SelectItem value="250k-500k">Ksh 250,000 - 500,000</SelectItem>
                  <SelectItem value="500k-plus">Ksh 500,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4">
            <Label htmlFor="notes" className="text-foreground/90">Additional Notes</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
              placeholder="Any additional information about the client or their requirements..."
              className="bg-space-light border-space-light focus:border-neon-yellow min-h-[100px]"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            type="submit"
            className="flex-1 bg-gradient-to-r from-neon-yellow to-neon-blue hover:from-neon-blue hover:to-neon-yellow text-white font-semibold py-3 rounded-full shadow-lg transition-all duration-300"
          >
            Submit Referral & Join Program
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
