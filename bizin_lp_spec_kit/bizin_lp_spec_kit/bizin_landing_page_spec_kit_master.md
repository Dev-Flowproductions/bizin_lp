# 00 readme

# Bizin investment landing page, spec kit

## What this spec kit is for

This spec kit is for Cursor AI Agent to build a high-conversion landing page for Bizin Portugal, with one embedded non-gated AI-style tool: a rule-based eligibility and funding potential calculator for Portugal 2030.

The landing page must feel aligned with the current Bizin visual language, but it must be more focused, clearer, and more action-oriented than the main website.

This is not a generic website page. It is a campaign landing page designed to:

- create immediate value without gating the experience
- help visitors self-assess whether their project may fit Portugal 2030 incentive logic
- position Bizin as the credible next step for a deeper evaluation
- convert warm visitors into consultation requests

## Critical strategic notes before building

### 1. Do not overclaim
The current brief contains claims such as more than €2.3M financed, 98% satisfaction, and 120+ international clients. These must only go live if Bizin confirms them as real and current. Build the page so these values can be changed easily from a data object or CMS layer.

### 2. The calculator must not pretend to be an official eligibility engine
Portugal 2030 programmes change by notice, eligibility rules, geography, company profile, investment type, and application window. The calculator must therefore be framed as an educational first-pass estimate, not legal, financial, or programme approval advice.

### 3. The page should reduce friction, not remove judgement
This is a non-gated demand generation asset. Users must get useful output without a form wall. The CTA comes after value is delivered, not before. The calculator should move the user closer to a conversation, not try to replace human consultancy.

## Build outcome

Deliver one production-ready landing page in Portuguese from Portugal, fully responsive, with:

- semantic structure
- strong above-the-fold section
- embedded calculator
- trust and proof sections
- FAQ with schema readiness
- clear CTA blocks
- analytics events
- easy future editing

## Suggested route

Use a route structure that fits the existing project, for example:

- `/pt/landing/bizin-investimento-portugal`
- or the equivalent campaign route already used in DG

Avoid hardcoding anything that should later be reusable across campaigns.



# 01 product and page strategy

# Product and page strategy

## Page objective

Help companies and investors considering Portugal understand, quickly and with confidence, whether their project may fit incentive opportunities and whether Bizin is the right strategic partner to guide the process.

## Primary audience

The page is mainly for:

- foreign investors entering Portugal
- companies planning expansion or operational setup in Portugal
- SMEs evaluating innovation, digital transition, sustainability, or training incentives
- decision-makers who need clarity before speaking to a consultant

## User intent this page should satisfy

The visitor is likely trying to answer one or more of these questions:

- Is my project likely to qualify for Portugal 2030 support?
- What kind of incentive programmes might apply to my case?
- Am I too early, too small, or in the wrong region?
- Who can help me understand this properly without wasting time?

## Core promise

Bizin helps turn uncertainty around investment and incentives in Portugal into a clearer, more structured path forward.

## Conversion logic

This is a value-first landing page. The visitor journey should be:

1. Understand the problem quickly
2. See that Bizin is credible and specialised
3. Interact with the calculator
4. Receive a useful estimate
5. Decide whether to book a consultation

## Non-gated demand generation principles for this page

- Do not hide the calculator behind a form
- Do not interrupt the user before value is shown
- Do not ask for personal data to reveal the result
- Do provide a strong, optional CTA after the result
- Do make the page useful even if the user never converts

## Risks to avoid

### Too much corporate vagueness
The current website style is clear and friendly, but this landing page cannot feel like a broad brochure page. It must stay focused on one problem and one outcome.

### False precision
Do not show funding estimates with euro precision unless Bizin explicitly wants that and validates the logic. For MVP, show:
- eligibility score
- recommended programme directions
- estimated success band
- next steps

### Compliance risk
Any language suggesting guaranteed approval, guaranteed funding, or official programme validation should be avoided.

## Final positioning on the page

Bizin is not the programme. Bizin is the strategic partner that helps the visitor understand the landscape, assess fit, and move forward with more confidence and structure.



# 02 page copy and structure

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



# 03 calculator spec

# Calculator specification

## Tool name

Calculadora de elegibilidade e potencial de financiamento

## Purpose

Give the user an immediate, non-gated first-pass estimate of whether their project may fit the logic of Portugal 2030 incentives.

## Important framing

The calculator output must be presented as:

- an indicative estimate
- based on simplified known patterns and internal logic
- not an official funding decision
- not legal or financial advice

This disclaimer should be present but not visually heavy.

## Inputs

### Required inputs
1. Setor  
Dropdown

2. Número de colaboradores  
Number input or size band dropdown

3. Localização do investimento  
Dropdown

4. Investimento estimado  
Currency input

## Recommended sector options

Use a clean, business-relevant list such as:
- Indústria
- Tecnologia / software
- Serviços empresariais
- Turismo
- Saúde
- Educação / formação
- Logística
- Energia / sustentabilidade
- Outro

## Recommended location options

Keep it simple for MVP:
- Norte
- Centro
- Lisboa
- Alentejo
- Algarve
- Madeira
- Açores

## Logic model

This should be rule-based, transparent, and easy to adjust.

### Output dimensions
1. Score de elegibilidade  
0 to 100

2. Programas ou eixos recomendados  
List of relevant programme directions, not guaranteed grants

3. Probabilidade estimada de sucesso  
Low / Medium / High, or a percentage band

4. Próximos passos recomendados  
Short action-oriented guidance

## Example scoring approach

Build a local scoring config object with weighted rules.

### Suggested weights
- Sector relevance: 30%
- Company size / number of employees: 20%
- Region / location fit: 20%
- Investment range fit: 30%

### Example scoring logic
These are examples only. Cursor should implement a clean, editable config, not hardcoded if/else clutter.

- Sectors aligned with innovation, digitalisation, sustainability, productive transformation, and training receive stronger scores
- Company sizes that commonly fit SME incentive logic receive stronger scores
- Locations outside Lisbon may score differently depending on programme assumptions
- Mid-sized and strategically relevant investment values may increase fit

## Result states

### High fit
- Strong eligibility score
- 2 to 3 recommended programme directions
- CTA to book a consultation
- positive but careful tone

### Medium fit
- Moderate score
- explain that some criteria may need refinement
- recommend a diagnostic call

### Low fit
- Lower score
- explain that current fit appears weaker under simplified logic
- still offer consultation for a tailored evaluation

## Sample output tone

Com base nos dados introduzidos, o seu projeto apresenta um potencial inicial interessante para enquadramento em incentivos associados a inovação, transição digital ou sustentabilidade. Esta leitura é indicativa e deve ser validada numa análise mais detalhada.

## UI requirements

- Show the result in the same page, no redirect
- Use a clear score visual, bar or circular meter
- Show recommended programmes as cards or labelled pills
- Show next steps in plain language
- Include one CTA button in the result card
- On mobile, the result should stack cleanly under the form

## UX requirements

- Fast feedback
- No page reload
- Strong validation messages
- Currency formatting for investment input
- Accessible labels and helper text
- Clear reset button

## Event tracking

Track at least:
- calculator_viewed
- calculator_started
- calculator_completed
- calculator_result_high
- calculator_result_medium
- calculator_result_low
- calculator_cta_clicked

## Data handling

For MVP:
- no personal data required
- do not force email capture
- optional analytics can record anonymous aggregate input patterns only, subject to privacy and consent setup

## Technical implementation recommendation

Create the calculator as its own isolated client component.

Suggested component:
- `BizinEligibilityCalculator.tsx`

Suggested internal modules:
- `calculator-config.ts`
- `calculator-rules.ts`
- `calculator-types.ts`

Keep the calculation logic separate from the UI so the rules can be revised later without rewriting the component.



# 04 design and ui

# Design and UI direction

## Design goal

The page must feel like Bizin, but sharper and more conversion-led than the main site.

## What to borrow from the current site

From the current Bizin site, keep the visual language that already feels familiar:

- white and very light grey backgrounds
- dark navy headings
- rounded cards
- soft shadows
- image blocks with large border radius
- blue, teal, and green accents
- calm, professional Portuguese business tone
- clean CTA buttons with pill-like shape

## What to improve

- Reduce navigation distractions if this is a dedicated campaign page
- Strengthen visual hierarchy above the fold
- Make the calculator a central interactive asset
- Remove anything that feels like a generic homepage block
- Keep the page tighter, more focused, and more sequential

## Suggested visual system

### Colours
Base the palette on existing Bizin brand usage from the screenshot:
- dark navy for headings and primary CTAs
- cyan / blue for emphasis
- green as a secondary supportive accent
- light neutral background for breathing space

Do not invent a radically different visual identity.

### Typography
Use the existing project typography stack if already available.
If not, keep it simple, modern, and highly legible.

### Spacing
Generous whitespace.
Avoid dense blocks of text.
Use clear rhythm between sections.

### Components
Use consistent, reusable components for:
- section wrappers
- stat cards
- feature bullets
- FAQ accordion
- CTA buttons
- result cards
- trust badges

## Hero recommendations

- Keep the hero clean and calm
- One strong image or visual card is enough
- Avoid visual noise
- Make the CTA and jump-to-calculator action obvious

## Calculator styling

The calculator must look premium and trustworthy, not playful or gimmicky.

Use:
- clean card container
- clear field labels
- one dominant CTA
- result card with strong contrast and readable hierarchy
- chart or score visual that feels professional

Avoid:
- neon colours
- excessive gradients
- animated gimmicks
- “AI magic” visual clichés

## Mobile design requirements

- Prioritise readability and tap targets
- Keep the calculator comfortable on small screens
- Ensure the result card remains scannable
- Place primary CTA where it is easy to access after result generation

## Accessibility

- Meet contrast standards
- Use semantic headings
- Label every form field properly
- Support keyboard navigation
- Ensure accordion and calculator controls are screen-reader friendly



# 05 technical build plan

# Technical build plan

## Assumed stack

Build this inside the existing DG environment using the current project stack and conventions.

Recommended assumptions:
- Next.js App Router
- TypeScript
- Tailwind CSS
- existing UI primitives if already used in the project

## Architecture recommendation

### Page composition
Use a server-rendered page shell, with the calculator as a client component.

Recommended high-level structure:
- landing page route
- central content config object
- reusable presentational sections
- isolated calculator client component
- analytics hooks

## Suggested file structure

```text
app/
  [locale]/
    landing/
      bizin-investimento-portugal/
        page.tsx

components/
  landing/
    bizin/
      BizinHero.tsx
      BizinProblem.tsx
      BizinSolution.tsx
      BizinHowItWorks.tsx
      BizinProof.tsx
      BizinFaq.tsx
      BizinFinalCta.tsx
      BizinEligibilityCalculator.tsx

lib/
  landing/
    bizin/
      content.ts
      calculator-config.ts
      calculator-rules.ts
      calculator-types.ts
      tracking.ts
      schema.ts
```

## Data structure recommendation

Keep content out of JSX.

Suggested `content.ts` shape:
- SEO metadata
- hero content
- trust metrics
- section copy
- FAQ items
- calculator labels
- disclaimer text
- CTA labels

This allows future CMS integration or campaign generation without rewriting the page.

## Performance

- The page should be light and fast
- Use optimised images
- Avoid unnecessary client-side rendering
- Only the calculator needs client interactivity

## SEO and metadata

Use the provided SEO fields:
- title
- meta description

Also implement:
- canonical
- Open Graph metadata
- language metadata for PT-PT if your app structure supports it

## Schema recommendation

Prepare schema helpers for:
- FAQPage
- ProfessionalService or Organization, if appropriate
- WebPage

Do not inject schema that the content cannot support honestly.

## Analytics integration

If the DG environment already has a tracking pattern, follow it.

Track:
- page_view
- scroll depth milestones
- calculator interactions
- CTA clicks
- FAQ interactions

## Quality standards

- Type-safe props
- reusable section components
- no duplicated copy blocks
- no inline spaghetti logic
- no hardcoded claims inside components



# 06 tasks and guardrails

# Tasks and guardrails

## Build tasks

### Task 1. Create the landing page route and content model
- Create the page route
- Add a dedicated content object for all page text and metrics
- Ensure text can be changed without editing multiple JSX files

### Task 2. Build the page sections
- Hero
- Problem
- Solution
- Calculator block
- How it works
- Proof
- FAQ
- Final CTA

### Task 3. Build the calculator
- Create isolated calculator component
- Build input form
- Add rule-based logic
- Render score, recommendations, success band, and next steps
- Add disclaimer and CTA

### Task 4. Add SEO and schema
- Title
- meta description
- Open Graph
- FAQ schema helper
- canonical handling if relevant

### Task 5. Add analytics events
- Page view
- calculator started
- calculator completed
- result band
- CTA click
- FAQ expand

### Task 6. Refine responsiveness and accessibility
- Mobile layout
- keyboard interaction
- screen-reader labels
- visual contrast checks

### Task 7. QA
- Validate score logic with multiple scenarios
- Validate copy language in PT-PT
- Confirm no claims are hardcoded beyond editable config
- Confirm performance is good
- Confirm no broken styles or side effects elsewhere in the project

## Definition of done

The landing page is done when:

- it looks aligned with Bizin’s visual language
- it is clearly more conversion-focused than the main website
- the calculator delivers a useful non-gated result
- the copy is fully PT-PT
- the CTA path is obvious but not forced
- analytics events are wired
- the implementation is modular and reusable
- no existing working functionality is broken

## Guardrails

### Do not break existing code
Do not refactor unrelated parts of the project.
Do not “clean up” working components outside the scope of this page.

### No hardcodes where future campaigns will need flexibility
Keep content in a central data object.
Keep calculator rules in their own config file.
Make metrics easy to update.

### Keep the calculator honest
Do not present it as official programme validation.
Do not promise funding approval.
Do not fabricate case studies or proof.

### Keep the UX non-gated
No forced form wall before the result.
No modal that blocks the tool.
No email requirement to reveal output.

### Keep the page commercially focused
This is not a full corporate website page.
It is a campaign asset built to educate, qualify, and convert.

## Optional v2 improvements, not required for MVP

- PDF summary export of result
- save result and send by email after optional consent
- multilingual version
- CMS-backed content editing
- dynamic programme logic updated by internal Bizin admin rules


