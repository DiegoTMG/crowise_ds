import React from "react";
import type { Preview, Decorator } from "@storybook/react";
import "../src/theme/theme.css";
import "../src/theme/fonts.css";

// ─── Theme background map ─────────────────────────────────────────────────────
const THEME_BG: Record<string, string> = {
  light:         "#ffffff",
  dark:          "#14151C",
  accessibility: "#FFEEBA",
};

// ─── Global decorator — applies data-theme to every story ────────────────────
const withTheme: Decorator = (StoryFn, context) => {
  const theme = String(context.globals?.theme || "light");
  const bg = THEME_BG[theme] ?? "#ffffff";

  return React.createElement(
    "div",
    {
      "data-theme": theme !== "light" ? theme : undefined,
      style: {
        backgroundColor: bg,
        minHeight: "100%",
        padding: "0",
      },
    },
    React.createElement(StoryFn as React.FC)
  );
};

// ─── Preview config ───────────────────────────────────────────────────────────
const preview: Preview = {
  decorators: [withTheme],

  globalTypes: {
    theme: {
      name: "Theme",
      description: "Color theme — light / dark / accessibility (yellow)",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light",         title: "Light",         icon: "sun"           },
          { value: "dark",          title: "Dark",          icon: "moon"          },
          { value: "accessibility", title: "Accessibility",  icon: "accessibility" },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },

  parameters: {
    backgrounds: { disable: true },   // bg controlled by the theme toolbar above
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date:  /Date$/i,
      },
    },
  },
};

export default preview;
