"use client";

import ArrowDown from "./arrowDown";
import Article from "./article";
import Back from "./back";
import Beenhere from "./beenhere";
import Check from "./check";
import Checker from "./checker";
import Close from "./close";
import Edit from "./edit";
import Hardware from "./hardware";
import Home from "./home";
import Hotel from "./hotel";
import Icecream from "./icecream";
import Laundry from "./laundry";
import Logo from "./logo";
import Machine from "./machine";
import Meal from "./meal";
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
  Close,
  Meal,
  Checker,
  Edit,
  Back,
};

export type IconType = keyof typeof Icons;

export default Icons;