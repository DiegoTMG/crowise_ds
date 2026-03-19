/**
 * Screen: Inspection Groups
 *
 * Figma source: https://www.figma.com/design/aTjr3ahBbKrSPThrmcEhtD/🐛-Sample-problem
 * Node: 4032:45776
 *
 * Design system components used:
 *   - Scout icon         (src/icons/feature/Scout)
 *   - Search icon        (src/icons/design/Search)
 *   - ArrowBackIos icon  (src/icons/design/ArrowBackIos)
 *   - KeyboardArrowRight (src/icons/design/KeyboardArrowRight)
 *   - CSS theme tokens   (src/theme/theme.css)
 *
 * Notes:
 *   - The "Finish point" footer button matches the Figma spec:
 *     Primary / Disabled / No icon (Size=Medium 44px). The ButtonAtom variant
 *     from PrimaryRound.tsx always renders a leading icon, so the disabled
 *     text-only style is applied inline using the same theme tokens.
 *   - The search button matches Secondary / Icon Only / Square / Default.
 *     SecondaryIconOnlySquareAtom uses a fixed plus icon internally; the
 *     search icon is inlined here using theme tokens for visual parity.
 */

import React from "react";

import ArrowBackIos      from "../icons/design/ArrowBackIos";
import KeyboardArrowRight from "../icons/design/KeyboardArrowRight";
import Search             from "../icons/design/Search";
import Scout              from "../icons/feature/Scout";

// ─── Data ─────────────────────────────────────────────────────────────────────

interface InspectionGroup {
  id:    number;
  name:  string;
  count: number;
}

const GROUPS: InspectionGroup[] = [
  { id: 1, name: "Planting Quality",       count: 1  },
  { id: 2, name: "Plant Stand",            count: 1  },
  { id: 3, name: "Nutrition",              count: 10 },
  { id: 4, name: "Pest, disease, and weed", count: 50 },
  { id: 5, name: "Yield Estimation",       count: 1  },
  { id: 6, name: "Harvest Losses",         count: 1  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatusBar() {
  return (
    <div style={{ height: 44, display: "flex", alignItems: "center", padding: "0 16px" }}>
      <span
        style={{
          fontSize:      15,
          fontWeight:    600,
          letterSpacing: -0.3,
          color:         "var(--neutral-100, #14151c)",
          fontFamily:    "inherit",
        }}
      >
        9:41
      </span>
    </div>
  );
}

function TopBar() {
  return (
    <div
      style={{
        display:    "flex",
        alignItems: "center",
        gap:        8,
        padding:    "0 16px",
        height:     44,
        background: "var(--mono-white-100, #ffffff)",
      }}
    >
      {/* Back button */}
      <button
        aria-label="Go back"
        style={{
          display:    "flex",
          alignItems: "center",
          background: "none",
          border:     "none",
          cursor:     "pointer",
          padding:    0,
          color:      "var(--neutral-100, #14151c)",
          width:      68,
        }}
      >
        <ArrowBackIos size={24} />
      </button>

      {/* Title + Subtitle */}
      <div
        style={{
          flex:           1,
          display:        "flex",
          flexDirection:  "column",
          alignItems:     "center",
          justifyContent: "center",
          padding:        "4px 0",
        }}
      >
        <span
          style={{
            fontSize:      16,
            fontWeight:    600,
            lineHeight:    "24px",
            letterSpacing: -0.12,
            color:         "var(--neutral-100, #14151c)",
          }}
        >
          PV04
        </span>
        <span
          style={{
            fontSize:      14,
            fontWeight:    400,
            lineHeight:    "22px",
            letterSpacing: -0.105,
            color:         "var(--neutral-60, #696f88)",
          }}
        >
          130 ac • DAE: 45
        </span>
      </div>

      {/* Right: Scout icon + count */}
      <div
        style={{
          display:        "flex",
          alignItems:     "center",
          justifyContent: "flex-end",
          gap:            2,
          width:          68,
          color:          "var(--neutral-60, #696f88)",
        }}
      >
        <Scout size={24} />
        <span
          style={{
            fontSize:      16,
            fontWeight:    600,
            lineHeight:    "24px",
            letterSpacing: -0.12,
          }}
        >
          5
        </span>
      </div>
    </div>
  );
}

function SecondaryBar() {
  return (
    <div
      style={{
        display:        "flex",
        alignItems:     "center",
        justifyContent: "flex-end",
        padding:        "12px 16px",
        gap:            8,
        background:     "var(--mono-white-100, #ffffff)",
        flexShrink:     0,
      }}
    >
      {/* Search — Secondary / Icon Only / Square / Default */}
      <button
        aria-label="Search"
        style={{
          display:         "flex",
          alignItems:      "center",
          justifyContent:  "center",
          width:           44,
          height:          44,
          background:      "var(--neutral-10, #f3f4f6)",
          border:          "none",
          borderRadius:    8,
          cursor:          "pointer",
          padding:         0,
          color:           "var(--fill-default-enabled-secondary, #14803c)",
        }}
      >
        <Search size={18} />
      </button>
    </div>
  );
}

interface GroupRowProps {
  group: InspectionGroup;
  onClick?: () => void;
}

function GroupRow({ group, onClick }: GroupRowProps) {
  const itemLabel = group.count === 1 ? "1 item to inspect" : `${group.count} items to inspect`;

  return (
    <button
      onClick={onClick}
      style={{
        display:       "flex",
        alignItems:    "center",
        gap:           12,
        width:         "100%",
        padding:       "16px 16px",
        background:    "var(--mono-white-100, #ffffff)",
        border:        "none",
        borderBottom:  "1px solid var(--neutral-10, #f3f4f6)",
        cursor:        "pointer",
        textAlign:     "left",
        fontFamily:    "inherit",
      }}
    >
      {/* Teal icon box */}
      <div
        style={{
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          width:          52,
          height:         52,
          background:     "var(--teal-10, #e0f9f7)",
          borderRadius:   12,
          flexShrink:     0,
          color:          "var(--teal-60, #14803c)",
        }}
      >
        <Scout size={18} />
      </div>

      {/* Text */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              flex:          1,
              fontSize:      16,
              fontWeight:    600,
              lineHeight:    "24px",
              letterSpacing: -0.12,
              color:         "var(--neutral-100, #14151c)",
              overflow:      "hidden",
              textOverflow:  "ellipsis",
              whiteSpace:    "nowrap",
            }}
          >
            {group.name}
          </span>
          <KeyboardArrowRight
            size={18}
            style={{ flexShrink: 0, color: "var(--neutral-100, #14151c)" }}
          />
        </div>
        <span
          style={{
            fontSize:      14,
            fontWeight:    400,
            lineHeight:    "22px",
            letterSpacing: -0.105,
            color:         "var(--neutral-60, #696f88)",
            whiteSpace:    "nowrap",
          }}
        >
          {itemLabel}
        </span>
      </div>
    </button>
  );
}

// ─── Main Screen ──────────────────────────────────────────────────────────────

interface InspectionGroupsScreenProps {
  /** Inspection groups to display. Defaults to the sample Figma data. */
  groups?:       InspectionGroup[];
  /** Field identifier shown in the top bar. */
  fieldName?:    string;
  /** Field info subtitle shown below the field name. */
  fieldSubtitle?: string;
  /** Scout point count shown in the top-right. */
  scoutCount?:   number;
  onBack?:       () => void;
  onSearch?:     () => void;
  onGroupPress?: (group: InspectionGroup) => void;
  onFinish?:     () => void;
}

export function InspectionGroupsScreen({
  groups        = GROUPS,
  fieldName     = "PV04",
  fieldSubtitle = "130 ac • DAE: 45",
  scoutCount    = 5,
  onBack,
  onSearch,
  onGroupPress,
}: InspectionGroupsScreenProps) {
  return (
    <div
      style={{
        width:       390,
        minHeight:   "100vh",
        background:  "var(--mono-white-100, #ffffff)",
        fontFamily:  "'Noto Sans', sans-serif",
        display:     "flex",
        flexDirection:"column",
        position:    "relative",
        boxSizing:   "border-box",
      }}
    >
      {/* Status bar */}
      <StatusBar />

      {/* Top bar */}
      <div
        style={{
          display:    "flex",
          alignItems: "center",
          gap:        8,
          padding:    "0 16px",
          height:     44,
          background: "var(--mono-white-100, #ffffff)",
          flexShrink: 0,
        }}
      >
        <button
          aria-label="Go back"
          onClick={onBack}
          style={{
            display:    "flex",
            alignItems: "center",
            background: "none",
            border:     "none",
            cursor:     "pointer",
            padding:    0,
            color:      "var(--neutral-100, #14151c)",
            width:      68,
          }}
        >
          <ArrowBackIos size={24} />
        </button>

        <div
          style={{
            flex:           1,
            display:        "flex",
            flexDirection:  "column",
            alignItems:     "center",
            justifyContent: "center",
            padding:        "4px 0",
          }}
        >
          <span style={{ fontSize: 16, fontWeight: 600, lineHeight: "24px", letterSpacing: -0.12, color: "var(--neutral-100, #14151c)" }}>
            {fieldName}
          </span>
          <span style={{ fontSize: 14, fontWeight: 400, lineHeight: "22px", letterSpacing: -0.105, color: "var(--neutral-60, #696f88)" }}>
            {fieldSubtitle}
          </span>
        </div>

        <div
          style={{
            display:        "flex",
            alignItems:     "center",
            justifyContent: "flex-end",
            gap:            2,
            width:          68,
            color:          "var(--neutral-60, #696f88)",
          }}
        >
          <Scout size={24} />
          <span style={{ fontSize: 16, fontWeight: 600, lineHeight: "24px", letterSpacing: -0.12 }}>
            {scoutCount}
          </span>
        </div>
      </div>

      {/* Secondary bar */}
      <div
        style={{
          display:        "flex",
          alignItems:     "center",
          justifyContent: "flex-end",
          padding:        "12px 16px",
          background:     "var(--mono-white-100, #ffffff)",
          flexShrink:     0,
        }}
      >
        <button
          aria-label="Search"
          onClick={onSearch}
          style={{
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            width:          44,
            height:         44,
            background:     "var(--neutral-10, #f3f4f6)",
            border:         "none",
            borderRadius:   8,
            cursor:         "pointer",
            padding:        0,
            color:          "var(--fill-default-enabled-secondary, #14803c)",
          }}
        >
          <Search size={18} />
        </button>
      </div>

      {/* Content — scrollable */}
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 76 }}>
        {/* Section header */}
        <div
          style={{
            display:    "flex",
            alignItems: "center",
            gap:        8,
            padding:    "0 16px",
          }}
        >
          <span
            style={{
              fontSize:      14,
              fontWeight:    600,
              lineHeight:    "22px",
              letterSpacing: -0.105,
              color:         "var(--neutral-60, #696f88)",
              whiteSpace:    "nowrap",
            }}
          >
            Inspection groups
          </span>
          <div style={{ flex: 1, height: 1, background: "var(--neutral-30, #c2c7d0)" }} />
        </div>

        {/* Group rows */}
        {groups.map((group) => (
          <GroupRow
            key={group.id}
            group={group}
            onClick={() => onGroupPress?.(group)}
          />
        ))}
      </div>

      {/* Footer — "Finish point" Primary / Disabled / No icon */}
      <div
        style={{
          position:   "absolute",
          bottom:     0,
          left:       0,
          right:      0,
          background: "var(--mono-white-100, #ffffff)",
          padding:    16,
        }}
      >
        <button
          disabled
          style={{
            display:        "flex",
            width:          "100%",
            alignItems:     "center",
            justifyContent: "center",
            height:         44,
            background:     "var(--fill-default-disabled-primary, #f3f4f6)",
            border:         "1px solid var(--neutral-20, #dfe2e7)",
            borderRadius:   56,
            cursor:         "not-allowed",
            fontSize:       16,
            fontWeight:     400,
            lineHeight:     "24px",
            letterSpacing:  -0.12,
            color:          "var(--text-default-disabled-primary, #c2c7d0)",
            fontFamily:     "'Noto Sans', sans-serif",
          }}
        >
          Finish point
        </button>
      </div>
    </div>
  );
}
