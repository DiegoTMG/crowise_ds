import React from "react";

export type TooltipPosition =
  | "top-left"
  | "top-middle"
  | "top-right"
  | "bottom-left"
  | "bottom-middle"
  | "bottom-right"
  | "left-top"
  | "left-middle"
  | "left-bottom"
  | "right-top"
  | "right-middle"
  | "right-bottom";

export type TooltipColour = "dark" | "light";

export interface TooltipProps {
  text: string;
  position?: TooltipPosition;
  colour?: TooltipColour;
  arrow?: boolean;
}

export function Tooltip({
  text,
  position = "top-left",
  colour = "dark",
  arrow = true,
}: TooltipProps) {
  const isDark = colour === "dark";
  const bgColor = isDark ? "var(--neutral-90)" : "var(--mono-white-100)";
  const textColor = isDark ? "var(--mono-white-100)" : "var(--neutral-80)";

  const [side, alignment] = position.split("-") as [string, string];
  const isHorizontal = side === "left" || side === "right";

  const alignItemsMap: Record<string, string> = {
    left: "flex-start",
    middle: "center",
    right: "flex-end",
    top: "flex-start",
    center: "center",
    bottom: "flex-end",
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: isHorizontal ? "row" : "column",
    alignItems: isHorizontal ? "center" : alignItemsMap[alignment] || "flex-start",
    maxWidth: 400,
    boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.15)",
    position: "relative",
  };

  const bodyStyle: React.CSSProperties = {
    backgroundColor: bgColor,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "6px 10px",
    borderRadius: 4,
    ...(isHorizontal
      ? { flex: "1 0 0", minWidth: 0, minHeight: 1 }
      : { width: "100%", flexShrink: 0 }),
  };

  const textStyle: React.CSSProperties = {
    fontFamily: "var(--font-family-body)",
    fontWeight: "var(--font-weight-regular)" as React.CSSProperties["fontWeight"],
    fontSize: "var(--font-size-body-secondary)",
    lineHeight: "var(--line-height-body-secondary)",
    letterSpacing: "var(--letter-spacing-body-secondary)",
    color: textColor,
    width: "100%",
    margin: 0,
  };

  const arrowElement = arrow ? renderArrow(side, alignment, bgColor) : null;
  const arrowFirst = side === "top" || side === "left";

  return (
    <div style={containerStyle}>
      {arrowFirst && arrowElement}
      <div style={bodyStyle}>
        <p style={textStyle}>{text}</p>
      </div>
      {!arrowFirst && arrowElement}
    </div>
  );
}

function renderArrow(side: string, alignment: string, bgColor: string) {
  const isVertical = side === "top" || side === "bottom";

  if (isVertical) {
    const pointsUp = side === "top";

    const arrowStyle: React.CSSProperties = {
      width: 0,
      height: 0,
      borderLeft: "6px solid transparent",
      borderRight: "6px solid transparent",
      ...(pointsUp
        ? { borderBottom: `6px solid ${bgColor}` }
        : { borderTop: `6px solid ${bgColor}` }),
    };

    const wrapperStyle: React.CSSProperties = {
      display: "flex",
      justifyContent:
        alignment === "left"
          ? "flex-start"
          : alignment === "right"
            ? "flex-end"
            : "center",
      paddingLeft: alignment === "left" ? 12 : 0,
      paddingRight: alignment === "right" ? 12 : 0,
      width: "100%",
      flexShrink: 0,
    };

    return (
      <div style={wrapperStyle}>
        <div style={arrowStyle} />
      </div>
    );
  }

  const pointsLeft = side === "left";

  const arrowStyle: React.CSSProperties = {
    width: 0,
    height: 0,
    borderTop: "6px solid transparent",
    borderBottom: "6px solid transparent",
    ...(pointsLeft
      ? { borderRight: `6px solid ${bgColor}` }
      : { borderLeft: `6px solid ${bgColor}` }),
  };

  const wrapperStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent:
      alignment === "top"
        ? "flex-start"
        : alignment === "bottom"
          ? "flex-end"
          : "center",
    paddingTop: 8,
    paddingBottom: 8,
    alignSelf: "stretch",
    flexShrink: 0,
  };

  return (
    <div style={wrapperStyle}>
      <div style={arrowStyle} />
    </div>
  );
}
