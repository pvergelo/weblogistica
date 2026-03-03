import React from "react";
import { cn } from "../../utils/cn";

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "soft";
  size?: "sm" | "md";
}) {
  const v =
    variant === "ghost"
      ? "bg-transparent hover:bg-white/10 text-white border border-white/10"
      : variant === "soft"
        ? "bg-white/10 hover:bg-white/15 text-white border border-white/10"
        : "bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white border border-white/10";

  const s = size === "sm" ? "h-9 px-3 text-sm" : "h-10 px-4";

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-semibold tracking-wide transition focus:outline-none focus:ring-2 focus:ring-sky-400/50",
        v,
        s,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  children,
  className,
  variant = "soft",
  target = "_blank",
  rel = "noreferrer",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost" | "soft";
  target?: string;
  rel?: string;
}) {
  const v =
    variant === "ghost"
      ? "bg-transparent hover:bg-white/10 text-white border border-white/10"
      : variant === "soft"
        ? "bg-white/10 hover:bg-white/15 text-white border border-white/10"
        : "bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white border border-white/10";

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "inline-flex items-center justify-center rounded-xl h-10 px-4 font-semibold tracking-wide transition focus:outline-none focus:ring-2 focus:ring-sky-400/50",
        v,
        className,
      )}
    >
      {children}
    </a>
  );
}
