# Invoices Null State Redesign — Editable Copy

Edit any text below. Keep the `[labels]` and `---` dividers intact so I can map changes back. Lines starting with `>` are image/visual descriptions for context — don't edit those.

---

## HERO

[eyebrow] Case Study · Product Design
[title] Invoices Null State Redesign
[subtitle] Using insights and instincts, increased the invoices null state CTR by ~20%
[company] Square
[role] Product Designer
[focus] UX, Conversion

> Image: Hero screenshot of the redesigned null state

---

## BACKGROUND

[section-label] Background
[section-title] The null state wasn't working

[body] The Invoices funnel had a 55% drop-off rate from sellers landing on the product page to sending their first invoice. Rather than offering guidance or context, the dashboard simply showed them empty data, leaving new sellers with no clear path forward.

> Image: Screenshot of the previous empty Invoices null state dashboard

[body] Rather than offering guidance or next steps, the Overview page showed new sellers an empty dashboard. We believed there was an opportunity: if we replaced that empty state with contextual content about the product and its benefits, more sellers would take the next step.

[hypothesis] Sellers shown a more contextual, action-oriented null state will be more likely to send their first invoice than sellers shown the current empty dashboard.

[body] But the page needed to work for two very different audiences. Sellers who signed up specifically for Invoices needed a clearer path to action, while sellers casually exploring Square needed context on why Invoices would help their business. And we had limited data on why sellers were dropping off or what kind of content would actually move them to act.

---

## COMPETITIVE AUDIT

[section-label] Competitive Audit
[section-title] Understanding the landscape

[body] We audited null states across five competitors and several internal Square product pages. Three repeatable patterns emerged, each with a distinct tradeoff between user control and information density.

### Tab 01: Pop-up overlay

[approach-desc] An informational guide overlays the product page to walk users through key features, without changing the underlying layout.

[pros]
- Perfectly sequences information without layout changes
- Dismissible, so experts can skip immediately

[cons]
- High dismiss risk and hard to find again later
- People hate pop-ups

> Images: Two Honeybook pop-up overlay examples

### Tab 02: Temporary setup page

[approach-desc] A dedicated setup page surfaces in the nav and guides users through key actions. Once setup is complete, the page disappears.

[pros]
- Persistent during setup without disrupting the main product
- Users can return to it as needed

[cons]
- Easy to skip entirely during onboarding
- Disappears before some users are ready

> Images: Mailchimp and Zoho temporary setup page examples

### Tab 03: Dynamic null state (chosen direction)

[approach-desc] The product page itself adapts, surfacing CTAs, educational content, and feature context that evolves as the user engages. Once used, the page shifts toward the standard product view.

[pros]
- Speaks to both new and nearly-active users
- Lets marketing, education, and product content coexist

[cons]
- More complex to design and test the evolution logic
- Can feel disorienting if transitions are not handled well

> Images: Two Mailchimp dynamic null state examples

### Content section mapping

[body] With the dynamic null state direction chosen, we mapped how Zoho, Mailchimp, and Square Marketing each structured their content sections. This helped us identify which modules (primary CTAs, product features, educational content) were common across implementations and gave us a shared vocabulary heading into the brainstorm.

> Image: Content section mapping across Zoho, Mailchimp, and Square Marketing (lightbox)

### Cross-functional brainstorm

[body] With the evolving page direction decided, we ran a cross-functional session with engineering, product, marketing, and design to align on content strategy. Three questions framed the conversation: how do we get sellers started, what should sellers know about the product, and why should they use it?

> Image: Cross-functional brainstorm session notes (lightbox)

---

## A/B TESTING

[section-label] A/B Testing
[section-title] Two bets, one experiment

[body] Given how different our two target audiences were, we decided to A/B test two distinct approaches rather than try to serve both with a single page. One marketing-led page emphasizing high-level product benefits, and one set-up-led page focused on guiding sellers through their first steps.

[body] Both variants used a simple, modular design system built from interchangeable content blocks. This meant future testing, audience-specific customization, and optimization could happen through content swaps rather than structural redesigns, giving us a scalable foundation without additional engineering investment.

> Image: A/B test design showing marketing-led vs set-up-led variants (lightbox)

---

## FINAL DESIGN

[section-label] Final Design
[section-title] How the page evolves

[body] The dynamic null state adapts as sellers engage. The page opens with a marketing-forward layout built for new users, shifts to an action-oriented view after the first send, then settles into the standard product experience once the seller is active.

> Animated visual: Side-by-side screen loop showing Marketing-led and Set-up-led variants cycling through Initial state → First-use → Active

### Impact

[stat] ~20%
[stat-label] CTR lift (marketing-led variant)

[stat] 11%
[stat-label] CTR lift (set-up-led variant)

[stat] 5%
[stat-label] Original target

[body] Both variants exceeded our 5% target, with the marketing-led page delivering roughly four times the expected lift. The results validated that pairing strong product instincts with competitive research and cross-functional alignment can produce high-confidence hypotheses, and that A/B testing then becomes a tool for measuring magnitude rather than guessing direction.
