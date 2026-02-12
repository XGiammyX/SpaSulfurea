import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      <BreadcrumbJsonLd items={allItems} />
      <nav aria-label="Breadcrumb" className="py-3">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
          {allItems.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-brand-tan/60" />}
              {i === allItems.length - 1 ? (
                <span className="font-medium text-brand-brown-dark">{item.name}</span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-brand-brown-dark"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
