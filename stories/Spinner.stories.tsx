import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../src/components/Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    size: { control: { type: "number", min: 16, max: 120, step: 4 } },
    trackColor: { control: "color" },
    activeColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: { size: 36 },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <Spinner size={18} />
        <span style={{ fontFamily: "Noto Sans, sans-serif", fontSize: "11px", color: "#696F88" }}>18 — Button</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <Spinner size={36} />
        <span style={{ fontFamily: "Noto Sans, sans-serif", fontSize: "11px", color: "#696F88" }}>36 — Section</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <Spinner size={72} />
        <span style={{ fontFamily: "Noto Sans, sans-serif", fontSize: "11px", color: "#696F88" }}>72 — Full page</span>
      </div>
    </div>
  ),
};

export const OnDark: Story = {
  render: () => (
    <div style={{ background: "#14151C", padding: "32px", display: "flex", gap: "24px", alignItems: "center" }}>
      <Spinner size={18} trackColor="var(--neutral-70)" activeColor="var(--mono-white-100)" />
      <Spinner size={36} trackColor="var(--neutral-70)" activeColor="var(--mono-white-100)" />
      <Spinner size={72} trackColor="var(--neutral-70)" activeColor="var(--mono-white-100)" />
    </div>
  ),
};
