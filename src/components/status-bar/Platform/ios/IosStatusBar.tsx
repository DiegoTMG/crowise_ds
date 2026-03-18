import React from "react";
import { StatusBarMode } from "../../Mode/light/LightMode";
import { IOSNotchStatusBar } from "../../Layout/ios-notch/IosNotch";
import { IOSNoNotchStatusBar } from "../../Layout/ios-no-notch/IosNoNotch";

// ─── Platform / iOS ───────────────────────────────────────────────────────────
// iOS status bar platform wrapper.
// Delegates rendering to the appropriate Layout component
// based on the `layout` prop (notch | no-notch).

export type StatusBarLayout = "notch" | "no-notch";

interface IOSStatusBarProps {
  mode?: StatusBarMode;
  layout?: StatusBarLayout;
  time?: string;
  className?: string;
}

export function IOSStatusBar({
  mode = "light",
  layout = "notch",
  time,
  className = "",
}: IOSStatusBarProps) {
  if (layout === "notch") {
    return (
      <IOSNotchStatusBar
        mode={mode}
        time={time ?? "9:41"}
        className={className}
      />
    );
  }

  return (
    <IOSNoNotchStatusBar
      mode={mode}
      time={time ?? "1:20 PM"}
      className={className}
    />
  );
}

export type { StatusBarMode };
export default IOSStatusBar;
