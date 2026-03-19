import React from "react";
import { StatusBarMode } from "../../Mode/light/LightMode";

// ─── Inline SVG path constants (replaces missing Figma Make import) ───────────
// Signal bars — rounded rectangles, each filling its respective viewBox
const IOS_BAR_GHOST = "M0.5 0C0.223858 0 0 0.223858 0 0.5V9.5C0 9.77614 0.223858 10 0.5 10H2.5C2.77614 10 3 9.77614 3 9.5V0.5C3 0.223858 2.77614 0 2.5 0H0.5Z";
const IOS_BAR_SHORT = "M0.5 0C0.223858 0 0 0.223858 0 0.5V4C0 4.27614 0.223858 4.5 0.5 4.5H2.5C2.77614 4.5 3 4.27614 3 4V0.5C3 0.223858 2.77614 0 2.5 0H0.5Z";
const IOS_BAR_MED   = "M0.5 0C0.223858 0 0 0.223858 0 0.5V5.5C0 5.77614 0.223858 6 0.5 6H2.5C2.77614 6 3 5.77614 3 5.5V0.5C3 0.223858 2.77614 0 2.5 0H0.5Z";
const IOS_BAR_TALL  = "M0.5 0C0.223858 0 0 0.223858 0 0.5V7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5V0.5C3 0.223858 2.77614 0 2.5 0H0.5Z";
// WiFi arcs — filled crescent shapes
const IOS_WIFI_OUTER = "M7.125 0C4.30664 0 1.86719 1.63184 0 4.32259C1.31836 3.00059 3.97852 2.04375 7.125 2.04375C10.2715 2.04375 12.9316 3.00059 14.25 4.32259C12.3828 1.63184 9.94336 0 7.125 0Z";
const IOS_WIFI_MID   = "M4.6599 0C2.81543 0 1.21973 1.25488 0 3.31425C0.808594 2.14063 2.56641 1.35156 4.6599 1.35156C6.75293 1.35156 8.51123 2.14063 9.3198 3.31425C8.09961 1.25488 6.50488 0 4.6599 0Z";
const IOS_WIFI_DOT   = "M2.18594 0C1.29492 0 0.488281 0.389648 0 1.02832L2.18594 3.06041L4.37186 1.02832C3.88379 0.389648 3.07715 0 2.18594 0Z";
// Battery
const IOS_BATT_NUB     = "M0 0H1V4H0V0Z";
const IOS_BATT_OUTLINE = "M2 0H21C22.1046 0 23 0.895431 23 2V10C23 11.1046 22.1046 12 21 12H2C0.895431 12 0 11.1046 0 10V2C0 0.895431 0.895431 0 2 0ZM2 1C1.44772 1 1 1.44772 1 2V10C1 10.5523 1.44772 11 2 11H21C21.5523 11 22 10.5523 22 10V2C22 1.44772 21.5523 1 21 1H2Z";

// ─── Layout / iOS Notch (Upper) ───────────────────────────────────────────────
// iPhone X and later — status bar upper area 44pt.
// Based on Figma: IPhoneStatusBarUpper (light + dark)
// Time on the left; Network Signal + WiFi + Battery on the right.

interface IOSNotchProps {
  mode?: StatusBarMode;
  time?: string;
  className?: string;
}

export function IOSNotchStatusBar({
  mode = "light",
  time = "9:41",
  className = "",
}: IOSNotchProps) {
  const isDark = mode === "dark";

  const bg            = isDark ? "#0f0f0f" : "#f5f5f5";
  const fg            = isDark ? "#ffffff" : "#000000";
  const fgBattOutline = isDark ? "#ffffff" : "#3C3C43";
  const fgBattOpa     = 0.6;
  const fgGhost       = isDark ? "#ffffff" : "#3C3C43";
  const fgGhostOpa    = 0.18;

  return (
    <div
      style={{ position: "relative", width: "100%", height: 44, backgroundColor: bg }}
      data-name="StatusBar/iOS/Notch"
    >
      {/* Notch pill placeholder */}
      <div style={{ position: "absolute", height: 30, left: 0, right: 0, top: 0 }} />

      {/* ── Status Icons (right cluster) ───────────────────────────────── */}
      <div
        style={{ position: "absolute", display: "flex", alignItems: "center", gap: 4, right: 14, top: 16 }}
      >
        {/* Network Signal ------------------------------------------------ */}
        <div style={{ position: "relative", flexShrink: 0, width: 20, height: 14 }}>
          {/* Ghost/empty bar (4th, rightmost) */}
          <div style={{ position: "absolute", top: "14.29%", right: "7.5%", bottom: "14.29%", left: "77.5%" }}>
            <svg style={{ position: "absolute", display: "block", width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 3 10">
              <path clipRule="evenodd" d={IOS_BAR_GHOST} fill={fgGhost} fillOpacity={fgGhostOpa} fillRule="evenodd" />
            </svg>
          </div>
          {/* Short bar (1st) */}
          <div style={{ position: "absolute", bottom: "14.29%", left: "10%", right: "75%", top: "53.57%" }}>
            <svg style={{ position: "absolute", display: "block", width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 3 4.5">
              <path clipRule="evenodd" d={IOS_BAR_SHORT} fill={fg} fillRule="evenodd" />
            </svg>
          </div>
          {/* Medium bar (2nd) */}
          <div style={{ position: "absolute", top: "42.86%", right: "52.5%", bottom: "14.29%", left: "32.5%" }}>
            <svg style={{ position: "absolute", display: "block", width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 3 6">
              <path clipRule="evenodd" d={IOS_BAR_MED} fill={fg} fillRule="evenodd" />
            </svg>
          </div>
          {/* Tall bar (3rd) */}
          <div style={{ position: "absolute", top: "28.57%", right: "30%", bottom: "14.29%", left: "55%" }}>
            <svg style={{ position: "absolute", display: "block", width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 3 8">
              <path clipRule="evenodd" d={IOS_BAR_TALL} fill={fg} fillRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* WiFi Signal --------------------------------------------------- */}
        <div style={{ position: "relative", flexShrink: 0, width: 16, height: 14 }}>
          {/* Outer arc */}
          <div style={{ position: "absolute", top: "14.29%", right: "4.69%", bottom: "54.84%", left: "6.25%" }}>
            <svg style={{ position: "absolute", display: "block", width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 14.25 4.32259">
              <path d={IOS_WIFI_OUTER} fill={fg} />
            </svg>
          </div>
          {/* Middle arc */}
          <div style={{ position: "absolute", top: "39.07%", right: "20.1%", bottom: "37.26%", left: "21.66%" }}>
            <svg style={{ position: "absolute", display: "block", width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 9.3198 3.31425">
              <path d={IOS_WIFI_MID} fill={fg} />
            </svg>
          </div>
          {/* Inner dot/arc */}
          <div style={{ position: "absolute", top: "63.85%", right: "35.56%", bottom: "14.29%", left: "37.11%" }}>
            <svg style={{ position: "absolute", display: "block", width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 4.37186 3.06041">
              <path d={IOS_WIFI_DOT} fill={fg} />
            </svg>
          </div>
        </div>

        {/* Battery ------------------------------------------------------- */}
        <div style={{ position: "relative", flexShrink: 0, width: 25, height: 14 }}>
          {/* Terminal nub */}
          <div style={{ position: "absolute", left: 24, top: 5, width: 1, height: 4 }}>
            <svg style={{ position: "absolute", display: "block", width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 1 4">
              <path d={IOS_BATT_NUB} fill={fgBattOutline} fillOpacity={fgBattOpa} />
            </svg>
          </div>
          {/* Outline */}
          <div style={{ position: "absolute", left: 0, top: 1, width: 23, height: 12 }}>
            <svg style={{ position: "absolute", display: "block", width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 23 12">
              <path clipRule="evenodd" d={IOS_BATT_OUTLINE} fill={fgBattOutline} fillOpacity={fgBattOpa} fillRule="evenodd" />
            </svg>
          </div>
          {/* Capacity fill */}
          <div
            style={{
              position: "absolute",
              borderRadius: 1,
              left: 2,
              top: "50%",
              transform: "translateY(-50%)",
              width: 19,
              height: 8,
              backgroundColor: fg,
            }}
          />
        </div>
      </div>

      {/* Indicator dot placeholder */}
      <div style={{ position: "absolute", right: 71, top: 8, width: 6, height: 6 }} />

      {/* ── Time (left) ────────────────────────────────────────────────── */}
      <div
        style={{ position: "absolute", overflow: "hidden", left: 21, top: 12, width: 54, height: 21 }}
      >
        <span
          style={{
            fontFamily: "var(--font-family-primary)",
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: "-0.3px",
            color: fg,
            lineHeight: "21px",
            display: "block",
            whiteSpace: "nowrap",
          }}
        >
          {time}
        </span>
      </div>
    </div>
  );
}

export type { StatusBarMode };
export default IOSNotchStatusBar;
