import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Droplets, Flame, Wind, Heart } from "lucide-react";
import { HeroLuxury, SectionHeader, FadeIn, LuxuryButton, FeatureCard } from "@/components/premium";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Sulfurea — Identità ed esperienza",
  description:
    "Scopri Sulfurea SPA: un luogo di benessere naturale a Palinuro, nel Cilento. Percorsi di bagno turco, sauna, piscina termale e relax tra mare e natura.",
  alternates: { canonical: `${siteConfig.url}/sulfurea` },
  openGraph: {
    title: "Sulfurea — Identità ed esperienza",
    description:
      "Un luogo di benessere naturale a Palinuro, nel Cilento. Percorsi di bagno turco, sauna, piscina termale e relax.",
    url: `${siteConfig.url}/sulfurea`,
  },
};

const pillars = [
  {
    icon: Droplets,
    title: "Acqua",
    text: "L'acqua termale è il cuore di Sulfurea. La piscina e gli ambienti umidi avvolgono il corpo in un abbraccio rigenerante.",
  },
  {
    icon: Flame,
    title: "Calore",
    text: "Dalla sauna finlandese al bagno turco, il calore scioglie le tensioni e prepara il corpo a un rilassamento profondo.",
  },
  {
    icon: Wind,
    title: "Respiro",
    text: "L'aria arricchita da essenze naturali del Cilento accompagna ogni momento del percorso, dalla prima all'ultima tappa.",
  },
  {
    icon: Heart,
    title: "Equilibrio",
    text: "Il percorso Sulfurea è pensato per ritrovare armonia tra corpo e mente, senza fretta, con rispetto dei propri tempi.",
  },
];

export default function SulfureaPage() {
  return (
    <>
      <HeroLuxury
        image="/images/hero-sulfurea.jpg"
        imageAlt="Sulfurea SPA interni"
        title="Sulfurea"
        subtitle="Un luogo dove l'acqua, il calore e il silenzio si incontrano per restituirti benessere autentico."
        minHeight="min-h-[60vh] md:min-h-[70vh]"
      />

      <div className="container-luxury">
        <Breadcrumb items={[{ name: "Sulfurea", href: "/sulfurea" }]} />
      </div>

      {/* Identity */}
      <section className="relative bg-surface py-20 md:py-28 radial-glow-top">
        <div className="container-luxury">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div>
                <p className="overline">La Nostra Identità</p>
                <h2 className="mt-3">Benessere che nasce dalla terra</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Sulfurea nasce dall&apos;incontro tra la tradizione termale del Cilento e
                  un approccio contemporaneo al benessere. Non un semplice centro
                  wellness, ma uno spazio pensato per accompagnare ogni ospite in un
                  viaggio sensoriale autentico.
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Ogni dettaglio — dalla temperatura dell&apos;acqua alla scelta delle
                  essenze — è calibrato per offrire un&apos;esperienza che rispetti i ritmi
                  naturali del corpo e della mente.
                </p>
                <div className="mt-8">
                  <LuxuryButton href="/wellness">
                    Scopri i percorsi <ArrowRight className="ml-2 h-4 w-4" />
                  </LuxuryButton>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/gallery-1.jpg"
                  alt="Interni Sulfurea SPA"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="noise-overlay absolute inset-0" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-luxury">
          <FadeIn>
            <SectionHeader
              overline="I Quattro Elementi"
              title="I pilastri del percorso"
              description="Ogni tappa di Sulfurea è guidata da un elemento naturale, per un'esperienza completa e armoniosa."
            />
          </FadeIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-beige">
                    <p.icon className="h-6 w-6 text-brand-brown" />
                  </div>
                  <h3 className="mt-5">{p.title}</h3>
                  <p className="mx-auto mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="relative bg-brand-beige py-20 md:py-28 noise-overlay">
        <div className="container-luxury relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/percorso-spa.jpg"
                  alt="Esperienza Sulfurea"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <p className="overline">L&apos;Esperienza</p>
                <h2 className="mt-3">Due ore per ritrovare te stesso</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Il percorso Sulfurea dura circa due ore e si sviluppa attraverso ambienti
                  diversi: dal calore avvolgente del bagno turco al vigore della sauna
                  finlandese, fino all&apos;immersione nella piscina termale e al riposo
                  finale nell&apos;area relax.
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Non ci sono orari da rispettare all&apos;interno del percorso: ogni ospite
                  è libero di seguire il proprio ritmo, alternando le tappe come preferisce.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <LuxuryButton href="/prenota">
                    Prenota ora <ArrowRight className="ml-2 h-4 w-4" />
                  </LuxuryButton>
                  <LuxuryButton href="/wellness" variant="secondary">
                    Dettagli trattamenti
                  </LuxuryButton>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-brown py-20 text-white md:py-28">
        <div className="noise-overlay absolute inset-0" />
        <div className="container-luxury relative z-10 text-center">
          <FadeIn>
            <h2 className="text-white">Vivi Sulfurea</h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-brand-tan-light/75">
              Prenota il tuo percorso di benessere nel cuore del Cilento.
            </p>
            <div className="mt-8">
              <LuxuryButton href="/prenota" size="lg" className="bg-white text-brand-brown-dark hover:bg-brand-beige">
                Prenota ora <ArrowRight className="ml-2 h-4 w-4" />
              </LuxuryButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
