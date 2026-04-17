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
