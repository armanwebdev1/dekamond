import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export function Button({
  className,
  children,
  isLoading,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium",
        "btn-primary interactive-element gpu-accelerated",
        "bg-black text-white hover:bg-black/90",
        "disabled:opacity-50 disabled:pointer-events-none",
        "h-10 px-4 py-2",
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <div className="loading-dots mr-2">
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      {children}
    </button>
  );
}
