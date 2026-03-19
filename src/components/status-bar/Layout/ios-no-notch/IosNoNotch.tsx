import React from "react";
import { StatusBarMode } from "../../Mode/light/LightMode";

// ─── Layout / iOS Home Indicator (Lower) ──────────────────────────────────────
// iPhone X and later — bottom home indicator area 34pt.
// Based on Figma: IPhoneStatusBarLower (light + dark)
// A single rounded pill centered near the bottom edge.

interface IOSNoNotchProps {
  mode?: StatusBarMode;
  /** Kept for API compatibility — not displayed in this layout */
  time?: string;
  className?: string;
}

export function IOSNoNotchStatusBar({
  mode = "light",
  className = "",
}: IOSNoNotchProps) {
  const isDark = mode === "dark";
  const bg   = isDark ? "#0f0f0f" : "#f5f5f5";
  const pill = isDark ? "#ffffff" : "#000000";

  return (
    <div
      style={{ position: "relative", width: "100%", height: 34, backgroundColor: bg }}
      data-name="StatusBar/iOS/HomeIndicator"
    >
      {/* Home indicator pill */}
      <div
        style={{ position: "absolute", top: "65.63%", right: "32%", bottom: "18.75%", left: "32.27%" }}
      >
        <div
          style={{ position: "absolute", inset: 0, borderRadius: 10, backgroundColor: pill }}
        />
      </div>
    </div>
  );
}

export type { StatusBarMode };
export default IOSNoNotchStatusBar;
