import figma from "@figma/code-connect";
import { SwitchMenu } from "./SwitchMenu";

// Figma: "Figma Make Components" › Switch-menu
figma.connect(
  SwitchMenu,
  "https://www.figma.com/design/AnqFoDnF8mDF6RWwrVW9rR/Figma-Make-Components?node-id=137-3437",
  {
    props: {
      mode: figma.enum("Mode", {
        "Not Scouted": "not-scouted",
        Scouted: "scouted",
      }),
      activeTab: figma.enum("Active tab", {
        All: "all",
        Recent: "recent",
        Scouted: "scouted",
      }),
      scoutedCount: figma.string("Scouted count"),
    },
    example: ({ mode, activeTab, scoutedCount }) => (
      <SwitchMenu
        mode={mode}
        activeTab={activeTab}
        scoutedCount={Number(scoutedCount) || 0}
      />
    ),
  }
);
