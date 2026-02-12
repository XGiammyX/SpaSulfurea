import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Mountain, Compass, UtensilsCrossed, Anchor } from "lucide-react";
import { HeroLuxury, SectionHeader, FeatureCard, FadeIn, LuxuryButton } from "@/components/premium";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Il Cilento — Territorio e natura",
  description:
    "Sulfurea SPA si trova nel cuore del Cilento, patrimonio UNESCO: mare cristallino, borghi antichi, Parco Nazionale e Dieta Mediterranea a Palinuro.",
  alternates: { canonical: `${siteConfig.url}/territorio` },
  openGraph: {
    title: "Il Cilento — Territorio e natura | Sulfurea SPA",
    description:
      "Scopri il Cilento: mare, borghi, natura e gastronomia a Palinuro. Il territorio che accoglie Sulfurea SPA.",
    url: `${siteConfig.url}/territorio`,
  },
};

const experiences = [
  {
    icon: <Anchor className="h-5 w-5 text-brand-brown" />,
    title: "Mare e grotte",
    text: "Le grotte di Capo Palinuro, la spiaggia del Buondormire e le acque turchesi della costa cilentana sono raggiungibili in pochi minuti.",
  },
  {
    icon: <Mountain className="h-5 w-5 text-brand-brown" />,
    title: "Trekking e natura",
    text: "Il Parco Nazionale del Cilento offre sentieri tra boschi, cascate e vette panoramiche per ogni livello di esperienza.",
  },
  {
    icon: <Compass className="h-5 w-5 text-brand-brown" />,
    title: "Borghi e cultura",
    text: "Pisciotta, Castellabate, Acciaroli: borghi dove il tempo scorre lento, tra vicoli in pietra e piazze affacciate sul mare.",
  },
  {
    icon: <UtensilsCrossed className="h-5 w-5 text-brand-brown" />,
    title: "Sapori autentici",
    text: "Il Cilento è la culla della Dieta Mediterranea. Olio d'oliva, mozzarella di bufala, alici e prodotti dell'orto: ogni pasto è un'esperienza.",
  },
];

const placeImages: Record<string, string> = {};

export default function TerritorioPage() {
  return (
    <>
      <HeroLuxury
        image="/images/hero-home.jpg"
        imageAlt="Costa del Cilento"
        overline="Il Territorio"
        title="Cilento"
        subtitle={siteConfig.territory.description}
        minHeight="min-h-[55vh] md:min-h-[65vh]"
      />

      <div className="container-luxury">
        <Breadcrumb items={[{ name: "Territorio", href: "/territorio" }]} />
      </div>

      {/* Highlights */}
      <section className="relative bg-surface py-20 md:py-28 radial-glow-top">
        <div className="container-luxury">
          <FadeIn>
            <SectionHeader
              overline="Esperienze"
              title="Cosa vivere nel Cilento"
              description="Un territorio patrimonio UNESCO che unisce mare, montagna, storia e gastronomia in un paesaggio unico."
            />
          </FadeIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {experiences.map((exp, i) => (
              <FeatureCard
                key={exp.title}
                icon={exp.icon}
                title={exp.title}
                description={exp.text}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Places grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-luxury">
          <FadeIn>
            <SectionHeader
              overline="Da Scoprire"
              title="Luoghi del Cilento"
            />
          </FadeIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.territory.highlights.map((h, i) => (
              <FadeIn key={h.name} delay={i * 0.08}>
                <div className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    {placeImages[h.name] ? (
                      <Image
                        src={placeImages[h.name]}
                        alt={h.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-brand-beige via-brand-tan-light/40 to-brand-beige-dark" />
                    )}
                  </div>
                  <h3 className="mt-4">{h.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {h.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness + Territory */}
      <section className="relative bg-brand-beige py-20 md:py-28 noise-overlay">
        <div className="container-luxury relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div>
                <p className="overline">Benessere e Territorio</p>
                <h2 className="mt-3">Il Cilento si vive con lentezza</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Sulfurea nasce in questo territorio non per caso. Il Cilento è da sempre
                  terra di benessere: acque termali, aria pura, alimentazione sana e un
                  ritmo di vita che invita a prendersi cura di sé.
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Dopo il percorso SPA, esplora le spiagge di Palinuro, passeggia nei
                  borghi o assapora la cucina locale. Ogni giornata nel Cilento è
                  un&apos;esperienza di benessere a tutto tondo.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <LuxuryButton href="/prenota">
                    Prenota la tua esperienza <ArrowRight className="ml-2 h-4 w-4" />
                  </LuxuryButton>
                  <LuxuryButton href="/hotel" variant="secondary">
                    Soggiorna nel Cilento
                  </LuxuryButton>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero-home.jpg"
                  alt="Costa del Cilento al tramonto"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
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
            <h2 className="text-white">Vieni a scoprire il Cilento</h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-brand-tan-light/75">
              Prenota il tuo percorso benessere e vivi il territorio che lo ispira.
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
