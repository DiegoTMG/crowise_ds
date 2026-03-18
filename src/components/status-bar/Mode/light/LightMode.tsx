// ─── Mode / Light ─────────────────────────────────────────────────────────────
// Light mode color token for the Status Bar component.
// Used by Layout and Platform components to resolve icon/text color.

export type StatusBarMode = "light" | "dark";

/** Foreground color for Light mode (dark text/icons on light background) */
export const LIGHT_MODE_COLOR = "#14151C";

/**
 * Resolves the foreground color based on the active mode.
 * Import this helper from any Layout or Platform component.
 */
export function getModeColor(mode: StatusBarMode): string {
  return mode === "dark" ? "#FFFFFF" : LIGHT_MODE_COLOR;
}
