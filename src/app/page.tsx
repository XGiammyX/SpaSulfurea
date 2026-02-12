import Link from "next/link";
import {
  ShieldCheck,
  CalendarCheck,
  Sparkles,
  ArrowRight,
  Clock,
  MapPin,
  Star,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MockMedia from "@/components/MockMedia";
import { FAQJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/site.config";

export default function HomePage() {
  const enabledExperiences = siteConfig.experiences.filter((e) => e.enabled);
  const enabledOffers = siteConfig.offers.filter((o) => o.enabled);

  return (
    <>
      <FAQJsonLd faqs={siteConfig.faq} />

      {/* ── HERO ── */}
      <section className="relative flex min-h-[90vh] items-center md:min-h-screen">
        <MockMedia
          ratio="16:9"
          className="!absolute inset-0 !aspect-auto h-full"
          label=""
          gradient="dark"
          overlay
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-dark/70 via-brand-brown-dark/30 to-brand-brown-dark/10" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-32 md:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Benessere naturale
              <br />
              <span className="text-brand-tan-light">nel cuore del Cilento</span>
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80 md:mt-6 md:text-lg">
              Sulfurea SPA ti accoglie con percorsi di bagno turco, sauna finlandese e
              piscina termale a Palinuro. Rigenera corpo e mente in un angolo di pace tra
              mare e natura.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="bg-brand-brown text-white hover:bg-brand-brown-dark"
              >
                <Link href="/prenota">
                  Prenota ora <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
              >
                <Link href="/wellness">Scopri il percorso</Link>
              </Button>
            </div>
          </div>

          {/* Mini booking widget */}
          <div className="mt-10 hidden max-w-xl rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-md lg:block">
            <div className="flex items-end gap-4">
              <div className="flex-1">
                <label className="mb-1 block text-xs font-medium text-white/70">
                  Esperienza
                </label>
                <div className="rounded-lg bg-white/90 px-3 py-2 text-sm text-brand-brown-dark">
                  Percorso SPA
                </div>
              </div>
              <div className="flex-1">
                <label className="mb-1 block text-xs font-medium text-white/70">
                  Data
                </label>
                <div className="rounded-lg bg-white/90 px-3 py-2 text-sm text-brand-brown/60">
                  Seleziona data
                </div>
              </div>
              <div className="w-24">
                <label className="mb-1 block text-xs font-medium text-white/70">
                  Persone
                </label>
                <div className="rounded-lg bg-white/90 px-3 py-2 text-sm text-brand-brown-dark">
                  2
                </div>
              </div>
              <Button
                asChild
                className="bg-brand-brown text-white hover:bg-brand-brown-dark"
              >
                <Link href="/prenota">Verifica</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="border-b border-brand-beige-dark/50 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 md:flex-row md:justify-center md:gap-12 md:px-6">
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
            <div
              key={item.title}
              className="flex items-center gap-3 text-center md:text-left"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-beige">
                <item.icon className="h-5 w-5 text-brand-brown" />
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-brown-dark">
                  {item.title}
                </p>
                <p className="text-xs text-brand-brown-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TREATMENTS / EXPERIENCES ── */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">
              Il tuo percorso di benessere
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
              Dalla sauna finlandese alla piscina termale: ogni tappa è pensata per
              accompagnarti verso un profondo rilassamento.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {enabledExperiences.slice(0, 6).map((exp) => (
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
                    <h3 className="font-display text-lg">{exp.name}</h3>
                    {exp.duration && (
                      <span className="flex items-center gap-1 rounded-full bg-brand-beige px-2 py-0.5 text-xs text-brand-brown">
                        <Clock className="h-3 w-3" />
                        {exp.duration}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {exp.shortDescription}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-brand-beige-dark text-brand-brown hover:bg-brand-beige"
                    >
                      <Link href={`/wellness/trattamenti/${exp.slug}`}>
                        Scopri <ChevronRight className="ml-1 h-3 w-3" />
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
          <div className="mt-8 text-center">
            <Button
              asChild
              variant="outline"
              className="border-brand-brown text-brand-brown hover:bg-brand-beige"
            >
              <Link href="/wellness">
                Tutti i trattamenti <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── OFFERS TEASER ── */}
      <section className="bg-brand-beige py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">
              Pacchetti e offerte
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-muted-foreground">
              Esperienze pensate per regalare o regalarti momenti di puro relax.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {enabledOffers.map((offer) => (
              <Card
                key={offer.slug}
                className="border-brand-beige-dark/40 bg-white"
              >
                <CardContent className="p-6">
                  <h3 className="font-display text-xl">{offer.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {offer.description}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {offer.includes.map((inc) => (
                      <li
                        key={inc}
                        className="flex items-center gap-2 text-sm text-brand-brown"
                      >
                        <span className="h-1 w-1 rounded-full bg-brand-tan" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="mt-5 w-full bg-brand-brown text-white hover:bg-brand-brown-dark"
                  >
                    <Link href={`/prenota?pacchetto=${offer.slug}`}>
                      Verifica disponibilità
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button
              asChild
              variant="outline"
              className="border-brand-brown text-brand-brown hover:bg-white"
            >
              <Link href="/offerte">
                Tutte le offerte <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl tracking-tight md:text-4xl">
            L&apos;atmosfera Sulfurea
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-base text-muted-foreground">
            Scorci del nostro percorso benessere, tra vapori, acqua e luce naturale.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            <MockMedia ratio="1:1" label="Ingresso" className="rounded-lg" />
            <MockMedia ratio="1:1" label="Bagno turco" className="rounded-lg" />
            <MockMedia
              ratio="1:1"
              label="Piscina"
              className="col-span-2 row-span-2 rounded-lg !aspect-auto h-full"
            />
            <MockMedia ratio="1:1" label="Sauna" className="rounded-lg" />
            <MockMedia ratio="1:1" label="Area relax" className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* ── HOTEL CROSS-SELL ── */}
      <section className="bg-brand-brown-dark py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-tan">
                Completa l&apos;esperienza
              </p>
              <h2 className="mt-2 font-display text-3xl tracking-tight text-white md:text-4xl">
                {siteConfig.hotel.name}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-brand-tan-light/80">
                {siteConfig.hotel.description}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="bg-brand-tan text-brand-brown-dark hover:bg-brand-tan-light"
                >
                  <Link href="/hotel">Scopri l&apos;hotel</Link>
                </Button>
                {siteConfig.hotel.url && (
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 hover:text-white"
                  >
                    <a
                      href={siteConfig.hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sito ufficiale <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
            <MockMedia
              ratio="4:3"
              label="Hotel La Torre"
              gradient="light"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* ── TERRITORY TEASER ── */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-tan-dark">
              Il territorio
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">
              {siteConfig.territory.name}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
              {siteConfig.territory.description}
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.territory.highlights.map((h) => (
              <div
                key={h.name}
                className="rounded-xl border border-brand-beige-dark/40 bg-white p-5"
              >
                <MapPin className="h-5 w-5 text-brand-tan" />
                <h3 className="mt-3 font-display text-lg">{h.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {h.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button
              asChild
              variant="outline"
              className="border-brand-brown text-brand-brown hover:bg-brand-beige"
            >
              <Link href="/territorio">
                Esplora il Cilento <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── REVIEWS / SOCIAL PROOF ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">
              Dicono di noi
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-muted-foreground">
              Le esperienze dei nostri ospiti sono il miglior racconto di Sulfurea.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Placeholder cards ready for real reviews */}
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="border-brand-beige-dark/40 bg-brand-beige/30"
              >
                <CardContent className="p-6">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-brand-tan text-brand-tan"
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-sm italic leading-relaxed text-muted-foreground">
                    &ldquo;Recensione in arrivo. Questo spazio è pronto per accogliere le
                    opinioni dei nostri ospiti da Google Reviews o inserimento manuale.&rdquo;
                  </p>
                  <p className="mt-3 text-xs font-medium text-brand-brown">
                    — Ospite verificato
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">
              Domande frequenti
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Tutto quello che serve sapere prima della tua visita.
            </p>
          </div>
          <Accordion type="single" collapsible className="mt-8">
            {siteConfig.faq.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-brand-beige-dark/40">
                <AccordionTrigger className="text-left text-sm font-medium text-brand-brown-dark hover:text-brand-brown hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-6 text-center">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-brand-beige-dark text-brand-brown hover:bg-brand-beige"
            >
              <Link href="/faq">Tutte le domande</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-brand-brown py-16 text-white md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="font-display text-3xl tracking-tight text-white md:text-4xl">
            Inizia il tuo percorso di benessere
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-brand-tan-light/80">
            Prenota la tua esperienza a Sulfurea SPA oppure contattaci per qualsiasi
            informazione. Ti aspettiamo a Palinuro.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
          <div className="mt-8 flex flex-col items-center gap-2 text-sm text-brand-tan-light/60">
            <p>{siteConfig.contact.phone}</p>
            <p>{siteConfig.contact.email}</p>
            <p>
              {siteConfig.contact.address.street}, {siteConfig.contact.address.city}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
