/**
 * BottomSheetFooter — Footer mixin
 *
 * Figma source: https://www.figma.com/design/AnqFoDnF8mDF6RWwrVW9rR/Figma-Make-Components?node-id=165-3560
 *
 * Two variants:
 *
 * ─── edit ─────────────────────────────────────────────────────────────────────
 * Nodes: 165:4256 (Footer), 165:4258 (Variant2 = with timestamp)
 *
 * Structure:
 *   ─────────────────────╴ shadow top divider (–0.75px neutral-20)
 *   px-8 py-24
 *   [ 🗑️ 44×44 ] [ ✏️ Edit   flex:1  44px ]
 *   [ Edited  •  10/16/2025 - 11:48 AM    ]  ← Variant2 only
 *   ─────────────────────  home bar 24px
 *
 * Tokens:
 *   Container     → var(--mono-white-100)
 *   Top shadow    → 0px -0.75px 0px 0px var(--neutral-20)
 *   Buttons border → var(--border-default-disabled-primary)  neutral-30
 *   Delete icon   → var(--icon-default-none-primary)   neutral-60
 *   Edit icon/text → var(--text-default-none-primary)  neutral-100
 *   Timestamp     → var(--text-default-none-secondary) neutral-60
 *
 * ─── action ───────────────────────────────────────────────────────────────────
 * Nodes: 165:4621 (Default), 165:4622 (Contrast), 165:4623 (Dark)
 *
 * Structure:
 *   gap-12  px-16  py-16
 *   [ 📝 44×44 pill ] [ 📷 44×44 pill ] [ No occurrences  flex:1  44px pill ]
 *
 * Color themes:
 *   default  → bg var(--mono-white-100)    note/photo border neutral-20  btn border green-60  btn text green-60
 *   contrast → bg #FFEEBA (yellow)         note/photo border green-60    btn border green-60  btn text green-60
 *   dark     → bg var(--neutral-100)       note/photo border neutral-30  btn border green-60  btn text green-60
 */

import React from "react";
import Delete from "../../icons/design/Delete";
import Edit from "../../icons/design/Edit";
import NotesAdd from "../../icons/feature/NotesAdd";
import PhotoCameraOn from "../../icons/feature/PhotoCameraOn";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BottomSheetFooterEditProps {
  variant: "edit";
  onDelete?: () => void;
  onEdit?: () => void;
  /** When provided, shows "Edited  •  <editedAt>" below the buttons */
  editedAt?: string;
}

export interface BottomSheetFooterActionProps {
  variant: "action";
  /** Color context of the container */
  theme?: "default" | "contrast" | "dark";
  onAddNote?: () => void;
  onAddPhoto?: () => void;
  onNoOccurrences?: () => void;
  /** Button label. Default: "No occurrences" */
  noOccurrencesLabel?: string;
}

export type BottomSheetFooterProps =
  | BottomSheetFooterEditProps
  | BottomSheetFooterActionProps;

// ─── Component ────────────────────────────────────────────────────────────────

export function BottomSheetFooter(props: BottomSheetFooterProps) {
  if (props.variant === "edit") {
    return <EditFooter {...props} />;
  }
  return <ActionFooter {...props} />;
}

// ─── EditFooter ───────────────────────────────────────────────────────────────

function EditFooter({ onDelete, onEdit, editedAt }: BottomSheetFooterEditProps) {
  const btnBorder = "1px solid var(--border-default-disabled-primary)"; // neutral-30

  return (
    <div
      style={{
        backgroundColor: "var(--fill-default-none-primary)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        boxSizing: "border-box",
        boxShadow: "0px -0.75px 0px 0px var(--ds-divider)",
      }}
    >
      {/* Buttons row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 8,
          padding: "24px 8px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Delete icon button — 44×44 */}
        <button
          onClick={onDelete}
          aria-label="Delete"
          style={{
            width: 44,
            height: 44,
            borderRadius: 8,
            border: btnBorder,
            backgroundColor: "var(--fill-default-none-primary)",
            cursor: onDelete ? "pointer" : "default",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            color: "var(--icon-default-none-primary)", // neutral-60
          }}
        >
          <Delete size={18} />
        </button>

        {/* Edit button — flex:1, icon + label */}
        <button
          onClick={onEdit}
          aria-label="Edit"
          style={{
            flex: "1 0 0",
            height: 44,
            borderRadius: 8,
            border: btnBorder,
            backgroundColor: "var(--fill-default-none-primary)",
            cursor: onEdit ? "pointer" : "default",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            color: "var(--text-default-none-primary)",
          }}
        >
          <Edit size={18} />
          <span
            style={{
              fontFamily: "var(--font-family-primary)",
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "-0.12px",
              whiteSpace: "nowrap",
            }}
          >
            Edit
          </span>
        </button>
      </div>

      {/* Optional timestamp */}
      {editedAt && (
        <span
          style={{
            fontFamily: "var(--font-family-primary)",
            fontSize: 14,
            fontWeight: 400,
            lineHeight: "22px",
            letterSpacing: "-0.105px",
            color: "var(--text-default-none-secondary)", // neutral-60
            textAlign: "center",
            width: "100%",
            paddingBottom: 4,
          }}
        >
          {editedAt}
        </span>
      )}

      {/* Home bar — 24px slot */}
      <div style={{ height: 24, width: "100%" }} />
    </div>
  );
}

// ─── ActionFooter ─────────────────────────────────────────────────────────────

const ACTION_THEME_STYLES = {
  default: {
    bg: "var(--fill-default-none-primary)",
    iconBorder: "1px solid var(--ds-divider)",
    iconColor: "var(--icon-default-none-primary)", // neutral-60
    btnBorder: "1px solid var(--fill-default-enabled-primary)", // green-60
    btnText: "var(--fill-default-enabled-primary)",
  },
  contrast: {
    bg: "#FFEEBA",
    iconBorder: "1px solid var(--fill-default-enabled-primary)", // green-60
    iconColor: "var(--fill-default-enabled-primary)",
    btnBorder: "1px solid var(--fill-default-enabled-primary)",
    btnText: "var(--fill-default-enabled-primary)",
  },
  dark: {
    bg: "var(--neutral-100)",
    iconBorder: "1px solid var(--border-default-disabled-primary)", // neutral-30
    iconColor: "var(--neutral-10)",
    btnBorder: "1px solid var(--fill-default-enabled-primary)",
    btnText: "var(--fill-default-enabled-primary)",
  },
} as const;

function ActionFooter({
  theme = "default",
  onAddNote,
  onAddPhoto,
  onNoOccurrences,
  noOccurrencesLabel = "No occurrences",
}: BottomSheetFooterActionProps) {
  const styles = ACTION_THEME_STYLES[theme];

  const iconBtnStyle: React.CSSProperties = {
    width: 44,
    height: 44,
    borderRadius: 56,
    border: styles.iconBorder,
    backgroundColor: styles.bg,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    color: styles.iconColor,
  };

  return (
    <div
      style={{
        backgroundColor: styles.bg,
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "16px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Add note icon button */}
      <button onClick={onAddNote} aria-label="Add note" style={iconBtnStyle}>
        <NotesAdd size={18} />
      </button>

      {/* Add photo icon button */}
      <button onClick={onAddPhoto} aria-label="Add photo" style={iconBtnStyle}>
        <PhotoCameraOn size={18} />
      </button>

      {/* "No occurrences" outlined button — flex:1 */}
      <button
        onClick={onNoOccurrences}
        style={{
          flex: "1 0 0",
          height: 44,
          borderRadius: 56,
          border: styles.btnBorder,
          backgroundColor: "transparent",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-family-primary)",
            fontSize: 16,
            fontWeight: 400,
            lineHeight: "24px",
            letterSpacing: "-0.12px",
            color: styles.btnText,
            whiteSpace: "nowrap",
          }}
        >
          {noOccurrencesLabel}
        </span>
      </button>
    </div>
  );
}
