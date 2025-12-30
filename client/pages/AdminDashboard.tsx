import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Check, X, Shield, Users, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";

// Mock data for Affiliates
const initialAffiliates = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active", earnings: "$1,200", referrals: 15 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Pending", earnings: "$0", referrals: 0 },
    { id: 3, name: "Bob Wilson", email: "bob@example.com", status: "Active", earnings: "$450", referrals: 5 },
    { id: 4, name: "Alice Brown", email: "alice@example.com", status: "Rejected", earnings: "$0", referrals: 0 },
];

// Mock data for Client Requests / Referrals
const initialRequests = [
    { id: 1, clientName: "Tech Corp", contactPerson: "Mike Ross", email: "mike@techcorp.com", service: "Web Development", budget: "$5000", status: "New", referrer: "John Doe", date: "2023-11-20" },
    { id: 2, clientName: "Bakery Delights", contactPerson: "Sarah Lee", email: "sarah@bakery.com", service: "Social Media", budget: "$1200", status: "Contacted", referrer: "Bob Wilson", date: "2023-11-22" },
    { id: 3, clientName: "Green Energy", contactPerson: "David Kim", email: "david@green.com", service: "SEO", budget: "$3000", status: "In Progress", referrer: "Direct", date: "2023-11-25" },
    { id: 4, clientName: "StartUp Inc", contactPerson: "Emily Chen", email: "emily@startup.com", service: "App Development", budget: "$10000", status: "Completed", referrer: "John Doe", date: "2023-10-15" },
];

const AdminDashboard = () => {
    const { user, logout } = useAuth();
    const [affiliates, setAffiliates] = useState(initialAffiliates);
    const [requests, setRequests] = useState(initialRequests);
    const [searchTerm, setSearchTerm] = useState("");
    const [requestSearchTerm, setRequestSearchTerm] = useState("");

    const handleStatusChange = (id: number, newStatus: string) => {
        setAffiliates(affiliates.map(aff =>
            aff.id === id ? { ...aff, status: newStatus } : aff
        ));
        toast.success(`Affiliate status updated to ${newStatus}`);
    };

    const handleRequestStatusChange = (id: number, newStatus: string) => {
        setRequests(requests.map(req =>
            req.id === id ? { ...req, status: newStatus } : req
        ));
        toast.success(`Request status updated to ${newStatus}`);
    };

    const filteredAffiliates = affiliates.filter(aff =>
        aff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        aff.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredRequests = requests.filter(req =>
        req.clientName.toLowerCase().includes(requestSearchTerm.toLowerCase()) ||
        req.email.toLowerCase().includes(requestSearchTerm.toLowerCase()) ||
        req.referrer.toLowerCase().includes(requestSearchTerm.toLowerCase())
    );

    const getStatusColor = (status: string) => {
        switch (status) {
            case "New": return "default";
            case "Contacted": return "secondary";
            case "In Progress": return "outline";
            case "Completed": return "default"; // or green custom
            case "Closed": return "destructive";
            default: return "secondary";
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-16 sm:top-24 lg:top-28 z-40">
                <div className="container flex h-16 items-center justify-between py-4">
                    <div className="flex items-center gap-2 font-bold text-xl">
                        <Shield className="h-6 w-6 text-primary" />
                        <span>Admin Portal</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-sm text-muted-foreground">
                            {user?.email}
                        </div>
                        <Button variant="outline" size="sm" onClick={logout}>
                            Logout
                        </Button>
                    </div>
                </div>
            </header>

            <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">
                            Dashboard Overview
                        </h1>
                        <p className="text-muted-foreground mt-2">Manage your affiliate program and client requests.</p>
                    </div>
                </div>

                <Tabs defaultValue="affiliates" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="affiliates" className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            Affiliates
                        </TabsTrigger>
                        <TabsTrigger value="requests" className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4" />
                            Clients & Requests
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="affiliates" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle>Affiliates</CardTitle>
                                    <div className="relative w-64">
                                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            placeholder="Search affiliates..."
                                            className="pl-8"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Name</TableHead>
                                            <TableHead>Email</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Referrals</TableHead>
                                            <TableHead>Total Earnings</TableHead>
                                            <TableHead className="text-right">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {filteredAffiliates.map((affiliate) => (
                                            <TableRow key={affiliate.id}>
                                                <TableCell className="font-medium">{affiliate.name}</TableCell>
                                                <TableCell>{affiliate.email}</TableCell>
                                                <TableCell>
                                                    <Badge variant={
                                                        affiliate.status === "Active" ? "default" :
                                                            affiliate.status === "Pending" ? "secondary" : "destructive"
                                                    }>
                                                        {affiliate.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>{affiliate.referrals}</TableCell>
                                                <TableCell>{affiliate.earnings}</TableCell>
                                                <TableCell className="text-right space-x-2">
                                                    {affiliate.status === "Pending" && (
                                                        <>
                                                            <Button
                                                                size="sm"
                                                                variant="outline"
                                                                className="h-8 w-8 p-0 text-green-600 hover:text-green-700 hover:bg-green-50"
                                                                onClick={() => handleStatusChange(affiliate.id, "Active")}
                                                            >
                                                                <Check className="h-4 w-4" />
                                                            </Button>
                                                            <Button
                                                                size="sm"
                                                                variant="outline"
                                                                className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                                                                onClick={() => handleStatusChange(affiliate.id, "Rejected")}
                                                            >
                                                                <X className="h-4 w-4" />
                                                            </Button>
                                                        </>
                                                    )}
                                                    {affiliate.status === "Active" && (
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                                            onClick={() => handleStatusChange(affiliate.id, "Rejected")}
                                                        >
                                                            Deactivate
                                                        </Button>
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="requests" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle>Client Requests</CardTitle>
                                    <div className="relative w-64">
                                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            placeholder="Search requests..."
                                            className="pl-8"
                                            value={requestSearchTerm}
                                            onChange={(e) => setRequestSearchTerm(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Client / Company</TableHead>
                                            <TableHead>Contact Person</TableHead>
                                            <TableHead>Service</TableHead>
                                            <TableHead>Referrer</TableHead>
                                            <TableHead>Date</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead className="text-right">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {filteredRequests.map((request) => (
                                            <TableRow key={request.id}>
                                                <TableCell className="font-medium">{request.clientName}</TableCell>
                                                <TableCell>
                                                    <div className="flex flex-col">
                                                        <span>{request.contactPerson}</span>
                                                        <span className="text-xs text-muted-foreground">{request.email}</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell>{request.service}</TableCell>
                                                <TableCell>{request.referrer}</TableCell>
                                                <TableCell>{request.date}</TableCell>
                                                <TableCell>
                                                    <Badge variant={getStatusColor(request.status) as any}>
                                                        {request.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <div className="flex justify-end gap-2">
                                                        {request.status === "New" && (
                                                            <Button
                                                                size="sm"
                                                                variant="outline"
                                                                onClick={() => handleRequestStatusChange(request.id, "Contacted")}
                                                            >
                                                                Mark Contacted
                                                            </Button>
                                                        )}
                                                        {request.status === "Contacted" && (
                                                            <Button
                                                                size="sm"
                                                                variant="outline"
                                                                className="text-blue-600 hover:text-blue-700"
                                                                onClick={() => handleRequestStatusChange(request.id, "In Progress")}
                                                            >
                                                                Start Work
                                                            </Button>
                                                        )}
                                                        {request.status === "In Progress" && (
                                                            <Button
                                                                size="sm"
                                                                variant="outline"
                                                                className="text-green-600 hover:text-green-700"
                                                                onClick={() => handleRequestStatusChange(request.id, "Completed")}
                                                            >
                                                                Complete
                                                            </Button>
                                                        )}
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default AdminDashboard;
