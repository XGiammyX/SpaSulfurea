import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MockMedia from "@/components/MockMedia";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Wellness — Trattamenti e percorsi",
  description:
    "Scopri tutti i trattamenti wellness di Sulfurea SPA a Palinuro: bagno turco, sauna finlandese, piscina termale, massaggi e percorsi benessere nel Cilento.",
  alternates: { canonical: `${siteConfig.url}/wellness` },
  openGraph: {
    title: "Wellness — Trattamenti e percorsi | Sulfurea SPA",
    description:
      "Bagno turco, sauna finlandese, piscina termale e massaggi a Palinuro. Scopri i trattamenti di Sulfurea SPA.",
    url: `${siteConfig.url}/wellness`,
  },
};

const categories = [
  { key: "all", label: "Tutti" },
  { key: "percorso", label: "Percorso" },
  { key: "calore", label: "Calore" },
  { key: "acqua", label: "Acqua" },
  { key: "relax", label: "Relax" },
] as const;

export default function WellnessPage() {
  const enabledExperiences = siteConfig.experiences.filter((e) => e.enabled);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-end md:min-h-[60vh]">
        <MockMedia
          ratio="16:9"
          className="!absolute inset-0 !aspect-auto h-full"
          gradient="dark"
          overlay
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-dark/70 via-brand-brown-dark/20 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-32 md:px-6 lg:px-8">
          <h1 className="max-w-xl font-display text-4xl leading-tight text-white md:text-5xl">
            Wellness
          </h1>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
            Ogni trattamento è un passo verso il benessere. Scegli il tuo percorso e
            lasciati guidare.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Breadcrumb items={[{ name: "Wellness", href: "/wellness" }]} />
      </div>

      {/* Filters + Treatments */}
      <section className="bg-surface py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Badge
                key={cat.key}
                variant={cat.key === "all" ? "default" : "outline"}
                className={
                  cat.key === "all"
                    ? "bg-brand-brown text-white hover:bg-brand-brown-dark cursor-pointer"
                    : "border-brand-beige-dark text-brand-brown hover:bg-brand-beige cursor-pointer"
                }
              >
                {cat.label}
              </Badge>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {enabledExperiences.map((exp) => (
              <Card
                key={exp.slug}
                className="group overflow-hidden border-brand-beige-dark/40 bg-white transition-shadow hover:shadow-lg"
              >
                <MockMedia
                  ratio="4:3"
                  label={exp.name}
                  gradient="dark"
                  className="transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <CardContent className="p-5">
                  <div className="flex items-center gap-2">
                    <h2 className="font-display text-lg">{exp.name}</h2>
                    {exp.duration && (
                      <span className="flex items-center gap-1 rounded-full bg-brand-beige px-2 py-0.5 text-xs text-brand-brown">
                        <Clock className="h-3 w-3" />
                        {exp.duration}
                      </span>
                    )}
                  </div>
                  <Badge
                    variant="outline"
                    className="mt-2 border-brand-tan/30 text-brand-tan-dark text-xs capitalize"
                  >
                    {exp.category}
                  </Badge>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {exp.shortDescription}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {exp.includes.slice(0, 3).map((inc) => (
                      <li
                        key={inc}
                        className="flex items-center gap-2 text-xs text-brand-brown"
                      >
                        <span className="h-1 w-1 rounded-full bg-brand-tan" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex gap-2">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-brand-beige-dark text-brand-brown hover:bg-brand-beige"
                    >
                      <Link href={`/wellness/trattamenti/${exp.slug}`}>
                        Dettagli <ChevronRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="bg-brand-brown text-white hover:bg-brand-brown-dark"
                    >
                      <Link href={`/prenota?esperienza=${exp.slug}`}>Prenota</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-brown py-16 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="font-display text-3xl tracking-tight text-white md:text-4xl">
            Non sai quale percorso scegliere?
          </h2>
          <p className="mt-4 text-base text-brand-tan-light/80">
            Contattaci e ti aiuteremo a trovare l&apos;esperienza perfetta per te.
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
