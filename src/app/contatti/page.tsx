import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import Breadcrumb from "@/components/Breadcrumb";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { FadeIn, LuxuryButton } from "@/components/premium";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contatti — Come raggiungerci",
  description:
    "Contatta Sulfurea SPA a Palinuro: telefono, email, indirizzo e orari di apertura. Raggiungi il nostro centro benessere nel Cilento.",
  alternates: { canonical: `${siteConfig.url}/contatti` },
  openGraph: {
    title: "Contatti | Sulfurea SPA",
    description: "Contatta Sulfurea SPA a Palinuro. Telefono, email, indirizzo e orari.",
    url: `${siteConfig.url}/contatti`,
  },
};

export default function ContattiPage() {
  return (
    <div className="bg-surface pt-24 md:pt-28">
      <div className="container-luxury">
        <Breadcrumb items={[{ name: "Contatti", href: "/contatti" }]} />

        <FadeIn>
          <div className="pb-8">
            <p className="overline">Sulfurea SPA</p>
            <h1 className="mt-3">Contatti</h1>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              Siamo a disposizione per qualsiasi informazione sulla tua esperienza a
              Sulfurea SPA.
            </p>
          </div>
        </FadeIn>
      </div>

      <section className="pb-20 md:pb-28">
        <div className="container-luxury">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <div className="space-y-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Phone,
                    title: "Telefono",
                    content: (
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                        className="mt-1.5 block text-sm font-medium text-brand-brown hover:text-brand-brown-dark transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    ),
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: (
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="mt-1.5 block text-sm font-medium text-brand-brown hover:text-brand-brown-dark transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    ),
                  },
                  {
                    icon: MapPin,
                    title: "Indirizzo",
                    content: (
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        {siteConfig.contact.address.street}
                        <br />
                        {siteConfig.contact.address.cap} {siteConfig.contact.address.city} ({siteConfig.contact.address.province})
                      </p>
                    ),
                  },
                  {
                    icon: Clock,
                    title: "Orari",
                    content: (
                      <>
                        <div className="mt-1.5 space-y-0.5 text-sm text-muted-foreground">
                          <p>Lun–Ven: {siteConfig.hours.weekdays}</p>
                          <p>Sabato: {siteConfig.hours.saturday}</p>
                          <p>Domenica: {siteConfig.hours.sunday}</p>
                        </div>
                        {siteConfig.hours.notes && (
                          <p className="mt-2 text-xs text-brand-tan-dark">
                            {siteConfig.hours.notes}
                          </p>
                        )}
                      </>
                    ),
                  },
                ].map((item, i) => (
                  <FadeIn key={item.title} delay={i * 0.06}>
                    <div className="rounded-2xl border-luxury bg-white p-5 shadow-soft">
                      <item.icon className="h-5 w-5 text-brand-tan" />
                      <h2 className="mt-3">{item.title}</h2>
                      {item.content}
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn>
                <div className="rounded-2xl border-luxury bg-white p-6 shadow-soft">
                  <h2>Come arrivare</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Sulfurea SPA si trova a {siteConfig.contact.address.city}, nel cuore
                    del Cilento. Raggiungibile in auto dalla SS447 e dalla E45.
                    Parcheggio gratuito riservato agli ospiti.
                  </p>
                  <div className="mt-4 flex aspect-video items-center justify-center rounded-2xl bg-brand-beige text-sm text-brand-brown-light">
                    <div className="text-center">
                      <MapPin className="mx-auto h-8 w-8 text-brand-tan/40" />
                      <p className="mt-2">Mappa in fase di configurazione</p>
                      <p className="text-xs text-muted-foreground">
                        Inserire embed Google Maps qui
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <LuxuryButton href="/prenota">
                    Prenota ora <ArrowRight className="ml-2 h-4 w-4" />
                  </LuxuryButton>
                  <LuxuryButton
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    variant="secondary"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Chiamaci
                  </LuxuryButton>
                </div>
              </FadeIn>
            </div>

            {/* Contact form */}
            <FadeIn direction="right">
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
