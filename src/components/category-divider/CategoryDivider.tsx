import React from "react";

export interface CategoryDividerProps {
  label: string;
}

export function CategoryDivider({ label }: CategoryDividerProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "0 16px",
      }}
    >
      <span
        style={{
          flexShrink: 0,
          fontFamily: "var(--font-family-body)",
          fontWeight: "var(--font-weight-bold)" as React.CSSProperties["fontWeight"],
          fontSize: "var(--font-size-label)",
          lineHeight: "var(--line-height-label)",
          letterSpacing: "var(--letter-spacing-label)",
          color: "var(--text-default-none-secondary)",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      <div
        style={{
          flex: 1,
          height: "1px",
          backgroundColor: "var(--ds-divider)",
        }}
      />
    </div>
  );
}
