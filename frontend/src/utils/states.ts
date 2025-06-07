import { atom } from "jotai";

export const viewportWidthAtom = atom<number>(16);
export const viewportHeightAtom = atom<number>(9);

export const headerHeightAtom = atom<number>(0);

export const dynamicSizeAtom = atom((get) => {
  const height = get(viewportHeightAtom);
  const width = get(viewportWidthAtom);
  return {
    width: "100vw",
    height: `calc(100vw * ${Math.min(height / width, 0.7)})`,
    maxHeight: "100vh",
  };
});