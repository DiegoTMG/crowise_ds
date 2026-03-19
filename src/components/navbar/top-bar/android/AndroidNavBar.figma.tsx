import figma from "@figma/code-connect";
import { AndroidNavBar } from "./AndroidNavBar";

// Figma: "Figma Make Components" › 04 - Navbar › Top bar › Topbar (default size)
// OS=Android/React Native, Colour=Light, Display bar=No, Search bar=No
figma.connect(
  AndroidNavBar,
  "https://www.figma.com/design/AnqFoDnF8mDF6RWwrVW9rR/Figma-Make-Components?node-id=125-4091",
  {
    props: {
      colour: figma.enum("Colour", { Light: "light", Dark: "dark" }),
      displayBar: figma.boolean("Display bar"),
      searchBar: figma.boolean("Search bar"),
    },
    example: ({ colour, displayBar, searchBar }) => (
      <AndroidNavBar
        colour={colour}
        displayBar={displayBar}
        searchBar={searchBar}
        title="Title"
        subtitle="Subtitle"
      />
    ),
  }
);
