// ─── Navbar / Mobile / Android — Topbar ──────────────────────────────────────
// Figma source: "Figma Make Components" › Page "04 - Navbar" › "Top bar"
// Variants: Colour × Display bar × Search bar × Size
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

// ─── Android Status Bar (24dp) ────────────────────────────────────────────────
function AndroidStatusBarInline({
  colour,
  time = "12:30",
}: {
  colour: "light" | "dark";
  time?: string;
}) {
  const fg = colour === "dark" ? "var(--mono-white-100)" : "var(--neutral-50)";

  return (
    <div
      style={{ position: "relative", height: 24 }}
      data-name="status bars/android"
    >
      {/* Time — right side */}
      <span
        style={{
          position: "absolute",
          right: 8,
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-family-body)",
          fontWeight: 400,
          fontSize: 13,
          color: fg,
          opacity: 0.9,
          lineHeight: "normal",
          whiteSpace: "nowrap",
        }}
      >
        {time}
      </span>

      {/* Icons cluster: wifi + signal + battery */}
      <div
        style={{
          position: "absolute",
          right: 50,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Wifi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
          <path d="M8 2C5.33 2 2.93 3.09 1.17 4.87L0 3.67C2.07 1.4 5.48 0 9.34 0" fill="none" />
          <path d="M8 2.67c-2.21 0-4.21.9-5.67 2.36L1.07 3.76C2.87 1.76 5.29.67 8 .67s5.13 1.09 6.93 3.09L13.67 5c-1.46-1.46-3.46-2.33-5.67-2.33z" fill={fg} fillOpacity="0.9" />
          <path d="M8 5.33c-1.47 0-2.8.6-3.77 1.57L3.07 5.73C4.37 4.42 6.1 3.6 8 3.6s3.63.82 4.93 2.13l-1.16 1.17C10.8 5.93 9.47 5.33 8 5.33z" fill={fg} fillOpacity="0.9" />
          <path d="M8 8a1.99 1.99 0 0 0-1.42.59L8 11.33l1.42-2.74A1.99 1.99 0 0 0 8 8z" fill={fg} fillOpacity="0.9" />
        </svg>

        {/* Signal (4 bars, ascending) */}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <rect x="0" y="9" width="2" height="3" fill={fg} fillOpacity="0.9" />
          <rect x="3" y="6" width="2" height="6" fill={fg} fillOpacity="0.9" />
          <rect x="6" y="3" width="2" height="9" fill={fg} fillOpacity="0.9" />
          <rect x="9" y="0" width="2" height="12" fill={fg} fillOpacity="0.9" />
        </svg>

        {/* Battery */}
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true">
          <rect x="0.5" y="0.5" width="11" height="7" rx="1.5" stroke={fg} strokeOpacity="0.9" />
          <rect x="2" y="1.5" width="8" height="5" rx="0.5" fill={fg} fillOpacity="0.9" />
          <path d="M12.5 2.5v3" stroke={fg} strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

// ─── Search Bar Row ───────────────────────────────────────────────────────────
function SearchBarRow({ colour }: { colour: "light" | "dark" }) {
  const isLight = colour === "light";
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
          fontWeight: 400,
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
// Positioned absolutely — extends below the bar, centered at calc(50%+64px) from top.
// Matches Figma node "Display navigation" (125:4090).
function DisplayNavPanel({
  colour,
  title,
  subtitle,
}: {
  colour: "light" | "dark";
  title: string;
  subtitle: string;
}) {
  const isLight  = colour === "light";
  const cardBg   = isLight ? "var(--mono-white-100)" : "var(--neutral-70)";
  const titleFg  = isLight ? "var(--neutral-100)" : "var(--mono-white-100)";
  const subtitleFg = isLight ? "var(--neutral-70)" : "var(--neutral-40)";
  const avatarBg = isLight ? "var(--neutral-10)" : "var(--neutral-80)";
  const avatarBorder = isLight ? "var(--neutral-20)" : "transparent";
  const iconFg   = isLight ? "var(--neutral-60)" : "var(--neutral-40)";

  return (
    <div
      style={{
        position: "absolute",
        // Matches Figma: top-[calc(50%+64px)] with -translate-y-1/2
        // For 96px height: 50%=48, +64=112, -50% of 64=32 → net top=80px
        top: "calc(50% + 64px)",
        transform: "translateY(-50%)",
        left: "4.44%",  // ~16px
        right: "4.44%", // ~16px
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
          gap: 0,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-family-body)",
            fontWeight: 400,
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
            fontWeight: 400,
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
export interface AndroidNavBarProps {
  /** Colour scheme · matches Figma prop "Colour" */
  colour?: "light" | "dark";
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
  /** Clock string shown in the Android status bar */
  time?: string;
  /** Callback for the back (chevron left) button */
  onBack?: () => void;
  /** Callback for right-side action buttons */
  onAction?: () => void;
}

/**
 * Android Topbar
 *
 * Implements all Figma variants from "04 - Navbar › Top bar":
 *   Colour     : light | dark
 *   Display bar: yes | no
 *   Search bar : yes | no
 *   Size       : default (80px) | large (84px)
 *
 * ```tsx
 * <AndroidNavBar colour="light" title="My Page" />
 * <AndroidNavBar colour="dark" displayBar title="Home" subtitle="My Farm" />
 * <AndroidNavBar colour="light" searchBar />
 * ```
 */
export const AndroidNavBar: React.FC<AndroidNavBarProps> = ({
  colour = "light",
  displayBar = false,
  searchBar = false,
  size = "default",
  title = "Title",
  subtitle = "Subtitle",
  time = "12:30",
  onBack,
  onAction,
}) => {
  const isLight = colour === "light";

  // Figma height values:
  //   default, no display  → 80px  (status 24 + content 56)
  //   default, display     → 96px  (status 24 + content 56 + panel extends below)
  //   large,   no display  → 84px  (status 24 + content 60)
  //   large,   display     → 100px (status 24 + content 60 + panel extends below)
  const contentH = size === "default" ? 56 : 60;
  const totalH   = 24 + contentH + (displayBar ? 16 : 0);

  const bg          = isLight ? "var(--mono-white-100)" : "var(--neutral-80)";
  const iconColor   = isLight ? "var(--neutral-100)" : "var(--mono-white-100)";
  const titleColor  = isLight ? "var(--neutral-100)" : "var(--mono-white-100)";
  const borderColor = isLight ? "var(--neutral-20)" : "transparent";

  // Nav icons are vertically centered in the content area.
  // Figma: top-[calc(50%+12px)] for 80px bar → (50% of 80=40) + 12 = 52 = center of content
  // Figma: top-[calc(50%+4px)] for 96px bar  → (50% of 96=48) + 4  = 52 = same absolute
  const iconTopOffset = displayBar ? 4 : 12;

  return (
    <div
      style={{
        position: "relative",
        width: 360,
        height: totalH,
        backgroundColor: bg,
        borderBottom: `1px solid ${borderColor}`,
        overflow: "visible",
      }}
      data-name={`AndroidNavBar/Colour=${colour}/Display bar=${displayBar}/Search bar=${searchBar}/Size=${size}`}
    >
      {/* ── Status bar ──────────────────────────────────────────────── */}
      <AndroidStatusBarInline colour={colour} time={time} />

      {/* ── Main navigation row ─────────────────────────────────────── */}
      {searchBar ? (
        /* Search bar mode — chevron left + search bar starting at left:52px (w:292px) */
        <div
          style={{
            position: "absolute",
            left: 16,
            right: 16,
            top: `calc(50% + ${iconTopOffset}px)`,
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            onClick={onBack}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", flexShrink: 0 }}
            aria-label="Voltar"
          >
            <ChevronLeftIcon color={iconColor} />
          </button>
          <div style={{ flex: 1, marginLeft: 12 }}>
            <SearchBarRow colour={colour} />
          </div>
        </div>
      ) : (
        /* Default mode — absolutely positioned matching Figma (125:4091) exactly */
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

          {/* Title — left:25.56% / right:25.56% of 360px ≈ 92px each side */}
          <div
            style={{ position: "absolute", left: "25.56%", right: "25.56%", top: `calc(50% + ${iconTopOffset}px)`, transform: "translateY(-50%)", textAlign: "center" }}
          >
            <span
              style={{
                fontFamily: "var(--font-family-body)",
                fontWeight: 600,
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

export default AndroidNavBar;


