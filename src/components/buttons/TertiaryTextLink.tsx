/**
 * Button / Tertiary / Text link  ·  TertiaryTextLink
 *
 * Figma source files (one per state):
 *   Default  → Button-13-4850   text blue-60 #0071CD  underline
 *   Disabled → Button-13-4854   text neutral-40 #A3A9B9  NO underline
 *   Hover    → Button-13-4859   text blue-50 #0092E4  underline
 *   Focus    → Button-13-4864   text blue-60 #0071CD  underline  bg-white  focus ring
 *   Pressed  → Button-13-4869   text blue-70 #005693  underline
 *   Loading  → (no Figma frame — follows established spinner pattern)
 *
 * ── Unique structural traits vs all other Tertiary variants ──────────────────
 *
 *   1. Text-only — no icon, no icon pill, no split chevron.
 *
 *   2. No border overlay div — the focus ring is applied directly to the outer
 *      wrapper element via box-shadow (not via the inset overlay <div> pattern
 *      used in Standard, Add Another, Split, Vertical, etc.).
 *      Focus state also sets bg-white on the wrapper + overflow-clip.
 *
 *   3. rounded-[4px]  — all other tertiary variants use rounded-[8px] or [100px].
 *
 *   4. Disabled removes the underline — all other interactive states show
 *      text-decoration: underline solid. Disabled has no decoration.
 *
 *   5. Token family — uses the "select" role tokens (blue scale), not the
 *      "default" or "tertiary" tokens used by every other tertiary variant:
 *        --text-select-enabled-secondary  = blue-60  #0071CD
 *        --text-select-hover-secondary    = blue-50  #0092E4
 *        --text-select-focus-secondary    = blue-60  #0071CD
 *        --text-select-pressed-secondary  = blue-70  #005693
 *        --text-select-disabled-secondary = neutral-40 #A3A9B9
 *
 * ── Exact Figma structure (Button-13-4850 Default) ────────────────────────────
 *
 *   <div> content-stretch flex items-center justify-center relative rounded-[4px] size-full
 *     <p> decoration-solid font-['Noto_sans:Regular'] leading-[24px] not-italic
 *         relative shrink-0 text-[color] text-[16px] tracking-[-0.12px]
 *         underline whitespace-nowrap
 *
 * ── Exact Figma structure (Button-13-4864 Focus) ─────────────────────────────
 *
 *   <div> bg-white content-stretch flex items-center justify-center overflow-clip
 *         relative rounded-[4px] shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)] size-full
 *     <p> (same as default)
 *
 * ── Token map ────────────────────────────────────────────────────────────────
 *
 *  State    │ text color                        │ underline │ bg     │ focus ring
 *  ─────────┼───────────────────────────────────┼───────────┼────────┼─────────────────────────
 *  default  │ --text-select-enabled-secondary   │ yes       │ none   │ —
 *           │   (blue-60  #0071CD)              │           │        │
 *  hover    │ --text-select-hover-secondary     │ yes       │ none   │ —
 *           │   (blue-50  #0092E4)              │           │        │
 *  focus    │ --text-select-focus-secondary     │ yes       │ white  │ --focus-border on wrapper
 *           │   (blue-60  #0071CD)              │           │        │
 *  pressed  │ --text-select-pressed-secondary   │ yes       │ none   │ —
 *           │   (blue-70  #005693)              │           │        │
 *  disabled │ --text-select-disabled-secondary  │ NO        │ none   │ —
 *           │   (neutral-40 #A3A9B9)            │           │        │
 *  loading  │ --text-select-enabled-secondary   │ no        │ none   │ —
 *           │   (blue-60  #0071CD)              │  (spinner replaces decoration) │
 *
 * No border overlay <div> is used — this is the only Tertiary variant where
 * the focus ring box-shadow is applied directly to the wrapper element.
 */

import React, { useState } from "react";
import { Spinner } from "../Spinner";

// ─── Types ────────────────────────────────────────────────────────────────────

export type TertiaryTextLinkState =
  | "default"
  | "hover"
  | "focus"
  | "pressed"
  | "disabled"
  | "loading";

// ─── State token map ──────────────────────────────────────────────────────────

interface TextLinkTokens {
  textColor:    string;
  underline:    boolean;  // false only for disabled
  wrapperBg:    string;   // "white" for focus, "transparent" otherwise
  focusShadow:  boolean;
  showSpinner:  boolean;
}

const STATE_TOKENS: Record<TertiaryTextLinkState, TextLinkTokens> = {
  default: {
    textColor:   "var(--text-select-enabled-secondary)",  // blue-60  #0071CD
    underline:   true,
    wrapperBg:   "transparent",
    focusShadow: false,
    showSpinner: false,
  },
  hover: {
    textColor:   "var(--text-select-hover-secondary)",    // blue-50  #0092E4
    underline:   true,
    wrapperBg:   "transparent",
    focusShadow: false,
    showSpinner: false,
  },
  focus: {
    textColor:   "var(--text-select-focus-secondary)",    // blue-60  #0071CD
    underline:   true,
    wrapperBg:   "var(--mono-white-100)",                 // bg-white in Figma
    focusShadow: true,                                    // shadow-[0px_0px_0px_3px_rgba(0,146,228,0.5)]
    showSpinner: false,
  },
  pressed: {
    textColor:   "var(--text-select-pressed-secondary)",  // blue-70  #005693
    underline:   true,
    wrapperBg:   "transparent",
    focusShadow: false,
    showSpinner: false,
  },
  disabled: {
    textColor:   "var(--text-select-disabled-secondary)", // neutral-40 #A3A9B9
    underline:   false,                                   // ← disabled removes underline
    wrapperBg:   "transparent",
    focusShadow: false,
    showSpinner: false,
  },
  loading: {
    textColor:   "var(--text-select-enabled-secondary)",  // blue-60  #0071CD
    underline:   false,                                   // spinner replaces decoration pattern
    wrapperBg:   "transparent",
    focusShadow: false,
    showSpinner: true,
  },
};

// ─── Button atom ──────────────────────────────────────────────────────────────

export interface TertiaryTextLinkAtomProps {
  /** Pin to a specific visual state (for library / showcase previews). */
  forcedState?: TertiaryTextLinkState;
  /** Button label — defaults to "[Button]" matching Figma. */
  label?:       string;
  onClick?:     () => void;
}

export function TertiaryTextLinkAtom({
  forcedState,
  label = "[Button]",
  onClick,
}: TertiaryTextLinkAtomProps) {
  const [liveState, setLiveState] = useState<TertiaryTextLinkState>("default");

  const state  = forcedState ?? liveState;
  const tokens = STATE_TOKENS[state];

  const isDisabled = state === "disabled";
  const isLoading  = state === "loading";

  const set = (s: TertiaryTextLinkState) => () => { if (!forcedState) setLiveState(s); };

  return (
    // ── Outer button ──────────────────────────────────────────────────────────
    // Figma: content-stretch flex items-center justify-center relative rounded-[4px]
    // Focus adds: bg-white overflow-clip shadow-[focus-ring]
    // NOTE: No border overlay <div> — focus ring is on this element directly.
    <button
      disabled={isDisabled}
      aria-busy={isLoading}
      onClick={onClick}
      onMouseEnter={set("hover")}
      onMouseLeave={set("default")}
      onMouseDown={set("pressed")}
      onMouseUp={set("hover")}
      onFocus={set("focus")}
      onBlur={set("default")}
      style={{
        display:        "inline-flex",
        alignItems:     "center",
        justifyContent: "center",
        position:       "relative",
        borderRadius:   "4px",          // ← 4px, unique among tertiary buttons
        background:     tokens.wrapperBg,
        overflow:       tokens.focusShadow ? "clip" : "visible",
        boxShadow:      tokens.focusShadow ? "var(--focus-border)" : "none",
        border:         "none",
        outline:        "none",
        padding:        0,
        margin:         0,
        cursor:         isDisabled ? "not-allowed" : isLoading ? "wait" : "pointer",
        transition:     "box-shadow 0.1s, background 0.1s",
      }}
    >
      {/* ── Inner content ──────────────────────────────────────────────────── */}
      <div
        style={{
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          gap:            "6px",
          position:       "relative",
          borderRadius:   "inherit",
        }}
      >
        {/* Spinner (Loading state only) */}
        {tokens.showSpinner && (
          <Spinner
            size={16}
            trackColor="var(--neutral-20)"
            activeColor="var(--fill-default-enabled-primary)"
          />
        )}

        {/* Label text */}
        {/* Figma: decoration-solid font-['Noto_sans:Regular'] leading-[24px] not-italic
                  relative shrink-0 text-[color] text-[16px] tracking-[-0.12px]
                  underline whitespace-nowrap                                     */}
        <p
          style={{
            fontFamily:      "var(--font-family-primary)",
            fontSize:        "16px",
            fontWeight:      400,
            fontStyle:       "normal",
            lineHeight:      "24px",
            letterSpacing:   "-0.12px",
            whiteSpace:      "nowrap",
            margin:          0,
            position:        "relative",
            flexShrink:      0,
            color:           tokens.textColor,
            textDecoration:  tokens.underline ? "underline solid" : "none",
            textUnderlineOffset: "2px",
            transition:      "color 0.1s, text-decoration 0.1s",
          }}
        >
          {isLoading ? "Loading..." : label}
        </p>
      </div>
    </button>
  );
}

// ─── Showcase metadata ────────────────────────────────────────────────────────

const SHOWCASE_STATES: {
  id:          string;
  name:        string;
  figmaFile:   string;
  state:       TertiaryTextLinkState;
  description: string;
}[] = [
  {
    id:          "default",
    name:        "Default",
    figmaFile:   "Button-13-4850",
    state:       "default",
    description: "Resting state. Blue-60 text (#0071CD) with underline solid. No background, no border. --text-select-enabled-secondary.",
  },
  {
    id:          "hover",
    name:        "Hover",
    figmaFile:   "Button-13-4859",
    state:       "hover",
    description: "Pointer over link. Text shifts to blue-50 (#0092E4) — lighter. Underline remains. --text-select-hover-secondary.",
  },
  {
    id:          "focus",
    name:        "Focus",
    figmaFile:   "Button-13-4864",
    state:       "focus",
    description: "Keyboard focus. Same blue-60 text as Default + white bg + --focus-border ring (0 0 0 3px rgba(0,146,228,0.5)) on the wrapper. No overlay div — ring is directly on the element.",
  },
  {
    id:          "pressed",
    name:        "Pressed",
    figmaFile:   "Button-13-4869",
    state:       "pressed",
    description: "Mouse/touch held. Text darkens to blue-70 (#005693). Underline remains. --text-select-pressed-secondary.",
  },
  {
    id:          "disabled",
    name:        "Disabled",
    figmaFile:   "Button-13-4854",
    state:       "disabled",
    description: "Non-interactive. Text → neutral-40 (#A3A9B9). Underline REMOVED — the only state without decoration. cursor: not-allowed. --text-select-disabled-secondary.",
  },
  {
    id:          "loading",
    name:        "Loading",
    figmaFile:   "(no Figma frame — spinner pattern)",
    state:       "loading",
    description: "Async in-progress. 16px --fill-default-enabled-primary spinner inline before 'Loading...' text in default blue-60. No underline during loading.",
  },
];

// ─── Showcase / standalone page ───────────────────────────────────────────────

export function TertiaryTextLink() {
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
            Cropwise Design System V2 · Buttons / Tertiary / Text link
          </p>
          <h1
            style={{
              fontFamily:    "var(--font-family-primary)",
              fontSize:      "32px",
              fontWeight:    600,
              letterSpacing: "-0.5px",
              lineHeight:    "1.2",
              color:         "var(--text-default-none-primary)",
              margin:        0,
            }}
          >
            TertiaryTextLink
          </h1>
          <p
            style={{
              fontFamily: "var(--font-family-primary)",
              fontSize:   "16px",
              fontWeight: 400,
              lineHeight: "24px",
              color:      "var(--text-default-none-secondary)",
              margin:     0,
              maxWidth:   680,
            }}
          >
            The simplest tertiary variant: <strong>text only</strong> — no icon, no border,
            no overlay div. It uses the <strong>select role (blue) tokens</strong> across all
            states. The focus ring is applied directly to the wrapper element (not via the
            inset overlay pattern). Disabled uniquely <strong>removes the underline</strong>.
            Border-radius is 4 px (not 8 px like other tertiary buttons).
          </p>
        </header>

        {/* ── Key differences callout ───────────────────────────────────────── */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap:                 "10px",
          }}
        >
          {[
            { trait: "Text only",             desc: "No icon, no pill, no chevron — a bare inline link label" },
            { trait: "Select (blue) tokens",  desc: "--text-select-*-secondary  (blue-60/50/70) not default/tertiary tokens" },
            { trait: "No border overlay div", desc: "Focus ring box-shadow goes directly on the wrapper element" },
            { trait: "rounded-[4px]",         desc: "4 px radius — all other tertiary use 8 px or 100 px" },
            { trait: "Disabled removes underline", desc: "Only state without text-decoration. All others: underline solid" },
            { trait: "Focus adds bg-white",   desc: "Wrapper gets bg-white + overflow-clip on focus — unique to this variant" },
          ].map(({ trait, desc }) => (
            <div
              key={trait}
              style={{
                background:    "var(--fill-default-none-primary)",
                border:        "1px solid var(--border-default-none-secondary)",
                borderRadius:  "8px",
                padding:       "12px 16px",
                display:       "flex",
                flexDirection: "column",
                gap:           "4px",
              }}
            >
              <span style={{ fontFamily: "var(--font-family-primary)", fontSize: "13px", fontWeight: 600, color: "var(--text-default-none-primary)" }}>
                {trait}
              </span>
              <span style={{ fontFamily: "var(--font-family-primary)", fontSize: "13px", fontWeight: 400, lineHeight: "18px", color: "var(--text-default-none-secondary)" }}>
                {desc}
              </span>
            </div>
          ))}
        </div>

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
            <p style={{ fontFamily: "var(--font-family-primary)", fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "var(--text-default-none-primary)", margin: "0 0 4px" }}>
              Interactive preview
            </p>
            <p style={{ fontFamily: "var(--font-family-primary)", fontSize: "14px", fontWeight: 400, lineHeight: "20px", color: "var(--text-default-none-secondary)", margin: 0 }}>
              Hover, Tab to focus, click to trigger a live loading state (2.4 s).
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
            <TertiaryTextLinkAtom
              forcedState={liveLoading ? "loading" : undefined}
              onClick={triggerLoading}
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
              {/* State badge + Figma ref */}
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
                <code style={{ fontFamily: "monospace", fontSize: "10px", lineHeight: "14px", color: "var(--text-default-none-secondary)", opacity: 0.6 }}>
                  {row.figmaFile}
                </code>
              </div>

              {/* Description */}
              <p style={{ fontFamily: "var(--font-family-primary)", fontSize: "14px", fontWeight: 400, lineHeight: "22px", color: "var(--text-default-none-secondary)", margin: 0, paddingRight: "24px" }}>
                {row.description}
              </p>

              {/* Frozen preview — on light stripe so focus ring is visible */}
              <div
                style={{
                  display:         "flex",
                  justifyContent:  "flex-end",
                  alignItems:      "center",
                  background:      row.state === "focus" ? "var(--fill-default-none-secondary)" : "transparent",
                  borderRadius:    "6px",
                  padding:         row.state === "focus" ? "8px 12px" : "0",
                }}
              >
                <TertiaryTextLinkAtom forcedState={row.state} />
              </div>
            </div>
          ))}
        </section>

        {/* ── All 6 states side-by-side ─────────────────────────────────────── */}
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
              borderBottom: "1px solid var(--border-default-none-secondary)",
              background:   "var(--fill-default-none-secondary)",
            }}
          >
            <span style={{ fontFamily: "var(--font-family-primary)", fontSize: "11px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--text-default-none-secondary)" }}>
              All 6 states side-by-side
            </span>
          </div>
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap:                 "1px",
              background:          "var(--border-default-none-secondary)",
            }}
          >
            {SHOWCASE_STATES.map(({ state, name }) => (
              <div
                key={state}
                style={{
                  background:    "var(--fill-default-none-primary)",
                  padding:       "24px 16px",
                  display:       "flex",
                  flexDirection: "column",
                  alignItems:    "center",
                  gap:           "14px",
                }}
              >
                <TertiaryTextLinkAtom forcedState={state} />
                <span style={{ fontFamily: "var(--font-family-primary)", fontSize: "11px", fontWeight: 400, letterSpacing: "0.5px", color: "var(--text-default-none-secondary)", textAlign: "center" }}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Token reference ──────────────────────────────────────────────── */}
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
          <p style={{ fontFamily: "var(--font-family-primary)", fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "var(--text-default-none-primary)", margin: 0 }}>
            Token reference
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "10px" }}>
            {[
              { token: "--text-select-enabled-secondary",  value: "blue-60  #0071CD",    states: "Default, Focus" },
              { token: "--text-select-hover-secondary",    value: "blue-50  #0092E4",    states: "Hover" },
              { token: "--text-select-pressed-secondary",  value: "blue-70  #005693",    states: "Pressed" },
              { token: "--text-select-disabled-secondary", value: "neutral-40 #A3A9B9",  states: "Disabled" },
              { token: "--text-select-enabled-secondary",  value: "blue-60  #0071CD",    states: "Loading (text)" },
              { token: "--focus-border",                   value: "0 0 0 3px rgba(0,146,228,0.5)", states: "Focus ring (on wrapper)" },
              { token: "--fill-default-enabled-primary",            value: "#DA33AB",              states: "Loading spinner" },
              { token: "border-radius",                    value: "4px (rounded-[4px])",  states: "All states" },
              { token: "text-decoration",                  value: "underline solid",       states: "Default, Hover, Focus, Pressed, (not Disabled, not Loading)" },
            ].map(({ token, value, states }) => (
              <div
                key={`${token}-${states}`}
                style={{ background: "var(--fill-default-none-secondary)", borderRadius: "6px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <code style={{ fontFamily: "monospace", fontSize: "11px", color: "var(--text-default-none-secondary)" }}>{token}</code>
                <span style={{ fontFamily: "var(--font-family-primary)", fontSize: "13px", fontWeight: 400, color: "var(--text-default-none-primary)" }}>{value}</span>
                <span style={{ fontFamily: "monospace", fontSize: "10px", color: "var(--text-default-none-secondary)", opacity: 0.6 }}>Used in: {states}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}