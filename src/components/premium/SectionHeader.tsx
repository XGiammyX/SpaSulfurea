import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  overline?: string;
  title: string;
  description?: string | ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export default function SectionHeader({
  overline,
  title,
  description,
  align = "center",
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        align === "center" && "text-center",
        className
      )}
    >
      {overline && (
        <p className="overline mb-3">{overline}</p>
      )}
      <h2 className={cn("text-balance", titleClassName)}>{title}</h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-muted-foreground",
            align === "center" && "mx-auto max-w-xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
