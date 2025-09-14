import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ThemeToggle } from "../ui/theme-toggle";

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex justify-center items-center h-screen p-8 max-md:p-4 transition-colors duration-300 relative"
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

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="flex w-full max-w-[1100px] h-[90vh] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.15)] relative max-md:flex-col max-md:h-auto transition-colors duration-300"
        style={{ backgroundColor: "var(--dashboard-card)" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
