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
