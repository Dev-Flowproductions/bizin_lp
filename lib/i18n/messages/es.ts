import type { SiteDictionary } from "../types";

export const es: SiteDictionary = {
  locale: "es",
  htmlLang: "es-ES",
  seo: {
    title: "Invertir en Portugal y ayudas Portugal 2030 | Evalúe su proyecto | Bizin Portugal",
    description:
      "Compruebe si su proyecto encaja en la lógica de las ayudas Portugal 2030. Primera estimación de elegibilidad gratuita y asesoramiento estratégico con Bizin Portugal, sin datos personales.",
    ogLocale: "es_ES",
  },
  nav: {
    logoUrl: "https://www.bizinportugal.com/logo.svg",
    logoAlt: "Bizin Portugal",
    logoAriaHome: "Bizin Portugal — inicio",
    cta: "Pedir cita",
    bookingUrl: "https://www.bizinportugal.com/#booking-section",
    languageMenuAria: "Elegir idioma",
  },
  hero: {
    heading:
      "Ayudamos a su negocio a crecer - en estrategia, personas y financiación.",
    subheading:
      "Consultoría de negocios y capacitación humana para empresas que quieren crecer.",
    ctaPrimary: "Evaluar mi proyecto",
    ctaSecondary: "Reservar consultoría",
    bookingUrl: "https://www.bizinportugal.com/#booking-section",
    imageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2340",
    imageAlt: "Equipo en reunión de trabajo",
  },
  trustMetrics: [
    { value: "2,3 M€+", label: "Capital financiado y apalancado", visible: false },
    { value: "98 %+", label: "Tasa de satisfacción de clientes", visible: false },
    { value: "120+", label: "Clientes internacionales acompañados", visible: false },
  ],
  problem: {
    heading: "El coste de avanzar sin claridad",
    body: "Perder convocatorias, malinterpretar criterios o presentar una solicitud mal alineada puede poner en riesgo la financiación, retrasar decisiones y debilitar todo el plan. Muchas veces el problema no es la falta de potencial, sino la ausencia de orientación experta en el momento adecuado.",
  },
  solution: {
    eyebrow: "Nuestro enfoque",
    heading: "De la estrategia a la solicitud, con visión integral del proyecto",
    body: "Bizin actúa donde la estrategia se encuentra con la ejecución. Analizamos su proyecto, priorizamos las oportunidades más coherentes en el ecosistema Portugal 2030 y ayudamos a estructurar el capital humano y el crecimiento que refuerzan la viabilidad de la operación.",
    bullets: [
      "Diagnóstico inicial de elegibilidad",
      "Encaje de programas e incentivos",
      "Apoyo a la estructuración de la inversión y del equipo",
      "Acompañamiento hasta la ejecución",
    ],
  },
  calculatorSection: {
    heading: "Evalúe el potencial de su proyecto",
  },
  calculator: {
    eligibility: {
      disclaimer:
        "Este resultado es orientativo; se ha elaborado con IA a partir de sus respuestas y contexto general (incluido Portugal 2030). No constituye confirmación oficial de elegibilidad ni asesoramiento jurídico o financiero.",
      programmeSuggestions: {
        tecnologia: [
          {
            name: "PRR — Transición digital",
            description:
              "Apoyos a la digitalización y la innovación tecnológica de empresas, alineados con el PRR y el Portugal 2030.",
          },
          {
            name: "Portugal 2030 — SI Innovación",
            description:
              "Incentivos a proyectos de innovación productiva con componente tecnológica clara.",
          },
        ],
        energia: [
          {
            name: "Portugal 2030 — Transición energética",
            description:
              "Medidas de apoyo a la eficiencia energética, renovables y descarbonización industrial.",
          },
          {
            name: "PRR — Descarbonización",
            description:
              "Financiación orientada a reducir emisiones y modernizar el uso energético.",
          },
        ],
        industria: [
          {
            name: "Portugal 2030 — SI Cualificación PYME",
            description:
              "Modernización y cualificación de PYME industriales con impacto en competitividad.",
          },
          {
            name: "Portugal 2030 — SI Innovación",
            description:
              "Apoyo a la innovación productiva en el tejido industrial.",
          },
        ],
        turismo: [
          {
            name: "Portugal 2030 — Turismo",
            description:
              "Incentivos al desarrollo, la calidad y la sostenibilidad de la oferta turística.",
          },
          {
            name: "Portugal 2030 — SI Cualificación PYME",
            description:
              "Mejora de servicios, procesos y posicionamiento de PYME vinculadas al turismo.",
          },
        ],
        saude: [
          {
            name: "Portugal 2030 — SI Innovación",
            description:
              "Líneas de incentivo a la innovación en salud, dispositivos médicos y servicios especializados.",
          },
          {
            name: "PRR — Salud",
            description:
              "Apoyo a la modernización de infraestructuras y servicios sanitarios.",
          },
        ],
        default: [
          {
            name: "Portugal 2030 — SI Cualificación PYME",
            description:
              "Incentivos a la modernización, digitalización y competitividad de las PYME.",
          },
          {
            name: "Portugal 2030 — SI Innovación",
            description:
              "Apoyo a proyectos de innovación y desarrollo productivo.",
          },
        ],
      },
      nextSteps: {
        high: [
          "Solicite una primera lectura estratégica con Bizin Portugal.",
          "Reúna datos del proyecto: inversión, sector, ubicación y objetivos.",
          "Identifique convocatorias abiertas en los ejes sugeridos.",
        ],
        medium: [
          "Concerte una reunión diagnóstico para afinar el encaje normativo.",
          "Valore ajustes de alcance o inversión que puedan reforzar la elegibilidad.",
          "Bizin ayuda a elegir la ruta de programa más coherente con su perfil.",
        ],
        low: [
          "Reserve una consulta para un análisis más profundo y personalizado.",
          "Ajustes puntuales a veces mejoran el encaje frente a los avisos vigentes.",
          "Bizin aborda casos complejos y puede proponer alternativas relevantes.",
        ],
      },
    },
    steps: [
      {
        field: "sector",
        question: "¿En qué sector opera principalmente su empresa?",
        hint: "Elija el ámbito más cercano a su actividad principal.",
        optionLabels: {
          industria: "Industria",
          tecnologia: "Tecnología / software",
          servicos: "Servicios a empresas",
          turismo: "Turismo",
          saude: "Salud",
          educacao: "Educación / formación",
          logistica: "Logística",
          energia: "Energía / sostenibilidad",
          outro: "Otro",
        },
      },
      {
        field: "employees",
        question: "¿Cuántas personas emplea la empresa?",
        hint: "Considere la plantilla vinculada a la entidad que invierte.",
        optionLabels: {
          "1_9": "1 – 9 empleados",
          "10_49": "10 – 49 empleados",
          "50_249": "50 – 249 empleados",
          "250_plus": "250 o más empleados",
        },
      },
      {
        field: "region",
        question: "¿Dónde se ubicará la inversión?",
        hint: "Región portuguesa donde se desarrollará el proyecto.",
        optionLabels: {
          norte: "Norte",
          centro: "Centro",
          lisboa: "Lisboa",
          alentejo: "Alentejo",
          algarve: "Algarve",
          madeira: "Madeira",
          acores: "Azores",
        },
      },
      {
        field: "investment",
        question: "¿Cuál es el importe estimado de la inversión?",
        hint: "Incluya costes elegibles: equipamiento, obras, TI, formación, etc.",
        optionLabels: {
          under_50k: "Menos de 50 000 €",
          "50k_200k": "50 000 € – 200 000 €",
          "200k_1m": "200 000 € – 1 000 000 €",
          "1m_5m": "1 000 000 € – 5 000 000 €",
          over_5m: "Más de 5 000 000 €",
        },
      },
      {
        field: "investmentType",
        question: "¿Qué tipo de inversión planea realizar?",
        hint: "Elija la opción que mejor describa el foco principal del proyecto.",
        optionLabels: {
          equipamentos: "Adquisición de equipos",
          software: "Software",
          construcao: "Construcción",
          marketing: "Marketing",
          formacao: "Formación",
          recursos_humanos: "Recursos humanos",
        },
      },
    ],
    idle: {
      eyebrow: "Evaluación rápida",
      title: "Cinco preguntas.",
      titleAccent: "Una evaluación personalizada.",
      body: "Avance paso a paso y reciba una primera lectura del potencial de su proyecto.",
      durationLine: "Unos 2 minutos · cinco pasos",
      cta: "Iniciar evaluación",
    },
    ai: {
      generatingTitle: "Generando su diagnóstico",
      generatingBody:
        "Puede tardar unos segundos. Estamos analizando sus respuestas con la experiencia de Bizin Portugal.",
      retry: "Intentar de nuevo",
      errorTitle: "No se pudo generar el diagnóstico",
      errorGeneric: "Compruebe su conexión e inténtelo de nuevo.",
      otherSectorLabel: "Describa el sector de su empresa",
      otherSectorPlaceholder:
        "p. ej. fabricación de dispositivos médicos, consultoría ambiental, comercio especializado…",
      otherSectorHint:
        "Bastan una o dos frases. Evite datos personales identificables.",
      otherSectorRequired:
        "Describa el sector (mínimo 3 caracteres) para continuar.",
      executiveSummaryHeading: "Resumen",
      diagnosisHeading: "Diagnóstico",
      programmeDirectionsHeading: "Direcciones de programa a explorar",
    },
    result: {
      scoreLabel: "Puntuación de elegibilidad",
      programmesHeading: "Direcciones de programa sugeridas",
      nextStepsHeading: "Próximos pasos",
      ctaBooking: "Reservar consultoría de inversión",
      restart: "Repetir evaluación",
    },
    bands: {
      high: "Encaje inicial alto",
      medium: "Encaje inicial medio",
      low: "Encaje inicial limitado",
    },
    nav: { back: "Atrás", continue: "Continuar", seeResult: "Continuar" },
    lead: {
      title: "Último paso",
      subtitle: "Deje sus datos de contacto para recibir la evaluación de su proyecto.",
      nameLabel: "Nombre",
      namePlaceholder: "Su nombre completo",
      emailLabel: "Email",
      emailPlaceholder: "nombre@empresa.com",
      phoneLabel: "Teléfono",
      phonePlaceholder: "+351 900 000 000",
      submit: "Pedir evaluación",
      nameRequired: "Indique su nombre (mínimo 2 caracteres).",
      emailInvalid: "Indique un email válido.",
      phoneRequired: "Indique un número de teléfono válido.",
    },
    stepProgress: "Paso {current} de {total}",
  },
  howItWorks: {
    heading: "Cómo funciona",
    steps: [
      {
        number: "01",
        title: "Diagnóstico inicial",
        description:
          "Análisis del negocio, de las necesidades y de los objetivos.",
      },
      {
        number: "02",
        title: "Estrategia y plan de crecimiento",
        description:
          "Apoyo en la estructuración de la inversión y en la capacitación de los equipos.",
      },
      {
        number: "03",
        title: "Acompañamiento",
        description:
          "Apoyo estratégico en la gestión y el crecimiento.",
      },
    ],
  },
  proof: {
    heading: "Confianza basada en resultados",
    stats: [
      { value: "+30 años", label: "de experiencia en consultoría empresarial", visible: true },
      { value: "+400", label: "proyectos apoyados en Portugal", visible: true },
      { value: "43 M€", label: "en inversión acompañada", visible: true },
      { value: "+19 años", label: "de experiencia en formación certificada", visible: true },
      { value: "12", label: "áreas de formación certificada", visible: true },
      { value: "+50 000 h", label: "de formación certificada", visible: true },
    ],
    quote: "",
    quoteAttribution: "",
  },
  faq: {
    heading: "Preguntas frecuentes",
    items: [
      {
        question: "¿Bizin Portugal apoya en la gestión y estrategia del negocio?",
        answer:
          "Sí. Bizin Portugal ayuda a las empresas a definir estrategia, prioridades de crecimiento y decisiones de inversión, alineando objetivos, equipos y financiación.",
      },
      {
        question: "¿Qué incluye el apoyo a la capacitación de recursos humanos?",
        answer:
          "Incluye diagnóstico de necesidades formativas, planes de capacitación, formación certificada en diversas áreas y apoyo a la implementación.",
      },
      {
        question: "¿Qué tipo de empresas trabajan con Bizin Portugal?",
        answer:
          "PYME y empresas en crecimiento, inversores nacionales e internacionales, en industria, servicios, tecnología, turismo, salud y otros sectores — con proyectos concretos en Portugal.",
      },
      {
        question: "¿Cómo funciona la evaluación inicial del proyecto?",
        answer:
          "La calculadora recoge información sobre su negocio y proyecto. Con base en sus respuestas, Bizin Portugal prepara una lectura inicial personalizada y le contacta para profundizar el diagnóstico.",
      },
    ],
  },
  finalCta: {
    heading: "¿Listo para dar el siguiente paso?",
    body: "Hable con nosotros para evaluar las necesidades y el potencial de su proyecto.",
    cta: "Reservar consultoría",
    microcopy: "Sin compromiso en esta fase",
    bookingUrl: "https://www.bizinportugal.com/#booking-section",
  },
};
