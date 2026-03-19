import React from "react";
import { History, DoneAll } from "../../icons";

type ActiveTab = "all" | "recent" | "scouted";

export interface SwitchMenuProps {
  mode: "not-scouted" | "scouted";
  activeTab: ActiveTab;
  scoutedCount?: number;
  onChange?: (tab: ActiveTab) => void;
}

const containerStyle: React.CSSProperties = {
  display: "flex",
  gap: "2px",
  alignItems: "center",
  overflow: "hidden",
  padding: "2px",
  borderRadius: "8px",
  backgroundColor: "var(--neutral-10)",
  width: "94px",
  height: "44px",
  flexShrink: 0,
};

const getTabStyle = (isActive: boolean): React.CSSProperties => ({
  width: "44px",
  height: "40px",
  borderRadius: "6px",
  backgroundColor: isActive ? "var(--mono-white-100)" : "transparent",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  flexShrink: 0,
  cursor: "pointer",
  border: "none",
  padding: 0,
  outline: "none",
});

const allContentStyle: React.CSSProperties = {
  display: "flex",
  gap: "4px",
  alignItems: "center",
  overflow: "hidden",
  paddingTop: "8px",
  paddingBottom: "8px",
  paddingLeft: "12px",
  paddingRight: "12px",
  flexShrink: 0,
};

const allTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-family-body)",
  fontWeight: "var(--font-weight-regular)",
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "-0.105px",
  color: "var(--neutral-80)",
  whiteSpace: "nowrap",
};

const scoutedGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "max-content",
  gridTemplateRows: "max-content",
  placeItems: "start",
};

const scoutedIconStyle: React.CSSProperties = {
  gridColumn: 1,
  gridRow: 1,
  marginLeft: 0,
  marginTop: "2px",
  color: "var(--neutral-60)",
};

const scoutedCountStyle: React.CSSProperties = {
  gridColumn: 1,
  gridRow: 1,
  marginLeft: "20px",
  marginTop: 0,
  fontFamily: "var(--font-family-body)",
  fontWeight: "var(--font-weight-bold)",
  fontSize: "14px",
  lineHeight: "22px",
  letterSpacing: "-0.105px",
  color: "var(--neutral-60)",
  whiteSpace: "nowrap",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
};

export const SwitchMenu: React.FC<SwitchMenuProps> = ({
  mode,
  activeTab,
  scoutedCount = 0,
  onChange,
}) => {
  return (
    <div style={containerStyle}>
      {/* All tab */}
      <button
        style={getTabStyle(activeTab === "all")}
        onClick={() => onChange?.("all")}
      >
        <div style={allContentStyle}>
          <span style={allTextStyle}>All</span>
        </div>
      </button>

      {/* Recent tab — visible when mode is "not-scouted" */}
      {mode === "not-scouted" && (
        <button
          style={getTabStyle(activeTab === "recent")}
          onClick={() => onChange?.("recent")}
        >
          <History size={18} style={{ color: "var(--neutral-60)" }} />
        </button>
      )}

      {/* Scouted tab — visible when mode is "scouted" */}
      {mode === "scouted" && (
        <button
          style={getTabStyle(activeTab === "scouted")}
          onClick={() => onChange?.("scouted")}
        >
          <div style={scoutedGridStyle}>
            <div style={scoutedIconStyle}>
              <DoneAll size={18} />
            </div>
            <div style={scoutedCountStyle}>{scoutedCount}</div>
          </div>
        </button>
      )}
    </div>
  );
};

SwitchMenu.displayName = "SwitchMenu";
