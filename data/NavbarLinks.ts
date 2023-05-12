import { NavbarProps } from "@mantine/core";
import {
  IconBox,
  IconComponents,
  IconDisc,
  IconHome,
  IconTopologyFull,
} from "@tabler/icons-react";

export const NavbarLinks = [
  { icon: IconHome, label: "Overview" },
  { icon: IconBox, label: "Containers" },
  { icon: IconComponents, label: "Images" },
  { icon: IconDisc, label: "Volumes" },
  { icon: IconTopologyFull, label: "Networks" },
];
