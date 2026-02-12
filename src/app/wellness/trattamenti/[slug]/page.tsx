import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MockMedia from "@/components/MockMedia";
import Breadcrumb from "@/components/Breadcrumb";
import { FAQJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/site.config";

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

      {/* Hero */}
      <section className="relative flex min-h-[45vh] items-end md:min-h-[55vh]">
        <MockMedia
          ratio="16:9"
          className="!absolute inset-0 !aspect-auto h-full"
          gradient="dark"
          overlay
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-dark/70 via-brand-brown-dark/20 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-32 md:px-6 lg:px-8">
          <Badge className="mb-3 bg-brand-tan/80 text-white capitalize">
            {exp.category}
          </Badge>
          <h1 className="max-w-xl font-display text-3xl leading-tight text-white md:text-5xl">
            {exp.name}
          </h1>
          {exp.duration && (
            <p className="mt-2 text-sm text-white/70">Durata: {exp.duration}</p>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: "Wellness", href: "/wellness" },
            { name: exp.name, href: `/wellness/trattamenti/${slug}` },
          ]}
        />
      </div>

      {/* Content */}
      <section className="bg-surface py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <div>
                <h2 className="font-display text-2xl tracking-tight">
                  Il trattamento
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
              </div>

              {/* What to expect */}
              <div>
                <h2 className="font-display text-2xl tracking-tight">
                  Cosa aspettarsi
                </h2>
                <ul className="mt-4 space-y-3">
                  {exp.expectations.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-beige text-xs font-semibold text-brand-brown">
                        {i + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="font-display text-2xl tracking-tight">Benefici</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.benefits.map((b) => (
                    <span
                      key={b}
                      className="flex items-center gap-1.5 rounded-full bg-brand-beige px-3 py-1.5 text-sm text-brand-brown"
                    >
                      <Check className="h-3.5 w-3.5" />
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ideal for */}
              <div>
                <h2 className="font-display text-2xl tracking-tight">
                  Ideale per
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.idealFor.map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-1.5 rounded-full border border-brand-beige-dark bg-white px-3 py-1.5 text-sm text-brand-brown"
                    >
                      <Users className="h-3.5 w-3.5" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              {exp.faq.length > 0 && (
                <div>
                  <h2 className="font-display text-2xl tracking-tight">
                    Domande frequenti
                  </h2>
                  <Accordion type="single" collapsible className="mt-4">
                    {exp.faq.map((item, i) => (
                      <AccordionItem
                        key={i}
                        value={`faq-${i}`}
                        className="border-brand-beige-dark/40"
                      >
                        <AccordionTrigger className="text-left text-sm font-medium text-brand-brown-dark hover:text-brand-brown hover:no-underline">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA card */}
                <div className="rounded-xl border border-brand-beige-dark/40 bg-white p-6">
                  <h3 className="font-display text-xl">Prenota {exp.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Verifica la disponibilità e riserva il tuo posto.
                  </p>

                  {/* Includes */}
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-tan-dark">
                      Include
                    </p>
                    <ul className="mt-2 space-y-1.5">
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

                  <Button
                    asChild
                    className="mt-6 w-full bg-brand-brown text-white hover:bg-brand-brown-dark"
                  >
                    <Link href={`/prenota?esperienza=${exp.slug}`}>
                      Verifica disponibilità{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    Cancellazione gratuita fino a {siteConfig.booking.cancellationHours}h prima
                  </p>
                </div>

                {/* Other treatments */}
                {otherExperiences.length > 0 && (
                  <div className="rounded-xl border border-brand-beige-dark/40 bg-white p-6">
                    <h3 className="text-sm font-semibold text-brand-brown-dark">
                      Scopri anche
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {otherExperiences.slice(0, 3).map((other) => (
                        <li key={other.slug}>
                          <Link
                            href={`/wellness/trattamenti/${other.slug}`}
                            className="flex items-center justify-between rounded-lg px-2 py-1.5 text-sm text-brand-brown transition-colors hover:bg-brand-beige"
                          >
                            {other.name}
                            <ChevronRight className="h-3.5 w-3.5" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
