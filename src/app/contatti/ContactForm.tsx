"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/site.config";
import { trackEvent } from "@/lib/tracking";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Inserisci il tuo nome";
    if (!form.email.trim()) errs.email = "Inserisci la tua email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Inserisci un indirizzo email valido";
    if (!form.message.trim()) errs.message = "Scrivi un messaggio";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setState("loading");
    trackEvent("contact_form_submit");

    try {
      // Simulate API call — replace with real endpoint when ready
      await new Promise((r) => setTimeout(r, 1200));
      setState("success");
    } catch {
      setState("error");
    }
  }

  const mailtoFallback = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    `Richiesta da ${form.name}`
  )}&body=${encodeURIComponent(form.message)}`;

  if (state === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-green-600" />
        <h3 className="mt-4 font-display text-xl text-green-800">
          Messaggio inviato
        </h3>
        <p className="mt-2 text-sm text-green-700">
          Ti risponderemo il prima possibile. Puoi anche chiamarci al{" "}
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
            className="font-medium underline"
          >
            {siteConfig.contact.phone}
          </a>
        </p>
        <Button
          onClick={() => {
            setState("idle");
            setForm({ name: "", email: "", phone: "", message: "" });
          }}
          variant="outline"
          className="mt-4 border-green-300 text-green-700 hover:bg-green-100"
        >
          Invia un altro messaggio
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-brand-beige-dark/40 bg-white p-6">
      <h2 className="font-display text-xl">Scrivici</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Compila il modulo e ti risponderemo entro poche ore.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        <div>
          <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-brand-brown-dark">
            Nome *
          </label>
          <Input
            id="contact-name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Il tuo nome"
            className="border-brand-beige-dark bg-brand-beige-light/30 focus:border-brand-tan"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-brand-brown-dark">
            Email *
          </label>
          <Input
            id="contact-email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="nome@esempio.it"
            className="border-brand-beige-dark bg-brand-beige-light/30 focus:border-brand-tan"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="contact-phone" className="mb-1 block text-sm font-medium text-brand-brown-dark">
            Telefono
          </label>
          <Input
            id="contact-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+39 000 000 0000"
            className="border-brand-beige-dark bg-brand-beige-light/30 focus:border-brand-tan"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-brand-brown-dark">
            Messaggio *
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Come possiamo aiutarti?"
            className="w-full rounded-md border border-brand-beige-dark bg-brand-beige-light/30 px-3 py-2 text-sm outline-none transition-colors focus:border-brand-tan focus:ring-1 focus:ring-brand-tan"
          />
          {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
        </div>

        {state === "error" && (
          <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3">
            <AlertCircle className="mt-0.5 h-4 w-4 text-red-500" />
            <div>
              <p className="text-sm text-red-700">
                Invio non riuscito. Prova di nuovo o{" "}
                <a href={mailtoFallback} className="font-medium underline">
                  invia via email
                </a>
                .
              </p>
            </div>
          </div>
        )}

        <Button
          type="submit"
          disabled={state === "loading"}
          className="w-full bg-brand-brown text-white hover:bg-brand-brown-dark"
        >
          {state === "loading" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Invio in corso…
            </>
          ) : (
            "Invia messaggio"
          )}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          Oppure scrivici direttamente a{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="font-medium text-brand-brown hover:underline"
          >
            {siteConfig.contact.email}
          </a>
        </p>
      </form>
    </div>
  );
}
