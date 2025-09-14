"use client";

import { useAuth } from "../../lib/useAuth";
import { DashboardLoading } from "../../components/dashboard/DashboardLoading";
import { DashboardLayout } from "../../components/dashboard/DashboardLayout";
import { ProfileCard } from "../../components/dashboard/ProfileCard";

export default function DashboardPage() {
  const { user, isReady, logout } = useAuth({ requireAuth: true });

  if (!isReady) return <DashboardLoading />;
  if (!user) return null;

  return (
    <DashboardLayout>
      <ProfileCard user={user} onLogout={logout} />
    </DashboardLayout>
  );
}
