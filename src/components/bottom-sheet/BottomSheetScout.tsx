/**
 * BottomSheetScout — Application component for Scout & Note observations
 *
 * Figma source: https://www.figma.com/design/AnqFoDnF8mDF6RWwrVW9rR/Figma-Make-Components?node-id=165-3560
 * Nodes (from "Applications" section):
 *   165:4317 — Property1=Default  (scout observation)
 *   165:4359 — Property1=Variant2 (note observation)
 *   165:4402 — Property1=Variant3 (note with editedAt timestamp)
 *
 * ─── scout ──────────────────────────────────────────────────────────────────
 *  ╔══════════════════════════════════════╗
 *  ║           ━━━━━━━━                   ║  drag handle (40×4 neutral-20)
 *  ║  ┌──────────────────────────────┐    ║
 *  ║  │ 🌱 Scout  Oct 29…  • India   │    ║  teal-10 bg header   h-66
 *  ║  └──────────────────────────────┘    ║
 *  ║   Scouted           No ocurrence     ║  stats row
 *  ║   🔍 15 issues      🔍 5 issues      ║
 *  ║  ┌──────┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ║  media row  h-72
 *  ║  │Note  │ │  │ │  │ │  │ │  │ │  │ ║
 *  ║  └──────┘ └──┘ └──┘ └──┘ └──┘ └──┘ ║
 *  ║  ─────────────────────────────────── ║  divider neutral-20
 *  ║  [ 🗑️ ] [ ✏️ Edit        flex:1   ] ║  buttons (pb-24)
 *  ╚══════════════════════════════════════╝
 *
 * ─── note ───────────────────────────────────────────────────────────────────
 *  ╔══════════════════════════════════════╗
 *  ║           ━━━━━━━━                   ║  drag handle
 *  ║  ┌──────────────────────────────┐    ║
 *  ║  │ 📝 Note 01  Oct 29…  • Breno │    ║  purple-10 bg header
 *  ║  └──────────────────────────────┘    ║
 *  ║  Disease  Pest  Damage               ║  tags row
 *  ║  We have been diligently monitoring… ║  body text (with fade)
 *  ║  ┌─────────────────────┐ ┌──┐ ┌──┐ ║  media: voice player + thumbnails
 *  ║  │ ▶  ~~~~  0:43       │ │  │ │  │ ║
 *  ║  └─────────────────────┘ └──┘ └──┘ ║
 *  ║  ─────────────────────────────────── ║
 *  ║  [ 🗑️ ] [ ✏️ Edit               ]   ║
 *  ║  Edited  •  10/16/2025 - 11:48 AM   ║  ← only when editedAt is provided
 *  ╚══════════════════════════════════════╝
 *
 * Design tokens:
 *   Container bg        → var(--mono-white-100)
 *   Drag handle         → var(--neutral-20)
 *   Scout header bg     → var(--teal-10)   #E0F9F7
 *   Note header bg      → var(--purple-10) #F6F2FE
 *   Note header icon bg → var(--purple-20) #E7DDFC
 *   Header title        → var(--text-default-none-primary)   16px/24px 600
 *   Header subtitle     → var(--text-default-none-secondary) 14px/22px 400
 *   Stats label         → var(--text-default-none-secondary) 16px/24px 400
 *   Stats value         → var(--text-default-none-primary)   16px/24px 400
 *   Tag bg              → var(--fill-default-none-secondary) neutral-10
 *   Tag text            → var(--text-default-none-secondary) 12px/20px 600
 *   Body text           → var(--text-default-none-primary)   16px/24px 400
 *   Voice bg            → var(--purple-10) #F6F2FE
 *   Voice btn bg        → var(--fill-select-enabled-primary) blue-60 #0071CD
 *   Buttons border      → var(--border-default-disabled-primary)  neutral-30
 *   Timestamp           → var(--text-default-none-secondary) 14px/22px 400  centered
 */

import React from "react";
import Delete from "../../icons/design/Delete";
import Edit from "../../icons/design/Edit";
import Scout from "../../icons/feature/Scout";
import Notes from "../../icons/feature/Notes";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ScoutMediaThumbnail {
  src: string;
  alt?: string;
}

export interface BottomSheetScoutProps {
  /**
   * scout — teal-10 header, stats row, media note tile + thumbnails
   * note  — purple-10 header, tags, body text, voice player + thumbnails
   */
  variant: "scout" | "note";

  /* ── Header ── */
  /** Icon rendered at 18×18 inside the header pill. Defaults to Scout or Notes icon. */
  headerIcon?: React.ReactNode;
  /** Main label in the header (e.g. "Scout" or "Note 01") */
  title: string;
  /** Subtitle with date + user (e.g. "Oct 29th 2025 - 11:32 AM  •  India") */
  subtitle: string;

  /* ── Scout-only ── */
  /** Left stat label (e.g. "Scouted") */
  scoutedLabel?: string;
  /** Left stat value (e.g. "15 issues") */
  scoutedValue?: string;
  /** Right stat label (e.g. "No ocurrence") */
  noOccurrenceLabel?: string;
  /** Right stat value (e.g. "5 issues") */
  noOccurrenceValue?: string;
  /** Label inside the Note media tile */
  noteLabel?: string;

  /* ── Note-only ── */
  tags?: string[];
  /** Main body text */
  text?: string;
  /** Voice recording duration label (e.g. "0:43") */
  voiceDuration?: string;

  /* ── Shared ── */
  /** Thumbnail images to display in the media row */
  thumbnails?: ScoutMediaThumbnail[];
  onDelete?: () => void;
  onEdit?: () => void;
  /** When provided, shows "Edited  •  <editedAt>" at the bottom of the sheet */
  editedAt?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const HEADER_BG = {
  scout: "var(--teal-10)",   // #E0F9F7
  note: "var(--purple-10)",  // #F6F2FE
} as const;

function Thumbnail({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <div
      style={{
        width: 72,
        height: 72,
        borderRadius: 8,
        flexShrink: 0,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

// ─── BottomSheetScout ─────────────────────────────────────────────────────────

export function BottomSheetScout({
  variant,
  headerIcon,
  title,
  subtitle,
  scoutedLabel = "Scouted",
  scoutedValue = "15 issues",
  noOccurrenceLabel = "No ocurrence",
  noOccurrenceValue = "5 issues",
  noteLabel = "Note",
  tags = [],
  text,
  voiceDuration,
  thumbnails = [],
  onDelete,
  onEdit,
  editedAt,
}: BottomSheetScoutProps) {
  const isScout = variant === "scout";
  const isNote = variant === "note";
  const headerBg = HEADER_BG[variant];
  const btnBorder = "1px solid var(--border-default-disabled-primary)"; // neutral-30

  // default icons
  const defaultIcon = isScout
    ? <Scout size={18} />
    : <Notes size={18} />;

  const displayIcon = headerIcon ?? defaultIcon;

  return (
    <div
      style={{
        backgroundColor: "var(--fill-default-none-primary)",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 16,
        width: "100%",
        boxSizing: "border-box",
        gap: 0,
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
          marginBottom: 16,
        }}
      />

      {/* ── Content ──────────────────────────────────────────────────────── */}
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
        {/* ── Header pill ────────────────────────────────────────────────── */}
        <div
          style={{
            backgroundColor: headerBg,
            display: "flex",
            gap: 16,
            alignItems: "center",
            paddingLeft: 16,
            paddingRight: 12,
            paddingTop: isScout ? 10 : 12,
            paddingBottom: isScout ? 10 : 12,
            borderRadius: 12,
            width: "100%",
            boxSizing: "border-box",
            height: isScout ? 66 : undefined,
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: 18,
              height: 18,
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ...(isNote && {
                // Note icon gets a purple-20 circular bg from the design
                backgroundColor: "var(--purple-20)",
                borderRadius: "50%",
                width: 44,
                height: 44,
                color: "var(--purple-60)",
              }),
              ...(isScout && {
                color: "var(--teal-60)",
              }),
            }}
          >
            {displayIcon}
          </div>

          {/* Title + subtitle */}
          <div
            style={{
              display: "flex",
              flex: "1 0 0",
              flexDirection: "column",
              justifyContent: "center",
              minWidth: 0,
              paddingTop: 4,
              paddingBottom: 4,
              gap: 0,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-family-primary)",
                fontSize: 16,
                fontWeight: 600,
                lineHeight: "24px",
                letterSpacing: "-0.12px",
                color: "var(--text-default-none-primary)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </span>
            <span
              style={{
                fontFamily: "var(--font-family-primary)",
                fontSize: 14,
                fontWeight: 400,
                lineHeight: "22px",
                letterSpacing: "-0.105px",
                color: "var(--text-default-none-secondary)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {subtitle}
            </span>
          </div>
        </div>

        {/* ── Tags (note only) ───────────────────────────────────────────── */}
        {isNote && tags.length > 0 && (
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 8,
              width: "100%",
            }}
          >
            {tags.map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "var(--fill-default-none-secondary)", // neutral-10
                  borderRadius: 40,
                  paddingLeft: 8,
                  paddingRight: 8,
                  height: 24,
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-family-primary)",
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: "20px",
                    letterSpacing: "-0.09px",
                    color: "var(--text-default-none-secondary)", // neutral-60
                    whiteSpace: "nowrap",
                  }}
                >
                  {tag}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* ── Scout stats row ────────────────────────────────────────────── */}
        {isScout && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {[
              { label: scoutedLabel, value: scoutedValue },
              { label: noOccurrenceLabel, value: noOccurrenceValue },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-family-primary)",
                    fontSize: 16,
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "-0.12px",
                    color: "var(--text-default-none-secondary)",
                  }}
                >
                  {label}
                </span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <Scout size={16} style={{ color: "var(--icon-default-none-primary)", flexShrink: 0 }} />
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
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Body text (note only) ──────────────────────────────────────── */}
        {isNote && text && (
          <div
            style={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-family-primary)",
                fontSize: 16,
                fontWeight: 400,
                lineHeight: "24px",
                letterSpacing: "-0.12px",
                color: "var(--text-default-none-primary)",
                margin: 0,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {text}
            </p>
            {/* Bottom fade overlay to match the Figma text-fade effect */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 24,
                background:
                  "linear-gradient(to bottom, transparent, var(--fill-default-none-primary))",
                pointerEvents: "none",
              }}
            />
          </div>
        )}

        {/* ── Media row ──────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            width: "100%",
          }}
        >
          {/* Scout: Note tile */}
          {isScout && (
            <div
              style={{
                backgroundColor: "var(--purple-10)", // #F6F2FE
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                padding: 16,
                borderRadius: 12,
                height: 72,
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  backgroundColor: "var(--purple-20)", // #E7DDFC
                  borderRadius: 56,
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--purple-60)",
                }}
              >
                <Notes size={18} />
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
                {noteLabel}
              </span>
            </div>
          )}

          {/* Note: Voice player */}
          {isNote && voiceDuration && (
            <div
              style={{
                backgroundColor: "var(--purple-10)", // #F6F2FE
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: 16,
                borderRadius: 12,
                height: 72,
                flexShrink: 0,
              }}
            >
              {/* Play button */}
              <button
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 40,
                  backgroundColor: "var(--fill-select-enabled-primary)", // blue-60
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
                aria-label="Play voice recording"
              >
                {/* Play triangle */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5V19L19 12L8 5Z" fill="white" />
                </svg>
              </button>

              {/* Waveform placeholder */}
              <div
                style={{
                  width: 96,
                  height: 40,
                  backgroundColor: "var(--ds-divider)",
                  borderRadius: 4,
                  flexShrink: 0,
                }}
              />

              {/* Duration */}
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
                {voiceDuration}
              </span>
            </div>
          )}

          {/* Thumbnails */}
          {thumbnails.map((thumb, i) => (
            <Thumbnail key={i} src={thumb.src} alt={thumb.alt} />
          ))}
        </div>

        {/* ── Footer ─────────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {/* Divider */}
          <div
            style={{
              backgroundColor: "var(--ds-divider)",
              height: 1,
              width: "100%",
              flexShrink: 0,
            }}
          />

          {/* Buttons row */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 8,
              width: "100%",
              paddingBottom: isScout ? 24 : 0,
            }}
          >
            {/* Delete */}
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
                color: "var(--icon-default-none-primary)",
              }}
            >
              <Delete size={18} />
            </button>

            {/* Edit */}
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
        </div>
      </div>

      {/* ── Edited timestamp (note with editedAt) ─────────────────────────── */}
      {editedAt && (
        <span
          style={{
            fontFamily: "var(--font-family-primary)",
            fontSize: 14,
            fontWeight: 400,
            lineHeight: "22px",
            letterSpacing: "-0.105px",
            color: "var(--text-default-none-secondary)",
            textAlign: "center",
            width: "100%",
            marginTop: 16,
          }}
        >
          {editedAt}
        </span>
      )}
    </div>
  );
}
