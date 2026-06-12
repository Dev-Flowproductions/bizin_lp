import type { SiteDictionary } from "../types";

export const en: SiteDictionary = {
  locale: "en",
  htmlLang: "en-GB",
  seo: {
    title: "Investing in Portugal & Portugal 2030 funding | Check your project | Bizin Portugal",
    description:
      "See whether your project may fit Portugal 2030 incentives. Free first-pass eligibility check and strategic advice from Bizin Portugal — no personal data required.",
    ogLocale: "en_GB",
  },
  nav: {
    logoUrl: "https://www.bizinportugal.com/logo.svg",
    logoAlt: "Bizin Portugal",
    logoAriaHome: "Bizin Portugal — home",
    cta: "Book a consultation",
    bookingUrl: "https://www.bizinportugal.com/#booking-section",
    languageMenuAria: "Choose language",
  },
  hero: {
    heading:
      "We help your business grow - in strategy, people and financing.",
    subheading:
      "Business consulting and human capital development for companies ready to grow.",
    ctaPrimary: "Assess my project",
    ctaSecondary: "Book a consultation",
    bookingUrl: "https://www.bizinportugal.com/#booking-section",
    imageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2340",
    imageAlt: "Team in a business meeting",
  },
  trustMetrics: [
    { value: "€2.3M+", label: "Capital financed and leveraged", visible: false },
    { value: "98%+", label: "Client satisfaction rate", visible: false },
    { value: "120+", label: "International clients supported", visible: false },
  ],
  problem: {
    heading: "The cost of moving forward without clarity",
    body: "Missed deadlines, misread eligibility criteria or a misaligned application can put funding at risk, delay decisions and weaken the wider investment plan. Often the issue is not a lack of potential — it is not having the right guidance at the right time.",
  },
  solution: {
    eyebrow: "How we work",
    heading: "From strategy to application, with the full project in view",
    body: "Bizin sits where strategy meets delivery. We review your project, map the most relevant opportunities in the Portugal 2030 ecosystem, and help structure the human capital and growth components that strengthen the viability of your operation.",
    bullets: [
      "Initial eligibility screening",
      "Mapping of programmes and incentives",
      "Support structuring the investment and team",
      "Hands-on support through to delivery",
    ],
  },
  calculatorSection: {
    heading: "Assess your project’s potential",
  },
  calculator: {
    eligibility: {
      disclaimer:
        "This output is indicative and was produced with AI from your answers and general context (including Portugal 2030). It is not official confirmation of eligibility and does not constitute legal or financial advice.",
      programmeSuggestions: {
        tecnologia: [
          {
            name: "RRP — Digital transition",
            description:
              "Support for digitalisation and technology-led innovation, consistent with RRP and Portugal 2030 logic.",
          },
          {
            name: "Portugal 2030 — Business R&I (SI Inovação)",
            description:
              "Incentives for productive innovation projects with a clear technology component.",
          },
        ],
        energia: [
          {
            name: "Portugal 2030 — Energy transition",
            description:
              "Measures backing energy efficiency, renewables and industrial decarbonisation.",
          },
          {
            name: "RRP — Decarbonisation",
            description:
              "Funding focused on cutting emissions and modernising energy use.",
          },
        ],
        industria: [
          {
            name: "Portugal 2030 — SME qualification (SI Qualificação PME)",
            description:
              "Modernisation and upskilling of industrial SMEs with a competitiveness impact.",
          },
          {
            name: "Portugal 2030 — Business R&I (SI Inovação)",
            description:
              "Support for productive innovation in the industrial base.",
          },
        ],
        turismo: [
          {
            name: "Portugal 2030 — Tourism",
            description:
              "Incentives for developing, upgrading and sustaining tourism supply.",
          },
          {
            name: "Portugal 2030 — SME qualification (SI Qualificação PME)",
            description:
              "Better services, processes and positioning for tourism-related SMEs.",
          },
        ],
        saude: [
          {
            name: "Portugal 2030 — Business R&I (SI Inovação)",
            description:
              "Lines backing innovation in healthcare services, medtech and specialised delivery.",
          },
          {
            name: "RRP — Health",
            description:
              "Support for modernising healthcare infrastructure and services.",
          },
        ],
        default: [
          {
            name: "Portugal 2030 — SME qualification (SI Qualificação PME)",
            description:
              "Incentives for modernisation, digitalisation and SME competitiveness.",
          },
          {
            name: "Portugal 2030 — Business R&I (SI Inovação)",
            description:
              "Support for innovation and productive development projects.",
          },
        ],
      },
      nextSteps: {
        high: [
          "Request an initial strategic review with Bizin Portugal.",
          "Pull together project facts: capex/opex scope, sector, location and objectives.",
          "Check which calls are open for the suggested programme axes.",
        ],
        medium: [
          "Book a diagnostic call to refine how your project maps to the rules.",
          "See whether small changes to scope or spend could strengthen eligibility.",
          "Bizin can help match your profile to the most coherent programme route.",
        ],
        low: [
          "Book a consultation for a deeper, tailored assessment.",
          "Targeted adjustments sometimes unlock a better fit under current notices.",
          "Bizin handles complex cases and can surface alternative routes worth exploring.",
        ],
      },
    },
    steps: [
      {
        field: "sector",
        question: "Which sector best describes your company?",
        hint: "Pick the closest match to your core activity.",
        optionLabels: {
          industria: "Manufacturing / industry",
          tecnologia: "Technology / software",
          servicos: "Business services",
          turismo: "Tourism",
          saude: "Healthcare",
          educacao: "Education / training",
          logistica: "Logistics",
          energia: "Energy / sustainability",
          outro: "Other",
        },
      },
      {
        field: "employees",
        question: "How many people does the company employ?",
        hint: "Use your total headcount linked to the company.",
        optionLabels: {
          "1_9": "1 – 9 employees",
          "10_49": "10 – 49 employees",
          "50_249": "50 – 249 employees",
          "250_plus": "250 or more employees",
        },
      },
      {
        field: "region",
        question: "Where will the investment be located?",
        hint: "Portuguese region where the project will be carried out.",
        optionLabels: {
          norte: "North",
          centro: "Centre",
          lisboa: "Lisbon",
          alentejo: "Alentejo",
          algarve: "Algarve",
          madeira: "Madeira",
          acores: "Azores",
        },
      },
      {
        field: "investment",
        question: "What is the estimated investment amount?",
        hint: "Include eligible costs: equipment, works, IT, training, etc.",
        optionLabels: {
          under_50k: "Under €50,000",
          "50k_200k": "€50,000 – €200,000",
          "200k_1m": "€200,000 – €1,000,000",
          "1m_5m": "€1,000,000 – €5,000,000",
          over_5m: "Over €5,000,000",
        },
      },
      {
        field: "investmentType",
        question: "What type of investment are you planning?",
        hint: "Choose the option that best describes the main focus of your project.",
        optionLabels: {
          equipamentos: "Equipment acquisition",
          software: "Software",
          construcao: "Construction",
          marketing: "Marketing",
          formacao: "Training",
          recursos_humanos: "Human resources",
        },
      },
    ],
    idle: {
      eyebrow: "Quick assessment",
      title: "Five questions.",
      titleAccent: "A tailored read-out.",
      body: "Work through the steps and receive an initial view of your project’s potential.",
      durationLine: "About two minutes · five steps",
      cta: "Start the assessment",
    },
    ai: {
      generatingTitle: "Generating your diagnosis",
      generatingBody:
        "This may take a few seconds. We are analysing your answers with Bizin Portugal’s expertise.",
      retry: "Try again",
      errorTitle: "We could not generate the diagnosis",
      errorGeneric: "Check your connection and try again.",
      otherSectorLabel: "Describe your company’s sector",
      otherSectorPlaceholder:
        "e.g. medical device manufacturing, environmental consulting, specialised retail…",
      otherSectorHint:
        "One or two sentences are enough. Avoid personally identifiable data.",
      otherSectorRequired:
        "Please describe the sector (at least 3 characters) to continue.",
      executiveSummaryHeading: "Summary",
      diagnosisHeading: "Diagnosis",
      programmeDirectionsHeading: "Programme directions to explore",
    },
    result: {
      scoreLabel: "Eligibility score",
      programmesHeading: "Suggested programme directions",
      nextStepsHeading: "Suggested next steps",
      ctaBooking: "Book an investment consultation",
      restart: "Start again",
    },
    bands: {
      high: "Strong initial fit",
      medium: "Moderate initial fit",
      low: "Limited initial fit",
    },
    nav: { back: "Back", continue: "Continue", seeResult: "Continue" },
    lead: {
      title: "Final step",
      subtitle: "Leave your contact details to receive your project assessment.",
      nameLabel: "Name",
      namePlaceholder: "Your full name",
      emailLabel: "Email",
      emailPlaceholder: "name@company.com",
      phoneLabel: "Phone",
      phonePlaceholder: "+351 900 000 000",
      submit: "Request assessment",
      nameRequired: "Please enter your name (at least 2 characters).",
      emailInvalid: "Please enter a valid email address.",
      phoneRequired: "Please enter a valid phone number.",
    },
    stepProgress: "Step {current} of {total}",
  },
  howItWorks: {
    heading: "How it works",
    steps: [
      {
        number: "01",
        title: "Initial diagnosis",
        description:
          "Analysis of the business, its needs and objectives.",
      },
      {
        number: "02",
        title: "Strategy and growth plan",
        description:
          "Support structuring the investment and building team capability.",
      },
      {
        number: "03",
        title: "Ongoing support",
        description:
          "Strategic support in management and growth.",
      },
    ],
  },
  proof: {
    heading: "Confidence built on results",
    stats: [
      {
        value: "+30 years",
        label: "of business consulting experience",
        visible: true,
      },
      {
        value: "+400",
        label: "projects supported in Portugal",
        visible: true,
      },
      {
        value: "€43M",
        label: "in investment supported",
        visible: true,
      },
      {
        value: "+19 years",
        label: "of certified training experience",
        visible: true,
      },
      {
        value: "12",
        label: "certified training areas",
        visible: true,
      },
      {
        value: "+50,000 h",
        label: "of certified training delivered",
        visible: true,
      },
    ],
    quote: "",
    quoteAttribution: "",
  },
  faq: {
    heading: "Frequently asked questions",
    items: [
      {
        question: "Does Bizin Portugal support business management and strategy?",
        answer:
          "Yes. Bizin Portugal helps companies define strategy, growth priorities and investment decisions, aligning business goals, teams and available financing.",
      },
      {
        question: "What does human capital development support include?",
        answer:
          "It includes training needs analysis, capability plans, certified training across multiple areas and implementation support to strengthen critical team skills.",
      },
      {
        question: "What types of companies work with Bizin Portugal?",
        answer:
          "We work with SMEs and growing companies, domestic and international investors, across industry, services, technology, tourism, healthcare and more — always with concrete projects in Portugal.",
      },
      {
        question: "How does the initial project assessment work?",
        answer:
          "The calculator collects information about your business and project. Based on your answers, Bizin Portugal prepares a tailored initial read-out and follows up in a consultation to deepen the diagnosis.",
      },
    ],
  },
  finalCta: {
    heading: "Ready to take the next step?",
    body: "Talk to us to assess your needs and your project’s potential.",
    cta: "Book a consultation",
    microcopy: "No commitment at this stage",
    bookingUrl: "https://www.bizinportugal.com/#booking-section",
  },
};
