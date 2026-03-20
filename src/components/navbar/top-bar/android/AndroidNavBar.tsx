// ─── Navbar / Mobile / Android — Topbar ──────────────────────────────────────
// Figma source: "Figma Make Components" › Page "04 - Navbar" › "Top bar"
// Variants: Colour × Display bar × Search bar × Size
//
// Design tokens → /src/theme/theme.css
//   --neutral-00: #FFFFFF   --neutral-10: #F3F4F6   --neutral-20: #DFE2E7
//   --neutral-40: #A3A9B9   --neutral-50: #868CA2   --neutral-60: #696F88
//   --neutral-70: #4D5165   --neutral-80: #363948   --neutral-90: #232630
//   --neutral-100: #14151C
//
// Typography: "Noto Sans" SemiBold 16/24px (default title), 20/28px (large title)
// Icons: design-system icon components

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
          fontFamily: '"Roboto", sans-serif',
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
          <path d="M0.63 5.84A9 9 0 0 0 15.37 5.84L14.55 6.41A8 8 0 0 1 1.45 6.41Z" fill={fg} fillOpacity="0.9" />
          <path d="M2.68 7.27A6.5 6.5 0 0 0 13.32 7.27L12.1 8.13A5 5 0 0 1 3.9 8.13Z" fill={fg} fillOpacity="0.9" />
          <path d="M5.13 8.99A3.5 3.5 0 0 0 10.87 8.99L9.64 9.85A2 2 0 0 1 6.36 9.85Z" fill={fg} fillOpacity="0.9" />
          <circle cx="8" cy="10.7" r="0.8" fill={fg} fillOpacity="0.9" />
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
          <rect x="12" y="2.25" width="1.5" height="3.5" rx="0.5" fill={fg} fillOpacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

// ─── Search Bar (default: h40 14px / large: h44 16px) ─────────────────────────
function SearchBarRow({
  colour,
  size = "default",
}: {
  colour: "light" | "dark";
  size?: "default" | "large";
}) {
  const isLight = colour === "light";
  const inputBg  = isLight ? "var(--neutral-10)" : "var(--neutral-90)";
  const iconFg   = isLight ? "var(--neutral-60)" : "var(--neutral-50)";
  const placeholder = isLight ? "var(--neutral-40)" : "var(--neutral-50)";
  const isLarge = size === "large";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flex: 1,
        height: isLarge ? 44 : 40,
        backgroundColor: inputBg,
        borderRadius: 4,
        padding: "0 10px",
        gap: 4,
      }}
      data-name="search-bar"
    >
      <SearchIcon color={iconFg} />
      <span
        style={{
          flex: 1,
          fontFamily: "var(--font-family-body)",
          fontWeight: "var(--font-weight-regular)",
          fontSize: isLarge ? 16 : 14,
          color: placeholder,
          letterSpacing: isLarge ? "-0.12px" : "-0.105px",
          lineHeight: isLarge ? "24px" : "22px",
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
          width: 224,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 0,
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
          top: "calc(50% + 1px)",
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
  const isLarge = size === "large";

  // Figma height values:
  //   default, no display  → 80px  (status 24 + content 56)
  //   default, display     → 96px  (status 24 + content 56 + 16)
  //   large,   no display  → 84px  (status 24 + content 60)
  //   large,   display     → 104px (status 24 + content 60 + 20)
  const contentH = isLarge ? 60 : 56;
  const displayOffset = isLarge ? 20 : 16;
  const totalH   = 24 + contentH + (displayBar ? displayOffset : 0);

  const bg          = isLight ? "var(--mono-white-100)" : "var(--neutral-80)";
  const iconColor   = isLight ? "var(--neutral-100)" : "var(--mono-white-100)";
  const titleColor  = isLight ? "var(--neutral-100)" : "var(--mono-white-100)";
  const borderColor = isLight ? "var(--neutral-20)" : "transparent";
  const circleBg    = isLight ? "var(--neutral-10)" : "var(--neutral-90)";

  // Nav icons are vertically centered in the content area.
  // Default 80px: calc(50%+12px) no display, calc(50%+4px) with display
  // Large 84px: calc(50%+12px) no display, calc(50%+2px) with display
  const iconTopOffset = (() => {
    if (isLarge) {
      return displayBar ? 2 : 12;
    }
    return displayBar ? 4 : 12;
  })();

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
        isLarge ? (
          /* Large search mode: chevron in circle + search bar at left:72 w:272 h:44 */
          <>
            {/* Circle background for back icon */}
            <div
              style={{
                position: "absolute",
                left: 16,
                top: `calc(50% + ${iconTopOffset}px)`,
                transform: "translateY(-50%)",
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: circleBg,
              }}
            />
            <button
              onClick={onBack}
              style={{
                position: "absolute",
                left: 26,
                top: `calc(50% + ${iconTopOffset}px)`,
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "flex",
                alignItems: "center",
              }}
              aria-label="Voltar"
            >
              <ChevronLeftIcon color={iconColor} />
            </button>
            {/* Search bar positioned absolutely at left:72 */}
            <div
              style={{
                position: "absolute",
                left: 72,
                top: 32,
                width: 272,
                height: 44,
              }}
            >
              <SearchBarRow colour={colour} size="large" />
            </div>
          </>
        ) : (
          /* Default search mode — chevron left + search bar flex */
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
              <SearchBarRow colour={colour} size="default" />
            </div>
          </div>
        )
      ) : isLarge ? (
        /* Large default mode — 2 icons in circles + large title */
        <>
          {/* Left circle background */}
          <div
            style={{
              position: "absolute",
              left: 16,
              top: `calc(50% + ${iconTopOffset}px)`,
              transform: "translateY(-50%)",
              width: 44,
              height: 44,
              borderRadius: 22,
              backgroundColor: circleBg,
            }}
          />
          {/* Chevron left — left:26px (centered in 44px circle at left:16) */}
          <button
            onClick={onBack}
            style={{
              position: "absolute",
              left: 26,
              top: `calc(50% + ${iconTopOffset}px)`,
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              display: "flex",
              alignItems: "center",
            }}
            aria-label="Voltar"
          >
            <ChevronLeftIcon color={iconColor} />
          </button>

          {/* Right circle background */}
          <div
            style={{
              position: "absolute",
              right: 16,
              top: `calc(50% + ${iconTopOffset}px)`,
              transform: "translateY(-50%)",
              width: 44,
              height: 44,
              borderRadius: 22,
              backgroundColor: circleBg,
            }}
          />
          {/* Action icon — right:26px (centered in 44px circle at right:16) */}
          <button
            onClick={onAction}
            style={{
              position: "absolute",
              right: 26,
              top: `calc(50% + ${iconTopOffset}px)`,
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              display: "flex",
              alignItems: "center",
            }}
            aria-label="Ação"
          >
            <AddIcon color={iconColor} />
          </button>

          {/* Title — 20/28px SemiBold, left:18.89% right:18.89% */}
          <div
            style={{
              position: "absolute",
              left: "18.89%",
              right: "18.89%",
              top: `calc(50% + ${iconTopOffset}px)`,
              transform: "translateY(-50%)",
              textAlign: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-family-body)",
                fontWeight: "var(--font-weight-bold)",
                fontSize: 20,
                color: titleColor,
                letterSpacing: "-0.15px",
                lineHeight: "28px",
              }}
            >
              {title}
            </span>
          </div>
        </>
      ) : (
        /* Default mode — 4 icons absolutely positioned (125:4091) */
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

          {/* Title — 16/24px SemiBold, left:25.56% right:25.56% */}
          <div
            style={{ position: "absolute", left: "25.56%", right: "25.56%", top: `calc(50% + ${iconTopOffset}px)`, transform: "translateY(-50%)", textAlign: "center" }}
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

export default AndroidNavBar;


