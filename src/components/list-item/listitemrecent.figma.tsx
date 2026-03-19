import figma from "@figma/code-connect";
import { ListItemRecent } from "./ListItemRecent";

figma.connect(
  ListItemRecent,
  "https://www.figma.com/design/aTjr3ahBbKrSPThrmcEhtD/%F0%9F%90%9B-Sample-problem?node-id=5188-102121",
  {
    props: {
      icon: figma.instance("icon (24px)"),
      title: figma.string("Name"),
      info: figma.string("Info"),
      checked: figma.boolean("checked"),
    },
    example: ({ icon, title, info, checked }) => (
      <ListItemRecent
        icon={icon}
        title={title}
        info={info}
        checked={checked}
        onClick={() => {}}
      />
    ),
  }
);
