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
