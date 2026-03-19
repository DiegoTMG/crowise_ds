import type { Meta, StoryObj } from "@storybook/react";
import { CategoryDivider } from "./CategoryDivider";

const meta: Meta<typeof CategoryDivider> = {
  title: "Design System/CategoryDivider",
  component: CategoryDivider,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof CategoryDivider>;

export const Default: Story = {
  name: "Default",
  args: {
    label: "Label of category",
  },
  decorators: [
    (StoryFn) => (
      <div style={{ padding: "16px" }}>
        <StoryFn />
      </div>
    ),
  ],
};
