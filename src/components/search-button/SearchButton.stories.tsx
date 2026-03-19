import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SearchButton } from "./SearchButton";

const meta: Meta<typeof SearchButton> = {
  title: "Design System/Search Button",
  component: SearchButton,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    placeholder: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof SearchButton>;

export const Default: Story = {
  name: "Default (Collapsed)",
  args: {},
};

export const WithPlaceholder: Story = {
  name: "Focus (Expanded)",
  args: {
    placeholder: "Search...",
  },
  render: (args) => {
    const [value, setValue] = React.useState("");
    return <SearchButton {...args} value={value} onChange={setValue} />;
  },
};

export const Typing: Story = {
  name: "Typing",
  args: {
    value: "Yield",
  },
};

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
      <div>
        <p style={{ fontFamily: "var(--font-family-body)", fontSize: "12px", color: "var(--neutral-60)", marginBottom: 8 }}>
          Default (Collapsed)
        </p>
        <SearchButton />
      </div>
      <div>
        <p style={{ fontFamily: "var(--font-family-body)", fontSize: "12px", color: "var(--neutral-60)", marginBottom: 8 }}>
          Interactive — click to expand
        </p>
        <InteractiveSearch />
      </div>
    </div>
  ),
};

function InteractiveSearch() {
  const [value, setValue] = React.useState("");
  return <SearchButton value={value} onChange={setValue} />;
}
