import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  CalendarCheck,
  Sparkles,
  ArrowRight,
  MapPin,
  Check,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HeroLuxury, SectionHeader, TreatmentCard, FadeIn, LuxuryButton } from "@/components/premium";
import { FAQJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/site.config";

const treatmentImages: Record<string, string> = {
  "percorso-spa": "/images/percorso-spa.jpg",
  "bagno-turco": "/images/gallery-3.jpg",
  "sauna-finlandese": "/images/gallery-4.jpg",
  "piscina-termale": "/images/gallery-1.jpg",
  "massaggio-rilassante": "/images/massaggio.jpg",
};

export default function HomePage() {
  const enabledExperiences = siteConfig.experiences.filter((e) => e.enabled);
  const enabledOffers = siteConfig.offers.filter((o) => o.enabled);

  return (
    <>
      <FAQJsonLd faqs={siteConfig.faq} />

      {/* ══ HERO ══ */}
      <HeroLuxury
        image="/images/hero-home.jpg"
        imageAlt="Sulfurea SPA — piscina termale a Palinuro"
        title={
          <>
            Il tuo rifugio
            <br />
            <span className="text-brand-tan-light">di benessere</span>
          </>
        }
        subtitle="Percorsi termali, sauna e relax nel cuore del Cilento. Ti aspettiamo a Palinuro."
        minHeight="min-h-[85vh] md:min-h-[92vh]"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <LuxuryButton href="/prenota" size="lg">
            Prenota ora <ArrowRight className="ml-2 h-4 w-4" />
          </LuxuryButton>
          <LuxuryButton href="/wellness" variant="secondary" size="lg" className="border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white">
            Scopri la SPA
          </LuxuryButton>
        </div>

        {/* Mini booking launcher (desktop) — links to /prenota */}
        <Link
          href="/prenota"
          className="mt-8 hidden max-w-lg items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md transition-colors hover:bg-white/15 lg:flex"
        >
          <div className="flex-1 text-sm text-white/80">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-white/50">
              Prenota online
            </span>
            Verifica disponibilità e prenota la tua esperienza
          </div>
          <span className="flex h-11 items-center rounded-xl bg-white/90 px-5 text-sm font-semibold text-brand-brown-dark">
            Verifica
          </span>
        </Link>
      </HeroLuxury>

      {/* ══ TRUST BAR ══ */}
      <section className="border-b border-brand-beige-dark/20 bg-white py-6 md:py-8">
        <div className="container-luxury grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-8">
          {[
            { icon: CalendarCheck, title: "Prenotazione semplice", desc: "Disponibilità in pochi passaggi" },
            { icon: ShieldCheck, title: "Conferma rapida", desc: "Risposta entro poche ore" },
            { icon: Sparkles, title: "Benessere naturale", desc: "Percorsi tra mare e natura" },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-beige">
                <item.icon className="h-[18px] w-[18px] text-brand-brown" />
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-semibold leading-tight text-brand-brown-dark">{item.title}</p>
                <p className="text-[13px] leading-tight text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ TREATMENTS ══ */}
      <section className="relative bg-surface section-padding radial-glow-top">
        <div className="container-luxury">
          <SectionHeader
            overline="Wellness Rituals"
            title="Il tuo percorso di benessere"
            description="Ogni tappa — dal bagno turco alla piscina termale — è pensata per accompagnarti verso un profondo rilassamento."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-12 md:gap-8">
            {enabledExperiences.slice(0, 6).map((exp) => (
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
          <div className="mt-10 text-center">
            <LuxuryButton href="/wellness" variant="secondary">
              Tutti i trattamenti <ArrowRight className="ml-2 h-4 w-4" />
            </LuxuryButton>
          </div>
        </div>
      </section>

      {/* ══ SIGNATURE EXPERIENCE ══ */}
      <section className="bg-white section-padding">
        <div className="container-luxury">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/hero-sulfurea.jpg"
                alt="Il percorso Sulfurea"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="noise-overlay absolute inset-0" />
            </div>
            <div>
              <p className="overline">Sulfurea Experience</p>
              <h2 className="mt-3">Due ore per ritrovare te stesso</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Il percorso Sulfurea si sviluppa attraverso ambienti diversi: dal
                calore avvolgente del bagno turco al vigore della sauna finlandese,
                fino all&apos;immersione nella piscina termale e al riposo finale
                nell&apos;area relax.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Nessun orario da rispettare: segui il tuo ritmo.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LuxuryButton href="/prenota">
                  Prenota ora <ArrowRight className="ml-2 h-4 w-4" />
                </LuxuryButton>
                <LuxuryButton href="/sulfurea" variant="secondary">
                  Scopri Sulfurea
                </LuxuryButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ OFFERS ══ */}
      <section className="relative bg-brand-beige section-padding noise-overlay">
        <div className="container-luxury relative z-10">
          <SectionHeader
            overline="Offerte Speciali"
            title="Pacchetti e offerte"
            description="Esperienze pensate per regalare o regalarti momenti di puro relax."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:mt-12 md:gap-8">
            {enabledOffers.map((offer) => (
              <Card key={offer.slug} className="flex h-full flex-col border-luxury bg-white shadow-soft transition-shadow duration-300 hover:shadow-premium">
                <CardContent className="flex flex-1 flex-col p-6">
                  <h3>{offer.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {offer.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {offer.includes.map((inc) => (
                      <li key={inc} className="flex items-center gap-2 text-sm text-brand-brown">
                        <Check className="h-3.5 w-3.5 shrink-0 text-brand-tan" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <LuxuryButton href={`/prenota?pacchetto=${offer.slug}`} className="w-full">
                      Verifica disponibilità
                    </LuxuryButton>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <LuxuryButton href="/offerte" variant="secondary" className="border-brand-brown/20">
              Tutte le offerte <ArrowRight className="ml-2 h-4 w-4" />
            </LuxuryButton>
          </div>
        </div>
      </section>

      {/* ══ GALLERY ══ */}
      <section className="bg-white section-padding">
        <div className="container-luxury">
          <SectionHeader
            overline="L'Atmosfera"
            title="Scorci di Sulfurea"
            description="Vapori, acqua e luce naturale: il nostro percorso benessere."
          />
          <div className="mt-10 grid grid-cols-2 gap-2.5 md:grid-cols-4 md:mt-12 md:gap-3">
            {[
              { src: "/images/gallery-1.jpg", alt: "Area relax SPA", span: "" },
              { src: "/images/percorso-spa.jpg", alt: "Trattamento SPA", span: "" },
              { src: "/images/hero-wellness.jpg", alt: "Hot stone massage", span: "col-span-2 row-span-2" },
              { src: "/images/massaggio.jpg", alt: "Massaggio rilassante", span: "" },
              { src: "/images/hero-sulfurea.jpg", alt: "Olio essenziale", span: "" },
            ].map((img, i) => (
              <div key={i} className={img.span}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl md:rounded-2xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                    sizes={img.span ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOTEL CROSS-SELL ══ */}
      <section className="relative overflow-hidden bg-brand-brown-dark text-white section-padding">
        <div className="noise-overlay absolute inset-0" />
        <div className="container-luxury relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="overline text-brand-tan-light">Completa l&apos;esperienza</p>
              <h2 className="mt-3 text-white">{siteConfig.hotel.name}</h2>
              <p className="mt-4 text-base leading-relaxed text-brand-tan-light/75">
                {siteConfig.hotel.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LuxuryButton href="/hotel" className="bg-brand-tan text-brand-brown-dark hover:bg-brand-tan-light">
                  Scopri l&apos;hotel
                </LuxuryButton>
                {siteConfig.hotel.url && (
                  <LuxuryButton
                    href={siteConfig.hotel.url}
                    external
                    variant="secondary"
                    className="border-white/15 text-white hover:bg-white/10 hover:text-white"
                  >
                    Sito ufficiale <ArrowRight className="ml-2 h-4 w-4" />
                  </LuxuryButton>
                )}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/hotel-camera.jpg"
                alt="Hotel La Torre Palinuro"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ TERRITORY TEASER ══ */}
      <section className="relative bg-surface section-padding radial-glow-center">
        <div className="container-luxury">
          <SectionHeader
            overline="Il Territorio"
            title={siteConfig.territory.name}
            description={siteConfig.territory.description}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-12">
            {siteConfig.territory.highlights.map((h) => (
              <div key={h.name} className="rounded-2xl border-luxury bg-white p-5 shadow-soft transition-shadow duration-300 hover:shadow-premium md:p-6">
                <MapPin className="h-5 w-5 text-brand-tan" />
                <h3 className="mt-3">{h.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {h.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <LuxuryButton href="/territorio" variant="secondary">
              Esplora il Cilento <ArrowRight className="ml-2 h-4 w-4" />
            </LuxuryButton>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-3xl px-5 md:px-6">
          <SectionHeader
            title="Domande frequenti"
            description="Tutto quello che serve sapere prima della tua visita."
          />
          <Accordion type="single" collapsible className="mt-8 md:mt-10">
            {siteConfig.faq.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-brand-beige-dark/30">
                <AccordionTrigger className="text-left text-sm font-medium text-brand-brown-dark hover:text-brand-brown hover:no-underline md:text-base [&>svg]:shrink-0">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-8 text-center">
            <LuxuryButton href="/faq" variant="secondary">
              Tutte le domande
            </LuxuryButton>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="relative overflow-hidden bg-brand-brown py-16 text-white md:py-24">
        <div className="noise-overlay absolute inset-0" />
        <div className="absolute inset-0 radial-glow-center" />
        <div className="container-luxury relative z-10 text-center">
          <h2 className="text-white">Pronto a rilassarti?</h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-brand-tan-light/75">
            Prenota la tua esperienza oppure contattaci.
            Ti aspettiamo a Palinuro.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LuxuryButton href="/prenota" size="lg" className="bg-white text-brand-brown-dark hover:bg-brand-beige">
              Prenota ora <ArrowRight className="ml-2 h-4 w-4" />
            </LuxuryButton>
            <LuxuryButton href="/contatti" size="lg" variant="secondary" className="border-white/15 text-white hover:bg-white/10 hover:text-white">
              Contattaci
            </LuxuryButton>
          </div>
          <p className="mx-auto mt-8 text-sm text-brand-tan-light/40">
            {siteConfig.contact.phone} · {siteConfig.contact.email}
          </p>
        </div>
      </section>
    </>
  );
}
