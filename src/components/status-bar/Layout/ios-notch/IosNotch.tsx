import React from "react";
import svgPaths from "../../../../../imports/svg-zy9qyqgq7e";
import { StatusBarMode } from "../../Mode/light/LightMode";

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
      className={`relative w-full ${className}`}
      style={{ height: 44, backgroundColor: bg }}
      data-name="StatusBar/iOS/Notch"
    >
      {/* Notch pill placeholder */}
      <div className="absolute h-[30px] left-0 right-0 top-0" />

      {/* ── Status Icons (right cluster) ───────────────────────────────── */}
      <div
        className="absolute content-stretch flex items-center"
        style={{ gap: 4, right: 14, top: 16 }}
      >
        {/* Network Signal ------------------------------------------------ */}
        <div className="relative shrink-0" style={{ width: 20, height: 14 }}>
          {/* Ghost/empty bar (4th, rightmost) */}
          <div className="absolute" style={{ top: "14.29%", right: "7.5%", bottom: "14.29%", left: "77.5%" }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 10">
              <path clipRule="evenodd" d={svgPaths.p3636b500} fill={fgGhost} fillOpacity={fgGhostOpa} fillRule="evenodd" />
            </svg>
          </div>
          {/* Short bar (1st) */}
          <div className="absolute" style={{ bottom: "14.29%", left: "10%", right: "75%", top: "53.57%" }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 4.5">
              <path clipRule="evenodd" d={svgPaths.p129e3f40} fill={fg} fillRule="evenodd" />
            </svg>
          </div>
          {/* Medium bar (2nd) */}
          <div className="absolute" style={{ top: "42.86%", right: "52.5%", bottom: "14.29%", left: "32.5%" }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 6">
              <path clipRule="evenodd" d={svgPaths.p28546400} fill={fg} fillRule="evenodd" />
            </svg>
          </div>
          {/* Tall bar (3rd) */}
          <div className="absolute" style={{ top: "28.57%", right: "30%", bottom: "14.29%", left: "55%" }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 8">
              <path clipRule="evenodd" d={svgPaths.p383d5700} fill={fg} fillRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* WiFi Signal --------------------------------------------------- */}
        <div className="relative shrink-0" style={{ width: 16, height: 14 }}>
          {/* Outer arc */}
          <div className="absolute" style={{ top: "14.29%", right: "4.69%", bottom: "54.84%", left: "6.25%" }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.25 4.32259">
              <path d={svgPaths.p392f1a00} fill={fg} />
            </svg>
          </div>
          {/* Middle arc */}
          <div className="absolute" style={{ top: "39.07%", right: "20.1%", bottom: "37.26%", left: "21.66%" }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.3198 3.31425">
              <path d={svgPaths.p2307b100} fill={fg} />
            </svg>
          </div>
          {/* Inner dot/arc */}
          <div className="absolute" style={{ top: "63.85%", right: "35.56%", bottom: "14.29%", left: "37.11%" }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.37186 3.06041">
              <path d={svgPaths.p1da632f0} fill={fg} />
            </svg>
          </div>
        </div>

        {/* Battery ------------------------------------------------------- */}
        <div className="relative shrink-0" style={{ width: 25, height: 14 }}>
          {/* Terminal nub */}
          <div className="absolute" style={{ left: 24, top: 5, width: 1, height: 4 }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 4">
              <path d={svgPaths.p16442180} fill={fgBattOutline} fillOpacity={fgBattOpa} />
            </svg>
          </div>
          {/* Outline */}
          <div className="absolute" style={{ left: 0, top: 1, width: 23, height: 12 }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 12">
              <path clipRule="evenodd" d={svgPaths.p48c4400} fill={fgBattOutline} fillOpacity={fgBattOpa} fillRule="evenodd" />
            </svg>
          </div>
          {/* Capacity fill */}
          <div
            className="absolute rounded-[1px]"
            style={{
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
      <div className="absolute" style={{ right: 71, top: 8, width: 6, height: 6 }} />

      {/* ── Time (left) ────────────────────────────────────────────────── */}
      <div
        className="absolute overflow-clip"
        style={{ left: 21, top: 12, width: 54, height: 21 }}
      >
        <span
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
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
