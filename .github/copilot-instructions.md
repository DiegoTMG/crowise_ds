# Copilot Instructions — Cropwise Figma-to-Code Absolute Fidelity Mode

> **Read this file before executing any task.**
> This workspace is for building a coded component library with **strict 1:1 fidelity to Figma**.
> The connected Figma project via MCP is the **single source of truth for layout, structure, spacing, sizing, typography, colors, icons, states, and behavior**.
> **Do not interpret, simplify, improve, modernize, approximate, or “adapt” the design.**
> If something exists in Figma, it must be replicated **exactly as designed**, using only the existing Design System resources already available in this codebase.

---

## Objective

Translate Figma components into React (TypeScript) components for VS Code with **100% visual and structural fidelity** to the original design.

Your job is to **reproduce the Figma component exactly**, while reusing:
- existing design-system tokens
- existing design-system components
- existing icons
- existing typography styles
- existing semantic color tokens
- existing loading patterns
- existing component exports and architecture

**Never invent new visual decisions.**
**Never make approximation-based implementation choices.**
**Never alter the design.**

---

## Absolute Rule

- The Figma design must be copied **100% exactly**.
- **Any visual, structural, spacing, sizing, or stylistic deviation is a failure.**
- The agent must not:
  - improve the layout
  - “clean up” the design
  - reinterpret spacing
  - normalize dimensions
  - substitute similar values
  - create visually close alternatives
  - apply personal/frontend best-guess decisions when the Figma defines something explicitly

When in doubt:
1. inspect Figma again via MCP
2. inspect the Design System files again
3. reuse existing project resources
4. do **not** guess

---

## Required Pre-Execution Checklist

Before executing any task, always perform this sequence:

1. Inspect the target component/frame in Figma through MCP.
2. Inspect `src/theme/theme.css`.
3. Inspect `src/theme/fonts.css`.
4. Inspect `src/components/`.
5. Inspect `src/icons/`.
6. Check whether the component already exists in the codebase.
7. Check whether the design is composed from existing design-system primitives.
8. Map every Figma value to an existing token/component/icon/style.
9. Verify whether any dependency is required to complete the task.
10. **Before making changes, explicitly inform the user if any dependency must be installed first.**
11. Only then implement.

If a dependency is required:
- **Stop before implementation**
- clearly inform the user what must be installed
- explain why it is needed
- do not silently add it
- do not proceed as if it already exists

If no dependency is required:
- proceed with implementation normally

---

## Figma MCP Rules

- The Figma project connected through MCP must be treated as the **authoritative design reference**.
- Always inspect the actual target node/component/variant/state before coding.
- Do not rely only on screenshots if MCP provides direct access to the real design data.
- Screenshots are supporting context; MCP inspection is mandatory whenever available.
- If the Figma shows:
  - exact spacing
  - exact sizing
  - exact alignment
  - exact hierarchy
  - exact icon choice
  - exact typography
  - exact colors
  - exact border treatment
  - exact component composition
  then those must be implemented exactly as shown.

If a detail is visible in Figma, it is **not optional**.

---

## Design System Source of Truth

The local Design System is authoritative for implementation resources.

### Mandatory files to inspect

- `src/theme/theme.css`
- `src/theme/fonts.css`
- `src/components/`
- `src/icons/`

### What they define

- `src/theme/theme.css`
  - official tokens
  - semantic color variables
  - typography references
  - font definitions
  - spacing rules where applicable

- `src/components/`
  - reusable design-system components
  - existing primitives and compositions
  - already implemented variants/states

- `src/icons/`
  - official icon source
  - only allowed icon assets

---

## Non-Negotiable Implementation Principles

- Reproduce the Figma **exactly**.
- Reuse existing codebase resources **before creating anything new**.
- If a Figma component already exists in the project, **use it**.
- If a Figma pattern is composed from existing primitives, **assemble it from those primitives**.
- Never create custom visual solutions when the system already has the necessary building blocks.
- Never introduce local design decisions.
- Never “match approximately”.
- Never use fallback values unless the user explicitly approves or the design system truly lacks the necessary resource.

If something is missing from the system:
1. confirm it is truly missing
2. report the gap clearly
3. do not invent a substitute silently

---

## General Layout Rules

- Use **Flexbox / CSS flex layout** by default because it maps to Figma Auto Layout.
- Avoid absolute positioning unless the Figma structure truly requires it.
- Preserve the exact:
  - direction
  - alignment
  - justification
  - spacing
  - padding
  - gaps
  - sizing
  - containment
  - stacking
- Layout should mirror the Figma hierarchy as closely as possible.
- Do not flatten or restructure component layers unless necessary for React semantics and without affecting visual fidelity.
- Keep component layers organised and properly named following:
  - `Component / Variant / State`

---

## Fidelity Rules

Every implementation must preserve exactly:

- component dimensions
- internal spacing
- external spacing when relevant to the component frame
- alignment
- icon placement
- icon size
- label placement
- title/subtitle relationship
- text hierarchy
- border radius
- border thickness
- fills/backgrounds
- semantic color intent
- shadows if present in the Design System
- loading behavior
- disabled behavior
- state differences
- light/dark variations when defined
- responsive behavior only if it is defined by the design/system

Do not:
- round values differently
- center something that is offset in Figma
- swap spacing tokens because they look close
- replace a two-line text block with a one-line assumption
- adjust component proportions “for consistency”
- remove small visual differences across variants/states

---

## Colors

- Use only **semantic color tokens** declared in `src/theme/theme.css`.
- Never create new colors.
- Never create new color variables.
- Never hardcode raw color values in components.
- Never reference primitive/base colors directly if a semantic token exists.
- Always map the Figma color to the corresponding semantic token.

Correct approach:
- use semantic tokens such as `--fill-default-enabled-primary`

Incorrect approach:
- use primitive tokens directly such as `--green-60`
- use hex values
- use rgb/rgba literals
- create ad hoc aliases inside the component

If the exact semantic mapping is unclear:
1. inspect `theme.css`
2. inspect nearby existing components
3. choose the token that matches the Figma role exactly
4. do not guess casually

---

## Typography

- Base font-size: **14 px**
- Official typeface: **Noto Sans**
- Allowed weights:
  - 400 Regular
  - 500 Medium
  - 600 Semibold
  - 700 Bold

### Typography rules

- Use only predefined text styles from the Design System.
- Do not create new text styles.
- Do not manually invent typography values.
- Do not manually set ad hoc:
  - `font-size`
  - `font-weight`
  - `line-height`
  - `letter-spacing`
- Use the nearest **existing predefined typography token/style** that matches the Figma exactly.
- Allowed text-style categories:
  - Display
  - Heading
  - Paragraph
  - Caption / Label

For buttons:
- always use the designated **Button / Label** text style

If the Figma uses a style that exists in the project:
- use that exact style

If there is uncertainty:
1. inspect typography definitions in the system
2. inspect existing component usage
3. map to the correct predefined style
4. do not create a new style

---

## Icons

- Always use icons from `src/icons/`.
- Never generate new icons.
- Never draw new SVG paths.
- Never inline custom SVG paths outside the official icon set.
- Standard icon sizes:
  - **24×24 px**
  - **18×18 px**
- Icons inside buttons must be **16 px**
- Always map the Figma icon to the exact existing icon file in the project.

If the exact icon cannot be found:
1. inspect `src/icons/`
2. inspect similar existing components
3. report that the icon is missing
4. do not silently substitute a similar icon

---

## Buttons

- All buttons must be built from the base `Button` component in `src/components/buttons/`.
- Do not create new button variants.
- Do not override:
  - spacing
  - padding
  - border-radius
  - height
- Required variants:
  - Primary
  - Secondary
  - Tertiary
  - Ghost
  - Destructive
  - Disabled
- Required states:
  - Default
  - Hover
  - Pressed
  - Focus
  - Disabled
  - Loading

### Button-specific rules

- Use only official icon set icons
- Button icons must be **16 px**
- Keep label visible during loading
- Replace only the icon with the loading spinner when loading
- Do not use `text-transform: uppercase` manually
- Never override button colors with raw values
- Use semantic tokens only
- Never create a “close enough” button by modifying an existing variant beyond system rules

---

## Components

- Always build components using flex Auto Layout behavior by default.
- Follow naming convention:
  - `Component / Variant / State`
- Never use local overrides for:
  - typography
  - colors
  - spacing
  - icons
- Export all components from `src/components/index.ts`
- Also register in the nearest barrel file when applicable
- Avoid detached or isolated instances
- Keep implementation aligned with the existing project architecture

### Reuse-first rule

Before creating any new component:
1. check whether it already exists
2. check whether it can be assembled from existing primitives
3. check whether a variant/state already exists
4. only create new code if truly necessary

---

## Spinners

- Allowed spinner sizes only:
  - **18 px** for buttons
  - **36 px** for sections/components
  - **72 px** for full-page loading
- Use only Design System semantic colors
- Support only approved color contexts:
  - Primary
  - Secondary
  - Light Mode
  - Dark Mode
- Do not alter:
  - proportions
  - stroke width
  - animation behavior
- In buttons:
  - replace only the icon with spinner
  - keep label visible
  - keep button in disabled/loading state
  - always use **18 px**
- For full-page loading:
  - center the **72 px** spinner on the page
- For sections/components:
  - center the **36 px** spinner within its container
- Avoid unrelated blocking overlays
- Loading indicators must reflect the real scope of the action

---

## Interpretation Rules

- Always inspect and use the components, text styles, icons, and tokens already present in:
  - `src/components/`
  - `src/icons/`
  - `src/theme/theme.css`
  - `src/theme/fonts.css`
- When generating UI, **reuse and assemble existing system components** instead of creating custom elements.
- If a Figma design references a component that already exists in code, use it.
- Do not re-implement an existing component from scratch unless explicitly required.
- Map every Figma color to its corresponding semantic CSS token.
- Map every Figma icon to its corresponding project icon.
- Map every Figma text style to the nearest predefined typography token/style.
- Preserve variant/state structure exactly as represented in Figma.

---

## File & Code Conventions

- Language: **TypeScript + React (TSX)**
- Styling:
  - use inline `style` objects with CSS variable tokens
  - or use a CSS module only if the component already uses one
- Props interface:
  - explicitly typed
  - must use `Props` suffix
  - example: `ButtonProps`
- Export components as **named exports**
- Register new components in the nearest `index.ts` barrel file
- Do not introduce new third-party dependencies without user approval
- Do not silently modify project architecture to fit your preference

---

## Dependency Rule

Before any implementation, the agent must determine whether dependencies are needed.

### If dependencies are needed

The agent must:
- stop before coding
- explicitly inform the user
- list what needs to be installed
- explain why each dependency is necessary
- wait for approval before assuming those dependencies can be used

### If dependencies are not needed

The agent may proceed directly

### Forbidden behavior

- do not auto-install dependencies
- do not silently add dependencies to package files
- do not assume an uninstalled package exists
- do not continue implementation while hiding dependency requirements

---

## Existing Codebase Priority

Always prefer, in this order:

1. existing component already implemented
2. existing design-system primitive composition
3. existing token/style/icon mapping
4. new implementation only when required

Never bypass an existing reusable component just because creating a local version feels faster.

---

## Failure Conditions

The task is considered incorrectly executed if any of the following happen:

- the output is only visually similar, not identical
- spacing differs from Figma
- alignment differs from Figma
- typography differs from the design system mapping
- raw colors are used
- primitive colors are used instead of semantic tokens
- a new icon is created
- a similar icon is substituted without explicit confirmation
- a component is reimplemented even though it already exists
- local ad hoc styles are introduced
- dependencies were needed but not reported first
- the design was simplified, normalized, or “improved”
- states/variants were omitted or merged incorrectly
- loading behavior differs from spec
- button structure differs from the design system rules

---

## Expected Execution Behavior

For every Figma-to-code task, follow this behavior:

1. Read the task carefully.
2. Inspect the target in Figma via MCP.
3. Inspect `src/theme/theme.css`.
4. Inspect `src/theme/fonts.css`.
5. Inspect `src/components/`.
6. Inspect `src/icons/`.
7. Reuse existing system resources wherever possible.
8. Verify whether any dependency is required.
9. Inform the user before implementation if any dependency must be installed.
10. Implement with exact fidelity.
11. Export/register correctly.
12. Keep the code aligned with the current design-system architecture.
13. Do a final self-check against Figma:
   - structure
   - spacing
   - sizing
   - colors
   - typography
   - icons
   - states
   - loading behavior
   - exports

---

## Final Principle

This project is a **coded component library**, not a loose UI prototype.

Therefore:
- precision is more important than speed
- consistency is more important than creativity
- reuse is more important than reinvention
- fidelity is more important than approximation

**The Figma must be reproduced exactly, with zero unintended alteration.**