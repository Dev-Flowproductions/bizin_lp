import type { SiteDictionary } from "../types";

export const pt: SiteDictionary = {
  locale: "pt",
  htmlLang: "pt-PT",
  seo: {
    title: "Consultoria de negócios e capacitação humana | Bizin Portugal",
    description:
      "Ajudamos o seu negócio a crescer na estratégia, nas pessoas e no financiamento. Consultoria empresarial e capacitação humana em Portugal.",
    ogLocale: "pt_PT",
  },
  nav: {
    logoUrl: "https://www.bizinportugal.com/logo.svg",
    logoAlt: "Bizin Portugal",
    logoAriaHome: "Bizin Portugal — página principal",
    cta: "Agendar consultoria",
    bookingUrl: "https://www.bizinportugal.com/#booking-section",
    languageMenuAria: "Escolher idioma",
  },
  hero: {
    heading:
      "Ajudamos o seu negócio a crescer - na estratégia, nas pessoas e no financiamento.",
    subheading:
      "Consultoria de negócios e capacitação humana para empresas que querem crescer.",
    ctaPrimary: "Avaliar o meu projeto",
    ctaSecondary: "Agendar consultoria",
    bookingUrl: "https://www.bizinportugal.com/#booking-section",
    imageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2340",
    imageAlt: "Equipa em reunião de trabalho",
  },
  trustMetrics: [
    { value: "€2,3M+", label: "Capital financiado e alavancado", visible: false },
    { value: "98%+", label: "Taxa de satisfação de clientes", visible: false },
    { value: "120+", label: "Clientes estrangeiros apoiados", visible: false },
  ],
  problem: {
    heading: "O custo de avançar sem clareza",
    body: "Perder prazos, interpretar mal critérios de elegibilidade ou avançar com uma candidatura pouco alinhada pode comprometer financiamento, atrasar decisões e fragilizar todo o plano de investimento. Em muitos casos, o problema não é a falta de potencial — é a falta de orientação certa no momento certo.",
  },
  solution: {
    eyebrow: "A nossa abordagem",
    heading: "Da estratégia à candidatura, com visão completa do projeto",
    body: "A Bizin atua onde a estratégia encontra a execução. Analisamos o projeto, enquadramos as oportunidades mais relevantes no ecossistema do Portugal 2030 e ajudamos a estruturar a componente de capital humano e crescimento necessária para aumentar a viabilidade da operação.",
    bullets: [
      "Diagnóstico inicial de elegibilidade",
      "Enquadramento de programas e incentivos",
      "Apoio na estruturação do investimento e da equipa",
      "Acompanhamento até à execução",
    ],
  },
  calculatorSection: {
    heading: "Avalie o potencial do seu projeto",
  },
  calculator: {
    eligibility: {
      disclaimer:
        "Este resultado é indicativo, foi elaborado com recurso a inteligência artificial com base nas suas respostas. Não constitui validação oficial nem aconselhamento financeiro ou jurídico.",
      programmeSuggestions: {
        tecnologia: [
          {
            name: "PRR — Transição digital",
            description:
              "Apoios à digitalização e à inovação tecnológica das empresas, alinhados com a lógica do PRR e do Portugal 2030.",
          },
          {
            name: "Portugal 2030 — SI Inovação",
            description:
              "Incentivos a projetos de inovação produtiva com componente tecnológica clara.",
          },
        ],
        energia: [
          {
            name: "Portugal 2030 — Transição energética",
            description:
              "Medidas de apoio a eficiência energética, renováveis e descarbonização industrial.",
          },
          {
            name: "PRR — Descarbonização",
            description:
              "Financiamento orientado à redução de emissões e modernização energética.",
          },
        ],
        industria: [
          {
            name: "Portugal 2030 — SI Qualificação PME",
            description:
              "Modernização e qualificação de PMEs industriais com impacto em competitividade.",
          },
          {
            name: "Portugal 2030 — SI Inovação",
            description:
              "Apoio a projetos de inovação produtiva no tecido industrial.",
          },
        ],
        turismo: [
          {
            name: "Portugal 2030 — Turismo",
            description:
              "Incentivos ao desenvolvimento, qualificação e sustentabilidade da oferta turística.",
          },
          {
            name: "Portugal 2030 — SI Qualificação PME",
            description:
              "Melhoria de serviços, processos e posicionamento de PMEs no mercado.",
          },
        ],
        saude: [
          {
            name: "Portugal 2030 — SI Inovação",
            description:
              "Linhas de incentivo à inovação em saúde, dispositivos médicos e serviços especializados.",
          },
          {
            name: "PRR — Saúde",
            description:
              "Apoio à modernização de infraestruturas e serviços de saúde.",
          },
        ],
        default: [
          {
            name: "Portugal 2030 — SI Qualificação PME",
            description:
              "Incentivos à modernização, digitalização e competitividade das PMEs.",
          },
          {
            name: "Portugal 2030 — SI Inovação",
            description:
              "Apoio a projetos de inovação e desenvolvimento produtivo.",
          },
        ],
      },
      nextSteps: {
        high: [
          "Peça uma análise estratégica inicial à Bizin Portugal.",
          "Reúna informação sobre o projeto: investimento, setor, localização e objetivos.",
          "Identifique janelas de candidatura abertas para os eixos sugeridos.",
        ],
        medium: [
          "Agende uma consulta diagnóstica para refinar o enquadramento.",
          "Avalie ajustes ao âmbito do investimento que possam reforçar a elegibilidade.",
          "A Bizin ajuda a escolher o programa mais coerente com o seu perfil.",
        ],
        low: [
          "Agende uma consulta para uma avaliação aprofundada e personalizada.",
          "Pequenos ajustes ao projeto podem melhorar o enquadramento face aos avisos em vigor.",
          "A Bizin acompanha casos complexos e identifica alternativas relevantes.",
        ],
      },
    },
    steps: [
      {
        field: "sector",
        question: "Em que setor opera a sua empresa?",
        hint: "Escolha o setor mais próximo da sua atividade principal.",
        optionLabels: {
          industria: "Indústria",
          tecnologia: "Tecnologia / Software",
          servicos: "Serviços empresariais",
          turismo: "Turismo",
          saude: "Saúde",
          educacao: "Educação / Formação",
          logistica: "Logística",
          energia: "Energia / Sustentabilidade",
          outro: "Outro",
        },
      },
      {
        field: "employees",
        question: "Quantos colaboradores tem a sua empresa?",
        hint: "Considere o total de trabalhadores com vínculo à empresa.",
        optionLabels: {
          "1_9": "1 – 9 colaboradores",
          "10_49": "10 – 49 colaboradores",
          "50_249": "50 – 249 colaboradores",
          "250_plus": "250 ou mais colaboradores",
        },
      },
      {
        field: "region",
        question: "Onde se localiza o investimento?",
        hint: "Região portuguesa onde o projeto será desenvolvido.",
        optionLabels: {
          norte: "Norte",
          centro: "Centro",
          lisboa: "Lisboa",
          alentejo: "Alentejo",
          algarve: "Algarve",
          madeira: "Madeira",
          acores: "Açores",
        },
      },
      {
        field: "investment",
        question: "Qual o valor estimado do investimento?",
        hint: "Inclua custos elegíveis: equipamentos, obras, TI, formação, etc.",
        optionLabels: {
          under_50k: "Menos de 50 000 €",
          "50k_200k": "50 000 € – 200 000 €",
          "200k_1m": "200 000 € – 1 000 000 €",
          "1m_5m": "1 000 000 € – 5 000 000 €",
          over_5m: "Mais de 5 000 000 €",
        },
      },
      {
        field: "investmentType",
        question: "Que tipo de investimento pretende realizar?",
        hint: "Escolha a opção que melhor descreve o foco principal do projeto.",
        optionLabels: {
          equipamentos: "Aquisição de equipamentos",
          software: "Software",
          construcao: "Construção",
          marketing: "Marketing",
          formacao: "Formação",
          recursos_humanos: "Recursos humanos",
        },
      },
    ],
    idle: {
      eyebrow: "Avaliação rápida",
      title: "Cinco perguntas.",
      titleAccent: "Uma avaliação personalizada.",
      body: "Responda passo a passo e receba uma leitura inicial sobre o potencial do seu projeto.",
      durationLine: "Cerca de 2 minutos · 5 passos",
      cta: "Iniciar avaliação",
    },
    ai: {
      generatingTitle: "A gerar o seu diagnóstico",
      generatingBody:
        "Isto pode demorar alguns segundos. Estamos a analisar as suas respostas com o contexto da Bizin Portugal.",
      retry: "Tentar novamente",
      errorTitle: "Não foi possível gerar o diagnóstico",
      errorGeneric: "Verifique a ligação à internet e tente novamente.",
      otherSectorLabel: "Descreva o setor da sua empresa",
      otherSectorPlaceholder:
        "Ex.: produção de equipamentos médicos, consultoria ambiental, retalho especializado…",
      otherSectorHint:
        "Uma ou duas frases chegam. Evite dados pessoais identificáveis.",
      otherSectorRequired:
        "Descreva o setor (mínimo de 3 caracteres) para continuar.",
      executiveSummaryHeading: "Resumo",
      diagnosisHeading: "Diagnóstico",
      programmeDirectionsHeading: "Eixos de programa a considerar",
    },
    result: {
      scoreLabel: "Score de elegibilidade",
      programmesHeading: "Direções de programa sugeridas",
      nextStepsHeading: "Próximos passos",
      ctaBooking: "Agendar consultoria de investimento",
      restart: "Recomeçar avaliação",
    },
    bands: {
      high: "Potencial elevado",
      medium: "Potencial moderado",
      low: "Potencial limitado",
    },
    nav: { back: "Voltar", continue: "Continuar", seeResult: "Continuar" },
    lead: {
      title: "Último passo",
      subtitle: "Deixe os seus contactos para receber a avaliação do seu projeto.",
      nameLabel: "Nome",
      namePlaceholder: "O seu nome completo",
      emailLabel: "Email",
      emailPlaceholder: "nome@empresa.com",
      phoneLabel: "Telefone",
      phonePlaceholder: "+351 900 000 000",
      submit: "Pedir avaliação",
      nameRequired: "Indique o seu nome (mínimo 2 caracteres).",
      emailInvalid: "Indique um email válido.",
      phoneRequired: "Indique um número de telefone válido.",
    },
    stepProgress: "Passo {current} de {total}",
  },
  howItWorks: {
    heading: "Como funciona",
    steps: [
      {
        number: "01",
        title: "Diagnóstico inicial",
        description:
          "Análise do negócio, das necessidades e dos objetivos.",
      },
      {
        number: "02",
        title: "Estratégia e plano de crescimento",
        description:
          "Apoio na estruturação do investimento e na capacitação das equipas.",
      },
      {
        number: "03",
        title: "Acompanhamento",
        description:
          "Apoio estratégico na gestão e no crescimento.",
      },
    ],
  },
  proof: {
    heading: "Confiança construída com resultados",
    stats: [
      {
        value: "+30 anos",
        label: "de experiência em consultoria empresarial",
        visible: true,
      },
      {
        value: "+400",
        label: "projetos apoiados em Portugal",
        visible: true,
      },
      {
        value: "43M€",
        label: "em investimento acompanhado",
        visible: true,
      },
      {
        value: "+19 anos",
        label: "de experiência em formação certificada",
        visible: true,
      },
      {
        value: "12",
        label: "áreas de formação certificada",
        visible: true,
      },
      {
        value: "+50 000 h",
        label: "de formação certificada",
        visible: true,
      },
    ],
    quote: "",
    quoteAttribution: "",
  },
  faq: {
    heading: "Perguntas frequentes",
    items: [
      {
        question: "A Bizin Portugal apoia na gestão e estratégia do negócio?",
        answer:
          "Sim. A Bizin Portugal acompanha empresas na definição de estratégia, prioridades de crescimento e decisões de investimento, alinhando objetivos de negócio, equipas e financiamento disponível.",
      },
      {
        question: "O que inclui o apoio à capacitação de recursos humanos?",
        answer:
          "Inclui diagnóstico de necessidades formativas, desenho de planos de capacitação, formação certificada em diversas áreas e apoio à implementação para reforçar competências críticas nas equipas.",
      },
      {
        question: "Que tipo de empresas trabalham com a Bizin Portugal?",
        answer:
          "Trabalhamos com PMEs e empresas em crescimento, investidores nacionais e internacionais, em setores industriais, serviços, tecnologia, turismo, saúde e outros — sempre com foco em projetos concretos em Portugal.",
      },
      {
        question: "Como funciona a avaliação inicial do projeto?",
        answer:
          "A calculadora recolhe informação sobre o seu negócio e projeto. Com base nas respostas, a Bizin Portugal prepara uma leitura inicial personalizada e entra em contacto para aprofundar o diagnóstico numa consultoria.",
      },
    ],
  },
  finalCta: {
    heading: "Pronto para dar o próximo passo?",
    body: "Fale connosco para avaliar as necessidades e o potencial do seu projeto.",
    cta: "Agendar consultoria",
    microcopy: "Sem compromisso inicial",
    bookingUrl: "https://www.bizinportugal.com/#booking-section",
  },
};
