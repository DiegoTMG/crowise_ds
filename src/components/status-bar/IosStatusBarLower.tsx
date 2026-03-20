import React from "react";

// ─── iOS Status Bar Lower (Home Indicator) ────────────────────────────────────
// iPhone X and later — bottom home indicator area 32pt.
// Figma: iPhone-status-bar(lower) / Dark-mode=false | Dark-mode=true
// A single rounded pill centered near the bottom edge.

export type StatusBarMode = "light" | "dark";

export interface IosStatusBarLowerProps {
  mode?: StatusBarMode;
  className?: string;
}

export function IosStatusBarLower({
  mode = "light",
  className = "",
}: IosStatusBarLowerProps) {
  const isDark = mode === "dark";

  // Figma: light = #FFFFFF (Neutral-00), dark = #0F0F0F
  const bg = isDark ? "#0f0f0f" : "var(--mono-white-100)";
  // Figma: light pill = #14151C (Neutral-100), dark pill = #FFFFFF
  const pill = isDark ? "var(--mono-white-100)" : "var(--neutral-100)";

  return (
    <div
      className={className}
      style={{ position: "relative", width: "100%", height: 32, backgroundColor: bg }}
      data-name="iPhone-status-bar(lower)"
    >
      {/* Home indicator pill */}
      <div
        style={{
          position: "absolute",
          top: "65.63%",
          right: "32%",
          bottom: "18.75%",
          left: "32.27%",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 10,
            backgroundColor: pill,
          }}
        />
      </div>
    </div>
  );
}

export default IosStatusBarLower;
