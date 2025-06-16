"use client";

import LoginForm from "@/components/ui/LoginForm";
import { Theme } from "@/lib/constants/theme";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen font-[inherit]" style={{ fontFamily: Theme.fonts.body }}>
      {/* Kiri: Background 70% */}
      <div className="hidden md:flex relative md:w-[70%]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/banners/bg-login.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-6 left-6 z-10">
          <span
            className="text-3xl font-bold tracking-wide"
            style={{ color: Theme.colors.backgroundLight }}
          >
            LifeKost
          </span>
        </div>
      </div>

      {/* Kanan: Form 30% */}
      <div
        className="flex flex-col justify-center w-full md:w-[30%] px-8 sm:px-16 py-12"
        style={{ backgroundColor: Theme.colors.backgroundLight }}
      >
        <div className="w-full max-w-md mx-auto">
          <h2
            className="text-2xl font-bold mb-2 leading-tight"
            style={{ color: Theme.colors.textPrimary }}
          >
            Hai, Selamat Datang <br />
            <span style={{ color: Theme.colors.primary }}>Di LifeKost</span>
          </h2>
          <p className="mb-6" style={{ color: Theme.colors.textSecondary }}>
            Silakan Masuk
          </p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
