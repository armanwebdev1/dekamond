import { motion, AnimatePresence, Variants } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Dispatch, SetStateAction } from "react";

const formVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

type AuthFormProps = {
  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
  error: string | null;
  isLoading: boolean;
  onSubmit: () => void | Promise<void>;
};

export function AuthForm({
  phone,
  setPhone,
  error,
  isLoading,
  onSubmit,
}: AuthFormProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        void onSubmit();
      }}
      className="flex flex-col"
    >
      <motion.div
        custom={1}
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <Label htmlFor="phone" className="mb-4 text-right">
          شماره موبایل
        </Label>
      </motion.div>

      <motion.div
        custom={2}
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <Input
          id="phone"
          type="tel"
          placeholder="مثلاً 09123456789"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? "phone-error" : undefined}
          inputMode="numeric"
          className="font-inter p-3 border rounded-lg mt-1 mb-4 transition-all duration-300 text-right placeholder:font-inter focus:outline-none focus:border-[#00c6ff] max-sm:text-[0.95rem]"
          style={{
            backgroundColor: "var(--auth-input-bg)",
            borderColor: "var(--auth-input-border)",
            color: "var(--auth-input-text)",
          }}
        />
      </motion.div>

      <AnimatePresence>
        {error && (
          <motion.p
            key="phone-error"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3 }}
            id="phone-error"
            className="mb-4 block text-[0.9rem]"
            role="alert"
            style={{ color: "var(--error-text)" }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      <motion.div
        custom={4}
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="submit"
            disabled={isLoading || !phone}
            className="font-vazir w-full bg-[#111] dark:bg-white dark:text-black text-white font-bold rounded-lg px-6 py-3 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
          >
            {isLoading ? "در حال ارسال..." : "ورود"}
          </Button>
        </motion.div>
      </motion.div>
    </form>
  );
}
