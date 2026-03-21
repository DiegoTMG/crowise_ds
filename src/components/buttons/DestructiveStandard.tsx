/**
 * Button / Destructive / Standard  ·  DestructiveStandard
 *
 * Destructive buttons use the "critical" semantic tokens (red palette).
 * They signal irreversible or high-risk actions (e.g., delete, remove).
 *
 * ── Token map ─────────────────────────────────────────────────────────────────
 *
 *  State    │ bg (fill)                        │ icon                             │ text
 *  ─────────┼──────────────────────────────────┼──────────────────────────────────┼──────────────────────────────────
 *  default  │ --fill-critical-enabled-primary  │ --icon-critical-enabled-primary  │ --text-critical-enabled-primary
 *           │   (red-60)                       │   (mono-white-100  #FFFFFF)      │   (mono-white-100  #FFFFFF)
 *  hover    │ --fill-critical-hover-primary    │ --icon-critical-hover-primary    │ --text-critical-hover-primary
 *           │   (red-50)                       │   (mono-white-100  #FFFFFF)      │   (mono-white-100  #FFFFFF)
 *  focus    │ --fill-critical-focus-primary    │ --icon-critical-focus-primary    │ --text-critical-focus-primary
 *           │   (red-60)                       │   (mono-white-100  #FFFFFF)      │   (mono-white-100  #FFFFFF)
 *  pressed  │ --fill-critical-pressed-primary  │ --icon-critical-pressed-primary  │ --text-critical-pressed-primary
 *           │   (red-70)                       │   (neutral-10  #F3F4F6)          │   (neutral-10  #F3F4F6)
 *  disabled │ --fill-critical-disabled-primary │ --icon-critical-disabled-primary │ --text-critical-disabled-primary
 *           │   (neutral-20  #DFE2E7)          │   (neutral-30  #C2C7D0)          │   (neutral-30  #C2C7D0)
 *  loading  │ --fill-critical-pressed-primary  │ spinner (--annotation-mid-pink)  │ --text-critical-pressed-primary
 *           │   (red-70)                       │   (#DA33AB)                      │   (neutral-10  #F3F4F6)
 *
 * Typography (Button/Label):
 *   font-family: var(--font-family-primary) · weight: 400 · size: 16px
 *   line-height: 24px · letter-spacing: -0.12px · font-style: normal
 *
 * Shape: border-radius 100px (pill / round).
 * No border overlay — destructive filled buttons do not use a stroke.
 */

import React, { useState } from "react";
import { Spinner } from "../Spinner";
import { Add } from "../../icons";

// ─── Types ────────────────────────────────────────────────────────────────────

export type DestructiveStandardState =
  | "default"
  | "hover"
  | "focus"
  | "pressed"
  | "disabled"
  | "loading";

// ─── State token map ──────────────────────────────────────────────────────────

const STATE_TOKENS: Record<
  DestructiveStandardState,
  {
    bg:          string;
    iconColor:   string;
    textColor:   string;
    boxShadow:   string;
    cursor:      string;
    showSpinner: boolean;
  }
> = {
  default: {
    bg:          "var(--fill-critical-enabled-primary)",    // red-60
    iconColor:   "var(--icon-critical-enabled-primary)",    // mono-white-100
    textColor:   "var(--text-critical-enabled-primary)",    // mono-white-100
    boxShadow:   "none",
    cursor:      "pointer",
    showSpinner: false,
  },
  hover: {
    bg:          "var(--fill-critical-hover-primary)",      // red-50
    iconColor:   "var(--icon-critical-hover-primary)",      // mono-white-100
    textColor:   "var(--text-critical-hover-primary)",      // mono-white-100
    boxShadow:   "none",
    cursor:      "pointer",
    showSpinner: false,
  },
  focus: {
    bg:          "var(--fill-critical-focus-primary)",      // red-60
    iconColor:   "var(--icon-critical-focus-primary)",      // mono-white-100
    textColor:   "var(--text-critical-focus-primary)",      // mono-white-100
    boxShadow:   "var(--focus-border)",                     // 0 0 0 3px rgba(0,146,228,0.5)
    cursor:      "pointer",
    showSpinner: false,
  },
  pressed: {
    bg:          "var(--fill-critical-pressed-primary)",    // red-70
    iconColor:   "var(--icon-critical-pressed-primary)",    // neutral-10 #F3F4F6
    textColor:   "var(--text-critical-pressed-primary)",    // neutral-10 #F3F4F6
    boxShadow:   "none",
    cursor:      "pointer",
    showSpinner: false,
  },
  disabled: {
    bg:          "var(--fill-critical-disabled-primary)",   // neutral-20 #DFE2E7
    iconColor:   "var(--icon-critical-disabled-primary)",   // neutral-30 #C2C7D0
    textColor:   "var(--text-critical-disabled-primary)",   // neutral-30 #C2C7D0
    boxShadow:   "none",
    cursor:      "not-allowed",
    showSpinner: false,
  },
  loading: {
    bg:          "var(--fill-critical-pressed-primary)",    // red-70 (same as pressed)
    iconColor:   "var(--annotation-mid-pink)",              // #DA33AB  (spinner active track)
    textColor:   "var(--text-critical-pressed-primary)",    // neutral-10 #F3F4F6
    boxShadow:   "none",
    cursor:      "wait",
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
  return <Add size={24} style={{ color: fill, flexShrink: 0 }} aria-hidden />;
}

// ─── Button atom ──────────────────────────────────────────────────────────────

export interface DestructiveStandardProps {
  /** Pin to a specific visual state (for library / showcase previews). */
  forcedState?: DestructiveStandardState;
  label?:       string;
  hideIcon?:    boolean;
  onClick?:     () => void;
}

export function DestructiveStandard({
  forcedState,
  label = "[Button]",
  hideIcon = false,
  onClick,
}: DestructiveStandardProps) {
  const [liveState, setLiveState] = useState<DestructiveStandardState>("default");

  const state  = forcedState ?? liveState;
  const tokens = STATE_TOKENS[state];

  const isDisabled = state === "disabled";
  const isLoading  = state === "loading";

  const set = (s: DestructiveStandardState) => () => { if (!forcedState) setLiveState(s); };

  return (
    // Outer wrapper — pill (100px) shape, filled critical color, no border overlay
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
        cursor:       tokens.cursor,
        transition:   "background 0.1s, box-shadow 0.1s",
        display:      "inline-flex",
        alignItems:   "center",
        boxShadow:    tokens.boxShadow,
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
        {!hideIcon && (
          isLoading ? (
            <Spinner
              size={18}
              trackColor="var(--neutral-20)"
              activeColor="var(--annotation-mid-pink)"
            />
          ) : (
            <PlusIcon fill={tokens.iconColor} />
          )
        )}

        {/* Label */}
        <p style={{ ...LABEL_STYLE, color: tokens.textColor }}>
          {isLoading ? "Loading..." : label}
        </p>
      </div>
    </button>
  );
}

export default DestructiveStandard;
