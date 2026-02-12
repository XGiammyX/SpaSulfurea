import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { ShieldCheck, Clock, Phone } from "lucide-react";
import { siteConfig } from "@/site.config";
import Breadcrumb from "@/components/Breadcrumb";
import { FadeIn } from "@/components/premium";
import { Skeleton } from "@/components/ui/skeleton";
import BookingFlow from "./BookingFlow";

export const metadata: Metadata = {
  title: "Prenota — Verifica disponibilità",
  description:
    "Prenota la tua esperienza benessere a Sulfurea SPA, Palinuro. Verifica disponibilità per percorso SPA, bagno turco, sauna e trattamenti nel Cilento.",
  alternates: { canonical: `${siteConfig.url}/prenota` },
  openGraph: {
    title: "Prenota | Sulfurea SPA",
    description:
      "Verifica disponibilità e prenota il tuo percorso benessere a Sulfurea SPA, Palinuro.",
    url: `${siteConfig.url}/prenota`,
  },
};

function BookingFallback() {
  return (
    <div className="container-luxury pb-20">
      <div className="flex justify-center gap-4 mb-10">
        <Skeleton className="h-10 w-36 rounded-xl bg-brand-beige/50" />
        <Skeleton className="h-10 w-36 rounded-xl bg-brand-beige/50" />
        <Skeleton className="h-10 w-36 rounded-xl bg-brand-beige/50" />
      </div>
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <Skeleton className="h-8 w-64 bg-brand-beige/50" />
          <div className="grid gap-4 sm:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-36 rounded-2xl bg-brand-beige/50" />
            ))}
          </div>
        </div>
        <div>
          <Skeleton className="h-72 rounded-2xl bg-brand-beige/50" />
        </div>
      </div>
    </div>
  );
}

const trustSignals = [
  { icon: ShieldCheck, text: "Nessun pagamento anticipato" },
  { icon: Clock, text: "Conferma rapida entro poche ore" },
  { icon: Phone, text: `Assistenza: ${siteConfig.contact.phone}` },
];

export default function PrenotaPage() {
  return (
    <>
      {/* Hero header */}
      <section className="relative overflow-hidden bg-brand-brown-dark pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-wellness.jpg"
            alt="Prenota Sulfurea SPA"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-brown-dark/60 to-brand-brown-dark" />
          <div className="noise-overlay absolute inset-0" />
        </div>
        <div className="container-luxury relative z-10">
          <Breadcrumb items={[{ name: "Prenota", href: "/prenota" }]} />
          <FadeIn>
            <p className="overline text-brand-tan-light">Prenota Online</p>
            <h1 className="mt-3 text-white">Prenota la tua esperienza</h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/65">
              Scegli l&apos;esperienza, seleziona le date e verifica la disponibilità.
              Nessun pagamento richiesto in questa fase.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              {trustSignals.map((s) => (
                <div key={s.text} className="flex items-center gap-2">
                  <s.icon className="h-4 w-4 text-brand-tan-light" />
                  <span className="text-sm text-white/60">{s.text}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Booking flow */}
      <div className="bg-surface pb-20 md:pb-28">
        <div className="container-luxury -mt-8 relative z-20">
          <Suspense fallback={<BookingFallback />}>
            <BookingFlow />
          </Suspense>
        </div>
      </div>
    </>
  );
}
