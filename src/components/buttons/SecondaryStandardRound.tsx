/**
 * Button / Secondary / Standard / Round  ·  SecondaryStandardRound
 *
 * Figma source frames (all share the same SVG path shape — p2f57dbf0):
 *   Disabled  → Button-6-11041  svg-58qlxby0o4   bg-white   border/text/icon #c2c7d0  (neutral-30)
 *   Hover     → Button-6-11045  svg-ctjrv80rtz   bg-white   border/text/icon #19a04b  (green-50)
 *   Focus     → Button-6-11061  svg-euau4q4n1h   bg-white   border/text/icon #14803c  (green-60) + focus ring
 *   Pressed   → Button-6-11077  svg-dku578yb7m   bg-#f3f4f6 border/text/icon #0c612c  (green-70)
 *   Loading   → Button-6-11093  (no SVG import)  bg-#f3f4f6 border #0c612c, spinner
 *   Default   → (inferred)      same shape        bg-white   border/text/icon #14803c  (green-60, no ring)
 *
 * Token mapping (all from /src/imports/theme.css):
 *
 *   State     │ Background                        │ Border / Text / Icon
 *   ──────────┼───────────────────────────────────┼──────────────────────────────────────────
 *   Default   │ var(--mono-white-100)              │ var(--text-default-enabled-secondary)  green-60
 *   Hover     │ var(--mono-white-100)              │ var(--text-default-hover-secondary)    green-50
 *   Focus     │ var(--mono-white-100)              │ var(--text-default-focus-secondary)    green-60  + --focus-border
 *   Pressed   │ var(--fill-default-none-secondary) │ var(--text-default-pressed-secondary)  green-70
 *   Disabled  │ var(--mono-white-100)              │ var(--text-default-disabled-secondary) neutral-30
 *   Loading   │ var(--fill-default-none-secondary) │ var(--text-default-pressed-secondary)  green-70  + spinner
 *
 * Typography (Button/Label — Figma spec):
 *   font-family: var(--font-family-primary)  · font-weight: 400  · font-size: 16px
 *   line-height: 24px  · letter-spacing: -0.12px  · font-style: normal
 */

import React, { useState } from "react";

// ─── Figma SVG path import ─────────────────────────────────────────────────────
// All five Figma frames share the same path shape (p2f57dbf0 — a "+" / add icon).
// We import one path file and drive fill colour from the state style map below.

// ─── Spinner ──────────────────────────────────────────────────────────────────
import { Spinner } from "../Spinner";
import { Add } from "../../icons";

// ─── Inline SVG path constants ─────────────────────────────────────────────

// ─── Types ────────────────────────────────────────────────────────────────────

export type SecondaryRoundState =
  | "default"
  | "hover"
  | "focus"
  | "pressed"
  | "disabled"
  | "loading";

// ─── State style map ──────────────────────────────────────────────────────────
// bg       → background fill (Figma bg-* class)
// accent   → border + text + icon colour (they are identical per state per Figma)
// shadow   → box-shadow (focus ring only)
// cursor   → pointer / not-allowed / wait

const STATE_STYLES: Record<
  SecondaryRoundState,
  { bg: string; accent: string; shadow: string; cursor: string }
> = {
  default: {
    bg:     "var(--mono-white-100)",              // bg-white
    accent: "var(--text-default-enabled-secondary)", // green-60 #14803C
    shadow: "none",
    cursor: "pointer",
  },
  hover: {
    bg:     "var(--mono-white-100)",              // bg-white
    accent: "var(--text-default-hover-secondary)",   // green-50 #19A04B
    shadow: "none",
    cursor: "pointer",
  },
  focus: {
    bg:     "var(--mono-white-100)",              // bg-white
    accent: "var(--text-default-focus-secondary)",   // green-60 #14803C
    shadow: "var(--focus-border)",               // 0 0 0 3px rgba(0,146,228,0.5)
    cursor: "pointer",
  },
  pressed: {
    bg:     "var(--fill-default-none-secondary)", // neutral-10 #F3F4F6
    accent: "var(--text-default-pressed-secondary)", // green-70 #0C612C
    shadow: "none",
    cursor: "pointer",
  },
  disabled: {
    bg:     "var(--mono-white-100)",              // bg-white
    accent: "var(--text-default-disabled-secondary)", // neutral-30 #C2C7D0
    shadow: "none",
    cursor: "not-allowed",
  },
  loading: {
    bg:     "var(--fill-default-none-secondary)", // neutral-10 #F3F4F6
    accent: "var(--text-default-pressed-secondary)", // green-70 #0C612C
    shadow: "none",
    cursor: "wait",
  },
};

// ─── Typography — Button/Label ────────────────────────────────────────────────

const LABEL_STYLE: React.CSSProperties = {
  fontFamily:    "var(--font-family-primary)", // "Noto Sans", sans-serif
  fontSize:      "16px",
  fontWeight:    400,                          // Noto_sans:Regular
  fontStyle:     "normal",                     // not-italic
  lineHeight:    "24px",                       // leading-[24px]
  letterSpacing: "-0.12px",                   // tracking-[-0.12px]
  whiteSpace:    "nowrap",
};

// ─── Icon — Figma structure (identical nesting to PrimaryRound) ───────────────
// Outer : display flex, items-center, p-[2px], size-[24px], shrink-0
// Middle: aspect-[24/24], h-full, overflow-clip, shrink-0
// Inner : translate-y(-50%), absolute, aspect-[14/14], left/right 20.83%, top 50%
// SVG   : absolute, block, size-full, fill="none", preserveAspectRatio="none", viewBox "0 0 11.6667 11.6667"

function IconSecondary({ fill }: { fill: string }) {
  return <Add size={16} style={{ color: fill, flexShrink: 0 }} aria-hidden />;
}

// ─── Loading spinner ──────────────────────────────────────────────────────────
// Figma Loading state (Button-6-11093):
//   bg-[#f3f4f6], border #0c612c, pink spinner circle + "Loading..." label
//   → Spinner track: var(--neutral-20),  active arc: var(--annotation-mid-pink)
//   (mirrors the PrimaryRound Loading pattern exactly)

function LoadingSpinner() {
  return (
    <Spinner
      size={18}
      trackColor="var(--neutral-20)"
      activeColor="var(--fill-default-enabled-primary)"
    />
  );
}

// ─── ButtonAtom ───────────────────────────────────────────────────────────────

export interface SecondaryRoundAtomProps {
  forcedState?: SecondaryRoundState;
  label?:       string;
  onClick?:     () => void;
}

export function SecondaryRoundAtom({
  forcedState,
  label = "[Button]",
  onClick,
}: SecondaryRoundAtomProps) {
  const [live, setLive] = useState<SecondaryRoundState>("default");
  const state = forcedState ?? live;
  const s     = STATE_STYLES[state];

  const isDisabled = state === "disabled";
  const isLoading  = state === "loading";

  const set = (next: SecondaryRoundState) => () => {
    if (!forcedState) setLive(next);
  };

  return (
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
        // ── Layout — mirrors Figma container exactly ──────────────────────
        // flex gap-[8px] items-center justify-center px-[16px] py-[12px]
        // rounded-[100px] overflow-clip relative
        display:        "flex",
        gap:            "8px",
        alignItems:     "center",
        justifyContent: "center",
        overflow:       "clip",
        paddingTop:     "12px",
        paddingBottom:  "12px",
        paddingLeft:    "16px",
        paddingRight:   "16px",
        borderRadius:   "100px",
        position:       "relative",
        // ── Colours ───────────────────────────────────────────────────────
        background: s.bg,
        color:      s.accent,
        // ── Border — 1 px solid, colour = accent token (matches Figma) ───
        border:     `1px solid ${s.accent}`,
        // ── Focus ring ────────────────────────────────────────────────────
        boxShadow: s.shadow,
        // ── Misc ──────────────────────────────────────────────────────────
        outline:    "none",
        cursor:     s.cursor,
        ...LABEL_STYLE,
        transition: "background 0.1s, box-shadow 0.1s, border-color 0.1s, color 0.1s",
      }}
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <IconSecondary fill={s.accent} />
      )}

      <p
        style={{
          ...LABEL_STYLE,
          color:    s.accent,
          position: "relative",
          margin:   0,
        }}
      >
        {isLoading ? "Loading..." : label}
      </p>
    </button>
  );
}

// ─── Showcase metadata ────────────────────────────────────────────────────────

const STATES: {
  id:           SecondaryRoundState;
  name:         string;
  figmaFile:    string;
  bgToken:      string;
  accentToken:  string;
  shadowToken?: string;
  description:  string;
}[] = [
  {
    id:          "default",
    name:        "Default",
    figmaFile:   "(inferred from token spec — no separate Figma frame)",
    bgToken:     "--mono-white-100",
    accentToken: "--text-default-enabled-secondary",
    description: "Resting state. White fill, green-60 (#14803C) border, text and icon.",
  },
  {
    id:          "hover",
    name:        "Hover",
    figmaFile:   "Button-6-11045 · svg-ctjrv80rtz",
    bgToken:     "--mono-white-100",
    accentToken: "--text-default-hover-secondary",
    description: "Pointer over button. White fill, accent shifts to green-50 (#19A04B).",
  },
  {
    id:           "focus",
    name:         "Focus",
    figmaFile:    "Button-6-11061 · svg-euau4q4n1h",
    bgToken:      "--mono-white-100",
    accentToken:  "--text-default-focus-secondary",
    shadowToken:  "--focus-border",
    description:  "Keyboard-focused. green-60 accent + 3 px blue ring via --focus-border.",
  },
  {
    id:          "pressed",
    name:        "Pressed",
    figmaFile:   "Button-6-11077 · svg-dku578yb7m",
    bgToken:     "--fill-default-none-secondary",
    accentToken: "--text-default-pressed-secondary",
    description: "Active / held. neutral-10 fill (#F3F4F6), green-70 (#0C612C) accent.",
  },
  {
    id:          "disabled",
    name:        "Disabled",
    figmaFile:   "Button-6-11041 · svg-58qlxby0o4",
    bgToken:     "--mono-white-100",
    accentToken: "--text-default-disabled-secondary",
    description: "Action unavailable. White fill, neutral-30 (#C2C7D0) border, text and icon.",
  },
  {
    id:          "loading",
    name:        "Loading",
    figmaFile:   "Button-6-11093 · (no icon — spinner)",
    bgToken:     "--fill-default-none-secondary",
    accentToken: "--text-default-pressed-secondary",
    shadowToken: undefined,
    description: "Async in progress. neutral-10 fill, green-70 border. Spinner uses --fill-default-enabled-primary.",
  },
];

// ─── Showcase page ────────────────────────────────────────────────────────────

export function SecondaryStandardRound() {
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
            Cropwise Design System V2 · buttons / Secondary / Standard / Round
          </p>

          <h1
            style={{
              font:          "var(--font-heading-1)",
              letterSpacing: "var(--font-heading-1-letter-spacing)",
              color:         "var(--text-default-none-primary)",
              margin:        0,
            }}
          >
            SecondaryStandardRound
          </h1>

          <p
            style={{
              fontFamily: "var(--font-family-primary)",
              fontSize:   "16px",
              fontWeight: 400,
              lineHeight: "24px",
              color:      "var(--text-default-none-secondary)",
              margin:     0,
              maxWidth:   560,
            }}
          >
            Six interaction states. White background with a 1 px solid border,
            icon and label all driven by a single semantic accent token per state.
            Colours are 100 % CSS variable tokens. Typography is Noto Sans
            Regular 400 at 16 px / 24 px / −0.12 px.
          </p>
        </header>

        {/* ── Interactive strip ────────────────────────────────────────────── */}
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
              Hover, Tab, click. The first button triggers a live loading state.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <SecondaryRoundAtom
              forcedState={liveLoading ? "loading" : undefined}
              onClick={triggerLoading}
            />
            <SecondaryRoundAtom forcedState="hover"    />
            <SecondaryRoundAtom forcedState="focus"    />
            <SecondaryRoundAtom forcedState="pressed"  />
            <SecondaryRoundAtom forcedState="disabled" />
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
              gridTemplateColumns: "200px 1fr 200px",
              padding:             "12px 24px",
              background:          "var(--fill-default-none-secondary)",
              borderBottom:        "1px solid var(--border-default-none-secondary)",
            }}
          >
            {["State · Tokens", "Description", "Preview"].map((col, i) => (
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

          {/* Rows */}
          {STATES.map((row, idx) => (
            <div
              key={row.id}
              style={{
                display:             "grid",
                gridTemplateColumns: "200px 1fr 200px",
                padding:             "20px 24px",
                alignItems:          "center",
                borderBottom:
                  idx < STATES.length - 1
                    ? "1px solid var(--border-default-none-secondary)"
                    : "none",
              }}
            >
              {/* State name + tokens */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
                  }}
                >
                  {row.name}
                </span>

                {[row.bgToken, row.accentToken, ...(row.shadowToken ? [row.shadowToken] : [])].map(
                  (tok) => (
                    <code
                      key={tok}
                      style={{
                        display:    "block",
                        fontFamily: "monospace",
                        fontSize:   "11px",
                        lineHeight: "16px",
                        color:      "var(--text-default-none-secondary)",
                      }}
                    >
                      {tok}
                    </code>
                  )
                )}

                <code
                  style={{
                    display:    "block",
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
                <SecondaryRoundAtom forcedState={row.id} />
              </div>
            </div>
          ))}
        </section>

        {/* ── Typography spec ──────────────────────────────────────────────── */}
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
            Button / Label — Typography spec (from Figma)
          </p>

          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap:                 "10px",
            }}
          >
            {[
              { prop: "font-family",    value: "var(--font-family-primary)", figma: "Noto_sans:Regular" },
              { prop: "font-weight",    value: "400",                        figma: "Regular"           },
              { prop: "font-size",      value: "16px",                       figma: "text-[16px]"       },
              { prop: "line-height",    value: "24px",                       figma: "leading-[24px]"    },
              { prop: "letter-spacing", value: "−0.12px",                    figma: "tracking-[-0.12px]"},
              { prop: "font-style",     value: "normal",                     figma: "not-italic"        },
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
                <code
                  style={{
                    fontFamily: "monospace",
                    fontSize:   "11px",
                    color:      "var(--text-default-none-secondary)",
                  }}
                >
                  {prop}
                </code>
                <span
                  style={{
                    fontFamily: "var(--font-family-primary)",
                    fontSize:   "13px",
                    fontWeight: 400,
                    color:      "var(--text-default-none-primary)",
                  }}
                >
                  {value}
                </span>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize:   "10px",
                    color:      "var(--text-default-none-secondary)",
                    opacity:    0.6,
                  }}
                >
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
