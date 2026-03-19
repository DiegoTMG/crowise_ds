// ─── Navbar / Quick Actions ──────────────────────────────────────────────────
// Figma source: "Figma Make Components" › Page "04 - Navbar" › "Quick actions"
// Variants: Colour (Light/Dark) × OS (iOS/Android)
//
// Design tokens → /src/theme/theme.css + /src/theme/fonts.css
//   --neutral-80 (#363948)  --neutral-90 (#232630)  --neutral-100 (#14151C)
//   --neutral-30 (#C2C7D0)  --mono-white-100 (#FFFFFF)
//   --purple-10  --blue-10  --green-10  --red-10  --yellow-10
//   --orange-10  --pink-10  --teal-10
//
// Container: roundedTL/TR 12px, shadow, padding 12px H / 8px T / 12px B
// Grab handle: 4px height, centered line
// Title: SemiBold 16/24px
// Action items: 108×100px, r8, circle icon (48px) + label 12px

import React from "react";

// ─── Icon type matching project icon interface ────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IconComponent = React.ComponentType<any>;

// ─── Color mapping ───────────────────────────────────────────────────────────

export type ActionColor =
  | "purple"
  | "blue"
  | "green"
  | "red"
  | "yellow"
  | "orange"
  | "pink"
  | "teal"
  | "neutral";

const CIRCLE_BG: Record<ActionColor, string> = {
  purple:  "var(--purple-10)",
  blue:    "var(--blue-10)",
  green:   "var(--green-10)",
  red:     "var(--red-10)",
  yellow:  "var(--yellow-10)",
  orange:  "var(--orange-10)",
  pink:    "var(--pink-10)",
  teal:    "var(--teal-10)",
  neutral: "var(--neutral-10)",
};

const ICON_FG: Record<ActionColor, string> = {
  purple:  "var(--purple-50)",
  blue:    "var(--blue-50)",
  green:   "var(--green-50)",
  red:     "var(--red-50)",
  yellow:  "var(--yellow-50)",
  orange:  "var(--orange-50)",
  pink:    "var(--pink-50)",
  teal:    "var(--teal-50)",
  neutral: "var(--neutral-60)",
};

// ─── Action Item Config ───────────────────────────────────────────────────────

export interface ActionItemConfig {
  /** Label text below the icon */
  label: string;
  /** Icon component — receives { size, style } */
  icon: IconComponent;
  /** Circle background color family */
  color: ActionColor;
  /** Click handler */
  onClick?: () => void;
}

// ─── Action Item ──────────────────────────────────────────────────────────────

interface ActionItemInternalProps {
  item: ActionItemConfig;
  colour: "light" | "dark";
}

function ActionItem({ item, colour }: ActionItemInternalProps) {
  const isLight = colour === "light";
  const bg = isLight ? "var(--mono-white-100)" : "var(--neutral-80)";
  const labelFg = isLight ? "var(--neutral-90)" : "var(--mono-white-100)";
  const circleBg = CIRCLE_BG[item.color];
  const iconFg = ICON_FG[item.color];

  return (
    <div
      onClick={item.onClick}
      style={{
        width: 108,
        height: 100,
        borderRadius: 8,
        backgroundColor: bg,
        overflow: "hidden",
        position: "relative",
        cursor: item.onClick ? "pointer" : "default",
        flexShrink: 0,
      }}
    >
      {/* Circle icon — centered horizontally at top:8px */}
      <div
        style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 48,
          height: 48,
          borderRadius: 32,
          backgroundColor: circleBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
        data-name="Button"
      >
        {React.createElement(item.icon, {
          size: 24,
          style: { color: iconFg, display: "block" },
        })}
      </div>

      {/* Label — centered at top:60px, SemiBold 12/16px, -0.09px */}
      <span
        style={{
          position: "absolute",
          top: 60,
          left: "50%",
          transform: "translateX(-50%)",
          width: 92,
          height: 36,
          fontFamily: "var(--font-family-body)",
          fontWeight: "var(--font-weight-bold)",
          fontSize: 12,
          lineHeight: "16px",
          letterSpacing: "-0.09px",
          color: labelFg,
          textAlign: "center",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {item.label}
      </span>
    </div>
  );
}

// ─── Grab Handle ──────────────────────────────────────────────────────────────

function GrabHandle({ colour }: { colour: "light" | "dark" }) {
  const handleColor = colour === "light" ? "var(--neutral-30)" : "var(--neutral-60)";

  return (
    <div
      style={{
        width: "100%",
        height: 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 36,
          height: 4,
          borderRadius: 2,
          backgroundColor: handleColor,
        }}
      />
    </div>
  );
}

// ─── Props ────────────────────────────────────────────────────────────────────

export interface QuickActionsProps {
  /** Colour scheme · matches Figma prop "Colour" */
  colour?: "light" | "dark";
  /** Action items to display in the grid (3 columns) */
  items: ActionItemConfig[];
  /** Width — Figma: 375px (iOS) or 360px (Android) */
  width?: number;
}

/**
 * Quick Actions
 *
 * Implements the Figma "04 - Navbar › Quick actions" component:
 *   Colour : light | dark
 *   Items  : grid of action buttons with colored circle icons
 *
 * Displays a bottom sheet with a grab handle, title, and 3-column grid.
 *
 * ```tsx
 * <QuickActions
 *   colour="light"
 *   items={[
 *     { label: "Action", icon: Apps, color: "purple" },
 *     { label: "Action", icon: Apps, color: "red" },
 *     { label: "Action", icon: Apps, color: "blue" },
 *   ]}
 * />
 * ```
 */
export const QuickActions: React.FC<QuickActionsProps> = ({
  colour = "light",
  items,
  width = 375,
}) => {
  const isLight = colour === "light";
  const bg = isLight ? "var(--mono-white-100)" : "var(--neutral-80)";
  const shadow = isLight
    ? "0px 4px 12px 0px rgba(0,0,0,0.15)"
    : "-4px 0px 12px 0px rgba(0,0,0,0.15)";
  const titleFg = isLight ? "var(--neutral-80)" : "var(--mono-white-100)";

  // Split items into rows of 3
  const rows: ActionItemConfig[][] = [];
  for (let i = 0; i < items.length; i += 3) {
    rows.push(items.slice(i, i + 3));
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: "flex-start",
        width,
        backgroundColor: bg,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        boxShadow: shadow,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 8,
        paddingBottom: 12,
      }}
      data-name={`QuickActions/Colour=${colour}`}
    >
      {/* Grab handle */}
      <GrabHandle colour={colour} />

      {/* Title — SemiBold 16/24px, -0.12px */}
      <span
        style={{
          fontFamily: "var(--font-family-body)",
          fontWeight: "var(--font-weight-bold)",
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.12px",
          color: titleFg,
          whiteSpace: "nowrap",
        }}
      >
        Quick actions
      </span>

      {/* Grid rows */}
      {rows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "100%",
            flex: 1,
          }}
          data-name="Line"
        >
          {row.map((item, colIdx) => (
            <ActionItem
              key={colIdx}
              item={item}
              colour={colour}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default QuickActions;
