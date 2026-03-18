import React from "react";
import svgPaths from "../../../../../imports/svg-7n05i9zifm";
import { StatusBarMode } from "../../Mode/light/LightMode";

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
      className={`relative w-full ${className}`}
      style={{ height: 24, backgroundColor: bg }}
      data-name="StatusBar/Android"
    >
      {/* ── Icons (right cluster) ─────────────────────────────────────── */}
      <div
        className="absolute bottom-1/4 content-stretch flex items-start top-1/4"
        style={{ gap: 6, left: "77.22%", right: "3.33%" }}
      >
        {/* Cellular */}
        <div className="relative shrink-0" style={{ height: 12, width: 18 }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
            <path d={svgPaths.p30908d00} fill={fg} fillOpacity={fgOpacity} />
          </svg>
        </div>

        {/* WiFi */}
        <div className="relative shrink-0" style={{ height: 12, width: 16 }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
            <path d={svgPaths.pee63b00} fill={fg} fillOpacity={fgOpacity} />
          </svg>
        </div>

        {/* Battery */}
        <div className="relative shrink-0" style={{ height: 12, width: 24 }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 12">
            <g>
              {/* Outline + terminal nub */}
              <path
                d={svgPaths.p354c5080}
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
        className="absolute whitespace-nowrap"
        style={{
          top: "16.67%",
          right: "86.67%",
          bottom: "16.67%",
          left: "3.33%",
          margin: 0,
          fontFamily: '"Roboto", "Noto Sans", sans-serif',
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
