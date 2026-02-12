import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { HeroLuxury, SectionHeader, TreatmentCard, FadeIn, LuxuryButton } from "@/components/premium";
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

const treatmentImages: Record<string, string> = {
  "percorso-spa": "/images/percorso-spa.jpg",
  "massaggio-rilassante": "/images/massaggio.jpg",
};

export default function WellnessPage() {
  const enabledExperiences = siteConfig.experiences.filter((e) => e.enabled);

  return (
    <>
      <HeroLuxury
        image="/images/hero-wellness.jpg"
        imageAlt="Wellness Sulfurea SPA"
        overline="Wellness Rituals"
        title="Wellness"
        subtitle="Ogni trattamento è un passo verso il benessere. Scegli il tuo percorso e lasciati guidare."
        minHeight="min-h-[50vh] md:min-h-[60vh]"
      />

      <div className="container-luxury">
        <Breadcrumb items={[{ name: "Wellness", href: "/wellness" }]} />
      </div>

      {/* Filters + Treatments */}
      <section className="relative bg-surface py-16 md:py-24 radial-glow-top">
        <div className="container-luxury">
          {/* Category pills */}
          <FadeIn>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Badge
                  key={cat.key}
                  variant={cat.key === "all" ? "default" : "outline"}
                  className={
                    cat.key === "all"
                      ? "bg-brand-brown text-white hover:bg-brand-brown-dark cursor-pointer rounded-xl px-4 py-1.5"
                      : "border-brand-beige-dark text-brand-brown hover:bg-brand-beige cursor-pointer rounded-xl px-4 py-1.5"
                  }
                >
                  {cat.label}
                </Badge>
              ))}
            </div>
          </FadeIn>

          {/* Grid */}
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {enabledExperiences.map((exp) => (
              <TreatmentCard
                key={exp.slug}
                slug={exp.slug}
                name={exp.name}
                category={exp.category}
                duration={exp.duration}
                shortDescription={exp.shortDescription}
                image={treatmentImages[exp.slug]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-brown py-20 text-white md:py-28">
        <div className="noise-overlay absolute inset-0" />
        <div className="container-luxury relative z-10 text-center">
          <FadeIn>
            <h2 className="text-white">Non sai quale percorso scegliere?</h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-brand-tan-light/75">
              Contattaci e ti aiuteremo a trovare l&apos;esperienza perfetta per te.
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
