import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Breadcrumb from "@/components/Breadcrumb";
import { FAQJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Domande frequenti — FAQ",
  description:
    "Risposte alle domande più frequenti su Sulfurea SPA a Palinuro: prenotazione, cancellazione, cosa portare, durata, orari e politiche.",
  alternates: { canonical: `${siteConfig.url}/faq` },
  openGraph: {
    title: "Domande frequenti | Sulfurea SPA",
    description:
      "Tutto quello che devi sapere prima di visitare Sulfurea SPA a Palinuro.",
    url: `${siteConfig.url}/faq`,
  },
};

export default function FAQPage() {
  return (
    <div className="bg-surface pt-20 md:pt-24">
      <FAQJsonLd faqs={siteConfig.faq} />

      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <Breadcrumb items={[{ name: "FAQ", href: "/faq" }]} />

        <div className="pb-6">
          <h1 className="font-display text-3xl tracking-tight md:text-4xl">
            Domande frequenti
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            Tutto quello che serve sapere prima della tua visita a Sulfurea SPA.
          </p>
        </div>

        <Accordion type="single" collapsible className="pb-12">
          {siteConfig.faq.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-brand-beige-dark/40"
            >
              <AccordionTrigger className="text-left text-sm font-medium text-brand-brown-dark hover:text-brand-brown hover:no-underline md:text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="border-t border-brand-beige-dark/40 py-10 text-center">
          <h2 className="font-display text-2xl">Non trovi la risposta?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Contattaci direttamente, siamo a disposizione per qualsiasi domanda.
          </p>
          <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              className="bg-brand-brown text-white hover:bg-brand-brown-dark"
            >
              <Link href="/contatti">
                Contattaci <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-brand-brown text-brand-brown hover:bg-brand-beige"
            >
              <Link href="/prenota">Prenota ora</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Spacer for mobile bar */}
      <div className="h-8" />
    </div>
  );
}
