import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "../src/components/navbar/Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    rightCount: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const TitleOnly: Story = {
  args: { title: "Scout — Corn" },
};

export const TitleWithSubtitle: Story = {
  args: {
    title: "Scout — Corn",
    subtitle: "130 ac • DAE: 45",
  },
};

export const WithCount: Story = {
  args: {
    title: "Scout — Corn",
    rightCount: 12,
  },
};

export const FullVariant: Story = {
  args: {
    title: "Scout — Corn",
    subtitle: "130 ac • DAE: 45",
    rightCount: 12,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px", width: "390px" }}>
      <Navbar title="Title only" />
      <Navbar title="Title + count" rightCount={5} />
      <Navbar title="Title + subtitle" subtitle="130 ac • DAE: 45" />
      <Navbar title="Title + subtitle + count" subtitle="130 ac • DAE: 45" rightCount={12} />
    </div>
  ),
};
