import React from "react";
import { StatusBarMode } from "../../Mode/light/LightMode";

// ─── Inline SVG path constants (replaces missing Figma Make import) ───────────
// Cellular 18×12 — five signal bars
const ANDROID_CELLULAR =
  "M1 8H2.5V12H1V8ZM4 6H5.5V12H4V6ZM7 4H8.5V12H7V4ZM10 2H11.5V12H10V2ZM13 0H14.5V12H13V0Z";
// WiFi 16×12 — three arcs + dot
const ANDROID_WIFI =
  "M8 0C4.62695 0 1.5918 1.40918 0 3.65234L1.75781 5.40039C2.96289 3.50977 5.34277 2.25 8 2.25C10.6572 2.25 13.0371 3.50977 14.2422 5.40039L16 3.65234C14.4082 1.40918 11.373 0 8 0ZM8 3.5C5.73535 3.5 3.71582 4.50195 2.32813 6.13477L4.08594 7.88281C5.03906 6.64453 6.43066 5.875 8 5.875C9.56934 5.875 10.9609 6.64453 11.9141 7.88281L13.6719 6.13477C12.2842 4.50195 10.2646 3.5 8 3.5ZM6 9.5C6 8.39543 6.89543 7.5 8 7.5C9.10457 7.5 10 8.39543 10 9.5C10 10.6046 9.10457 11.5 8 11.5C6.89543 11.5 6 10.6046 6 9.5Z";
// Battery 24×12 — outline + right nub
const ANDROID_BATTERY_OUTLINE =
  "M2 0.5C1.17157 0.5 0.5 1.17157 0.5 2V10C0.5 10.8284 1.17157 11.5 2 11.5H19C19.8284 11.5 20.5 10.8284 20.5 10V7.5H22C22.5523 7.5 23 7.05228 23 6.5V5.5C23 4.94772 22.5523 4.5 22 4.5H20.5V2C20.5 1.17157 19.8284 0.5 19 0.5H2ZM2 1.5H19C19.2761 1.5 19.5 1.72386 19.5 2V5.5H21.5C21.7761 5.5 22 5.72386 22 6C22 6.27614 21.7761 6.5 21.5 6.5H19.5V10C19.5 10.2761 19.2761 10.5 19 10.5H2C1.72386 10.5 1.5 10.2761 1.5 10V2C1.5 1.72386 1.72386 1.5 2 1.5Z";

// ─── Platform / Android ───────────────────────────────────────────────────────
// Material Design status bar — height 24dp.
// Based on Figma: AndroidStatusBar-11-6169 (light) / AndroidStatusBar-11-6173 (dark)
// Time on the left; Cellular + WiFi + Battery on the right.

interface AndroidStatusBarProps {
  mode?: StatusBarMode;
  time?: string;
  className?: string;
}

export function AndroidStatusBar({
  mode = "light",
  time = "12:30",
  className = "",
}: AndroidStatusBarProps) {
  const isDark = mode === "dark";

  const bg         = isDark ? "#0f0f0f" : "#f5f5f5";
  const fg         = isDark ? "#ffffff" : "#170E2B";
  const fgOpacity  = isDark ? 0.9 : 1;
  const textColor  = isDark ? "rgba(255,255,255,0.9)" : "#170e2b";

  return (
    <div
      style={{ position: "relative", width: "100%", height: 24, backgroundColor: bg }}
      data-name="StatusBar/Android"
    >
      {/* ── Icons (right cluster) ─────────────────────────────────────── */}
      <div
        style={{ position: "absolute", top: "25%", bottom: "25%", display: "flex", alignItems: "flex-start", gap: 6, left: "77.22%", right: "3.33%" }}
      >
        {/* Cellular */}
        <div style={{ position: "relative", flexShrink: 0, height: 12, width: 18 }}>
          <svg style={{ position: "absolute", display: "block", width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
            <path d={ANDROID_CELLULAR} fill={fg} fillOpacity={fgOpacity} />
          </svg>
        </div>

        {/* WiFi */}
        <div style={{ position: "relative", flexShrink: 0, height: 12, width: 16 }}>
          <svg style={{ position: "absolute", display: "block", width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
            <path d={ANDROID_WIFI} fill={fg} fillOpacity={fgOpacity} />
          </svg>
        </div>

        {/* Battery */}
        <div style={{ position: "relative", flexShrink: 0, height: 12, width: 24 }}>
          <svg style={{ position: "absolute", display: "block", width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 24 12">
            <g>
              {/* Outline + terminal nub */}
              <path
                d={ANDROID_BATTERY_OUTLINE}
                fill={fg}
                fillOpacity={fgOpacity}
                opacity={0.4}
              />
              {/* Capacity fill */}
              <rect
                fill={fg}
                fillOpacity={fgOpacity}
                height="7.76471"
                rx="1.33333"
                width="17.7573"
                x="1.97303"
                y="2.11765"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* ── Time (left) ───────────────────────────────────────────────── */}
      <p
        style={{
          position: "absolute",
          whiteSpace: "nowrap",
          top: "16.67%",
          right: "86.67%",
          bottom: "16.67%",
          left: "3.33%",
          margin: 0,
          fontFamily: "var(--font-family-body)",
          fontWeight: 500,
          fontSize: 14,
          color: textColor,
          letterSpacing: "0.014px",
          lineHeight: "normal",
        }}
      >
        {time}
      </p>
    </div>
  );
}

export type { StatusBarMode };
export default AndroidStatusBar;
