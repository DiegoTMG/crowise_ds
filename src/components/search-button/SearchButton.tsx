/**
 * Search / Default · Focus · Typing
 *
 * Figma node: 138-6057
 *
 * Variants (property1):
 *   Default → 44×44 collapsed icon-only button
 *   Focus   → 358×44 expanded input with cursor
 *   Typing  → 358×44 expanded input with text + cursor
 *
 * Colours — 100% semantic tokens from src/theme/theme.css
 *   Background : --fill-default-none-secondary  (#F3F4F6 / neutral-10)
 *   Icon       : --icon-default-none-primary     (#696F88 / neutral-60)
 *   Cursor     : --text-select-enabled-secondary  (#0071CD / blue-60)
 *   Typed text : --text-default-none-primary      (#14151C / neutral-100)
 *
 * Typography — Body Reg 14px | 22px
 *   font-family: var(--font-family-body)
 *   font-weight: 400
 *   font-size: 14px
 *   line-height: 22px
 *   letter-spacing: -0.105px
 *
 * Icons — Search 18×18, Close 18×18 from src/icons/design/
 */

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Search, Close } from "../../icons";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SearchButtonProps {
  /** Current search value */
  value?: string;
  /** Called when the value changes */
  onChange?: (value: string) => void;
  /** Called when the search is submitted (Enter key) */
  onSubmit?: (value: string) => void;
  /** Called when the search is cleared or collapsed */
  onClear?: () => void;
  /** Placeholder text (not visible in Figma but useful for a11y) */
  placeholder?: string;
}

// ─── Styles ───────────────────────────────────────────────────────────────────

/** Base container — shared across all variants */
const BASE_STYLE: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  overflow: "clip",
  padding: "12px",
  borderRadius: "8px",
  backgroundColor: "var(--fill-default-none-secondary)",
  position: "relative",
  border: "none",
  outline: "none",
  cursor: "pointer",
  boxSizing: "border-box",
};

/** Default variant — 44×44 collapsed icon-only */
const COLLAPSED_STYLE: React.CSSProperties = {
  ...BASE_STYLE,
  gap: "0px",
  justifyContent: "center",
  width: "44px",
  height: "44px",
};

/** Focus / Typing variant — 358×44 expanded */
const EXPANDED_STYLE: React.CSSProperties = {
  ...BASE_STYLE,
  gap: "8px",
  width: "358px",
  height: "44px",
  cursor: "text",
};

/** Body Reg — 14px | 22px typography */
const TEXT_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-family-body)",
  fontSize: "14px",
  fontWeight: 400,
  fontStyle: "normal",
  lineHeight: "22px",
  letterSpacing: "-0.105px",
  textAlign: "left",
  flex: "1 0 0",
  minWidth: "1px",
  minHeight: "1px",
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  padding: 0,
  margin: 0,
};

// ─── Component ────────────────────────────────────────────────────────────────

export function SearchButton({
  value = "",
  onChange,
  onSubmit,
  onClear,
  placeholder = "",
}: SearchButtonProps) {
  const [expanded, setExpanded] = useState(false);
  const [internalValue, setInternalValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync external value
  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  // Focus input when expanding
  useEffect(() => {
    if (expanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [expanded]);

  const handleExpand = useCallback(() => {
    setExpanded(true);
  }, []);

  const handleClear = useCallback(() => {
    setInternalValue("");
    setExpanded(false);
    onChange?.("");
    onClear?.();
  }, [onChange, onClear]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = e.target.value;
      setInternalValue(next);
      onChange?.(next);
    },
    [onChange],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        onSubmit?.(internalValue);
      }
      if (e.key === "Escape") {
        handleClear();
      }
    },
    [internalValue, onSubmit, handleClear],
  );

  const handleBlur = useCallback(() => {
    if (!internalValue) {
      setExpanded(false);
    }
  }, [internalValue]);

  // ── Default (collapsed) ────────────────────────────────────────────────────
  if (!expanded) {
    return (
      <button
        type="button"
        style={COLLAPSED_STYLE}
        onClick={handleExpand}
        aria-label="Open search"
      >
        <Search
          size={18}
          style={{
            color: "var(--icon-default-none-primary)",
            flexShrink: 0,
            display: "block",
          }}
          aria-hidden
        />
      </button>
    );
  }

  // ── Focus / Typing (expanded) ──────────────────────────────────────────────
  return (
    <div style={EXPANDED_STYLE} onClick={() => inputRef.current?.focus()}>
      <Search
        size={18}
        style={{
          color: "var(--icon-default-none-primary)",
          flexShrink: 0,
          display: "block",
        }}
        aria-hidden
      />

      <input
        ref={inputRef}
        type="text"
        value={internalValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        placeholder={placeholder}
        style={{
          ...TEXT_STYLE,
          color: internalValue
            ? "var(--text-default-none-primary)"
            : "var(--text-select-enabled-secondary)",
          caretColor: "var(--text-select-enabled-secondary)",
        }}
        aria-label="Search"
      />

      <button
        type="button"
        onClick={handleClear}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "18px",
          height: "18px",
          flexShrink: 0,
          padding: 0,
          margin: 0,
          border: "none",
          outline: "none",
          background: "transparent",
          cursor: "pointer",
        }}
        aria-label="Clear search"
      >
        <Close
          size={18}
          style={{
            color: "var(--icon-default-none-primary)",
            display: "block",
          }}
          aria-hidden
        />
      </button>
    </div>
  );
}

SearchButton.displayName = "SearchButton";
