"use client";

type TrackingEvent =
  | "header_prenota_click"
  | "hero_prenota_click"
  | "hero_scopri_click"
  | "sticky_prenota_click"
  | "sticky_whatsapp_click"
  | "booking_submit"
  | "booking_availability_check"
  | "treatment_prenota_click"
  | "offer_click"
  | "contact_form_submit"
  | "hotel_cta_click";

declare global {
  interface Window {
    va?: (action: string, params: Record<string, unknown>) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: TrackingEvent, data?: Record<string, string>) {
  try {
    if (typeof window !== "undefined" && window.va) {
      window.va("event", { name: event, ...data });
    }

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", event, data);
    }

    if (process.env.NODE_ENV === "development") {
      console.log(`[track] ${event}`, data || "");
    }
  } catch {
    // Tracking should never break the app
  }
}
