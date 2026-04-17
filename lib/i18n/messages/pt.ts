import type { SiteDictionary } from "../types";

export const pt: SiteDictionary = {
  locale: "pt",
  htmlLang: "pt-PT",
  seo: {
    title: "Investimento em Portugal 2030 | Avalie o seu projeto | Bizin Portugal",
    description:
      "Descubra se o seu projeto se enquadra nos incentivos Portugal 2030. Estimativa inicial gratuita e consultoria estratégica com a Bizin Portugal.",
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
    heading: "Garanta o sucesso do seu investimento em Portugal com mais clareza e critério",
    subheading:
      "Investir ou crescer em Portugal pode abrir boas oportunidades, mas também levanta dúvidas sobre incentivos, elegibilidade e execução. A Bizin Portugal ajuda empresas e investidores a perceber o que faz sentido, que programas podem ser relevantes e quais os próximos passos para avançar com mais segurança.",
    ctaPrimary: "Ver a minha elegibilidade",
    ctaSecondary: "Agendar consultoria de investimento",
    bookingUrl: "https://www.bizinportugal.com/#booking-section",
    imageUrl:
      "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=2340",
    imageAlt: "Paisagem do Vale do Douro, Portugal",
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
    heading: "Avalie o potencial do seu projeto em poucos passos",
    subheading:
      "Responda a quatro perguntas simples e receba uma estimativa inicial de elegibilidade, os programas mais relevantes para o seu caso e uma leitura rápida dos próximos passos.",
  },
  calculator: {
    eligibility: {
      disclaimer:
        "Este resultado é indicativo e baseado em lógica simplificada. Não constitui validação oficial de elegibilidade nem aconselhamento financeiro ou jurídico.",
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
    ],
    idle: {
      eyebrow: "Portugal 2030",
      title: "Quatro perguntas.",
      titleAccent: "Um resultado claro.",
      body: "Sem dados pessoais. Responda passo a passo e receba uma estimativa inicial de elegibilidade e os eixos de programa mais relevantes.",
      durationLine: "Cerca de 1 minuto · 4 passos",
      cta: "Iniciar avaliação",
    },
    result: {
      scoreLabel: "Score de elegibilidade",
      programmesHeading: "Programas recomendados",
      nextStepsHeading: "Próximos passos",
      ctaBooking: "Agendar consultoria de investimento",
      restart: "Recomeçar avaliação",
    },
    bands: {
      high: "Potencial elevado",
      medium: "Potencial moderado",
      low: "Potencial limitado",
    },
    nav: { back: "Voltar", continue: "Continuar", seeResult: "Ver resultado" },
    stepProgress: "Passo {current} de {total}",
  },
  howItWorks: {
    heading: "Como funciona",
    steps: [
      {
        number: "01",
        title: "Diagnóstico inicial",
        description:
          "Avaliamos o contexto, a maturidade e o potencial de enquadramento do projeto.",
      },
      {
        number: "02",
        title: "Estratégia e candidatura",
        description:
          "Identificamos os incentivos mais relevantes e ajudamos a estruturar o processo.",
      },
      {
        number: "03",
        title: "Acompanhamento",
        description:
          "Apoiamos a execução para reduzir risco, atrasos e falhas de alinhamento.",
      },
    ],
  },
  proof: {
    heading: "Confiança construída com resultados",
    stats: [
      { value: "€2,3M+", label: "Capital financiado e alavancado", visible: false },
      { value: "98%+", label: "Taxa de satisfação de clientes", visible: false },
      { value: "120+", label: "Clientes estrangeiros apoiados", visible: false },
    ],
    quote:
      "A nossa equipa está disponível para ajudar empresas e investidores a navegar o ecossistema de incentivos em Portugal com clareza e rigor.",
    quoteAttribution: "Equipa Bizin Portugal",
  },
  faq: {
    heading: "Perguntas frequentes",
    items: [
      {
        question: "Que empresas podem beneficiar dos incentivos Portugal 2030?",
        answer:
          "Os incentivos Portugal 2030 destinam-se a PMEs e grandes empresas de diversos setores, incluindo indústria, tecnologia, turismo, energia, saúde e formação. A elegibilidade depende do tipo de projeto, da localização do investimento e do perfil da empresa. A Bizin Portugal faz uma análise inicial para identificar as oportunidades mais relevantes para cada caso.",
      },
      {
        question: "A minha empresa estrangeira pode candidatar-se?",
        answer:
          "Sim. Empresas estrangeiras podem candidatar-se aos incentivos Portugal 2030, desde que a atividade ou o investimento seja realizado em Portugal. Em alguns casos, é necessário constituir uma entidade jurídica em território português. A Bizin Portugal apoia todo o processo, incluindo a estruturação jurídica e a candidatura.",
      },
      {
        question: "O resultado da calculadora garante elegibilidade?",
        answer:
          "Não. A calculadora oferece uma estimativa indicativa baseada em lógica simplificada. Os critérios reais de elegibilidade dependem de cada programa, do aviso de abertura vigente e de uma análise detalhada do projeto. O resultado deve ser interpretado como um primeiro sinal de orientação, não como uma validação oficial.",
      },
      {
        question: "Em quanto tempo consigo perceber se o meu projeto faz sentido?",
        answer:
          "Numa consulta inicial com a Bizin Portugal, normalmente é possível ter uma leitura preliminar do enquadramento do projeto em menos de uma semana. Uma análise mais aprofundada pode demorar entre duas a quatro semanas, dependendo da complexidade e da documentação disponível.",
      },
      {
        question: "A Bizin trata apenas da candidatura ou também apoia a implementação?",
        answer:
          "A Bizin Portugal acompanha o projeto da fase de diagnóstico até à execução. Isso inclui a estruturação do investimento, a candidatura aos incentivos, o apoio na gestão do processo junto das entidades competentes e o acompanhamento durante a implementação para reduzir riscos e atrasos.",
      },
    ],
  },
  finalCta: {
    heading: "Quer perceber se o seu projeto faz sentido para Portugal 2030?",
    body: "Receba uma análise inicial sem compromisso e avance com mais clareza sobre elegibilidade, programas possíveis e próximos passos.",
    cta: "Agendar consultoria de investimento",
    microcopy: "Sem compromisso inicial",
    bookingUrl: "https://www.bizinportugal.com/#booking-section",
  },
};
