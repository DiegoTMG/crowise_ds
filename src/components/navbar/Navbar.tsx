/**
 * Navbar / Navibar
 *
 * Figma source: https://www.figma.com/design/AnqFoDnF8mDF6RWwrVW9rR
 * Node: 125-4070
 *
 * Variants (property1):
 *   1 → Title + Subtitle + Right Icon + Count
 *   2 → Title + Right Icon + Count
 *   3 → Title + Right Icon
 *   4 → Title + Subtitle + Right Icon
 *
 * Colours — 100% semantic tokens from src/theme/theme.css
 *   Background     : --fill-default-none-primary   (#FFFFFF / mono-white-100)
 *   Title          : --text-default-none-primary    (#14151C / neutral-100)
 *   Subtitle/Count : --text-default-none-secondary  (#696F88 / neutral-60)
 *   Left icon      : --text-default-none-primary    (#14151C / neutral-100)
 *   Right icon     : --icon-default-none-primary    (#696F88 / neutral-60)
 *
 * Typography
 *   Title    : SemiBold 16px / 24px  letterSpacing -0.12px  (H4)
 *   Subtitle : Regular  14px / 22px  letterSpacing -0.105px (Body Reg)
 *   Count    : SemiBold 16px / 24px  letterSpacing -0.12px  (Body Med)
 *
 * Icons
 *   Left  : ArrowBack 24×24     (src/icons/design/ArrowBack)
 *   Right : Scout 24×24          (src/icons/feature/Scout)
 */

import React from "react";
import ArrowBack from "../../icons/design/ArrowBack";
import Scout from "../../icons/feature/Scout";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface NavbarProps {
  /** Main title text */
  title: string;
  /** Optional subtitle info line (e.g. "130 ac • DAE: 45") */
  subtitle?: string;
  /** Custom left icon — defaults to ArrowBack 24×24 */
  leftIcon?: React.ReactNode;
  /** Custom right icon — defaults to Scout 24×24 */
  rightIcon?: React.ReactNode;
  /** Badge/count displayed next to the right icon */
  rightCount?: number | string;
  /** Callback when left/back button is pressed */
  onBackPress?: () => void;
  /** Callback when right icon area is pressed */
  onRightPress?: () => void;
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const containerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  padding: "0 16px",
  background: "var(--fill-default-none-primary)",
  width: "100%",
  boxSizing: "border-box",
};

const leftSectionStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  width: 68,
  height: 24,
  flexShrink: 0,
  color: "var(--icon-default-none-primary)",
};

const centerSectionStyle: React.CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: 44,
  padding: "4px 0",
  minWidth: 0,
  minHeight: 1,
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  fontFamily: "var(--font-family-primary)",
  fontWeight: 600,
  fontSize: 16,
  lineHeight: "24px",
  letterSpacing: -0.12,
  color: "var(--text-default-none-primary)",
  height: 22,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  textAlign: "center",
};

const subtitleContainerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 4,
  fontFamily: "var(--font-family-primary)",
  fontWeight: 400,
  fontSize: 14,
  lineHeight: "22px",
  letterSpacing: -0.105,
  color: "var(--text-default-none-secondary)",
  overflow: "clip",
  whiteSpace: "nowrap",
};

const rightSectionStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  width: 68,
  height: 24,
  flexShrink: 0,
};

const rightInnerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "4px 0",
  background: "var(--fill-default-none-primary)",
  color: "var(--icon-default-none-primary)",
};

const countStyle: React.CSSProperties = {
  fontFamily: "var(--font-family-primary)",
  fontWeight: 600,
  fontSize: 16,
  lineHeight: "24px",
  letterSpacing: -0.12,
  color: "var(--text-default-none-secondary)",
  width: 24,
  height: 24,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
};

const buttonResetStyle: React.CSSProperties = {
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  margin: 0,
  display: "flex",
  alignItems: "center",
};

// ─── Component ────────────────────────────────────────────────────────────────

export const Navbar: React.FC<NavbarProps> = ({
  title,
  subtitle,
  leftIcon,
  rightIcon,
  rightCount,
  onBackPress,
  onRightPress,
}) => {
  const leftContent = leftIcon ?? <ArrowBack size={24} />;
  const rightContent = rightIcon ?? <Scout size={24} />;

  return (
    <div style={containerStyle}>
      {/* [Left] Icon */}
      <div style={leftSectionStyle}>
        {onBackPress ? (
          <button
            type="button"
            aria-label="Go back"
            onClick={onBackPress}
            style={{ ...buttonResetStyle, color: "inherit" }}
          >
            {leftContent}
          </button>
        ) : (
          leftContent
        )}
      </div>

      {/* Title + subtitle */}
      <div style={centerSectionStyle}>
        <span style={titleStyle}>{title}</span>
        {subtitle != null && (
          <span style={subtitleContainerStyle}>{subtitle}</span>
        )}
      </div>

      {/* [Right] Icon + count */}
      <div style={rightSectionStyle}>
        {onRightPress ? (
          <button
            type="button"
            aria-label="Right action"
            onClick={onRightPress}
            style={{ ...buttonResetStyle, ...rightInnerStyle }}
          >
            {rightContent}
            {rightCount != null && (
              <span style={countStyle}>{rightCount}</span>
            )}
          </button>
        ) : (
          <div style={rightInnerStyle}>
            {rightContent}
            {rightCount != null && (
              <span style={countStyle}>{rightCount}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

Navbar.displayName = "Navbar";
