"use client";

import { type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  once?: boolean;
}

const directionMap: Record<string, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  none: { x: 0, y: 0 },
};

export default function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 10,
  duration = 0.4,
  once = true,
}: FadeInProps) {
  const dir = directionMap[direction];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: (dir.x ?? 0) * distance,
      y: (dir.y ?? 0) * distance,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
