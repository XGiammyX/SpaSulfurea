"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroLuxuryProps {
  image?: string;
  imageAlt?: string;
  overline?: string;
  title: string | ReactNode;
  subtitle?: string;
  children?: ReactNode;
  minHeight?: string;
  className?: string;
}

export default function HeroLuxury({
  image,
  imageAlt = "",
  overline,
  title,
  subtitle,
  children,
  minHeight = "min-h-[85vh]",
  className,
}: HeroLuxuryProps) {
  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden",
        minHeight,
        className
      )}
    >
      {/* Background image */}
      {image ? (
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-brown-dark via-brand-brown to-brand-tan" />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-dark/80 via-brand-brown-dark/30 to-brand-brown-dark/5" />

      {/* Noise texture */}
      <div className="noise-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container-luxury pb-16 pt-40 md:pb-20 md:pt-48 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-2xl"
          >
            {overline && (
              <p className="overline mb-4 text-brand-tan-light">{overline}</p>
            )}
            <h1 className="text-white">{title}</h1>
            {subtitle && (
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75 md:text-lg md:leading-relaxed">
                {subtitle}
              </p>
            )}
            {children && (
              <div className="mt-8">{children}</div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
