/**
 * Button / Primary / Standard / Round  ·  PrimaryRound
 *
 * All values traced directly from Figma exports:
 *   Disabled  → Button-4-3811  svg-ztmk86wlyo
 *   Hover     → Button-4-3815  svg-65q4vfkrrs
 *   Focus     → Button-4-3829  svg-9zlou2inlh
 *   Pressed   → Button-4-3843  svg-xq0xensc2f
 *   Default   → Button-4-3857  svg-rzyinaja62
 *   Loading   → Button-4-3871  (no icon — solid pink circle spinner)
 *
 * Typography  — Figma: font-['Noto_sans:Regular',sans-serif] leading-[24px]
 *               not-italic text-[16px] tracking-[-0.12px] whitespace-nowrap
 *               → font-family: var(--font-family-body)
 *                 font-weight: 400  font-size: 16px  line-height: 24px
 *                 letter-spacing: -0.12px  font-style: normal
 *
 * Colours     — 100 % semantic tokens from /src/imports/theme.css
 * Icon        — SVG paths from Figma assets; structure mirrors Figma exactly
 * Spinner     — Figma: bg-[#da33ab] rounded-[100px] size-[24px]
 *               → solid 24×24 circle, var(--annotation-mid-pink), with rotation
 */

import React, { useState } from "react";

// ─── Figma SVG imports — one per state ───────────────────────────────────────

// ─── Spinner icon from /src/app/components/icons ─────────────────────────────
import { Spinner } from "../Spinner";
import { Add } from "../../icons";

// ─── Inline SVG path constants ─────────────────────────────────────────────

// ─── Types ────────────────────────────────────────────────────────────────────

type BtnState = "default" | "hover" | "focus" | "pressed" | "disabled" | "loading";


// ─── Semantic token map ───────────────────────────────────────────────────────
// Hex values from Figma → primitive token → semantic token
//
// Default   #14803c → green-60  → --fill-default-enabled-primary
// Hover     #19a04b → green-50  → --fill-default-hover-primary
// Focus     #14803c → green-60  → --fill-default-focus-primary   + --focus-border
// Pressed   #0c612c → green-70  → --fill-default-pressed-primary
// Disabled  #dfe2e7 → neutral-20→ --fill-default-disabled-primary
// Loading   #0c612c → green-70  → --fill-default-pressed-primary  (same as Pressed)
//
// Text/icon colours
// Default   white         → --text-default-enabled-primary  / --icon-default-enabled-primary
// Hover     white         → --text-default-hover-primary    / --icon-default-hover-primary
// Focus     white         → --text-default-focus-primary    / --icon-default-focus-primary
// Pressed   #f3f4f6 (n-10)→ --text-default-pressed-primary  / --icon-default-pressed-primary
// Disabled  #c2c7d0 (n-30)→ --text-default-disabled-primary / --icon-default-disabled-primary
// Loading   #f3f4f6 (n-10)→ --text-default-pressed-primary

const STATE_STYLES: Record<
  BtnState,
  { bg: string; color: string; iconColor: string; boxShadow: string; cursor: string }
> = {
  default: {
    bg:        "var(--fill-default-enabled-primary)",
    color:     "var(--text-default-enabled-primary)",
    iconColor: "var(--icon-default-enabled-primary)",
    boxShadow: "none",
    cursor:    "pointer",
  },
  hover: {
    bg:        "var(--fill-default-hover-primary)",
    color:     "var(--text-default-hover-primary)",
    iconColor: "var(--icon-default-hover-primary)",
    boxShadow: "none",
    cursor:    "pointer",
  },
  focus: {
    bg:        "var(--fill-default-focus-primary)",
    color:     "var(--text-default-focus-primary)",
    iconColor: "var(--icon-default-focus-primary)",
    boxShadow: "var(--focus-border)",   // 0 0 0 3px rgba(0,146,228,0.5)
    cursor:    "pointer",
  },
  pressed: {
    bg:        "var(--fill-default-pressed-primary)",
    color:     "var(--text-default-pressed-primary)",
    iconColor: "var(--icon-default-pressed-primary)",
    boxShadow: "none",
    cursor:    "pointer",
  },
  disabled: {
    bg:        "var(--fill-default-disabled-primary)",
    color:     "var(--text-default-disabled-primary)",
    iconColor: "var(--icon-default-disabled-primary)",
    boxShadow: "none",
    cursor:    "not-allowed",
  },
  loading: {
    bg:        "var(--fill-default-pressed-primary)",   // #0c612c — same as Pressed
    color:     "var(--text-default-pressed-primary)",   // #f3f4f6
    iconColor: "var(--icon-default-pressed-primary)",   // #f3f4f6 (unused in loading)
    boxShadow: "none",
    cursor:    "wait",
  },
};

// ─── Button/Label typography ──────────────────────────────────────────────────
// Figma: font-['Noto_sans:Regular',sans-serif] leading-[24px]
//        not-italic text-[16px] tracking-[-0.12px] whitespace-nowrap

const LABEL_STYLE: React.CSSProperties = {
  fontFamily:    "var(--font-family-body)",  // "Noto Sans", sans-serif
  fontSize:      "16px",                         // text-[16px]
  fontWeight:    400,                            // Noto_sans:Regular
  fontStyle:     "normal",                       // not-italic
  lineHeight:    "24px",                         // leading-[24px]
  letterSpacing: "-0.12px",                      // tracking-[-0.12px]
  whiteSpace:    "nowrap",                       // whitespace-nowrap
};

// ─── Icon — exact Figma structure ────────────────────────────────────────────
// Outer:  content-stretch flex items-center p-[2px] relative shrink-0 size-[24px]
// Middle: aspect-[24/24] h-full overflow-clip relative shrink-0
// Inner:  -translate-y-1/2 absolute aspect-[14/14] left-[20.83%] right-[20.83%] top-1/2
// SVG:    absolute block size-full  fill="none"  preserveAspectRatio="none"
//         viewBox="0 0 11.6667 11.6667"

function IconPrimary({ fill }: { fill: string }) {
  return <Add size={16} style={{ color: fill, flexShrink: 0 }} aria-hidden />;
}

// ─── Loading spinner ──────────────────────────────────────────────────────────
// Uses the shared Spinner icon from /src/app/components/icons/Spinner.tsx
// Rendered at 18×18 (SVG native size) with design-system token colours:
//   trackColor  → var(--neutral-20)         (#DFE2E7)
//   activeColor → var(--annotation-mid-pink) (#DA33AB) — matches Figma Loading frame

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

export interface ButtonAtomProps {
  forcedState?: BtnState;
  label?: string;
  onClick?: () => void;
}

export function ButtonAtom({
  forcedState,
  label = "[Button]",
  onClick,
}: ButtonAtomProps) {
  const [live, setLive] = useState<BtnState>("default");
  const state = forcedState ?? live;
  const s     = STATE_STYLES[state];

  const isDisabled = state === "disabled";
  const isLoading  = state === "loading";

  const set = (next: BtnState) => () => { if (!forcedState) setLive(next); };

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
        // ── Figma button container layout ──────────────────────────────────
        // bg-[#COLOR] content-stretch flex gap-[8px] items-center justify-center
        // overflow-clip px-[16px] py-[12px] relative rounded-[100px]
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
        // ── Colour tokens ──────────────────────────────────────────────────
        background: s.bg,
        color:      s.color,
        boxShadow:  s.boxShadow,
        // ── Reset ──────────────────────────────────────────────────────────
        border:  "none",
        outline: "none",
        cursor:  s.cursor,
        // ── Typography — Button/Label (shared LABEL_STYLE) ─────────────────
        ...LABEL_STYLE,
        transition: "background 0.1s, box-shadow 0.1s",
      }}
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <IconPrimary fill={s.iconColor} />
      )}

      <p
        style={{
          ...LABEL_STYLE,
          color:    s.color,
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
  id:           BtnState;
  name:         string;
  figmaFile:    string;
  bgToken:      string;
  textToken:    string;
  iconToken:    string;
  shadowToken?: string;
  description:  string;
}[] = [
  {
    id:          "default",
    name:        "Default",
    figmaFile:   "Button-4-3857 · svg-rzyinaja62",
    bgToken:     "--fill-default-enabled-primary",
    textToken:   "--text-default-enabled-primary",
    iconToken:   "--icon-default-enabled-primary",
    description: "Resting state. green-60 fill (#14803C), white text and icon.",
  },
  {
    id:          "hover",
    name:        "Hover",
    figmaFile:   "Button-4-3815 · svg-65q4vfkrrs",
    bgToken:     "--fill-default-hover-primary",
    textToken:   "--text-default-hover-primary",
    iconToken:   "--icon-default-hover-primary",
    description: "Pointer over button. Fill lightens to green-50 (#19A04B).",
  },
  {
    id:           "focus",
    name:         "Focus",
    figmaFile:    "Button-4-3829 · svg-9zlou2inlh",
    bgToken:      "--fill-default-focus-primary",
    textToken:    "--text-default-focus-primary",
    iconToken:    "--icon-default-focus-primary",
    shadowToken:  "--focus-border",
    description:  "Keyboard-focused. green-60 fill + 3 px blue ring via --focus-border.",
  },
  {
    id:          "pressed",
    name:        "Pressed",
    figmaFile:   "Button-4-3843 · svg-xq0xensc2f",
    bgToken:     "--fill-default-pressed-primary",
    textToken:   "--text-default-pressed-primary",
    iconToken:   "--icon-default-pressed-primary",
    description: "Active / held. green-70 (#0C612C) fill, neutral-10 (#F3F4F6) text+icon.",
  },
  {
    id:          "disabled",
    name:        "Disabled",
    figmaFile:   "Button-4-3811 · svg-ztmk86wlyo",
    bgToken:     "--fill-default-disabled-primary",
    textToken:   "--text-default-disabled-primary",
    iconToken:   "--icon-default-disabled-primary",
    description: "Action unavailable. neutral-20 fill, neutral-30 text and icon.",
  },
  {
    id:          "loading",
    name:        "Loading",
    figmaFile:   "Button-4-3871 · (no icon)",
    bgToken:     "--fill-default-pressed-primary",
    textToken:   "--text-default-pressed-primary",
    iconToken:   "--fill-default-enabled-primary",
    description: "Async in progress. Spinner uses --fill-default-enabled-primary (#14803C), 24×24 circle.",
  },
];

// ─── Showcase ─────────────────────────────────────────────────────────────────

export function PrimaryRound() {
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
        {/* ── Header ────────────────────────────────────────────────────── */}
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
            Cropwise Design System V2 · buttons / Primary / Standard / Round
          </p>

          <h1
            style={{
              font:          "var(--font-heading-1)",
              letterSpacing: "var(--font-heading-1-letter-spacing)",
              color:         "var(--text-default-none-primary)",
              margin:        0,
            }}
          >
            PrimaryRound
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
            Six interaction states. All colours are semantic tokens. Typography
            is Noto Sans Regular 400 at 16 px / 24 px / −0.12 px, matching the
            Figma Button/Label spec exactly.
          </p>
        </header>

        {/* ── Interactive strip ───────────────────────────────────────────── */}
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
            <ButtonAtom
              forcedState={liveLoading ? "loading" : undefined}
              onClick={triggerLoading}
            />
            <ButtonAtom forcedState="hover"    />
            <ButtonAtom forcedState="focus"    />
            <ButtonAtom forcedState="pressed"  />
            <ButtonAtom forcedState="disabled" />
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

                {[row.bgToken, row.textToken, row.iconToken, ...(row.shadowToken ? [row.shadowToken] : [])].map(
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
                <ButtonAtom forcedState={row.id} />
              </div>
            </div>
          ))}
        </section>

        {/* ── Typography spec ─────────────────────────────────────────────── */}
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
              { prop: "font-family",    value: "var(--font-family-body)",   figma: "Noto_sans:Regular" },
              { prop: "font-weight",    value: "400",                          figma: "Regular" },
              { prop: "font-size",      value: "16px",                         figma: "text-[16px]" },
              { prop: "line-height",    value: "24px",                         figma: "leading-[24px]" },
              { prop: "letter-spacing", value: "−0.12px",                      figma: "tracking-[-0.12px]" },
              { prop: "font-style",     value: "normal",                       figma: "not-italic" },
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
                    fontFamily: "var(--font-family-body)",
                    fontSize:   "13px",
                    fontWeight: "var(--font-weight-regular)",
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