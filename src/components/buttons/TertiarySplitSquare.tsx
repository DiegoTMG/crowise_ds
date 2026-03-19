/**
 * Button / Tertiary / Split / Square  ·  TertiarySplitSquare
 *
 * Figma source frames (9 state combinations):
 *   Default              → Button-13-4283  svg-dko56wlcpm   both sections default
 *   Disabled             → Button-13-4287  svg-b3wiqafrkh   both sections disabled
 *   Hover (primary)      → Button-13-4301  svg-igewvcm88f   primary hover  + menu default
 *   Hover (menu)         → Button-13-4315  svg-0ku6w9b37b   primary default + menu hover
 *   Focus (primary)      → Button-13-4329  svg-tkyenc285l   primary focus  + menu default
 *   Focus (menu)         → Button-13-4343  svg-4zasgr0xap   primary default + menu focus
 *   Pressed (primary)    → Button-13-4347  svg-bxm0p9sp4a   primary pressed + menu default
 *   Pressed (menu)       → Button-13-4351  svg-b6ehw817e8   primary default + menu pressed
 *   Loading              → Button-13-4355  svg-g9uyjh5uz1   both sections loading
 *
 * ── Figma structure (Button-13-4283 Default) ──────────────────────────────────
 *
 *   <div> outer — bg=gapColor  flex  gap-px  rounded-[8px]  overflow:clip|visible
 *     <button> Primary action — bg  relative  rounded-bl-[8px] rounded-tl-[8px]
 *       <div> inner — flex  gap-[8px]  items-center  px-[16px]  py-[12px]  overflow-clip
 *         <div> PlusIcon (3-level nesting — see below)
 *         <p>  label text
 *       <div> border overlay — absolute inset-0 pointer-events-none
 *             border-top + border-bottom + border-left  (NO border-right)
 *             rounded-bl-[8px] rounded-tl-[8px]
 *             [Focus: + shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)]]
 *     <div> menu wrapper — flex flex-row items-center self-stretch
 *       <button> Menu — bg  h-full  relative  rounded-br-[8px] rounded-tr-[8px]
 *         <div> inner — flex flex-row items-center overflow-clip h-full
 *           <div> arrow container — flex h-full items-center p-[12px]
 *             <div> ChevronIcon
 *         <div> border overlay — absolute inset-0 pointer-events-none
 *               border-top + border-bottom + border-right  (NO border-left)
 *               rounded-br-[8px] rounded-tr-[8px]
 *               [Focus: + shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)]]
 *
 * ── PlusIcon nesting (Primary action icon) ────────────────────────────────────
 *   L1: content-stretch flex items-center p-[2px] relative shrink-0 size-[24px]
 *   L2: aspect-[24/24] h-full relative shrink-0
 *   L3: -translate-y-1/2 absolute aspect-[14/14] left-[20.83%] right-[20.83%] top-1/2
 *   SVG: viewBox="0 0 11.6667 11.6667"
 *
 * ── ChevronIcon nesting (Menu arrow) ─────────────────────────────────────────
 *   Wrapper: relative shrink-0 size-[24px]
 *   Inner:   absolute bottom-[34.55%] left-1/4 right-1/4 top-[34.57%]
 *   SVG:     viewBox="0 0 12 7.41"
 *
 * ── Token map ────────────────────────────────────────────────────────────────
 *
 * Outer gap divider bg (1px gap between sections exposes outer bg as divider line):
 *   Disabled            → --border-default-disabled-secondary   neutral-20  #DFE2E7
 *   Loading             → --border-default-pressed-secondary    neutral-50  #868CA2
 *   All other states    → --border-default-enabled-secondary    neutral-40  #A3A9B9
 *
 * Primary section tokens per state:
 *   State    │ bg                               │ icon                              │ label                        │ border (3-sided)                    │ focus ring
 *   ─────────┼──────────────────────────────────┼───────────────────────────────────┼──────────────────────────────┼─────────────────────────────────────┼───────────
 *   default  │ --fill-default-enabled-tertiary  │ --icon-default-enabled-tertiary   │ --text-default-none-primary  │ --border-default-enabled-secondary  │ –
 *   hover    │ --fill-default-enabled-tertiary  │ --icon-default-hover-tertiary     │ --text-default-none-primary  │ --border-default-hover-secondary    │ –
 *   focus    │ --fill-default-enabled-tertiary  │ --icon-default-focus-tertiary     │ --text-default-none-primary  │ --border-default-focus-secondary    │ ✓
 *   pressed  │ --fill-default-pressed-tertiary  │ --icon-default-pressed-tertiary   │ --text-default-none-primary  │ --border-default-pressed-secondary  │ –
 *   disabled │ --fill-default-disabled-tertiary │ --icon-default-disabled-tertiary  │ --text-default-disabled-*    │ --border-default-disabled-secondary │ –
 *   loading  │ --fill-default-pressed-tertiary  │ (spinner --annotation-mid-pink)   │ --text-default-none-primary  │ --border-default-pressed-secondary  │ –
 *
 * Menu section tokens per state:
 *   State    │ bg                               │ arrow (chevron)                   │ border (3-sided)                    │ focus ring
 *   ─────────┼──────────────────────────────────┼───────────────────────────────────┼─────────────────────────────────────┼───────────
 *   default  │ --fill-default-enabled-tertiary  │ --icon-default-enabled-tertiary   │ --border-default-enabled-secondary  │ –
 *   hover    │ --fill-default-enabled-tertiary  │ --icon-default-hover-tertiary     │ --border-default-hover-secondary    │ –
 *   focus    │ --fill-default-enabled-tertiary  │ --icon-default-focus-tertiary     │ --border-default-focus-secondary    │ ✓
 *   pressed  │ --fill-default-pressed-tertiary  │ --icon-default-pressed-tertiary   │ --border-default-pressed-secondary  │ –
 *   disabled │ --fill-default-disabled-tertiary │ --icon-default-disabled-tertiary  │ --border-default-disabled-secondary │ –
 *   loading  │ --fill-default-pressed-tertiary  │ --icon-default-pressed-tertiary   │ --border-default-pressed-secondary  │ –
 *
 * No tertiary-specific border tokens exist in theme.css; secondary border tokens
 * map exactly to the Figma hex values and are used here by design.
 */

import React, { useState } from "react";
import { Spinner } from "../Spinner";
import { Add, KeyboardArrowDown } from "../../icons";


// ─── Types ────────────────────────────────────────────────────────────────────

export type TertiarySplitSquareState =
  | "default"
  | "hover"
  | "focus"
  | "pressed"
  | "disabled"
  | "loading";

// ─── Per-section token maps ────────────────────────────────────────────────────
// Primary has icon + label; Menu has arrow only.
// Both sections can be independently in any state.

interface PrimaryTokens {
  bg:          string;
  iconColor:   string;
  labelColor:  string;
  borderColor: string;
  focusShadow: boolean;
  showSpinner: boolean;
}

interface MenuTokens {
  bg:          string;
  arrowColor:  string;
  borderColor: string;
  focusShadow: boolean;
}

const PRIMARY_TOKENS: Record<TertiarySplitSquareState, PrimaryTokens> = {
  default: {
    bg:          "var(--fill-default-enabled-tertiary)",    // white
    iconColor:   "var(--icon-default-enabled-tertiary)",    // neutral-60  #696F88
    labelColor:  "var(--text-default-none-primary)",        // neutral-100 #14151C
    borderColor: "var(--border-default-enabled-secondary)", // neutral-40  #A3A9B9
    focusShadow: false,
    showSpinner: false,
  },
  hover: {
    bg:          "var(--fill-default-hover-tertiary)",      // white
    iconColor:   "var(--icon-default-hover-tertiary)",      // neutral-50  #868CA2
    labelColor:  "var(--text-default-none-primary)",        // stays dark
    borderColor: "var(--border-default-hover-secondary)",   // neutral-30  #C2C7D0
    focusShadow: false,
    showSpinner: false,
  },
  focus: {
    bg:          "var(--fill-default-focus-tertiary)",      // white
    iconColor:   "var(--icon-default-focus-tertiary)",      // neutral-60  #696F88
    labelColor:  "var(--text-default-none-primary)",
    borderColor: "var(--border-default-focus-secondary)",   // neutral-40  #A3A9B9
    focusShadow: true,                                      // --focus-border ring
    showSpinner: false,
  },
  pressed: {
    bg:          "var(--fill-default-pressed-tertiary)",    // neutral-10  #F3F4F6
    iconColor:   "var(--icon-default-pressed-tertiary)",    // neutral-70  #4D5165
    labelColor:  "var(--text-default-none-primary)",
    borderColor: "var(--border-default-pressed-secondary)", // neutral-50  #868CA2
    focusShadow: false,
    showSpinner: false,
  },
  disabled: {
    bg:          "var(--fill-default-disabled-tertiary)",    // white
    iconColor:   "var(--icon-default-disabled-tertiary)",    // neutral-30  #C2C7D0
    labelColor:  "var(--text-default-disabled-tertiary)",    // neutral-30  #C2C7D0
    borderColor: "var(--border-default-disabled-secondary)", // neutral-20  #DFE2E7
    focusShadow: false,
    showSpinner: false,
  },
  loading: {
    bg:          "var(--fill-default-pressed-tertiary)",    // neutral-10  #F3F4F6
    iconColor:   "var(--fill-default-enabled-primary)",              // spinner track active #DA33AB
    labelColor:  "var(--text-default-none-primary)",
    borderColor: "var(--border-default-pressed-secondary)", // neutral-50  #868CA2
    focusShadow: false,
    showSpinner: true,
  },
};

const MENU_TOKENS: Record<TertiarySplitSquareState, MenuTokens> = {
  default: {
    bg:          "var(--fill-default-enabled-tertiary)",    // white
    arrowColor:  "var(--icon-default-enabled-tertiary)",    // neutral-60  #696F88
    borderColor: "var(--border-default-enabled-secondary)", // neutral-40  #A3A9B9
    focusShadow: false,
  },
  hover: {
    bg:          "var(--fill-default-hover-tertiary)",      // white
    arrowColor:  "var(--icon-default-hover-tertiary)",      // neutral-50  #868CA2
    borderColor: "var(--border-default-hover-secondary)",   // neutral-30  #C2C7D0
    focusShadow: false,
  },
  focus: {
    bg:          "var(--fill-default-focus-tertiary)",      // white
    arrowColor:  "var(--icon-default-focus-tertiary)",      // neutral-60  #696F88
    borderColor: "var(--border-default-focus-secondary)",   // neutral-40  #A3A9B9
    focusShadow: true,                                      // --focus-border ring
  },
  pressed: {
    bg:          "var(--fill-default-pressed-tertiary)",    // neutral-10  #F3F4F6
    arrowColor:  "var(--icon-default-pressed-tertiary)",    // neutral-70  #4D5165
    borderColor: "var(--border-default-pressed-secondary)", // neutral-50  #868CA2
    focusShadow: false,
  },
  disabled: {
    bg:          "var(--fill-default-disabled-tertiary)",    // white
    arrowColor:  "var(--icon-default-disabled-tertiary)",    // neutral-30  #C2C7D0
    borderColor: "var(--border-default-disabled-secondary)", // neutral-20  #DFE2E7
    focusShadow: false,
  },
  loading: {
    bg:          "var(--fill-default-pressed-tertiary)",    // neutral-10  #F3F4F6 (pressed fill)
    arrowColor:  "var(--icon-default-pressed-tertiary)",    // neutral-70  #4D5165
    borderColor: "var(--border-default-pressed-secondary)", // neutral-50  #868CA2
    focusShadow: false,
  },
};

// ─── Outer gap divider background ─────────────────────────────────────────────
// Figma: outer wrapper bg IS the 1 px divider (gap-px exposes it as a hairline).
//   Disabled → --border-default-disabled-secondary  neutral-20  #DFE2E7
//   Loading  → --border-default-pressed-secondary   neutral-50  #868CA2
//   Others   → --border-default-enabled-secondary   neutral-40  #A3A9B9

function outerBg(
  primaryState: TertiarySplitSquareState,
  menuState:    TertiarySplitSquareState
): string {
  if (primaryState === "disabled" && menuState === "disabled") {
    return "var(--border-default-disabled-secondary)"; // #DFE2E7
  }
  if (primaryState === "loading" || menuState === "loading") {
    return "var(--border-default-pressed-secondary)";  // #868CA2
  }
  return "var(--border-default-enabled-secondary)";    // #A3A9B9
}

// ─── Typography — Button/Label ────────────────────────────────────────────────
// Figma: font-['Noto_sans:Regular',sans-serif] not-italic text-[16px]
//        leading-[24px] tracking-[-0.12px] whitespace-nowrap

const LABEL_BASE: React.CSSProperties = {
  fontFamily:    "var(--font-family-body)",
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

// ─── PlusIcon — exact Figma 3-level nesting ───────────────────────────────────
// L1: content-stretch flex items-center p-[2px] relative shrink-0 size-[24px]
// L2: aspect-[24/24] h-full relative shrink-0
// L3: -translate-y-1/2 absolute aspect-[14/14] left-[20.83%] right-[20.83%] top-1/2
// SVG: viewBox="0 0 11.6667 11.6667"  path: p2f57dbf0

function PlusIcon({ fill }: { fill: string }) {
  return <Add size={16} style={{ color: fill, flexShrink: 0 }} aria-hidden />;
}

// ─── ChevronIcon — exact Figma structure ─────────────────────────────────────
// Wrapper: relative shrink-0 size-[24px]
// Inner:   absolute bottom-[34.55%] left-1/4 right-1/4 top-[34.57%]
// SVG:     viewBox="0 0 12 7.41"  path: p3a351d00

function ChevronIcon({ fill }: { fill: string }) {
  return <KeyboardArrowDown size={16} style={{ color: fill, flexShrink: 0 }} aria-hidden />;
}

// ─── Split button atom ────────────────────────────────────────────────────────

export interface TertiarySplitSquareAtomProps {
  /** Pin primary section to a specific visual state (for showcase previews). */
  primaryForcedState?: TertiarySplitSquareState;
  /** Pin menu section to a specific visual state (for showcase previews). */
  menuForcedState?:    TertiarySplitSquareState;
  /** Button label — defaults to "[Button]" matching Figma. */
  label?:              string;
  onPrimaryClick?:     () => void;
  onMenuClick?:        () => void;
}

export function TertiarySplitSquareAtom({
  primaryForcedState,
  menuForcedState,
  label = "[Button]",
  onPrimaryClick,
  onMenuClick,
}: TertiarySplitSquareAtomProps) {
  const [primaryLive, setPrimaryLive] = useState<TertiarySplitSquareState>("default");
  const [menuLive,    setMenuLive]    = useState<TertiarySplitSquareState>("default");

  const primaryState = primaryForcedState ?? primaryLive;
  const menuState    = menuForcedState    ?? menuLive;

  const pt = PRIMARY_TOKENS[primaryState];
  const mt = MENU_TOKENS[menuState];

  const isDisabled   = primaryState === "disabled" && menuState === "disabled";
  const isLoadingP   = primaryState === "loading";
  const isLoadingM   = menuState    === "loading";
  const hasFocus     = primaryState === "focus"    || menuState  === "focus";

  const setPrimary = (s: TertiarySplitSquareState) => () => {
    if (!primaryForcedState) setPrimaryLive(s);
  };
  const setMenu = (s: TertiarySplitSquareState) => () => {
    if (!menuForcedState) setMenuLive(s);
  };

  return (
    // ── Outer wrapper ─────────────────────────────────────────────────────
    // Figma: bg=gapColor  flex  gap-px  rounded-[8px]  items-center  justify-center
    // overflow must be "visible" when focus is active so the ring is not clipped.
    <div
      style={{
        background:     outerBg(primaryState, menuState),
        display:        "flex",
        gap:            "1px",               // gap-px — exposes outer bg as 1 px divider
        alignItems:     "center",
        justifyContent: "center",
        overflow:       hasFocus ? "visible" : "clip",
        position:       "relative",
        borderRadius:   "8px",
      }}
    >

      {/* ── Primary action section ─────────────────────────────────────────── */}
      {/* Figma: bg-[...] max-w-[360px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0
               Inner: content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px]
               Overlay: absolute border-b border-l border-t (no border-r) inset-0
                        pointer-events-none  rounded-bl-[8px] rounded-tl-[8px]
                        [Focus: + shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)]]            */}
      <button
        disabled={isDisabled}
        aria-busy={isLoadingP}
        onClick={onPrimaryClick}
        onMouseEnter={setPrimary("hover")}
        onMouseLeave={setPrimary("default")}
        onMouseDown={setPrimary("pressed")}
        onMouseUp={setPrimary("hover")}
        onFocus={setPrimary("focus")}
        onBlur={setPrimary("default")}
        style={{
          // Shape
          position:      "relative",
          borderRadius:  "8px 0 0 8px",  // rounded-tl + rounded-bl
          flexShrink:    0,
          maxWidth:      "360px",
          // Inner layout (avoids extra wrapper div — Figma flattened)
          display:       "flex",
          gap:           "8px",
          alignItems:    "center",
          overflow:      "clip",
          paddingTop:    "12px",
          paddingBottom: "12px",
          paddingLeft:   "16px",
          paddingRight:  "16px",
          // Colour
          background:    pt.bg,
          // Reset
          border:        "none",
          outline:       "none",
          cursor:        isDisabled ? "not-allowed" : isLoadingP ? "wait" : "pointer",
          transition:    "background 0.1s",
        }}
      >
        {/* Icon or Spinner */}
        {pt.showSpinner ? (
          <Spinner
            size={18}
            trackColor="var(--neutral-20)"
            activeColor="var(--fill-default-enabled-primary)"
          />
        ) : (
          <PlusIcon fill={pt.iconColor} />
        )}

        {/* Label */}
        <p style={{ ...LABEL_BASE, color: pt.labelColor }}>
          {isLoadingP ? "Loading..." : label}
        </p>

        {/* ── Border overlay — 3-sided: top + bottom + left, NO right ─────── */}
        <div
          aria-hidden="true"
          style={{
            position:      "absolute",
            inset:         0,
            pointerEvents: "none",
            borderRadius:  "8px 0 0 8px",
            borderTop:     `1px solid ${pt.borderColor}`,
            borderBottom:  `1px solid ${pt.borderColor}`,
            borderLeft:    `1px solid ${pt.borderColor}`,
            // Use transparent instead of "none" — keeps all four sides as
            // explicit non-shorthand properties so React doesn't warn about
            // mixing shorthand/non-shorthand. Transparent avoids a visible
            // right border while also preventing `currentColor` from leaking
            // into the computed border-color shorthand (which would produce a
            // 4-value string the browser cannot parse as a single colour
            // during a border-color CSS transition).
            borderRight:   "1px solid transparent",
            // Focus ring applied to the overlay div — exact Figma pattern
            boxShadow:     pt.focusShadow ? "var(--focus-border)" : "none",
            // Remove border-color from the transition: the four sides have
            // different colours (3× pt.borderColor + 1× transparent), so the
            // computed border-color shorthand is a 4-value string that the
            // browser cannot interpolate as a single colour.
            transition:    "box-shadow 0.1s",
          }}
        />
      </button>

      {/* ── Menu section ──────────────────────────────────────────────────── */}
      {/* Figma outer: flex flex-row items-center self-stretch */}
      <div
        style={{
          display:       "flex",
          flexDirection: "row",
          alignItems:    "center",
          alignSelf:     "stretch",
        }}
      >
        {/* Figma: bg-[...] h-full relative rounded-br-[8px] rounded-tr-[8px] shrink-0
                   Inner: flex flex-row items-center overflow-clip rounded-[inherit] size-full
                   Overlay: absolute border-b border-r border-t (no border-l) inset-0
                            pointer-events-none  rounded-br-[8px] rounded-tr-[8px]
                            [Focus: + shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)]]           */}
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
            background:    mt.bg,
            height:        "100%",
            position:      "relative",
            borderRadius:  "0 8px 8px 0",  // rounded-tr + rounded-br
            flexShrink:    0,
            border:        "none",
            outline:       "none",
            cursor:        isDisabled ? "not-allowed" : isLoadingM ? "wait" : "pointer",
            transition:    "background 0.1s",
          }}
        >
          {/* Inner row */}
          <div
            style={{
              display:       "flex",
              flexDirection: "row",
              alignItems:    "center",
              overflow:      "clip",
              borderRadius:  "inherit",
              height:        "100%",
              width:         "100%",
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
              <ChevronIcon fill={mt.arrowColor} />
            </div>
          </div>

          {/* ── Border overlay — 3-sided: top + bottom + right, NO left ───── */}
          <div
            aria-hidden="true"
            style={{
              position:      "absolute",
              inset:         0,
              pointerEvents: "none",
              borderRadius:  "0 8px 8px 0",
              borderTop:     `1px solid ${mt.borderColor}`,
              borderBottom:  `1px solid ${mt.borderColor}`,
              borderRight:   `1px solid ${mt.borderColor}`,
              borderLeft:    "none",
              // Focus ring applied to the overlay div — exact Figma pattern
              boxShadow:     mt.focusShadow ? "var(--focus-border)" : "none",
              transition:    "border-color 0.1s, box-shadow 0.1s",
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
  primaryState: TertiarySplitSquareState;
  menuState:    TertiarySplitSquareState;
  description:  string;
}[] = [
  {
    id:           "default",
    name:         "Default",
    figmaFile:    "Button-13-4283 · svg-dko56wlcpm",
    primaryState: "default",
    menuState:    "default",
    description:  "Both sections resting. White fill, neutral-60 icon/arrow (#696F88), neutral-40 border/gap (#A3A9B9).",
  },
  {
    id:           "hover-primary",
    name:         "Hover (primary)",
    figmaFile:    "Button-13-4301 · svg-igewvcm88f",
    primaryState: "hover",
    menuState:    "default",
    description:  "Primary hovered — icon → neutral-50 (#868CA2), border → neutral-30 (#C2C7D0). Menu stays default.",
  },
  {
    id:           "hover-menu",
    name:         "Hover (menu)",
    figmaFile:    "Button-13-4315 · svg-0ku6w9b37b",
    primaryState: "default",
    menuState:    "hover",
    description:  "Menu hovered — arrow → neutral-50 (#868CA2), menu border → neutral-30 (#C2C7D0). Primary stays default.",
  },
  {
    id:           "focus-primary",
    name:         "Focus (primary)",
    figmaFile:    "Button-13-4329 · svg-tkyenc285l",
    primaryState: "focus",
    menuState:    "default",
    description:  "Primary keyboard-focused — same tokens as default + --focus-border ring on overlay div. Menu stays default.",
  },
  {
    id:           "focus-menu",
    name:         "Focus (menu)",
    figmaFile:    "Button-13-4343 · svg-4zasgr0xap",
    primaryState: "default",
    menuState:    "focus",
    description:  "Menu keyboard-focused — focus ring on menu overlay div. Primary stays default.",
  },
  {
    id:           "pressed-primary",
    name:         "Pressed (primary)",
    figmaFile:    "Button-13-4347 · svg-bxm0p9sp4a",
    primaryState: "pressed",
    menuState:    "default",
    description:  "Primary held — fill → neutral-10 (#F3F4F6), icon → neutral-70 (#4D5165), border → neutral-50 (#868CA2). Menu default.",
  },
  {
    id:           "pressed-menu",
    name:         "Pressed (menu)",
    figmaFile:    "Button-13-4351 · svg-b6ehw817e8",
    primaryState: "default",
    menuState:    "pressed",
    description:  "Menu held — fill → neutral-10 (#F3F4F6), arrow → neutral-70 (#4D5165), border → neutral-50 (#868CA2). Primary default.",
  },
  {
    id:           "disabled",
    name:         "Disabled",
    figmaFile:    "Button-13-4287 · svg-b3wiqafrkh",
    primaryState: "disabled",
    menuState:    "disabled",
    description:  "Both sections non-interactive. Icon/label/arrow → neutral-30 (#C2C7D0), border/gap → neutral-20 (#DFE2E7).",
  },
  {
    id:           "loading",
    name:         "Loading",
    figmaFile:    "Button-13-4355 · svg-g9uyjh5uz1",
    primaryState: "loading",
    menuState:    "loading",
    description:  "Both sections loading. Fill → neutral-10. Primary: spinner (#DA33AB) + 'Loading...' label. Menu: arrow neutral-70. Gap → neutral-50.",
  },
];

// ─── Showcase / standalone page ───────────────────────────────────────────────

export function TertiarySplitSquare() {
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
        fontFamily: "var(--font-family-body)",
      }}
    >
      <div
        style={{
          maxWidth:      1100,
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
              fontFamily:    "var(--font-family-body)",
              fontSize:      "11px",
              fontWeight:    600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color:         "var(--text-default-none-secondary)",
              margin:        0,
            }}
          >
            Cropwise Design System V2 · Buttons / Tertiary / Split / Square
          </p>
          <h1
            style={{
              fontFamily:    "var(--font-family-body)",
              fontSize:      "32px",
              fontWeight:    600,
              letterSpacing: "-0.5px",
              lineHeight:    "1.2",
              color:         "var(--text-default-none-primary)",
              margin:        0,
            }}
          >
            TertiarySplitSquare
          </h1>
          <p
            style={{
              fontFamily: "var(--font-family-body)",
              fontSize:   "16px",
              fontWeight: "var(--font-weight-regular)",
              lineHeight: "24px",
              color:      "var(--text-default-none-secondary)",
              margin:     0,
              maxWidth:   680,
            }}
          >
            Two-section tertiary split button: primary action (left, icon + label) and
            menu chevron (right). Sections are independently interactive. The 1 px gap
            between sections exposes the outer wrapper background as the divider line.
            Borders live on absolute inset overlay <code>&lt;div&gt;</code>s with 3-sided
            borders; focus ring applied to the same overlay.
          </p>
        </header>

        {/* ── Interactive preview ──────────────────────────────────────────── */}
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
                fontFamily:    "var(--font-family-body)",
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
                fontFamily: "var(--font-family-body)",
                fontSize:   "14px",
                fontWeight: "var(--font-weight-regular)",
                lineHeight: "20px",
                color:      "var(--text-default-none-secondary)",
                margin:     0,
              }}
            >
              Hover or Tab into each section independently. Click the primary action to trigger loading (2.4 s).
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <TertiarySplitSquareAtom
              primaryForcedState={liveLoading ? "loading" : undefined}
              menuForcedState={liveLoading ? "loading" : undefined}
              onPrimaryClick={triggerLoading}
            />
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
              gridTemplateColumns: "200px 1fr 200px",
              padding:             "12px 24px",
              background:          "var(--fill-default-none-secondary)",
              borderBottom:        "1px solid var(--border-default-none-secondary)",
            }}
          >
            {["State · Figma", "Description", "Preview"].map((col, i) => (
              <span
                key={col}
                style={{
                  fontFamily:    "var(--font-family-body)",
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

          {SHOWCASE_STATES.map((row, idx) => (
            <div
              key={row.id}
              style={{
                display:             "grid",
                gridTemplateColumns: "200px 1fr 200px",
                padding:             "18px 24px",
                alignItems:          "center",
                borderBottom:
                  idx < SHOWCASE_STATES.length - 1
                    ? "1px solid var(--border-default-none-secondary)"
                    : "none",
              }}
            >
              {/* State badge + Figma ref */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span
                  style={{
                    alignSelf:    "flex-start",
                    padding:      "3px 10px",
                    border:       "1px solid var(--border-default-none-secondary)",
                    borderRadius: "4px",
                    fontFamily:   "var(--font-family-body)",
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
                  fontFamily:   "var(--font-family-body)",
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
                <TertiarySplitSquareAtom
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
              fontFamily:    "var(--font-family-body)",
              fontSize:      "11px",
              fontWeight:    600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color:         "var(--text-default-none-primary)",
              margin:        0,
            }}
          >
            Figma structure — absolute border overlay pattern
          </p>

          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap:                 "10px",
            }}
          >
            {[
              { prop: "border-radius",      value: "8px (square)",              figma: "rounded-[8px] on outer + sections"        },
              { prop: "primary padding",    value: "px-16px py-12px",           figma: "px-[16px] py-[12px]"                      },
              { prop: "icon-to-label gap",  value: "8px",                       figma: "gap-[8px]"                                },
              { prop: "menu padding",       value: "p-12px (uniform)",          figma: "p-[12px] arrow container"                 },
              { prop: "section gap",        value: "1px (gap-px divider)",      figma: "gap-px on outer — exposes bg as divider"  },
              { prop: "primary border",     value: "top + bottom + left",       figma: "border-b border-l border-t — no right"    },
              { prop: "menu border",        value: "top + bottom + right",      figma: "border-b border-r border-t — no left"     },
              { prop: "focus ring",         value: "--focus-border",            figma: "shadow-[0px_0px_0px_3px_rgba(0,146,228)]" },
              { prop: "loading primary",    value: "spinner + 'Loading...'",    figma: "TEMP LOADING SPINNER  size-[24px]"        },
              { prop: "loading menu",       value: "arrow stays neutral-70",    figma: "same arrow, pressed fill/border tokens"   },
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
                <span style={{ fontFamily: "var(--font-family-body)", fontSize: "13px", fontWeight: "var(--font-weight-regular)", color: "var(--text-default-none-primary)" }}>
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