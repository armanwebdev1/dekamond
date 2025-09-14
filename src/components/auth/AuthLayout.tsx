import { motion } from "framer-motion";
import { ReactNode } from "react";

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative flex w-full max-w-[1100px] h-[90vh] rounded-2xl overflow-hidden bg-[url('/background.jpg')] bg-cover bg-center shadow-[0_12px_40px_rgba(0,0,0,0.3)] max-md:flex-col max-md:h-auto max-md:max-h-[400px] max-md:bg-none"
    >
      <motion.div
        className="absolute w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl top-[-20px] left-[-20px] hidden max-md:block"
        animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
      <motion.div
        className="absolute w-32 h-32 bg-pink-400/20 rounded-full blur-3xl bottom-[-20px] right-[-20px] hidden max-md:block"
        animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      {children}
    </motion.div>
  );
}
