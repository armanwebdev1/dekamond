"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export type AuthUser = {
  name: { first: string; last: string };
  email: string;
  picture: { large: string };
};

type Options = {
  /**
   * If true, redirects to /auth when user is missing.
   * If false, does not redirect automatically.
   * Defaults to true.
   */
  requireAuth?: boolean;
  /**
   * If true, redirects to /dashboard if user already exists.
   * Useful for the login page to prevent showing auth when logged in.
   * Defaults to false.
   */
  redirectIfFound?: boolean;
};

export function useAuth(options: Options = {}) {
  const { requireAuth = true, redirectIfFound = false } = options;
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    const parsed = stored ? (JSON.parse(stored) as AuthUser) : null;

    if (requireAuth && !parsed) {
      router.replace("/auth");
      return;
    }

    if (redirectIfFound && parsed) {
      router.replace("/dashboard");
      return;
    }

    setUser(parsed);
    setIsReady(true);
  }, [requireAuth, redirectIfFound, router]);

  const login = (data: AuthUser) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/auth");
  };

  return { user, isReady, login, logout };
}
