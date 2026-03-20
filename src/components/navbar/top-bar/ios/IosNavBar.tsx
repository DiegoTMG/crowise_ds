// ─── Navbar / Mobile / iOS — Topbar ──────────────────────────────────────────
// Figma source: "Figma Make Components" › Page "04 - Navbar" › "Top bar"
// Variants: OS (old | notch) × Colour × Display bar × Search bar × Size
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
          <path d="M0.13 5.84A9 9 0 0 0 14.87 5.84L14.05 6.41A8 8 0 0 1 0.95 6.41Z" fill={fg} />
          <path d="M2.18 7.27A6.5 6.5 0 0 0 12.82 7.27L11.6 8.13A5 5 0 0 1 3.4 8.13Z" fill={fg} />
          <path d="M4.63 8.99A3.5 3.5 0 0 0 10.37 8.99L9.14 9.85A2 2 0 0 1 5.86 9.85Z" fill={fg} />
          <circle cx="7.5" cy="10.7" r="0.8" fill={fg} />
        </svg>
      </div>

      {/* Time — center */}
      <span
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: '"SF Pro Text", -apple-system, sans-serif',
          fontWeight: 400,
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
          <rect x="0.5" y="0.33" width="22" height="11.33" rx="2.67" stroke={fg} strokeOpacity="0.35" />
          <rect x="2" y="2" width="18" height="7.33" rx="1.33" fill={fg} />
          <rect x="23" y="3.67" width="1.33" height="4" rx="0.67" fill={fg} fillOpacity="0.4" />
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
          left: 48,
          top: "calc(50% - 8px)",
          transform: "translateX(-50%)",
          fontFamily: '"SF Pro Text", -apple-system, sans-serif',
          fontWeight: 600,
          fontSize: 15,
          color: fg,
          letterSpacing: "-0.3px",
          lineHeight: "normal",
          whiteSpace: "nowrap",
          textAlign: "center" as const,
          width: 54,
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
        <svg width="15" height="11" viewBox="0 0 15.33 11" fill="none" aria-hidden="true">
          <path d="M0.3 5.34A9 9 0 0 0 15.04 5.34L14.22 5.91A8 8 0 0 1 1.12 5.91Z" fill={fg} />
          <path d="M2.35 6.77A6.5 6.5 0 0 0 12.99 6.77L11.77 7.63A5 5 0 0 1 3.57 7.63Z" fill={fg} />
          <path d="M4.8 8.49A3.5 3.5 0 0 0 10.54 8.49L9.31 9.35A2 2 0 0 1 6.03 9.35Z" fill={fg} />
          <circle cx="7.67" cy="10.2" r="0.8" fill={fg} />
        </svg>

        {/* Battery */}
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none" aria-hidden="true">
          <rect x="0.5" y="0.33" width="22" height="11.33" rx="2.67" stroke={fg} strokeOpacity="0.35" />
          <rect x="2" y="2" width="18" height="7.33" rx="1.33" fill={fg} />
          <rect x="23" y="3.67" width="1.33" height="4" rx="0.67" fill={fg} fillOpacity="0.4" />
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
  const isLight  = colour === "light";
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
        height: isLarge ? 44 : 36,
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
          fontVariationSettings: "'CTGR' 0, 'wdth' 100",
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
  panelTopOffset,
}: {
  colour: "light" | "dark";
  title: string;
  subtitle: string;
  panelTopOffset: number;
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
        top: `calc(50% + ${panelTopOffset}px)`,
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
          width: 224,
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
            fontVariationSettings: "'CTGR' 0, 'wdth' 100",
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
            fontVariationSettings: "'CTGR' 0, 'wdth' 100",
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
  const colour = mode;
  const isLight = mode === "light";
  const isLarge = size === "large";

  // Figma height values for iOS:
  //   old, default, no display  : 84px  (status 20 + content 64)
  //   old, default, display     : 104px (+20)
  //   old, large, no display    : 84px  (status 20 + content 64)
  //   old, large, display       : 104px (+20)
  //   notch, default, no display: 88px  (status 44 + content 44)
  //   notch, default, display   : 104px (+16)
  //   notch, large, no display  : 104px (status 44 + content 60)
  //   notch, large, display     : 120px (+16)
  const statusH = hasNotch ? 44 : 20;
  const contentH = hasNotch
    ? (isLarge ? 60 : 44)
    : 64;
  const displayOffset = hasNotch ? 16 : 20;
  const totalH = statusH + contentH + (displayBar ? displayOffset : 0);

  const defaultTime = hasNotch ? "9:41" : "1:20 PM";

  const bg          = isLight ? "var(--mono-white-100)" : "var(--neutral-80)";
  const iconColor   = isLight ? "var(--neutral-100)" : "var(--mono-white-100)";
  const titleColor  = isLight ? "var(--neutral-100)" : "var(--mono-white-100)";
  const borderColor = isLight ? "var(--neutral-20)" : "transparent";
  const circleBg    = isLight ? "var(--neutral-10)" : "var(--neutral-90)";

  // Icon vertical centering per Figma:
  // iOS old default (84px): calc(50%+18px)  → center at 60px
  // iOS old large (84px): calc(50%+12px)    → center at 54px
  // iOS notch default (88px): calc(50%+22px) → center at 66px
  // iOS notch large (104px): calc(50%+22px)  → center at 74px
  const iconTopOffset = (() => {
    if (hasNotch) {
      return 22;
    }
    return isLarge ? 12 : 18;
  })();

  // Adjust for display bar offset
  const effectiveIconTopOffset = displayBar
    ? iconTopOffset - displayOffset / 2
    : iconTopOffset;

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
        isLarge ? (
          /* Large search mode: search bar + Cancel text */
          <div
            style={{
              position: "absolute",
              left: 16,
              right: 16,
              top: `calc(50% + ${effectiveIconTopOffset}px)`,
              transform: "translateY(-50%)",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <SearchBarRow colour={colour} size="large" />
            <button
              onClick={onBack}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0, flexShrink: 0 }}
              aria-label="Cancel"
            >
              <span
                style={{
                  fontFamily: "var(--font-family-body)",
                  fontWeight: "var(--font-weight-regular)",
                  fontSize: 16,
                  color: isLight ? "var(--neutral-60)" : "var(--neutral-40)",
                  letterSpacing: "-0.12px",
                  lineHeight: "24px",
                  whiteSpace: "nowrap",
                  fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                }}
              >
                Cancel
              </span>
            </button>
          </div>
        ) : (
          /* Default search mode: search bar + Cancel text (absolute positioned per Figma) */
          (() => {
            // Figma offsets: old search=+16, notch search=+22, notch cancel=+24
            const baseSearchOffset = hasNotch ? 22 : 16;
            const baseCancelOffset = hasNotch ? 24 : 16;
            const searchTopOff = displayBar ? baseSearchOffset - displayOffset / 2 : baseSearchOffset;
            const cancelTopOff = displayBar ? baseCancelOffset - displayOffset / 2 : baseCancelOffset;
            return (
              <>
                <div
                  style={{
                    position: "absolute",
                    left: 16,
                    top: `calc(50% + ${searchTopOff}px)`,
                    transform: "translateY(-50%)",
                    width: 280,
                    height: 36,
                  }}
                >
                  <SearchBarRow colour={colour} size="default" />
                </div>
                <button
                  onClick={onBack}
                  style={{
                    position: "absolute",
                    right: 16,
                    top: `calc(50% + ${cancelTopOff}px)`,
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    width: 76,
                    textAlign: "right" as const,
                  }}
                  aria-label="Cancel"
                >
                  <span
                    style={{
                      fontFamily: "var(--font-family-body)",
                      fontWeight: "var(--font-weight-regular)",
                      fontSize: 14,
                      color: isLight ? "var(--neutral-60)" : "var(--neutral-40)",
                      letterSpacing: "-0.105px",
                      lineHeight: "22px",
                      whiteSpace: "nowrap",
                      fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                    }}
                  >
                    Cancel
                  </span>
                </button>
              </>
            );
          })()
        )
      ) : isLarge ? (
        /* Large default mode — 2 icons in circles + large title */
        <>
          {/* Left circle background */}
          <div
            style={{
              position: "absolute",
              left: 16,
              top: `calc(50% + ${effectiveIconTopOffset}px)`,
              transform: "translateY(-50%)",
              width: 44,
              height: 44,
              borderRadius: 22,
              backgroundColor: circleBg,
            }}
          />
          {/* Chevron left — left:26px */}
          <button
            onClick={onBack}
            style={{
              position: "absolute",
              left: 26,
              top: `calc(50% + ${effectiveIconTopOffset}px)`,
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
              right: hasNotch ? 16 : 15,
              top: `calc(50% + ${effectiveIconTopOffset}px)`,
              transform: "translateY(-50%)",
              width: 44,
              height: 44,
              borderRadius: 22,
              backgroundColor: circleBg,
            }}
          />
          {/* Action icon — right:25-26px */}
          <button
            onClick={onAction}
            style={{
              position: "absolute",
              right: hasNotch ? 26 : 25,
              top: `calc(50% + ${effectiveIconTopOffset}px)`,
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

          {/* Title — 20/28px SemiBold, left:20.27% right:20% */}
          <div
            style={{
              position: "absolute",
              left: "20.27%",
              right: "20%",
              top: `calc(50% + ${effectiveIconTopOffset}px)`,
              transform: "translateY(-50%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: 24,
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
                fontVariationSettings: "'CTGR' 0, 'wdth' 100",
              }}
            >
              {title}
            </span>
          </div>
        </>
      ) : (
        /* Default mode — 4 icons absolutely positioned */
        <>
          {/* Chevron left — left:16px */}
          <button
            onClick={onBack}
            style={{ position: "absolute", left: 16, top: `calc(50% + ${effectiveIconTopOffset}px)`, transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}
            aria-label="Voltar"
          >
            <ChevronLeftIcon color={iconColor} />
          </button>

          {/* Secondary action — left:60px */}
          <button
            onClick={onAction}
            style={{ position: "absolute", left: 60, top: `calc(50% + ${effectiveIconTopOffset}px)`, transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}
            aria-label="Ação"
          >
            <AddIcon color={iconColor} />
          </button>

          {/* Title — 16/24px SemiBold, left:24.53% right:24.53% */}
          <div
            style={{ position: "absolute", left: "24.53%", right: "24.53%", top: `calc(50% + ${effectiveIconTopOffset}px)`, transform: "translateY(-50%)", display: "flex", flexDirection: "column", justifyContent: "center", height: 24, textAlign: "center" }}
          >
            <span
              style={{
                fontFamily: "var(--font-family-body)",
                fontWeight: "var(--font-weight-bold)",
                fontSize: 16,
                color: titleColor,
                letterSpacing: "-0.12px",
                lineHeight: "24px",
                fontVariationSettings: "'CTGR' 0, 'wdth' 100",
              }}
            >
              {title}
            </span>
          </div>

          {/* Secondary action — right:60px */}
          <button
            onClick={onAction}
            style={{ position: "absolute", right: 60, top: `calc(50% + ${effectiveIconTopOffset}px)`, transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}
            aria-label="Ação"
          >
            <AddIcon color={iconColor} />
          </button>

          {/* Primary action — right:16px */}
          <button
            onClick={onAction}
            style={{ position: "absolute", right: 16, top: `calc(50% + ${effectiveIconTopOffset}px)`, transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}
            aria-label="Ação"
          >
            <AddIcon color={iconColor} />
          </button>
        </>
      )}

      {/* ── Display navigation panel (extends below bar) ────────────── */}
      {displayBar && (
        <DisplayNavPanel
          colour={colour}
          title={title}
          subtitle={subtitle}
          panelTopOffset={Math.round(totalH / 2 - displayOffset + 32)}
        />
      )}
    </div>
  );
};

export default IosNavBar;

