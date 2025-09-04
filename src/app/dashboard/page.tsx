"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/lib/useAuth";

export default function DashboardPage() {
  const { user, isReady, logout } = useAuth({ requireAuth: true });

  if (!isReady) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#f5f6fa] p-8">
        <div className="flex flex-col items-center space-y-4">
          <Skeleton className="w-24 h-24 rounded-full" />
          <Skeleton className="w-40 h-6" />
          <Skeleton className="w-32 h-4" />
          <Skeleton className="w-24 h-10 rounded-lg" />
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="flex justify-center items-center h-screen bg-[#f5f6fa] p-8 max-md:p-4">
      <div className="flex w-full max-w-[1100px] h-[90vh] rounded-2xl overflow-hidden bg-white shadow-[0_12px_40px_rgba(0,0,0,0.15)] relative max-md:flex-col max-md:h-auto">
        <div className="flex flex-col justify-center items-center text-center flex-1 text-[#222] p-12 max-md:p-8 max-sm:p-6 animate-fadeIn">
          <h1 className="text-[2rem] mb-4 text-[#111] max-md:text-[1.6rem] max-sm:text-[1.4rem]">
            داشبورد
          </h1>

          <img
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
          />

          <p className="text-[1.1rem] text-[#333] max-md:text-[1rem] max-sm:text-[0.95rem]">
            خوش آمدید
          </p>
          <p className="font-inter mb-4">
            {user.name.first} {user.name.last}
          </p>

          <p className="font-inter text-sm text-gray-600 mb-8">{user.email}</p>

          <Button
            onClick={logout}
            className="bg-[#111] text-white font-bold rounded-lg px-6 py-3 transition duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(0,198,255,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            خروج
          </Button>
        </div>
      </div>
    </div>
  );
}
