"use client";

import Hardware from "./hardware";
import Home from "./home";
import Hotel from "./hotel";
import Icecream from "./icecream";
import Laundry from "./laundry";
import Logo from "./logo";
import Nature from "./nature";
import Nights from "./nights";

export interface IconProps { 
  className?: string;

  defaultFill?: boolean;
  fill?: boolean;
}

const Icons = {
  Logo,
  Home,
  Laundry,
  Hotel,
  Nights,
  Nature,
  Icecream,
  Hardware,
};

export type IconType = keyof typeof Icons;

export default Icons;