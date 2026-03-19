/**
 * Button / Tertiary / Add Another  ·  TertiaryAddAnother
 *
 * Figma source files (one per state):
 *   Default  → Button-13-4508  svg-poz5atrpo9   dashed border #A3A9B9  icon #696F88
 *   Disabled → Button-13-4512  svg-hj0dnnmo4q   dashed border #DFE2E7  icon #C2C7D0
 *   Hover    → Button-13-4525  svg-xrmzsk9r24   dashed border #C2C7D0  icon #868CA2  label #363948
 *   Focus    → Button-13-4538  svg-7v133cmsxt   dashed border #A3A9B9  + focus ring
 *   Pressed  → Button-13-4551  svg-l9enn61hkf   dashed border #868CA2  bg #F3F4F6   icon #4D5165
 *   Loading  → Button-13-4564  (no svg)          dashed border #868CA2  bg #F3F4F6   spinner #DA33AB
 *
 * ── Structural identity vs TertiaryStandardSquare ────────────────────────────
 *
 *   This component is structurally IDENTICAL to TertiaryStandardSquare with
 *   exactly ONE visual difference:
 *
 *     border-style: DASHED  ← "Add Another" characteristic
 *     (TertiaryStandardSquare uses border-style: SOLID)
 *
 *   Same border-radius (8px), same padding (px-16px py-12px), same gap-8px,
 *   same icon nesting (L1/L2/L3 with aspect-[28/28]), same label typography,
 *   same focus-ring pattern (applied to the overlay <div>), same tokens.
 *
 * ── Exact Figma structure (Button-13-4508 Default) ────────────────────────────
 *
 *   <div> outer — bg relative rounded-[8px] size-full
 *     <div> inner — content-stretch flex gap-[8px] items-center justify-center
 *                   max-w-[inherit] overflow-clip px-[16px] py-[12px]
 *                   relative rounded-[inherit] size-full
 *       <div> icon L1 — content-stretch flex items-center p-[2px]
 *                        relative shrink-0 size-[24px]
 *         <div> icon L2 — aspect-[28/28] h-full overflow-clip relative shrink-0
 *           <div> icon L3 — -translate-y-1/2 absolute aspect-[14/14]
 *                           left-[20.83%] right-[20.83%] top-1/2
 *             <svg viewBox="0 0 11.6667 11.6667">
 *               <path d={p2f57dbf0} fill={iconColor} />
 *             </svg>
 *       <p> label — font-['Noto_sans:Regular'] text-[16px] leading-[24px]
 *                   tracking-[-0.12px] whitespace-nowrap
 *     <div> border overlay — absolute border DASHED inset-0   ← key difference
 *                            pointer-events-none rounded-[8px]
 *                            [Focus: + shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)]]
 *
 * ── Token map ────────────────────────────────────────────────────────────────
 *
 *  State    │ bg (fill)                        │ icon                             │ label                            │ border overlay (DASHED)
 *  ─────────┼──────────────────────────────────┼──────────────────────────────────┼──────────────────────────────────┼───────────────────────────────────────
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
 * No tertiary-specific border tokens exist in theme.css — secondary border tokens
 * map exactly to the Figma hex values and are used here by design.
 */

import React, { useState } from "react";
import { Spinner } from "../Spinner";
import { Add } from "../../icons";

// ─── Inline SVG path constants ─────────────────────────────────────────────

// ─── Types ────────────────────────────────────────────────────────────────────

export type TertiaryAddAnotherState =
  | "default"
  | "hover"
  | "focus"
  | "pressed"
  | "disabled"
  | "loading";

// ─── State token map ──────────────────────────────────────────────────────────

const STATE_TOKENS: Record<
  TertiaryAddAnotherState,
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
    iconColor:   "var(--icon-default-enabled-tertiary)",    // neutral-60  #696F88
    textColor:   "var(--text-default-enabled-tertiary)",    // neutral-100 #14151C
    borderColor: "var(--border-default-enabled-secondary)", // neutral-40  #A3A9B9
    focusShadow: false,
    showSpinner: false,
  },
  hover: {
    bg:          "var(--fill-default-hover-tertiary)",      // white
    iconColor:   "var(--icon-default-hover-tertiary)",      // neutral-50  #868CA2
    textColor:   "var(--text-default-hover-tertiary)",      // neutral-80  #363948
    borderColor: "var(--border-default-hover-secondary)",   // neutral-30  #C2C7D0
    focusShadow: false,
    showSpinner: false,
  },
  focus: {
    bg:          "var(--fill-default-focus-tertiary)",      // white
    iconColor:   "var(--icon-default-focus-tertiary)",      // neutral-60  #696F88
    textColor:   "var(--text-default-focus-tertiary)",      // neutral-100 #14151C
    borderColor: "var(--border-default-focus-secondary)",   // neutral-40  #A3A9B9
    focusShadow: true,                                      // + --focus-border ring
    showSpinner: false,
  },
  pressed: {
    bg:          "var(--fill-default-pressed-tertiary)",    // neutral-10  #F3F4F6
    iconColor:   "var(--icon-default-pressed-tertiary)",    // neutral-70  #4D5165
    textColor:   "var(--text-default-pressed-tertiary)",    // neutral-100 #14151C
    borderColor: "var(--border-default-pressed-secondary)", // neutral-50  #868CA2
    focusShadow: false,
    showSpinner: false,
  },
  disabled: {
    bg:          "var(--fill-default-disabled-tertiary)",    // white
    iconColor:   "var(--icon-default-disabled-tertiary)",    // neutral-30  #C2C7D0
    textColor:   "var(--text-default-disabled-tertiary)",    // neutral-30  #C2C7D0
    borderColor: "var(--border-default-disabled-secondary)", // neutral-20  #DFE2E7
    focusShadow: false,
    showSpinner: false,
  },
  loading: {
    bg:          "var(--fill-default-pressed-tertiary)",    // neutral-10  #F3F4F6
    iconColor:   "var(--fill-default-enabled-primary)",              // #DA33AB  (spinner active track)
    textColor:   "var(--text-default-pressed-tertiary)",    // neutral-100 #14151C
    borderColor: "var(--border-default-pressed-secondary)", // neutral-50  #868CA2
    focusShadow: false,
    showSpinner: true,
  },
};

// ─── Plus icon — exact Figma three-level nesting ──────────────────────────────
// L1: content-stretch flex items-center p-[2px] relative shrink-0 size-[24px]
// L2: aspect-[28/28] h-full overflow-clip relative shrink-0          ← 28/28 (Standard, not Split)
// L3: -translate-y-1/2 absolute aspect-[14/14] left-[20.83%] right-[20.83%] top-1/2
// SVG: viewBox="0 0 11.6667 11.6667"  path: p2f57dbf0

function PlusIcon({ fill }: { fill: string }) {
  return <Add size={16} style={{ color: fill, flexShrink: 0 }} aria-hidden />;
}

// ─── Button atom ──────────────────────────────────────────────────────────────

export interface TertiaryAddAnotherAtomProps {
  /** Pin to a specific visual state (for library / showcase previews). */
  forcedState?: TertiaryAddAnotherState;
  /** Button label — defaults to "[Button]" matching Figma. */
  label?:       string;
  onClick?:     () => void;
}

export function TertiaryAddAnotherAtom({
  forcedState,
  label = "[Button]",
  onClick,
}: TertiaryAddAnotherAtomProps) {
  const [liveState, setLiveState] = useState<TertiaryAddAnotherState>("default");

  const state  = forcedState ?? liveState;
  const tokens = STATE_TOKENS[state];

  const isDisabled = state === "disabled";
  const isLoading  = state === "loading";

  const set = (s: TertiaryAddAnotherState) => () => { if (!forcedState) setLiveState(s); };

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
        background:    tokens.bg,
        position:      "relative",
        borderRadius:  "8px",
        border:        "none",
        outline:       "none",
        padding:       0,
        margin:        0,
        cursor:        isDisabled ? "not-allowed" : isLoading ? "wait" : "pointer",
        transition:    "background 0.1s",
        display:       "inline-flex",
        alignItems:    "center",
        justifyContent:"center",
      }}
    >
      {/* ── Inner content ──────────────────────────────────────────────────── */}
      {/* Figma: content-stretch flex gap-[8px] items-center justify-center
               max-w-[inherit] overflow-clip px-[16px] py-[12px]
               relative rounded-[inherit] size-full                           */}
      <div
        style={{
          display:        "flex",
          gap:            "8px",
          alignItems:     "center",
          justifyContent: "center",
          overflow:       "clip",
          paddingLeft:    "16px",
          paddingRight:   "16px",
          paddingTop:     "12px",
          paddingBottom:  "12px",
          position:       "relative",
          borderRadius:   "inherit",
        }}
      >
        {/* Icon or Spinner */}
        {tokens.showSpinner ? (
          <Spinner
            size={18}
            trackColor="var(--neutral-20)"
            activeColor="var(--fill-default-enabled-primary)"
          />
        ) : (
          <PlusIcon fill={tokens.iconColor} />
        )}

        {/* Label */}
        <p
          style={{
            fontFamily:    "var(--font-family-primary)",
            fontSize:      "16px",
            fontWeight:    400,
            fontStyle:     "normal",
            lineHeight:    "24px",
            letterSpacing: "-0.12px",
            whiteSpace:    "nowrap",
            margin:        0,
            position:      "relative",
            flexShrink:    0,
            color:         tokens.textColor,
          }}
        >
          {isLoading ? "Loading..." : label}
        </p>
      </div>

      {/* ── Border overlay ─────────────────────────────────────────────────── */}
      {/* Figma: absolute border DASHED inset-0 pointer-events-none rounded-[8px]
               ← "dashed" is the defining visual trait of "Add Another"
               [Focus: + shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)]]        */}
      <div
        aria-hidden="true"
        style={{
          position:      "absolute",
          inset:         0,
          pointerEvents: "none",
          borderRadius:  "8px",
          border:        `1px dashed ${tokens.borderColor}`,   // ← DASHED, not solid
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
  state:       TertiaryAddAnotherState;
  description: string;
}[] = [
  {
    id:          "default",
    name:        "Default",
    figmaFile:   "Button-13-4508 · svg-poz5atrpo9",
    state:       "default",
    description: "Resting state. White fill, neutral-60 icon (#696F88), neutral-100 label (#14151C), neutral-40 dashed border (#A3A9B9).",
  },
  {
    id:          "hover",
    name:        "Hover",
    figmaFile:   "Button-13-4525 · svg-xrmzsk9r24",
    state:       "hover",
    description: "Pointer over button. Icon → neutral-50 (#868CA2), label → neutral-80 (#363948), border → neutral-30 (#C2C7D0).",
  },
  {
    id:          "focus",
    name:        "Focus",
    figmaFile:   "Button-13-4538 · svg-7v133cmsxt",
    state:       "focus",
    description: "Keyboard focus. Same tokens as Default + --focus-border ring (0 0 0 3px rgba(0,146,228,0.5)) on the overlay div.",
  },
  {
    id:          "pressed",
    name:        "Pressed",
    figmaFile:   "Button-13-4551 · svg-l9enn61hkf",
    state:       "pressed",
    description: "Mouse/touch held. Fill → neutral-10 (#F3F4F6), icon → neutral-70 (#4D5165), border → neutral-50 (#868CA2).",
  },
  {
    id:          "disabled",
    name:        "Disabled",
    figmaFile:   "Button-13-4512 · svg-hj0dnnmo4q",
    state:       "disabled",
    description: "Non-interactive. White fill, icon/label → neutral-30 (#C2C7D0), border → neutral-20 (#DFE2E7). cursor: not-allowed.",
  },
  {
    id:          "loading",
    name:        "Loading",
    figmaFile:   "Button-13-4564 · (no svg — spinner)",
    state:       "loading",
    description: "Async in-progress. Fill/border same as Pressed. Icon replaced by --fill-default-enabled-primary spinner (#DA33AB). Label → 'Loading...'",
  },
];

// ─── Showcase / standalone page ───────────────────────────────────────────────

export function TertiaryAddAnother() {
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
        fontFamily: "var(--font-family-primary)",
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
              fontFamily:    "var(--font-family-primary)",
              fontSize:      "11px",
              fontWeight:    600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color:         "var(--text-default-none-secondary)",
              margin:        0,
            }}
          >
            Cropwise Design System V2 · Buttons / Tertiary / Add Another
          </p>
          <h1
            style={{
              fontFamily:    "var(--font-family-primary)",
              fontSize:      "32px",
              fontWeight:    600,
              letterSpacing: "-0.5px",
              lineHeight:    "1.2",
              color:         "var(--text-default-none-primary)",
              margin:        0,
            }}
          >
            TertiaryAddAnother
          </h1>
          <p
            style={{
              fontFamily: "var(--font-family-primary)",
              fontSize:   "16px",
              fontWeight: 400,
              lineHeight: "24px",
              color:      "var(--text-default-none-secondary)",
              margin:     0,
              maxWidth:   640,
            }}
          >
            A tertiary button with a <strong>dashed border</strong> — the defining visual
            trait of the "Add Another" pattern. Structurally identical to
            TertiaryStandardSquare (8 px radius, 16/12 px padding, icon + label) with only{" "}
            <code>border-style: dashed</code> on the overlay <code>&lt;div&gt;</code>.
          </p>
        </header>

        {/* ── Dashed border callout ─────────────────────────────────────────── */}
        <div
          style={{
            display:       "flex",
            alignItems:    "center",
            gap:           "12px",
            background:    "var(--fill-default-none-primary)",
            border:        "1px solid var(--border-default-none-secondary)",
            borderRadius:  "8px",
            padding:       "14px 20px",
          }}
        >
          <div
            style={{
              width:        "32px",
              height:       "32px",
              border:       "2px dashed var(--border-default-enabled-secondary)",
              borderRadius: "4px",
              flexShrink:   0,
            }}
          />
          <p
            style={{
              fontFamily:  "var(--font-family-primary)",
              fontSize:    "14px",
              fontWeight:  400,
              lineHeight:  "20px",
              color:       "var(--text-default-none-secondary)",
              margin:      0,
            }}
          >
            The border overlay uses{" "}
            <code style={{ fontFamily: "monospace", color: "var(--text-default-none-primary)" }}>
              border-style: dashed
            </code>{" "}
            — this is the only structural difference from TertiaryStandardSquare.
            All semantic tokens (fill, icon, text, border color) are shared between the two variants.
          </p>
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
                fontFamily:    "var(--font-family-primary)",
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
                fontFamily: "var(--font-family-primary)",
                fontSize:   "14px",
                fontWeight: 400,
                lineHeight: "20px",
                color:      "var(--text-default-none-secondary)",
                margin:     0,
              }}
            >
              Hover, Tab to focus, click to trigger a live loading state (2.4 s).
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <TertiaryAddAnotherAtom
              forcedState={liveLoading ? "loading" : undefined}
              onClick={triggerLoading}
            />
            <TertiaryAddAnotherAtom forcedState="hover"    />
            <TertiaryAddAnotherAtom forcedState="focus"    />
            <TertiaryAddAnotherAtom forcedState="pressed"  />
            <TertiaryAddAnotherAtom forcedState="disabled" />
            <TertiaryAddAnotherAtom forcedState="loading"  />
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
                  fontFamily:    "var(--font-family-primary)",
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
                    fontFamily:   "var(--font-family-primary)",
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
                  fontFamily:   "var(--font-family-primary)",
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
                <TertiaryAddAnotherAtom forcedState={row.state} />
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
              fontFamily:    "var(--font-family-primary)",
              fontSize:      "11px",
              fontWeight:    600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color:         "var(--text-default-none-primary)",
              margin:        0,
            }}
          >
            Figma structure — dashed border overlay pattern
          </p>
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap:                 "10px",
            }}
          >
            {[
              { prop: "border-style",    value: "dashed ← key trait",         figma: "border-dashed (not border-solid)"          },
              { prop: "border-radius",   value: "8px",                        figma: "rounded-[8px]"                             },
              { prop: "padding",         value: "px-16px py-12px",            figma: "px-[16px] py-[12px]"                      },
              { prop: "icon-label gap",  value: "8px",                        figma: "gap-[8px]"                                 },
              { prop: "icon L2 ratio",   value: "28 / 28",                    figma: "aspect-[28/28] (Standard, not Split 24/24)"},
              { prop: "SVG viewBox",     value: "0 0 11.6667 11.6667",        figma: "same as all other Standard tertiary"       },
              { prop: "border overlay",  value: "1px dashed (state token)",   figma: "absolute inset-0 pointer-events-none"      },
              { prop: "focus ring",      value: "--focus-border",              figma: "shadow-[0px_0px_0px_3px_rgba(0,146,228)]" },
              { prop: "loading spinner", value: "--fill-default-enabled-primary",      figma: "TEMP LOADING SPINNER  size-[24px]"         },
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
                <span style={{ fontFamily: "var(--font-family-primary)", fontSize: "13px", fontWeight: 400, color: "var(--text-default-none-primary)" }}>
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