// ─── Navbar / Mobile / iOS — Topbar ──────────────────────────────────────────
// Figma source: "Figma Make Components" › Page "04 - Navbar" › "Top bar"
// Variants: OS (old | notch) × Colour × Display bar × Search bar × Size
//
// Design tokens → /src/theme/theme.css
//   --neutral-00: #FFFFFF   --neutral-10: #F3F4F6   --neutral-20: #DFE2E7
//   --neutral-40: #A3A9B9   --neutral-50: #868CA2   --neutral-60: #696F88
//   --neutral-70: #4D5165   --neutral-80: #363948   --neutral-100: #14151C
//
// Typography: "Noto Sans" SemiBold 16/24px (title), Regular 14/22px, 12/20px
// Icons: inline SVG — Material Design paths

import React from "react";

import { Add, KeyboardArrowLeft, KeyboardArrowDown, Search, CancelClear, Farm } from "../../../../icons";

// ─── Icons ────────────────────────────────────────────────────────────────────
function ChevronLeftIcon({ color }: { color: string }) {
  return <KeyboardArrowLeft size={24} style={{ color, flexShrink: 0, display: "block" }} aria-hidden />;
}

function AddIcon({ color }: { color: string }) {
  return <Add size={24} style={{ color, flexShrink: 0, display: "block" }} aria-hidden />;
}

function SearchIcon({ color }: { color: string }) {
  return <Search size={18} style={{ color, flexShrink: 0, display: "block" }} aria-hidden />;
}

function CancelCircleIcon({ color }: { color: string }) {
  return <CancelClear size={18} style={{ color, flexShrink: 0, display: "block" }} aria-hidden />;
}

function ExpandMoreIcon({ color }: { color: string }) {
  return <KeyboardArrowDown size={24} style={{ color, flexShrink: 0, display: "block" }} aria-hidden />;
}

function HouseIcon({ color }: { color: string }) {
  return <Farm size={24} style={{ color, flexShrink: 0, display: "block" }} aria-hidden />;
}

// ─── iOS old (≤ iPhone 8) Status Bar — 20px ──────────────────────────────────
// Left: signal + wifi   Center: time   Right: battery
function IosNoNotchStatusBar({
  colour,
  time = "1:20 PM",
}: {
  colour: "light" | "dark";
  time?: string;
}) {
  const fg = colour === "dark" ? "var(--mono-white-100)" : "var(--mono-black-100)";

  return (
    <div
      style={{ position: "relative", height: 20 }}
      data-name="status bars/≤-iphone-8"
    >
      {/* Signal bars — left */}
      <div
        style={{
          position: "absolute",
          left: 4,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          alignItems: "flex-end",
          gap: 1,
        }}
      >
        <svg width="21" height="14" viewBox="0 0 21 14" fill="none" aria-hidden="true">
          {/* 4 ascending bars */}
          <rect x="0"  y="9"  width="3" height="5"  rx="0.5" fill={fg} />
          <rect x="4"  y="6"  width="3" height="8"  rx="0.5" fill={fg} />
          <rect x="8"  y="3"  width="3" height="11" rx="0.5" fill={fg} />
          <rect x="12" y="0"  width="3" height="14" rx="0.5" fill={fg} />
        </svg>
      </div>

      {/* Wifi — left (after signal) */}
      <div
        style={{
          position: "absolute",
          left: 29,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" aria-hidden="true">
          <path d="M7.5 3c-2.07 0-3.94.84-5.3 2.2L0.9 3.9C2.6 2.17 4.93 1.1 7.5 1.1s4.9 1.07 6.6 2.8L12.8 5.2C11.44 3.84 9.57 3 7.5 3z" fill={fg} />
          <path d="M7.5 5.5c-1.3 0-2.48.53-3.34 1.38L2.8 5.52A6.15 6.15 0 0 1 7.5 3.5a6.15 6.15 0 0 1 4.7 2.02L10.84 6.88A3.73 3.73 0 0 0 7.5 5.5z" fill={fg} />
          <path d="M7.5 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" fill={fg} />
        </svg>
      </div>

      {/* Time — center */}
      <span
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "var(--font-family-body)",
          fontWeight: "var(--font-weight-bold)",
          fontSize: 12,
          color: fg,
          lineHeight: "normal",
          whiteSpace: "nowrap",
        }}
      >
        {time}
      </span>

      {/* Battery — right */}
      <div
        style={{
          position: "absolute",
          right: 3,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none" aria-hidden="true">
          <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke={fg} strokeOpacity="0.35" />
          <rect x="2" y="2" width="17" height="8" rx="2" fill={fg} />
          <path d="M23 4v4" stroke={fg} strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

// ─── iOS with Notch (iPhone X+) Status Bar — 44px ────────────────────────────
// Left: time   Right: signal + wifi + battery
function IosNotchStatusBar({
  colour,
  time = "9:41",
}: {
  colour: "light" | "dark";
  time?: string;
}) {
  const fg = colour === "dark" ? "var(--mono-white-100)" : "var(--mono-black-100)";

  return (
    <div
      style={{ position: "relative", height: 44 }}
      data-name="status bars/iphone-x-notch"
    >
      {/* Time — left */}
      <span
        style={{
          position: "absolute",
          left: 24,
          top: "50%",
          transform: "translateY(0%)",
          marginTop: 4,
          fontFamily: "var(--font-family-body)",
          fontWeight: "var(--font-weight-bold)",
          fontSize: 15,
          color: fg,
          lineHeight: "normal",
          whiteSpace: "nowrap",
        }}
      >
        {time}
      </span>

      {/* Right cluster: signal + wifi + battery */}
      <div
        style={{
          position: "absolute",
          right: 14,
          top: "50%",
          transform: "translateY(0%)",
          marginTop: 2,
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        {/* Signal */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
          <rect x="0"  y="8"  width="3" height="4"  rx="0.5" fill={fg} />
          <rect x="4"  y="5"  width="3" height="7"  rx="0.5" fill={fg} />
          <rect x="8"  y="2"  width="3" height="10" rx="0.5" fill={fg} />
          <rect x="12" y="0"  width="3" height="12" rx="0.5" fill={fg} fillOpacity="0.35" />
        </svg>

        {/* Wifi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
          <path d="M8 2.67c-2.21 0-4.21.9-5.67 2.36L1.07 3.76C2.87 1.76 5.29.67 8 .67s5.13 1.09 6.93 3.09L13.67 5c-1.46-1.46-3.46-2.33-5.67-2.33z" fill={fg} />
          <path d="M8 5.33c-1.47 0-2.8.6-3.77 1.57L3.07 5.73C4.37 4.42 6.1 3.6 8 3.6s3.63.82 4.93 2.13l-1.16 1.17C10.8 5.93 9.47 5.33 8 5.33z" fill={fg} />
          <path d="M8 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" fill={fg} />
        </svg>

        {/* Battery */}
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none" aria-hidden="true">
          <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke={fg} strokeOpacity="0.35" />
          <rect x="2" y="2" width="17" height="8" rx="2" fill={fg} />
          <path d="M23 4v4" stroke={fg} strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

// ─── Search Bar Row ───────────────────────────────────────────────────────────
function SearchBarRow({ colour }: { colour: "light" | "dark" }) {
  const isLight  = colour === "light";
  const inputBg  = isLight ? "var(--neutral-10)" : "var(--neutral-90)";
  const iconFg   = isLight ? "var(--neutral-60)" : "var(--neutral-50)";
  const placeholder = isLight ? "var(--neutral-40)" : "var(--neutral-50)";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flex: 1,
        height: 40,
        backgroundColor: inputBg,
        borderRadius: 4,
        padding: "0 8px 0 12px",
        gap: 8,
      }}
      data-name="search-bar"
    >
      <SearchIcon color={iconFg} />
      <span
        style={{
          flex: 1,
          fontFamily: "var(--font-family-body)",
          fontWeight: "var(--font-weight-regular)",
          fontSize: 14,
          color: placeholder,
          letterSpacing: "-0.105px",
          lineHeight: "22px",
        }}
      >
        Search...
      </span>
      <CancelCircleIcon color={iconFg} />
    </div>
  );
}

// ─── Display Navigation Panel ─────────────────────────────────────────────────
function DisplayNavPanel({
  colour,
  title,
  subtitle,
}: {
  colour: "light" | "dark";
  title: string;
  subtitle: string;
}) {
  const isLight    = colour === "light";
  const cardBg     = isLight ? "var(--mono-white-100)" : "var(--neutral-70)";
  const titleFg    = isLight ? "var(--neutral-100)" : "var(--mono-white-100)";
  const subtitleFg = isLight ? "var(--neutral-70)" : "var(--neutral-40)";
  const avatarBg   = isLight ? "var(--neutral-10)" : "var(--neutral-80)";
  const avatarBorder = isLight ? "var(--neutral-20)" : "transparent";
  const iconFg     = isLight ? "var(--neutral-60)" : "var(--neutral-40)";

  return (
    <div
      style={{
        position: "absolute",
        top: "calc(50% + 64px)",
        transform: "translateY(-50%)",
        left: "4.27%",  // ~16px of 375
        right: "4.27%",
        height: 64,
        backgroundColor: cardBg,
        borderRadius: 8,
        boxShadow: "0px 4px 12px 0px rgba(0,0,0,0.15)",
        display: "flex",
        alignItems: "center",
        zIndex: 1,
      }}
      data-name="Display navigation"
    >
      {/* Avatar */}
      <div
        style={{
          position: "absolute",
          left: 12,
          top: "50%",
          transform: "translateY(-50%)",
          width: 48,
          height: 48,
          borderRadius: 48,
          backgroundColor: avatarBg,
          border: `1px solid ${avatarBorder}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <HouseIcon color={iconFg} />
      </div>

      {/* Text */}
      <div
        style={{
          position: "absolute",
          left: 68,
          top: "50%",
          transform: "translateY(-50%)",
          width: "calc(100% - 68px - 40px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-family-body)",
            fontWeight: "var(--font-weight-regular)",
            fontSize: 12,
            color: titleFg,
            letterSpacing: "-0.09px",
            lineHeight: "20px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontFamily: "var(--font-family-body)",
            fontWeight: "var(--font-weight-regular)",
            fontSize: 14,
            color: subtitleFg,
            letterSpacing: "-0.105px",
            lineHeight: "22px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {subtitle}
        </span>
      </div>

      {/* Expand more */}
      <div
        style={{
          position: "absolute",
          right: 8,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ExpandMoreIcon color={iconFg} />
      </div>
    </div>
  );
}

// ─── Props ────────────────────────────────────────────────────────────────────
export interface IosNavBarProps {
  /** Colour scheme · matches Figma prop "Colour" */
  mode?: "light" | "dark";
  /** iOS device type · true = iPhone X+ (notch, 44pt status bar) */
  hasNotch?: boolean;
  /** Show the display-navigation panel below the bar · Figma "Display bar" */
  displayBar?: boolean;
  /** Show search bar instead of back/title/actions · Figma "Search bar" */
  searchBar?: boolean;
  /** Topbar height variant · Figma "Topbar (default size)" vs "(large size)" */
  size?: "default" | "large";
  /** Title text shown in the center of the bar */
  title?: string;
  /** Subtitle shown inside the display panel (requires displayBar=true) */
  subtitle?: string;
  /** Clock string shown in the status bar */
  time?: string;
  /** Callback for the back (chevron left) button */
  onBack?: () => void;
  /** Callback for right-side action buttons */
  onAction?: () => void;
}

/**
 * iOS Topbar
 *
 * Implements all Figma variants from "04 - Navbar › Top bar":
 *   OS         : iOS (old, ≤ iPhone 8) | iOS w/ notch (iPhone X+)
 *   Colour     : light | dark
 *   Display bar: yes | no
 *   Search bar : yes | no
 *   Size       : default | large
 *
 * ```tsx
 * <IosNavBar mode="light" title="My Page" />
 * <IosNavBar mode="dark" hasNotch title="Home" displayBar subtitle="My Farm" />
 * <IosNavBar mode="light" hasNotch searchBar />
 * ```
 */
export const IosNavBar: React.FC<IosNavBarProps> = ({
  mode = "light",
  hasNotch = false,
  displayBar = false,
  searchBar = false,
  size = "default",
  title = "Title",
  subtitle = "Subtitle",
  time,
  onBack,
  onAction,
}) => {
  const colour = mode; // alias to match Figma naming
  const isLight = mode === "light";

  // Figma height values for iOS:
  //   old, no display         : 84px  (status 20 + content 64)
  //   old, display            : 104px (status 20 + content 64 + display extends below)
  //   notch, no display       : 88px  (status 44 + content 44)
  //   notch, display          : 120px (status 44 + content 60 + display extends below)
  //   large size adds ~4px to content
  const statusH  = hasNotch ? 44 : 20;
  const contentH = hasNotch
    ? (size === "default" ? 44 : 48)
    : (size === "default" ? 64 : 68);
  const totalH   = statusH + contentH + (displayBar ? 16 : 0);

  const defaultTime = hasNotch ? "9:41" : "1:20 PM";

  const bg          = isLight ? "var(--mono-white-100)" : "var(--neutral-80)";
  const iconColor   = isLight ? "var(--neutral-100)" : "var(--mono-white-100)";
  const titleColor  = isLight ? "var(--neutral-100)" : "var(--mono-white-100)";
  const borderColor = isLight ? "var(--neutral-20)" : "transparent";

  // Icon center fixed per Figma: old=60px from top (125:4145 top-[57.14%] of 84px),
  // notch=66px (125:4172 top-[calc(50%+22px)] of 88px).
  const iconCenter = hasNotch ? 66 : 60;
  const iconTopOffset = iconCenter - totalH / 2;

  return (
    <div
      style={{
        position: "relative",
        width: 375,
        height: totalH,
        backgroundColor: bg,
        borderBottom: `1px solid ${borderColor}`,
        overflow: "visible",
      }}
      data-name={`IosNavBar/Mode=${mode}/Notch=${hasNotch}/Display bar=${displayBar}/Search bar=${searchBar}/Size=${size}`}
    >
      {/* ── Status bar ──────────────────────────────────────────────── */}
      {hasNotch ? (
        <IosNotchStatusBar colour={colour} time={time ?? defaultTime} />
      ) : (
        <IosNoNotchStatusBar colour={colour} time={time ?? defaultTime} />
      )}

      {/* ── Main navigation row ─────────────────────────────────────── */}
      {searchBar ? (
        /* Search bar mode: search bar fills available width + Cancel text on right */
        <div
          style={{
            position: "absolute",
            left: 16,
            right: 16,
            top: `calc(50% + ${iconTopOffset}px)`,
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <SearchBarRow colour={colour} />
          <button
            onClick={onBack}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, flexShrink: 0 }}
            aria-label="Cancel"
          >
            <span
              style={{
                fontFamily: "var(--font-family-body)",
                fontWeight: "var(--font-weight-regular)",
                fontSize: size === "large" ? 16 : 14,
                color: isLight ? "var(--neutral-60)" : "var(--neutral-40)",
                letterSpacing: size === "large" ? "-0.12px" : "-0.105px",
                lineHeight: size === "large" ? "24px" : "22px",
                whiteSpace: "nowrap",
              }}
            >
              Cancel
            </span>
          </button>
        </div>
      ) : (
        /* Default mode — absolutely positioned matching Figma (125:4145 / 125:4172) exactly */
        <>
          {/* Chevron left — left:16px */}
          <button
            onClick={onBack}
            style={{ position: "absolute", left: 16, top: `calc(50% + ${iconTopOffset}px)`, transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}
            aria-label="Voltar"
          >
            <ChevronLeftIcon color={iconColor} />
          </button>

          {/* Secondary action — left:60px */}
          <button
            onClick={onAction}
            style={{ position: "absolute", left: 60, top: `calc(50% + ${iconTopOffset}px)`, transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}
            aria-label="Ação"
          >
            <AddIcon color={iconColor} />
          </button>

          {/* Title — left:24.53% / right:24.53% of 375px ≈ 92px each side */}
          <div
            style={{ position: "absolute", left: "24.53%", right: "24.53%", top: `calc(50% + ${iconTopOffset}px)`, transform: "translateY(-50%)", textAlign: "center" }}
          >
            <span
              style={{
                fontFamily: "var(--font-family-body)",
                fontWeight: "var(--font-weight-bold)",
                fontSize: 16,
                color: titleColor,
                letterSpacing: "-0.12px",
                lineHeight: "24px",
              }}
            >
              {title}
            </span>
          </div>

          {/* Secondary action — right:60px */}
          <button
            onClick={onAction}
            style={{ position: "absolute", right: 60, top: `calc(50% + ${iconTopOffset}px)`, transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}
            aria-label="Ação"
          >
            <AddIcon color={iconColor} />
          </button>

          {/* Primary action — right:16px */}
          <button
            onClick={onAction}
            style={{ position: "absolute", right: 16, top: `calc(50% + ${iconTopOffset}px)`, transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}
            aria-label="Ação"
          >
            <AddIcon color={iconColor} />
          </button>
        </>
      )}

      {/* ── Display navigation panel (extends below bar) ────────────── */}
      {displayBar && (
        <DisplayNavPanel colour={colour} title={title} subtitle={subtitle} />
      )}
    </div>
  );
};

export default IosNavBar;

