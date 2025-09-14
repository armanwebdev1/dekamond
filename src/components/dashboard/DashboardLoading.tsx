import { Skeleton } from "../ui/skeleton";
import { ThemeToggle } from "../ui/theme-toggle";
import { motion } from "framer-motion";

export function DashboardLoading() {
  return (
    <div
      className="flex justify-center items-center h-screen p-8 transition-colors duration-300 relative"
      style={{ backgroundColor: "var(--dashboard-bg)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-6 right-6"
      >
        <ThemeToggle />
      </motion.div>

      <div className="flex flex-col items-center space-y-4">
        <Skeleton className="w-24 h-24 rounded-full" />
        <Skeleton className="w-40 h-6" />
        <Skeleton className="w-32 h-4" />
        <Skeleton className="w-24 h-10 rounded-lg" />
      </div>
    </div>
  );
}
