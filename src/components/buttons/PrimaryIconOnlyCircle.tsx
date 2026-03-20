/**
 * Button / Primary / Icon Only / Circle  ·  PrimaryIconOnlyCircle
 *
 * Figma source files (one per state):
 *   Default  → Button-5-4222  svg-3dyr1ugh6b   bg #14803c  icon white
 *   Hover    → Button-5-4234  svg-f2qrc0105l   bg #19a04b  icon white
 *   Focus    → Button-5-4242  svg-4r1xeo4f8d   bg #14803c  icon white  + focus ring
 *   Pressed  → Button-5-4250  svg-vtt0blisbw   bg #0c612c  icon #F3F4F6
 *   Disabled → Button-5-4226  svg-5x3uq5lr2m   bg #dfe2e7  icon #C2C7D0
 *   Loading  → Button-5-4258  (no icon path)   bg #0c612c  spinner --annotation-mid-pink
 *
 * Structure (exact Figma):
 *   Button wrapper — p-[12px] rounded-[100px] overflow-clip
 *     └─ Icon outer  — size-[24px] flex items-center
 *          └─ Icon middle — aspect-[28/28] h-full overflow-clip
 *               └─ Icon inner — absolute -translate-y-1/2 aspect-[14/14]
 *                               left-[20.83%] right-[20.83%] top-1/2
 *                    └─ SVG — viewBox="0 0 14 14"
 *                         └─ path p38adf480 — "M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z"
 *
 * Key differences from Primary / Standard / Round:
 *   – No text label (icon only)
 *   – Uniform padding p-[12px] instead of px-[16px] py-[12px]
 *   – Icon middle uses aspect-[28/28] and viewBox "0 0 14 14"
 *   – Focus shadow lives on the button element itself — overflow-clip is retained
 *     because box-shadow on the element is never clipped by its own overflow
 *
 * Colour tokens (semantic, from /src/imports/theme.css):
 *   #14803c green-60  → --fill-default-enabled-primary  / --fill-default-focus-primary
 *   #19a04b green-50  → --fill-default-hover-primary
 *   #0c612c green-70  → --fill-default-pressed-primary
 *   #dfe2e7 neutral-20→ --fill-default-disabled-primary
 *   white             → --icon-default-enabled-primary / hover / focus
 *   #f3f4f6 neutral-10→ --icon-default-pressed-primary
 *   #c2c7d0 neutral-30→ --icon-default-disabled-primary
 *   #da33ab           → --annotation-mid-pink   (spinner arc)
 */

import React, { useState } from "react";
import { Spinner } from "../Spinner";
import { Add } from "../../icons";

// ─── Types ────────────────────────────────────────────────────────────────────

export type IconOnlyCircleState =
  | "default"
  | "hover"
  | "focus"
  | "pressed"
  | "disabled"
  | "loading";

// ─── Semantic token map ───────────────────────────────────────────────────────

const STATE_STYLES: Record<
  IconOnlyCircleState,
  { bg: string; iconColor: string; boxShadow: string; cursor: string }
> = {
  default: {
    bg:        "var(--fill-default-enabled-primary)",   // #14803c
    iconColor: "var(--icon-default-enabled-primary)",   // white
    boxShadow: "none",
    cursor:    "pointer",
  },
  hover: {
    bg:        "var(--fill-default-hover-primary)",      // #19a04b
    iconColor: "var(--icon-default-hover-primary)",      // white
    boxShadow: "none",
    cursor:    "pointer",
  },
  focus: {
    bg:        "var(--fill-default-focus-primary)",      // #14803c
    iconColor: "var(--icon-default-focus-primary)",      // white
    boxShadow: "var(--focus-border)",                    // 0 0 0 3px rgba(0,146,228,0.5)
    cursor:    "pointer",
  },
  pressed: {
    bg:        "var(--fill-default-pressed-primary)",    // #0c612c
    iconColor: "var(--icon-default-pressed-primary)",    // #f3f4f6 neutral-10
    boxShadow: "none",
    cursor:    "pointer",
  },
  disabled: {
    bg:        "var(--fill-default-disabled-primary)",   // #dfe2e7 neutral-20
    iconColor: "var(--icon-default-disabled-primary)",   // #c2c7d0 neutral-30
    boxShadow: "none",
    cursor:    "not-allowed",
  },
  loading: {
    bg:        "var(--fill-default-pressed-primary)",    // #0c612c — same as Pressed
    iconColor: "var(--fill-default-enabled-primary)",             // spinner colour (unused for icon)
    boxShadow: "none",
    cursor:    "wait",
  },
};

// ─── Icon — exact Figma structure ─────────────────────────────────────────────
//
// Figma layers:
//   Icon outer   content-stretch flex items-center relative shrink-0 size-[24px]
//   Icon middle  aspect-[28/28] h-full overflow-clip relative shrink-0
//   Icon inner   -translate-y-1/2 absolute aspect-[14/14]
//                left-[20.83%] right-[20.83%] top-1/2
//   SVG          absolute block size-full preserveAspectRatio="none"
//                fill="none" viewBox="0 0 14 14"

function PlusIcon({ fill }: { fill: string }) {
  return <Add size={24} style={{ color: fill, flexShrink: 0 }} aria-hidden />;
}

// ─── Button atom ──────────────────────────────────────────────────────────────

export interface IconOnlyCircleAtomProps {
  /** Pin the button to a specific state (for showcase/frozen previews) */
  forcedState?: IconOnlyCircleState;
  /** Accessible label — rendered as aria-label */
  ariaLabel?: string;
  onClick?: () => void;
}

export function IconOnlyCircleAtom({
  forcedState,
  ariaLabel = "Action",
  onClick,
}: IconOnlyCircleAtomProps) {
  const [live, setLive] = useState<IconOnlyCircleState>("default");
  const state = forcedState ?? live;
  const s     = STATE_STYLES[state];

  const isDisabled = state === "disabled";
  const isLoading  = state === "loading";

  const set = (next: IconOnlyCircleState) => () => {
    if (!forcedState) setLive(next);
  };

  return (
    // Figma: bg-[COLOR] content-stretch flex items-center justify-center
    //        overflow-clip p-[12px] relative rounded-[100px] size-full
    // Note: box-shadow (focus) lives on this element and is NOT clipped by
    //       its own overflow, so overflow-clip can stay for all states.
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
        // Layout — exact Figma
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        overflow:       "clip",
        padding:        "12px",
        borderRadius:   "100px",
        position:       "relative",
        flexShrink:     0,
        // Colour tokens
        background: s.bg,
        boxShadow:  s.boxShadow,
        // Reset
        border:   "none",
        outline:  "none",
        cursor:   s.cursor,
        // Smooth transitions
        transition: "background 0.1s, box-shadow 0.1s",
      }}
    >
      {isLoading ? (
        // Loading — Figma: bg-[#da33ab] rounded-[100px] shrink-0 size-[24px]
        // → use shared Spinner, size 24px to match the icon footprint
        <Spinner
          size={24}
          trackColor="var(--neutral-20)"
          activeColor="var(--fill-default-enabled-primary)"
        />
      ) : (
        <PlusIcon fill={s.iconColor} />
      )}
    </button>
  );
}

// ─── Showcase metadata ────────────────────────────────────────────────────────

const STATES: {
  id:          IconOnlyCircleState;
  name:        string;
  figmaFile:   string;
  bgToken:     string;
  iconToken:   string;
  shadowToken?: string;
  description: string;
}[] = [
  {
    id:          "default",
    name:        "Default",
    figmaFile:   "Button-5-4222 · svg-3dyr1ugh6b",
    bgToken:     "--fill-default-enabled-primary",
    iconToken:   "--icon-default-enabled-primary",
    description: "Resting state. green-60 fill (#14803C), white icon.",
  },
  {
    id:          "hover",
    name:        "Hover",
    figmaFile:   "Button-5-4234 · svg-f2qrc0105l",
    bgToken:     "--fill-default-hover-primary",
    iconToken:   "--icon-default-hover-primary",
    description: "Pointer over button. Fill lightens to green-50 (#19A04B). Icon stays white.",
  },
  {
    id:           "focus",
    name:         "Focus",
    figmaFile:    "Button-5-4242 · svg-4r1xeo4f8d",
    bgToken:      "--fill-default-focus-primary",
    iconToken:    "--icon-default-focus-primary",
    shadowToken:  "--focus-border",
    description:  "Keyboard-focused. green-60 fill + 3 px blue ring via --focus-border. overflow-clip retained — shadow on the element itself is never clipped.",
  },
  {
    id:          "pressed",
    name:        "Pressed",
    figmaFile:   "Button-5-4250 · svg-vtt0blisbw",
    bgToken:     "--fill-default-pressed-primary",
    iconToken:   "--icon-default-pressed-primary",
    description: "Active / held. green-70 (#0C612C) fill, neutral-10 (#F3F4F6) icon.",
  },
  {
    id:          "disabled",
    name:        "Disabled",
    figmaFile:   "Button-5-4226 · svg-5x3uq5lr2m",
    bgToken:     "--fill-default-disabled-primary",
    iconToken:   "--icon-default-disabled-primary",
    description: "Action unavailable. neutral-20 fill (#DFE2E7), neutral-30 icon (#C2C7D0).",
  },
  {
    id:          "loading",
    name:        "Loading",
    figmaFile:   "Button-5-4258 · (no path — spinner only)",
    bgToken:     "--fill-default-pressed-primary",
    iconToken:   "--fill-default-enabled-primary",
    description: "Async in progress. green-70 fill. Spinner at 24×24 uses --fill-default-enabled-primary arc and --neutral-20 track.",
  },
];

// ─── Showcase page ────────────────────────────────────────────────────────────

const FONT = "var(--font-family-body)";

export function PrimaryIconOnlyCircle() {
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
        fontFamily: FONT,
      }}
    >
      <div
        style={{
          maxWidth:      960,
          margin:        "0 auto",
          display:       "flex",
          flexDirection: "column",
          gap:           "32px",
        }}
      >
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <header style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <p
            style={{
              fontFamily:    FONT,
              fontSize:      "11px",
              fontWeight:    600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color:         "var(--text-default-none-secondary)",
              margin:        0,
            }}
          >
            Cropwise Design System V2 · buttons / Primary / Icon Only / Circle
          </p>

          <h1
            style={{
              fontFamily:    FONT,
              fontSize:      "28px",
              fontWeight:    600,
              color:         "var(--text-default-none-primary)",
              margin:        0,
              letterSpacing: "-0.3px",
              lineHeight:    "1.2",
            }}
          >
            PrimaryIconOnlyCircle
          </h1>

          <p
            style={{
              fontFamily: FONT,
              fontSize:   "15px",
              fontWeight: "var(--font-weight-regular)",
              lineHeight: "24px",
              color:      "var(--text-default-none-secondary)",
              margin:     0,
              maxWidth:   520,
            }}
          >
            A circular icon-only button with no text label. Six interaction
            states. All colours are semantic tokens; padding is uniform{" "}
            <code style={{ fontFamily: "monospace", fontSize: "13px" }}>12px</code>{" "}
            on all sides.
          </p>
        </header>

        {/* ── Interactive strip ─────────────────────────────────────────── */}
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
                fontFamily:    FONT,
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
                fontFamily: FONT,
                fontSize:   "14px",
                fontWeight: "var(--font-weight-regular)",
                lineHeight: "20px",
                color:      "var(--text-default-none-secondary)",
                margin:     0,
              }}
            >
              Hover, Tab, and click. First button triggers the live loading state.
            </p>
          </div>

          <div
            style={{
              display:    "flex",
              alignItems: "center",
              gap:        "12px",
              flexWrap:   "wrap",
            }}
          >
            <IconOnlyCircleAtom
              forcedState={liveLoading ? "loading" : undefined}
              onClick={triggerLoading}
            />
            <IconOnlyCircleAtom forcedState="hover"    />
            <IconOnlyCircleAtom forcedState="focus"    />
            <IconOnlyCircleAtom forcedState="pressed"  />
            <IconOnlyCircleAtom forcedState="disabled" />
          </div>
        </section>

        {/* ── State reference table ─────────────────────────────────────── */}
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
              gridTemplateColumns: "180px 1fr 80px",
              padding:             "12px 24px",
              background:          "var(--fill-default-none-secondary)",
              borderBottom:        "1px solid var(--border-default-none-secondary)",
            }}
          >
            {["State · Tokens", "Description", "Preview"].map((col, i) => (
              <span
                key={col}
                style={{
                  fontFamily:    FONT,
                  fontSize:      "11px",
                  fontWeight:    600,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color:         "var(--text-default-none-secondary)",
                  textAlign:     i === 2 ? "center" : "left",
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
                gridTemplateColumns: "180px 1fr 80px",
                padding:             "20px 24px",
                alignItems:          "center",
                borderBottom:
                  idx < STATES.length - 1
                    ? "1px solid var(--border-default-none-secondary)"
                    : "none",
              }}
            >
              {/* State label + tokens */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span
                  style={{
                    alignSelf:    "flex-start",
                    padding:      "3px 10px",
                    border:       "1px solid var(--border-default-none-secondary)",
                    borderRadius: "4px",
                    fontFamily:   FONT,
                    fontSize:     "13px",
                    fontWeight:   400,
                    color:        "var(--text-default-none-primary)",
                    background:   "var(--fill-default-none-primary)",
                  }}
                >
                  {row.name}
                </span>

                {[
                  row.bgToken,
                  row.iconToken,
                  ...(row.shadowToken ? [row.shadowToken] : []),
                ].map((tok) => (
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
                ))}

                <code
                  style={{
                    display:    "block",
                    fontFamily: "monospace",
                    fontSize:   "10px",
                    lineHeight: "14px",
                    color:      "var(--text-default-none-secondary)",
                    opacity:    0.55,
                  }}
                >
                  {row.figmaFile}
                </code>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily:   FONT,
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
              <div style={{ display: "flex", justifyContent: "center" }}>
                <IconOnlyCircleAtom forcedState={row.id} />
              </div>
            </div>
          ))}
        </section>

        {/* ── Anatomy note ─────────────────────────────────────────────────── */}
        <section
          style={{
            background:    "var(--fill-default-none-primary)",
            border:        "1px solid var(--border-default-none-secondary)",
            borderRadius:  "8px",
            padding:       "20px 24px",
            display:       "flex",
            flexDirection: "column",
            gap:           "14px",
          }}
        >
          <p
            style={{
              fontFamily:    FONT,
              fontSize:      "11px",
              fontWeight:    600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color:         "var(--text-default-none-primary)",
              margin:        0,
            }}
          >
            Anatomy
          </p>

          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap:                 "10px",
            }}
          >
            {[
              { prop: "Shape",       value: "Circle — rounded-[100px]",    figma: "rounded-[100px]" },
              { prop: "Padding",     value: "12px uniform",                figma: "p-[12px]" },
              { prop: "Icon outer",  value: "24×24 px",                   figma: "size-[24px]" },
              { prop: "Icon middle", value: "aspect-ratio 28/28",         figma: "aspect-[28/28]" },
              { prop: "Icon inner",  value: "aspect-ratio 14/14, centred",figma: "aspect-[14/14] -translate-y-1/2" },
              { prop: "viewBox",     value: "0 0 14 14",                  figma: "SVG viewBox" },
              { prop: "Spinner",     value: "24×24 px",                   figma: "size-[24px] bg-[#da33ab]" },
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
                <span
                  style={{
                    fontFamily: FONT,
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
                    opacity:    0.55,
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
