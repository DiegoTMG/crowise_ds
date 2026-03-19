/**
 * Button / Ghost / Standard  ·  GhostStandard
 *
 * Ghost buttons have no background at rest and no border overlay.
 * A subtle neutral fill appears on hover/pressed/focus to signal interactivity.
 *
 * ── Token map ─────────────────────────────────────────────────────────────────
 *
 *  State    │ bg (fill)                          │ icon                             │ text
 *  ─────────┼────────────────────────────────────┼──────────────────────────────────┼──────────────────────────────────
 *  default  │ transparent                        │ --icon-default-enabled-tertiary  │ --text-default-enabled-tertiary
 *           │                                    │   (neutral-60  #696F88)          │   (neutral-100 #14151C)
 *  hover    │ --fill-default-hover-quaternary    │ --icon-default-hover-tertiary    │ --text-default-hover-tertiary
 *           │   (neutral-10  #F3F4F6)            │   (neutral-50  #868CA2)          │   (neutral-80  #363948)
 *  focus    │ --fill-default-focus-quaternary    │ --icon-default-focus-tertiary    │ --text-default-focus-tertiary
 *           │   (neutral-20  #DFE2E7)            │   (neutral-60  #696F88)          │   (neutral-100 #14151C)
 *  pressed  │ --fill-default-pressed-quaternary  │ --icon-default-pressed-tertiary  │ --text-default-pressed-tertiary
 *           │   (neutral-30  #C2C7D0)            │   (neutral-70  #4D5165)          │   (neutral-100 #14151C)
 *  disabled │ transparent                        │ --icon-default-disabled-tertiary │ --text-default-disabled-tertiary
 *           │                                    │   (neutral-30  #C2C7D0)          │   (neutral-30  #C2C7D0)
 *  loading  │ --fill-default-pressed-quaternary  │ spinner (--fill-default-enabled-primary track) │ --text-default-pressed-tertiary
 *
 * Typography (Button/Label):
 *   font-family: var(--font-family-primary) · weight: 400 · size: 16px
 *   line-height: 24px · letter-spacing: -0.12px · font-style: normal
 *
 * Shape: border-radius 100px (pill / round).
 * No border overlay — ghost buttons have no visible stroke at any state.
 */

import React, { useState } from "react";
import { Spinner } from "../Spinner";

// ─── Inline SVG path constants ──────────────────────────────────────────────
const PLUS_PATH_SMALL = "M11.6667 6.66667H6.66667V11.6667H5V6.66667H0V5H5V0H6.66667V5H11.6667V6.66667Z";

// ─── Types ────────────────────────────────────────────────────────────────────

export type GhostStandardState =
  | "default"
  | "hover"
  | "focus"
  | "pressed"
  | "disabled"
  | "loading";

// ─── State token map ──────────────────────────────────────────────────────────

const STATE_TOKENS: Record<
  GhostStandardState,
  {
    bg:          string;
    iconColor:   string;
    textColor:   string;
    focusShadow: boolean;
    showSpinner: boolean;
  }
> = {
  default: {
    bg:          "transparent",
    iconColor:   "var(--icon-default-enabled-tertiary)",    // neutral-60 #696F88
    textColor:   "var(--text-default-enabled-tertiary)",    // neutral-100 #14151C
    focusShadow: false,
    showSpinner: false,
  },
  hover: {
    bg:          "var(--fill-default-hover-quaternary)",    // neutral-10 #F3F4F6
    iconColor:   "var(--icon-default-hover-tertiary)",      // neutral-50 #868CA2
    textColor:   "var(--text-default-hover-tertiary)",      // neutral-80 #363948
    focusShadow: false,
    showSpinner: false,
  },
  focus: {
    bg:          "var(--fill-default-focus-quaternary)",    // neutral-20 #DFE2E7
    iconColor:   "var(--icon-default-focus-tertiary)",      // neutral-60 #696F88
    textColor:   "var(--text-default-focus-tertiary)",      // neutral-100 #14151C
    focusShadow: true,
    showSpinner: false,
  },
  pressed: {
    bg:          "var(--fill-default-pressed-quaternary)",  // neutral-30 #C2C7D0
    iconColor:   "var(--icon-default-pressed-tertiary)",    // neutral-70 #4D5165
    textColor:   "var(--text-default-pressed-tertiary)",    // neutral-100 #14151C
    focusShadow: false,
    showSpinner: false,
  },
  disabled: {
    bg:          "transparent",
    iconColor:   "var(--icon-default-disabled-tertiary)",   // neutral-30 #C2C7D0
    textColor:   "var(--text-default-disabled-tertiary)",   // neutral-30 #C2C7D0
    focusShadow: false,
    showSpinner: false,
  },
  loading: {
    bg:          "var(--fill-default-pressed-quaternary)",  // neutral-30 (same as pressed)
    iconColor:   "var(--fill-default-enabled-primary)",     // spinner active track
    textColor:   "var(--text-default-pressed-tertiary)",    // neutral-100 #14151C
    focusShadow: false,
    showSpinner: true,
  },
};

// ─── Typography — Button / Label ──────────────────────────────────────────────

const LABEL_STYLE: React.CSSProperties = {
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
};

// ─── Plus icon — three-level Figma nesting ────────────────────────────────────

function PlusIcon({ fill }: { fill: string }) {
  return (
    <div
      style={{
        display:    "flex",
        alignItems: "center",
        padding:    "2px",
        position:   "relative",
        flexShrink: 0,
        width:      "24px",
        height:     "24px",
      }}
    >
      <div
        style={{
          aspectRatio: "28 / 28",
          height:      "100%",
          overflow:    "clip",
          position:    "relative",
          flexShrink:  0,
        }}
      >
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
            viewBox="0 0 11.6667 11.6667"
          >
            <path d={PLUS_PATH_SMALL} fill={fill} id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Button atom ──────────────────────────────────────────────────────────────

export interface GhostStandardProps {
  /** Pin to a specific visual state (for library / showcase previews). */
  forcedState?: GhostStandardState;
  label?:       string;
  onClick?:     () => void;
}

export function GhostStandard({
  forcedState,
  label = "[Button]",
  onClick,
}: GhostStandardProps) {
  const [liveState, setLiveState] = useState<GhostStandardState>("default");

  const state  = forcedState ?? liveState;
  const tokens = STATE_TOKENS[state];

  const isDisabled = state === "disabled";
  const isLoading  = state === "loading";

  const set = (s: GhostStandardState) => () => { if (!forcedState) setLiveState(s); };

  return (
    // Outer wrapper — pill (100px) shape, no border, no box-shadow by default
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
        borderRadius: "100px",   // pill shape
        border:       "none",
        outline:      "none",
        padding:      0,
        margin:       0,
        cursor:       isDisabled ? "not-allowed" : isLoading ? "wait" : "pointer",
        transition:   "background 0.1s",
        display:      "inline-flex",
        alignItems:   "center",
        boxShadow:    tokens.focusShadow ? "var(--focus-border)" : "none",
      }}
    >
      {/* Inner content row */}
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
          <Spinner
            size={18}
            trackColor="var(--neutral-20)"
            activeColor="var(--fill-default-enabled-primary)"
          />
        ) : (
          <PlusIcon fill={tokens.iconColor} />
        )}

        {/* Label */}
        <p style={{ ...LABEL_STYLE, color: tokens.textColor }}>
          {isLoading ? "Loading..." : label}
        </p>
      </div>
    </button>
  );
}

export default GhostStandard;
