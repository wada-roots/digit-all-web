import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Lock, Mail, User, ArrowRight } from "lucide-react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/affiliates";

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            if (email && password) {
                const isAdmin = email === "admin@digit-all.com";
                const role = isAdmin ? "admin" : "user";
                login(email, role);

                toast.success(isAdmin ? "Welcome Admin!" : "Welcome back!", {
                    description: "You have successfully logged in.",
                });

                let targetPath = location.state?.from?.pathname;

                // If admin, and no specific target or target is affiliates, go to admin dashboard
                if (isAdmin && (!targetPath || targetPath === "/affiliates")) {
                    targetPath = "/kk";
                }
                // If not admin, and target is admin dashboard (unlikely but possible), go to affiliates
                else if (!isAdmin && (!targetPath || targetPath === "/kk")) {
                    targetPath = "/affiliates";
                }
                // Default fallback
                if (!targetPath) {
                    targetPath = isAdmin ? "/kk" : "/affiliates";
                }

                navigate(targetPath, { replace: true });
            } else {
                toast.error("Error", {
                    description: "Please enter both email and password.",
                });
            }
            setIsLoading(false);
        }, 1000);
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            if (email && password && name) {
                login(email);
                toast.success("Account created!", {
                    description: "Welcome to the affiliate program.",
                });
                navigate(from, { replace: true });
            } else {
                toast.error("Error", {
                    description: "Please fill in all fields.",
                });
            }
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden p-4">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background" />
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
                animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
                transition={{ duration: 20, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
                transition={{ duration: 25, repeat: Infinity }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-md"
            >
                <Card className="border-indigo-500/20 bg-card/50 backdrop-blur-xl shadow-2xl">
                    <CardHeader className="space-y-1 text-center">
                        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            Affiliate Portal
                        </CardTitle>
                        <CardDescription>
                            Manage your earnings and referrals in one place
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="login" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 mb-4">
                                <TabsTrigger value="login">Login</TabsTrigger>
                                <TabsTrigger value="signup">Sign Up</TabsTrigger>
                            </TabsList>

                            <TabsContent value="login">
                                <form onSubmit={handleLogin} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="name@example.com"
                                                className="pl-9 bg-background/50 border-indigo-500/20 focus:border-indigo-500"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="password">Password</Label>
                                            <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300">
                                                Forgot password?
                                            </a>
                                        </div>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="password"
                                                type="password"
                                                className="pl-9 bg-background/50 border-indigo-500/20 focus:border-indigo-500"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Signing in..." : (
                                            <span className="flex items-center">
                                                Sign In <ArrowRight className="ml-2 h-4 w-4" />
                                            </span>
                                        )}
                                    </Button>
                                </form>
                            </TabsContent>

                            <TabsContent value="signup">
                                <form onSubmit={handleSignup} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="name"
                                                placeholder="John Doe"
                                                className="pl-9 bg-background/50 border-indigo-500/20 focus:border-indigo-500"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="signup-email">Email</Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="signup-email"
                                                type="email"
                                                placeholder="name@example.com"
                                                className="pl-9 bg-background/50 border-indigo-500/20 focus:border-indigo-500"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="signup-password">Password</Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="signup-password"
                                                type="password"
                                                className="pl-9 bg-background/50 border-indigo-500/20 focus:border-indigo-500"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-700 hover:to-indigo-600 transition-all duration-300"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Creating account..." : (
                                            <span className="flex items-center">
                                                Create Account <ArrowRight className="ml-2 h-4 w-4" />
                                            </span>
                                        )}
                                    </Button>
                                </form>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                    <CardFooter className="flex justify-center border-t border-indigo-500/10 pt-4">
                        <p className="text-xs text-muted-foreground text-center">
                            By continuing, you agree to our Terms of Service and Privacy Policy.
                        </p>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    );
};

export default Login;
