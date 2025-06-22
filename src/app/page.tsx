"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  // Fungsi untuk meng-decode Base64URL (JWT payload)
  function decodeJWT(token: string) {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const padded = base64.padEnd(base64.length + (4 - (base64.length % 4)) % 4, "=");
      const jsonPayload = atob(padded);
      return JSON.parse(jsonPayload);
    } catch (e) {
      console.error("Invalid JWT token:", e);
      return null;
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
      return;
    }

    const payload = decodeJWT(token);
    if (!payload) {
      router.replace("/login"); // fallback jika token rusak
      return;
    }

    const role = payload?.user?.role || "user";

    if (role === "admin") {
      router.replace("/admin");
    } else {
      router.replace("/dashboard");
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen text-gray-500">
      Loading...
    </div>
  );
}
