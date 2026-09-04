"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type User = { phone: string; name?: string };

type AuthCtx = {
  user: User | null;
  sendOtp: (phone: string) => Promise<string>;
  verifyOtp: (phone: string, otp: string, name?: string) => Promise<boolean>;
  logout: () => void;
};

const Ctx = createContext<AuthCtx | null>(null);
const KEY = "fbc-user";
const OTP_KEY = "fbc-mock-otp";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch {}
  }, []);

  const sendOtp = async (phone: string) => {
    const code = "123456";
    sessionStorage.setItem(OTP_KEY, JSON.stringify({ phone, code }));
    return code;
  };

  const verifyOtp = async (phone: string, otp: string, name?: string) => {
    const raw = sessionStorage.getItem(OTP_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw) as { phone: string; code: string };
    if (data.phone === phone && (otp === data.code || otp === "123456")) {
      const u = { phone, name: name || "Bloom Guest" };
      setUser(u);
      localStorage.setItem(KEY, JSON.stringify(u));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(KEY);
  };

  return <Ctx.Provider value={{ user, sendOtp, verifyOtp, logout }}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAuth outside provider");
  return ctx;
}
