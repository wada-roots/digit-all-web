import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Globe, User, Briefcase, Clock } from 'lucide-react';

interface PersonalWebsitePopupProps {
  onSubmit: (data: any) => void;
}

const PersonalWebsitePopup = ({ onSubmit }: PersonalWebsitePopupProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
    industry: '',
    websiteType: '',
    content: '',
    features: [] as string[],
    timeline: '',
    budget: '',
    existing_website: '',
    goals: '',
    brand_colors: '',
    inspiration: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleFeatureChange = (feature: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, feature]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        features: prev.features.filter(f => f !== feature)
      }));
    }
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
        <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-yellow rounded-full flex items-center justify-center mx-auto mb-4">
          <Globe className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-neon-blue to-neon-yellow bg-clip-text text-transparent mb-2">
          Personal Website - 60 Minutes!
        </h2>
        <p className="text-foreground/80">Perfect for every profession. Get your website ready in just 60 minutes!</p>
        <div className="flex items-center justify-center mt-4 space-x-2">
          <span className="text-2xl font-bold text-neon-blue">Ksh 10,000</span>
          <span className="text-sm text-foreground/60 line-through">Ksh 25,000</span>
          <span className="bg-neon-yellow text-space-dark px-2 py-1 rounded text-xs font-bold">SAVE 60%</span>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="flex items-center space-x-2 text-sm">
          <Clock className="w-4 h-4 text-neon-blue" />
          <span>60 Minutes Delivery</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Globe className="w-4 h-4 text-neon-blue" />
          <span>Responsive Design</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Briefcase className="w-4 h-4 text-neon-blue" />
          <span>Portfolio Section</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <User className="w-4 h-4 text-neon-blue" />
          <span>SEO Optimized</span>
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
              placeholder="Your full name"
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
              placeholder="your.email@example.com"
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
              placeholder="+254 700 123 456"
            />
          </div>
          <div>
            <Label htmlFor="profession" className="text-foreground/90">Your Profession *</Label>
            <Input
              id="profession"
              value={formData.profession}
              onChange={(e) => setFormData(prev => ({ ...prev, profession: e.target.value }))}
              required
              className="bg-space-light border-space-light focus:border-neon-blue"
              placeholder="e.g., Doctor, Lawyer, Artist, etc."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="industry" className="text-foreground/90">Industry/Field</Label>
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
              <SelectTrigger className="bg-space-light border-space-light">
                <SelectValue placeholder="Select your industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="legal">Legal</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="business">Business/Finance</SelectItem>
                <SelectItem value="creative">Creative/Arts</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
                <SelectItem value="real-estate">Real Estate</SelectItem>
                <SelectItem value="fitness">Fitness/Wellness</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="websiteType" className="text-foreground/90">Website Type *</Label>
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, websiteType: value }))}>
              <SelectTrigger className="bg-space-light border-space-light">
                <SelectValue placeholder="Select website type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="portfolio">Professional Portfolio</SelectItem>
                <SelectItem value="resume">Online Resume/CV</SelectItem>
                <SelectItem value="business">Business Profile</SelectItem>
                <SelectItem value="personal-brand">Personal Branding</SelectItem>
                <SelectItem value="showcase">Work Showcase</SelectItem>
                <SelectItem value="blog">Personal Blog</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="content" className="text-foreground/90">Content to Include *</Label>
          <Textarea
            id="content"
            value={formData.content}
            onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
            required
            placeholder="Tell us about yourself, your work, achievements, services, etc. The more details you provide, the better your website will be!"
            className="bg-space-light border-space-light focus:border-neon-blue min-h-[120px]"
          />
        </div>

        <div>
          <Label className="text-foreground/90 mb-3 block">Website Features (Select all that apply)</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'Contact Form',
              'Photo Gallery',
              'Testimonials',
              'Services List',
              'About Section',
              'Blog/News',
              'Social Media Links',
              'Location/Map',
              'Appointment Booking',
              'Download CV/Resume'
            ].map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <Checkbox
                  id={feature}
                  onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
                />
                <Label htmlFor={feature} className="text-sm text-foreground/80">{feature}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="brand_colors" className="text-foreground/90">Preferred Colors/Theme</Label>
            <Input
              id="brand_colors"
              value={formData.brand_colors}
              onChange={(e) => setFormData(prev => ({ ...prev, brand_colors: e.target.value }))}
              className="bg-space-light border-space-light focus:border-neon-blue"
              placeholder="e.g., Blue & White, Professional, Modern"
            />
          </div>
          <div>
            <Label htmlFor="existing_website" className="text-foreground/90">Existing Website (if any)</Label>
            <Input
              id="existing_website"
              value={formData.existing_website}
              onChange={(e) => setFormData(prev => ({ ...prev, existing_website: e.target.value }))}
              className="bg-space-light border-space-light focus:border-neon-blue"
              placeholder="Current website URL (optional)"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="goals" className="text-foreground/90">Website Goals</Label>
          <Textarea
            id="goals"
            value={formData.goals}
            onChange={(e) => setFormData(prev => ({ ...prev, goals: e.target.value }))}
            placeholder="What do you want to achieve with your website? (attract clients, showcase work, build credibility, etc.)"
            className="bg-space-light border-space-light focus:border-neon-blue min-h-[80px]"
          />
        </div>

        <div className="flex gap-4">
          <Button
            type="submit"
            className="flex-1 bg-gradient-to-r from-neon-blue to-neon-yellow hover:from-neon-yellow hover:to-neon-blue text-white font-semibold py-3 rounded-full shadow-lg transition-all duration-300"
          >
            Get My Website - Ksh 10,000
          </Button>
        </div>
      </form>

      <div className="mt-6 p-4 bg-neon-blue/10 rounded-lg border border-neon-blue/20">
        <p className="text-xs text-foreground/70 text-center">
          ⚡ Special offer! Your professional website delivered in just 60 minutes. Save 60% today!
        </p>
      </div>
    </motion.div>
  );
};

export default PersonalWebsitePopup;
