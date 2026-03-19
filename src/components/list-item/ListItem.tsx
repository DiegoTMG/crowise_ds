/**
 * ListItem — Reusable list row component
 *
 * Figma source: https://www.figma.com/design/aTjr3ahBbKrSPThrmcEhtD/🐛-Sample-problem
 * Node: 5178-10926
 *
 * Layout:
 *   ┌─────────────────────────────────────────────────────┐
 *   │ ┌──────┐                                            │
 *   │ │ Icon │  Title ›                                   │
 *   │ └──────┘  info text                                 │
 *   ├─────────────────────────────────────────────────────┤ ← neutral-10 border
 *
 * Design tokens (from theme.css):
 *   Background  → var(--mono-white-100)     #ffffff
 *   Border      → var(--neutral-10)         #f3f4f6
 *   Icon bg     → var(--teal-10)            #e0f9f7  (default, configurable)
 *   Title       → var(--neutral-100)        #14151c  — 16px/24px SemiBold
 *   Info        → var(--neutral-60)         #696f88  — 14px/22px Regular
 *   Chevron     → var(--neutral-100)        #14151c
 */

import React from "react";
import Check from "../../icons/design/Check";
import KeyboardArrowRight from "../../icons/design/KeyboardArrowRight";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ListItemProps {
  /** Leading icon — accepts any React node (e.g. a design-system icon component) */
  icon?: React.ReactNode;
  /** Background colour for the icon container. Defaults to teal-10. */
  iconBgColor?: string;
  /** Colour applied to the icon (sets CSS `color` so SVGs using currentColor inherit it). */
  iconColor?: string;
  /** Shows a teal checkmark badge on the icon container. */
  checked?: boolean;
  /** Primary text displayed on the first line. */
  title: string;
  /** Secondary text displayed below the title. */
  info?: string;
  /** Called when the list item is pressed. */
  onClick?: () => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ListItem({
  icon,
  iconBgColor = "var(--teal-10, #e0f9f7)",
  iconColor   = "var(--teal-60, #217c74)",
  checked     = false,
  title,
  info,
  onClick,
}: ListItemProps) {
  return (
    <button
      onClick={onClick}
      style={{
        // ── Container ────────────────────────────────────────────────────
        display:       "flex",
        alignItems:    "center",
        gap:           12,
        width:         "100%",
        padding:       16,
        background:    "var(--mono-white-100, #ffffff)",
        border:        "none",
        borderBottom:  "1px solid var(--neutral-10, #f3f4f6)",
        cursor:        onClick ? "pointer" : "default",
        textAlign:     "left",
        fontFamily:    "inherit",
        boxSizing:     "border-box",
      }}
      data-name="listitem"
      data-node-id="5178:10926"
    >
      {/* ── Icon container ──────────────────────────────────────────────── */}
      {icon != null && (
        <div
          style={{
            position:       "relative",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            width:          52,
            height:         52,
            background:     iconBgColor,
            borderRadius:   12,
            flexShrink:     0,
            color:          iconColor,
          }}
          data-name="Icon"
          data-node-id="5178:10928"
        >
          {icon}

          {/* Checkmark badge */}
          {checked && (
            <div
              style={{
                position:     "absolute",
                top:          -4,
                left:         40,
                display:      "flex",
                alignItems:   "center",
                padding:      2,
                background:   "var(--teal-60, #217c74)",
                border:       "1px solid var(--mono-white-100, #ffffff)",
                borderRadius: 56,
                color:        "var(--mono-white-100, #ffffff)",
              }}
              data-node-id="5188:102157"
            >
              <Check size={12} />
            </div>
          )}
        </div>
      )}

      {/* ── Text section ────────────────────────────────────────────────── */}
      <div
        style={{
          flex:          1,
          display:       "flex",
          flexDirection: "column",
          minWidth:      0,
        }}
        data-name="Text"
        data-node-id="5178:10930"
      >
        {/* Title row */}
        <div
          style={{ display: "flex", alignItems: "center" }}
          data-name="Name"
          data-node-id="5178:10931"
        >
          <span
            style={{
              flex:           1,
              fontFamily:     "var(--font-family-primary)",
              fontSize:       16,
              fontWeight:     600,
              fontStyle:      "normal",
              lineHeight:     "24px",
              letterSpacing:  -0.12,
              color:          "var(--neutral-100, #14151c)",
              overflow:       "hidden",
              textOverflow:   "ellipsis",
              whiteSpace:     "nowrap",
            }}
            data-node-id="5178:10932"
          >
            {title}
          </span>

          {/* Chevron right */}
          <KeyboardArrowRight
            size={18}
            style={{ flexShrink: 0, color: "var(--neutral-100, #14151c)" }}
            data-node-id="5178:10933"
          />
        </div>

        {/* Info line */}
        {info != null && (
          <span
            style={{
              fontFamily:     "var(--font-family-primary)",
              fontSize:       14,
              fontWeight:     400,
              fontStyle:      "normal",
              lineHeight:     "22px",
              letterSpacing:  -0.105,
              color:          "var(--neutral-60, #696f88)",
              whiteSpace:     "nowrap",
            }}
            data-name="Info"
            data-node-id="5178:10934"
          >
            {info}
          </span>
        )}
      </div>
    </button>
  );
}

export default ListItem;
