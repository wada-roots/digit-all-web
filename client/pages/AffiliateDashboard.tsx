import { useState } from "react";
import { AffiliateStats } from "@/components/affiliate/AffiliateStats";
import { AffiliateChart } from "@/components/affiliate/AffiliateChart";
import { AffiliateLinks } from "@/components/affiliate/AffiliateLinks";
import { SubmitReferral } from "@/components/affiliate/SubmitReferral";
import { ReferralList } from "@/components/affiliate/ReferralList";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { LogOut, LayoutDashboard, Settings, User } from "lucide-react";
import { motion } from "framer-motion";

// Mock initial data
const initialReferrals = [
    {
        id: "1",
        clientName: "Alice Johnson",
        service: "Web Development",
        date: "2023-10-25",
        status: "Paid" as const,
        earnings: "$150.00",
    },
    {
        id: "2",
        clientName: "Bob Smith",
        service: "SEO",
        date: "2023-11-02",
        status: "Converted" as const,
        earnings: "$50.00",
    },
    {
        id: "3",
        clientName: "Charlie Brown",
        service: "App Development",
        date: "2023-11-15",
        status: "Pending" as const,
        earnings: "$0.00",
    },
];

const AffiliateDashboard = () => {
    const { user, logout } = useAuth();
    const [referrals, setReferrals] = useState(initialReferrals);

    const handleNewReferral = (newReferral: any) => {
        setReferrals([newReferral, ...referrals]);
    };

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background Photos & Overlays */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />

                {/* Animated Orbs */}
                <motion.div
                    className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px]"
                    animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]"
                    animate={{ x: [0, -100, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                {/* Header */}
                <header className="border-b border-white/10 bg-background/50 backdrop-blur-xl sticky top-0 z-50">
                    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                                <LayoutDashboard className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-lg bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                Affiliate Portal
                            </span>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                                <User className="w-4 h-4" />
                                <span>{user?.email}</span>
                            </div>
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-white/5">
                                <Settings className="w-5 h-5" />
                            </Button>
                            <Button
                                variant="outline"
                                onClick={logout}
                                className="border-white/10 hover:bg-white/5 hover:text-indigo-400 transition-colors backdrop-blur-sm"
                            >
                                <LogOut className="mr-2 h-4 w-4" />
                                Logout
                            </Button>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 container mx-auto px-4 py-8 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <h1 className="text-4xl font-bold tracking-tight mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                            Dashboard Overview
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Track your performance, submit referrals, and manage your earnings.
                        </p>
                    </motion.div>

                    {/* Stats Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <AffiliateStats />
                    </motion.div>

                    {/* Charts & Links Row */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                        <motion.div
                            className="col-span-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <AffiliateChart />
                        </motion.div>

                        <motion.div
                            className="col-span-3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <AffiliateLinks />
                        </motion.div>
                    </div>

                    {/* Referrals Management Row */}
                    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                        <motion.div
                            className="lg:col-span-1"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <SubmitReferral onSubmit={handleNewReferral} />
                        </motion.div>

                        <motion.div
                            className="lg:col-span-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <ReferralList referrals={referrals} />
                        </motion.div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AffiliateDashboard;
