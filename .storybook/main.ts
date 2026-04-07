import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // Stories live outside src/ so they are never included in the npm package.
  // package.json#files only lists ["dist", "src"] — .storybook/ and stories/ are excluded.
  stories: ["../stories/**/*.stories.@(ts|tsx)"],
  addons: [],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;
