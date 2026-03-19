// ─── Navbar / Tab Bar ────────────────────────────────────────────────────────
// Figma source: "Figma Make Components" › Page "04 - Navbar" › "Tab Bar"
// Variants: Colour (Light/Dark) × Buttons (2/3/4/5/FAB+2/FAB+4)
//
// Design tokens → /src/theme/theme.css + /src/theme/fonts.css
//   --neutral-00 (#FFFFFF)  --neutral-20 (#DFE2E7)  --neutral-50 (#868CA2)
//   --neutral-80 (#363948)  --neutral-90 (#232630)
//
// Tab item: 72×52px, icon 24px, label 10px Regular, selected dot 4px
// Active: white (dark) or green-60 (light) · Inactive: neutral-50

import React from "react";

// ─── Icon type matching project icon interface ────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IconComponent = React.ComponentType<any>;

// ─── Tab Item ─────────────────────────────────────────────────────────────────

export interface TabItemConfig {
  /** Label below the icon */
  label: string;
  /** Icon component — receives { size, style } */
  icon: IconComponent;
  /** Whether this tab is active */
  active?: boolean;
}

interface TabItemProps {
  item: TabItemConfig;
  colour: "light" | "dark";
  width: number;
  onClick?: () => void;
}

function TabItem({ item, colour, width, onClick }: TabItemProps) {
  const isLight = colour === "light";
  const isActive = item.active ?? false;

  // Figma: active → white (dark) / neutral-100 (light); inactive → neutral-50
  const activeFg = isLight ? "var(--neutral-100)" : "var(--mono-white-100)";
  const inactiveFg = "var(--neutral-50)";
  const fg = isActive ? activeFg : inactiveFg;

  // Selected dot: 4px circle, same colour as active fg
  const dotBg = isActive ? (isLight ? "var(--green-60)" : "var(--mono-white-100)") : "transparent";

  return (
    <button
      onClick={onClick}
      style={{
        position: "relative",
        width,
        height: 52,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 6,
        gap: 1,
        background: "none",
        border: "none",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      {/* Icon 24×24 */}
      <div style={{ width: 24, height: 24, flexShrink: 0 }}>
        {React.createElement(item.icon, {
          size: 24,
          style: { color: fg, display: "block" },
        })}
      </div>

      {/* Label — font: Noto Sans Regular 10/12px, tracking -0.075px */}
      <span
        style={{
          fontFamily: "var(--font-family-body)",
          fontWeight: "var(--font-weight-regular)",
          fontSize: 10,
          lineHeight: "12px",
          letterSpacing: "-0.075px",
          color: fg,
          textAlign: "center",
          width: 72,
          height: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {item.label}
      </span>

      {/* Selected dot — 4×4 circle */}
      <div
        style={{
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: dotBg,
          flexShrink: 0,
        }}
      />
    </button>
  );
}

// ─── FAB Button ───────────────────────────────────────────────────────────────
// Floating Action Button in the center of the tab bar

interface FABButtonProps {
  icon: IconComponent;
  colour: "light" | "dark";
  onClick?: () => void;
}

function FABButton({ icon, colour, onClick }: FABButtonProps) {
  const isLight = colour === "light";
  const bg = isLight ? "var(--green-60)" : "var(--green-50)";

  return (
    <button
      onClick={onClick}
      style={{
        position: "relative",
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: bg,
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        marginTop: -8,
      }}
    >
      {React.createElement(icon, {
        size: 24,
        style: { color: "var(--mono-white-100)", display: "block" },
      })}
    </button>
  );
}

// ─── Props ────────────────────────────────────────────────────────────────────

export interface TabBarProps {
  /** Colour scheme · matches Figma prop "Colour" */
  colour?: "light" | "dark";
  /** Tab items to display */
  items: TabItemConfig[];
  /** FAB (Floating Action Button) configuration — adds a centered FAB */
  fab?: {
    icon: IconComponent;
    onClick?: () => void;
  };
  /** Callback when a tab item is clicked, receives the index */
  onTabClick?: (index: number) => void;
  /** Width of the bar — Figma: 360px (Android) or 375px (iOS) */
  width?: number;
}

/**
 * Tab Bar
 *
 * Implements all Figma variants from "04 - Navbar › Tab Bar":
 *   Colour  : light | dark
 *   Buttons : 2 / 3 / 4 / 5 (determined by items array length)
 *   FAB     : optional floating action button in center
 *
 * ```tsx
 * <TabBar colour="dark" items={[{ label: "Home", icon: Home, active: true }, ...]} />
 * <TabBar colour="light" items={tabs} fab={{ icon: Add }} />
 * ```
 */
export const TabBar: React.FC<TabBarProps> = ({
  colour = "dark",
  items,
  fab,
  onTabClick,
  width = 360,
}) => {
  const isLight = colour === "light";
  const bg = isLight ? "var(--mono-white-100)" : "var(--neutral-80)";
  const dividerColor = isLight ? "var(--neutral-20)" : "var(--neutral-90)";

  // Calculate item width: distribute equally across the bar width
  const totalItems = items.length + (fab ? 1 : 0);
  const itemWidth = width / totalItems;

  return (
    <div
      style={{
        position: "relative",
        width,
        height: 52,
        backgroundColor: bg,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
      data-name={`TabBar/Colour=${colour}/Buttons=${items.length}${fab ? "+FAB" : ""}`}
    >
      {/* Top divider — 1px */}
      <div
        style={{
          position: "absolute",
          top: -1,
          left: 0,
          right: 0,
          height: 1,
          backgroundColor: dividerColor,
        }}
        data-name="divider"
      />

      {/* Tab items — distributed evenly */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        {fab ? (
          // With FAB: items split left and right, FAB in center
          <>
            {/* Left items */}
            {items.slice(0, Math.ceil(items.length / 2)).map((item, i) => (
              <TabItem
                key={i}
                item={item}
                colour={colour}
                width={itemWidth}
                onClick={() => onTabClick?.(i)}
              />
            ))}
            {/* FAB center */}
            <div
              style={{
                width: itemWidth,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FABButton icon={fab.icon} colour={colour} onClick={fab.onClick} />
            </div>
            {/* Right items */}
            {items.slice(Math.ceil(items.length / 2)).map((item, i) => {
              const idx = Math.ceil(items.length / 2) + i;
              return (
                <TabItem
                  key={idx}
                  item={item}
                  colour={colour}
                  width={itemWidth}
                  onClick={() => onTabClick?.(idx)}
                />
              );
            })}
          </>
        ) : (
          // Without FAB: all items distributed evenly
          items.map((item, i) => (
            <TabItem
              key={i}
              item={item}
              colour={colour}
              width={itemWidth}
              onClick={() => onTabClick?.(i)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TabBar;
