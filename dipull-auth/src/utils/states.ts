import { atom } from "recoil";

export const loadingAtom = atom({
  key: "loading",
  default: false,
});

export const isHeaderAtom = atom({
  key: "isHeader",
  default: true,
});