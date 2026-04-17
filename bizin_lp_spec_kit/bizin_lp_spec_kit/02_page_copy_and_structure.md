# Page copy and structure

## Language and writing rules

- All page copy must be in Portuguese from Portugal
- Keep language simple, credible, and direct
- Avoid legalistic or bureaucratic tone
- Avoid hype
- Avoid overlong paragraphs
- Use sentence-style capitalisation

## Page structure

### 1. Hero

#### Goal
Create immediate clarity, build credibility, and move users either to the calculator or the consultation CTA.

#### Recommended layout
Two-column layout on desktop:
- left: heading, supporting copy, primary and secondary CTA
- right: visual card or image aligned with investment and business in Portugal

#### H1
Garanta o sucesso do seu investimento em Portugal com mais clareza e critério

#### Supporting copy
Investir ou crescer em Portugal pode abrir boas oportunidades, mas também levanta dúvidas sobre incentivos, elegibilidade e execução. A Bizin Portugal ajuda empresas e investidores a perceber o que faz sentido, que programas podem ser relevantes e quais os próximos passos para avançar com mais segurança.

#### CTAs
Primary:
- Ver a minha elegibilidade

Secondary:
- Agendar consultoria de investimento

#### Trust badges below hero copy
Use up to three short trust signals, only if validated:
- Mais de €2,3M em capital financiado e alavancado
- 98% de satisfação de clientes
- Experiência prática com programas Portugal 2030

If the client has not validated these, use placeholders in the data layer and keep the component hidden by default.

---

### 2. Problem section

#### Goal
Make the pain concrete.

#### Heading
O custo de avançar sem clareza

#### Copy
Perder prazos, interpretar mal critérios de elegibilidade ou avançar com uma candidatura pouco alinhada pode comprometer financiamento, atrasar decisões e fragilizar todo o plano de investimento. Em muitos casos, o problema não é a falta de potencial, é a falta de orientação certa no momento certo.

---

### 3. Solution section

#### Goal
Position Bizin as the bridge between strategy and execution.

#### Heading
Da estratégia à candidatura, com visão completa do projeto

#### Copy
A Bizin atua onde a estratégia encontra a execução. Analisamos o projeto, enquadramos as oportunidades mais relevantes no ecossistema do Portugal 2030 e ajudamos a estruturar a componente de capital humano e crescimento necessária para aumentar a viabilidade da operação.

#### Suggested feature bullets
- Diagnóstico inicial de elegibilidade
- Enquadramento de programas e incentivos
- Apoio na estruturação do investimento e da equipa
- Acompanhamento até à execução

---

### 4. Calculator section

#### Goal
Deliver immediate value early in the page.

#### Heading
Avalie o potencial do seu projeto em poucos passos

#### Microcopy
Responda a quatro perguntas simples e receba uma estimativa inicial de elegibilidade, os programas mais relevantes para o seu caso e uma leitura rápida dos próximos passos.

Place this section high on the page, ideally just after the solution section, or even directly after the hero on mobile.

---

### 5. How it works section

#### Heading
Como funciona

#### Steps
1. Diagnóstico inicial  
Avaliamos o contexto, a maturidade e o potencial de enquadramento do projeto.

2. Estratégia e candidatura  
Identificamos os incentivos mais relevantes e ajudamos a estruturar o processo.

3. Acompanhamento  
Apoiamos a execução para reduzir risco, atrasos e falhas de alinhamento.

---

### 6. Proof section

#### Goal
Create confidence with real proof, not vague praise.

#### Heading
Confiança construída com resultados

#### Recommended layout
Use a stats row plus one short case-style card.

#### Stats
- Mais de 120 clientes internacionais
- Mais de €2,3M financiados e alavancados
- 98% de satisfação

Again, only render these exact values if confirmed.

#### Case card
Do not publish fake proof. Use one real mini-case when available:
- context
- challenge
- result
- timeframe

If no case is available yet, use a neutral testimonial or remove this block.

---

### 7. FAQ section

#### Heading
Perguntas frequentes

#### Questions
- Que empresas podem beneficiar dos incentivos Portugal 2030?
- A minha empresa estrangeira pode candidatar-se?
- O resultado da calculadora garante elegibilidade?
- Em quanto tempo consigo perceber se o meu projeto faz sentido?
- A Bizin trata apenas da candidatura ou também apoia a implementação?

Each answer should be concise, useful, and written to support SEO, AEO, and GEO.

---

### 8. Final CTA section

#### Heading
Quer perceber se o seu projeto faz sentido para Portugal 2030?

#### Copy
Receba uma análise inicial sem compromisso e avance com mais clareza sobre elegibilidade, programas possíveis e próximos passos.

#### CTA
Agendar consultoria de investimento

#### Secondary microcopy
Sem compromisso inicial

## Copy notes for development

- Build all copy from a central object or structured content file
- Do not bury copy inside JSX
- Keep section components reusable
- Support easy replacement of metrics, case study text, and FAQ content
