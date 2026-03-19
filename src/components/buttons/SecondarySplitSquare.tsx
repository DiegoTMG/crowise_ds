/**
 * Button / Secondary / Split / Square  ·  SecondarySplitSquare
 *
 * Figma source frames (10 state combinations):
 *   Default              → Button-13-3450  svg-erd6op4owf   both sections default
 *   Disabled             → Button-13-3454  svg-5ncbx6vvxm   both sections disabled
 *   Hover (primary)      → Button-13-3468  svg-oc3z3ml47c   primary hover + menu default
 *   Hover (menu)         → Button-13-3482  svg-j7p10kw7rg   primary default + menu hover
 *   Focus (primary)      → Button-13-3496  svg-jrfw8rx7tp   primary focus + menu default
 *   Focus (menu)         → Button-13-3510  svg-d1022lblw4   primary default + menu focus
 *   Pressed (primary)    → Button-13-3514  svg-8hjgy0ng4h   primary pressed + menu default
 *   Pressed (menu)       → Button-13-3518  svg-1wowhxgghz   primary default + menu pressed
 *   Pressed (primary+menu)→ Button-13-3526 svg-znhaj4lhnb   primary default + menu pressed
 *   Loading              → Button-13-3522  svg-xmkf06pobl   both sections loading
 *
 * Exact Figma structure (derived from Button-13-3450, 3514, 3522):
 *
 *   <div> outer wrapper — bg=dividerColor, display:flex, gap:1px (the gap IS the divider),
 *                          rounded-[8px], overflow:clip  (visible when section has focus)
 *     <button> Primary action — position:relative, bg, rounded-bl-[8px] rounded-tl-[8px]
 *       <div> inner — flex, gap:8px, items-center, px-16px, py-12px, overflow:clip
 *         <div> PlusIcon (3-level nesting)
 *         <p>  label
 *       <div> border overlay — absolute, inset-0, pointer-events-none,
 *             border-top + border-bottom + border-left (NO border-right),
 *             rounded-bl-[8px] rounded-tl-[8px]
 *             [Focus: + shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)]]
 *     <div> Menu wrapper — flex, alignSelf:stretch
 *       <button> Menu — position:relative, bg, rounded-br-[8px] rounded-tr-[8px], h:100%
 *         <div> inner — flex, items-center, overflow:clip, h:100%
 *           <div> arrow container — flex, items-center, p-12px, h:100%
 *             <div> ChevronIcon
 *         <div> border overlay — absolute, inset-0, pointer-events-none,
 *               border-top + border-bottom + border-right (NO border-left),
 *               rounded-br-[8px] rounded-tr-[8px]
 *               [Focus: + shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)]]
 *
 * ── Token map ────────────────────────────────────────────────────────────────
 *
 * Outer gap divider bg:
 *   Active (default/hover/focus/pressed) → --text-default-enabled-secondary  #14803C (green-60)
 *   Loading                              → --text-default-pressed-secondary   #0C612C (green-70)
 *   Disabled                             → --text-default-disabled-secondary  #C2C7D0 (neutral-30)
 *
 * Per-section states (primary & menu share the same token set):
 *   State    │ bg                            │ accent (border + icon + text)
 *   ─────────┼───────────────────────────────┼──────────────────────────────────────────
 *   default  │ --mono-white-100              │ --text-default-enabled-secondary  green-60
 *   hover    │ --mono-white-100              │ --text-default-hover-secondary    green-50
 *   focus    │ --mono-white-100              │ --text-default-focus-secondary    green-60 + --focus-border
 *   pressed  │ --fill-default-none-secondary │ --text-default-pressed-secondary  green-70
 *   disabled │ --mono-white-100              │ --text-default-disabled-secondary neutral-30
 *   loading  │ --fill-default-none-secondary │ --text-default-pressed-secondary  green-70 (spinner replaces icon)
 *
 * SVG paths (from svg-erd6op4owf — Default frame):
 *   p2f57dbf0 → "+" plus icon    viewBox="0 0 11.6667 11.6667"
 *   p3a351d00 → "v" chevron icon viewBox="0 0 12 7.41"
 */

import React, { useState } from "react";
import { Spinner } from "../Spinner";
import { Add, KeyboardArrowDown } from "../../icons";


// ─── Types ────────────────────────────────────────────────────────────────────

export type SplitSquareState =
  | "default"
  | "hover"
  | "focus"
  | "pressed"
  | "disabled"
  | "loading";

// ─── Per-section token map ────────────────────────────────────────────────────

const SECTION_TOKENS: Record<
  SplitSquareState,
  { bg: string; accent: string; focusShadow: string }
> = {
  default: {
    bg:          "var(--mono-white-100)",
    accent:      "var(--text-default-enabled-secondary)", // green-60  #14803C
    focusShadow: "none",
  },
  hover: {
    bg:          "var(--mono-white-100)",
    accent:      "var(--text-default-hover-secondary)",   // green-50  #19A04B
    focusShadow: "none",
  },
  focus: {
    bg:          "var(--mono-white-100)",
    accent:      "var(--text-default-focus-secondary)",   // green-60  #14803C
    focusShadow: "var(--focus-border)",                   // 0 0 0 3px rgba(0,146,228,0.5)
  },
  pressed: {
    bg:          "var(--fill-default-none-secondary)",    // neutral-10 #F3F4F6
    accent:      "var(--text-default-pressed-secondary)", // green-70  #0C612C
    focusShadow: "none",
  },
  disabled: {
    bg:          "var(--mono-white-100)",
    accent:      "var(--text-default-disabled-secondary)",// neutral-30 #C2C7D0
    focusShadow: "none",
  },
  loading: {
    bg:          "var(--fill-default-none-secondary)",    // neutral-10 #F3F4F6
    accent:      "var(--text-default-pressed-secondary)", // green-70  #0C612C
    focusShadow: "none",
  },
};

// ─── Outer divider bg ─────────────────────────────────────────────────────────
// Figma: outer wrapper bg = gap divider colour (because gap:1px exposes it as a line)
//   Active  → #14803C = --text-default-enabled-secondary
//   Loading → #0C612C = --text-default-pressed-secondary
//   Disabled → #C2C7D0 = --text-default-disabled-secondary

function outerBg(primaryState: SplitSquareState, menuState: SplitSquareState): string {
  if (primaryState === "disabled" && menuState === "disabled") {
    return "var(--text-default-disabled-secondary)";
  }
  if (primaryState === "loading" || menuState === "loading") {
    return "var(--text-default-pressed-secondary)";
  }
  return "var(--text-default-enabled-secondary)";
}

// ─── Typography — Button/Label ────────────────────────────────────────────────
// Figma: font-['Noto_sans:Regular',sans-serif] not-italic text-[16px]
//        leading-[24px] tracking-[-0.12px] whitespace-nowrap

const LABEL: React.CSSProperties = {
  fontFamily:    "var(--font-family-primary)",
  fontSize:      "16px",
  fontWeight:    400,
  fontStyle:     "normal",
  lineHeight:    "24px",
  letterSpacing: "-0.12px",
  whiteSpace:    "nowrap",
  margin:        0,
  position:      "relative",
  flexShrink:    0,
};

// ─── Plus icon — exact Figma three-level nesting ──────────────────────────────
// L1: content-stretch flex items-center p-[2px] relative shrink-0 size-[24px]
// L2: aspect-[24/24] h-full relative shrink-0
// L3: -translate-y-1/2 absolute aspect-[14/14] left-[20.83%] right-[20.83%] top-1/2
// SVG: absolute block size-full fill="none" preserveAspectRatio="none"
//      viewBox="0 0 11.6667 11.6667"

function PlusIcon({ fill }: { fill: string }) {
  return <Add size={16} style={{ color: fill, flexShrink: 0 }} aria-hidden />;
}

// ─── Chevron icon — exact Figma structure ─────────────────────────────────────
// Wrapper: relative shrink-0 size-[24px]
// Inner:   absolute bottom-[34.55%] left-1/4 right-1/4 top-[34.57%]
// SVG:     absolute block size-full  fill="none"  preserveAspectRatio="none"
//          viewBox="0 0 12 7.41"

function ChevronIcon({ fill }: { fill: string }) {
  return <KeyboardArrowDown size={16} style={{ color: fill, flexShrink: 0 }} aria-hidden />;
}

// ─── Split button atom ────────────────────────────────────────────────────────

export interface SecondarySplitSquareAtomProps {
  primaryForcedState?: SplitSquareState;
  menuForcedState?:    SplitSquareState;
  label?:              string;
  onPrimaryClick?:     () => void;
  onMenuClick?:        () => void;
}

export function SecondarySplitSquareAtom({
  primaryForcedState,
  menuForcedState,
  label = "[Button]",
  onPrimaryClick,
  onMenuClick,
}: SecondarySplitSquareAtomProps) {
  const [primaryLive, setPrimaryLive] = useState<SplitSquareState>("default");
  const [menuLive,    setMenuLive]    = useState<SplitSquareState>("default");

  const primaryState = primaryForcedState ?? primaryLive;
  const menuState    = menuForcedState    ?? menuLive;

  const ps = SECTION_TOKENS[primaryState];
  const ms = SECTION_TOKENS[menuState];

  const isDisabled = primaryState === "disabled" && menuState === "disabled";
  const isLoading  = primaryState === "loading"  || menuState === "loading";
  const hasFocus   = primaryState === "focus"    || menuState === "focus";

  const setPrimary = (s: SplitSquareState) => () => { if (!primaryForcedState) setPrimaryLive(s); };
  const setMenu    = (s: SplitSquareState) => () => { if (!menuForcedState)    setMenuLive(s);    };

  return (
    // ── Outer wrapper ─────────────────────────────────────────────────────
    // Figma: bg=dividerColor flex gap-px rounded-[8px]
    // overflow must be visible when a section has focus so the ring isn't clipped.
    <div
      style={{
        background:     outerBg(primaryState, menuState),
        display:        "flex",
        gap:            "1px",           // gap-px — exposes outer bg as the 1px divider
        alignItems:     "center",
        justifyContent: "center",
        overflow:       hasFocus ? "visible" : "clip",
        position:       "relative",
        borderRadius:   "8px",           // Square (vs 100px for Round)
      }}
    >
      {/* ── Primary action ──────────────────────────────────────────────── */}
      {/* Figma: bg-[...] max-w-[360px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0
               Inner: content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px]
               Overlay div: absolute border-b border-l border-t (no border-r) inset-0
                            pointer-events-none rounded-bl-[8px] rounded-tl-[8px]
                            [Focus: + shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)]]         */}
      <button
        disabled={isDisabled}
        aria-busy={primaryState === "loading"}
        onClick={onPrimaryClick}
        onMouseEnter={setPrimary("hover")}
        onMouseLeave={setPrimary("default")}
        onMouseDown={setPrimary("pressed")}
        onMouseUp={setPrimary("hover")}
        onFocus={setPrimary("focus")}
        onBlur={setPrimary("default")}
        style={{
          // Shape
          position:     "relative",
          borderRadius: "8px 0 0 8px",  // rounded-tl + rounded-bl
          flexShrink:   0,
          maxWidth:     "360px",
          // Layout (inner content)
          display:        "flex",
          gap:            "8px",
          alignItems:     "center",
          overflow:       "clip",
          paddingTop:     "12px",
          paddingBottom:  "12px",
          paddingLeft:    "16px",
          paddingRight:   "16px",
          // Colour
          background: ps.bg,
          // Reset
          border:  "none",
          outline: "none",
          cursor:  isDisabled ? "not-allowed" : primaryState === "loading" ? "wait" : "pointer",
          transition: "background 0.1s",
        }}
      >
        {/* Content */}
        {primaryState === "loading" ? (
          <Spinner size={18} trackColor="var(--neutral-20)" activeColor="var(--fill-default-enabled-primary)" />
        ) : (
          <PlusIcon fill={ps.accent} />
        )}

        <p style={{ ...LABEL, color: ps.accent }}>
          {primaryState === "loading" ? "Loading..." : label}
        </p>

        {/* ── Border overlay — Figma: 3-sided (left + top + bottom only) ─── */}
        <div
          aria-hidden="true"
          style={{
            position:      "absolute",
            inset:         0,
            pointerEvents: "none",
            borderRadius:  "8px 0 0 8px",
            // 3-sided border: left + top + bottom, NO right
            borderTop:    `1px solid ${ps.accent}`,
            borderBottom: `1px solid ${ps.accent}`,
            borderLeft:   `1px solid ${ps.accent}`,
            borderRight:  "none",
            // Focus ring via box-shadow on the overlay
            boxShadow:    ps.focusShadow !== "none" ? ps.focusShadow : undefined,
            transition:   "border-color 0.1s, box-shadow 0.1s",
          }}
        />
      </button>

      {/* ── Menu section ────────────────────────────────────────────────── */}
      {/* Figma outer: flex flex-row items-center self-stretch */}
      <div
        style={{
          display:       "flex",
          flexDirection: "row",
          alignItems:    "center",
          alignSelf:     "stretch",
        }}
      >
        {/* Figma inner: bg-[...] h-full relative rounded-br-[8px] rounded-tr-[8px] shrink-0
                        Overlay: absolute border-b border-r border-t (no border-l) inset-0
                                 pointer-events-none rounded-br-[8px] rounded-tr-[8px]
                                 [Focus: + shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)]]     */}
        <button
          disabled={isDisabled}
          aria-label="Open menu"
          onClick={onMenuClick}
          onMouseEnter={setMenu("hover")}
          onMouseLeave={setMenu("default")}
          onMouseDown={setMenu("pressed")}
          onMouseUp={setMenu("hover")}
          onFocus={setMenu("focus")}
          onBlur={setMenu("default")}
          style={{
            // Shape
            background:   ms.bg,
            height:       "100%",
            position:     "relative",
            borderRadius: "0 8px 8px 0",  // rounded-tr + rounded-br
            flexShrink:   0,
            // Reset
            border:   "none",
            outline:  "none",
            cursor:   isDisabled ? "not-allowed" : menuState === "loading" ? "wait" : "pointer",
            transition: "background 0.1s",
          }}
        >
          {/* Figma: flex flex-row items-center overflow-clip rounded-[inherit] size-full */}
          <div
            style={{
              display:        "flex",
              flexDirection:  "row",
              alignItems:     "center",
              overflow:       "clip",
              borderRadius:   "inherit",
              height:         "100%",
              width:          "100%",
            }}
          >
            {/* Arrow container: content-stretch flex h-full items-center p-[12px] */}
            <div
              style={{
                display:    "flex",
                height:     "100%",
                alignItems: "center",
                padding:    "12px",
              }}
            >
              <ChevronIcon fill={ms.accent} />
            </div>
          </div>

          {/* ── Border overlay — Figma: 3-sided (right + top + bottom only) ── */}
          <div
            aria-hidden="true"
            style={{
              position:      "absolute",
              inset:         0,
              pointerEvents: "none",
              borderRadius:  "0 8px 8px 0",
              // 3-sided border: right + top + bottom, NO left
              borderTop:    `1px solid ${ms.accent}`,
              borderBottom: `1px solid ${ms.accent}`,
              borderRight:  `1px solid ${ms.accent}`,
              borderLeft:   "none",
              // Focus ring via box-shadow on the overlay
              boxShadow:    ms.focusShadow !== "none" ? ms.focusShadow : undefined,
              transition:   "border-color 0.1s, box-shadow 0.1s",
            }}
          />
        </button>
      </div>
    </div>
  );
}

// ─── Showcase metadata ────────────────────────────────────────────────────────

const SHOWCASE_STATES: {
  id:           string;
  name:         string;
  figmaFile:    string;
  primaryState: SplitSquareState;
  menuState:    SplitSquareState;
  description:  string;
}[] = [
  {
    id:           "default",
    name:         "Default",
    figmaFile:    "Button-13-3450 · svg-erd6op4owf",
    primaryState: "default",
    menuState:    "default",
    description:  "Both sections resting. White fill, green-60 border and icon. 1 px green-60 gap divider.",
  },
  {
    id:           "hover-primary",
    name:         "Hover (primary)",
    figmaFile:    "Button-13-3468 · svg-oc3z3ml47c",
    primaryState: "hover",
    menuState:    "default",
    description:  "Primary hovered (green-50 accent). Menu stays default (green-60).",
  },
  {
    id:           "hover-menu",
    name:         "Hover (menu)",
    figmaFile:    "Button-13-3482 · svg-j7p10kw7rg",
    primaryState: "default",
    menuState:    "hover",
    description:  "Menu chevron hovered (green-50 accent). Primary stays default (green-60).",
  },
  {
    id:           "focus-primary",
    name:         "Focus (primary)",
    figmaFile:    "Button-13-3496 · svg-jrfw8rx7tp",
    primaryState: "focus",
    menuState:    "default",
    description:  "Primary keyboard-focused. green-60 accent + --focus-border ring on primary overlay div.",
  },
  {
    id:           "focus-menu",
    name:         "Focus (menu)",
    figmaFile:    "Button-13-3510 · svg-d1022lblw4",
    primaryState: "default",
    menuState:    "focus",
    description:  "Menu keyboard-focused. green-60 accent + --focus-border ring on menu overlay div.",
  },
  {
    id:           "pressed-primary",
    name:         "Pressed (primary)",
    figmaFile:    "Button-13-3514 · svg-8hjgy0ng4h",
    primaryState: "pressed",
    menuState:    "default",
    description:  "Primary held. neutral-10 fill (#F3F4F6), green-70 border/icon/text. Menu stays default.",
  },
  {
    id:           "pressed-menu",
    name:         "Pressed (menu)",
    figmaFile:    "Button-13-3518 · svg-1wowhxgghz",
    primaryState: "default",
    menuState:    "pressed",
    description:  "Menu held. neutral-10 fill (#F3F4F6), green-70 border/chevron. Primary stays default.",
  },
  {
    id:           "disabled",
    name:         "Disabled",
    figmaFile:    "Button-13-3454 · svg-5ncbx6vvxm",
    primaryState: "disabled",
    menuState:    "disabled",
    description:  "Both sections disabled. White fill, neutral-30 (#C2C7D0) border, icon, text and divider.",
  },
  {
    id:           "loading",
    name:         "Loading",
    figmaFile:    "Button-13-3522 · svg-xmkf06pobl",
    primaryState: "loading",
    menuState:    "loading",
    description:  "Both sections loading. neutral-10 fill, green-70 border. Spinner uses --fill-default-enabled-primary. Divider turns green-70.",
  },
];

// ─── Showcase page ────────────────────────────────────────────────────────────

export function SecondarySplitSquare() {
  const [liveLoading, setLiveLoading] = useState(false);

  const triggerLoading = () => {
    if (liveLoading) return;
    setLiveLoading(true);
    setTimeout(() => setLiveLoading(false), 2400);
  };

  return (
    <div
      style={{
        minHeight:  "100vh",
        background: "var(--fill-default-none-secondary)",
        padding:    "48px 40px",
        fontFamily: "var(--font-family-primary)",
      }}
    >
      <div
        style={{
          maxWidth:      1040,
          margin:        "0 auto",
          display:       "flex",
          flexDirection: "column",
          gap:           32,
        }}
      >
        {/* ── Header ──────────────────────────────────────────────────────── */}
        <header style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <p
            style={{
              fontFamily:    "var(--font-family-primary)",
              fontSize:      "11px",
              fontWeight:    600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color:         "var(--text-default-none-secondary)",
              margin:        0,
            }}
          >
            Cropwise Design System V2 · buttons / Secondary / Split / Square
          </p>

          <h1
            style={{
              font:          "var(--font-heading-1)",
              letterSpacing: "var(--font-heading-1-letter-spacing)",
              color:         "var(--text-default-none-primary)",
              margin:        0,
            }}
          >
            SecondarySplitSquare
          </h1>

          <p
            style={{
              fontFamily: "var(--font-family-primary)",
              fontSize:   "16px",
              fontWeight: 400,
              lineHeight: "24px",
              color:      "var(--text-default-none-secondary)",
              margin:     0,
              maxWidth:   620,
            }}
          >
            Two independent sections — primary action (left) and menu chevron (right) —
            separated by a 1 px gap whose colour matches the current accent. 8 px corner
            radius. Each section handles hover, focus and press independently. Border
            rendered as absolute 3-sided overlay divs — exact Figma structure.
          </p>
        </header>

        {/* ── Interactive strip ────────────────────────────────────────────── */}
        <section
          style={{
            background:    "var(--fill-default-none-primary)",
            border:        "1px solid var(--border-default-none-secondary)",
            borderRadius:  "8px",
            padding:       "24px 28px",
            display:       "flex",
            flexDirection: "column",
            gap:           "20px",
          }}
        >
          <div>
            <p
              style={{
                fontFamily:    "var(--font-family-primary)",
                fontSize:      "11px",
                fontWeight:    600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color:         "var(--text-default-none-primary)",
                margin:        "0 0 4px",
              }}
            >
              Interactive preview
            </p>
            <p
              style={{
                fontFamily: "var(--font-family-primary)",
                fontSize:   "14px",
                fontWeight: 400,
                lineHeight: "20px",
                color:      "var(--text-default-none-secondary)",
                margin:     0,
              }}
            >
              Hover either section independently. Tab to focus. Click the primary action to trigger a live loading state.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <SecondarySplitSquareAtom
              primaryForcedState={liveLoading ? "loading" : undefined}
              menuForcedState={liveLoading ? "loading" : undefined}
              onPrimaryClick={triggerLoading}
            />
            <SecondarySplitSquareAtom primaryForcedState="hover"    menuForcedState="default"  />
            <SecondarySplitSquareAtom primaryForcedState="default"  menuForcedState="hover"    />
            <SecondarySplitSquareAtom primaryForcedState="focus"    menuForcedState="default"  />
            <SecondarySplitSquareAtom primaryForcedState="pressed"  menuForcedState="default"  />
            <SecondarySplitSquareAtom primaryForcedState="disabled" menuForcedState="disabled" />
          </div>
        </section>

        {/* ── States reference table ───────────────────────────────────────── */}
        <section
          style={{
            background:   "var(--fill-default-none-primary)",
            border:       "1px solid var(--border-default-none-secondary)",
            borderRadius: "8px",
            overflow:     "hidden",
          }}
        >
          {/* Table head */}
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "180px 1fr 200px",
              padding:             "12px 24px",
              background:          "var(--fill-default-none-secondary)",
              borderBottom:        "1px solid var(--border-default-none-secondary)",
            }}
          >
            {["State · Figma", "Description", "Preview"].map((col, i) => (
              <span
                key={col}
                style={{
                  fontFamily:    "var(--font-family-primary)",
                  fontSize:      "11px",
                  fontWeight:    600,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color:         "var(--text-default-none-secondary)",
                  textAlign:     i === 2 ? "right" : "left",
                }}
              >
                {col}
              </span>
            ))}
          </div>

          {/* Rows */}
          {SHOWCASE_STATES.map((row, idx) => (
            <div
              key={row.id}
              style={{
                display:             "grid",
                gridTemplateColumns: "180px 1fr 200px",
                padding:             "18px 24px",
                alignItems:          "center",
                borderBottom:
                  idx < SHOWCASE_STATES.length - 1
                    ? "1px solid var(--border-default-none-secondary)"
                    : "none",
              }}
            >
              {/* State label + Figma ref */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span
                  style={{
                    alignSelf:    "flex-start",
                    padding:      "3px 10px",
                    border:       "1px solid var(--border-default-none-secondary)",
                    borderRadius: "4px",
                    fontFamily:   "var(--font-family-primary)",
                    fontSize:     "13px",
                    fontWeight:   400,
                    color:        "var(--text-default-none-primary)",
                    background:   "var(--fill-default-none-primary)",
                    whiteSpace:   "nowrap",
                  }}
                >
                  {row.name}
                </span>
                <code
                  style={{
                    fontFamily: "monospace",
                    fontSize:   "10px",
                    lineHeight: "14px",
                    color:      "var(--text-default-none-secondary)",
                    opacity:    0.6,
                  }}
                >
                  {row.figmaFile}
                </code>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily:   "var(--font-family-primary)",
                  fontSize:     "14px",
                  fontWeight:   400,
                  lineHeight:   "22px",
                  color:        "var(--text-default-none-secondary)",
                  margin:       0,
                  paddingRight: "24px",
                }}
              >
                {row.description}
              </p>

              {/* Frozen preview */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <SecondarySplitSquareAtom
                  primaryForcedState={row.primaryState}
                  menuForcedState={row.menuState}
                />
              </div>
            </div>
          ))}
        </section>

        {/* ── Structure spec ───────────────────────────────────────────────── */}
        <section
          style={{
            background:    "var(--fill-default-none-primary)",
            border:        "1px solid var(--border-default-none-secondary)",
            borderRadius:  "8px",
            padding:       "20px 24px",
            display:       "flex",
            flexDirection: "column",
            gap:           "12px",
          }}
        >
          <p
            style={{
              fontFamily:    "var(--font-family-primary)",
              fontSize:      "11px",
              fontWeight:    600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color:         "var(--text-default-none-primary)",
              margin:        0,
            }}
          >
            Figma structure — 3-sided border overlay pattern
          </p>

          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap:                 "10px",
            }}
          >
            {[
              { prop: "border-radius",     value: "8px",                    figma: "rounded-[8px]"               },
              { prop: "gap (divider)",      value: "1px (outer bg exposed)", figma: "gap-px"                      },
              { prop: "primary border",     value: "top + left + bottom",    figma: "border-b border-l border-t"  },
              { prop: "menu border",        value: "top + right + bottom",   figma: "border-b border-r border-t"  },
              { prop: "focus ring",         value: "--focus-border",          figma: "shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)]" },
              { prop: "px / py",            value: "16px / 12px (primary)",  figma: "px-[16px] py-[12px]"         },
              { prop: "menu padding",       value: "12px all sides",         figma: "p-[12px]"                    },
              { prop: "plus icon size",     value: "24 × 24 px",             figma: "size-[24px] aspect-[24/24]"  },
            ].map(({ prop, value, figma }) => (
              <div
                key={prop}
                style={{
                  background:    "var(--fill-default-none-secondary)",
                  borderRadius:  "6px",
                  padding:       "12px 14px",
                  display:       "flex",
                  flexDirection: "column",
                  gap:           "4px",
                }}
              >
                <code style={{ fontFamily: "monospace", fontSize: "11px", color: "var(--text-default-none-secondary)" }}>
                  {prop}
                </code>
                <span style={{ fontFamily: "var(--font-family-primary)", fontSize: "13px", fontWeight: 400, color: "var(--text-default-none-primary)" }}>
                  {value}
                </span>
                <span style={{ fontFamily: "monospace", fontSize: "10px", color: "var(--text-default-none-secondary)", opacity: 0.6 }}>
                  Figma: {figma}
                </span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}