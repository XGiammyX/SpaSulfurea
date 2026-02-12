"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TreatmentCardProps {
  slug: string;
  name: string;
  category: string;
  duration: string;
  shortDescription: string;
  image?: string;
  className?: string;
}

export default function TreatmentCard({
  slug,
  name,
  category,
  duration,
  shortDescription,
  image,
  className,
}: TreatmentCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border-luxury bg-white shadow-soft transition-shadow duration-300 hover:shadow-premium",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-brand-beige via-brand-tan-light/40 to-brand-beige-dark" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Category badge */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wider text-brand-brown backdrop-blur-sm">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="leading-snug">{name}</h3>
          {duration && (
            <span className="mt-0.5 flex shrink-0 items-center gap-1 rounded-full bg-brand-beige px-2.5 py-1 text-xs font-medium text-brand-brown">
              <Clock className="h-3 w-3" />
              {duration}
            </span>
          )}
        </div>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
          {shortDescription}
        </p>
        <div className="mt-5 flex items-center gap-2">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-brand-beige-dark text-brand-brown hover:bg-brand-beige"
          >
            <Link href={`/wellness/trattamenti/${slug}`}>
              Scopri <ChevronRight className="ml-1 h-3 w-3" />
            </Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-brand-brown text-white hover:bg-brand-brown-dark"
          >
            <Link href={`/prenota?esperienza=${slug}`}>Prenota</Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
