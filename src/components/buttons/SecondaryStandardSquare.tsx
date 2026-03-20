/**
 * Button / Secondary / Standard / Square  ·  SecondaryStandardSquare
 *
 * Figma source frames:
 *   Default   → Button-6-11224  svg-r6m4thagmn   bg-white      accent #14803C (green-60)
 *   Disabled  → Button-6-11228  svg-x322hj09pq   bg-white      accent #C2C7D0 (neutral-30)
 *   Hover     → Button-6-11244  svg-sigwi3ze5o   bg-white      accent #19A04B (green-50)
 *   Focus     → Button-6-11260  svg-8yj01hk0o9   bg-white      accent #14803C (green-60) + focus ring
 *   Pressed   → Button-6-11276  svg-tf1ktcrz4i   bg-[#f3f4f6]  accent #0C612C (green-70)
 *   Loading   → Button-6-11292  (no icon svg)    bg-[#f3f4f6]  accent #0C612C (green-70) + spinner
 *
 * Structural difference vs SecondaryStandardRound:
 *   borderRadius  8px  (Square)  vs  100px  (Round / pill)
 *   Border rendered via an absolute inset overlay <div> — exact Figma structure.
 *
 * Token mapping (all from /src/imports/theme.css):
 *
 *   State     │ Background                        │ Accent (border + text + icon)
 *   ──────────┼───────────────────────────────────┼──────────────────────────────────────────
 *   Default   │ --mono-white-100                  │ --text-default-enabled-secondary  green-60
 *   Hover     │ --mono-white-100                  │ --text-default-hover-secondary    green-50
 *   Focus     │ --mono-white-100                  │ --text-default-focus-secondary    green-60 + --focus-border
 *   Pressed   │ --fill-default-none-secondary     │ --text-default-pressed-secondary  green-70
 *   Disabled  │ --mono-white-100                  │ --text-default-disabled-secondary neutral-30
 *   Loading   │ --fill-default-none-secondary     │ --text-default-pressed-secondary  green-70  + spinner
 *
 * Typography (Button/Label):
 *   font-family: var(--font-family-body)  · weight: 400  · size: 16px
 *   line-height: 24px  · letter-spacing: -0.12px  · font-style: normal
 */

import React, { useState } from "react";

// ─── Figma SVG path — all states share the same path shape (p2f57dbf0) ────────

// ─── Spinner ──────────────────────────────────────────────────────────────────
import { Spinner } from "../Spinner";
import { Add } from "../../icons";

// ─── Inline SVG path constants ─────────────────────────────────────────────

// ─── Types ────────────────────────────────────────────────────────────────────

export type SecondarySquareState =
  | "default"
  | "hover"
  | "focus"
  | "pressed"
  | "disabled"
  | "loading";

// ─── State style map ──────────────────────────────────────────────────────────

const STATE_STYLES: Record<
  SecondarySquareState,
  { bg: string; borderColor: string; textColor: string; iconColor: string; shadow: string; cursor: string }
> = {
  default: {
    bg:          "var(--fill-default-enabled-tertiary)",     // white
    borderColor: "var(--border-default-enabled-primary)",    // green-60  #14803C
    textColor:   "var(--text-default-enabled-secondary)",    // green-60  #14803C
    iconColor:   "var(--icon-default-enabled-secondary)",    // green-60  #14803C
    shadow:      "none",
    cursor:      "pointer",
  },
  hover: {
    bg:          "var(--fill-default-hover-tertiary)",       // white
    borderColor: "var(--border-default-hover-primary)",      // green-50  #19A04B
    textColor:   "var(--text-default-hover-secondary)",      // green-50  #19A04B
    iconColor:   "var(--icon-default-hover-secondary)",      // green-50  #19A04B
    shadow:      "none",
    cursor:      "pointer",
  },
  focus: {
    bg:          "var(--fill-default-focus-tertiary)",       // white
    borderColor: "var(--border-default-focus-primary)",      // green-60  #14803C
    textColor:   "var(--text-default-focus-secondary)",      // green-60  #14803C
    iconColor:   "var(--icon-default-focus-secondary)",      // green-60  #14803C
    shadow:      "var(--focus-border)",                      // 0 0 0 3px rgba(0,146,228,0.5)
    cursor:      "pointer",
  },
  pressed: {
    bg:          "var(--fill-default-pressed-tertiary)",     // neutral-10 #F3F4F6
    borderColor: "var(--border-default-pressed-primary)",    // green-70  #0C612C
    textColor:   "var(--text-default-pressed-secondary)",    // green-70  #0C612C
    iconColor:   "var(--icon-default-pressed-secondary)",    // green-70  #0C612C
    shadow:      "none",
    cursor:      "pointer",
  },
  disabled: {
    bg:          "var(--fill-default-disabled-tertiary)",    // white
    borderColor: "var(--border-default-disabled-primary)",   // neutral-30 #C2C7D0
    textColor:   "var(--text-default-disabled-secondary)",   // neutral-30 #C2C7D0
    iconColor:   "var(--icon-default-disabled-secondary)",   // neutral-30 #C2C7D0
    shadow:      "none",
    cursor:      "not-allowed",
  },
  loading: {
    bg:          "var(--fill-default-pressed-tertiary)",     // neutral-10 #F3F4F6
    borderColor: "var(--border-default-pressed-primary)",    // green-70  #0C612C
    textColor:   "var(--text-default-pressed-secondary)",    // green-70  #0C612C
    iconColor:   "var(--icon-default-pressed-secondary)",    // green-70  #0C612C
    shadow:      "none",
    cursor:      "wait",
  },
};

// ─── Typography — Button/Label ────────────────────────────────────────────────

const LABEL_STYLE: React.CSSProperties = {
  fontFamily:    "var(--font-family-body)",
  fontSize:      "16px",
  fontWeight:    400,
  fontStyle:     "normal",
  lineHeight:    "24px",
  letterSpacing: "-0.12px",
  whiteSpace:    "nowrap",
};

// ─── Icon — Figma structure ───────────────────────────────────────────────────
// Matches the three-level nesting seen in all Button-6-112xx frames exactly.

function IconSecondary({ fill }: { fill: string }) {
  return <Add size={24} style={{ color: fill, flexShrink: 0 }} aria-hidden />;
}

// ─── Loading spinner ──────────────────────────────────────────────────────────
// Figma: bg-[#da33ab] rounded-[100px] size-[24px]  → --fill-default-enabled-primary

function LoadingSpinner() {
  return (
    <Spinner
      size={18}
      trackColor="var(--neutral-20)"
      activeColor="var(--fill-default-enabled-primary)"
    />
  );
}

// ─── Button atom ──────────────────────────────────────────────────────────────

export interface SecondarySquareAtomProps {
  forcedState?: SecondarySquareState;
  label?:       string;
  onClick?:     () => void;
}

export function SecondarySquareAtom({
  forcedState,
  label = "[Button]",
  onClick,
}: SecondarySquareAtomProps) {
  const [live, setLive] = useState<SecondarySquareState>("default");
  const state = forcedState ?? live;
  const s     = STATE_STYLES[state];

  const isDisabled = state === "disabled";
  const isLoading  = state === "loading";

  const set = (next: SecondarySquareState) => () => {
    if (!forcedState) setLive(next);
  };

  return (
    // Outer container — mirrors Figma: bg, relative, rounded-[8px]
    // Border rendered as absolute inset overlay div (exact Figma structure).
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
        // ── Shape ───────────────────────────────────────────────────────
        // Figma: rounded-[8px]  ← key difference vs SecondaryStandardRound
        borderRadius: "8px",
        position:     "relative",
        // ── Layout ──────────────────────────────────────────────────────
        // flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[12px]
        display:        "flex",
        gap:            "8px",
        alignItems:     "center",
        justifyContent: "center",
        overflow:       "clip",
        paddingTop:     "12px",
        paddingBottom:  "12px",
        paddingLeft:    "16px",
        paddingRight:   "16px",
        // ── Colour ──────────────────────────────────────────────────────
        background: s.bg,
        color:      s.textColor,
        // ── Border (via box-shadow so focus ring can stack independently) ─
        // We use outline for the border to avoid box-sizing interference,
        // matching the Figma overlay-div approach.
        border:    "none",
        outline:   "none",
        boxShadow: `inset 0 0 0 1px ${s.borderColor}${s.shadow !== "none" ? `, ${s.shadow}` : ""}`,
        // ── Misc ────────────────────────────────────────────────────────
        cursor:     s.cursor,
        ...LABEL_STYLE,
        transition: "background 0.1s, box-shadow 0.1s, color 0.1s",
      }}
    >
      {isLoading ? <LoadingSpinner /> : <IconSecondary fill={s.iconColor} />}

      <p
        style={{
          ...LABEL_STYLE,
          color:    s.textColor,
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
  id:           SecondarySquareState;
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
    figmaFile:   "Button-6-11224 · svg-r6m4thagmn",
    bgToken:     "--mono-white-100",
    accentToken: "--text-default-enabled-secondary",
    description: "Resting state. White fill, green-60 (#14803C) border, text and icon.",
  },
  {
    id:          "hover",
    name:        "Hover",
    figmaFile:   "Button-6-11244 · svg-sigwi3ze5o",
    bgToken:     "--mono-white-100",
    accentToken: "--text-default-hover-secondary",
    description: "Pointer over button. White fill, accent shifts to green-50 (#19A04B).",
  },
  {
    id:           "focus",
    name:         "Focus",
    figmaFile:    "Button-6-11260 · svg-8yj01hk0o9",
    bgToken:      "--mono-white-100",
    accentToken:  "--text-default-focus-secondary",
    shadowToken:  "--focus-border",
    description:  "Keyboard-focused. green-60 accent + 3 px blue ring via --focus-border.",
  },
  {
    id:          "pressed",
    name:        "Pressed",
    figmaFile:   "Button-6-11276 · svg-tf1ktcrz4i",
    bgToken:     "--fill-default-none-secondary",
    accentToken: "--text-default-pressed-secondary",
    description: "Active / held. neutral-10 fill (#F3F4F6), green-70 (#0C612C) accent.",
  },
  {
    id:          "disabled",
    name:        "Disabled",
    figmaFile:   "Button-6-11228 · svg-x322hj09pq",
    bgToken:     "--mono-white-100",
    accentToken: "--text-default-disabled-secondary",
    description: "Action unavailable. White fill, neutral-30 (#C2C7D0) border, text and icon.",
  },
  {
    id:          "loading",
    name:        "Loading",
    figmaFile:   "Button-6-11292 · (no icon — spinner)",
    bgToken:     "--fill-default-none-secondary",
    accentToken: "--text-default-pressed-secondary",
    description: "Async in progress. neutral-10 fill, green-70 border. Spinner uses --fill-default-enabled-primary.",
  },
];

// ─── Showcase page ────────────────────────────────────────────────────────────

export function SecondaryStandardSquare() {
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
            Cropwise Design System V2 · buttons / Secondary / Standard / Square
          </p>

          <h1
            style={{
              font:          "var(--font-heading-1)",
              letterSpacing: "var(--font-heading-1-letter-spacing)",
              color:         "var(--text-default-none-primary)",
              margin:        0,
            }}
          >
            SecondaryStandardSquare
          </h1>

          <p
            style={{
              fontFamily: "var(--font-family-body)",
              fontSize:   "16px",
              fontWeight: "var(--font-weight-regular)",
              lineHeight: "24px",
              color:      "var(--text-default-none-secondary)",
              margin:     0,
              maxWidth:   560,
            }}
          >
            Six interaction states. White background with an 8 px corner radius
            and a 1 px solid border. Border, icon and label all share a single
            semantic accent token per state. Identical tokens to
            SecondaryStandardRound — only the shape differs.
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
              Hover, Tab, click. The first button triggers a live loading state.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <SecondarySquareAtom
              forcedState={liveLoading ? "loading" : undefined}
              onClick={triggerLoading}
            />
            <SecondarySquareAtom forcedState="hover"    />
            <SecondarySquareAtom forcedState="focus"    />
            <SecondarySquareAtom forcedState="pressed"  />
            <SecondarySquareAtom forcedState="disabled" />
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
                    fontFamily:   "var(--font-family-body)",
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
                <SecondarySquareAtom forcedState={row.id} />
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
              fontFamily:    "var(--font-family-body)",
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
              { prop: "font-family",    value: "var(--font-family-body)", figma: "Noto_sans:Regular"   },
              { prop: "font-weight",    value: "400",                        figma: "Regular"             },
              { prop: "font-size",      value: "16px",                       figma: "text-[16px]"         },
              { prop: "line-height",    value: "24px",                       figma: "leading-[24px]"      },
              { prop: "letter-spacing", value: "−0.12px",                    figma: "tracking-[-0.12px]"  },
              { prop: "border-radius",  value: "8px",                        figma: "rounded-[8px]"       },
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