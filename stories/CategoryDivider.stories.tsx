import type { Meta, StoryObj } from "@storybook/react";
import { CategoryDivider } from "../src/components/category-divider/CategoryDivider";

const meta: Meta<typeof CategoryDivider> = {
  title: "Components/CategoryDivider",
  component: CategoryDivider,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof CategoryDivider>;

export const Default: Story = {
  args: { label: "Recent" },
};

export const AllLabels: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "360px" }}>
      <CategoryDivider label="Recent" />
      <CategoryDivider label="Favourites" />
      <CategoryDivider label="All crops" />
    </div>
  ),
};
