import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

interface User {
  email: string;
  token: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    if (token && email) setUser({ email, token });
  }, []);

  const login = (email: string, token: string) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    setUser({ email, token });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

export const API_BASE = "https://api.server.buddycode.online";
