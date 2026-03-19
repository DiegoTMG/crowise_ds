import React from "react";

interface SpinnerProps {
  size?: number;
  trackColor?: string;
  activeColor?: string;
}

const KEYFRAMES_ID = "__cw-spinner-keyframes__";

function ensureKeyframes() {
  if (typeof document === "undefined") return;
  if (document.getElementById(KEYFRAMES_ID)) return;
  const style = document.createElement("style");
  style.id = KEYFRAMES_ID;
  style.textContent = `@keyframes cw-spin { to { transform: rotate(360deg); } }`;
  document.head.appendChild(style);
}

export function Spinner({
  size = 24,
  trackColor = "var(--neutral-20, #DFE2E7)",
  activeColor = "var(--fill-info-focus-primary)",
}: SpinnerProps) {
  React.useEffect(ensureKeyframes, []);

  const stroke = size * 0.1;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      style={{ animation: "cw-spin 0.8s linear infinite", flexShrink: 0 }}
      aria-label="Loading"
    >
      {/* Track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke={trackColor}
        strokeWidth={stroke}
      />
      {/* Active arc (75 % of circumference) */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke={activeColor}
        strokeWidth={stroke}
        strokeDasharray={`${circ * 0.75} ${circ * 0.25}`}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Spinner;
