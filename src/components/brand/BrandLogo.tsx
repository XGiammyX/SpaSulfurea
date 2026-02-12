import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "header" | "footer";
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
  className?: string;
}

const sizeMap = {
  sm: "h-8 md:h-9",
  md: "h-10 md:h-12",
  lg: "h-12 md:h-14",
} as const;

export default function BrandLogo({
  variant = "header",
  size = "md",
  inverted = false,
  className,
}: BrandLogoProps) {
  return (
    <Image
      src="/logo no bg.png"
      alt="Sulfurea Wellness & SPA"
      width={200}
      height={65}
      className={cn(
        "w-auto transition-all duration-300",
        sizeMap[size],
        inverted && "brightness-0 invert",
        variant === "footer" && "opacity-90",
        className
      )}
      priority={variant === "header"}
    />
  );
}
