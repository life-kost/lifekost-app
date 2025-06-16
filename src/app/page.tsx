// src/app/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
      return;
    }

    const payload = JSON.parse(atob(token.split(".")[1]));
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
