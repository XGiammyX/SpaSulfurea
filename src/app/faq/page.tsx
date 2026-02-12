import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn, LuxuryButton } from "@/components/premium";
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
    <div className="bg-surface pt-24 md:pt-28">
      <FAQJsonLd faqs={siteConfig.faq} />

      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <Breadcrumb items={[{ name: "FAQ", href: "/faq" }]} />

        <FadeIn>
          <div className="pb-8">
            <p className="overline">Informazioni Utili</p>
            <h1 className="mt-3">Domande frequenti</h1>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Tutto quello che serve sapere prima della tua visita a Sulfurea SPA.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <Accordion type="single" collapsible className="pb-12">
            {siteConfig.faq.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-brand-beige-dark/30"
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
        </FadeIn>

        <FadeIn>
          <div className="border-t border-brand-beige-dark/30 py-12 text-center">
            <h2>Non trovi la risposta?</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Contattaci direttamente, siamo a disposizione per qualsiasi domanda.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <LuxuryButton href="/contatti">
                Contattaci <ArrowRight className="ml-2 h-4 w-4" />
              </LuxuryButton>
              <LuxuryButton href="/prenota" variant="secondary">
                Prenota ora
              </LuxuryButton>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="h-8" />
    </div>
  );
}
