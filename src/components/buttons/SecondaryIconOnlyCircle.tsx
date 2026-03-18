/**
 * Button / Secondary / Icon Only / Circle  ·  SecondaryIconOnlyCircle
 *
 * Figma source frames:
 *   Default  → Button-12-3276  svg-52su0tby3h  bg-white     accent #14803C (green-60)
 *   Disabled → Button-12-3280  svg-gb815uh9xm  bg-white     accent #C2C7D0 (neutral-30)
 *   Hover    → Button-12-3288  svg-pk087buumq  bg-white     accent #19A04B (green-50)
 *   Focus    → Button-12-3296  svg-usujpue59o  bg-white     accent #14803C (green-60) + focus ring
 *   Pressed  → Button-12-3304  svg-c5mdvkirh8  bg-[#f3f4f6] accent #0C612C (green-70)
 *   Loading  → Button-12-3312  (no svg import) bg-[#f3f4f6] border #0C612C + spinner
 *
 * Exact Figma structure:
 *   <div> outer       — bg, relative, rounded-[100px], size-full
 *     <div> inner     — flex, items-center, justify-center, overflow-clip, p-[12px], rounded-[inherit]
 *       <div> icon-L1 — size-[24px], flex, items-center, shrink-0
 *         <div> icon-L2 — aspect-[28/28], h-full, overflow-clip, shrink-0
 *           <div> icon-L3 — absolute, -translate-y-1/2, aspect-[14/14], left/right 20.83%, top-1/2
 *             <svg viewBox="0 0 14 14">  path p38adf480
 *   <div> border overlay — absolute, border, border-solid, inset-0,
 *                          pointer-events-none, rounded-[100px]
 *                          [ + shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)] on Focus ]
 *
 * Token map (all from /src/imports/theme.css):
 *
 *   State    │ Background                     │ Accent (border + icon)                    │ Extra
 *   ─────────┼────────────────────────────────┼───────────────────────────────────────────┼──────────────
 *   Default  │ --mono-white-100               │ --text-default-enabled-secondary  green-60 │ —
 *   Hover    │ --mono-white-100               │ --text-default-hover-secondary    green-50 │ —
 *   Focus    │ --mono-white-100               │ --text-default-focus-secondary    green-60 │ --focus-border
 *   Pressed  │ --fill-default-none-secondary  │ --text-default-pressed-secondary  green-70 │ —
 *   Disabled │ --mono-white-100               │ --text-default-disabled-secondary neutral-30│ —
 *   Loading  │ --fill-default-none-secondary  │ --text-default-pressed-secondary  green-70 │ spinner
 */

import React, { useState } from "react";

// ─── Figma SVG path ────────────────────────────────────────────────────────────
// All five non-loading frames share path p38adf480 (same "+" shape, viewBox 0 0 14 14).
// Imported from the Default frame — identical across all states.
import { Spinner } from "../Spinner";

// ─── Inline SVG path constants ─────────────────────────────────────────────
const PLUS_PATH        = "M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z";

// ─── Types ────────────────────────────────────────────────────────────────────

export type SecondaryIconOnlyCircleState =
  | "default"
  | "hover"
  | "focus"
  | "pressed"
  | "disabled"
  | "loading";

// ─── State style map ──────────────────────────────────────────────────────────

const STATE_STYLES: Record<
  SecondaryIconOnlyCircleState,
  { bg: string; accent: string; focusShadow: string; cursor: string }
> = {
  default: {
    bg:          "var(--mono-white-100)",
    accent:      "var(--text-default-enabled-secondary)", // green-60  #14803C
    focusShadow: "none",
    cursor:      "pointer",
  },
  hover: {
    bg:          "var(--mono-white-100)",
    accent:      "var(--text-default-hover-secondary)",   // green-50  #19A04B
    focusShadow: "none",
    cursor:      "pointer",
  },
  focus: {
    bg:          "var(--mono-white-100)",
    accent:      "var(--text-default-focus-secondary)",   // green-60  #14803C
    focusShadow: "var(--focus-border)",                   // 0 0 0 3px rgba(0,146,228,0.5)
    cursor:      "pointer",
  },
  pressed: {
    bg:          "var(--fill-default-none-secondary)",    // neutral-10 #F3F4F6
    accent:      "var(--text-default-pressed-secondary)", // green-70  #0C612C
    focusShadow: "none",
    cursor:      "pointer",
  },
  disabled: {
    bg:          "var(--mono-white-100)",
    accent:      "var(--text-default-disabled-secondary)",// neutral-30 #C2C7D0
    focusShadow: "none",
    cursor:      "not-allowed",
  },
  loading: {
    bg:          "var(--fill-default-none-secondary)",    // neutral-10 #F3F4F6
    accent:      "var(--text-default-pressed-secondary)", // green-70  #0C612C (border only; spinner replaces icon)
    focusShadow: "none",
    cursor:      "wait",
  },
};

// ─── Icon — exact Figma three-level nesting ───────────────────────────────────
// L1: size-[24px] flex items-center shrink-0
// L2: aspect-[28/28] h-full overflow-clip shrink-0
// L3: absolute -translate-y-1/2 aspect-[14/14] left-[20.83%] right-[20.83%] top-1/2
// SVG: absolute block size-full fill="none" preserveAspectRatio="none" viewBox="0 0 14 14"

function IconSecondary({ fill }: { fill: string }) {
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

// ─── Loading spinner ──────────────────────────────────────────────────────────
// Figma: bg-[#da33ab] rounded-[100px] size-[24px] → --fill-default-enabled-primary
// Rendered via shared Spinner component (same as all other Loading states).

function LoadingSpinner() {
  return (
    <Spinner
      size={24}
      trackColor="var(--neutral-20)"
      activeColor="var(--fill-default-enabled-primary)"
    />
  );
}

// ─── Button atom ──────────────────────────────────────────────────────────────

export interface SecondaryIconOnlyCircleAtomProps {
  forcedState?: SecondaryIconOnlyCircleState;
  onClick?:     () => void;
  ariaLabel?:   string;
}

export function SecondaryIconOnlyCircleAtom({
  forcedState,
  onClick,
  ariaLabel = "Button",
}: SecondaryIconOnlyCircleAtomProps) {
  const [live, setLive] = useState<SecondaryIconOnlyCircleState>("default");
  const state = forcedState ?? live;
  const s     = STATE_STYLES[state];

  const isDisabled = state === "disabled";
  const isLoading  = state === "loading";

  const set = (next: SecondaryIconOnlyCircleState) => () => {
    if (!forcedState) setLive(next);
  };

  return (
    // Outer — mirrors Figma: bg, relative, rounded-[100px]
    // overflow:hidden clips the inner content; the absolute border overlay
    // sits outside the overflow-hidden stacking context so it renders on top.
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
        // ── Shape ─────────────────────────────────────────────────────────
        borderRadius: "100px",
        position:     "relative",
        // ── Reset ─────────────────────────────────────────────────────────
        border:       "none",
        padding:      0,
        background:   "transparent",
        cursor:       s.cursor,
        // ── Layout / display ──────────────────────────────────────────────
        display:    "inline-flex",
        flexShrink: 0,
        transition: "background 0.1s",
      }}
    >
      {/* Inner content — p-[12px], flex, items-center, justify-center, overflow-clip */}
      <div
        style={{
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          padding:        "12px",
          borderRadius:   "inherit",
          overflow:       "hidden",
          background:     s.bg,
          transition:     "background 0.1s",
        }}
      >
        {isLoading ? <LoadingSpinner /> : <IconSecondary fill={s.accent} />}
      </div>

      {/* Border overlay — exact Figma: absolute border border-solid inset-0
          pointer-events-none rounded-[100px]
          Focus adds: shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)]          */}
      <div
        aria-hidden="true"
        style={{
          position:      "absolute",
          inset:         0,
          border:        `1px solid ${s.accent}`,
          borderRadius:  "100px",
          pointerEvents: "none",
          boxShadow:     s.focusShadow !== "none" ? s.focusShadow : undefined,
          transition:    "border-color 0.1s, box-shadow 0.1s",
        }}
      />
    </button>
  );
}

// ─── Showcase metadata ────────────────────────────────────────────────────────

const STATES: {
  id:           SecondaryIconOnlyCircleState;
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
    figmaFile:   "Button-12-3276 · svg-52su0tby3h",
    bgToken:     "--mono-white-100",
    accentToken: "--text-default-enabled-secondary",
    description: "Resting state. White fill, green-60 (#14803C) border and icon.",
  },
  {
    id:          "hover",
    name:        "Hover",
    figmaFile:   "Button-12-3288 · svg-pk087buumq",
    bgToken:     "--mono-white-100",
    accentToken: "--text-default-hover-secondary",
    description: "Pointer over button. White fill, accent shifts to green-50 (#19A04B).",
  },
  {
    id:           "focus",
    name:         "Focus",
    figmaFile:    "Button-12-3296 · svg-usujpue59o",
    bgToken:      "--mono-white-100",
    accentToken:  "--text-default-focus-secondary",
    shadowToken:  "--focus-border",
    description:  "Keyboard-focused. green-60 accent + 3 px blue ring via --focus-border on the border overlay.",
  },
  {
    id:          "pressed",
    name:        "Pressed",
    figmaFile:   "Button-12-3304 · svg-c5mdvkirh8",
    bgToken:     "--fill-default-none-secondary",
    accentToken: "--text-default-pressed-secondary",
    description: "Active / held. neutral-10 fill (#F3F4F6), green-70 (#0C612C) border and icon.",
  },
  {
    id:          "disabled",
    name:        "Disabled",
    figmaFile:   "Button-12-3280 · svg-gb815uh9xm",
    bgToken:     "--mono-white-100",
    accentToken: "--text-default-disabled-secondary",
    description: "Action unavailable. White fill, neutral-30 (#C2C7D0) border and icon.",
  },
  {
    id:          "loading",
    name:        "Loading",
    figmaFile:   "Button-12-3312 · (no icon — spinner)",
    bgToken:     "--fill-default-none-secondary",
    accentToken: "--text-default-pressed-secondary",
    description: "Async in progress. neutral-10 fill, green-70 border. Spinner uses --fill-default-enabled-primary, size 24 px.",
  },
];

// ─── Showcase page ────────────────────────────────────────────────────────────

export function SecondaryIconOnlyCircle() {
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
            Cropwise Design System V2 · buttons / Secondary / Icon Only / Circle
          </p>

          <h1
            style={{
              font:          "var(--font-heading-1)",
              letterSpacing: "var(--font-heading-1-letter-spacing)",
              color:         "var(--text-default-none-primary)",
              margin:        0,
            }}
          >
            SecondaryIconOnlyCircle
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
            Six interaction states. Circular icon-only button with no label. White
            background, 12 px uniform padding, 100 px border-radius. Border and icon
            share a single accent token per state, rendered via an absolute inset
            overlay div — exact Figma structure.
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
            <SecondaryIconOnlyCircleAtom
              forcedState={liveLoading ? "loading" : undefined}
              onClick={triggerLoading}
              ariaLabel="Add"
            />
            <SecondaryIconOnlyCircleAtom forcedState="hover"    ariaLabel="Add" />
            <SecondaryIconOnlyCircleAtom forcedState="focus"    ariaLabel="Add" />
            <SecondaryIconOnlyCircleAtom forcedState="pressed"  ariaLabel="Add" />
            <SecondaryIconOnlyCircleAtom forcedState="disabled" ariaLabel="Add" />
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
              gridTemplateColumns: "200px 1fr 120px",
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
                gridTemplateColumns: "200px 1fr 120px",
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
                <SecondaryIconOnlyCircleAtom forcedState={row.id} ariaLabel={row.name} />
              </div>
            </div>
          ))}
        </section>

        {/* ── Structure note ───────────────────────────────────────────────── */}
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
            Figma structure — border overlay pattern
          </p>

          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap:                 "10px",
            }}
          >
            {[
              { prop: "border-radius",   value: "100px",             figma: "rounded-[100px]"  },
              { prop: "padding",         value: "12px (all sides)",  figma: "p-[12px]"         },
              { prop: "icon size",       value: "24 × 24 px",        figma: "size-[24px]"      },
              { prop: "svg viewBox",     value: "0 0 14 14",         figma: "viewBox 0 0 14 14"},
              { prop: "border-width",    value: "1px (overlay div)", figma: "border border-solid" },
              { prop: "focus ring",      value: "--focus-border",    figma: "shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)]" },
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