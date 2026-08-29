---
name: Precision Hospitality
colors:
  surface: '#f9f9fc'
  surface-dim: '#dadadc'
  surface-bright: '#f9f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f6'
  surface-container: '#eeeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e5'
  on-surface: '#1a1c1e'
  on-surface-variant: '#404751'
  inverse-surface: '#2f3133'
  inverse-on-surface: '#f0f0f3'
  outline: '#707882'
  outline-variant: '#c0c7d3'
  surface-tint: '#0062a1'
  primary: '#005f9d'
  on-primary: '#ffffff'
  primary-container: '#0079c5'
  on-primary-container: '#fdfcff'
  inverse-primary: '#9ccaff'
  secondary: '#7c5800'
  on-secondary: '#ffffff'
  secondary-container: '#fdb700'
  on-secondary-container: '#6a4b00'
  tertiary: '#b8004b'
  on-tertiary: '#ffffff'
  tertiary-container: '#e11a61'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e4ff'
  primary-fixed-dim: '#9ccaff'
  on-primary-fixed: '#001d35'
  on-primary-fixed-variant: '#00497b'
  secondary-fixed: '#ffdea7'
  secondary-fixed-dim: '#ffbb18'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4200'
  tertiary-fixed: '#ffd9de'
  tertiary-fixed-dim: '#ffb2be'
  on-tertiary-fixed: '#3f0015'
  on-tertiary-fixed-variant: '#900039'
  background: '#f9f9fc'
  on-background: '#1a1c1e'
  surface-variant: '#e2e2e5'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
The design system is engineered for high-stakes hospitality management where clarity, speed of recognition, and data integrity are paramount. The brand personality is professional, authoritative, and operationally focused, catering to front-desk staff, floor managers, and stakeholders.

The visual style follows a **Corporate / Modern** approach with a heavy emphasis on **High-Contrast** functional elements. While the overall interface remains clean and neutral to reduce cognitive load, critical data points—such as room status and financial alerts—utilize vibrant accents to ensure immediate visibility. The interface prioritizes density without sacrificing legibility, ensuring that complex grids and schedules remain navigable during peak check-in hours.

## Colors
The color strategy employs a "Functional Contrast" model. 

- **Primary Blue (#007DCC):** Used for primary actions, navigation, and "Vacant/Available" statuses, signaling a calm and ready state.
- **Accent Gold (#FFB900):** Reserved for "Dirty" room statuses and cautionary alerts that require staff attention but aren't critical failures.
- **Accent Magenta (#D10056):** Used for "Occupied" room statuses and active financial discrepancies. Its high vibration ensures staff can quickly scan a grid to see capacity.
- **Deep Pink (#B2054C):** Utilized for "Overdue" or "High Priority" maintenance tasks and critical errors.
- **Neutrals:** A range of cool grays (from #F8FAFC for surfaces to #1A1C1E for text) provides a stable, professional backdrop that allows the status colors to pop.

## Typography
The typographic system balances modern aesthetics with technical precision.

- **Headlines (Manrope):** Chosen for its geometric clarity and modern professional tone. Large display sizes use tighter letter-spacing for a sophisticated, structured look.
- **Body (Hanken Grotesk):** Provides exceptional legibility for long-form data reading and guest notes. Its contemporary grotesk style feels approachable yet precise.
- **Data Labels (JetBrains Mono):** Used for room numbers, currency values, timestamps, and status badges. The monospaced nature ensures that columns of numbers align perfectly in tables and financial reports, facilitating quick vertical scanning.

## Layout & Spacing
This design system utilizes a **Fluid Grid** model with strict density controls. 

- **The Grid:** A 12-column layout for desktop environments with 16px gutters. For data-heavy views like the Room Grid or Night Audit reports, the layout may shift to a "Compact Mode" where gutters reduce to 8px to maximize screen real estate.
- **Breakpoints:** Mobile (up to 599px), Tablet (600px - 1023px), Desktop (1024px+).
- **Rhythm:** A 4px baseline grid governs all spacing. Vertical rhythm is strictly enforced in tables to ensure that row heights remain consistent (typically 48px for standard, 32px for compact).

## Elevation & Depth
Elevation is used sparingly to maintain a clean, "flat-modern" aesthetic. 

- **Tonal Layers:** The primary depth mechanism is color-based. The background uses a light-gray surface (#F8FAFC), while primary cards and containers use pure white (#FFFFFF) with a 1px border (#E2E8F0).
- **Shadows:** When necessary (e.g., modals or dropdowns), use "Ambient Shadows"—highly diffused, low-opacity (8-10%) shadows with a subtle blue tint (#007DCC) to link the element back to the primary brand color.
- **Interactive States:** Buttons and interactive cards do not use shadows on hover; instead, they use subtle background color shifts (5% darker) or 2px inset borders to indicate focus.

## Shapes
The shape language is **Soft (Level 1)**. 

- **Standard Elements:** Buttons, input fields, and small cards use a 0.25rem (4px) corner radius. This conveys a professional, structured feel reminiscent of architectural blueprints.
- **Containers:** Larger dashboard widgets and sections use a 0.5rem (8px) radius to softly group content.
- **Status Badges:** These are the only exception, using a fully rounded "Pill" shape to distinguish them from interactive buttons.

## Components
- **Room Grid:** Each cell represents a room. Use high-contrast background fills for the status (Occupied: Magenta, Vacant: Blue, etc.). Use JetBrains Mono for the room number in the top-right corner of the cell.
- **Data Tables:** Use alternating row stripes (Zebra striping) in #F8FAFC. Headers should be sticky with a 2px bottom border in Primary Blue.
- **Status Badges:** Small pill-shaped indicators. Text inside should be uppercase JetBrains Mono (label-sm) for a technical, "verified" appearance.
- **Interactive Calendars:** Current date marked with a Primary Blue circle. Date ranges (bookings) use a 20% opacity tint of the Primary Blue with sharp edges on the start/end dates.
- **Financial Charts:** Use Primary Blue for revenue, Accent Magenta for expenses, and Gold for projected growth. Lines should be 3px thick with small nodes at data points.
- **Input Fields:** 1px neutral border that turns 2px Primary Blue on focus. Labels should always be visible (no floating labels that disappear).
- **Primary Buttons:** Solid Primary Blue fill with white text. Secondary buttons use a Primary Blue 1px outline with no fill.