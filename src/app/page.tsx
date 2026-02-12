import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  CalendarCheck,
  Sparkles,
  ArrowRight,
  MapPin,
  Star,
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
  "bagno-turco": "/images/bagno-turco.jpg",
  "sauna-finlandese": "/images/sauna-finlandese.jpg",
  "piscina-termale": "/images/piscina-termale.jpg",
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
            Benessere naturale
            <br />
            <span className="text-brand-tan-light">nel cuore del Cilento</span>
          </>
        }
        subtitle="Sulfurea SPA ti accoglie con percorsi di bagno turco, sauna finlandese e piscina termale a Palinuro. Rigenera corpo e mente in un angolo di pace tra mare e natura."
        minHeight="min-h-[90vh] md:min-h-screen"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <LuxuryButton href="/prenota" size="lg">
            Prenota ora <ArrowRight className="ml-2 h-4 w-4" />
          </LuxuryButton>
          <LuxuryButton href="/wellness" variant="secondary" size="lg" className="border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white">
            Scopri il percorso
          </LuxuryButton>
        </div>

        {/* Mini booking launcher (desktop) */}
        <div className="mt-10 hidden max-w-xl rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md lg:block">
          <div className="flex items-end gap-4">
            <div className="flex-1">
              <label className="mb-1.5 block text-xs font-medium tracking-wide text-white/60">
                Esperienza
              </label>
              <div className="rounded-xl bg-white/90 px-3.5 py-2.5 text-sm text-brand-brown-dark">
                Percorso SPA
              </div>
            </div>
            <div className="flex-1">
              <label className="mb-1.5 block text-xs font-medium tracking-wide text-white/60">
                Data
              </label>
              <div className="rounded-xl bg-white/90 px-3.5 py-2.5 text-sm text-brand-brown/50">
                Seleziona data
              </div>
            </div>
            <div className="w-24">
              <label className="mb-1.5 block text-xs font-medium tracking-wide text-white/60">
                Persone
              </label>
              <div className="rounded-xl bg-white/90 px-3.5 py-2.5 text-sm text-brand-brown-dark">
                2
              </div>
            </div>
            <LuxuryButton href="/prenota">Verifica</LuxuryButton>
          </div>
        </div>
      </HeroLuxury>

      {/* ══ TRUST BAR ══ */}
      <section className="border-b border-brand-beige-dark/30 bg-white py-8 md:py-10">
        <div className="container-luxury flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-14">
          {[
            {
              icon: CalendarCheck,
              title: "Prenotazione semplice",
              desc: "Verifica disponibilità in pochi passaggi",
            },
            {
              icon: ShieldCheck,
              title: "Conferma rapida",
              desc: "Risposta entro poche ore",
            },
            {
              icon: Sparkles,
              title: "Benessere nel Cilento",
              desc: "Un'esperienza unica tra mare e natura",
            },
          ].map((item) => (
            <FadeIn key={item.title} direction="up" delay={0.1}>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-beige">
                  <item.icon className="h-5 w-5 text-brand-brown" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-brown-dark">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ══ TREATMENTS ══ */}
      <section className="relative bg-surface py-20 md:py-28 radial-glow-top">
        <div className="container-luxury">
          <FadeIn>
            <SectionHeader
              overline="Wellness Rituals"
              title="Il tuo percorso di benessere"
              description="Dalla sauna finlandese alla piscina termale: ogni tappa è pensata per accompagnarti verso un profondo rilassamento."
            />
          </FadeIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
          <FadeIn className="mt-10 text-center">
            <LuxuryButton href="/wellness" variant="secondary">
              Tutti i trattamenti <ArrowRight className="ml-2 h-4 w-4" />
            </LuxuryButton>
          </FadeIn>
        </div>
      </section>

      {/* ══ SIGNATURE EXPERIENCE (editorial) ══ */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="container-luxury">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/esperienza.jpg"
                  alt="Il percorso Sulfurea"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="noise-overlay absolute inset-0" />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <p className="overline">Sulfurea Experience</p>
                <h2 className="mt-3">Due ore per ritrovare te stesso</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Il percorso Sulfurea dura circa due ore e si sviluppa attraverso
                  ambienti diversi: dal calore avvolgente del bagno turco al vigore
                  della sauna finlandese, fino all&apos;immersione nella piscina
                  termale e al riposo finale nell&apos;area relax.
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Non ci sono orari da rispettare: ogni ospite è libero di seguire
                  il proprio ritmo, alternando le tappe come preferisce.
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
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ OFFERS ══ */}
      <section className="relative bg-brand-beige py-20 md:py-28 noise-overlay">
        <div className="container-luxury relative z-10">
          <FadeIn>
            <SectionHeader
              overline="Offerte Speciali"
              title="Pacchetti e offerte"
              description="Esperienze pensate per regalare o regalarti momenti di puro relax."
            />
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {enabledOffers.map((offer, i) => (
              <FadeIn key={offer.slug} delay={i * 0.1}>
                <Card className="flex h-full flex-col border-luxury bg-white shadow-soft transition-shadow duration-300 hover:shadow-premium">
                  <CardContent className="flex flex-1 flex-col p-6">
                    <h3>{offer.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {offer.description}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {offer.includes.map((inc) => (
                        <li
                          key={inc}
                          className="flex items-center gap-2 text-sm text-brand-brown"
                        >
                          <Check className="h-3.5 w-3.5 text-brand-tan" />
                          {inc}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <LuxuryButton
                        href={`/prenota?pacchetto=${offer.slug}`}
                        className="w-full"
                      >
                        Verifica disponibilità
                      </LuxuryButton>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-10 text-center">
            <LuxuryButton href="/offerte" variant="secondary" className="border-brand-brown/20">
              Tutte le offerte <ArrowRight className="ml-2 h-4 w-4" />
            </LuxuryButton>
          </FadeIn>
        </div>
      </section>

      {/* ══ GALLERY ══ */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-luxury">
          <FadeIn>
            <SectionHeader
              overline="L'Atmosfera"
              title="Scorci di Sulfurea"
              description="Il nostro percorso benessere, tra vapori, acqua e luce naturale."
            />
          </FadeIn>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[
              { src: "/images/gallery-1.jpg", alt: "Ingresso SPA", span: "" },
              { src: "/images/bagno-turco.jpg", alt: "Bagno turco", span: "" },
              { src: "/images/piscina-termale.jpg", alt: "Piscina termale", span: "col-span-2 row-span-2" },
              { src: "/images/sauna-finlandese.jpg", alt: "Sauna finlandese", span: "" },
              { src: "/images/gallery-2.jpg", alt: "Area relax", span: "" },
            ].map((img, i) => (
              <FadeIn key={i} delay={i * 0.05} className={img.span}>
                <div className="relative h-full min-h-[160px] overflow-hidden rounded-2xl md:min-h-[200px]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    sizes={img.span ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOTEL CROSS-SELL ══ */}
      <section className="relative overflow-hidden bg-brand-brown-dark py-20 text-white md:py-28">
        <div className="noise-overlay absolute inset-0" />
        <div className="container-luxury relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
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
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero-hotel.jpg"
                  alt="Hotel La Torre Palinuro"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ TERRITORY TEASER ══ */}
      <section className="relative bg-surface py-20 md:py-28 radial-glow-center">
        <div className="container-luxury">
          <FadeIn>
            <SectionHeader
              overline="Il Territorio"
              title={siteConfig.territory.name}
              description={siteConfig.territory.description}
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.territory.highlights.map((h, i) => (
              <FadeIn key={h.name} delay={i * 0.08}>
                <div className="rounded-2xl border-luxury bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-premium">
                  <MapPin className="h-5 w-5 text-brand-tan" />
                  <h3 className="mt-4">{h.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {h.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-10 text-center">
            <LuxuryButton href="/territorio" variant="secondary">
              Esplora il Cilento <ArrowRight className="ml-2 h-4 w-4" />
            </LuxuryButton>
          </FadeIn>
        </div>
      </section>

      {/* ══ REVIEWS ══ */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-luxury">
          <FadeIn>
            <SectionHeader
              overline="Ospiti Soddisfatti"
              title="Dicono di noi"
              description="Le esperienze dei nostri ospiti sono il miglior racconto di Sulfurea."
            />
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className="border-luxury bg-brand-beige/20 shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className="h-4 w-4 fill-brand-tan text-brand-tan"
                        />
                      ))}
                    </div>
                    <p className="mt-4 text-sm italic leading-relaxed text-muted-foreground">
                      &ldquo;Recensione in arrivo. Questo spazio è pronto per accogliere le
                      opinioni dei nostri ospiti da Google Reviews o inserimento manuale.&rdquo;
                    </p>
                    <p className="mt-4 text-xs font-medium text-brand-brown">
                      — Ospite verificato
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Domande frequenti"
              description="Tutto quello che serve sapere prima della tua visita."
            />
          </FadeIn>
          <FadeIn>
            <Accordion type="single" collapsible className="mt-10">
              {siteConfig.faq.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-brand-beige-dark/30">
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
          <FadeIn className="mt-8 text-center">
            <LuxuryButton href="/faq" variant="secondary">
              Tutte le domande
            </LuxuryButton>
          </FadeIn>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="relative overflow-hidden bg-brand-brown py-20 text-white md:py-28">
        <div className="noise-overlay absolute inset-0" />
        <div className="absolute inset-0 radial-glow-center" />
        <div className="container-luxury relative z-10 text-center">
          <FadeIn>
            <h2 className="text-white">Inizia il tuo percorso di benessere</h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-brand-tan-light/75">
              Prenota la tua esperienza a Sulfurea SPA oppure contattaci per qualsiasi
              informazione. Ti aspettiamo a Palinuro.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <LuxuryButton href="/prenota" size="lg" className="bg-white text-brand-brown-dark hover:bg-brand-beige">
                Prenota ora <ArrowRight className="ml-2 h-4 w-4" />
              </LuxuryButton>
              <LuxuryButton href="/contatti" size="lg" variant="secondary" className="border-white/15 text-white hover:bg-white/10 hover:text-white">
                Contattaci
              </LuxuryButton>
            </div>
            <div className="mt-10 flex flex-col items-center gap-2 text-sm text-brand-tan-light/50">
              <p>{siteConfig.contact.phone}</p>
              <p>{siteConfig.contact.email}</p>
              <p>
                {siteConfig.contact.address.street}, {siteConfig.contact.address.city}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
