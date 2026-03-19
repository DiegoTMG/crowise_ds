/**
 * Button / Primary / Split / Round  ·  PrimarySplitRound
 *
 * Figma source files (one per state):
 *   Default          → Button-5-3945  svg-jkj44xz18a
 *   Hover (primary)  → Button-5-3949  svg-q9phbf955b
 *   Hover (menu)     → Button-5-3963  svg-xuhkfje2ea
 *   Focus (primary)  → Button-5-3977  svg-9njw1xnpbn
 *   Focus (menu)     → Button-5-3991  svg-2vk6famzxe
 *   Pressed (primary)→ Button-5-4005  svg-8rgnfsynbk
 *   Pressed (menu)   → Button-5-4009  svg-da93v2aijy
 *   Disabled         → Button-5-4013  svg-6arfuqw6y9
 *   Loading          → Button-5-4017  svg-bc6jbwsi48
 *
 * Structure (exact Figma):
 *   Outer wrapper — flex gap-px (1 px divider) rounded-[100px]
 *     ├─ Primary action — rounded-l-[100px]  (hover/focus/press independent)
 *     └─ Menu section  — rounded-r-[100px]  (hover/focus/press independent)
 *
 * Divider colour = outer wrapper bg:
 *   Active states  → var(--green-30)    (#90D6AA)
 *   Disabled       → var(--neutral-30)  (#C2C7D0)
 *
 * Focus ring on individual section → outer overflow must be visible (not clip)
 *   so the box-shadow is not cropped by the parent.
 *
 * Typography — Figma: font-['Noto_sans:Regular',sans-serif] not-italic
 *   text-[16px] leading-[24px] tracking-[-0.12px] whitespace-nowrap
 *   → font-family: var(--font-family-body), weight 400
 *
 * All colours → semantic / primitive tokens from /src/imports/theme.css
 * Spinner     → shared component from /src/app/components/icons/Spinner.tsx
 */

import React, { useState } from "react";
import { Spinner } from "../Spinner";
import { Add, KeyboardArrowDown } from "../../icons";


// ─── Types ────────────────────────────────────────────────────────────────────

type SectionState = "default" | "hover" | "focus" | "pressed" | "disabled" | "loading";

// ─── Section-level colour tokens ─────────────────────────────────────────────
//
// Figma hex → primitive → semantic token
// ─────────────────────────────────────────────────────────────────────────────
// #14803c  green-60  --fill-default-enabled-primary / --fill-default-focus-primary
// #19a04b  green-50  --fill-default-hover-primary
// #0c612c  green-70  --fill-default-pressed-primary
// #dfe2e7  neutral-20 --fill-default-disabled-primary
// white             --text/icon-default-enabled-primary
//                   --text/icon-default-hover-primary
//                   --text/icon-default-focus-primary
// #f3f4f6  neutral-10 --text/icon-default-pressed-primary
// #c2c7d0  neutral-30 --text/icon-default-disabled-primary
// #da33ab            --annotation-mid-pink  (spinner)

const SECTION_TOKENS: Record<
  SectionState,
  { bg: string; textColor: string; iconColor: string; boxShadow: string }
> = {
  default: {
    bg:        "var(--fill-default-enabled-primary)",
    textColor: "var(--text-default-enabled-primary)",
    iconColor: "var(--icon-default-enabled-primary)",
    boxShadow: "none",
  },
  hover: {
    bg:        "var(--fill-default-hover-primary)",
    textColor: "var(--text-default-hover-primary)",
    iconColor: "var(--icon-default-hover-primary)",
    boxShadow: "none",
  },
  focus: {
    bg:        "var(--fill-default-focus-primary)",
    textColor: "var(--text-default-focus-primary)",
    iconColor: "var(--icon-default-focus-primary)",
    boxShadow: "var(--focus-border)",    // 0 0 0 3px rgba(0,146,228,0.5)
  },
  pressed: {
    bg:        "var(--fill-default-pressed-primary)",
    textColor: "var(--text-default-pressed-primary)",
    iconColor: "var(--icon-default-pressed-primary)",
    boxShadow: "none",
  },
  disabled: {
    bg:        "var(--fill-default-disabled-primary)",
    textColor: "var(--text-default-disabled-primary)",
    iconColor: "var(--icon-default-disabled-primary)",
    boxShadow: "none",
  },
  loading: {
    bg:        "var(--fill-default-pressed-primary)",
    textColor: "var(--text-default-pressed-primary)",
    iconColor: "var(--icon-default-pressed-primary)",
    boxShadow: "none",
  },
};

// ─── Outer wrapper divider bg ─────────────────────────────────────────────────
// Figma: gap-px gap colour = outer bg
//   Active  → #90D6AA = var(--green-30)
//   Disabled → #C2C7D0 = var(--neutral-30)

function outerBg(disabled: boolean): string {
  return disabled ? "var(--neutral-30)" : "var(--green-30)";
}

// ─── Button/Label typography ──────────────────────────────────────────────────
// Figma: font-['Noto_sans:Regular',sans-serif] not-italic text-[16px]
//        leading-[24px] tracking-[-0.12px] whitespace-nowrap

const LABEL: React.CSSProperties = {
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

// ─── Plus icon — exact Figma structure ───────────────────────────────────────
// Outer:  content-stretch flex items-center p-[2px] relative shrink-0 size-[24px]
// Middle: aspect-[24/24] h-full relative shrink-0
// Inner:  -translate-y-1/2 absolute aspect-[14/14] left-[20.83%] right-[20.83%] top-1/2
// SVG:    absolute block size-full  fill="none"  preserveAspectRatio="none"
//         viewBox="0 0 11.6667 11.6667"

function PlusIcon({ fill }: { fill: string }) {
  return <Add size={16} style={{ color: fill, flexShrink: 0 }} aria-hidden />;
}

// ─── Chevron icon — exact Figma structure ─────────────────────────────────────
// Wrapper:  relative shrink-0 size-[24px]
// Inner:    absolute bottom-[34.55%] left-1/4 right-1/4 top-[34.57%]
// SVG:      absolute block size-full  fill="none"  preserveAspectRatio="none"
//           viewBox="0 0 12 7.41"

function ChevronIcon({ fill }: { fill: string }) {
  return <KeyboardArrowDown size={16} style={{ color: fill, flexShrink: 0 }} aria-hidden />;
}

// ─── Split button atom ────────────────────────────────────────────────────────

export interface SplitButtonAtomProps {
  /** Force the primary action section into a specific state */
  primaryForcedState?: SectionState;
  /** Force the menu section into a specific state */
  menuForcedState?: SectionState;
  label?: string;
  onPrimaryClick?: () => void;
  onMenuClick?: () => void;
}

export function SplitButtonAtom({
  primaryForcedState,
  menuForcedState,
  label = "[Button]",
  onPrimaryClick,
  onMenuClick,
}: SplitButtonAtomProps) {
  const [primaryLive, setPrimaryLive] = useState<SectionState>("default");
  const [menuLive,    setMenuLive]    = useState<SectionState>("default");

  const primaryState = primaryForcedState ?? primaryLive;
  const menuState    = menuForcedState    ?? menuLive;

  const ps = SECTION_TOKENS[primaryState];
  const ms = SECTION_TOKENS[menuState];

  const isDisabled       = primaryState === "disabled" && menuState === "disabled";
  const isLoading        = primaryState === "loading";
  const hasFocus         = primaryState === "focus" || menuState === "focus";

  const setPrimary = (s: SectionState) => () => { if (!primaryForcedState) setPrimaryLive(s); };
  const setMenu    = (s: SectionState) => () => { if (!menuForcedState)    setMenuLive(s);    };

  return (
    // ── Outer wrapper ──────────────────────────────────────────────────────
    // Figma: bg-[divider] content-stretch flex gap-px items-center
    //        justify-center overflow-clip relative rounded-[100px] size-full
    // Note: overflow must be visible when a section has focus so the ring
    //       (box-shadow) is not clipped by the parent.
    <div
      style={{
        background:     outerBg(isDisabled),
        display:        "flex",
        gap:            "1px",           // gap-px — this IS the 1px divider
        alignItems:     "center",
        justifyContent: "center",
        overflow:       hasFocus ? "visible" : "clip",
        position:       "relative",
        borderRadius:   "100px",
      }}
    >
      {/* ── Primary action ─────────────────────────────────────────────── */}
      {/* Figma: bg content-stretch flex gap-[8px] items-center max-w-[360px]
               overflow-clip px-[16px] py-[12px] relative
               rounded-bl-[100px] rounded-tl-[100px] shrink-0
               [focus adds shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)]] */}
      <button
        disabled={isDisabled}
        aria-busy={isLoading}
        onClick={onPrimaryClick}
        onMouseEnter={setPrimary("hover")}
        onMouseLeave={setPrimary("default")}
        onMouseDown={setPrimary("pressed")}
        onMouseUp={setPrimary("hover")}
        onFocus={setPrimary("focus")}
        onBlur={setPrimary("default")}
        style={{
          background:     ps.bg,
          display:        "flex",
          gap:            "8px",
          alignItems:     "center",
          maxWidth:       "360px",
          overflow:       "clip",
          paddingTop:     "12px",
          paddingBottom:  "12px",
          paddingLeft:    "16px",
          paddingRight:   "16px",
          position:       "relative",
          borderRadius:   "100px 0 0 100px",   // rounded-tl + rounded-bl only
          flexShrink:     0,
          boxShadow:      ps.boxShadow,
          // Reset
          border:         "none",
          outline:        "none",
          cursor:         isDisabled ? "not-allowed" : isLoading ? "wait" : "pointer",
          transition:     "background 0.1s, box-shadow 0.1s",
        }}
      >
        {isLoading ? (
          // Loading state: Spinner replaces plus icon
          // Figma: bg-[#da33ab] rounded-[100px] shrink-0 size-[24px]
          //        "TEMP LOADING SPINNER" → use shared Spinner component
          <Spinner
            size={18}
            trackColor="var(--neutral-20)"
            activeColor="var(--fill-default-enabled-primary)"
          />
        ) : (
          <PlusIcon fill={ps.iconColor} />
        )}

        {/* Label — Figma: font-['Noto_sans:Regular'] not-italic text-[16px]
                          leading-[24px] tracking-[-0.12px] whitespace-nowrap */}
        <p style={{ ...LABEL, color: ps.textColor }}>
          {isLoading ? "Loading..." : label}
        </p>
      </button>

      {/* ── Menu section ───────────────────────────────────────────────── */}
      {/* Figma outer: flex flex-row items-center self-stretch */}
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "stretch" }}>
        {/* Figma inner: bg h-full relative rounded-br-[100px] rounded-tr-[100px] shrink-0
                        [focus adds shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)]] */}
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
            background:    ms.bg,
            height:        "100%",
            position:      "relative",
            borderRadius:  "0 100px 100px 0",  // rounded-tr + rounded-br only
            flexShrink:    0,
            boxShadow:     ms.boxShadow,
            // Reset
            border:        "none",
            outline:       "none",
            cursor:        isDisabled ? "not-allowed" : "pointer",
            transition:    "background 0.1s, box-shadow 0.1s",
          }}
        >
          {/* Figma: flex flex-row items-center overflow-clip rounded-[inherit] size-full */}
          <div
            style={{
              display:       "flex",
              flexDirection: "row",
              alignItems:    "center",
              overflow:      "clip",
              borderRadius:  "inherit",
              width:         "100%",
              height:        "100%",
            }}
          >
            {/* Figma: content-stretch flex h-full items-center
                       pl-[12px] pr-[16px] py-[12px] relative */}
            <div
              style={{
                display:       "flex",
                height:        "100%",
                alignItems:    "center",
                paddingLeft:   "12px",
                paddingRight:  "16px",
                paddingTop:    "12px",
                paddingBottom: "12px",
                position:      "relative",
              }}
            >
              <ChevronIcon fill={ms.iconColor} />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

// ─── Showcase rows ───────────────────────────────────────────────────────────

const SHOWCASE_ROWS: {
  id:           string;
  label:        string;
  figmaFile:    string;
  primaryState: SectionState;
  menuState:    SectionState;
  description:  string;
}[] = [
  {
    id:           "default",
    label:        "Default",
    figmaFile:    "Button-5-3945",
    primaryState: "default",
    menuState:    "default",
    description:  "Resting state. Both sections: green-60 fill (#14803C), white icon/text. 1px divider = green-30 outer bg.",
  },
  {
    id:           "hover-primary",
    label:        "Hover — Primary",
    figmaFile:    "Button-5-3949",
    primaryState: "hover",
    menuState:    "default",
    description:  "Pointer over primary action. Primary lightens to green-50 (#19A04B). Menu stays at green-60.",
  },
  {
    id:           "hover-menu",
    label:        "Hover — Menu",
    figmaFile:    "Button-5-3963",
    primaryState: "default",
    menuState:    "hover",
    description:  "Pointer over menu chevron. Menu lightens to green-50 (#19A04B). Primary stays at green-60.",
  },
  {
    id:           "focus-primary",
    label:        "Focus — Primary",
    figmaFile:    "Button-5-3977",
    primaryState: "focus",
    menuState:    "default",
    description:  "Keyboard focus on primary action. Green-60 fill + 3px blue ring (--focus-border). Outer overflow visible to show ring.",
  },
  {
    id:           "focus-menu",
    label:        "Focus — Menu",
    figmaFile:    "Button-5-3991",
    primaryState: "default",
    menuState:    "focus",
    description:  "Keyboard focus on menu. Green-60 fill + 3px blue ring (--focus-border) on menu only.",
  },
  {
    id:           "pressed-primary",
    label:        "Pressed — Primary",
    figmaFile:    "Button-5-4005",
    primaryState: "pressed",
    menuState:    "default",
    description:  "Primary held. Green-70 (#0C612C) fill, neutral-10 (#F3F4F6) text+icon. Menu stays green-60.",
  },
  {
    id:           "pressed-menu",
    label:        "Pressed — Menu",
    figmaFile:    "Button-5-4009",
    primaryState: "default",
    menuState:    "pressed",
    description:  "Menu held. Green-70 (#0C612C) fill, neutral-10 (#F3F4F6) chevron. Primary stays green-60.",
  },
  {
    id:           "disabled",
    label:        "Disabled",
    figmaFile:    "Button-5-4013",
    primaryState: "disabled",
    menuState:    "disabled",
    description:  "Action unavailable. Both sections: neutral-20 fill, neutral-30 text+icon. Divider = neutral-30 outer bg.",
  },
  {
    id:           "loading",
    label:        "Loading",
    figmaFile:    "Button-5-4017",
    primaryState: "loading",
    menuState:    "loading",
    description:  "Async in progress. Both sections: green-70 fill. Spinner (--fill-default-enabled-primary) replaces plus. Text: \"Loading…\"",
  },
];

// ─── Token reference rows ─────────────────────────────────────────────────────

const TOKEN_ROWS: {
  state:        string;
  primaryBg:    string;
  menuBg:       string;
  textIcon:     string;
  outerBgTok:   string;
}[] = [
  { state: "Default",          primaryBg: "--fill-default-enabled-primary",  menuBg: "--fill-default-enabled-primary",  textIcon: "--text/icon-default-enabled-primary",  outerBgTok: "--green-30" },
  { state: "Hover (primary)",  primaryBg: "--fill-default-hover-primary",    menuBg: "--fill-default-enabled-primary",  textIcon: "--text/icon-default-hover-primary",    outerBgTok: "--green-30" },
  { state: "Hover (menu)",     primaryBg: "--fill-default-enabled-primary",  menuBg: "--fill-default-hover-primary",    textIcon: "--text/icon-default-hover-primary",    outerBgTok: "--green-30" },
  { state: "Focus (primary)",  primaryBg: "--fill-default-focus-primary + --focus-border", menuBg: "--fill-default-enabled-primary",  textIcon: "--text/icon-default-focus-primary",    outerBgTok: "--green-30" },
  { state: "Focus (menu)",     primaryBg: "--fill-default-enabled-primary",  menuBg: "--fill-default-focus-primary + --focus-border",   textIcon: "--text/icon-default-focus-primary",    outerBgTok: "--green-30" },
  { state: "Pressed (primary)",primaryBg: "--fill-default-pressed-primary",  menuBg: "--fill-default-enabled-primary",  textIcon: "--text/icon-default-pressed-primary",  outerBgTok: "--green-30" },
  { state: "Pressed (menu)",   primaryBg: "--fill-default-enabled-primary",  menuBg: "--fill-default-pressed-primary",  textIcon: "--text/icon-default-pressed-primary",  outerBgTok: "--green-30" },
  { state: "Disabled",         primaryBg: "--fill-default-disabled-primary", menuBg: "--fill-default-disabled-primary", textIcon: "--text/icon-default-disabled-primary", outerBgTok: "--neutral-30" },
  { state: "Loading",          primaryBg: "--fill-default-pressed-primary",  menuBg: "--fill-default-pressed-primary",  textIcon: "--text-default-pressed-primary + --fill-default-enabled-primary spinner", outerBgTok: "--green-30" },
];

// ─── Showcase page ────────────────────────────────────────────────────────────

export function PrimarySplitRound() {
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
          maxWidth:      1080,
          margin:        "0 auto",
          display:       "flex",
          flexDirection: "column",
          gap:           "32px",
        }}
      >
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <header style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
            Cropwise Design System V2 · buttons / Primary / Split / Round
          </p>

          <h1
            style={{
              font:          "var(--font-heading-1)",
              letterSpacing: "var(--font-heading-1-letter-spacing)",
              color:         "var(--text-default-none-primary)",
              margin:        0,
            }}
          >
            PrimarySplitRound
          </h1>

          <p
            style={{
              fontFamily: "var(--font-family-body)",
              fontSize:   "16px",
              fontWeight: "var(--font-weight-regular)",
              lineHeight: "24px",
              color:      "var(--text-default-none-secondary)",
              margin:     0,
              maxWidth:   600,
            }}
          >
            A split button with independent primary-action and menu sections.
            Each section tracks hover, focus, and press independently.
            All 9 Figma state combinations are shown below.
          </p>
        </header>

        {/* ── Interactive strip ───────────────────────────────────────────── */}
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
              Hover, Tab, and click each section independently. First button triggers a live loading state.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            {/* Live interactive button */}
            <SplitButtonAtom
              primaryForcedState={liveLoading ? "loading" : undefined}
              menuForcedState={liveLoading ? "loading" : undefined}
              onPrimaryClick={triggerLoading}
            />
            {/* Frozen state previews */}
            <SplitButtonAtom primaryForcedState="hover"    menuForcedState="default"  />
            <SplitButtonAtom primaryForcedState="default"  menuForcedState="hover"    />
            <SplitButtonAtom primaryForcedState="focus"    menuForcedState="default"  />
            <SplitButtonAtom primaryForcedState="disabled" menuForcedState="disabled" />
          </div>
        </section>

        {/* ── State reference table ───────────────────────────────────────── */}
        <section
          style={{
            background:   "var(--fill-default-none-primary)",
            border:       "1px solid var(--border-default-none-secondary)",
            borderRadius: "8px",
            overflow:     "hidden",
          }}
        >
          {/* Table header */}
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "200px 1fr 220px",
              padding:             "12px 24px",
              background:          "var(--fill-default-none-secondary)",
              borderBottom:        "1px solid var(--border-default-none-secondary)",
            }}
          >
            {["State · Source", "Description", "Preview"].map((col, i) => (
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

          {/* Rows */}
          {SHOWCASE_ROWS.map((row, idx) => (
            <div
              key={row.id}
              style={{
                display:             "grid",
                gridTemplateColumns: "200px 1fr 220px",
                padding:             "20px 24px",
                alignItems:          "center",
                borderBottom:
                  idx < SHOWCASE_ROWS.length - 1
                    ? "1px solid var(--border-default-none-secondary)"
                    : "none",
              }}
            >
              {/* State label + figma file */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
                  }}
                >
                  {row.label}
                </span>
                <code
                  style={{
                    display:    "block",
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
                <SplitButtonAtom
                  primaryForcedState={row.primaryState}
                  menuForcedState={row.menuState}
                />
              </div>
            </div>
          ))}
        </section>

        {/* ── Token reference ─────────────────────────────────────────────── */}
        <section
          style={{
            background:   "var(--fill-default-none-primary)",
            border:       "1px solid var(--border-default-none-secondary)",
            borderRadius: "8px",
            overflow:     "hidden",
          }}
        >
          <div
            style={{
              padding:      "12px 24px",
              background:   "var(--fill-default-none-secondary)",
              borderBottom: "1px solid var(--border-default-none-secondary)",
            }}
          >
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
              Colour token reference
            </p>
          </div>

          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "140px 1fr 1fr 1fr 100px",
              padding:             "10px 24px",
              background:          "var(--fill-default-none-secondary)",
              borderBottom:        "1px solid var(--border-default-none-secondary)",
              gap:                 "12px",
            }}
          >
            {["State", "Primary BG", "Menu BG", "Text / Icon", "Divider"].map((h) => (
              <span
                key={h}
                style={{
                  fontFamily:    "var(--font-family-body)",
                  fontSize:      "10px",
                  fontWeight:    600,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color:         "var(--text-default-none-secondary)",
                }}
              >
                {h}
              </span>
            ))}
          </div>

          {TOKEN_ROWS.map((row, idx) => (
            <div
              key={row.state}
              style={{
                display:             "grid",
                gridTemplateColumns: "140px 1fr 1fr 1fr 100px",
                padding:             "12px 24px",
                gap:                 "12px",
                alignItems:          "start",
                borderBottom:
                  idx < TOKEN_ROWS.length - 1
                    ? "1px solid var(--border-default-none-secondary)"
                    : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-family-body)",
                  fontSize:   "13px",
                  fontWeight: "var(--font-weight-regular)",
                  color:      "var(--text-default-none-primary)",
                }}
              >
                {row.state}
              </span>
              {[row.primaryBg, row.menuBg, row.textIcon, row.outerBgTok].map((tok) => (
                <code
                  key={tok}
                  style={{
                    display:    "block",
                    fontFamily: "monospace",
                    fontSize:   "11px",
                    lineHeight: "16px",
                    color:      "var(--text-default-none-secondary)",
                  }}
                >
                  {tok}
                </code>
              ))}
            </div>
          ))}
        </section>

      </div>
    </div>
  );
}