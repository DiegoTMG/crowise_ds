/**
 * Button / Simple — SimpleButton
 * Figma node: 264:860 — "Figma-Make-Components"
 *
 * Unified button component covering all Figma variants:
 *
 *   buttonStyle : "icon-and-text" | "icon-only" | "text-only"
 *   shape       : "round" (100 px) | "square" (8 px) | "low" (8 px, no fill/border)
 *   prominence  : "primary" | "secondary" | "tertiary" | "quaternary"
 *   size        : "medium" | "small"
 *   alignment   : "hug" | "full-width"
 *
 * Colours     — 100% semantic tokens from src/theme/theme.css
 * Typography  — Noto Sans 400, body-primary (16/24/−0.12) or body-secondary (14/20/−0.10)
 * Icon        — Add (24 px medium / 20 px small) from src/icons/design/Add.tsx
 *
 * ⚠️  Known Design System gap — badge quantity text color (#840761):
 *     No matching semantic token exists in theme.css.
 *     Using raw value only for that element; all other values use semantic tokens.
 */

import React from "react";
import Add from "../../icons/design/Add";

// ─── Types ────────────────────────────────────────────────────────────────────

export type SimpleButtonStyle      = "icon-and-text" | "icon-only" | "text-only";
export type SimpleButtonShape      = "round" | "square" | "low";
export type SimpleButtonProminence = "primary" | "secondary" | "tertiary" | "quaternary";
export type SimpleButtonSize       = "medium" | "small";
export type SimpleButtonAlignment  = "hug" | "full-width";

export interface SimpleButtonProps {
  /** Controls which content slots are visible (maps to Figma `Style` prop). */
  buttonStyle?   : SimpleButtonStyle;
  /** Border-radius treatment (maps to Figma `Shape` prop). */
  shape?         : SimpleButtonShape;
  /** Fill / text / border token set (maps to Figma `Prominence` prop). */
  prominence?    : SimpleButtonProminence;
  /** Padding and typography scale (maps to Figma `Size` prop). */
  size?          : SimpleButtonSize;
  /** Width behaviour (maps to Figma `Alignment` prop). */
  alignment?     : SimpleButtonAlignment;
  /** Custom left icon node. Defaults to the Add (plus) icon when not provided. */
  iconLeft?      : React.ReactNode;
  /** Custom right icon node. Only rendered in "icon-and-text" style when provided. */
  iconRight?     : React.ReactNode;
  /** Button label text (ignored in "icon-only" style). */
  text?          : string;
  /** When provided, renders the badge-quantity pill with this value. */
  badgeQuantity? : string | number;
  /** When true, renders the 8×8 status dot badge. */
  badgeStatus?   : boolean;
  onClick?       : () => void;
}

// ─── Prominence → colour token map ───────────────────────────────────────────
// Source: Figma node 264:860 Enabled state, mapped to theme.css semantic tokens.
//
//  1 - Primary   → --fill-default-enabled-primary (#14803c) / white text+icon / no border
//  2 - Secondary → white fill / green text+icon (#14803c)  / 1px green border
//  3 - Tertiary  → white fill / dark text (#14151c)        / 1px grey border
//  4 - Subtle    → transparent fill                        / dark text / no border

type ProminenceStyle = {
  background: string;
  color:      string;
  iconColor:  string;
  border:     string;
};

const PROMINENCE_STYLES: Record<SimpleButtonProminence, ProminenceStyle> = {
  primary: {
    background: "var(--fill-default-enabled-primary)",
    color:      "var(--text-default-enabled-primary)",
    iconColor:  "var(--icon-default-enabled-primary)",
    border:     "none",
  },
  secondary: {
    background: "var(--fill-default-enabled-tertiary)",
    color:      "var(--text-default-enabled-secondary)",
    iconColor:  "var(--icon-default-enabled-secondary)",
    border:     "1px solid var(--border-default-enabled-primary)",
  },
  tertiary: {
    background: "var(--fill-default-enabled-tertiary)",
    color:      "var(--text-default-enabled-tertiary)",
    iconColor:  "var(--icon-default-enabled-tertiary)",
    border:     "1px solid var(--border-default-enabled-secondary)",
  },
  quaternary: {
    background: "transparent",
    color:      "var(--text-default-enabled-tertiary)",
    iconColor:  "var(--icon-default-enabled-tertiary)",
    border:     "none",
  },
};

// ─── Shape → border-radius ────────────────────────────────────────────────────
// round  → --corner-radius/maximum  = 100px
// square → --corner-radius/medium   = 8px
// low    → --corner-radius/medium   = 8px (same radius, no fill/border)

const BORDER_RADIUS: Record<SimpleButtonShape, string> = {
  round:  "100px",
  square: "8px",
  low:    "8px",
};

// ─── Padding lookup ───────────────────────────────────────────────────────────
// Source: Figma Enabled variants. All values verified from MCP data.
//
//  Style          Shape   Size     px-left/right  py-top/bottom
//  icon-and-text  round   medium   24px           8px
//  icon-and-text  round   small    16px           4px
//  icon-and-text  square  medium   16px           8px
//  icon-and-text  square  small    12px           4px
//  icon-and-text  low     medium   16px           8px
//  icon-and-text  low     small    12px           4px
//  text-only      (same as icon-and-text — no icon slots change padding)
//  icon-only      all     medium   8px all        (uniform)
//  icon-only      all     small    4px all        (uniform)

function getPadding(
  buttonStyle: SimpleButtonStyle,
  shape: SimpleButtonShape,
  size: SimpleButtonSize,
): { pt: string; pb: string; pl: string; pr: string } {
  const sm = size === "small";

  if (buttonStyle === "icon-only") {
    const p = sm ? "4px" : "8px";
    return { pt: p, pb: p, pl: p, pr: p };
  }

  const py = sm ? "4px" : "8px";
  let px: string;

  if (shape === "round") {
    px = sm ? "16px" : "24px";
  } else {
    // square and low
    px = sm ? "12px" : "16px";
  }

  return { pt: py, pb: py, pl: px, pr: px };
}

// ─── Label typography ─────────────────────────────────────────────────────────
// medium → body-primary  : 16px / 24px / −0.12px
// small  → body-secondary: 14px / 20px / −0.10px

function getLabelStyle(size: SimpleButtonSize, color: string): React.CSSProperties {
  const sm = size === "small";
  return {
    fontFamily:    "var(--font-family-body)",
    fontWeight:    400,
    fontStyle:     "normal",
    fontSize:      sm ? "14px" : "16px",
    lineHeight:    sm ? "20px" : "24px",
    letterSpacing: sm ? "-0.1px" : "-0.12px",
    whiteSpace:    "nowrap",
    flexShrink:    0,
    position:      "relative",
    color,
    margin:        0,
  };
}

// ─── Icon container ───────────────────────────────────────────────────────────
// Outer wrapper: 24 px (medium) or 20 px (compact), 2 px inner padding.
// Renders the provided node or falls back to the Add icon.

function IconContainer({
  icon,
  size,
  color,
}: {
  icon:  React.ReactNode;
  size:  SimpleButtonSize;
  color: string;
}) {
  const containerSize = size === "small" ? "20px" : "24px";
  const iconSize      = size === "small" ? 20 : 24;

  return (
    <div
      aria-hidden
      style={{
        display:    "flex",
        alignItems: "center",
        padding:    "2px",
        flexShrink: 0,
        width:      containerSize,
        height:     containerSize,
        overflow:   "hidden",
        boxSizing:  "border-box",
      }}
    >
      {icon ?? <Add size={iconSize} style={{ color, flexShrink: 0 }} />}
    </div>
  );
}

// ─── Badge — Quantity ─────────────────────────────────────────────────────────
// Container: 40×24 px pill.
// Background: var(--annotation-light-pink) = #F9ECF6 (exact token match).
// Text color: #840761 — no semantic token exists in theme.css (Design System gap).

function BadgeQuantity({ value }: { value: string }) {
  return (
    <div
      style={{
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "center",
        justifyContent: "center",
        padding:        "2px",
        height:         "24px",
        width:          "40px",
        flexShrink:     0,
        borderRadius:   "100px",
        boxSizing:      "border-box",
      }}
    >
      <div
        style={{
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          width:          "100%",
          flex:           "1 0 0",
          minHeight:      "1px",
          minWidth:       "1px",
          borderRadius:   "100px",
          background:     "var(--annotation-light-pink)",
        }}
      >
        <p
          style={{
            fontFamily:    "var(--font-family-body)",
            fontWeight:    400,
            fontSize:      "12px",
            lineHeight:    "16px",
            letterSpacing: "-0.09px",
            whiteSpace:    "nowrap",
            textAlign:     "center",
            flexShrink:    0,
            margin:        0,
            // ⚠️ No semantic token for this color in theme.css — Design System gap
            color:         "#840761",
          }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

// ─── Badge — Status dot ───────────────────────────────────────────────────────
// 8×8 px circle, absolute top-right.
// Figma renders this as a vector asset; using themed fill token here.

function BadgeStatus() {
  return (
    <div
      style={{
        position:     "absolute",
        top:          "-2px",
        right:        "-2px",
        width:        "8px",
        height:       "8px",
        borderRadius: "100px",
        background:   "var(--fill-default-enabled-primary)",
        flexShrink:   0,
      }}
    />
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function SimpleButton({
  buttonStyle   = "icon-and-text",
  shape         = "round",
  prominence    = "primary",
  size          = "medium",
  alignment     = "hug",
  iconLeft,
  iconRight,
  text          = "[Button]",
  badgeQuantity,
  badgeStatus   = false,
  onClick,
}: SimpleButtonProps) {
  const ps      = PROMINENCE_STYLES[prominence];
  const padding = getPadding(buttonStyle, shape, size);
  const sm      = size === "small";

  const containerStyle: React.CSSProperties = {
    display:        "flex",
    gap:            buttonStyle === "icon-only" ? "0px" : (sm ? "4px" : "8px"),
    alignItems:     "center",
    justifyContent: "center",
    paddingTop:     padding.pt,
    paddingBottom:  padding.pb,
    paddingLeft:    padding.pl,
    paddingRight:   padding.pr,
    position:       "relative",
    maxWidth:       "568px",
    width:          alignment === "full-width" ? "100%" : undefined,
    borderRadius:   BORDER_RADIUS[shape],
    background:     ps.background,
    color:          ps.color,
    border:         ps.border,
    outline:        "none",
    cursor:         "pointer",
    boxSizing:      "border-box",
    transition:     "background 0.1s",
    // reset default button styles
    fontFamily:     "inherit",
  };

  return (
    <button
      onClick={onClick}
      style={containerStyle}
    >
      {/* ── Icon — Left (Primary) ───────────────────────────────────────── */}
      {buttonStyle !== "text-only" && (
        <IconContainer icon={iconLeft} size={size} color={ps.iconColor} />
      )}

      {/* ── Badge — Quantity ────────────────────────────────────────────── */}
      {badgeQuantity !== undefined && buttonStyle !== "icon-only" && (
        <BadgeQuantity value={String(badgeQuantity)} />
      )}

      {/* ── Label ───────────────────────────────────────────────────────── */}
      {buttonStyle !== "icon-only" && (
        <p style={getLabelStyle(size, ps.color)}>{text}</p>
      )}

      {/* ── Icon — Right (Secondary) ────────────────────────────────────── */}
      {buttonStyle === "icon-and-text" && iconRight !== undefined && (
        <IconContainer icon={iconRight} size={size} color={ps.iconColor} />
      )}

      {/* ── Badge — Status ──────────────────────────────────────────────── */}
      {badgeStatus && <BadgeStatus />}
    </button>
  );
}
