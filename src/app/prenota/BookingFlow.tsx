"use client";

import { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { format, addDays, isBefore, startOfDay } from "date-fns";
import { it } from "date-fns/locale";
import { DayPicker, type DateRange } from "react-day-picker";
import "react-day-picker/style.css";
import {
  CalendarDays,
  Users,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Loader2,
  AlertCircle,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/site.config";
import { getAvailability, type AvailabilityResult, type TimeSlot } from "@/lib/bookingClient";
import { trackEvent } from "@/lib/tracking";

const steps = [
  { id: 1, label: "Esperienza", icon: Sparkles },
  { id: 2, label: "Date e ospiti", icon: CalendarDays },
  { id: 3, label: "Disponibilità", icon: CheckCircle2 },
];

const enabledExperiences = siteConfig.experiences.filter((e) => e.enabled);

export default function BookingFlow() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("esperienza") || searchParams.get("pacchetto") || "";

  const [step, setStep] = useState(preselected ? 2 : 1);
  const [experience, setExperience] = useState(preselected || "");
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [guests, setGuests] = useState(2);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AvailabilityResult | null>(null);
  const [error, setError] = useState("");
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);

  const today = startOfDay(new Date());
  const minDate = addDays(today, 0);
  const maxDate = addDays(today, siteConfig.booking.maxAdvanceDays);

  const experienceObj = enabledExperiences.find((e) => e.slug === experience);

  const canProceedStep2 = dateRange?.from && dateRange?.to && guests >= siteConfig.booking.minGuests;

  const handleCheckAvailability = useCallback(async () => {
    if (!dateRange?.from || !dateRange?.to) return;
    setLoading(true);
    setError("");
    setResult(null);
    setSelectedSlot(null);
    trackEvent("booking_availability_check", { experience, guests: String(guests) });

    try {
      const res = await getAvailability({
        start: format(dateRange.from, "yyyy-MM-dd"),
        end: format(dateRange.to, "yyyy-MM-dd"),
        guests,
        experienceType: experience,
      });
      setResult(res);
      setStep(3);
    } catch {
      setError("Si è verificato un errore. Riprova o contattaci direttamente.");
    } finally {
      setLoading(false);
    }
  }, [dateRange, guests, experience]);

  useEffect(() => {
    if (preselected && enabledExperiences.some((e) => e.slug === preselected)) {
      setExperience(preselected);
    }
  }, [preselected]);

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 md:px-6 lg:px-8">
      {/* Stepper */}
      <div className="mb-8 flex items-center justify-center gap-2 md:gap-4">
        {steps.map((s, i) => (
          <div key={s.id} className="flex items-center gap-2">
            <button
              onClick={() => s.id < step && setStep(s.id)}
              disabled={s.id > step}
              className={cn(
                "flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                step === s.id
                  ? "bg-brand-brown text-white"
                  : s.id < step
                    ? "bg-brand-beige text-brand-brown cursor-pointer hover:bg-brand-beige-dark"
                    : "bg-brand-beige/50 text-brand-brown-light/50 cursor-default"
              )}
              aria-current={step === s.id ? "step" : undefined}
            >
              <s.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{s.label}</span>
              <span className="sm:hidden">{s.id}</span>
            </button>
            {i < steps.length - 1 && (
              <ChevronRight className="h-4 w-4 text-brand-tan/40" />
            )}
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Step 1: Experience */}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="font-display text-2xl tracking-tight">
                Scegli la tua esperienza
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {enabledExperiences.map((exp) => (
                  <button
                    key={exp.slug}
                    onClick={() => {
                      setExperience(exp.slug);
                      setStep(2);
                    }}
                    className={cn(
                      "flex flex-col rounded-xl border p-4 text-left transition-all",
                      experience === exp.slug
                        ? "border-brand-brown bg-brand-beige shadow-sm"
                        : "border-brand-beige-dark bg-white hover:border-brand-tan hover:shadow-sm"
                    )}
                  >
                    <span className="font-display text-lg">{exp.name}</span>
                    {exp.duration && (
                      <span className="mt-1 flex items-center gap-1 text-xs text-brand-brown-light">
                        <Clock className="h-3 w-3" />
                        {exp.duration}
                      </span>
                    )}
                    <span className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {exp.shortDescription}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Dates + Guests */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center gap-1 text-sm text-brand-brown hover:text-brand-brown-dark"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Cambia esperienza
                </button>
              </div>

              <h2 className="font-display text-2xl tracking-tight">
                Seleziona date e ospiti
              </h2>

              {/* Date picker */}
              <div className="rounded-xl border border-brand-beige-dark bg-white p-4">
                <label className="mb-2 block text-sm font-medium text-brand-brown-dark">
                  Periodo
                </label>
                {dateRange?.from && dateRange?.to ? (
                  <p className="mb-3 text-sm text-brand-brown">
                    {format(dateRange.from, "d MMMM yyyy", { locale: it })} —{" "}
                    {format(dateRange.to, "d MMMM yyyy", { locale: it })}
                  </p>
                ) : (
                  <p className="mb-3 text-sm text-muted-foreground">
                    Seleziona la data di inizio e fine del soggiorno o della visita.
                  </p>
                )}
                <DayPicker
                  mode="range"
                  selected={dateRange}
                  onSelect={setDateRange}
                  locale={it}
                  disabled={[{ before: minDate }, { after: maxDate }]}
                  numberOfMonths={typeof window !== "undefined" && window.innerWidth >= 768 ? 2 : 1}
                  classNames={{
                    root: "mx-auto",
                    day: "rounded-md text-sm",
                    selected: "bg-brand-brown text-white",
                    range_middle: "bg-brand-beige text-brand-brown-dark",
                    today: "font-bold text-brand-brown",
                  }}
                />
                {dateRange?.from && !dateRange?.to && (
                  <p className="mt-2 text-xs text-brand-tan-dark">
                    Seleziona la data di fine per completare il periodo.
                  </p>
                )}
              </div>

              {/* Guests */}
              <div className="rounded-xl border border-brand-beige-dark bg-white p-4">
                <label className="mb-2 block text-sm font-medium text-brand-brown-dark">
                  Numero di ospiti
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setGuests(Math.max(siteConfig.booking.minGuests, guests - 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-beige-dark text-lg font-medium text-brand-brown transition-colors hover:bg-brand-beige"
                    aria-label="Riduci ospiti"
                  >
                    −
                  </button>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-brand-brown-light" />
                    <span className="text-lg font-semibold text-brand-brown-dark">
                      {guests}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {guests === 1 ? "persona" : "persone"}
                    </span>
                  </div>
                  <button
                    onClick={() => setGuests(Math.min(siteConfig.booking.maxGuests, guests + 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-beige-dark text-lg font-medium text-brand-brown transition-colors hover:bg-brand-beige"
                    aria-label="Aggiungi ospiti"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* CTA */}
              <Button
                onClick={handleCheckAvailability}
                disabled={!canProceedStep2 || loading}
                className="w-full bg-brand-brown text-white hover:bg-brand-brown-dark disabled:opacity-50 md:w-auto"
                size="lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verifica in corso…
                  </>
                ) : (
                  <>
                    Verifica disponibilità
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              {!canProceedStep2 && (
                <p className="text-xs text-muted-foreground">
                  Seleziona un periodo completo per procedere.
                </p>
              )}
            </div>
          )}

          {/* Step 3: Results */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setStep(2)}
                  className="flex items-center gap-1 text-sm text-brand-brown hover:text-brand-brown-dark"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Modifica ricerca
                </button>
              </div>

              <h2 className="font-display text-2xl tracking-tight">
                Disponibilità
              </h2>

              {loading && (
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="h-16 w-full rounded-xl bg-brand-beige/50" />
                  ))}
                </div>
              )}

              {error && (
                <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <div>
                    <p className="text-sm font-medium text-red-800">{error}</p>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                      className="mt-1 inline-flex items-center gap-1 text-sm text-red-600 underline"
                    >
                      <Phone className="h-3 w-3" />
                      Chiama per assistenza
                    </a>
                  </div>
                </div>
              )}

              {result && !loading && (
                <>
                  {result.slots.filter((s) => s.available).length === 0 ? (
                    <div className="rounded-xl border border-brand-beige-dark bg-white p-6 text-center">
                      <CalendarDays className="mx-auto h-10 w-10 text-brand-tan/50" />
                      <p className="mt-3 font-display text-lg">
                        Nessuna disponibilità trovata
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {result.message ||
                          "Prova a selezionare date diverse o contattaci direttamente per verificare."}
                      </p>
                      <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
                        <Button
                          onClick={() => setStep(2)}
                          variant="outline"
                          className="border-brand-beige-dark text-brand-brown hover:bg-brand-beige"
                        >
                          Prova altre date
                        </Button>
                        <a
                          href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                          className="flex items-center gap-1.5 text-sm font-medium text-brand-brown hover:text-brand-brown-dark"
                        >
                          <Phone className="h-4 w-4" />
                          Contattaci
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {/* Group by date */}
                      {Array.from(
                        new Set(result.slots.filter((s) => s.available).map((s) => s.date))
                      ).map((date) => (
                        <div key={date} className="rounded-xl border border-brand-beige-dark bg-white p-4">
                          <p className="mb-3 text-sm font-semibold text-brand-brown-dark">
                            {format(new Date(date), "EEEE d MMMM", { locale: it })}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {result.slots
                              .filter((s) => s.date === date && s.available)
                              .map((slot) => (
                                <button
                                  key={slot.id}
                                  onClick={() => setSelectedSlot(slot)}
                                  className={cn(
                                    "rounded-lg border px-4 py-2 text-sm font-medium transition-all",
                                    selectedSlot?.id === slot.id
                                      ? "border-brand-brown bg-brand-brown text-white"
                                      : "border-brand-beige-dark bg-white text-brand-brown hover:border-brand-tan hover:bg-brand-beige"
                                  )}
                                >
                                  {slot.time}
                                  {slot.price && (
                                    <span className="ml-1.5 text-xs opacity-70">
                                      €{slot.price}
                                    </span>
                                  )}
                                </button>
                              ))}
                          </div>
                        </div>
                      ))}

                      {selectedSlot && (
                        <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            <p className="text-sm font-medium text-green-800">
                              Slot selezionato: {format(new Date(selectedSlot.date), "d MMMM", { locale: it })} alle {selectedSlot.time}
                            </p>
                          </div>
                          <p className="mt-2 text-xs text-green-700">
                            Per completare la prenotazione, contattaci o prosegui con la conferma.
                            Nessun pagamento anticipato richiesto.
                          </p>
                          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                            <Button
                              onClick={() => {
                                trackEvent("booking_submit", {
                                  experience,
                                  slot: selectedSlot.id,
                                });
                              }}
                              className="bg-brand-brown text-white hover:bg-brand-brown-dark"
                            >
                              Conferma prenotazione
                            </Button>
                            <a
                              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                                `Vorrei prenotare ${experienceObj?.name || experience} per ${guests} persone il ${format(new Date(selectedSlot.date), "d MMMM yyyy", { locale: it })} alle ${selectedSlot.time}`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 rounded-md border border-green-300 px-4 py-2 text-sm font-medium text-green-800 transition-colors hover:bg-green-100"
                            >
                              Conferma via WhatsApp
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>

        {/* Sidebar – Sticky summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-4">
            {/* Summary card */}
            <div className="rounded-xl border border-brand-beige-dark/40 bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-tan-dark">
                Riepilogo
              </h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-brown-light" />
                  <div>
                    <p className="text-xs text-muted-foreground">Esperienza</p>
                    <p className="text-sm font-medium text-brand-brown-dark">
                      {experienceObj?.name || "Da selezionare"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-brand-brown-light" />
                  <div>
                    <p className="text-xs text-muted-foreground">Date</p>
                    <p className="text-sm font-medium text-brand-brown-dark">
                      {dateRange?.from && dateRange?.to
                        ? `${format(dateRange.from, "d MMM", { locale: it })} — ${format(dateRange.to, "d MMM", { locale: it })}`
                        : "Da selezionare"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="mt-0.5 h-4 w-4 shrink-0 text-brand-brown-light" />
                  <div>
                    <p className="text-xs text-muted-foreground">Ospiti</p>
                    <p className="text-sm font-medium text-brand-brown-dark">
                      {guests} {guests === 1 ? "persona" : "persone"}
                    </p>
                  </div>
                </div>
                {selectedSlot && (
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-brown-light" />
                    <div>
                      <p className="text-xs text-muted-foreground">Orario</p>
                      <p className="text-sm font-medium text-brand-brown-dark">
                        {format(new Date(selectedSlot.date), "d MMMM", { locale: it })} — {selectedSlot.time}
                        {selectedSlot.price && ` — €${selectedSlot.price}`}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Trust signals */}
            <div className="rounded-xl border border-brand-beige-dark/40 bg-white p-5">
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-brand-tan" />
                  <span className="text-xs text-muted-foreground">
                    Nessun pagamento anticipato
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-brand-tan" />
                  <span className="text-xs text-muted-foreground">
                    Cancellazione gratuita fino a {siteConfig.booking.cancellationHours}h prima
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-brand-tan" />
                  <span className="text-xs text-muted-foreground">
                    Assistenza: {siteConfig.contact.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
