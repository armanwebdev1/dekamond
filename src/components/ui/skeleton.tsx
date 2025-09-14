import { cn } from "../../lib/utils";

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md transition-colors duration-300",
        className
      )}
      style={{ backgroundColor: "var(--border)" }}
      {...props}
    />
  );
}
