import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BottomSheet } from "../src/components/bottom-sheet/BottomSheet";
import { BottomSheetHeader } from "../src/components/bottom-sheet/BottomSheetHeader";
import { BottomSheetFooter } from "../src/components/bottom-sheet/BottomSheetFooter";
import InsertPhoto from "../src/icons/design/InsertPhoto";
import Assignment from "../src/icons/design/Assignment";
import Delete from "../src/icons/design/Delete";

// ─── BottomSheet ──────────────────────────────────────────────────────────────

const meta: Meta<typeof BottomSheet> = {
  title: "Components/BottomSheet",
  component: BottomSheet,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const MenuVariant: Story = {
  args: {
    variant: "menu",
    title: "Add observation",
    items: [
      { icon: <InsertPhoto size={18} />, label: "Camera" },
      { icon: <Assignment size={18} />, label: "Notes" },
    ],
  },
};

export const RadioVariant: Story = {
  render: () => {
    const [selected, setSelected] = useState("none");
    return (
      <BottomSheet
        variant="radio"
        title="Severity"
        options={[
          { value: "none", label: "None" },
          { value: "low", label: "Low" },
          { value: "medium", label: "Medium" },
          { value: "high", label: "High" },
        ]}
        selectedValue={selected}
        onValueChange={setSelected}
        onClose={() => {}}
      />
    );
  },
};

// ─── BottomSheetHeader ────────────────────────────────────────────────────────

export const HeaderVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "390px" }}>
      <BottomSheetHeader state="open"   theme="light" label="Customize content" />
      <BottomSheetHeader state="closed" theme="light" />
    </div>
  ),
};

// ─── BottomSheetFooter ────────────────────────────────────────────────────────

export const FooterEdit: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "390px" }}>
      <BottomSheetFooter variant="edit" onDelete={() => {}} onEdit={() => {}} />
      <BottomSheetFooter variant="edit" onDelete={() => {}} onEdit={() => {}} editedAt="10/16/2025 - 11:48 AM" />
    </div>
  ),
};

