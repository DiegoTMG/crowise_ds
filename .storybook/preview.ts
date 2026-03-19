import type { Preview } from "@storybook/react";
import "../src/theme/theme.css";
import "../src/theme/fonts.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#14151C" },
        { name: "neutral", value: "#F3F4F6" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
