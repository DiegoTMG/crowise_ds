import figma from "@figma/code-connect";
import { IosNavBar } from "./IosNavBar";

// Figma: "Figma Make Components" › 04 - Navbar › Top bar › Topbar (default size)
// OS=iOS (old), Colour=Dark, Display bar=No, Search bar=No
figma.connect(
  IosNavBar,
  "https://www.figma.com/design/AnqFoDnF8mDF6RWwrVW9rR/Figma-Make-Components?node-id=125-4145",
  {
    props: {
      mode: figma.enum("Colour", { Light: "light", Dark: "dark" }),
      hasNotch: figma.enum("OS", {
        "iOS (old)": false,
        "iOS w/ notch": true,
      }),
      displayBar: figma.boolean("Display bar"),
      searchBar: figma.boolean("Search bar"),
    },
    example: ({ mode, hasNotch, displayBar, searchBar }) => (
      <IosNavBar
        mode={mode}
        hasNotch={hasNotch}
        displayBar={displayBar}
        searchBar={searchBar}
        title="Title"
        subtitle="Subtitle"
      />
    ),
  }
);
