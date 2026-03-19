/**
 * Button / Tertiary / Vertical  ·  TertiaryVertical
 *
 * Figma source files (one per state):
 *   Default  → Button-13-4670  svg-0ru79bgsor
 *   Disabled → Button-13-4674  svg-m0r2jtlzma
 *   Hover    → Button-13-4685  svg-gbxhfs2oiv
 *   Focus    → Button-13-4696  svg-rxnypz6z6k
 *   Pressed  → Button-13-4707  svg-nk4ctsx2lu
 *   Loading  → Button-13-4718  (no svg — spinner replaces icon pill)
 *
 * ── Unique layout traits vs all other Tertiary variants ──────────────────────
 *
 *   1. flex-col layout  — icon pill sits ABOVE the text block (vertical stacking).
 *      All other tertiary variants use flex-row (icon left, label right).
 *
 *   2. Circular icon pill — the icon is wrapped in a rounded-[100px] coloured
 *      badge with p-[8px] padding, not rendered directly into the content row.
 *      The pill background uses the SECONDARY fill tokens (green-based):
 *        default/focus → --fill-default-enabled-secondary  (green-20 #C3EAD1)
 *        hover         → --fill-default-hover-secondary    (green-10 #DFFBE8)
 *        pressed/load  → --fill-default-pressed-secondary  (green-30 #90D6AA)
 *        disabled      → --fill-default-disabled-secondary (neutral-10 #F3F4F6)
 *
 *   3. Two-line text block — a title (16 px) and a subtitle (14 px), stacked
 *      with gap-[2px], both spanning the full button width (w-full, text-center).
 *      Loading replaces both lines with a single "Loading..." label.
 *
 *   4. SVG viewBox "0 0 14 14" — the plus icon path is p38adf480, different
 *      from the Standard button's p2f57dbf0 (viewBox 0 0 11.6667 11.6667).
 *
 *   5. Uniform padding  — p-[16px] on all sides (not px-16 py-12 as in Standard).
 *
 * ── Exact Figma structure (Button-13-4670 Default) ────────────────────────────
 *
 *   <div> outer — bg relative rounded-[8px] size-full
 *     <div> inner — content-stretch flex flex-col gap-[8px] items-center
 *                   justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit]
 *                   overflow-clip p-[16px] relative rounded-[inherit] size-full
 *       <div> icon pill — bg={pillBg} content-stretch flex items-center
 *                         p-[8px] relative rounded-[100px] shrink-0
 *         <div> size-[24px] relative shrink-0
 *           <div> -translate-y-1/2 absolute aspect-[14/14]
 *                 left-[20.83%] right-[20.83%] top-1/2
 *             <svg viewBox="0 0 14 14">
 *               <path d={p38adf480} fill={iconFill} />
 *       <div> text block — flex flex-col gap-[2px] items-start text-center
 *                          w-full  font-['Noto_sans:Regular'] not-italic relative shrink-0
 *         <p> title    — text-[16px] leading-[24px] tracking-[-0.12px]
 *         <p> subtitle — text-[14px] leading-[20px] tracking-[-0.1px]
 *     <div> border overlay — absolute border-solid inset-0 pointer-events-none rounded-[8px]
 *                            [Focus: + shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)]]
 *
 * ── Loading structure (Button-13-4718) ────────────────────────────────────────
 *
 *   Icon pill is replaced by the Spinner at size=40 (matching Figma size-[40px]).
 *   Text block is replaced by a single centered "Loading..." label (16 px, no subtitle).
 *   Outer bg and border use pressed-state tokens (neutral-10 bg, neutral-50 border).
 *
 * ── Token map ────────────────────────────────────────────────────────────────
 *
 *  State    │ outer bg                         │ border                              │ pill bg                          │ icon fill                         │ title                            │ subtitle
 *  ─────────┼──────────────────────────────────┼─────────────────────────────────────┼──────────────────────────────────┼───────────────────────────────────┼──────────────────────────────────┼──────────────────────
 *  default  │ --fill-default-enabled-tertiary  │ --border-default-enabled-secondary  │ --fill-default-enabled-secondary │ --icon-default-enabled-secondary  │ --text-default-none-primary      │ --text-default-none-secondary
 *           │   (white)                        │   (neutral-40 #A3A9B9)              │   (green-20  #C3EAD1)            │   (green-60  #14803C)             │   (neutral-100 #14151C)          │   (neutral-60 #696F88)
 *  hover    │ --fill-default-hover-tertiary    │ --border-default-hover-secondary    │ --fill-default-hover-secondary   │ --icon-default-hover-secondary    │ --text-default-hover-tertiary    │ var(--neutral-40)
 *           │   (white)                        │   (neutral-30 #C2C7D0)              │   (green-10  #DFFBE8)            │   (green-50  #19A04B)             │   (neutral-80  #363948)          │   (#A3A9B9)
 *  focus    │ --fill-default-focus-tertiary    │ --border-default-focus-secondary    │ --fill-default-focus-secondary   │ --icon-default-focus-secondary    │ --text-default-focus-tertiary    │ --text-default-none-secondary
 *           │   (white)                        │   (neutral-40) + --focus-border ring│   (green-20  #C3EAD1)            │   (green-60  #14803C)             │   (neutral-100 #14151C)          │   (neutral-60 #696F88)
 *  pressed  │ --fill-default-pressed-tertiary  │ --border-default-pressed-secondary  │ --fill-default-pressed-secondary │ --icon-default-pressed-secondary  │ --text-default-pressed-tertiary  │ --text-default-none-secondary
 *           │   (neutral-10 #F3F4F6)           │   (neutral-50 #868CA2)              │   (green-30  #90D6AA)            │   (green-70  #0C612C)             │   (neutral-100 #14151C)          │   (neutral-60 #696F88)
 *  disabled │ --fill-default-disabled-tertiary │ --border-default-disabled-secondary │ --fill-default-disabled-secondary│ --icon-default-disabled-secondary │ --text-default-disabled-tertiary │ --text-default-disabled-tertiary
 *           │   (white)                        │   (neutral-20 #DFE2E7)              │   (neutral-10 #F3F4F6)           │   (neutral-30 #C2C7D0)            │   (neutral-30 #C2C7D0)           │   (neutral-30 #C2C7D0)
 *  loading  │ --fill-default-pressed-tertiary  │ --border-default-pressed-secondary  │ (spinner, size 40px)             │ --annotation-mid-pink (spinner)   │ --text-default-pressed-tertiary  │ (no subtitle)
 *           │   (neutral-10 #F3F4F6)           │   (neutral-50 #868CA2)              │                                  │   (#DA33AB)                       │   (neutral-100 #14151C)          │
 *
 * Notes:
 *   • Subtitle hover color (#A3A9B9 = neutral-40) has no dedicated semantic text token;
 *     var(--neutral-40) is used directly as the closest primitive match.
 *   • No tertiary-specific border tokens exist in theme.css — secondary border tokens
 *     are used by design (they map exactly to the Figma hex values).
 */

import React, { useState } from "react";
import { Spinner } from "../Spinner";
import { Add } from "../../icons";

// ─── Inline SVG path constants ─────────────────────────────────────────────

// ─── Types ────────────────────────────────────────────────────────────────────

export type TertiaryVerticalState =
  | "default"
  | "hover"
  | "focus"
  | "pressed"
  | "disabled"
  | "loading";

// ─── State token map ──────────────────────────────────────────────────────────

interface VerticalTokens {
  outerBg:      string;
  borderColor:  string;
  focusShadow:  boolean;
  pillBg:       string;
  iconFill:     string;
  titleColor:   string;
  subtitleColor: string | null; // null = no subtitle (Loading state)
  showSpinner:  boolean;
}

const STATE_TOKENS: Record<TertiaryVerticalState, VerticalTokens> = {
  default: {
    outerBg:       "var(--fill-default-enabled-tertiary)",    // white
    borderColor:   "var(--border-default-enabled-secondary)", // neutral-40  #A3A9B9
    focusShadow:   false,
    pillBg:        "var(--fill-default-enabled-secondary)",   // green-20   #C3EAD1
    iconFill:      "var(--icon-default-enabled-secondary)",   // green-60   #14803C
    titleColor:    "var(--text-default-none-primary)",        // neutral-100 #14151C
    subtitleColor: "var(--text-default-none-secondary)",      // neutral-60  #696F88
    showSpinner:   false,
  },
  hover: {
    outerBg:       "var(--fill-default-hover-tertiary)",      // white
    borderColor:   "var(--border-default-hover-secondary)",   // neutral-30  #C2C7D0
    focusShadow:   false,
    pillBg:        "var(--fill-default-hover-secondary)",     // green-10   #DFFBE8
    iconFill:      "var(--icon-default-hover-secondary)",     // green-50   #19A04B
    titleColor:    "var(--text-default-hover-tertiary)",      // neutral-80  #363948
    subtitleColor: "var(--neutral-40)",                       // #A3A9B9 — no semantic text token at this shade
    showSpinner:   false,
  },
  focus: {
    outerBg:       "var(--fill-default-focus-tertiary)",      // white
    borderColor:   "var(--border-default-focus-secondary)",   // neutral-40  #A3A9B9
    focusShadow:   true,                                      // + --focus-border ring
    pillBg:        "var(--fill-default-focus-secondary)",     // green-20   #C3EAD1
    iconFill:      "var(--icon-default-focus-secondary)",     // green-60   #14803C
    titleColor:    "var(--text-default-focus-tertiary)",      // neutral-100 #14151C
    subtitleColor: "var(--text-default-none-secondary)",      // neutral-60  #696F88
    showSpinner:   false,
  },
  pressed: {
    outerBg:       "var(--fill-default-pressed-tertiary)",    // neutral-10  #F3F4F6
    borderColor:   "var(--border-default-pressed-secondary)", // neutral-50  #868CA2
    focusShadow:   false,
    pillBg:        "var(--fill-default-pressed-secondary)",   // green-30   #90D6AA
    iconFill:      "var(--icon-default-pressed-secondary)",   // green-70   #0C612C
    titleColor:    "var(--text-default-pressed-tertiary)",    // neutral-100 #14151C
    subtitleColor: "var(--text-default-none-secondary)",      // neutral-60  #696F88
    showSpinner:   false,
  },
  disabled: {
    outerBg:       "var(--fill-default-disabled-tertiary)",    // white
    borderColor:   "var(--border-default-disabled-secondary)", // neutral-20  #DFE2E7
    focusShadow:   false,
    pillBg:        "var(--fill-default-disabled-secondary)",   // neutral-10  #F3F4F6
    iconFill:      "var(--icon-default-disabled-secondary)",   // neutral-30  #C2C7D0
    titleColor:    "var(--text-default-disabled-tertiary)",    // neutral-30  #C2C7D0
    subtitleColor: "var(--text-default-disabled-tertiary)",    // neutral-30  #C2C7D0
    showSpinner:   false,
  },
  loading: {
    outerBg:       "var(--fill-default-pressed-tertiary)",    // neutral-10  #F3F4F6
    borderColor:   "var(--border-default-pressed-secondary)", // neutral-50  #868CA2
    focusShadow:   false,
    pillBg:        "",                                        // not used — spinner renders instead
    iconFill:      "var(--fill-default-enabled-primary)",              // #DA33AB  (spinner activeColor)
    titleColor:    "var(--text-default-pressed-tertiary)",    // neutral-100 #14151C
    subtitleColor: null,                                      // no subtitle in loading state
    showSpinner:   true,
  },
};

// ─── PlusIcon inside the pill ─────────────────────────────────────────────────
// Exact Figma nesting (Button-13-4670):
//   L1: relative shrink-0 size-[24px]
//   L2: -translate-y-1/2 absolute aspect-[14/14] left-[20.83%] right-[20.83%] top-1/2
//   SVG: viewBox="0 0 14 14"  path: p38adf480

function PlusIcon({ fill }: { fill: string }) {
  return <Add size={16} style={{ color: fill, flexShrink: 0 }} aria-hidden />;
}

// ─── Icon pill ─────────────────────────────────────────────────────────────────
// Figma: content-stretch flex items-center p-[8px] relative rounded-[100px] shrink-0

function IconPill({ bg, iconFill }: { bg: string; iconFill: string }) {
  return (
    <div
      style={{
        background:  bg,
        display:     "flex",
        alignItems:  "center",
        padding:     "8px",
        position:    "relative",
        borderRadius:"100px",
        flexShrink:  0,
      }}
    >
      <PlusIcon fill={iconFill} />
    </div>
  );
}

// ─── Button atom ──────────────────────────────────────────────────────────────

export interface TertiaryVerticalAtomProps {
  /** Pin to a specific visual state (for library / showcase previews). */
  forcedState?:  TertiaryVerticalState;
  /** Primary label — defaults to "[Button]" matching Figma. */
  label?:        string;
  /** Secondary/sub label — defaults to "[Button]" matching Figma. */
  subLabel?:     string;
  onClick?:      () => void;
}

export function TertiaryVerticalAtom({
  forcedState,
  label    = "[Button]",
  subLabel = "[Button]",
  onClick,
}: TertiaryVerticalAtomProps) {
  const [liveState, setLiveState] = useState<TertiaryVerticalState>("default");

  const state  = forcedState ?? liveState;
  const tokens = STATE_TOKENS[state];

  const isDisabled = state === "disabled";
  const isLoading  = state === "loading";

  const set = (s: TertiaryVerticalState) => () => { if (!forcedState) setLiveState(s); };

  return (
    // ── Outer wrapper ──────────────────────────────────────────────────────
    // Figma: bg relative rounded-[8px] size-full
    <button
      disabled={isDisabled}
      aria-busy={isLoading}
      onClick={onClick}
      onMouseEnter={set("hover")}
      onMouseLeave={set("default")}
      onMouseDown={set("pressed")}
      onMouseUp={set("hover")}
      onFocus={set("focus")}
      onBlur={set("default")}
      style={{
        background:    tokens.outerBg,
        position:      "relative",
        borderRadius:  "8px",
        border:        "none",
        outline:       "none",
        padding:       0,
        margin:        0,
        cursor:        isDisabled ? "not-allowed" : isLoading ? "wait" : "pointer",
        transition:    "background 0.1s",
        display:       "inline-flex",
        alignItems:    "stretch",
      }}
    >
      {/* ── Inner content ──────────────────────────────────────────────────── */}
      {/* Figma: content-stretch flex flex-col gap-[8px] items-center justify-center
               max-h-[inherit] max-w-[inherit] min-h-[inherit] overflow-clip
               p-[16px] relative rounded-[inherit] size-full               */}
      <div
        style={{
          display:        "flex",
          flexDirection:  "column",
          gap:            "8px",
          alignItems:     "center",
          justifyContent: "center",
          overflow:       "clip",
          padding:        "16px",
          position:       "relative",
          borderRadius:   "inherit",
          minHeight:      "inherit",
          minWidth:       "inherit",
          width:          "100%",
        }}
      >
        {/* ── Icon or Spinner ── */}
        {tokens.showSpinner ? (
          // Loading: spinner replaces icon pill, size=40 matching Figma size-[40px]
          <Spinner
            size={40}
            trackColor="var(--neutral-20)"
            activeColor="var(--fill-default-enabled-primary)"
          />
        ) : (
          <IconPill bg={tokens.pillBg} iconFill={tokens.iconFill} />
        )}

        {/* ── Text block ── */}
        {tokens.showSpinner ? (
          // Loading: single centered label only (no subtitle)
          <p
            style={{
              fontFamily:    "var(--font-family-body)",
              fontSize:      "16px",
              fontWeight:    400,
              fontStyle:     "normal",
              lineHeight:    "24px",
              letterSpacing: "-0.12px",
              textAlign:     "center",
              whiteSpace:    "nowrap",
              color:         tokens.titleColor,
              margin:        0,
              position:      "relative",
              flexShrink:    0,
              width:         "100%",
              minWidth:      "100%",
            }}
          >
            Loading...
          </p>
        ) : (
          // Default / all interactive states: title + subtitle
          // Figma: content-stretch flex flex-col gap-[2px] items-start text-center w-full
          //        font-['Noto_sans:Regular'] not-italic relative shrink-0
          <div
            style={{
              display:       "flex",
              flexDirection: "column",
              gap:           "2px",
              alignItems:    "flex-start",
              textAlign:     "center",
              width:         "100%",
              position:      "relative",
              flexShrink:    0,
            }}
          >
            {/* Title — 16px */}
            <p
              style={{
                fontFamily:    "var(--font-family-body)",
                fontSize:      "16px",
                fontWeight:    400,
                fontStyle:     "normal",
                lineHeight:    "24px",
                letterSpacing: "-0.12px",
                color:         tokens.titleColor,
                margin:        0,
                position:      "relative",
                flexShrink:    0,
                width:         "100%",
                whiteSpace:    "nowrap",
              }}
            >
              {label}
            </p>

            {/* Subtitle — 14px */}
            {tokens.subtitleColor !== null && (
              <p
                style={{
                  fontFamily:    "var(--font-family-body)",
                  fontSize:      "14px",
                  fontWeight:    400,
                  fontStyle:     "normal",
                  lineHeight:    "20px",
                  letterSpacing: "-0.1px",
                  color:         tokens.subtitleColor,
                  margin:        0,
                  position:      "relative",
                  flexShrink:    0,
                  width:         "100%",
                  whiteSpace:    "nowrap",
                }}
              >
                {subLabel}
              </p>
            )}
          </div>
        )}
      </div>

      {/* ── Border overlay ─────────────────────────────────────────────────── */}
      {/* Figma: absolute border border-solid inset-0 pointer-events-none rounded-[8px]
               [Focus: + shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)]]             */}
      <div
        aria-hidden="true"
        style={{
          position:      "absolute",
          inset:         0,
          pointerEvents: "none",
          borderRadius:  "8px",
          border:        `1px solid ${tokens.borderColor}`,
          boxShadow:     tokens.focusShadow ? "var(--focus-border)" : "none",
          transition:    "border-color 0.1s, box-shadow 0.1s",
        }}
      />
    </button>
  );
}

// ─── Showcase metadata ────────────────────────────────────────────────────────

const SHOWCASE_STATES: {
  id:          string;
  name:        string;
  figmaFile:   string;
  state:       TertiaryVerticalState;
  description: string;
}[] = [
  {
    id:          "default",
    name:        "Default",
    figmaFile:   "Button-13-4670 · svg-0ru79bgsor",
    state:       "default",
    description: "Resting state. White outer bg, green-20 pill (#C3EAD1), green-60 icon (#14803C), neutral-40 solid border (#A3A9B9). Title neutral-100, subtitle neutral-60.",
  },
  {
    id:          "hover",
    name:        "Hover",
    figmaFile:   "Button-13-4685 · svg-gbxhfs2oiv",
    state:       "hover",
    description: "Pointer over button. Pill → green-10 (#DFFBE8), icon → green-50 (#19A04B), border → neutral-30 (#C2C7D0). Title → neutral-80 (#363948), subtitle → neutral-40 (#A3A9B9).",
  },
  {
    id:          "focus",
    name:        "Focus",
    figmaFile:   "Button-13-4696 · svg-rxnypz6z6k",
    state:       "focus",
    description: "Keyboard focus. Tokens identical to Default + --focus-border ring (0 0 0 3px rgba(0,146,228,0.5)) on the overlay div.",
  },
  {
    id:          "pressed",
    name:        "Pressed",
    figmaFile:   "Button-13-4707 · svg-nk4ctsx2lu",
    state:       "pressed",
    description: "Mouse/touch held. Outer bg → neutral-10 (#F3F4F6), pill → green-30 (#90D6AA), icon → green-70 (#0C612C), border → neutral-50 (#868CA2). Subtitle stays neutral-60.",
  },
  {
    id:          "disabled",
    name:        "Disabled",
    figmaFile:   "Button-13-4674 · svg-m0r2jtlzma",
    state:       "disabled",
    description: "Non-interactive. White bg, pill → neutral-10 (#F3F4F6), icon/title/subtitle → neutral-30 (#C2C7D0), border → neutral-20 (#DFE2E7). cursor: not-allowed.",
  },
  {
    id:          "loading",
    name:        "Loading",
    figmaFile:   "Button-13-4718 · (no svg — spinner)",
    state:       "loading",
    description: "Async in-progress. Outer bg/border same as Pressed. Icon pill replaced by 40 px --annotation-mid-pink spinner (#DA33AB). Single 'Loading...' label — no subtitle.",
  },
];

// ─── Showcase / standalone page ──────────────────────────────────────────────

export function TertiaryVertical() {
  const [liveLoading, setLiveLoading] = useState(false);

  const triggerLoading = () => {
    if (liveLoading) return;
    setLiveLoading(true);
    setTimeout(() => setLiveLoading(false), 2400);
  };

  return (
    <div
      style={{
        minHeight:  "100vh",
        background: "var(--fill-default-none-secondary)",
        padding:    "48px 40px",
        fontFamily: "var(--font-family-body)",
      }}
    >
      <div
        style={{
          maxWidth:      1060,
          margin:        "0 auto",
          display:       "flex",
          flexDirection: "column",
          gap:           32,
        }}
      >
        {/* ── Header ──────────────────────────────────────────────────────── */}
        <header style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <p
            style={{
              fontFamily:    "var(--font-family-body)",
              fontSize:      "11px",
              fontWeight:    600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color:         "var(--text-default-none-secondary)",
              margin:        0,
            }}
          >
            Cropwise Design System V2 · Buttons / Tertiary / Vertical
          </p>
          <h1
            style={{
              fontFamily:    "var(--font-family-body)",
              fontSize:      "32px",
              fontWeight:    600,
              letterSpacing: "-0.5px",
              lineHeight:    "1.2",
              color:         "var(--text-default-none-primary)",
              margin:        0,
            }}
          >
            TertiaryVertical
          </h1>
          <p
            style={{
              fontFamily: "var(--font-family-body)",
              fontSize:   "16px",
              fontWeight: "var(--font-weight-regular)",
              lineHeight: "24px",
              color:      "var(--text-default-none-secondary)",
              margin:     0,
              maxWidth:   680,
            }}
          >
            A uniquely structured tertiary button: <strong>vertical flex layout</strong> with a
            circular coloured icon pill on top and a two-line text block (title + subtitle)
            below. The pill uses <strong>secondary green fill tokens</strong>, making this the
            only tertiary variant where the icon area changes colour across states.
            Loading replaces the pill with a 40 px spinner and shows a single label only.
          </p>
        </header>

        {/* ── What makes it different callout ──────────────────────────────── */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap:                 "10px",
          }}
        >
          {[
            { trait: "flex-col layout",       desc: "Icon pill sits above text (not beside it like all other tertiary variants)" },
            { trait: "Circular icon pill",     desc: "rounded-[100px] bg with p-8px padding — secondary green fill tokens" },
            { trait: "Two-line text",          desc: "Title (16px) + Subtitle (14px) with gap-2px. Loading shows one line only." },
            { trait: "SVG viewBox 0 0 14 14", desc: "Plus icon path p38adf480 — different from Standard's 0 0 11.6667 11.6667" },
            { trait: "Uniform p-16px",        desc: "All-sides padding, not px-16 py-12 as in horizontal tertiary buttons" },
            { trait: "Solid border",          desc: "1px solid (not dashed) — same overlay-div pattern as Standard, not AddAnother" },
          ].map(({ trait, desc }) => (
            <div
              key={trait}
              style={{
                background:    "var(--fill-default-none-primary)",
                border:        "1px solid var(--border-default-none-secondary)",
                borderRadius:  "8px",
                padding:       "12px 16px",
                display:       "flex",
                flexDirection: "column",
                gap:           "4px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-family-body)",
                  fontSize:   "13px",
                  fontWeight: "var(--font-weight-bold)",
                  color:      "var(--text-default-none-primary)",
                }}
              >
                {trait}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-family-body)",
                  fontSize:   "13px",
                  fontWeight: "var(--font-weight-regular)",
                  lineHeight: "18px",
                  color:      "var(--text-default-none-secondary)",
                }}
              >
                {desc}
              </span>
            </div>
          ))}
        </div>

        {/* ── Interactive preview ──────────────────────────────────────────── */}
        <section
          style={{
            background:    "var(--fill-default-none-primary)",
            border:        "1px solid var(--border-default-none-secondary)",
            borderRadius:  "8px",
            padding:       "24px 28px",
            display:       "flex",
            flexDirection: "column",
            gap:           "20px",
          }}
        >
          <div>
            <p
              style={{
                fontFamily:    "var(--font-family-body)",
                fontSize:      "11px",
                fontWeight:    600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color:         "var(--text-default-none-primary)",
                margin:        "0 0 4px",
              }}
            >
              Interactive preview
            </p>
            <p
              style={{
                fontFamily: "var(--font-family-body)",
                fontSize:   "14px",
                fontWeight: "var(--font-weight-regular)",
                lineHeight: "20px",
                color:      "var(--text-default-none-secondary)",
                margin:     0,
              }}
            >
              Hover or Tab to focus, click to trigger a live loading state (2.4 s).
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", flexWrap: "wrap" }}>
            <TertiaryVerticalAtom
              forcedState={liveLoading ? "loading" : undefined}
              onClick={triggerLoading}
            />
          </div>
        </section>

        {/* ── States reference table ──────────────────────────────────────── */}
        <section
          style={{
            background:   "var(--fill-default-none-primary)",
            border:       "1px solid var(--border-default-none-secondary)",
            borderRadius: "8px",
            overflow:     "hidden",
          }}
        >
          {/* Table head */}
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "180px 1fr 180px",
              padding:             "12px 24px",
              background:          "var(--fill-default-none-secondary)",
              borderBottom:        "1px solid var(--border-default-none-secondary)",
            }}
          >
            {["State · Figma", "Description", "Preview"].map((col, i) => (
              <span
                key={col}
                style={{
                  fontFamily:    "var(--font-family-body)",
                  fontSize:      "11px",
                  fontWeight:    600,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color:         "var(--text-default-none-secondary)",
                  textAlign:     i === 2 ? "right" : "left",
                }}
              >
                {col}
              </span>
            ))}
          </div>

          {SHOWCASE_STATES.map((row, idx) => (
            <div
              key={row.id}
              style={{
                display:             "grid",
                gridTemplateColumns: "180px 1fr 180px",
                padding:             "18px 24px",
                alignItems:          "center",
                borderBottom:
                  idx < SHOWCASE_STATES.length - 1
                    ? "1px solid var(--border-default-none-secondary)"
                    : "none",
              }}
            >
              {/* State badge + Figma ref */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span
                  style={{
                    alignSelf:    "flex-start",
                    padding:      "3px 10px",
                    border:       "1px solid var(--border-default-none-secondary)",
                    borderRadius: "4px",
                    fontFamily:   "var(--font-family-body)",
                    fontSize:     "13px",
                    fontWeight:   400,
                    color:        "var(--text-default-none-primary)",
                    background:   "var(--fill-default-none-primary)",
                    whiteSpace:   "nowrap",
                  }}
                >
                  {row.name}
                </span>
                <code
                  style={{
                    fontFamily: "monospace",
                    fontSize:   "10px",
                    lineHeight: "14px",
                    color:      "var(--text-default-none-secondary)",
                    opacity:    0.6,
                  }}
                >
                  {row.figmaFile}
                </code>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily:   "var(--font-family-body)",
                  fontSize:     "14px",
                  fontWeight:   400,
                  lineHeight:   "22px",
                  color:        "var(--text-default-none-secondary)",
                  margin:       0,
                  paddingRight: "24px",
                }}
              >
                {row.description}
              </p>

              {/* Frozen preview */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <TertiaryVerticalAtom forcedState={row.state} />
              </div>
            </div>
          ))}
        </section>

        {/* ── Side-by-side all states ──────────────────────────────────────── */}
        <section
          style={{
            background:   "var(--fill-default-none-primary)",
            border:       "1px solid var(--border-default-none-secondary)",
            borderRadius: "8px",
            overflow:     "hidden",
          }}
        >
          <div
            style={{
              padding:      "12px 24px",
              borderBottom: "1px solid var(--border-default-none-secondary)",
              background:   "var(--fill-default-none-secondary)",
            }}
          >
            <span
              style={{
                fontFamily:    "var(--font-family-body)",
                fontSize:      "11px",
                fontWeight:    600,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color:         "var(--text-default-none-secondary)",
              }}
            >
              All 6 states side-by-side
            </span>
          </div>
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap:                 "1px",
              background:          "var(--border-default-none-secondary)",
            }}
          >
            {SHOWCASE_STATES.map(({ state, name }) => (
              <div
                key={state}
                style={{
                  background:    "var(--fill-default-none-primary)",
                  padding:       "24px 16px",
                  display:       "flex",
                  flexDirection: "column",
                  alignItems:    "center",
                  gap:           "14px",
                }}
              >
                <TertiaryVerticalAtom forcedState={state} />
                <span
                  style={{
                    fontFamily:    "var(--font-family-body)",
                    fontSize:      "11px",
                    fontWeight:    400,
                    letterSpacing: "0.5px",
                    color:         "var(--text-default-none-secondary)",
                    textAlign:     "center",
                  }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Token reference ──────────────────────────────────────────────── */}
        <section
          style={{
            background:    "var(--fill-default-none-primary)",
            border:        "1px solid var(--border-default-none-secondary)",
            borderRadius:  "8px",
            padding:       "20px 24px",
            display:       "flex",
            flexDirection: "column",
            gap:           "12px",
          }}
        >
          <p
            style={{
              fontFamily:    "var(--font-family-body)",
              fontSize:      "11px",
              fontWeight:    600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color:         "var(--text-default-none-primary)",
              margin:        0,
            }}
          >
            Figma structure — key details
          </p>
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap:                 "10px",
            }}
          >
            {[
              { prop: "layout direction",   value: "flex-col (vertical)",            figma: "flex-col on inner wrapper"                },
              { prop: "outer border-radius",value: "8px",                            figma: "rounded-[8px] (Square, not Round/pill)"   },
              { prop: "padding",            value: "p-16px (uniform)",               figma: "p-[16px] all sides"                       },
              { prop: "icon-to-text gap",   value: "8px",                            figma: "gap-[8px] between pill + text block"      },
              { prop: "title-subtitle gap", value: "2px",                            figma: "gap-[2px] inside Text div"                },
              { prop: "pill radius",        value: "100px (full circle)",            figma: "rounded-[100px]"                          },
              { prop: "pill padding",       value: "8px",                            figma: "p-[8px] inside pill"                      },
              { prop: "icon container",     value: "24 × 24 px",                     figma: "size-[24px]"                              },
              { prop: "SVG viewBox",        value: "0 0 14 14",                      figma: "p38adf480 (not 11.6667 like Standard)"    },
              { prop: "title",             value: "16px / 24px / -0.12px",          figma: "Noto Sans Regular, leading-[24px]"        },
              { prop: "subtitle",          value: "14px / 20px / -0.1px",           figma: "Noto Sans Regular, leading-[20px]"        },
              { prop: "border",            value: "1px solid (state token)",         figma: "border-solid on overlay div"              },
              { prop: "focus ring",        value: "--focus-border",                  figma: "shadow-[0px_0px_0px_3px_rgba(0,146,228)]" },
              { prop: "loading spinner",   value: "40px --fill-default-enabled-primary",     figma: "TEMP LOADING SPINNER size-[40px]"         },
              { prop: "loading subtitle",  value: "not shown",                       figma: "subtitle removed in loading state"        },
            ].map(({ prop, value, figma }) => (
              <div
                key={prop}
                style={{
                  background:    "var(--fill-default-none-secondary)",
                  borderRadius:  "6px",
                  padding:       "12px 14px",
                  display:       "flex",
                  flexDirection: "column",
                  gap:           "4px",
                }}
              >
                <code style={{ fontFamily: "monospace", fontSize: "11px", color: "var(--text-default-none-secondary)" }}>
                  {prop}
                </code>
                <span style={{ fontFamily: "var(--font-family-body)", fontSize: "13px", fontWeight: "var(--font-weight-regular)", color: "var(--text-default-none-primary)" }}>
                  {value}
                </span>
                <span style={{ fontFamily: "monospace", fontSize: "10px", color: "var(--text-default-none-secondary)", opacity: 0.6 }}>
                  Figma: {figma}
                </span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}