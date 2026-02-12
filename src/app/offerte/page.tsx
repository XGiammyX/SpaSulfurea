import type { Metadata } from "next";
import { ArrowRight, Check, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, LuxuryButton } from "@/components/premium";
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
    <div className="bg-surface pt-24 md:pt-28">
      <div className="container-luxury">
        <Breadcrumb items={[{ name: "Offerte", href: "/offerte" }]} />

        <FadeIn>
          <div className="pb-8">
            <p className="overline">Offerte Speciali</p>
            <h1 className="mt-3">Offerte e pacchetti</h1>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              Esperienze pensate per regalare o regalarti momenti di benessere autentico
              a Palinuro, nel Cilento.
            </p>
          </div>
        </FadeIn>
      </div>

      <section className="pb-20 md:pb-28">
        <div className="container-luxury">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {enabledOffers.map((offer, i) => (
              <FadeIn key={offer.slug} delay={i * 0.1}>
                <Card className="flex h-full flex-col border-luxury bg-white shadow-soft transition-shadow duration-300 hover:shadow-premium">
                  <CardContent className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2">
                      <Gift className="h-5 w-5 text-brand-tan" />
                      <span className="overline">Pacchetto</span>
                    </div>
                    <h2 className="mt-3">{offer.name}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {offer.description}
                    </p>
                    <div className="mt-5">
                      <p className="overline">Include</p>
                      <ul className="mt-3 space-y-2">
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
                      <p className="mt-5 font-display text-2xl text-brand-brown-dark">
                        €{offer.price}
                        {offer.validUntil && (
                          <span className="ml-2 text-sm font-normal text-muted-foreground">
                            per persona
                          </span>
                        )}
                      </p>
                    )}
                    <div className="mt-6">
                      <LuxuryButton
                        href={`/prenota?pacchetto=${offer.slug}`}
                        className="w-full"
                      >
                        Verifica disponibilità <ArrowRight className="ml-2 h-4 w-4" />
                      </LuxuryButton>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          {/* Gift section */}
          <FadeIn>
            <div className="mt-16 rounded-2xl border-luxury bg-white p-10 text-center shadow-soft">
              <Gift className="mx-auto h-10 w-10 text-brand-tan" />
              <h2 className="mt-5">Regala un&apos;esperienza</h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                Un buono regalo Sulfurea è il modo perfetto per donare un momento di
                benessere. Contattaci per personalizzare il tuo regalo.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <LuxuryButton href="/contatti">
                  Richiedi buono regalo
                </LuxuryButton>
                <LuxuryButton
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  variant="secondary"
                >
                  Chiamaci
                </LuxuryButton>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
