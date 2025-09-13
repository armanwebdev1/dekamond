"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { iranPhoneRegex } from "@/lib/validatePhone";
import { useAuth, type AuthUser } from "@/lib/useAuth";
import { Skeleton } from "@/components/ui/skeleton";
import { AuthService } from "@/services/auth.service";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function AuthPage() {
  // If user exists, redirect to dashboard
  const { isReady } = useAuth({ requireAuth: false, redirectIfFound: true });

  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Skeleton while auth state is being checked
  if (!isReady) {
    return (
      <div className="flex h-screen justify-center items-center p-8 rtl transition-colors duration-300" style={{ backgroundColor: 'var(--background)' }}>
        <ThemeToggle />
        <div className="flex w-full max-w-[1100px] h-[90vh] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.15)] relative max-md:flex-col max-md:h-auto p-8" style={{ backgroundColor: 'var(--card-background)' }}>
          <div className="flex flex-col justify-center flex-1 space-y-4">
            <Skeleton className="h-8 w-40" /> {/* Title */}
            <Skeleton className="h-4 w-60" /> {/* Subtitle */}
            <Skeleton className="h-4 w-24" /> {/* Label */}
            <Skeleton className="h-10 w-full max-w-sm" /> {/* Input */}
            <Skeleton className="h-10 w-full max-w-sm" /> {/* Button */}
          </div>
        </div>
      </div>
    );
  }

  const handleLogin = async () => {
    if (!iranPhoneRegex.test(phone.trim())) {
      setError("شماره تلفن معتبر نیست.");
      return;
    }
    setError("");
    setIsLoading(true);

    try {
      await AuthService.login();
      window.location.href = "/dashboard";
    } catch {
      setError("خطایی رخ داده است. لطفاً دوباره تلاش کنید.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center p-8 rtl transition-colors duration-300" style={{ backgroundColor: 'var(--background)' }}>
      <ThemeToggle />
      <div className="flex w-full max-w-[1100px] h-[90vh] rounded-2xl overflow-hidden bg-[url('/background.jpg')] bg-cover bg-center shadow-[0_12px_40px_rgba(0,0,0,0.3)] relative max-md:flex-col max-md:h-auto max-md:max-h-[400px] max-md:bg-none">
        <div className="flex flex-col justify-center text-center flex-[0.7] max-w-[400px] p-16 max-md:max-w-full max-md:min-h-full max-md:p-6 backdrop-blur-[18px] animate-fadeIn transition-all duration-300" style={{ backgroundColor: 'var(--auth-overlay)', color: 'var(--auth-text)' }}>
          <h1 className="text-[2.4rem] mb-4 text-[#111] max-md:text-[1.8rem] max-sm:text-[1.5rem]">
            خوش آمدید
          </h1>
          <p className="text-[0.8rem] mb-8 max-md:text-[0.9rem] max-sm:text-[0.8rem]" style={{ color: 'var(--auth-subtitle)' }}>
            شماره تلفن خود را وارد کنید
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="flex flex-col"
          >
            <Label htmlFor="phone" className="mb-2 text-right">
              شماره موبایل
            </Label>

            <Input
              id="phone"
              type="tel"
              placeholder="مثلاً 09123456789"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              aria-invalid={!!error}
              aria-describedby={error ? "phone-error" : undefined}
              inputMode="numeric"
              className="font-inter p-3 border rounded-lg mb-4 transition-all duration-300 text-right placeholder:font-inter focus:outline-none focus:border-[#00c6ff] max-sm:text-[0.95rem]"
              style={{ 
                backgroundColor: 'var(--auth-input-bg)',
                borderColor: 'var(--auth-input-border)',
                color: 'var(--auth-input-text)'
              }}
            />

            {error && (
              <p
                id="phone-error"
                className="text-[#d32f2f] mb-4 block text-[0.9rem]"
                role="alert"
              >
                {error}
              </p>
            )}

            <Button
              type="submit"
              className="font-vazir bg-[#111] dark:bg-white dark:text-black p-3 rounded-lg font-bold text-white cursor-pointer transition-all duration-300 text-center hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(0,198,255,0.3)] disabled:opacity-70 disabled:cursor-not-allowed w-full max-sm:py-[0.65rem] max-sm:text-[0.9rem]"
              disabled={isLoading || !phone}
            >
              {isLoading ? "در حال ورود..." : "ورود"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
