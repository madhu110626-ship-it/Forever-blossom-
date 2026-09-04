"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function LoginPage() {
  const { user, sendOtp, verifyOtp, logout } = useAuth();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [hint, setHint] = useState("");

  if (user) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <h1 className="section-title">Welcome</h1>
        <p className="mt-4">{user.name} · {user.phone}</p>
        <button className="btn-outline mt-6" onClick={logout}>Logout</button>
        <Link href="/shop" className="btn-primary mt-3 inline-flex">Continue shopping</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <h1 className="section-title mb-2">Login</h1>
      <p className="mb-6 text-sm opacity-70">Mock OTP login — use code 123456</p>
      <div className="card-surface space-y-3 p-6">
        {step === "phone" ? (
          <>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full rounded-xl border px-3 py-2 text-sm" />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="w-full rounded-xl border px-3 py-2 text-sm" />
            <button className="btn-primary w-full" onClick={async () => { const code = await sendOtp(phone); setHint(`OTP sent (mock): ${code}`); setStep("otp"); }}>Send OTP</button>
          </>
        ) : (
          <>
            <p className="text-xs text-bloom-gold-dark">{hint}</p>
            <input value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" className="w-full rounded-xl border px-3 py-2 text-sm" />
            <button className="btn-primary w-full" onClick={async () => { const ok = await verifyOtp(phone, otp, name); if (!ok) alert("Invalid OTP"); }}>Verify</button>
          </>
        )}
      </div>
    </div>
  );
}
