"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/site.config";
import { trackEvent } from "@/lib/tracking";

export default function MobileBookingBar() {
  const pathname = usePathname();

  if (pathname === "/prenota") return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-brand-beige-dark/15 bg-white/90 backdrop-blur-xl lg:hidden">
      <div className="flex h-[60px] items-center gap-2.5 px-4">
        <Link
          href="/prenota"
          onClick={() => trackEvent("sticky_prenota_click")}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-brown py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-brown-dark"
        >
          Prenota ora
        </Link>
        <a
          href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
          className="flex h-11 w-11 items-center justify-center rounded-xl border-luxury bg-white text-brand-brown transition-colors hover:bg-brand-beige"
          aria-label="Chiama"
        >
          <Phone className="h-4 w-4" />
        </a>
        <a
          href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("sticky_whatsapp_click")}
          className="flex h-11 w-11 items-center justify-center rounded-xl border-luxury bg-white text-brand-brown transition-colors hover:bg-brand-beige"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-4 w-4" />
        </a>
      </div>
      {/* Safe area spacer for notch devices */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </div>
  );
}
