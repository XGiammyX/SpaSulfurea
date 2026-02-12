export const siteConfig = {
  name: "Sulfurea SPA",
  tagline: "Benessere naturale nel cuore del Cilento",
  description:
    "Sulfurea SPA: percorsi benessere, bagno turco, sauna e piscina termale a Palinuro. Prenota la tua esperienza wellness nel Cilento.",
  url: "https://sulfureaspa.it",
  locale: "it_IT",
  currency: "EUR",

  contact: {
    phone: "+39 0000 000000",
    whatsapp: "+390000000000",
    email: "info@sulfureaspa.it",
    address: {
      street: "Via da configurare",
      city: "Palinuro",
      province: "SA",
      cap: "84064",
      region: "Campania",
      country: "IT",
    },
  },

  hours: {
    weekdays: "09:00 – 20:00",
    saturday: "09:00 – 21:00",
    sunday: "10:00 – 19:00",
    notes: "Ultimo ingresso 1 ora prima della chiusura",
  },

  social: {
    instagram: "https://instagram.com/sulfureaspa",
    facebook: "https://facebook.com/sulfureaspa",
    tripadvisor: "",
    google: "",
  },

  hotel: {
    name: "Hotel La Torre Palinuro",
    url: "https://www.hotellatorrespontina.it",
    description:
      "Completa la tua esperienza di benessere con un soggiorno nell'Hotel La Torre, a pochi passi dalla SPA.",
  },

  legal: {
    companyName: "Da configurare S.r.l.",
    vatId: "",
    fiscalCode: "",
    rea: "",
    pec: "",
    privacyPolicyUrl: "/privacy",
    cookiePolicyUrl: "/cookie-policy",
    termsUrl: "/termini",
  },

  booking: {
    minAdvanceHours: 2,
    maxAdvanceDays: 90,
    minGuests: 1,
    maxGuests: 10,
    cancellationHours: 24,
  },

  experiences: [
    {
      slug: "percorso-spa",
      name: "Percorso SPA",
      category: "percorso",
      duration: "2 ore",
      shortDescription:
        "Un viaggio sensoriale tra calore, acqua e relax per rigenerare corpo e mente.",
      description:
        "Il nostro percorso SPA completo include l'accesso a bagno turco, sauna finlandese, piscina termale e area relax. Un'esperienza pensata per chi desidera staccare dalla routine quotidiana e ritrovare equilibrio interiore.",
      includes: [
        "Bagno turco",
        "Sauna finlandese",
        "Piscina termale",
        "Area relax",
        "Kit cortesia (accappatoio, telo, ciabattine)",
      ],
      benefits: [
        "Rilassamento profondo",
        "Sensazione di leggerezza",
        "Pausa rigenerante",
      ],
      idealFor: [
        "Chi cerca una pausa dalla routine",
        "Coppie",
        "Chi visita il Cilento",
      ],
      expectations: [
        "Accoglienza e cambio in spogliatoio privato",
        "Inizio dal bagno turco per preparare il corpo",
        "Passaggio in sauna finlandese",
        "Immersione nella piscina termale",
        "Conclusione nell'area relax con tisana",
      ],
      faq: [
        {
          q: "Cosa devo portare?",
          a: "Nulla: forniamo accappatoio, telo e ciabattine. Ti consigliamo di portare un costume.",
        },
        {
          q: "Quanto dura il percorso?",
          a: "Il percorso ha una durata di circa 2 ore, da vivere senza fretta.",
        },
        {
          q: "È adatto ai bambini?",
          a: "Il percorso SPA è riservato agli ospiti dai 16 anni in su per garantire un ambiente tranquillo.",
        },
      ],
      price: null,
      enabled: true,
    },
    {
      slug: "bagno-turco",
      name: "Bagno Turco",
      category: "calore",
      duration: "incluso nel percorso",
      shortDescription:
        "Vapore aromatico per una pulizia profonda e un senso immediato di benessere.",
      description:
        "Il bagno turco di Sulfurea avvolge il corpo in un vapore delicato arricchito da essenze naturali del Cilento. La temperatura morbida e l'umidità elevata favoriscono il rilassamento muscolare e una piacevole sensazione di pulizia.",
      includes: [
        "Sessione vapore aromatico",
        "Essenze naturali del Cilento",
      ],
      benefits: [
        "Rilassamento muscolare",
        "Sensazione di pulizia profonda",
        "Respirazione più libera",
      ],
      idealFor: [
        "Chi ama il calore avvolgente",
        "Chi cerca relax muscolare",
      ],
      expectations: [
        "Ambiente a temperatura moderata (circa 45°C)",
        "Vapore arricchito con essenze locali",
        "Durata consigliata: 15-20 minuti per sessione",
      ],
      faq: [
        {
          q: "Quanto dura una sessione?",
          a: "Consigliamo sessioni di 15-20 minuti, alternando con pause nell'area relax.",
        },
      ],
      price: null,
      enabled: true,
    },
    {
      slug: "sauna-finlandese",
      name: "Sauna Finlandese",
      category: "calore",
      duration: "incluso nel percorso",
      shortDescription:
        "Calore secco per un rilassamento profondo e una sensazione di energia rinnovata.",
      description:
        "La nostra sauna finlandese in legno naturale raggiunge temperature ideali per stimolare la sensazione di benessere totale. Il calore secco aiuta a sciogliere le tensioni e a ritrovare una piacevole sensazione di energia.",
      includes: ["Sessione sauna finlandese", "Legno naturale"],
      benefits: [
        "Rilassamento profondo",
        "Sensazione di energia",
        "Distensione delle tensioni",
      ],
      idealFor: [
        "Chi preferisce il calore secco",
        "Sportivi",
        "Chi cerca un momento di pausa intensa",
      ],
      expectations: [
        "Temperatura tra 80°C e 90°C",
        "Ambiente in legno naturale",
        "Durata consigliata: 10-15 minuti per sessione",
      ],
      faq: [
        {
          q: "È molto caldo?",
          a: "La sauna raggiunge circa 80-90°C. È un calore secco e graduale, piacevole per la maggior parte degli ospiti.",
        },
      ],
      price: null,
      enabled: true,
    },
    {
      slug: "piscina-termale",
      name: "Piscina Termale",
      category: "acqua",
      duration: "incluso nel percorso",
      shortDescription:
        "Acqua calda naturale per un'immersione rigenerante tra comfort e natura.",
      description:
        "La piscina termale di Sulfurea utilizza acqua naturalmente riscaldata per offrire un'esperienza di immersione unica. La temperatura costante e l'ambiente curato rendono ogni momento in acqua un piccolo rituale di benessere.",
      includes: [
        "Piscina con acqua termale",
        "Idromassaggio",
        "Zona solarium (stagionale)",
      ],
      benefits: [
        "Relax in acqua calda",
        "Sensazione di leggerezza",
        "Momento di pace",
      ],
      idealFor: [
        "Chi ama l'acqua",
        "Coppie",
        "Chi vuole rilassarsi all'aperto (stagionale)",
      ],
      expectations: [
        "Acqua a temperatura costante (circa 34°C)",
        "Zona idromassaggio integrata",
        "Accesso incluso nel percorso SPA",
      ],
      faq: [
        {
          q: "La piscina è all'aperto?",
          a: "La piscina ha una sezione interna e, in stagione, una zona solarium esterna.",
        },
      ],
      price: null,
      enabled: true,
    },
    {
      slug: "massaggio-rilassante",
      name: "Massaggio Rilassante",
      category: "relax",
      duration: "50 min",
      shortDescription:
        "Mani esperte per sciogliere le tensioni e ritrovare armonia tra corpo e mente.",
      description:
        "Il massaggio rilassante di Sulfurea è un trattamento manuale eseguito da operatori qualificati, pensato per alleviare le tensioni accumulate e regalare una profonda sensazione di benessere.",
      includes: [
        "Massaggio corpo completo (50 min)",
        "Oli essenziali naturali",
        "Momento relax post-trattamento",
      ],
      benefits: [
        "Distensione muscolare",
        "Rilassamento profondo",
        "Sensazione di benessere duraturo",
      ],
      idealFor: [
        "Chi accumula tensioni",
        "Chi vuole un trattamento personalizzato",
        "Dopo il percorso SPA",
      ],
      expectations: [
        "Colloquio iniziale con l'operatore",
        "Trattamento in cabina riservata",
        "Tisana e relax a fine trattamento",
      ],
      faq: [
        {
          q: "Devo prenotare in anticipo?",
          a: "Sì, consigliamo di prenotare con almeno 24 ore di anticipo per garantire la disponibilità.",
        },
      ],
      price: null,
      enabled: true,
    },
  ],

  offers: [
    {
      slug: "fuga-di-coppia",
      name: "Fuga di Coppia",
      description:
        "Percorso SPA completo per due persone con accesso prioritario e tisana di benvenuto.",
      includes: [
        "Percorso SPA per 2",
        "Tisana di benvenuto",
        "Accesso prioritario",
      ],
      price: null,
      validUntil: "",
      enabled: true,
    },
    {
      slug: "giornata-benessere",
      name: "Giornata Benessere",
      description:
        "Percorso SPA completo più massaggio rilassante: un'intera giornata dedicata a te.",
      includes: [
        "Percorso SPA",
        "Massaggio rilassante 50 min",
        "Pranzo leggero",
      ],
      price: null,
      validUntil: "",
      enabled: true,
    },
    {
      slug: "cilento-relax",
      name: "Cilento & Relax",
      description:
        "Soggiorno in Hotel La Torre + percorso SPA: il Cilento da vivere con lentezza.",
      includes: [
        "1 notte Hotel La Torre",
        "Percorso SPA per 2",
        "Colazione inclusa",
      ],
      price: null,
      validUntil: "",
      enabled: true,
    },
  ],

  reviews: [
    {
      author: "",
      text: "",
      rating: 5,
      source: "Google",
      enabled: false,
    },
  ],

  faq: [
    {
      question: "Come posso prenotare?",
      answer:
        "Puoi prenotare direttamente dal nostro sito nella sezione Prenota, oppure contattarci telefonicamente o via WhatsApp.",
    },
    {
      question: "Cosa devo portare per il percorso SPA?",
      answer:
        "Non devi portare nulla: forniamo accappatoio, telo e ciabattine. Ti consigliamo un costume da bagno.",
    },
    {
      question: "Qual è la politica di cancellazione?",
      answer:
        "Puoi cancellare gratuitamente fino a 24 ore prima dell'orario prenotato. Cancellazioni successive potrebbero comportare un addebito.",
    },
    {
      question: "I bambini possono accedere alla SPA?",
      answer:
        "Il percorso SPA è riservato agli ospiti dai 16 anni in su. Per i più piccoli, la piscina esterna (in stagione) è accessibile con accompagnatore.",
    },
    {
      question: "Quanto dura il percorso SPA?",
      answer:
        "Il percorso ha una durata di circa 2 ore. Ti consigliamo di arrivare 15 minuti prima per il cambio e l'accoglienza.",
    },
    {
      question: "La SPA è accessibile a persone con mobilità ridotta?",
      answer:
        "Sì, la struttura è dotata di accessi facilitati. Contattaci in anticipo per organizzare al meglio la tua visita.",
    },
    {
      question: "Posso regalare un'esperienza?",
      answer:
        "Certamente. Contattaci per acquistare un buono regalo personalizzato per qualsiasi trattamento o pacchetto.",
    },
    {
      question: "È disponibile un parcheggio?",
      answer:
        "Sì, la struttura dispone di parcheggio gratuito riservato agli ospiti.",
    },
  ],

  territory: {
    name: "Cilento",
    description:
      "Sulfurea si trova nel cuore del Cilento, terra di mare cristallino, borghi antichi e natura incontaminata. Un territorio patrimonio UNESCO che unisce cultura, gastronomia e paesaggi mozzafiato.",
    highlights: [
      {
        name: "Capo Palinuro",
        description:
          "Scogliere spettacolari, grotte marine e acque turchesi: il simbolo della costa cilentana.",
      },
      {
        name: "Parco Nazionale del Cilento",
        description:
          "Sentieri tra boschi e montagne, ideali per trekking e passeggiate nella natura.",
      },
      {
        name: "Borghi storici",
        description:
          "Pisciotta, Castellabate, Acciaroli: borghi dove il tempo scorre lento, tra vicoli e tradizioni.",
      },
      {
        name: "Dieta Mediterranea",
        description:
          "Il Cilento è la patria della Dieta Mediterranea. Sapori autentici, olio d'oliva, mozzarella di bufala e pesce fresco.",
      },
    ],
  },
} as const;

export type Experience = (typeof siteConfig.experiences)[number];
export type Offer = (typeof siteConfig.offers)[number];
export type FAQ = (typeof siteConfig.faq)[number];
