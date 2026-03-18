/**
 * Button / Tertiary / Icon Only / Square  ·  TertiaryIconOnlySquare
 *
 * Figma source files (one per state):
 *   Default  → Button-13-4092  svg-96z99hcc46
 *   Disabled → Button-13-4096  svg-7wu48tzcv0
 *   Hover    → Button-13-4104  svg-h1jdmi6yf1
 *   Focus    → Button-13-4112  svg-45nlptdmgb
 *   Pressed  → Button-13-4120  svg-a3nekqhpf1
 *   Loading  → Button-13-4128  (no svg — spinner replaces icon)
 *
 * ── Key structural differences vs Standard variants ───────────────────────────
 *   • No label — icon only
 *   • Padding: uniform p-[12px]  (vs px-[16px] py-[12px] in Standard)
 *   • SVG viewBox: "0 0 14 14"  (vs "0 0 11.6667 11.6667" in Standard)
 *   • SVG path: p38adf480  from svg-96z99hcc46
 *
 * ── Exact Figma structure (Button-13-4092 Default) ────────────────────────────
 *
 *   <div> outer — bg-white relative rounded-[8px] size-full
 *     <div> inner — content-stretch flex items-center justify-center
 *                   overflow-clip p-[12px] relative rounded-[inherit] size-full
 *       <div> icon L1 — content-stretch flex items-center relative shrink-0 size-[24px]
 *         <div> icon L2 — aspect-[28/28] h-full overflow-clip relative shrink-0
 *           <div> icon L3 — -translate-y-1/2 absolute aspect-[14/14]
 *                           left-[20.83%] right-[20.83%] top-1/2
 *             <svg viewBox="0 0 14 14">
 *               <path d={p38adf480} fill={iconColor} />
 *             </svg>
 *     <div> border overlay — absolute border border-solid inset-0
 *                            pointer-events-none rounded-[8px]
 *                            [Focus: + shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)]]
 *
 * ── Token map ────────────────────────────────────────────────────────────────
 *
 *  State    │ bg (fill)                        │ icon                             │ border (overlay)
 *  ─────────┼──────────────────────────────────┼──────────────────────────────────┼────────────────────────────────────────────
 *  default  │ --fill-default-enabled-tertiary  │ --icon-default-enabled-tertiary  │ --border-default-enabled-secondary
 *           │   (white)                        │   (neutral-60  #696F88)          │   (neutral-40  #A3A9B9)
 *  hover    │ --fill-default-hover-tertiary    │ --icon-default-hover-tertiary    │ --border-default-hover-secondary
 *           │   (white)                        │   (neutral-50  #868CA2)          │   (neutral-30  #C2C7D0)
 *  focus    │ --fill-default-focus-tertiary    │ --icon-default-focus-tertiary    │ --border-default-focus-secondary
 *           │   (white)                        │   (neutral-60  #696F88)          │   (neutral-40) + --focus-border ring
 *  pressed  │ --fill-default-pressed-tertiary  │ --icon-default-pressed-tertiary  │ --border-default-pressed-secondary
 *           │   (neutral-10  #F3F4F6)          │   (neutral-70  #4D5165)          │   (neutral-50  #868CA2)
 *  disabled │ --fill-default-disabled-tertiary │ --icon-default-disabled-tertiary │ --border-default-disabled-secondary
 *           │   (white)                        │   (neutral-30  #C2C7D0)          │   (neutral-20  #DFE2E7)
 *  loading  │ --fill-default-pressed-tertiary  │ --fill-default-enabled-primary   │ --border-default-pressed-secondary
 *           │   (neutral-10  #F3F4F6)          │   (#DA33AB)                      │   (neutral-50  #868CA2)
 */

import React, { useState } from "react";
import { Spinner } from "../Spinner";

// ─── Inline SVG path constants ─────────────────────────────────────────────
const PLUS_PATH        = "M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z";

// ─── Types ────────────────────────────────────────────────────────────────────

export type TertiaryIconOnlySquareState =
  | "default"
  | "hover"
  | "focus"
  | "pressed"
  | "disabled"
  | "loading";

// ─── State token map ──────────────────────────────────────────────────────────

const STATE_TOKENS: Record<
  TertiaryIconOnlySquareState,
  {
    bg:          string;
    iconColor:   string;
    borderColor: string;
    focusShadow: boolean;
    showSpinner: boolean;
  }
> = {
  default: {
    bg:          "var(--fill-default-enabled-tertiary)",    // white
    iconColor:   "var(--icon-default-enabled-tertiary)",    // neutral-60  #696F88
    borderColor: "var(--border-default-enabled-secondary)", // neutral-40  #A3A9B9
    focusShadow: false,
    showSpinner: false,
  },
  hover: {
    bg:          "var(--fill-default-hover-tertiary)",      // white
    iconColor:   "var(--icon-default-hover-tertiary)",      // neutral-50  #868CA2
    borderColor: "var(--border-default-hover-secondary)",   // neutral-30  #C2C7D0
    focusShadow: false,
    showSpinner: false,
  },
  focus: {
    bg:          "var(--fill-default-focus-tertiary)",      // white
    iconColor:   "var(--icon-default-focus-tertiary)",      // neutral-60  #696F88
    borderColor: "var(--border-default-focus-secondary)",   // neutral-40  #A3A9B9
    focusShadow: true,                                      // + --focus-border ring
    showSpinner: false,
  },
  pressed: {
    bg:          "var(--fill-default-pressed-tertiary)",    // neutral-10  #F3F4F6
    iconColor:   "var(--icon-default-pressed-tertiary)",    // neutral-70  #4D5165
    borderColor: "var(--border-default-pressed-secondary)", // neutral-50  #868CA2
    focusShadow: false,
    showSpinner: false,
  },
  disabled: {
    bg:          "var(--fill-default-disabled-tertiary)",    // white
    iconColor:   "var(--icon-default-disabled-tertiary)",    // neutral-30  #C2C7D0
    borderColor: "var(--border-default-disabled-secondary)", // neutral-20  #DFE2E7
    focusShadow: false,
    showSpinner: false,
  },
  loading: {
    bg:          "var(--fill-default-pressed-tertiary)",    // neutral-10  #F3F4F6  (same as pressed)
    iconColor:   "var(--fill-default-enabled-primary)",     // #DA33AB  (spinner active track)
    borderColor: "var(--border-default-pressed-secondary)", // neutral-50  #868CA2  (same as pressed)
    focusShadow: false,
    showSpinner: true,
  },
};

// ─── Plus icon — exact Figma three-level nesting ──────────────────────────────
// L1: content-stretch flex items-center relative shrink-0 size-[24px]
//     (note: no p-[2px] padding on L1 — Figma omits it on Icon-Only variant)
// L2: aspect-[28/28] h-full overflow-clip relative shrink-0
// L3: -translate-y-1/2 absolute aspect-[14/14] left-[20.83%] right-[20.83%] top-1/2
// SVG: absolute block size-full fill="none" preserveAspectRatio="none"
//      viewBox="0 0 14 14"  ← different from Standard's 11.6667

function PlusIcon({ fill }: { fill: string }) {
  return (
    // L1
    <div
      style={{
        display:    "flex",
        alignItems: "center",
        position:   "relative",
        flexShrink: 0,
        width:      "24px",
        height:     "24px",
      }}
    >
      {/* L2 */}
      <div
        style={{
          aspectRatio: "28 / 28",
          height:      "100%",
          overflow:    "clip",
          position:    "relative",
          flexShrink:  0,
        }}
      >
        {/* L3 */}
        <div
          style={{
            transform:   "translateY(-50%)",
            position:    "absolute",
            aspectRatio: "14 / 14",
            left:        "20.83%",
            right:       "20.83%",
            top:         "50%",
          }}
        >
          <svg
            style={{ position: "absolute", display: "block", width: "100%", height: "100%" }}
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 14 14"
          >
            <path d={PLUS_PATH} fill={fill} id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Button atom ──────────────────────────────────────────────────────────────

export interface TertiaryIconOnlySquareAtomProps {
  /** Pin to a specific visual state (for library / showcase previews). */
  forcedState?: TertiaryIconOnlySquareState;
  /** Accessible label for screen readers (aria-label). */
  ariaLabel?:   string;
  onClick?:     () => void;
}

export function TertiaryIconOnlySquareAtom({
  forcedState,
  ariaLabel = "Add",
  onClick,
}: TertiaryIconOnlySquareAtomProps) {
  const [liveState, setLiveState] = useState<TertiaryIconOnlySquareState>("default");

  const state  = forcedState ?? liveState;
  const tokens = STATE_TOKENS[state];

  const isDisabled = state === "disabled";
  const isLoading  = state === "loading";

  const set = (s: TertiaryIconOnlySquareState) => () => { if (!forcedState) setLiveState(s); };

  return (
    // ── Outer wrapper ──────────────────────────────────────────────────────
    // Figma: bg-white relative rounded-[8px] size-full
    <button
      disabled={isDisabled}
      aria-busy={isLoading}
      aria-label={ariaLabel}
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
        borderRadius: "8px",
        border:       "none",
        outline:      "none",
        padding:      0,
        margin:       0,
        cursor:       isDisabled ? "not-allowed" : isLoading ? "wait" : "pointer",
        transition:   "background 0.1s",
        display:      "inline-flex",
        alignItems:   "center",
        justifyContent: "center",
      }}
    >
      {/* ── Inner content ───────────────────────────────────────────────── */}
      {/* Figma: content-stretch flex items-center justify-center
               overflow-clip p-[12px] relative rounded-[inherit] size-full
               Note: uniform p-[12px], no separate h/v padding            */}
      <div
        style={{
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          overflow:       "clip",
          padding:        "12px",        // uniform — key difference vs Standard
          position:       "relative",
          borderRadius:   "inherit",
        }}
      >
        {/* Icon or Spinner */}
        {isLoading ? (
          // Figma Button-13-4128: bg-[#da33ab] rounded-[100px] shrink-0 size-[24px]
          // → shared Spinner, size 18, activeColor = --fill-default-enabled-primary
          <Spinner
            size={18}
            trackColor="var(--neutral-20)"
            activeColor="var(--fill-default-enabled-primary)"
          />
        ) : (
          <PlusIcon fill={tokens.iconColor} />
        )}
      </div>

      {/* ── Border overlay ──────────────────────────────────────────────── */}
      {/* Figma: absolute border border-solid inset-0 pointer-events-none
               rounded-[8px]
               [Focus only: + shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)]] */}
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
  state:       TertiaryIconOnlySquareState;
  description: string;
}[] = [
  {
    id:          "default",
    name:        "Default",
    figmaFile:   "Button-13-4092 · svg-96z99hcc46",
    state:       "default",
    description: "Resting state. White fill, neutral-60 icon (#696F88), neutral-40 border (#A3A9B9).",
  },
  {
    id:          "hover",
    name:        "Hover",
    figmaFile:   "Button-13-4104 · svg-h1jdmi6yf1",
    state:       "hover",
    description: "Pointer over button. Icon lightens to neutral-50 (#868CA2), border softens to neutral-30 (#C2C7D0).",
  },
  {
    id:          "focus",
    name:        "Focus",
    figmaFile:   "Button-13-4112 · svg-45nlptdmgb",
    state:       "focus",
    description: "Keyboard focus. Same icon/fill as Default + --focus-border ring (0 0 0 3px rgba(0,146,228,0.5)) on the overlay div.",
  },
  {
    id:          "pressed",
    name:        "Pressed",
    figmaFile:   "Button-13-4120 · svg-a3nekqhpf1",
    state:       "pressed",
    description: "Mouse/touch held. Fill → neutral-10 (#F3F4F6), icon → neutral-70 (#4D5165), border → neutral-50 (#868CA2).",
  },
  {
    id:          "disabled",
    name:        "Disabled",
    figmaFile:   "Button-13-4096 · svg-7wu48tzcv0",
    state:       "disabled",
    description: "Non-interactive. White fill, icon → neutral-30 (#C2C7D0), border → neutral-20 (#DFE2E7). cursor: not-allowed.",
  },
  {
    id:          "loading",
    name:        "Loading",
    figmaFile:   "Button-13-4128 · (no svg)",
    state:       "loading",
    description: "Async in-progress. Same fill/border as Pressed. Icon replaced by --fill-default-enabled-primary spinner (#DA33AB).",
  },
];

// ─── Showcase / standalone page ───────────────────────────────────────────────

export function TertiaryIconOnlySquare() {
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
            Cropwise Design System V2 · Buttons / Tertiary / Icon Only / Square
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
            TertiaryIconOnlySquare
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
            Icon-only tertiary button with an 8 px radius. No label — uniform{" "}
            <code>p-[12px]</code> padding, 24 × 24 px icon, 14 × 14 SVG canvas.
            Border lives on an absolute inset overlay <code>&lt;div&gt;</code>;
            focus ring applied to the same overlay.
          </p>
        </header>

        {/* ── Diff vs Standard ────────────────────────────────────────────── */}
        <section
          style={{
            background:    "var(--fill-default-none-primary)",
            border:        "1px solid var(--border-default-none-secondary)",
            borderRadius:  "8px",
            padding:       "16px 24px",
            display:       "flex",
            gap:           "32px",
            flexWrap:      "wrap",
          }}
        >
          {[
            { label: "Label",         standard: "Yes — [Button]",           iconOnly: "None (aria-label only)" },
            { label: "Padding",       standard: "px-[16px] py-[12px]",      iconOnly: "p-[12px] (uniform)" },
            { label: "SVG viewBox",   standard: "0 0 11.6667 11.6667",      iconOnly: "0 0 14 14" },
            { label: "border-radius", standard: "8px (Square)",             iconOnly: "8px (identical)" },
            { label: "Border overlay",standard: "absolute inset-0",         iconOnly: "absolute inset-0 (identical)" },
          ].map(({ label, standard, iconOnly }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "180px" }}>
              <span style={{ fontFamily: "var(--font-family-primary)", fontSize: "11px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "var(--text-default-none-secondary)" }}>
                {label}
              </span>
              <span style={{ fontFamily: "monospace", fontSize: "12px", color: "var(--text-default-none-secondary)", opacity: 0.6 }}>
                Standard: {standard}
              </span>
              <span style={{ fontFamily: "monospace", fontSize: "12px", color: "var(--text-default-none-primary)", fontWeight: 600 }}>
                Icon Only: {iconOnly}
              </span>
            </div>
          ))}
        </section>

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
            <TertiaryIconOnlySquareAtom
              forcedState={liveLoading ? "loading" : undefined}
              onClick={triggerLoading}
            />
            <TertiaryIconOnlySquareAtom forcedState="hover"    />
            <TertiaryIconOnlySquareAtom forcedState="focus"    />
            <TertiaryIconOnlySquareAtom forcedState="pressed"  />
            <TertiaryIconOnlySquareAtom forcedState="disabled" />
            <TertiaryIconOnlySquareAtom forcedState="loading"  />
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
              gridTemplateColumns: "180px 1fr 120px",
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
                gridTemplateColumns: "180px 1fr 120px",
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
                <TertiaryIconOnlySquareAtom forcedState={row.state} />
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
              { prop: "border-radius",   value: "8px",                     figma: "rounded-[8px]"                               },
              { prop: "padding",         value: "12px (uniform)",           figma: "p-[12px]  ← no separate px/py"              },
              { prop: "icon size",       value: "24 × 24 px",              figma: "size-[24px]"                                 },
              { prop: "SVG viewBox",     value: "0 0 14 14",               figma: "vs 11.6667 in Standard"                      },
              { prop: "icon L2 ratio",   value: "28 / 28",                 figma: "aspect-[28/28]"                              },
              { prop: "icon L3 pos",     value: "left/right 20.83%",       figma: "aspect-[14/14]"                              },
              { prop: "border overlay",  value: "1px solid (state token)", figma: "absolute inset-0 pointer-events-none"        },
              { prop: "focus ring",      value: "--focus-border",           figma: "shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)]"},
              { prop: "loading spinner", value: "--fill-default-enabled-primary",   figma: "TEMP LOADING SPINNER  size-[24px]"           },
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