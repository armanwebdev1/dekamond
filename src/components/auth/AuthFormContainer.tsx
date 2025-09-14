import { motion } from "framer-motion";
import { LogIn } from "lucide-react";
import { ReactNode } from "react";

export function AuthFormContainer({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeOut",
      }}
      className="relative z-10 flex flex-col justify-center text-center flex-[0.7] max-w-[400px] p-16 max-md:max-w-full max-md:min-h-full max-md:p-6 backdrop-blur-[18px] transition-all duration-300"
      style={{
        backgroundColor: "var(--auth-overlay)",
        color: "var(--auth-text)",
      }}
    >
      <motion.div
        className="hidden max-md:flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-500/10"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <LogIn size={28} strokeWidth={1.8} className="text-cyan-500" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-[2.4rem] mb-4 max-md:text-[1.8rem] max-sm:text-[1.5rem]"
      >
        خوش آمدید
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-[0.8rem] mb-8 max-md:text-[0.9rem] max-sm:text-[0.8rem]"
        style={{ color: "var(--auth-subtitle)" }}
      >
        شماره تلفن خود را وارد کنید
      </motion.p>

      {children}
    </motion.div>
  );
}
