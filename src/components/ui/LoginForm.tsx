"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Tambahkan ini
import { FiMail, FiLock } from "react-icons/fi";

export default function LoginForm() {
  const router = useRouter(); // ✅ Hook untuk navigasi
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));

    // ✅ Simpan dummy token agar bisa dipakai di /app/page.tsx (opsional)
    localStorage.setItem("token", "dummy.jwt.token");

    // ✅ Arahkan ke dashboard
    router.push("/dashboard");

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-sm sm:text-base w-full">
      <div>
        <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
          Email atau NIK
        </label>
        <div className="relative">
          <FiMail className="absolute left-3 top-3.5 text-gray-400" />
          <input
            id="email"
            type="text"
            placeholder="Masukkan email atau NIK"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block mb-2 font-medium text-gray-700">
          Kata Sandi
        </label>
        <div className="relative">
          <FiLock className="absolute left-3 top-3.5 text-gray-400" />
          <input
            id="password"
            type="password"
            placeholder="Masukkan kata sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-4 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
      >
        {loading ? "Memproses..." : "Masuk"}
      </button>

      <p className="text-xs text-center text-gray-500">
        Ada kendala? silakan menuju ke{' '}
        <a href="#" className="text-orange-600 hover:underline">
          frequently asked question
        </a>
      </p>
    </form>
  );
}
