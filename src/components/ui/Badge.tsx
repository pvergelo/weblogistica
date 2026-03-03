import React from "react";
import { cn } from "../../utils/cn";

export function Badge({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "soft" | "outline";
}) {
  const styles =
    variant === "outline"
      ? "border border-white/15 bg-transparent text-white/90"
      : variant === "soft"
        ? "bg-white/10 text-white/90"
        : "bg-white/15 text-white";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tracking-wide",
        styles,
        className,
      )}
    >
      {children}
    </span>
  );
}
