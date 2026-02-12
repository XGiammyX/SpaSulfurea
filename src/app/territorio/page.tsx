import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mountain, Compass, UtensilsCrossed, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import MockMedia from "@/components/MockMedia";
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
    icon: Anchor,
    title: "Mare e grotte",
    text: "Le grotte di Capo Palinuro, la spiaggia del Buondormire e le acque turchesi della costa cilentana sono raggiungibili in pochi minuti.",
  },
  {
    icon: Mountain,
    title: "Trekking e natura",
    text: "Il Parco Nazionale del Cilento offre sentieri tra boschi, cascate e vette panoramiche per ogni livello di esperienza.",
  },
  {
    icon: Compass,
    title: "Borghi e cultura",
    text: "Pisciotta, Castellabate, Acciaroli: borghi dove il tempo scorre lento, tra vicoli in pietra e piazze affacciate sul mare.",
  },
  {
    icon: UtensilsCrossed,
    title: "Sapori autentici",
    text: "Il Cilento è la culla della Dieta Mediterranea. Olio d'oliva, mozzarella di bufala, alici e prodotti dell'orto: ogni pasto è un'esperienza.",
  },
];

export default function TerritorioPage() {
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
            Il territorio
          </p>
          <h1 className="mt-2 max-w-xl font-display text-4xl leading-tight text-white md:text-5xl">
            Cilento
          </h1>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
            {siteConfig.territory.description}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Breadcrumb items={[{ name: "Territorio", href: "/territorio" }]} />
      </div>

      {/* Highlights */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl tracking-tight md:text-4xl">
            Cosa vivere nel Cilento
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-base text-muted-foreground">
            Un territorio patrimonio UNESCO che unisce mare, montagna, storia e
            gastronomia in un paesaggio unico.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {experiences.map((exp) => (
              <div
                key={exp.title}
                className="flex gap-5 rounded-xl border border-brand-beige-dark/40 bg-white p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-beige">
                  <exp.icon className="h-5 w-5 text-brand-brown" />
                </div>
                <div>
                  <h3 className="font-display text-lg">{exp.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {exp.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Places grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl tracking-tight md:text-4xl">
            Luoghi da scoprire
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.territory.highlights.map((h) => (
              <div key={h.name} className="group">
                <MockMedia
                  ratio="4:3"
                  label={h.name}
                  gradient="dark"
                  className="rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <h3 className="mt-3 font-display text-lg">{h.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness + Territory */}
      <section className="bg-brand-beige py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-tan-dark">
                Benessere e territorio
              </p>
              <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">
                Il Cilento si vive con lentezza
              </h2>
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
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="bg-brand-brown text-white hover:bg-brand-brown-dark"
                >
                  <Link href="/prenota">
                    Prenota la tua esperienza <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-brand-brown text-brand-brown hover:bg-white"
                >
                  <Link href="/hotel">Soggiorna nel Cilento</Link>
                </Button>
              </div>
            </div>
            <MockMedia ratio="4:3" label="Cilento panorama" className="rounded-xl" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-brown py-16 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="font-display text-3xl tracking-tight text-white md:text-4xl">
            Vieni a scoprire il Cilento
          </h2>
          <p className="mt-4 text-base text-brand-tan-light/80">
            Prenota il tuo percorso benessere e vivi il territorio che lo ispira.
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
