import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Offerte e pacchetti benessere",
  description:
    "Scopri le offerte e i pacchetti benessere di Sulfurea SPA a Palinuro. Fuga di coppia, giornata benessere e pacchetti hotel + SPA nel Cilento.",
  alternates: { canonical: `${siteConfig.url}/offerte` },
  openGraph: {
    title: "Offerte e pacchetti | Sulfurea SPA",
    description:
      "Pacchetti benessere esclusivi a Palinuro: percorso SPA, massaggi e soggiorno nel Cilento.",
    url: `${siteConfig.url}/offerte`,
  },
};

export default function OffertePage() {
  const enabledOffers = siteConfig.offers.filter((o) => o.enabled);

  return (
    <div className="bg-surface pt-20 md:pt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Breadcrumb items={[{ name: "Offerte", href: "/offerte" }]} />

        <div className="pb-6">
          <h1 className="font-display text-3xl tracking-tight md:text-4xl">
            Offerte e pacchetti
          </h1>
          <p className="mt-2 max-w-xl text-base text-muted-foreground">
            Esperienze pensate per regalare o regalarti momenti di benessere autentico
            a Palinuro, nel Cilento.
          </p>
        </div>
      </div>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {enabledOffers.map((offer) => (
              <Card
                key={offer.slug}
                className="flex flex-col border-brand-beige-dark/40 bg-white"
              >
                <CardContent className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-brand-tan" />
                    <Badge
                      variant="outline"
                      className="border-brand-tan/30 text-brand-tan-dark text-xs"
                    >
                      Pacchetto
                    </Badge>
                  </div>
                  <h2 className="mt-3 font-display text-2xl">{offer.name}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {offer.description}
                  </p>
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-tan-dark">
                      Include
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {offer.includes.map((inc) => (
                        <li
                          key={inc}
                          className="flex items-center gap-2 text-sm text-brand-brown"
                        >
                          <Check className="h-3.5 w-3.5 text-brand-tan" />
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {offer.price && (
                    <p className="mt-4 font-display text-2xl text-brand-brown-dark">
                      €{offer.price}
                      {offer.validUntil && (
                        <span className="ml-2 text-sm font-normal text-muted-foreground">
                          per persona
                        </span>
                      )}
                    </p>
                  )}
                  <Button
                    asChild
                    className="mt-5 w-full bg-brand-brown text-white hover:bg-brand-brown-dark"
                  >
                    <Link href={`/prenota?pacchetto=${offer.slug}`}>
                      Verifica disponibilità <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Gift section */}
          <div className="mt-16 rounded-xl border border-brand-beige-dark/40 bg-white p-8 text-center">
            <Gift className="mx-auto h-10 w-10 text-brand-tan" />
            <h2 className="mt-4 font-display text-2xl">Regala un&apos;esperienza</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Un buono regalo Sulfurea è il modo perfetto per donare un momento di
              benessere. Contattaci per personalizzare il tuo regalo.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                asChild
                className="bg-brand-brown text-white hover:bg-brand-brown-dark"
              >
                <Link href="/contatti">Richiedi buono regalo</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-brand-brown text-brand-brown hover:bg-brand-beige"
              >
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}>
                  Chiamaci
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
