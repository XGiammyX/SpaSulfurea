import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Bed, Utensils, MapPin, Waves } from "lucide-react";
import { HeroLuxury, SectionHeader, FadeIn, LuxuryButton } from "@/components/premium";
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

const hotelGallery = [
  { src: "/images/hotel-camera.jpg", alt: "Camera" },
  { src: "/images/hotel-vista.jpg", alt: "Vista mare" },
  { src: "/images/hotel-terrazza.jpg", alt: "Terrazza" },
  { src: "/images/hotel-colazione.jpg", alt: "Colazione" },
  { src: "/images/hotel-ingresso.jpg", alt: "Ingresso" },
  { src: "/images/hotel-piscina.jpg", alt: "Piscina hotel" },
];

export default function HotelPage() {
  return (
    <>
      <HeroLuxury
        image="/images/hero-hotel.jpg"
        imageAlt="Hotel La Torre Palinuro"
        overline="Completa l'esperienza"
        title={siteConfig.hotel.name}
        subtitle={siteConfig.hotel.description}
        minHeight="min-h-[55vh] md:min-h-[65vh]"
      />

      <div className="container-luxury">
        <Breadcrumb items={[{ name: "Hotel", href: "/hotel" }]} />
      </div>

      {/* Features */}
      <section className="relative bg-surface py-20 md:py-28 radial-glow-top">
        <div className="container-luxury">
          <FadeIn>
            <SectionHeader
              overline="I Vantaggi"
              title="Perché scegliere Hotel La Torre"
              description="Un soggiorno che si integra perfettamente con la tua esperienza di benessere a Sulfurea."
            />
          </FadeIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.08}>
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-beige">
                    <f.icon className="h-6 w-6 text-brand-brown" />
                  </div>
                  <h3 className="mt-5">{f.title}</h3>
                  <p className="mx-auto mt-2 text-sm leading-relaxed text-muted-foreground">
                    {f.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-luxury">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/hotel-vista.jpg"
                  alt="Hotel La Torre vista mare"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="noise-overlay absolute inset-0" />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <p className="overline">Pacchetto Combinato</p>
                <h2 className="mt-3">Soggiorno + SPA</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Unisci il comfort dell&apos;Hotel La Torre con il percorso benessere di
                  Sulfurea SPA. Un&apos;esperienza completa per vivere il Cilento con
                  lentezza: giornate tra mare, relax e natura.
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  I pacchetti combinati includono pernottamento, colazione e accesso al
                  percorso SPA completo per due persone.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <LuxuryButton href="/prenota?pacchetto=cilento-relax">
                    Verifica disponibilità <ArrowRight className="ml-2 h-4 w-4" />
                  </LuxuryButton>
                  {siteConfig.hotel.url && (
                    <LuxuryButton href={siteConfig.hotel.url} external variant="secondary">
                      Sito Hotel La Torre
                    </LuxuryButton>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative bg-brand-beige py-20 md:py-28 noise-overlay">
        <div className="container-luxury relative z-10">
          <FadeIn>
            <SectionHeader
              overline="L'Hotel"
              title="Scorci dall'hotel"
            />
          </FadeIn>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {hotelGallery.map((img, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-brown py-20 text-white md:py-28">
        <div className="noise-overlay absolute inset-0" />
        <div className="container-luxury relative z-10 text-center">
          <FadeIn>
            <h2 className="text-white">Prenota il tuo soggiorno benessere</h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-brand-tan-light/75">
              Hotel La Torre + Sulfurea SPA: il modo migliore per vivere il Cilento.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <LuxuryButton href="/prenota" size="lg" className="bg-white text-brand-brown-dark hover:bg-brand-beige">
                Prenota ora <ArrowRight className="ml-2 h-4 w-4" />
              </LuxuryButton>
              <LuxuryButton href="/contatti" size="lg" variant="secondary" className="border-white/15 text-white hover:bg-white/10 hover:text-white">
                Contattaci
              </LuxuryButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
