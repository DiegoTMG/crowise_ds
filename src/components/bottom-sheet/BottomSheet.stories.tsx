import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BottomSheet } from "./BottomSheet";
import { BottomSheetHeader } from "./BottomSheetHeader";
import { BottomSheetFooter } from "./BottomSheetFooter";
import { BottomSheetScout } from "./BottomSheetScout";
import InsertPhoto from "../../icons/design/InsertPhoto";
import PhotoCameraOn from "../../icons/feature/PhotoCameraOn";

const meta: Meta<typeof BottomSheet> = {
  title: "Design System/BottomSheet",
  component: BottomSheet,
  tags: ["autodocs"],
  decorators: [
    (StoryFn) => (
      <div
        style={{
          // Simulate a mobile viewport frame — bottom sheets live inside an app container
          width: "100%",
          maxWidth: 430,
          minHeight: 300,
          // Use the semantic secondary surface so the frame
          // responds to dark / accessibility themes automatically
          backgroundColor: "var(--fill-default-none-secondary)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        <StoryFn />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const Menu: Story = {
  name: "Menu — Add photos",
  render: () => (
    <BottomSheet
      variant="menu"
      title="Add photos"
      items={[
        { icon: <InsertPhoto size={18} />, label: "Gallery" },
        { icon: <PhotoCameraOn size={18} />, label: "Camera" },
      ]}
    />
  ),
};

export const Radio: Story = {
  name: "Radio — Infestation level",
  render: () => (
    <BottomSheet
      variant="radio"
      title="Infestation level"
      selectedValue="none"
      onClose={() => {}}
      options={[
        { value: "none", label: "None" },
        { value: "low", label: "Low" },
        { value: "medium", label: "Medium" },
        { value: "high", label: "High" },
      ]}
    />
  ),
};

export const RadioNoSelection: Story = {
  name: "Radio — No selection",
  render: () => (
    <BottomSheet
      variant="radio"
      title="Infestation level"
      onClose={() => {}}
      options={[
        { value: "none", label: "None" },
        { value: "low", label: "Low" },
        { value: "medium", label: "Medium" },
        { value: "high", label: "High" },
      ]}
    />
  ),
};

// ─── BottomSheetHeader stories ────────────────────────────────────────────────

export const HeaderLightOpen: Story = {
  name: "Header — Light / Open",
  render: () => <BottomSheetHeader state="open" theme="light" />,
};

export const HeaderLightClosed: Story = {
  name: "Header — Light / Closed",
  render: () => <BottomSheetHeader state="closed" theme="light" />,
};

export const HeaderDarkOpen: Story = {
  name: "Header — Dark / Open",
  render: () => (
    <div style={{ backgroundColor: "var(--neutral-100)", maxWidth: 390 }}>
      <BottomSheetHeader state="open" theme="dark" />
    </div>
  ),
};

export const HeaderDarkClosed: Story = {
  name: "Header — Dark / Closed",
  render: () => (
    <div style={{ backgroundColor: "var(--neutral-100)", maxWidth: 390 }}>
      <BottomSheetHeader state="closed" theme="dark" />
    </div>
  ),
};

// ─── BottomSheetFooter stories ────────────────────────────────────────────────

export const FooterEdit: Story = {
  name: "Footer — Edit (no timestamp)",
  render: () => (
    <BottomSheetFooter
      variant="edit"
      onDelete={() => {}}
      onEdit={() => {}}
    />
  ),
};

export const FooterEditWithTimestamp: Story = {
  name: "Footer — Edit + Edited timestamp",
  render: () => (
    <BottomSheetFooter
      variant="edit"
      onDelete={() => {}}
      onEdit={() => {}}
      editedAt="Edited  •  10/16/2025 - 11:48 AM"
    />
  ),
};

export const FooterActionDefault: Story = {
  name: "Footer — Action / Default",
  render: () => (
    <BottomSheetFooter
      variant="action"
      theme="default"
      onAddNote={() => {}}
      onAddPhoto={() => {}}
      onNoOccurrences={() => {}}
    />
  ),
};

export const FooterActionContrast: Story = {
  name: "Footer — Action / Contrast",
  render: () => (
    <BottomSheetFooter
      variant="action"
      theme="contrast"
      onAddNote={() => {}}
      onAddPhoto={() => {}}
      onNoOccurrences={() => {}}
    />
  ),
};

export const FooterActionDark: Story = {
  name: "Footer — Action / Dark",
  render: () => (
    <BottomSheetFooter
      variant="action"
      theme="dark"
      onAddNote={() => {}}
      onAddPhoto={() => {}}
      onNoOccurrences={() => {}}
    />
  ),
};

// ─── BottomSheetScout stories ─────────────────────────────────────────────────

export const ScoutDefault: Story = {
  name: "Scout — Default (scout observation)",
  render: () => (
    <BottomSheetScout
      variant="scout"
      title="Scout"
      subtitle="Oct 29th 2025 - 11:32 AM  •  India"
      scoutedLabel="Scouted"
      scoutedValue="15 issues"
      noOccurrenceLabel="No ocurrence"
      noOccurrenceValue="5 issues"
      noteLabel="Note"
      thumbnails={[]}
      onDelete={() => {}}
      onEdit={() => {}}
    />
  ),
};

export const ScoutNote: Story = {
  name: "Scout — Note (without timestamp)",
  render: () => (
    <BottomSheetScout
      variant="note"
      title="Note 01"
      subtitle="Oct 29th 2025 - 11:32 AM  •  Breno"
      tags={["Disease", "Pest", "Damage"]}
      text="We have been diligently monitoring the situation, but at this moment, pest monitoring has been temporarily suspended. The crops that hinder our ability to access the field consistently but already solved in a few weeks."
      voiceDuration="0:43"
      thumbnails={[]}
      onDelete={() => {}}
      onEdit={() => {}}
    />
  ),
};

export const ScoutNoteEdited: Story = {
  name: "Scout — Note (with edited timestamp)",
  render: () => (
    <BottomSheetScout
      variant="note"
      title="Note 01"
      subtitle="Oct 29th 2025 - 11:32 AM  •  Breno"
      tags={["Disease", "Pest", "Damage"]}
      text="We have been diligently monitoring the situation, but at this moment, pest monitoring has been temporarily suspended. The crops that hinder our ability to access the field consistently but already solved in a few weeks."
      voiceDuration="0:43"
      thumbnails={[]}
      onDelete={() => {}}
      onEdit={() => {}}
      editedAt="Edited  •  10/16/2025 - 11:48 AM"
    />
  ),
};
