import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Design System/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    rightCount: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

/** Variant 1 — Title + Subtitle + Icon + Count */
export const Variant1: Story = {
  name: "Property 1=1 (Title + Subtitle + Icon + Count)",
  args: {
    title: "PV04",
    subtitle: "130 ac • DAE: 45",
    rightCount: 5,
  },
};

/** Variant 2 — Title + Icon + Count */
export const Variant2: Story = {
  name: "Property 1=2 (Title + Icon + Count)",
  args: {
    title: "PV04",
    rightCount: 5,
  },
};

/** Variant 3 — Title + Icon only */
export const Variant3: Story = {
  name: "Property 1=3 (Title + Icon)",
  args: {
    title: "PV04",
  },
};

/** Variant 4 — Title + Subtitle + Icon */
export const Variant4: Story = {
  name: "Property 1=4 (Title + Subtitle + Icon)",
  args: {
    title: "PV04",
    subtitle: "130 ac • DAE: 45",
  },
};

/** All four Figma variants stacked */
export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 0, width: 390 }}>
      <div>
        <p
          style={{
            fontFamily: "var(--font-family-body)",
            fontSize: "12px",
            color: "var(--neutral-60)",
            margin: "8px 0 4px 16px",
          }}
        >
          Property 1=1
        </p>
        <Navbar title="PV04" subtitle="130 ac • DAE: 45" rightCount={5} />
      </div>
      <div>
        <p
          style={{
            fontFamily: "var(--font-family-body)",
            fontSize: "12px",
            color: "var(--neutral-60)",
            margin: "8px 0 4px 16px",
          }}
        >
          Property 1=2
        </p>
        <Navbar title="PV04" rightCount={5} />
      </div>
      <div>
        <p
          style={{
            fontFamily: "var(--font-family-body)",
            fontSize: "12px",
            color: "var(--neutral-60)",
            margin: "8px 0 4px 16px",
          }}
        >
          Property 1=3
        </p>
        <Navbar title="PV04" />
      </div>
      <div>
        <p
          style={{
            fontFamily: "var(--font-family-body)",
            fontSize: "12px",
            color: "var(--neutral-60)",
            margin: "8px 0 4px 16px",
          }}
        >
          Property 1=4
        </p>
        <Navbar title="PV04" subtitle="130 ac • DAE: 45" />
      </div>
    </div>
  ),
};
