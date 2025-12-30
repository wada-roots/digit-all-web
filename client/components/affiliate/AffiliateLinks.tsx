import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy } from "lucide-react";
import { toast } from "sonner";

export const AffiliateLinks = () => {
    const referralLink = "https://digit-all.com/ref/user123";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralLink);
        toast.success("Link copied to clipboard!");
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Your Affiliate Link</CardTitle>
                <CardDescription>
                    Share this link to earn commissions on referrals.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="link">Referral Link</Label>
                    <div className="flex space-x-2">
                        <Input id="link" value={referralLink} readOnly />
                        <Button size="icon" variant="outline" onClick={copyToClipboard}>
                            <Copy className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
