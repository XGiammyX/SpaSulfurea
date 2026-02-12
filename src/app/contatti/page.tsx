import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import Breadcrumb from "@/components/Breadcrumb";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
    <div className="bg-surface pt-20 md:pt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Breadcrumb items={[{ name: "Contatti", href: "/contatti" }]} />

        <div className="pb-6">
          <h1 className="font-display text-3xl tracking-tight md:text-4xl">
            Contatti
          </h1>
          <p className="mt-2 max-w-xl text-base text-muted-foreground">
            Siamo a disposizione per qualsiasi informazione sulla tua esperienza a
            Sulfurea SPA.
          </p>
        </div>
      </div>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact info */}
            <div className="space-y-8">
              {/* Info cards */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-brand-beige-dark/40 bg-white p-5">
                  <Phone className="h-5 w-5 text-brand-tan" />
                  <h2 className="mt-3 font-display text-lg">Telefono</h2>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    className="mt-1 block text-sm font-medium text-brand-brown hover:text-brand-brown-dark"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div className="rounded-xl border border-brand-beige-dark/40 bg-white p-5">
                  <Mail className="h-5 w-5 text-brand-tan" />
                  <h2 className="mt-3 font-display text-lg">Email</h2>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="mt-1 block text-sm font-medium text-brand-brown hover:text-brand-brown-dark"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div className="rounded-xl border border-brand-beige-dark/40 bg-white p-5">
                  <MapPin className="h-5 w-5 text-brand-tan" />
                  <h2 className="mt-3 font-display text-lg">Indirizzo</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {siteConfig.contact.address.street}
                    <br />
                    {siteConfig.contact.address.cap} {siteConfig.contact.address.city} ({siteConfig.contact.address.province})
                  </p>
                </div>
                <div className="rounded-xl border border-brand-beige-dark/40 bg-white p-5">
                  <Clock className="h-5 w-5 text-brand-tan" />
                  <h2 className="mt-3 font-display text-lg">Orari</h2>
                  <div className="mt-1 space-y-0.5 text-sm text-muted-foreground">
                    <p>Lun–Ven: {siteConfig.hours.weekdays}</p>
                    <p>Sabato: {siteConfig.hours.saturday}</p>
                    <p>Domenica: {siteConfig.hours.sunday}</p>
                  </div>
                  {siteConfig.hours.notes && (
                    <p className="mt-1.5 text-xs text-brand-tan-dark">
                      {siteConfig.hours.notes}
                    </p>
                  )}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl border border-brand-beige-dark/40 bg-white p-5">
                <h2 className="font-display text-lg">Come arrivare</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Sulfurea SPA si trova a {siteConfig.contact.address.city}, nel cuore
                  del Cilento. Raggiungibile in auto dalla SS447 e dalla E45.
                  Parcheggio gratuito riservato agli ospiti.
                </p>
                {/* Map embed placeholder */}
                <div className="mt-4 flex aspect-video items-center justify-center rounded-lg bg-brand-beige text-sm text-brand-brown-light">
                  <div className="text-center">
                    <MapPin className="mx-auto h-8 w-8 text-brand-tan/50" />
                    <p className="mt-2">Mappa in fase di configurazione</p>
                    <p className="text-xs text-muted-foreground">
                      Inserire embed Google Maps qui
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="bg-brand-brown text-white hover:bg-brand-brown-dark"
                >
                  <Link href="/prenota">
                    Prenota ora <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-brand-brown text-brand-brown hover:bg-brand-beige"
                >
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Chiamaci
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
