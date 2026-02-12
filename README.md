# Sulfurea SPA — Sito ufficiale

Sito web ufficiale di **Sulfurea SPA**, centro benessere a Palinuro (Cilento).
Ottimizzato per conversione prenotazioni, mobile-first, SEO e performance.

## Stack

- **Next.js 16** (App Router) + TypeScript
- **TailwindCSS v4** + **shadcn/ui**
- **Framer Motion** (micro-interazioni)
- **react-day-picker** (date range picker)
- **Lucide React** (icone)
- Deploy target: **Vercel**

## Quick start

```bash
pnpm install
pnpm dev        # → http://localhost:3000
pnpm build      # Build di produzione
pnpm start      # Serve build di produzione
```

## Struttura pagine

| Route | Descrizione |
|---|---|
| `/` | Homepage (Hero, Trust, Trattamenti, Offerte, Gallery, Hotel, Territorio, Recensioni, FAQ, CTA) |
| `/sulfurea` | Identità ed esperienza |
| `/wellness` | Menu trattamenti con filtri |
| `/wellness/trattamenti/[slug]` | Pagine dedicate per ogni trattamento (SEO) |
| `/hotel` | Hotel La Torre Palinuro (cross-sell) |
| `/territorio` | Cilento |
| `/prenota` | Booking flow con stepper, date picker, sticky summary |
| `/contatti` | Form contatti + mappa + orari |
| `/offerte` | Pacchetti e offerte |
| `/faq` | Domande frequenti |

## Configurazione

Tutti i dati configurabili sono in **`src/site.config.ts`**:
- Contatti (telefono, email, indirizzo, WhatsApp)
- Orari di apertura
- Social links
- Hotel (nome, URL, descrizione)
- Dati legali (P.IVA, ragione sociale — campi placeholder)
- Esperienze/trattamenti (slug, durata, descrizione, benefici, FAQ)
- Offerte/pacchetti
- FAQ globali
- Territorio/highlights
- Parametri prenotazione (anticipo min/max, ospiti, cancellazione)

## API Prenotazione

Il file `src/lib/bookingClient.ts` espone:
- `getAvailability()` — disponibilità slot
- `getOffers()` — offerte attive
- `createHold()` — hold temporaneo

**Se le ENV non sono configurate**, usa automaticamente dati mock realistici.

Variabili d'ambiente:
```env
NEXT_PUBLIC_GESTIONALE_API_BASE_URL=
NEXT_PUBLIC_GESTIONALE_API_KEY=
```

## SEO

- Metadata unici per ogni pagina (title/description)
- OpenGraph + Twitter cards
- `sitemap.xml` + `robots.txt` (generati da Next.js)
- Canonical URLs
- Breadcrumb (UI + JSON-LD)
- JSON-LD: `HealthAndBeautyBusiness`, `FAQPage`, `BreadcrumbList`
- Internal linking verso `/prenota`

## Font

Il font **Hisquins** è predisposto in `/public/fonts/hisquins.woff2`.
Sostituire il file placeholder con il font reale. Il fallback è Playfair Display → Georgia → serif.

Il body usa **Manrope** via `next/font/google`.

## Immagini

Le immagini usano il componente `MockMedia` (`src/components/MockMedia.tsx`).
Per sostituire con foto reali:
1. Aggiungere immagini in `/public/mockups/`
2. Usare `next/image` al posto di `MockMedia` dove necessario
3. Il componente supporta ratio (16:9, 4:3, 1:1), overlay e blur-up

## Event tracking

`src/lib/tracking.ts` traccia click su:
- Header "Prenota"
- Sticky CTA mobile
- Submit "Verifica disponibilità"
- CTA trattamenti/offerte
- Form contatti

Compatibile con Vercel Analytics (`window.va`) e Google Analytics (`window.gtag`).

## Deploy

```bash
pnpm build   # Verifica build OK
# Deploy su Vercel (collegare repo)
```
