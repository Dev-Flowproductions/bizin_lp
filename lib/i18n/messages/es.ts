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
    heading: "Asegure su inversión en Portugal con más criterio y menos incertidumbre",
    subheading:
      "Crecer o implantarse en Portugal abre oportunidades reales, pero los incentivos, los requisitos de elegibilidad y los plazos de ejecución se interpretan mal sin apoyo local. Bizin Portugal ayuda a empresas e inversores a distinguir qué es razonable en el marco del Portugal 2030, qué programas pueden encajar y cómo avanzar con más seguridad.",
    ctaPrimary: "Ver mi elegibilidad",
    ctaSecondary: "Reservar consultoría de inversión",
    bookingUrl: "https://www.bizinportugal.com/#booking-section",
    imageUrl:
      "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=2340",
    imageAlt: "Paisaje del valle del Duero, Portugal",
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
    heading: "Evalúe el potencial de su proyecto en pocos pasos",
    subheading:
      "Responda a cuatro preguntas y obtenga una primera estimación de elegibilidad, los ejes de programa más relevantes para su caso y próximos pasos prácticos, sin datos personales.",
  },
  calculator: {
    eligibility: {
      disclaimer:
        "Este resultado es orientativo y se basa en reglas simplificadas. No constituye confirmación oficial de elegibilidad ni asesoramiento jurídico o financiero.",
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
    ],
    idle: {
      eyebrow: "Portugal 2030",
      title: "Cuatro preguntas.",
      titleAccent: "Un resultado claro.",
      body: "Sin datos personales. Avance paso a paso y obtenga una primera estimación de elegibilidad y los ejes de programa más relevantes.",
      durationLine: "Un minuto aprox. · cuatro pasos",
      cta: "Iniciar evaluación",
    },
    result: {
      scoreLabel: "Puntuación de elegibilidad",
      programmesHeading: "Ejes de programa recomendados",
      nextStepsHeading: "Próximos pasos",
      ctaBooking: "Reservar consultoría de inversión",
      restart: "Repetir evaluación",
    },
    bands: {
      high: "Encaje inicial alto",
      medium: "Encaje inicial medio",
      low: "Encaje inicial limitado",
    },
    nav: { back: "Atrás", continue: "Continuar", seeResult: "Ver resultado" },
    stepProgress: "Paso {current} de {total}",
  },
  howItWorks: {
    heading: "Cómo funciona",
    steps: [
      {
        number: "01",
        title: "Diagnóstico inicial",
        description:
          "Analizamos el contexto, la madurez y el potencial de encaje del proyecto con los incentivos.",
      },
      {
        number: "02",
        title: "Estrategia y solicitud",
        description:
          "Identificamos los apoyos más pertinentes y ayudamos a estructurar el proceso de solicitud.",
      },
      {
        number: "03",
        title: "Acompañamiento",
        description:
          "Apoyamos la ejecución para reducir riesgos, retrasos y desalineaciones.",
      },
    ],
  },
  proof: {
    heading: "Confianza basada en resultados",
    stats: [
      { value: "2,3 M€+", label: "Capital financiado y apalancado", visible: false },
      { value: "98 %+", label: "Tasa de satisfacción de clientes", visible: false },
      { value: "120+", label: "Clientes internacionales acompañados", visible: false },
    ],
    quote:
      "Nuestro equipo ayuda a empresas e inversores a orientarse en el ecosistema de incentivos en Portugal con rigor y claridad, sin promesas infladas.",
    quoteAttribution: "Equipo Bizin Portugal",
  },
  faq: {
    heading: "Preguntas frecuentes",
    items: [
      {
        question: "¿Qué empresas pueden beneficiarse de los incentivos Portugal 2030?",
        answer:
          "Los incentivos Portugal 2030 se dirigen a PYME y grandes empresas de sectores como industria, tecnología, turismo, energía, salud o formación. La elegibilidad depende del tipo de proyecto, la ubicación de la inversión y el perfil de la empresa. Bizin Portugal realiza un primer análisis para identificar las oportunidades más relevantes.",
      },
      {
        question: "¿Puede solicitar una empresa extranjera?",
        answer:
          "Sí, siempre que la actividad o la inversión se realice en Portugal. En algunos casos será necesaria una entidad jurídica local. Bizin Portugal acompaña todo el proceso, incluida la estructuración jurídica y la solicitud de ayudas.",
      },
      {
        question: "¿El resultado de la calculadora garantiza la elegibilidad?",
        answer:
          "No. La herramienta ofrece una estimación orientativa basada en reglas simplificadas. La elegibilidad real depende del programa, de la convocatoria vigente y de un análisis detallado del proyecto. El resultado debe interpretarse como una primera orientación, no como una validación oficial.",
      },
      {
        question: "¿En cuánto tiempo sabré si mi proyecto tiene sentido?",
        answer:
          "En una primera conversación con Bizin Portugal suele ser posible obtener una lectura preliminar del encaje en menos de una semana. Un análisis más profundo puede tardar entre dos y cuatro semanas, según la complejidad y la documentación disponible.",
      },
      {
        question: "¿Bizin solo tramita la solicitud o también apoya la ejecución?",
        answer:
          "Bizin Portugal acompaña el proyecto desde el diagnóstico hasta la ejecución: estructuración de la inversión, preparación y gestión de la solicitud, coordinación con las autoridades y apoyo durante la implementación para reducir riesgos y retrasos.",
      },
    ],
  },
  finalCta: {
    heading: "¿Quiere saber si Portugal 2030 es una vía seria para su proyecto?",
    body: "Solicite un primer análisis sin compromiso y avance con más claridad sobre elegibilidad, programas plausibles y próximos pasos.",
    cta: "Reservar consultoría de inversión",
    microcopy: "Sin compromiso en esta fase",
    bookingUrl: "https://www.bizinportugal.com/#booking-section",
  },
};
