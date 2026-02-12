import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bed, Utensils, MapPin, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import MockMedia from "@/components/MockMedia";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Hotel La Torre Palinuro — Soggiorno e benessere",
  description:
    "Completa la tua esperienza wellness con un soggiorno all'Hotel La Torre di Palinuro. A pochi passi da Sulfurea SPA, nel cuore del Cilento.",
  alternates: { canonical: `${siteConfig.url}/hotel` },
  openGraph: {
    title: "Hotel La Torre Palinuro | Sulfurea SPA",
    description:
      "Soggiorno e benessere a Palinuro. Scopri i pacchetti Hotel La Torre + Sulfurea SPA.",
    url: `${siteConfig.url}/hotel`,
  },
};

const features = [
  {
    icon: Bed,
    title: "Camere confortevoli",
    text: "Ambienti curati nei dettagli, pensati per il massimo relax dopo una giornata in SPA.",
  },
  {
    icon: Utensils,
    title: "Colazione inclusa",
    text: "Prodotti locali e sapori del Cilento per iniziare la giornata con energia.",
  },
  {
    icon: Waves,
    title: "A due passi dal mare",
    text: "La costa di Palinuro a portata di mano: spiagge, grotte e acque cristalline.",
  },
  {
    icon: MapPin,
    title: "Posizione strategica",
    text: "Punto di partenza ideale per esplorare il Cilento e raggiungere Sulfurea SPA.",
  },
];

export default function HotelPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[55vh] items-end md:min-h-[65vh]">
        <MockMedia
          ratio="16:9"
          className="!absolute inset-0 !aspect-auto h-full"
          gradient="dark"
          overlay
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-dark/70 via-brand-brown-dark/20 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-32 md:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-tan-light">
            Completa l&apos;esperienza
          </p>
          <h1 className="mt-2 max-w-xl font-display text-4xl leading-tight text-white md:text-5xl">
            {siteConfig.hotel.name}
          </h1>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
            {siteConfig.hotel.description}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Breadcrumb items={[{ name: "Hotel", href: "/hotel" }]} />
      </div>

      {/* Features */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl tracking-tight md:text-4xl">
            Perché scegliere Hotel La Torre
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-base text-muted-foreground">
            Un soggiorno che si integra perfettamente con la tua esperienza di benessere a Sulfurea.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-beige">
                  <f.icon className="h-6 w-6 text-brand-brown" />
                </div>
                <h3 className="mt-4 font-display text-lg">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <MockMedia ratio="4:3" label="Hotel La Torre" className="rounded-xl" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-tan-dark">
                Pacchetto combinato
              </p>
              <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">
                Soggiorno + SPA
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Unisci il comfort dell&apos;Hotel La Torre con il percorso benessere di
                Sulfurea SPA. Un&apos;esperienza completa per vivere il Cilento con
                lentezza: giornate tra mare, relax e natura.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                I pacchetti combinati includono pernottamento, colazione e accesso al
                percorso SPA completo per due persone.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="bg-brand-brown text-white hover:bg-brand-brown-dark"
                >
                  <Link href="/prenota?pacchetto=cilento-relax">
                    Verifica disponibilità <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {siteConfig.hotel.url && (
                  <Button
                    asChild
                    variant="outline"
                    className="border-brand-brown text-brand-brown hover:bg-brand-beige"
                  >
                    <a
                      href={siteConfig.hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sito Hotel La Torre
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-brand-beige py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl tracking-tight md:text-4xl">
            Scorci dall&apos;hotel
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            <MockMedia ratio="4:3" label="Camera" className="rounded-lg" />
            <MockMedia ratio="4:3" label="Vista mare" className="rounded-lg" />
            <MockMedia ratio="4:3" label="Terrazza" className="rounded-lg" />
            <MockMedia ratio="4:3" label="Colazione" className="rounded-lg" />
            <MockMedia ratio="4:3" label="Ingresso" className="rounded-lg" />
            <MockMedia ratio="4:3" label="Piscina hotel" className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-brown py-16 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="font-display text-3xl tracking-tight text-white md:text-4xl">
            Prenota il tuo soggiorno benessere
          </h2>
          <p className="mt-4 text-base text-brand-tan-light/80">
            Hotel La Torre + Sulfurea SPA: il modo migliore per vivere il Cilento.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-brown-dark hover:bg-brand-beige"
            >
              <Link href="/prenota">
                Prenota ora <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contatti">Contattaci</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
