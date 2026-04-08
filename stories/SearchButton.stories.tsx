import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SearchButton } from "../src/components/search-button/SearchButton";

const meta: Meta<typeof SearchButton> = {
  title: "Components/SearchButton",
  component: SearchButton,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    placeholder: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof SearchButton>;

export const Collapsed: Story = {
  args: {},
};

export const WithValue: Story = {
  args: {
    value: "Corn",
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <SearchButton
        value={value}
        onChange={setValue}
        onClear={() => setValue("")}
        placeholder="Search..."
      />
    );
  },
};
