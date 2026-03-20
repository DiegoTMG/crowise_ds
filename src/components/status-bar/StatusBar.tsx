// ─── Status Bar — Main Orchestrator ──────────────────────────────────────────
// All sub-components live alongside this file:
//
//   src/components/status-bar/
//   ├─ AndroidStatusBar.tsx    → Android system bar (24dp)
//   ├─ IosStatusBarUpper.tsx   → iPhone status bar upper (44pt)
//   └─ IosStatusBarLower.tsx   → iPhone home indicator lower (32pt)

import React from "react";

import { AndroidStatusBar } from "./AndroidStatusBar";
import { IosStatusBarUpper } from "./IosStatusBarUpper";
import { IosStatusBarLower } from "./IosStatusBarLower";

export type StatusBarMode = "light" | "dark";
export type StatusBarPlatform = "ios" | "android";
export type StatusBarLayout = "upper" | "lower";

export interface StatusBarProps {
  /** Target platform — 'ios' | 'android' */
  platform?: StatusBarPlatform;
  /** Color scheme — 'light' | 'dark' */
  mode?: StatusBarMode;
  /** iOS only — 'upper' (status bar, 44pt) | 'lower' (home indicator, 32pt) */
  layout?: StatusBarLayout;
  /** Clock string displayed in the bar, e.g. "9:41" or "12:30" */
  time?: string;
  /** Additional CSS class names */
  className?: string;
}

export function StatusBar({
  platform = "ios",
  mode = "light",
  layout = "upper",
  time,
  className = "",
}: StatusBarProps) {
  if (platform === "android") {
    return (
      <AndroidStatusBar mode={mode} time={time} className={className} />
    );
  }

  if (layout === "lower") {
    return <IosStatusBarLower mode={mode} className={className} />;
  }

  return (
    <IosStatusBarUpper
      mode={mode}
      time={time ?? "9:41"}
      className={className}
    />
  );
}

export default StatusBar;
