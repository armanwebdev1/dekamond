"use client";

import { useState } from "react";
import { useAuth } from "../../lib/useAuth";
import { iranPhoneRegex } from "../../lib/validatePhone";
import { AuthService } from "../../services/auth.service";
import { ThemeToggle } from "../../components/ui/theme-toggle";
import { AuthLoading } from "../../components/auth/AuthLoading";
import { AuthLayout } from "../../components/auth/AuthLayout";
import { AuthFormContainer } from "../../components/auth/AuthFormContainer";
import { AuthForm } from "../../components/auth/AuthForm";

export default function AuthPage() {
  const { isReady } = useAuth({ requireAuth: false, redirectIfFound: true });
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  if (!isReady) return <AuthLoading />;

  const handleLogin = async () => {
    if (!iranPhoneRegex.test(phone.trim())) {
      setError("شماره تلفن معتبر نیست.");
      return;
    }
    setError(null);
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
    <div
      className="flex h-screen justify-center items-center p-8 rtl transition-colors duration-300"
      style={{ backgroundColor: "var(--background)" }}
    >
      <ThemeToggle />
      <AuthLayout>
        <AuthFormContainer>
          <AuthForm
            phone={phone}
            setPhone={setPhone}
            error={error}
            isLoading={isLoading}
            onSubmit={handleLogin}
          />
        </AuthFormContainer>
      </AuthLayout>
    </div>
  );
}
