import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

interface Referral {
    id: string;
    clientName: string;
    service: string;
    date: string;
    status: "Pending" | "Contacted" | "Converted" | "Paid";
    earnings: string;
}

interface ReferralListProps {
    referrals: Referral[];
}

export const ReferralList = ({ referrals }: ReferralListProps) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case "Paid":
                return "bg-green-500/10 text-green-500 hover:bg-green-500/20 border-green-500/20";
            case "Converted":
                return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/20";
            case "Contacted":
                return "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 border-yellow-500/20";
            default:
                return "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20 border-gray-500/20";
        }
    };

    return (
        <Card className="border-indigo-500/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-indigo-400" />
                    Your Referrals
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="rounded-md border border-indigo-500/10">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-indigo-500/10 hover:bg-indigo-500/5">
                                <TableHead>Client Name</TableHead>
                                <TableHead>Service</TableHead>
                                <TableHead>Date Submitted</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Potential Earnings</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {referrals.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center h-24 text-muted-foreground">
                                        No referrals yet. Submit your first one above!
                                    </TableCell>
                                </TableRow>
                            ) : (
                                referrals.map((referral) => (
                                    <TableRow key={referral.id} className="border-indigo-500/10 hover:bg-indigo-500/5">
                                        <TableCell className="font-medium">{referral.clientName}</TableCell>
                                        <TableCell>{referral.service}</TableCell>
                                        <TableCell>{referral.date}</TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className={getStatusColor(referral.status)}>
                                                {referral.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">{referral.earnings}</TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
};
