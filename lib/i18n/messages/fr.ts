import type { SiteDictionary } from "../types";

export const fr: SiteDictionary = {
  locale: "fr",
  htmlLang: "fr-FR",
  seo: {
    title: "Investir au Portugal & aides Portugal 2030 | Évaluez votre projet | Bizin Portugal",
    description:
      "Vérifiez si votre projet peut s’inscrire dans la logique des aides Portugal 2030. Première estimation d’éligibilité gratuite et accompagnement stratégique avec Bizin Portugal — sans données personnelles.",
    ogLocale: "fr_FR",
  },
  nav: {
    logoUrl: "https://www.bizinportugal.com/logo.svg",
    logoAlt: "Bizin Portugal",
    logoAriaHome: "Bizin Portugal — accueil",
    cta: "Prendre rendez-vous",
    bookingUrl: "https://www.bizinportugal.com/#booking-section",
    languageMenuAria: "Choisir la langue",
  },
  hero: {
    heading:
      "Nous aidons votre entreprise à croître - en stratégie, en personnes et en financement.",
    subheading:
      "Conseil aux entreprises et développement du capital humain pour les entreprises en croissance.",
    ctaPrimary: "Évaluer mon projet",
    ctaSecondary: "Réserver une consultation",
    bookingUrl: "https://www.bizinportugal.com/#booking-section",
    imageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2340",
    imageAlt: "Équipe en réunion de travail",
  },
  trustMetrics: [
    { value: "2,3 M€+", label: "Capital financé et levier", visible: false },
    { value: "98 %+", label: "Taux de satisfaction clients", visible: false },
    { value: "120+", label: "Clients internationaux accompagnés", visible: false },
  ],
  problem: {
    heading: "Le prix d’un investissement sans visibilité",
    body: "Manquer un calendrier de candidature, mal interpréter des critères ou déposer un dossier mal aligné peut mettre le financement en danger, retarder la décision et fragiliser tout le plan. Souvent, le frein n’est pas le potentiel du projet — c’est l’absence d’orientation experte au bon moment.",
  },
  solution: {
    eyebrow: "Notre approche",
    heading: "De la stratégie au dossier, avec une vision globale du projet",
    body: "Bizin intervient là où la stratégie rencontre l’opérationnel. Nous analysons votre projet, identifions les leviers Portugal 2030 les plus cohérents et aidons à structurer les volets capital humain et croissance qui renforcent la viabilité de l’opération.",
    bullets: [
      "Premier diagnostic d’éligibilité",
      "Cartographie des programmes et aides pertinentes",
      "Appui à la structuration de l’investissement et des équipes",
      "Suivi jusqu’à la mise en œuvre",
    ],
  },
  calculatorSection: {
    heading: "Évaluez le potentiel de votre projet",
  },
  calculator: {
    eligibility: {
      disclaimer:
        "Ce résultat est indicatif ; il est produit par IA à partir de vos réponses et d’informations générales (y compris le Portugal 2030). Il ne vaut pas validation officielle d’éligibilité et ne constitue pas un conseil juridique ou financier.",
      programmeSuggestions: {
        tecnologia: [
          {
            name: "PRR — Transition numérique",
            description:
              "Soutiens à la digitalisation et à l’innovation technologique des entreprises, en cohérence avec le PRR et le Portugal 2030.",
          },
          {
            name: "Portugal 2030 — SI Innovation",
            description:
              "Aides aux projets d’innovation productive avec composante technologique nette.",
          },
        ],
        energia: [
          {
            name: "Portugal 2030 — Transition énergétique",
            description:
              "Mesures en faveur de l’efficacité énergétique, des énergies renouvelables et de la décarbonation industrielle.",
          },
          {
            name: "PRR — Décarbonation",
            description:
              "Financement orienté vers la baisse des émissions et la modernisation énergétique.",
          },
        ],
        industria: [
          {
            name: "Portugal 2030 — SI Qualification PME",
            description:
              "Modernisation et montée en gamme des PME industrielles avec impact compétitivité.",
          },
          {
            name: "Portugal 2030 — SI Innovation",
            description:
              "Appui à l’innovation productive dans le tissu industriel.",
          },
        ],
        turismo: [
          {
            name: "Portugal 2030 — Tourisme",
            description:
              "Aides au développement, à la qualité et à la durabilité de l’offre touristique.",
          },
          {
            name: "Portugal 2030 — SI Qualification PME",
            description:
              "Amélioration des services, des processus et du positionnement des PME liées au tourisme.",
          },
        ],
        saude: [
          {
            name: "Portugal 2030 — SI Innovation",
            description:
              "Dispositifs d’aide à l’innovation dans la santé, la medtech et les services spécialisés.",
          },
          {
            name: "PRR — Santé",
            description:
              "Soutien à la modernisation des infrastructures et services de santé.",
          },
        ],
        default: [
          {
            name: "Portugal 2030 — SI Qualification PME",
            description:
              "Aides à la modernisation, à la digitalisation et à la compétitivité des PME.",
          },
          {
            name: "Portugal 2030 — SI Innovation",
            description:
              "Soutien aux projets d’innovation et de développement productif.",
          },
        ],
      },
      nextSteps: {
        high: [
          "Demandez une première lecture stratégique à Bizin Portugal.",
          "Rassemblez les éléments clés : montant, secteur, localisation et objectifs.",
          "Identifiez les appels à candidatures ouverts sur les axes suggérés.",
        ],
        medium: [
          "Planifiez un entretien diagnostic pour affiner le cadrage au regard des textes.",
          "Évaluez d’éventuels ajustements de périmètre ou d’investissement pour renforcer l’éligibilité.",
          "Bizin aide à choisir l’itinéraire de programme le plus cohérent avec votre profil.",
        ],
        low: [
          "Prenez rendez-vous pour une analyse approfondie et personnalisée.",
          "Des ajustements ciblés peuvent parfois améliorer le positionnement au regard des avis en vigueur.",
          "Bizin accompagne les dossiers complexes et identifie des alternatives pertinentes.",
        ],
      },
    },
    steps: [
      {
        field: "sector",
        question: "Dans quel secteur votre entreprise est-elle principalement active ?",
        hint: "Choisissez le domaine le plus proche de votre cœur de métier.",
        optionLabels: {
          industria: "Industrie",
          tecnologia: "Technologie / logiciel",
          servicos: "Services aux entreprises",
          turismo: "Tourisme",
          saude: "Santé",
          educacao: "Éducation / formation",
          logistica: "Logistique",
          energia: "Énergie / durabilité",
          outro: "Autre",
        },
      },
      {
        field: "employees",
        question: "Combien de salariés compte votre entreprise ?",
        hint: "Effectif total rattaché à l’entité qui investit.",
        optionLabels: {
          "1_9": "1 à 9 salariés",
          "10_49": "10 à 49 salariés",
          "50_249": "50 à 249 salariés",
          "250_plus": "250 salariés ou plus",
        },
      },
      {
        field: "region",
        question: "Où sera localisé l’investissement ?",
        hint: "Région portugaise où le projet sera déployé.",
        optionLabels: {
          norte: "Nord",
          centro: "Centre",
          lisboa: "Lisbonne",
          alentejo: "Alentejo",
          algarve: "Algarve",
          madeira: "Madère",
          acores: "Açores",
        },
      },
      {
        field: "investment",
        question: "Quel est le montant estimé de l’investissement ?",
        hint: "Incluez les dépenses éligibles : équipements, travaux, SI, formation, etc.",
        optionLabels: {
          under_50k: "Moins de 50 000 €",
          "50k_200k": "50 000 € – 200 000 €",
          "200k_1m": "200 000 € – 1 000 000 €",
          "1m_5m": "1 000 000 € – 5 000 000 €",
          over_5m: "Plus de 5 000 000 €",
        },
      },
      {
        field: "investmentType",
        question: "Quel type d’investissement envisagez-vous ?",
        hint: "Choisissez l’option qui décrit le mieux l’objectif principal du projet.",
        optionLabels: {
          equipamentos: "Acquisition d’équipements",
          software: "Logiciel",
          construcao: "Construction",
          marketing: "Marketing",
          formacao: "Formation",
          recursos_humanos: "Ressources humaines",
        },
      },
    ],
    idle: {
      eyebrow: "Évaluation rapide",
      title: "Cinq questions.",
      titleAccent: "Une évaluation personnalisée.",
      body: "Avancez étape par étape et recevez une première lecture du potentiel de votre projet.",
      durationLine: "Environ 2 minutes · cinq étapes",
      cta: "Lancer l’évaluation",
    },
    ai: {
      generatingTitle: "Génération de votre diagnostic",
      generatingBody:
        "Cela peut prendre quelques secondes. Nous analysons vos réponses avec l’expertise de Bizin Portugal.",
      retry: "Réessayer",
      errorTitle: "Impossible de générer le diagnostic",
      errorGeneric: "Vérifiez votre connexion et réessayez.",
      otherSectorLabel: "Décrivez le secteur de votre entreprise",
      otherSectorPlaceholder:
        "p.ex. fabrication de dispositifs médicaux, conseil environnemental, commerce spécialisé…",
      otherSectorHint:
        "Une ou deux phrases suffisent. Évitez les données personnelles identifiables.",
      otherSectorRequired:
        "Décrivez le secteur (au moins 3 caractères) pour continuer.",
      executiveSummaryHeading: "Synthèse",
      diagnosisHeading: "Diagnostic",
      programmeDirectionsHeading: "Axes de programme à explorer",
    },
    result: {
      scoreLabel: "Score d’éligibilité",
      programmesHeading: "Directions de programme suggérées",
      nextStepsHeading: "Prochaines étapes",
      ctaBooking: "Réserver une consultation investissement",
      restart: "Recommencer l’évaluation",
    },
    bands: {
      high: "Adéquation initiale forte",
      medium: "Adéquation initiale modérée",
      low: "Adéquation initiale limitée",
    },
    nav: { back: "Retour", continue: "Continuer", seeResult: "Continuer" },
    lead: {
      title: "Dernière étape",
      subtitle: "Laissez vos coordonnées pour recevoir l’évaluation de votre projet.",
      nameLabel: "Nom",
      namePlaceholder: "Votre nom complet",
      emailLabel: "Email",
      emailPlaceholder: "nom@entreprise.com",
      phoneLabel: "Téléphone",
      phonePlaceholder: "+351 900 000 000",
      submit: "Demander l’évaluation",
      nameRequired: "Indiquez votre nom (minimum 2 caractères).",
      emailInvalid: "Indiquez une adresse email valide.",
      phoneRequired: "Indiquez un numéro de téléphone valide.",
    },
    stepProgress: "Étape {current} sur {total}",
  },
  howItWorks: {
    heading: "Comment ça se passe",
    steps: [
      {
        number: "01",
        title: "Diagnostic initial",
        description:
          "Analyse de l’entreprise, des besoins et des objectifs.",
      },
      {
        number: "02",
        title: "Stratégie et plan de croissance",
        description:
          "Appui à la structuration de l’investissement et à la montée en compétences des équipes.",
      },
      {
        number: "03",
        title: "Accompagnement",
        description:
          "Appui stratégique à la gestion et à la croissance.",
      },
    ],
  },
  proof: {
    heading: "Confiance construite avec des résultats",
    stats: [
      { value: "+30 ans", label: "d’expérience en conseil aux entreprises", visible: true },
      { value: "+400", label: "projets accompagnés au Portugal", visible: true },
      { value: "43 M€", label: "d’investissement accompagné", visible: true },
      { value: "+19 ans", label: "d’expérience en formation certifiée", visible: true },
      { value: "12", label: "domaines de formation certifiée", visible: true },
      { value: "+50 000 h", label: "de formation certifiée", visible: true },
    ],
    quote: "",
    quoteAttribution: "",
  },
  faq: {
    heading: "Questions fréquentes",
    items: [
      {
        question: "Bizin Portugal accompagne-t-elle la gestion et la stratégie de l’entreprise ?",
        answer:
          "Oui. Bizin Portugal aide les entreprises à définir leur stratégie, leurs priorités de croissance et leurs décisions d’investissement, en alignant objectifs, équipes et financement.",
      },
      {
        question: "Que comprend l’accompagnement en capital humain ?",
        answer:
          "Diagnostic des besoins formatifs, plans de montée en compétences, formation certifiée dans plusieurs domaines et appui à la mise en œuvre.",
      },
      {
        question: "Quels types d’entreprises travaillent avec Bizin Portugal ?",
        answer:
          "PME et entreprises en croissance, investisseurs nationaux et internationaux, dans l’industrie, les services, la tech, le tourisme, la santé et d’autres secteurs — avec des projets concrets au Portugal.",
      },
      {
        question: "Comment fonctionne l’évaluation initiale du projet ?",
        answer:
          "Le calculateur recueille des informations sur votre entreprise et votre projet. Sur cette base, Bizin Portugal prépare une première lecture personnalisée et vous recontacte pour approfondir le diagnostic.",
      },
    ],
  },
  finalCta: {
    heading: "Prêt à franchir la prochaine étape ?",
    body: "Contactez-nous pour évaluer vos besoins et le potentiel de votre projet.",
    cta: "Réserver une consultation",
    microcopy: "Sans engagement à ce stade",
    bookingUrl: "https://www.bizinportugal.com/#booking-section",
  },
};
