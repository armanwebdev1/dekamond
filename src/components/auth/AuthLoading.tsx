import { Skeleton } from "../ui/skeleton";
import { ThemeToggle } from "../ui/theme-toggle";

export function AuthLoading() {
  return (
    <div
      className="rtl flex h-screen justify-center items-center p-8 transition-colors duration-300"
      style={{ backgroundColor: "var(--background)" }}
    >
      <ThemeToggle />
      <div
        className="flex w-full max-w-[1100px] h-[90vh] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.15)] relative max-md:flex-col max-md:h-auto p-8"
        style={{ backgroundColor: "var(--card-background)" }}
      >
        <div className="flex flex-col justify-center flex-1 space-y-4">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-4 w-60" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full max-w-sm" />
          <Skeleton className="h-10 w-full max-w-sm" />
        </div>
      </div>
    </div>
  );
}
