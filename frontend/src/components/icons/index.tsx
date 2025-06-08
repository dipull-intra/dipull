"use client";

import ArrowDown from "./arrowDown";
import Article from "./article";
import Beenhere from "./beenhere";
import Check from "./check";
import Hardware from "./hardware";
import Home from "./home";
import Hotel from "./hotel";
import Icecream from "./icecream";
import Laundry from "./laundry";
import Logo from "./logo";
import Machine from "./machine";
import Nature from "./nature";
import Nights from "./nights";
import Search from "./search";
import Vote from "./vote";

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
  Machine,
  Beenhere,
  ArrowDown,
  Check,
  Article,
  Search,
  Vote,
};

export type IconType = keyof typeof Icons;

export default Icons;