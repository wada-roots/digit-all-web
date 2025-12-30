import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Plus, Send } from "lucide-react";

interface SubmitReferralProps {
    onSubmit: (referral: any) => void;
}

export const SubmitReferral = ({ onSubmit }: SubmitReferralProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        clientName: "",
        email: "",
        phone: "",
        service: "",
        notes: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const newReferral = {
            id: Math.random().toString(36).substr(2, 9),
            ...formData,
            date: new Date().toISOString().split("T")[0],
            status: "Pending",
            earnings: "$0.00",
        };

        onSubmit(newReferral);
        toast.success("Referral submitted successfully!");
        setFormData({
            clientName: "",
            email: "",
            phone: "",
            service: "",
            notes: "",
        });
        setIsLoading(false);
    };

    return (
        <Card className="border-indigo-500/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Plus className="h-5 w-5 text-indigo-400" />
                    Submit New Referral
                </CardTitle>
                <CardDescription>
                    Enter the details of a potential client. We'll contact them and track the progress here.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="clientName">Client Name</Label>
                            <Input
                                id="clientName"
                                placeholder="John Doe"
                                value={formData.clientName}
                                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                                required
                                className="bg-background/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Client Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className="bg-background/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                                id="phone"
                                placeholder="+1 234 567 890"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="bg-background/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="service">Interested Service</Label>
                            <Select
                                value={formData.service}
                                onValueChange={(value) => setFormData({ ...formData, service: value })}
                            >
                                <SelectTrigger className="bg-background/50">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Web Development">Web Development</SelectItem>
                                    <SelectItem value="App Development">App Development</SelectItem>
                                    <SelectItem value="SEO">SEO</SelectItem>
                                    <SelectItem value="Social Media">Social Media Marketing</SelectItem>
                                    <SelectItem value="Photography">Photography</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="notes">Notes (Optional)</Label>
                        <Textarea
                            id="notes"
                            placeholder="Any specific requirements or context..."
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            className="bg-background/50"
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            "Submitting..."
                        ) : (
                            <span className="flex items-center">
                                <Send className="mr-2 h-4 w-4" /> Submit Referral
                            </span>
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};
