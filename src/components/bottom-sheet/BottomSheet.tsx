/**
 * BottomSheet
 *
 * Figma source: https://www.figma.com/design/AnqFoDnF8mDF6RWwrVW9rR/Figma-Make-Components?node-id=165-3558
 *
 * Variants:
 *   menu  — Node 165:4510  — drag handle + title + list of icon+label items
 *   radio — Node 165:4524  — drag handle + title + close button + radio option list
 *
 * Layout:
 *   ┌──────────────────────────────────┐
 *   │           ━━━━━━━━               │  ← drag handle (40×4 px, neutral-20)
 *   │                                  │
 *   │  Title                      [×]  │  ← close button (radio only)
 *   │                                  │
 *   │    ☐ Gallery                     │  ← menu item  (menu variant)
 *   │    ☐ Camera                      │
 *   │  ──────────────────────────────  │
 *   │  ● None                          │  ← radio item (radio variant)
 *   │  ○ Low                           │
 *   └──────────────────────────────────┘
 *
 * Design tokens:
 *   Container bg       → var(--mono-white-100)
 *   Drag handle        → var(--neutral-20)
 *   Title              → var(--text-default-none-primary)  600 20px/24px -0.15px
 *   Close btn bg       → var(--fill-default-none-secondary)  neutral-10
 *   Close btn icon     → var(--icon-default-none-primary)    neutral-60
 *   Menu item text     → var(--text-default-none-primary)  400 16px/24px -0.12px
 *   Radio selected bg  → var(--fill-select-enabled-secondary)  blue-10
 *   Radio selected bdr → var(--blue-30)
 *   Radio default bdr  → var(--neutral-20)
 *   Radio indicator    → var(--fill-select-enabled-primary)   blue-60
 *   Radio label        → var(--text-default-none-primary)  600/400 14px/22px -0.105px
 */

import React from "react";
import Close from "../../icons/design/Close";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BottomSheetMenuItem {
  /** Icon node rendered at 18×18 px. Use icons from src/icons/. */
  icon: React.ReactNode;
  /** Label text for the menu item. */
  label: string;
  /** Optional press handler. */
  onPress?: () => void;
}

export interface BottomSheetRadioOption {
  value: string;
  label: string;
}

interface BottomSheetBaseProps {
  /** Sheet title displayed in the header. */
  title: string;
  /** Called when the close button is tapped (shown in radio variant when supplied). */
  onClose?: () => void;
}

export interface BottomSheetMenuProps extends BottomSheetBaseProps {
  variant: "menu";
  items: BottomSheetMenuItem[];
  options?: never;
  selectedValue?: never;
  onValueChange?: never;
}

export interface BottomSheetRadioProps extends BottomSheetBaseProps {
  variant: "radio";
  options: BottomSheetRadioOption[];
  /** Currently selected option value. */
  selectedValue?: string;
  /** Called when the user taps an option. */
  onValueChange?: (value: string) => void;
  items?: never;
}

export type BottomSheetProps = BottomSheetMenuProps | BottomSheetRadioProps;

// ─── RadioIndicator ───────────────────────────────────────────────────────────

interface RadioIndicatorProps {
  selected: boolean;
}

function RadioIndicator({ selected }: RadioIndicatorProps) {
  return (
    <div
      style={{
        width: 20,
        height: 20,
        borderRadius: "50%",
        border: `2px solid ${
          selected
            ? "var(--fill-select-enabled-primary)"   // blue-60
            : "var(--border-default-disabled-primary)" // neutral-30
        }`,
        backgroundColor: "var(--fill-default-none-primary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        boxSizing: "border-box",
      }}
    >
      {selected && (
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--fill-select-enabled-primary)", // blue-60
          }}
        />
      )}
    </div>
  );
}

// ─── BottomSheet ──────────────────────────────────────────────────────────────

export function BottomSheet(props: BottomSheetProps) {
  const isRadio = props.variant === "radio";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "var(--fill-default-none-primary)",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        overflow: "hidden",
        paddingTop: isRadio ? 16 : 12,
        paddingBottom: isRadio ? 48 : 24,
        paddingLeft: 16,
        paddingRight: 16,
        gap: isRadio ? 8 : 16,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* ── Drag handle ──────────────────────────────────────────────────── */}
      <div
        style={{
          width: 40,
          height: 4,
          borderRadius: 45,
          backgroundColor: "var(--ds-drag-handle)",
          flexShrink: 0,
        }}
      />

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          flexShrink: 0,
          gap: 16,
        }}
      >
        {isRadio ? (
          /* ── Radio variant ─────────────────────────────────────────────── */
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              alignItems: "center",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-family-primary)",
                  fontSize: 20,
                  fontWeight: 600,
                  lineHeight: "24px",
                  letterSpacing: "-0.15px",
                  color: "var(--text-default-none-primary)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  flexShrink: 1,
                }}
              >
                {props.title}
              </span>

              {props.onClose && (
                <button
                  onClick={props.onClose}
                  aria-label="Close"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 24,
                    height: 24,
                    borderRadius: 24,
                    backgroundColor: "var(--fill-default-none-secondary)", // neutral-10
                    border: "none",
                    cursor: "pointer",
                    padding: 3,
                    flexShrink: 0,
                    boxSizing: "border-box",
                    color: "var(--icon-default-none-primary)", // neutral-60
                  }}
                >
                  <Close size={18} />
                </button>
              )}
            </div>

            {/* Options */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                alignItems: "flex-start",
                overflow: "hidden",
                width: "100%",
              }}
            >
              {(props as BottomSheetRadioProps).options.map((option) => {
                const isSelected =
                  option.value === (props as BottomSheetRadioProps).selectedValue;

                return (
                  <div
                    key={option.value}
                    onClick={() =>
                      (props as BottomSheetRadioProps).onValueChange?.(option.value)
                    }
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: 16,
                      borderRadius: 8,
                      border: `1px solid ${
                        isSelected ? "var(--blue-30)" : "var(--ds-divider)"
                      }`,
                      backgroundColor: isSelected
                        ? "var(--fill-select-enabled-secondary)" // blue-10
                        : "transparent",
                      cursor: "pointer",
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        height: 20,
                        flexShrink: 0,
                      }}
                    >
                      <RadioIndicator selected={isSelected} />
                      <span
                        style={{
                          fontFamily: "var(--font-family-primary)",
                          fontSize: 14,
                          fontWeight: isSelected ? 600 : 400,
                          lineHeight: "22px",
                          letterSpacing: "-0.105px",
                          color: "var(--text-default-none-primary)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {option.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* ── Menu variant ──────────────────────────────────────────────── */
          <>
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-family-primary)",
                  fontSize: 20,
                  fontWeight: 600,
                  lineHeight: "24px",
                  letterSpacing: "-0.15px",
                  color: "var(--text-default-none-primary)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {props.title}
              </span>
            </div>

            {/* Menu items */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                paddingLeft: 16,
                paddingRight: 16,
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              {(props as BottomSheetMenuProps).items.map((item, index) => (
                <div
                  key={index}
                  onClick={item.onPress}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    paddingTop: 15,
                    paddingBottom: 15,
                    width: "100%",
                    backgroundColor: "var(--fill-default-none-primary)",
                    borderRadius: 12,
                    cursor: item.onPress ? "pointer" : "default",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--icon-default-none-primary)", // neutral-60
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-family-primary)",
                      fontSize: 16,
                      fontWeight: 400,
                      lineHeight: "24px",
                      letterSpacing: "-0.12px",
                      color: "var(--text-default-none-primary)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
