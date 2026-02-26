"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Invalid password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-xl bg-gray-100 p-6 shadow">
        <h1 className="text-xl font-semibold mb-4 text-center">
          Admin Login
        </h1>

        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md border px-3 py-2 mb-3"
        />

        {error && (
          <p className="text-sm text-red-500 mb-2">{error}</p>
        )}

        <button
          onClick={handleLogin}
          className="w-full rounded-md bg-black py-2 text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
}