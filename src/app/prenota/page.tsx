import type { Metadata } from "next";
import { Suspense } from "react";
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

export default function PrenotaPage() {
  return (
    <div className="bg-surface pt-24 md:pt-28">
      <div className="container-luxury">
        <Breadcrumb items={[{ name: "Prenota", href: "/prenota" }]} />
        <FadeIn>
          <div className="pb-6">
            <p className="overline">Prenota Online</p>
            <h1 className="mt-3">Prenota la tua esperienza</h1>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              Scegli l&apos;esperienza, seleziona le date e verifica la disponibilità.
              Nessun pagamento richiesto in questa fase.
            </p>
          </div>
        </FadeIn>
      </div>
      <Suspense fallback={<BookingFallback />}>
        <BookingFlow />
      </Suspense>
    </div>
  );
}
