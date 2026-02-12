"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LuxuryButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg";
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

export default function LuxuryButton({
  href,
  children,
  variant = "primary",
  size = "default",
  className,
  external,
  onClick,
}: LuxuryButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-tan";

  const variants = {
    primary:
      "bg-brand-brown text-white hover:bg-brand-brown-dark active:scale-[0.98]",
    secondary:
      "border border-brand-brown/20 text-brand-brown bg-transparent hover:bg-brand-beige active:scale-[0.98]",
    ghost:
      "text-brand-brown hover:text-brand-brown-dark",
  };

  const sizes = {
    default: "h-11 rounded-xl px-6 text-sm",
    lg: "h-[52px] rounded-xl px-8 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        {children}
        {/* Subtle shine on hover */}
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
        </span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
      </span>
    </Link>
  );
}
