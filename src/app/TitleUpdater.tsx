"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "../lib/useAuth";

export function TitleUpdater({ defaultTitle }: { defaultTitle: string }) {
  const pathname = usePathname();
  const { user, isReady } = useAuth({ requireAuth: false });

  useEffect(() => {
    if (!isReady) return;

    if (pathname.startsWith("/auth")) {
      document.title = "Authentication";
    } else if (user && user.name?.first) {
      document.title = `${user.name.first}'s Dashboard`;
    } else {
      document.title = defaultTitle;
    }
  }, [pathname, user?.name?.first, isReady, defaultTitle]);

  return null;
}
