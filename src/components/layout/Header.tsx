"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/site.config";
import { trackEvent } from "@/lib/tracking";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/sulfurea", label: "Sulfurea" },
  { href: "/wellness", label: "Wellness" },
  { href: "/hotel", label: "Hotel" },
  { href: "/territorio", label: "Territorio" },
  { href: "/contatti", label: "Contatti" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHeroPage = pathname === "/" || pathname === "/sulfurea" || pathname === "/wellness" || pathname === "/hotel" || pathname === "/territorio";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBg = scrolled || !isHeroPage
    ? "bg-white/90 backdrop-blur-xl shadow-soft border-b border-brand-beige-dark/20"
    : "bg-transparent";

  const textColor = scrolled || !isHeroPage ? "text-brand-brown-dark" : "text-white";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        headerBg
      )}
    >
      <div className="container-luxury flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center gap-2">
          <span
            className={cn(
              "font-display text-xl tracking-wide transition-colors duration-300 md:text-2xl",
              textColor
            )}
          >
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigazione principale">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200",
                pathname === item.href
                  ? scrolled || !isHeroPage
                    ? "bg-brand-beige text-brand-brown-dark"
                    : "bg-white/15 text-white"
                  : scrolled || !isHeroPage
                    ? "text-brand-brown hover:bg-brand-beige/60 hover:text-brand-brown-dark"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
            className={cn(
              "flex items-center gap-1.5 text-sm font-medium transition-colors",
              textColor
            )}
            aria-label="Chiama"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden xl:inline">{siteConfig.contact.phone}</span>
          </a>
          <Button
            asChild
            size="sm"
            className="rounded-xl bg-brand-brown text-white hover:bg-brand-brown-dark"
            onClick={() => trackEvent("header_prenota_click")}
          >
            <Link href="/prenota">Prenota ora</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            asChild
            size="sm"
            className="rounded-xl bg-brand-brown text-white hover:bg-brand-brown-dark"
            onClick={() => trackEvent("header_prenota_click")}
          >
            <Link href="/prenota">Prenota</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
                  textColor
                )}
                aria-label="Apri menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white p-0">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-brand-beige-dark/20 px-6 py-5">
                  <span className="font-display text-lg text-brand-brown-dark">
                    {siteConfig.name}
                  </span>
                  <SheetClose asChild>
                    <button className="rounded-xl p-1.5 text-brand-brown hover:bg-brand-beige" aria-label="Chiudi menu">
                      <X className="h-5 w-5" />
                    </button>
                  </SheetClose>
                </div>
                <nav className="flex flex-1 flex-col gap-1 p-5" aria-label="Menu mobile">
                  <AnimatePresence>
                    {navItems.map((item, i) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "flex rounded-xl px-4 py-3 text-base font-medium transition-all duration-200",
                            pathname === item.href
                              ? "bg-brand-beige text-brand-brown-dark"
                              : "text-brand-brown hover:bg-brand-beige/60"
                          )}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </nav>
                <div className="border-t border-brand-beige-dark/20 p-5">
                  <Button
                    asChild
                    className="w-full rounded-xl bg-brand-brown text-white hover:bg-brand-brown-dark"
                    onClick={() => {
                      trackEvent("header_prenota_click");
                      setOpen(false);
                    }}
                  >
                    <Link href="/prenota">Prenota ora</Link>
                  </Button>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    className="mt-3 flex items-center justify-center gap-2 text-sm text-brand-brown"
                  >
                    <Phone className="h-4 w-4" />
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
