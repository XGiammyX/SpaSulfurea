import { cn } from "@/lib/utils";

const ratioMap = {
  "16:9": "aspect-video",
  "4:3": "aspect-[4/3]",
  "1:1": "aspect-square",
  "3:4": "aspect-[3/4]",
  "21:9": "aspect-[21/9]",
} as const;

interface MockMediaProps {
  ratio?: keyof typeof ratioMap;
  alt?: string;
  overlay?: boolean;
  className?: string;
  label?: string;
  gradient?: "dark" | "light" | "none";
  children?: React.ReactNode;
}

export default function MockMedia({
  ratio = "16:9",
  alt = "Sulfurea SPA",
  overlay = true,
  className,
  label,
  gradient = "dark",
  children,
}: MockMediaProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-brand-beige-dark",
        ratioMap[ratio],
        className
      )}
      role="img"
      aria-label={alt}
    >
      {/* Placeholder pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-brown/20 via-brand-tan/30 to-brand-beige/40" />

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Gradient overlay */}
      {overlay && gradient !== "none" && (
        <div
          className={cn(
            "absolute inset-0",
            gradient === "dark"
              ? "bg-gradient-to-t from-brand-brown-dark/60 via-brand-brown/10 to-transparent"
              : "bg-gradient-to-t from-white/40 via-transparent to-transparent"
          )}
        />
      )}

      {/* Label placeholder */}
      {label && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-lg tracking-wide text-white/70 md:text-xl">
            {label}
          </span>
        </div>
      )}

      {/* Optional children overlay */}
      {children && (
        <div className="absolute inset-0 flex items-end">{children}</div>
      )}
    </div>
  );
}
