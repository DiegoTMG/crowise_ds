/**
 * Button / Tertiary / Standard / Square  ·  TertiaryStandardSquare
 *
 * Figma source files (one per state):
 *   Default  → Button-13-3964  svg-8ro7o58hed
 *   Disabled → Button-13-3968  svg-cgr4cxhqjl
 *   Hover    → Button-13-3984  svg-50siduflyr
 *   Focus    → Button-13-4000  svg-d3fwclyjke
 *   Pressed  → Button-13-4016  svg-9xykcll611
 *   Loading  → Button-13-4032  (no svg — spinner replaces icon)
 *
 * ── Key structural difference vs TertiaryStandardRound ────────────────────────
 *   border-radius: 8px  (rounded-[8px])  ← was 100px (pill) in Round
 *   All tokens, spacing, icon, and border overlay pattern are identical.
 *
 * ── Exact Figma structure (Button-13-3964 Default) ────────────────────────────
 *
 *   <div> outer — bg-white relative rounded-[8px] size-full
 *     <div> inner — content-stretch flex gap-[8px] items-center justify-center
 *                   max-w-[inherit] overflow-clip px-[16px] py-[12px]
 *                   relative rounded-[inherit] size-full
 *       <div> icon L1 — content-stretch flex items-center p-[2px]
 *                        relative shrink-0 size-[24px]
 *         <div> icon L2 — aspect-[28/28] h-full overflow-clip relative shrink-0
 *           <div> icon L3 — -translate-y-1/2 absolute aspect-[14/14]
 *                           left-[20.83%] right-[20.83%] top-1/2
 *             <svg viewBox="0 0 11.6667 11.6667">
 *               <path d={PLUS_PATH} fill={iconColor} />
 *             </svg>
 *       <p> label — font-['Noto_sans:Regular'] text-[16px] leading-[24px]
 *                   tracking-[-0.12px] whitespace-nowrap
 *     <div> border overlay — absolute border border-solid inset-0
 *                            pointer-events-none rounded-[8px]
 *                            [Focus: + shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)]]
 *
 * ── Token map ────────────────────────────────────────────────────────────────
 *
 *  State    │ bg (fill)                        │ icon                             │ text                             │ border (overlay)
 *  ─────────┼──────────────────────────────────┼──────────────────────────────────┼──────────────────────────────────┼───────────────────────────────────────────
 *  default  │ --fill-default-enabled-tertiary  │ --icon-default-enabled-tertiary  │ --text-default-enabled-tertiary  │ --border-default-enabled-secondary
 *           │   (white)                        │   (neutral-60  #696F88)          │   (neutral-100 #14151C)          │   (neutral-40  #A3A9B9)
 *  hover    │ --fill-default-hover-tertiary    │ --icon-default-hover-tertiary    │ --text-default-hover-tertiary    │ --border-default-hover-secondary
 *           │   (white)                        │   (neutral-50  #868CA2)          │   (neutral-80  #363948)          │   (neutral-30  #C2C7D0)
 *  focus    │ --fill-default-focus-tertiary    │ --icon-default-focus-tertiary    │ --text-default-focus-tertiary    │ --border-default-focus-secondary
 *           │   (white)                        │   (neutral-60  #696F88)          │   (neutral-100 #14151C)          │   (neutral-40) + --focus-border ring
 *  pressed  │ --fill-default-pressed-tertiary  │ --icon-default-pressed-tertiary  │ --text-default-pressed-tertiary  │ --border-default-pressed-secondary
 *           │   (neutral-10 #F3F4F6)           │   (neutral-70  #4D5165)          │   (neutral-100 #14151C)          │   (neutral-50  #868CA2)
 *  disabled │ --fill-default-disabled-tertiary │ --icon-default-disabled-tertiary │ --text-default-disabled-tertiary │ --border-default-disabled-secondary
 *           │   (white)                        │   (neutral-30  #C2C7D0)          │   (neutral-30  #C2C7D0)          │   (neutral-20  #DFE2E7)
 *  loading  │ --fill-default-pressed-tertiary  │ --annotation-mid-pink (spinner)  │ --text-default-pressed-tertiary  │ --border-default-pressed-secondary
 *           │   (neutral-10 #F3F4F6)           │   (#DA33AB)                      │   (neutral-100 #14151C)          │   (neutral-50  #868CA2)
 *
 * No tertiary-specific border tokens exist in theme.css — the secondary border
 * tokens map exactly to the Figma hex values and are used here by design.
 */

import React, { useState } from "react";
import { Spinner } from "../Spinner";
import { Add } from "../../icons";

// ─── Inline SVG path constants ─────────────────────────────────────────────

// ─── Types ────────────────────────────────────────────────────────────────────

export type TertiarySquareState =
  | "default"
  | "hover"
  | "focus"
  | "pressed"
  | "disabled"
  | "loading";

// ─── State token map ──────────────────────────────────────────────────────────

const STATE_TOKENS: Record<
  TertiarySquareState,
  {
    bg:          string;
    iconColor:   string;
    textColor:   string;
    borderColor: string;
    focusShadow: boolean;
    showSpinner: boolean;
  }
> = {
  default: {
    bg:          "var(--fill-default-enabled-tertiary)",    // white
    iconColor:   "var(--icon-default-enabled-tertiary)",    // neutral-60 #696F88
    textColor:   "var(--text-default-enabled-tertiary)",    // neutral-100 #14151C
    borderColor: "var(--border-default-enabled-secondary)", // neutral-40 #A3A9B9
    focusShadow: false,
    showSpinner: false,
  },
  hover: {
    bg:          "var(--fill-default-hover-tertiary)",      // white
    iconColor:   "var(--icon-default-hover-tertiary)",      // neutral-50 #868CA2
    textColor:   "var(--text-default-hover-tertiary)",      // neutral-80 #363948
    borderColor: "var(--border-default-hover-secondary)",   // neutral-30 #C2C7D0
    focusShadow: false,
    showSpinner: false,
  },
  focus: {
    bg:          "var(--fill-default-focus-tertiary)",      // white
    iconColor:   "var(--icon-default-focus-tertiary)",      // neutral-60 #696F88
    textColor:   "var(--text-default-focus-tertiary)",      // neutral-100 #14151C
    borderColor: "var(--border-default-focus-secondary)",   // neutral-40 #A3A9B9
    focusShadow: true,                                      // + --focus-border ring
    showSpinner: false,
  },
  pressed: {
    bg:          "var(--fill-default-pressed-tertiary)",    // neutral-10 #F3F4F6
    iconColor:   "var(--icon-default-pressed-tertiary)",    // neutral-70 #4D5165
    textColor:   "var(--text-default-pressed-tertiary)",    // neutral-100 #14151C
    borderColor: "var(--border-default-pressed-secondary)", // neutral-50 #868CA2
    focusShadow: false,
    showSpinner: false,
  },
  disabled: {
    bg:          "var(--fill-default-disabled-tertiary)",    // white
    iconColor:   "var(--icon-default-disabled-tertiary)",    // neutral-30 #C2C7D0
    textColor:   "var(--text-default-disabled-tertiary)",    // neutral-30 #C2C7D0
    borderColor: "var(--border-default-disabled-secondary)", // neutral-20 #DFE2E7
    focusShadow: false,
    showSpinner: false,
  },
  loading: {
    bg:          "var(--fill-default-pressed-tertiary)",    // neutral-10 #F3F4F6  (same as pressed)
    iconColor:   "var(--fill-default-enabled-primary)",              // #DA33AB  (spinner active track)
    textColor:   "var(--text-default-pressed-tertiary)",    // neutral-100 #14151C
    borderColor: "var(--border-default-pressed-secondary)", // neutral-50 #868CA2  (same as pressed)
    focusShadow: false,
    showSpinner: true,
  },
};

// ─── Typography — Button / Label ──────────────────────────────────────────────
// Figma: font-['Noto_sans:Regular',sans-serif] not-italic text-[16px]
//        leading-[24px] tracking-[-0.12px] whitespace-nowrap

const LABEL_STYLE: React.CSSProperties = {
  fontFamily:    "var(--font-family-body)",
  fontSize:      "16px",
  fontWeight:    400,
  fontStyle:     "normal",
  lineHeight:    "24px",
  letterSpacing: "-0.12px",
  whiteSpace:    "nowrap",
  margin:        0,
  position:      "relative",
  flexShrink:    0,
};

// ─── Plus icon — exact Figma three-level nesting ──────────────────────────────
// L1: content-stretch flex items-center p-[2px] relative shrink-0 size-[24px]
// L2: aspect-[28/28] h-full overflow-clip relative shrink-0
// L3: -translate-y-1/2 absolute aspect-[14/14] left-[20.83%] right-[20.83%] top-1/2
// SVG: absolute block size-full fill="none" preserveAspectRatio="none"
//      viewBox="0 0 11.6667 11.6667"

function PlusIcon({ fill }: { fill: string }) {
  return <Add size={24} style={{ color: fill, flexShrink: 0 }} aria-hidden />;
}

// ─── Button atom ──────────────────────────────────────────────────────────────

export interface TertiaryStandardSquareAtomProps {
  /** Pin to a specific visual state (for library / showcase previews). */
  forcedState?: TertiarySquareState;
  label?:       string;
  onClick?:     () => void;
}

export function TertiaryStandardSquareAtom({
  forcedState,
  label = "[Button]",
  onClick,
}: TertiaryStandardSquareAtomProps) {
  const [liveState, setLiveState] = useState<TertiarySquareState>("default");

  const state  = forcedState ?? liveState;
  const tokens = STATE_TOKENS[state];

  const isDisabled = state === "disabled";
  const isLoading  = state === "loading";

  const set = (s: TertiarySquareState) => () => { if (!forcedState) setLiveState(s); };

  return (
    // ── Outer wrapper ──────────────────────────────────────────────────────
    // Figma: bg-white relative rounded-[8px] size-full
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
        background:   tokens.bg,
        position:     "relative",
        borderRadius: "8px",       // ← Square (vs 100px pill in Round)
        border:       "none",
        outline:      "none",
        padding:      0,
        margin:       0,
        cursor:       isDisabled ? "not-allowed" : isLoading ? "wait" : "pointer",
        transition:   "background 0.1s",
        display:      "inline-flex",
        alignItems:   "center",
      }}
    >
      {/* ── Inner content row ───────────────────────────────────────────── */}
      {/* Figma: content-stretch flex gap-[8px] items-center justify-center
               max-w-[inherit] overflow-clip px-[16px] py-[12px]
               relative rounded-[inherit] size-full                        */}
      <div
        style={{
          display:        "flex",
          gap:            "8px",
          alignItems:     "center",
          justifyContent: "center",
          overflow:       "clip",
          paddingTop:     "12px",
          paddingBottom:  "12px",
          paddingLeft:    "16px",
          paddingRight:   "16px",
          position:       "relative",
          borderRadius:   "inherit",
        }}
      >
        {/* Icon or Spinner */}
        {isLoading ? (
          // Figma Button-13-4032: "TEMP LOADING SPINNER"
          // bg-[#da33ab] rounded-[100px] shrink-0 size-[24px]
          // → shared Spinner, size 18, activeColor = --fill-default-enabled-primary
          <Spinner
            size={18}
            trackColor="var(--neutral-20)"
            activeColor="var(--fill-default-enabled-primary)"
          />
        ) : (
          <PlusIcon fill={tokens.iconColor} />
        )}

        {/* Label */}
        {/* Figma: font-['Noto_sans:Regular'] leading-[24px] not-italic
                  text-[16px] tracking-[-0.12px] whitespace-nowrap         */}
        <p style={{ ...LABEL_STYLE, color: tokens.textColor }}>
          {isLoading ? "Loading..." : label}
        </p>
      </div>

      {/* ── Border overlay ──────────────────────────────────────────────── */}
      {/* Figma: absolute border border-solid inset-0 pointer-events-none
               rounded-[8px]
               [Focus: + shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)]]    */}
      <div
        aria-hidden="true"
        style={{
          position:      "absolute",
          inset:         0,
          pointerEvents: "none",
          borderRadius:  "8px",   // ← matches outer shape exactly
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
  state:       TertiarySquareState;
  description: string;
}[] = [
  {
    id:          "default",
    name:        "Default",
    figmaFile:   "Button-13-3964 · svg-8ro7o58hed",
    state:       "default",
    description: "Resting state. White fill, neutral-60 icon (#696F88), neutral-100 text (#14151C), neutral-40 border (#A3A9B9).",
  },
  {
    id:          "hover",
    name:        "Hover",
    figmaFile:   "Button-13-3984 · svg-50siduflyr",
    state:       "hover",
    description: "Pointer over button. Icon lightens to neutral-50 (#868CA2), text to neutral-80 (#363948), border softens to neutral-30 (#C2C7D0).",
  },
  {
    id:          "focus",
    name:        "Focus",
    figmaFile:   "Button-13-4000 · svg-d3fwclyjke",
    state:       "focus",
    description: "Keyboard focus. Same colours as Default + --focus-border ring (0 0 0 3px rgba(0,146,228,0.5)) on the border overlay div.",
  },
  {
    id:          "pressed",
    name:        "Pressed",
    figmaFile:   "Button-13-4016 · svg-9xykcll611",
    state:       "pressed",
    description: "Mouse/touch held. Fill → neutral-10 (#F3F4F6), icon → neutral-70 (#4D5165), border → neutral-50 (#868CA2).",
  },
  {
    id:          "disabled",
    name:        "Disabled",
    figmaFile:   "Button-13-3968 · svg-cgr4cxhqjl",
    state:       "disabled",
    description: "Non-interactive. White fill, icon + text + border reduced to neutral-30 / neutral-20 palette. cursor: not-allowed.",
  },
  {
    id:          "loading",
    name:        "Loading",
    figmaFile:   "Button-13-4032 · (no svg)",
    state:       "loading",
    description: "Async in-progress. Same fill/border as Pressed. Plus icon replaced by --fill-default-enabled-primary spinner. Label reads 'Loading...'",
  },
];

// ─── Showcase / standalone page ───────────────────────────────────────────────

export function TertiaryStandardSquare() {
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
          maxWidth:      1040,
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
            Cropwise Design System V2 · Buttons / Tertiary / Standard / Square
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
            TertiaryStandardSquare
          </h1>

          <p
            style={{
              fontFamily: "var(--font-family-body)",
              fontSize:   "16px",
              fontWeight: "var(--font-weight-regular)",
              lineHeight: "24px",
              color:      "var(--text-default-none-secondary)",
              margin:     0,
              maxWidth:   640,
            }}
          >
            A rounded-rectangle tertiary button (8px radius, white fill, neutral border) with icon and label.
            Structurally identical to <code>TertiaryStandardRound</code> — only the corner radius differs (8px vs 100px).
            Border lives on an absolute inset overlay <code>&lt;div&gt;</code>; focus ring applied to the same overlay.
          </p>
        </header>

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
              Hover, Tab to focus, click to trigger a live loading state (2.4 s).
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <TertiaryStandardSquareAtom
              forcedState={liveLoading ? "loading" : undefined}
              onClick={triggerLoading}
            />
            <TertiaryStandardSquareAtom forcedState="hover"    />
            <TertiaryStandardSquareAtom forcedState="focus"    />
            <TertiaryStandardSquareAtom forcedState="pressed"  />
            <TertiaryStandardSquareAtom forcedState="disabled" />
          </div>
        </section>

        {/* ── States reference table ───────────────────────────────────────── */}
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
              gridTemplateColumns: "180px 1fr 200px",
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
                gridTemplateColumns: "180px 1fr 200px",
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
                <TertiaryStandardSquareAtom forcedState={row.state} />
              </div>
            </div>
          ))}
        </section>

        {/* ── Structure spec ───────────────────────────────────────────────── */}
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
            Figma structure — absolute border overlay pattern
          </p>

          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap:                 "10px",
            }}
          >
            {[
              { prop: "border-radius",   value: "8px",                    figma: "rounded-[8px]  ← Square"             },
              { prop: "px / py",         value: "16px / 12px",            figma: "px-[16px] py-[12px]"                 },
              { prop: "gap",             value: "8px",                    figma: "gap-[8px]"                           },
              { prop: "icon size",       value: "24 × 24 px",             figma: "size-[24px]"                         },
              { prop: "icon inner SVG",  value: "11.67 × 11.67",          figma: "aspect-[14/14] ~58%"                 },
              { prop: "border overlay",  value: "1px solid (state token)",figma: "absolute inset-0 pointer-events-none"},
              { prop: "focus ring",      value: "--focus-border",          figma: "shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)]" },
              { prop: "loading spinner", value: "--fill-default-enabled-primary",  figma: "TEMP LOADING SPINNER"                },
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