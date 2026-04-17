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
    heading: "Invest in Portugal with clearer criteria and fewer blind spots",
    subheading:
      "Expanding or setting up in Portugal opens real opportunities — but incentives, eligibility rules and delivery timelines are easy to misread. Bizin Portugal helps companies and investors understand what is realistic, which Portugal 2030 axes may matter for your case, and how to move forward with more confidence.",
    ctaPrimary: "Check my eligibility",
    ctaSecondary: "Book an investment consultation",
    bookingUrl: "https://www.bizinportugal.com/#booking-section",
    imageUrl:
      "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=2340",
    imageAlt: "Douro Valley landscape, Portugal",
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
    heading: "Assess your project’s potential in a few steps",
    subheading:
      "Answer four short questions and receive a first-pass eligibility estimate, the programme axes most relevant to your profile, and practical next steps — without sharing personal data.",
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
    ],
    idle: {
      eyebrow: "Portugal 2030",
      title: "Four questions.",
      titleAccent: "One clear read-out.",
      body: "No personal data. Work through the steps and get a first-pass eligibility estimate plus the most relevant programme axes for your answers.",
      durationLine: "About one minute · four steps",
      cta: "Start the assessment",
    },
    ai: {
      generatingTitle: "Generating your diagnosis",
      generatingBody:
        "This may take a few seconds. We are combining your answers with Portugal 2030 context and how Bizin Portugal typically supports projects.",
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
    nav: { back: "Back", continue: "Continue", seeResult: "See results" },
    stepProgress: "Step {current} of {total}",
  },
  howItWorks: {
    heading: "How it works",
    steps: [
      {
        number: "01",
        title: "Initial diagnosis",
        description:
          "We review context, maturity and how your project could map to available incentives.",
      },
      {
        number: "02",
        title: "Strategy and application",
        description:
          "We identify the most relevant schemes and help you structure the process end to end.",
      },
      {
        number: "03",
        title: "Delivery support",
        description:
          "We stay involved through implementation to reduce risk, delay and misalignment.",
      },
    ],
  },
  proof: {
    heading: "Confidence built on delivery, not slogans",
    stats: [
      { value: "€2.3M+", label: "Capital financed and leveraged", visible: false },
      { value: "98%+", label: "Client satisfaction rate", visible: false },
      { value: "120+", label: "International clients supported", visible: false },
    ],
    quote:
      "Our team works with companies and investors who need a clear, rigorous read of Portugal’s incentives landscape — without noise or over-promising.",
    quoteAttribution: "Bizin Portugal team",
  },
  faq: {
    heading: "Frequently asked questions",
    items: [
      {
        question: "Which companies can benefit from Portugal 2030 incentives?",
        answer:
          "Portugal 2030 is aimed at SMEs and large enterprises across sectors such as industry, technology, tourism, energy, healthcare and training. Eligibility depends on project type, investment location and company profile. Bizin Portugal runs an initial review to surface the most relevant opportunities for your specific case.",
      },
      {
        question: "Can a foreign-owned company apply?",
        answer:
          "Yes. Foreign companies can access Portugal 2030 support where the activity or investment is carried out in Portugal. In some situations you will need a Portuguese legal entity. Bizin Portugal supports the full journey, including legal structuring and the application itself.",
      },
      {
        question: "Does the calculator result guarantee eligibility?",
        answer:
          "No. The tool provides an indicative estimate based on simplified assumptions. Real eligibility depends on the programme, the notice in force and a detailed review of your project. Treat the output as orientation, not an official determination.",
      },
      {
        question: "How quickly can I know if my project is worth pursuing?",
        answer:
          "In an initial conversation with Bizin Portugal you can usually get a preliminary read on fit within a week. A deeper review typically takes two to four weeks, depending on complexity and how complete your documentation is.",
      },
      {
        question: "Does Bizin only handle the application, or implementation too?",
        answer:
          "Bizin Portugal supports the project from diagnosis through to delivery. That includes structuring the investment, preparing and managing the incentive application, coordinating with authorities and supporting implementation to reduce risk and slippage.",
      },
    ],
  },
  finalCta: {
    heading: "Want to know whether Portugal 2030 is a serious option for your project?",
    body: "Request an initial review without obligation and move forward with clearer visibility on eligibility, realistic programme routes and practical next steps.",
    cta: "Book an investment consultation",
    microcopy: "No commitment at this stage",
    bookingUrl: "https://www.bizinportugal.com/#booking-section",
  },
};
