import figma from "@figma/code-connect";
import { ListItem } from "./ListItem";

figma.connect(
  ListItem,
  "https://www.figma.com/design/aTjr3ahBbKrSPThrmcEhtD/%F0%9F%90%9B-Sample-problem?node-id=5178-10926",
  {
    props: {
      icon: figma.instance("icon (24px)"),
      title: figma.string("Name"),
      info: figma.string("Info"),
    },
    example: ({ icon, title, info }) => (
      <ListItem
        icon={icon}
        title={title}
        info={info}
        onClick={() => {}}
      />
    ),
  }
);
