"use client";

import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { Button } from './button';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className="fixed top-4 left-4 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl p-0 flex items-center justify-center group"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${
            theme === 'light' 
              ? 'rotate-0 scale-100 opacity-100' 
              : 'rotate-90 scale-0 opacity-0'
          }`}
        />
        <Moon 
          className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${
            theme === 'dark' 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>
    </Button>
  );
}