import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
    isAuthenticated: boolean;
    login: (email: string, role?: 'admin' | 'user') => void;
    logout: () => void;
    user: { email: string; role: 'admin' | 'user' } | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<{ email: string; role: 'admin' | 'user' } | null>(null);
    // We can't use useNavigate here because AuthProvider is usually outside BrowserRouter in App.tsx
    // But if we put it inside, we can. For now, let's just manage state.

    useEffect(() => {
        const storedUser = localStorage.getItem("affiliate_user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }
    }, []);

    const login = (email: string, role: 'admin' | 'user' = 'user') => {
        const userData = { email, role };
        localStorage.setItem("affiliate_user", JSON.stringify(userData));
        setUser(userData);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem("affiliate_user");
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
