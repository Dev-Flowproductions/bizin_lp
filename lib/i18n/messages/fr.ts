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
    heading: "Sécurisez votre investissement au Portugal avec plus de clarté et de méthode",
    subheading:
      "Investir ou se développer au Portugal ouvre de vraies perspectives, mais les aides, les critères d’éligibilité et le calendrier d’exécution se décryptent mal sans appui local. Bizin Portugal aide entreprises et investisseurs à distinguer le pertinent des programmes Portugal 2030, à cadrer leur dossier et à avancer avec plus de sérénité.",
    ctaPrimary: "Voir mon niveau d’éligibilité",
    ctaSecondary: "Réserver une consultation investissement",
    bookingUrl: "https://www.bizinportugal.com/#booking-section",
    imageUrl:
      "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=2340",
    imageAlt: "Vallée du Douro, Portugal",
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
    heading: "Évaluez le potentiel de votre projet en quelques étapes",
    subheading:
      "Répondez à quatre questions et recevez une première estimation d’éligibilité, les axes de programme les plus pertinents pour votre profil et des prochaines étapes concrètes — sans données nominatives.",
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
    ],
    idle: {
      eyebrow: "Portugal 2030",
      title: "Quatre questions.",
      titleAccent: "Une lecture claire.",
      body: "Sans données personnelles. Avancez étape par étape pour obtenir une première estimation d’éligibilité et les axes de programme les plus pertinents.",
      durationLine: "Environ une minute · quatre étapes",
      cta: "Lancer l’évaluation",
    },
    ai: {
      generatingTitle: "Génération de votre diagnostic",
      generatingBody:
        "Cela peut prendre quelques secondes. Nous croisons vos réponses avec le contexte Portugal 2030 et le rôle de Bizin Portugal.",
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
    nav: { back: "Retour", continue: "Continuer", seeResult: "Voir le résultat" },
    stepProgress: "Étape {current} sur {total}",
  },
  howItWorks: {
    heading: "Comment ça se passe",
    steps: [
      {
        number: "01",
        title: "Diagnostic initial",
        description:
          "Nous passons en revue le contexte, la maturité du projet et son potentiel de rattachement aux dispositifs.",
      },
      {
        number: "02",
        title: "Stratégie et candidature",
        description:
          "Nous identifions les aides les plus pertinentes et structurons le parcours de candidature.",
      },
      {
        number: "03",
        title: "Accompagnement à la mise en œuvre",
        description:
          "Nous restons engagés pendant l’exécution pour limiter risques, retards et décalages.",
      },
    ],
  },
  proof: {
    heading: "Une relation de confiance fondée sur des résultats",
    stats: [
      { value: "2,3 M€+", label: "Capital financé et levier", visible: false },
      { value: "98 %+", label: "Taux de satisfaction clients", visible: false },
      { value: "120+", label: "Clients internationaux accompagnés", visible: false },
    ],
    quote:
      "Notre équipe aide entreprises et investisseurs à naviguer l’écosystème d’aides au Portugal avec méthode et exigence — sans promesses irréalistes.",
    quoteAttribution: "Équipe Bizin Portugal",
  },
  faq: {
    heading: "Questions fréquentes",
    items: [
      {
        question: "Quelles entreprises peuvent bénéficier des aides Portugal 2030 ?",
        answer:
          "Les dispositifs Portugal 2030 s’adressent aux PME comme aux grandes entreprises dans des secteurs variés : industrie, technologie, tourisme, énergie, santé, formation, etc. L’éligibilité dépend du type de projet, du lieu d’investissement et du profil de l’entreprise. Bizin Portugal réalise une première analyse pour identifier les opportunités les plus pertinentes.",
      },
      {
        question: "Une société étrangère peut-elle candidater ?",
        answer:
          "Oui, dès lors que l’activité ou l’investissement est réalisé au Portugal. Dans certains cas, il faudra constituer une entité juridique locale. Bizin Portugal accompagne l’ensemble du dispositif, y compris la structuration juridique et le montage de candidature.",
      },
      {
        question: "Le résultat du simulateur garantit-il l’éligibilité ?",
        answer:
          "Non. L’outil fournit une estimation indicative basée sur des règles simplifiées. L’éligibilité réelle dépend du programme, de l’avis d’appel en vigueur et d’une analyse détaillée du projet. Le résultat doit être lu comme une orientation, pas comme une validation officielle.",
      },
      {
        question: "En combien de temps sais-je si mon projet est pertinent ?",
        answer:
          "Lors d’un premier échange avec Bizin Portugal, une lecture préliminaire du cadrage est en général possible en moins d’une semaine. Une analyse plus poussée prend souvent deux à quatre semaines, selon la complexité et l’état de la documentation.",
      },
      {
        question: "Bizin ne gère-t-il que la candidature, ou aussi la mise en œuvre ?",
        answer:
          "Bizin Portugal suit le projet du diagnostic jusqu’à l’exécution : structuration de l’investissement, préparation et gestion de la candidature, coordination avec les autorités et appui pendant la mise en œuvre pour réduire risques et retards.",
      },
    ],
  },
  finalCta: {
    heading: "Vous voulez savoir si le Portugal 2030 est une piste sérieuse pour votre projet ?",
    body: "Demandez une première analyse sans engagement et avancez avec plus de clarté sur l’éligibilité, les programmes plausibles et les prochaines étapes.",
    cta: "Réserver une consultation investissement",
    microcopy: "Sans engagement à ce stade",
    bookingUrl: "https://www.bizinportugal.com/#booking-section",
  },
};
