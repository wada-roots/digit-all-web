import { useState } from 'react';
import { Search, Target, BarChart3 } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

interface SEOPopupProps {
  onSubmit: (data: any) => void;
}

const SEOPopup = ({ onSubmit }: SEOPopupProps) => {
  const [formData, setFormData] = useState({
    businessName: '',
    website: '',
    email: '',
    phone: '',
    industry: '',
    targetLocation: '',
    currentRanking: '',
    targetKeywords: '',
    competitors: '',
    budget: '',
    timeline: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Search className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Search Engine Optimization
        </h2>
        <p className="text-foreground/80 text-sm mt-2">
          80% of your SEO work is done automatically
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
            <Label htmlFor="website">Website URL *</Label>
            <Input
              id="website"
              type="url"
              value={formData.website}
              onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
              placeholder="https://yourwebsite.com"
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
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="bg-space-light border-space-light"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="industry">Industry</Label>
            <Input
              id="industry"
              value={formData.industry}
              onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
              className="bg-space-light border-space-light"
            />
          </div>
          <div>
            <Label htmlFor="targetLocation">Target Location</Label>
            <Input
              id="targetLocation"
              value={formData.targetLocation}
              onChange={(e) => setFormData(prev => ({ ...prev, targetLocation: e.target.value }))}
              placeholder="City, State, Country"
              className="bg-space-light border-space-light"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="targetKeywords">Target Keywords *</Label>
          <Textarea
            id="targetKeywords"
            value={formData.targetKeywords}
            onChange={(e) => setFormData(prev => ({ ...prev, targetKeywords: e.target.value }))}
            placeholder="List the main keywords you want to rank for..."
            required
            className="bg-space-light border-space-light"
          />
        </div>

        <div>
          <Label htmlFor="competitors">Main Competitors</Label>
          <Input
            id="competitors"
            value={formData.competitors}
            onChange={(e) => setFormData(prev => ({ ...prev, competitors: e.target.value }))}
            placeholder="competitor1.com, competitor2.com"
            className="bg-space-light border-space-light"
          />
        </div>

        <div>
          <Label htmlFor="currentRanking">Current Google Ranking (if known)</Label>
          <select
            id="currentRanking"
            value={formData.currentRanking}
            onChange={(e) => setFormData(prev => ({ ...prev, currentRanking: e.target.value }))}
            className="w-full px-3 py-2 bg-space-light border border-space-light rounded-md text-sm"
          >
            <option value="">Select current ranking</option>
            <option value="not-ranking">Not ranking</option>
            <option value="page-2-3">Page 2-3</option>
            <option value="top-20">Top 20</option>
            <option value="top-10">Top 10</option>
            <option value="top-5">Top 5</option>
          </select>
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
              <option value="499-999">$499 - $999</option>
              <option value="1000-1999">$1,000 - $1,999</option>
              <option value="2000-3999">$2,000 - $3,999</option>
              <option value="4000+">$4,000+</option>
            </select>
          </div>
          <div>
            <Label htmlFor="timeline">Expected Timeline</Label>
            <select
              id="timeline"
              value={formData.timeline}
              onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
              className="w-full px-3 py-2 bg-space-light border border-space-light rounded-md text-sm"
            >
              <option value="">Select timeline</option>
              <option value="3-months">3 months</option>
              <option value="6-months">6 months</option>
              <option value="12-months">12 months</option>
              <option value="ongoing">Ongoing partnership</option>
            </select>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-500 text-white py-3 mt-6"
        >
          Get My SEO Strategy
        </Button>
      </form>
    </div>
  );
};

export default SEOPopup;
