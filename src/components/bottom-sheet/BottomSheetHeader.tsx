/**
 * BottomSheetHeader — Header mixin
 *
 * Figma source: https://www.figma.com/design/AnqFoDnF8mDF6RWwrVW9rR/Figma-Make-Components?node-id=165-3560
 * Nodes:
 *   Light / open   → 165:3919  bg-white  h-76  drag handle + label
 *   Light / closed → 165:3921  bg-white  h-24  drag handle only
 *   Dark  / open   → 165:3929  bg-#14151c h-76  drag handle + label (light text)
 *   Dark  / closed → 165:3934  bg-#14151c h-24  drag handle only
 *
 * Structure (open):
 *   ┌──────────────────────────────────┐  h-76 bg
 *   │           ━━━━━━━━━              │  drag handle 44×4 neutral-20 mt-8
 *   │      Customize content           │  14px/20px semibold  gap-24 from handle
 *   └──────────────────────────────────┘
 *
 * Structure (closed):
 *   ┌─ ━━━━━━━━━ ─────────────────────┐  h-24 bg, drag handle centered, divider at bottom
 *   └──────────────────────────────────┘
 *
 * Tokens:
 *   Light bg   → var(--mono-white-100)
 *   Dark  bg   → var(--neutral-100)     #14151C
 *   Drag handle → var(--neutral-20)     #DFE2E7
 *   Label light → var(--text-default-none-primary)  neutral-100
 *   Label dark  → var(--neutral-10)     #F3F4F6
 */

import React from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BottomSheetHeaderProps {
  /** open — drag handle + label; closed — drag handle only */
  state?: "open" | "closed";
  /** light or dark background theme */
  theme?: "light" | "dark";
  /** Label shown in `open` state. Default: "Customize content" */
  label?: string;
  /** Optional additional style for the container */
  style?: React.CSSProperties;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function BottomSheetHeader({
  state = "open",
  theme = "light",
  label = "Customize content",
  style,
}: BottomSheetHeaderProps) {
  const isClosed = state === "closed";
  const isDark = theme === "dark";

  return (
    <div
      style={{
        backgroundColor: isDark ? "var(--neutral-100)" : "var(--fill-default-none-primary)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: isClosed ? "center" : "flex-start",
        height: isClosed ? 24 : 76,
        paddingTop: isClosed ? 0 : 8,
        width: "100%",
        gap: isClosed ? 0 : 24,
        boxSizing: "border-box",
        position: "relative",
        ...style,
      }}
    >
      {/* Drag handle */}
      <div
        style={{
          width: 44,
          height: 4,
          borderRadius: 4,
          backgroundColor: "var(--ds-drag-handle)",
          flexShrink: 0,
        }}
      />

      {/* Label — open state only */}
      {!isClosed && (
        <span
          style={{
            fontFamily: "var(--font-family-primary)",
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "20px",
            letterSpacing: "-0.105px",
            color: isDark ? "var(--neutral-10)" : "var(--text-default-none-primary)",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
      )}

      {/* Bottom separator line — closed state only */}
      {isClosed && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 1,
            backgroundColor: "var(--ds-divider)",
          }}
        />
      )}
    </div>
  );
}
