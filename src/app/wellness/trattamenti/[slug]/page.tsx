import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Users, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HeroLuxury, FadeIn, LuxuryButton } from "@/components/premium";
import Breadcrumb from "@/components/Breadcrumb";
import { FAQJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/site.config";

const treatmentImages: Record<string, string> = {
  "percorso-spa": "/images/percorso-spa.jpg",
  "bagno-turco": "/images/gallery-3.jpg",
  "sauna-finlandese": "/images/gallery-4.jpg",
  "piscina-termale": "/images/gallery-1.jpg",
  "massaggio-rilassante": "/images/massaggio.jpg",
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getExperience(slug: string) {
  return siteConfig.experiences.find((e) => e.slug === slug && e.enabled);
}

export async function generateStaticParams() {
  return siteConfig.experiences
    .filter((e) => e.enabled)
    .map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const exp = getExperience(slug);
  if (!exp) return {};

  return {
    title: `${exp.name} — Trattamento wellness`,
    description: exp.shortDescription,
    alternates: {
      canonical: `${siteConfig.url}/wellness/trattamenti/${slug}`,
    },
    openGraph: {
      title: `${exp.name} | Sulfurea SPA`,
      description: exp.shortDescription,
      url: `${siteConfig.url}/wellness/trattamenti/${slug}`,
    },
  };
}

export default async function TreatmentPage({ params }: PageProps) {
  const { slug } = await params;
  const exp = getExperience(slug);
  if (!exp) notFound();

  const faqItems = exp.faq.map((f) => ({ question: f.q, answer: f.a }));
  const otherExperiences = siteConfig.experiences.filter(
    (e) => e.enabled && e.slug !== slug
  );

  return (
    <>
      <FAQJsonLd faqs={faqItems} />

      <HeroLuxury
        image={treatmentImages[slug]}
        imageAlt={exp.name}
        title={exp.name}
        subtitle={exp.duration ? `Durata: ${exp.duration}` : undefined}
        minHeight="min-h-[45vh] md:min-h-[55vh]"
      >
        <Badge className="bg-white/20 text-white backdrop-blur-sm capitalize border-0">
          {exp.category}
        </Badge>
      </HeroLuxury>

      <div className="container-luxury">
        <Breadcrumb
          items={[
            { name: "Wellness", href: "/wellness" },
            { name: exp.name, href: `/wellness/trattamenti/${slug}` },
          ]}
        />
      </div>

      {/* Content */}
      <section className="relative bg-surface py-16 md:py-24 radial-glow-top">
        <div className="container-luxury">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              <FadeIn>
                <div>
                  <p className="overline">Il Trattamento</p>
                  <h2 className="mt-3">{exp.name}</h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <div>
                  <p className="overline">Cosa Aspettarsi</p>
                  <h2 className="mt-3">Il tuo percorso</h2>
                  <ul className="mt-5 space-y-4">
                    {exp.expectations.map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-brand-beige text-xs font-semibold text-brand-brown">
                          {i + 1}
                        </span>
                        <span className="text-sm leading-relaxed text-muted-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn>
                <div>
                  <p className="overline">Benefici</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.benefits.map((b) => (
                      <span
                        key={b}
                        className="flex items-center gap-1.5 rounded-xl bg-brand-beige px-3.5 py-2 text-sm text-brand-brown"
                      >
                        <Check className="h-3.5 w-3.5" />
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn>
                <div>
                  <p className="overline">Ideale Per</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.idealFor.map((item) => (
                      <span
                        key={item}
                        className="flex items-center gap-1.5 rounded-xl border-luxury bg-white px-3.5 py-2 text-sm text-brand-brown"
                      >
                        <Users className="h-3.5 w-3.5" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {exp.faq.length > 0 && (
                <FadeIn>
                  <div>
                    <p className="overline">Domande Frequenti</p>
                    <Accordion type="single" collapsible className="mt-4">
                      {exp.faq.map((item, i) => (
                        <AccordionItem
                          key={i}
                          value={`faq-${i}`}
                          className="border-brand-beige-dark/30"
                        >
                          <AccordionTrigger className="text-left text-sm font-medium text-brand-brown-dark hover:text-brand-brown hover:no-underline md:text-base">
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-sm leading-relaxed text-muted-foreground md:text-base">
                            {item.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </FadeIn>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA card */}
                <FadeIn direction="right">
                  <div className="rounded-2xl border-luxury bg-white p-6 shadow-soft">
                    <h3>Prenota {exp.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Verifica la disponibilità e riserva il tuo posto.
                    </p>

                    <div className="mt-5">
                      <p className="overline">Include</p>
                      <ul className="mt-3 space-y-2">
                        {exp.includes.map((inc) => (
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

                    <div className="mt-6">
                      <LuxuryButton
                        href={`/prenota?esperienza=${exp.slug}`}
                        className="w-full"
                      >
                        Verifica disponibilità{" "}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </LuxuryButton>
                    </div>
                    <p className="mt-3 text-center text-xs text-muted-foreground">
                      Cancellazione gratuita fino a {siteConfig.booking.cancellationHours}h prima
                    </p>
                  </div>
                </FadeIn>

                {otherExperiences.length > 0 && (
                  <FadeIn direction="right" delay={0.1}>
                    <div className="rounded-2xl border-luxury bg-white p-6 shadow-soft">
                      <p className="overline">Scopri Anche</p>
                      <ul className="mt-3 space-y-2">
                        {otherExperiences.slice(0, 3).map((other) => (
                          <li key={other.slug}>
                            <Link
                              href={`/wellness/trattamenti/${other.slug}`}
                              className="flex items-center justify-between rounded-xl px-2 py-2 text-sm text-brand-brown transition-colors hover:bg-brand-beige"
                            >
                              {other.name}
                              <ChevronRight className="h-3.5 w-3.5" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
