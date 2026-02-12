import type { Metadata } from "next";
import { Suspense } from "react";
import { siteConfig } from "@/site.config";
import Breadcrumb from "@/components/Breadcrumb";
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
    <div className="mx-auto max-w-7xl px-4 pb-16 md:px-6 lg:px-8">
      <div className="flex justify-center gap-4 mb-8">
        <Skeleton className="h-9 w-32 rounded-full bg-brand-beige/50" />
        <Skeleton className="h-9 w-32 rounded-full bg-brand-beige/50" />
        <Skeleton className="h-9 w-32 rounded-full bg-brand-beige/50" />
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <Skeleton className="h-8 w-64 bg-brand-beige/50" />
          <div className="grid gap-3 sm:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-32 rounded-xl bg-brand-beige/50" />
            ))}
          </div>
        </div>
        <div>
          <Skeleton className="h-64 rounded-xl bg-brand-beige/50" />
        </div>
      </div>
    </div>
  );
}

export default function PrenotaPage() {
  return (
    <div className="bg-surface pt-20 md:pt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Breadcrumb items={[{ name: "Prenota", href: "/prenota" }]} />
        <div className="pb-4">
          <h1 className="font-display text-3xl tracking-tight md:text-4xl">
            Prenota la tua esperienza
          </h1>
          <p className="mt-2 max-w-xl text-base text-muted-foreground">
            Scegli l&apos;esperienza, seleziona le date e verifica la disponibilità.
            Nessun pagamento richiesto in questa fase.
          </p>
        </div>
      </div>
      <Suspense fallback={<BookingFallback />}>
        <BookingFlow />
      </Suspense>
    </div>
  );
}
