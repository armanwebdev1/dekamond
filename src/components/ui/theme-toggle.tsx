"use client";

import { Button } from "./button";
import { useTheme } from "../../contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-4 z-50"
    >
      <motion.div
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Button
          type="button"
          onClick={toggleTheme}
          className="flex items-center gap-2 cursor-pointer transition-all duration-300"
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isDark ? "sun" : "moon"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.4 }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.div>
          </AnimatePresence>

          <motion.span
            key={isDark ? "light-label" : "dark-label"}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3 }}
            className="text-sm"
          >
            {isDark ? "روشن" : "تاریک"}
          </motion.span>
        </Button>
      </motion.div>
    </motion.div>
  );
}
