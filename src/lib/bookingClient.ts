const API_BASE = process.env.NEXT_PUBLIC_GESTIONALE_API_BASE_URL || "";
const API_KEY = process.env.NEXT_PUBLIC_GESTIONALE_API_KEY || "";

export interface AvailabilityQuery {
  start: string;
  end: string;
  guests: number;
  experienceType?: string;
}

export interface TimeSlot {
  id: string;
  date: string;
  time: string;
  available: boolean;
  price?: number;
}

export interface AvailabilityResult {
  slots: TimeSlot[];
  message?: string;
}

export interface OfferResult {
  slug: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  validUntil: string;
}

export interface HoldRequest {
  slotId: string;
  guests: number;
  experienceType: string;
  contactName?: string;
  contactEmail?: string;
  contactPhone?: string;
}

export interface HoldResult {
  holdId: string;
  expiresAt: string;
  summary: string;
}

const useMock = !API_BASE;

function generateMockSlots(start: string, end: string): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const startDate = new Date(start);
  const endDate = new Date(end);
  const times = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00", "18:30"];

  const current = new Date(startDate);
  while (current <= endDate) {
    for (const time of times) {
      const available = Math.random() > 0.3;
      slots.push({
        id: `slot-${current.toISOString().split("T")[0]}-${time.replace(":", "")}`,
        date: current.toISOString().split("T")[0],
        time,
        available,
        price: available ? Math.floor(Math.random() * 30 + 40) : undefined,
      });
    }
    current.setDate(current.getDate() + 1);
  }
  return slots;
}

const mockOffers: OfferResult[] = [
  {
    slug: "fuga-di-coppia",
    name: "Fuga di Coppia",
    description: "Percorso SPA completo per due con tisana di benvenuto.",
    price: 120,
    originalPrice: 150,
    validUntil: "2026-06-30",
  },
  {
    slug: "giornata-benessere",
    name: "Giornata Benessere",
    description: "Percorso SPA + massaggio rilassante per una giornata dedicata a te.",
    price: 95,
    originalPrice: 120,
    validUntil: "2026-06-30",
  },
  {
    slug: "cilento-relax",
    name: "Cilento & Relax",
    description: "Soggiorno Hotel La Torre + percorso SPA per due persone.",
    price: 199,
    originalPrice: 250,
    validUntil: "2026-08-31",
  },
];

async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(API_KEY ? { Authorization: `Bearer ${API_KEY}` } : {}),
      ...options?.headers,
    },
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export async function getAvailability(
  query: AvailabilityQuery
): Promise<AvailabilityResult> {
  if (useMock) {
    await new Promise((r) => setTimeout(r, 800 + Math.random() * 600));
    const slots = generateMockSlots(query.start, query.end);
    const available = slots.filter((s) => s.available);
    return {
      slots,
      message:
        available.length === 0
          ? "Nessuna disponibilità in queste date. Prova date vicine o contattaci direttamente."
          : undefined,
    };
  }
  return apiFetch<AvailabilityResult>(
    `/availability?start=${query.start}&end=${query.end}&guests=${query.guests}&type=${query.experienceType || ""}`
  );
}

export async function getOffers(query: {
  start: string;
  end: string;
}): Promise<OfferResult[]> {
  if (useMock) {
    await new Promise((r) => setTimeout(r, 500));
    return mockOffers;
  }
  return apiFetch<OfferResult[]>(
    `/offers?start=${query.start}&end=${query.end}`
  );
}

export async function createHold(
  request: HoldRequest
): Promise<HoldResult> {
  if (useMock) {
    await new Promise((r) => setTimeout(r, 600));
    return {
      holdId: `hold-${Date.now()}`,
      expiresAt: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
      summary: `Prenotazione in attesa per ${request.guests} persona/e`,
    };
  }
  return apiFetch<HoldResult>("/hold", {
    method: "POST",
    body: JSON.stringify(request),
  });
}
