// ─── Status Bar — Main Orchestrator ──────────────────────────────────────────
// All sub-components live alongside this file:
//
//   src/components/status-bar/
//   ├─ Mode/
//   │    ├─ light/LightMode.tsx          → color token + getModeColor()
//   │    └─ dark/DarkMode.tsx            → color token
//   ├─ Layout/
//   │    ├─ ios-notch/IosNotch.tsx       → IosNotchStatusBar  (44pt)
//   │    └─ ios-no-notch/IosNoNotch.tsx  → IosNoNotchStatusBar (20pt)
//   └─ Platform/
//        ├─ android/AndroidStatusBar.tsx → AndroidStatusBar   (24dp)
//        └─ ios/IosStatusBar.tsx         → IosStatusBar

import React from "react";

import { AndroidStatusBar } from "./Platform/android/AndroidStatusBar";
import { IOSStatusBar }     from "./Platform/ios/IosStatusBar";

// Re-export all types so App.tsx and other consumers get them from one place
export type { StatusBarMode }   from "./Mode/light/LightMode";
export type { StatusBarLayout } from "./Platform/ios/IosStatusBar";

export type StatusBarPlatform = "ios" | "android";

export interface StatusBarProps {
  /** Target platform — 'ios' | 'android' */
  platform?: StatusBarPlatform;
  /** Color scheme — 'light' | 'dark' */
  mode?: "light" | "dark";
  /** iOS only — 'notch' (iPhone X+, 44pt) | 'no-notch' (iPhone 8−, 20pt) */
  layout?: "notch" | "no-notch";
  /** Clock string displayed in the bar, e.g. "9:41" or "1:20 PM" */
  time?: string;
  /** Additional Tailwind / CSS class names */
  className?: string;
}

/**
 * StatusBar
 *
 * Variants
 *   platform : 'ios' | 'android'
 *   mode     : 'light' | 'dark'
 *   layout   : 'notch' | 'no-notch'  (iOS only)
 */
export function StatusBar({
  platform = "ios",
  mode = "light",
  layout = "notch",
  time,
  className = "",
}: StatusBarProps) {
  if (platform === "android") {
    return (
      <AndroidStatusBar mode={mode} time={time} className={className} />
    );
  }

  return (
    <IOSStatusBar
      mode={mode}
      layout={layout}
      time={time}
      className={className}
    />
  );
}

export default StatusBar;
