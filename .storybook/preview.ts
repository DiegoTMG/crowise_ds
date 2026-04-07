import "../src/theme/theme.css";
import "../src/theme/fonts.css";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "var(--fill-default-none-secondary, #F3F4F6)" },
        { name: "white", value: "#ffffff" },
        { name: "dark", value: "#14151C" },
      ],
    },
  },
};

export default preview;
