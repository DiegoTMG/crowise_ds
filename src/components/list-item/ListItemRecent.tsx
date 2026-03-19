/**
 * ListItemRecent — Card-style list row for "last monitored" / recent items
 *
 * Figma source: https://www.figma.com/design/aTjr3ahBbKrSPThrmcEhtD/🐛-Sample-problem
 * Node: 5188-102121
 *
 * Layout (vertical card):
 *   ┌─────────────────────────────────────────┐
 *   │  ┌────┐ ✓                               │
 *   │  │icon│                                  │
 *   │  └────┘                                  │
 *   │  Title ›                                 │
 *   │  info text                               │
 *   └─────────────────────────────────────────┘
 *
 * Design tokens (from theme.css):
 *   Background      → var(--mono-white-100)          #ffffff
 *   Border          → var(--neutral-20)              #dfe2e7
 *   Icon bg         → var(--teal-10)                 #e0f9f7  (configurable)
 *   Checkmark bg    → var(--teal-60)                 #217c74
 *   Title           → var(--neutral-100)             #14151c  — 16px/24px SemiBold
 *   Info            → var(--neutral-60)              #696f88  — 14px/22px Regular
 *   Chevron         → var(--neutral-100)             #14151c
 */

import React from "react";
import Check from "../../icons/design/Check";
import KeyboardArrowRight from "../../icons/design/KeyboardArrowRight";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ListItemRecentProps {
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
  /** Called when the card is pressed. */
  onClick?: () => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ListItemRecent({
  icon,
  iconBgColor = "var(--teal-10, #e0f9f7)",
  iconColor   = "var(--teal-60, #217c74)",
  checked     = false,
  title,
  info,
  onClick,
}: ListItemRecentProps) {
  return (
    <button
      onClick={onClick}
      style={{
        // ── Card container ─────────────────────────────────────────────
        position:      "relative",
        display:       "flex",
        flexDirection: "column",
        gap:           8,
        alignItems:    "flex-start",
        width:         "100%",
        padding:       12,
        background:    "var(--mono-white-100, #ffffff)",
        border:        "1px solid var(--neutral-20, #dfe2e7)",
        borderRadius:  12,
        overflow:      "clip",
        cursor:        onClick ? "pointer" : "default",
        textAlign:     "left",
        fontFamily:    "inherit",
        boxSizing:     "border-box",
      }}
      data-name="card_lastmonitored"
      data-node-id="5188:102121"
    >
      {/* ── Infos section ─────────────────────────────────────────────── */}
      <div
        style={{
          display:       "flex",
          flexDirection: "column",
          gap:           12,
          alignItems:    "flex-start",
          justifyContent:"center",
          width:         "100%",
          flexShrink:    0,
        }}
        data-name="Infos"
        data-node-id="5188:102122"
      >
        {/* ── Header: icon row ──────────────────────────────────────────── */}
        {icon != null && (
          <div
            style={{
              display:        "flex",
              alignItems:     "center",
              justifyContent: "space-between",
              width:          "100%",
              flexShrink:     0,
            }}
            data-name="Header"
            data-node-id="5188:102123"
          >
            <div
              style={{
                display:     "flex",
                alignItems:  "center",
                flex:        "1 0 0",
                minWidth:    0,
                minHeight:   1,
              }}
              data-node-id="5188:102124"
            >
              <div
                style={{
                  display:      "flex",
                  alignItems:   "center",
                  padding:      3,
                  background:   iconBgColor,
                  borderRadius: 8,
                  flexShrink:   0,
                  color:        iconColor,
                }}
                data-node-id="5188:102125"
              >
                {icon}
              </div>
            </div>
          </div>
        )}

        {/* ── Text section ──────────────────────────────────────────────── */}
        <div
          style={{
            display:       "flex",
            flexDirection: "column",
            alignItems:    "flex-start",
            width:         "100%",
            flexShrink:    0,
          }}
          data-node-id="5188:102127"
        >
          {/* Title row */}
          <div
            style={{ display: "flex", alignItems: "center" }}
            data-name="Name"
            data-node-id="5188:102128"
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
              data-node-id="5188:102129"
            >
              {title}
            </span>

            {/* Chevron right */}
            <KeyboardArrowRight
              size={18}
              style={{ flexShrink: 0, color: "var(--neutral-100, #14151c)" }}
              data-node-id="5188:102130"
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
              data-node-id="5188:102131"
            >
              {info}
            </span>
          )}
        </div>
      </div>

      {/* ── Checkmark badge (absolute, top-right of icon) ───────────── */}
      {checked && (
        <div
          style={{
            position:     "absolute",
            top:          6,
            left:         29,
            display:      "flex",
            alignItems:   "center",
            padding:      2,
            background:   "var(--teal-60, #217c74)",
            border:       "1px solid var(--mono-white-100, #ffffff)",
            borderRadius: 56,
            color:        "var(--mono-white-100, #ffffff)",
          }}
          data-node-id="5188:102134"
        >
          <Check size={12} />
        </div>
      )}
    </button>
  );
}

export default ListItemRecent;
