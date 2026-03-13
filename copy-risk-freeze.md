# Reducing Risk Freeze Rates — Editable Copy

Edit any text below. Keep the `[labels]` and `---` dividers intact so I can map changes back. Lines starting with `>` are image/visual descriptions for context — don't edit those.

---

## HERO

[eyebrow] Case Study · UX / Usability
[title] Reducing Risk Freeze Rates
[subtitle] Using empathy to reduce new seller churn by 4% (and pulling it off with limited eng scope)
[company] Square
[role] Product Designer
[focus] UX, Risk, Onboarding

> Image: DocIDV hero interface screenshot

---

## BACKGROUND

[section-label] Background
[section-title] Risky Business for Services Sellers

[body] Square's Risk team was seeing a growing problem: good sellers were having funds frozen or restricted by automated risk systems and leaving because of it. Complaints were rising, and churn was climbing.

[body] The audience that my team supported, service sellers, happened to be a particularly affected group. These businesses — like landscapers, contractors, and photographers — sell their time and expertise. The nature of their workflows means they often take infrequent, high-value, card-not-present payments. Which happens to be exactly what fraudulent payments look like. As a result, services sellers were being risk-actioned at more than twice the rate of any other seller group on Square.

[body] My team was brought in on a special project to help the Risk team understand these sellers better and find ways to reduce the negative impact of risk actions without exposing Square to more fraudulent payment losses.

[stat] 20%
[stat-desc] of services sellers experience a risk action in their first month

[stat] 40%
[stat-desc] of first-month GPV comes from risk-actioned seller accounts

[stat] 3.4×
[stat-desc] more likely to be risk-actioned if processing $10k+ in month one

[quote] "Pretty upset that my account has been in review for over a week with almost $3,000 completely untouchable... I've had my account for only a month."
[cite] SMB Seller, Photography

[quote] "These reviews have caused severe financial strain for my business at times, to the point that I have strongly considered discontinuing the use of Square."
[cite] Micro+ Seller, HVAC Repair

[quote] "Secondly you're holding my funds for over a month to verify me. That is unacceptable considering when you set up your app and give your information you should have asked for it up front."
[cite] SMB Seller, Landscaper

[callout-stat] 44% lower
[callout-text] GPV retention if a risk action occurs during a seller's first month at Square

---

## PROCESS

[section-label] Process
[section-title] Problem Definition

[body] We saw this as a two-part "Goldilocks" problem:

### Problem #1

[problem-title] Verifying too late
[problem-body] Sellers expect Square to verify their identity in a way that doesn't interfere with access to funds and in moments that make sense to them. Verifying "too late" — after a seller is already taking payments — can create frustration that leads to churn.

### Problem #2

[problem-title] Verifying too early
[problem-body] The earlier we try to prevent fraud, the fewer signals we have. Verifying "too early" can create seller friction that hurts activation or payment conversion rates. An experiment that required 100% of sellers to upload identity documents before taking payments resulted in even worse damage to bottom-of-funnel metrics.

[hypothesis] We can reduce risk-based churn by optimizing the placement of document requests so it better matches seller expectations and doesn't require their accounts to be frozen.

### Proposed experience: Gate our riskiest payments

[body] During discovery, we uncovered that card-not-present (CNP) payments accounted for >75% of transactions that triggered risk actions. So we knew that focusing on these types of payments could potentially deliver the most proverbial bang for the buck.

[body] Additionally, 80% of fake account freezes happen after a sellers' first or second payment through Square. Meaning that if we wanted to prevent freezes, we needed to do it as early in the sellers' journey as possible.

> Image: Journey map comparing current risk experience vs. gated CNP payments (lightbox)

---

## PROOF OF CONCEPT

### Proof of concept: Warn + Lock

[body] Due to internal constraints around testing timelines, mobile eng resources, and a lack of data on the likelihood of certain risk actions across various payment scenarios, we aligned on a proof of concept that focused on the web-based payment platform Virtual Terminal.

> Image: Warn + Lock proof of concept screens (lightbox)

---

## RESEARCH

[section-label] Research
[section-title] Usability testing:

[body] We wanted to feedback on the new VT CNP gated flow content that included a modal explaining their options if they do or do not verify as well as the actual VT experience with certain payment methods gated.

[body] Using the scenario that the seller had just signed up for Square and skipped an optional ID verification step, we tested a single prototype. The prototype took the 8 sellers (4 Square sellers, and 4 non-Square sellers) from the VT dashboard through an ID verification modal and finally to a gated version of VT.

> Video: Usability test prototype walkthrough (autoplay, looped)

[key-finding] All sellers understood the security rationale for blocking certain kinds of payments, but they wanted more explicit information around what payment types were available pre and post verification.

### Rec 01: List payment options

[rec-body] Sellers wanted explicit information around which payment types were available before and after verification. The modal needed to clearly list what was blocked and what would be unlocked.

[rec-quote] "The screen doesn't specify I'm going to have other options"
[rec-quote] "You told me I'm not allowed more, but I have these other options. I should have been told that on the previous screen."
[rec-quote] "I don't know what the other payment methods are"

> Image: List payment options recommendation mockup

### Rec 02: Provide context early

[rec-body] Giving sellers an opportunity to complete identity verification prior to the payment moment — during onboarding — is a key reason for seller compassion around the request.

[rec-quote] "I should have done [verified my identity] when you originally asked me to."
[rec-quote] "Obviously [not being able to take payments] would be frustrating, but I'm the one that chose to skip that step."

---

## SOLUTION

[section-label] Solution
[section-title] A Two-Part Experience

### Part 1: Optional DocIDV at onboarding

[body] All sellers are shown a screen during payment setup where they can opt to complete document identity verification (DocIDV). Updated headline and subheading better explain the benefit of completing the step at this point in the process.

[bullet] If the seller skips this step, they are payment activated for all payments except CNP on Virtual Terminal
[bullet] If the seller completes this step, they are payment activated for all products immediately

> Image: Optional DocIDV at onboarding screen

### Part 2: Gate CNP Payments on VT

[body] Sellers who skip verification during onboarding encounter a clear gate when they navigate to Virtual Terminal and attempt a card-not-present payment. The gate explicitly lists which payment methods are available now vs. after verification — directly addressing the usability testing insights.

> Image: Gate CNP Payments on VT screen

---

## OUTCOME

[section-label] Outcome
[section-title] Results

[stat] 16%
[stat-label] Decline in freeze rates

[stat] ~4%
[stat-label] Increase in retention

### Design expansion

[expansion] Launched a "second chance" DocIDV flow to allow sellers who skipped verification to go back and complete the step
[expansion] Launched a mobile-native version of DocIDV that allowed scaling the proactive DocIDV experience to iOS and Android
