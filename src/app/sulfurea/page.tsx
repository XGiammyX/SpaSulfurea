import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Droplets, Flame, Wind, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import MockMedia from "@/components/MockMedia";
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
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end md:min-h-[70vh]">
        <MockMedia
          ratio="16:9"
          className="!absolute inset-0 !aspect-auto h-full"
          gradient="dark"
          overlay
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-dark/70 via-brand-brown-dark/20 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-32 md:px-6 lg:px-8">
          <h1 className="max-w-xl font-display text-4xl leading-tight text-white md:text-5xl">
            Sulfurea
          </h1>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
            Un luogo dove l&apos;acqua, il calore e il silenzio si incontrano per
            restituirti benessere autentico.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Breadcrumb items={[{ name: "Sulfurea", href: "/sulfurea" }]} />
      </div>

      {/* Identity */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-tan-dark">
                La nostra identità
              </p>
              <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">
                Benessere che nasce dalla terra
              </h2>
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
              <Button
                asChild
                className="mt-6 bg-brand-brown text-white hover:bg-brand-brown-dark"
              >
                <Link href="/wellness">
                  Scopri i percorsi <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <MockMedia ratio="4:3" label="Sulfurea interni" className="rounded-xl" />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl tracking-tight md:text-4xl">
            I quattro elementi del percorso
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-base text-muted-foreground">
            Ogni tappa di Sulfurea è guidata da un elemento naturale, per un&apos;esperienza
            completa e armoniosa.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-beige">
                  <p.icon className="h-6 w-6 text-brand-brown" />
                </div>
                <h3 className="mt-4 font-display text-xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-brand-beige py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <MockMedia ratio="4:3" label="Esperienza" className="rounded-xl" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-tan-dark">
                L&apos;esperienza
              </p>
              <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">
                Due ore per ritrovare te stesso
              </h2>
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
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="bg-brand-brown text-white hover:bg-brand-brown-dark"
                >
                  <Link href="/prenota">
                    Prenota ora <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-brand-brown text-brand-brown hover:bg-white"
                >
                  <Link href="/wellness">Dettagli trattamenti</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-brown py-16 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="font-display text-3xl tracking-tight text-white md:text-4xl">
            Vivi Sulfurea
          </h2>
          <p className="mt-4 text-base text-brand-tan-light/80">
            Prenota il tuo percorso di benessere nel cuore del Cilento.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 bg-white text-brand-brown-dark hover:bg-brand-beige"
          >
            <Link href="/prenota">
              Prenota ora <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
