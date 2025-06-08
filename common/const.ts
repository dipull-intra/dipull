import { EarlyTime, EarlyTimeKorean, Meal } from "./types";

export const mealTypes = ["breakfast", "lunch", "dinner"] as const;
export const mealTypesKorean = ["아침", "점심", "저녁"] as const;

export const earlyTime = ["end-of-day", "dinner", "palm-1", "palm-2"] as const;
export const earlyTimeKorean = ["종례 후", "저녁시간", "야자1 뒤", "야자2 뒤"] as const;

const createMap = <
  Keys extends readonly string[],
  Values extends readonly string[]
>(
    keys: Keys,
    values: Values
  ) => {
  const toMap = Object.fromEntries(
    keys.map((key, index) => [key, values[index]])
  ) as Record<Keys[number], Values[number]>;

  const fromMap = Object.fromEntries(
    values.map((value, index) => [value, keys[index]])
  ) as Record<Values[number], Keys[number]>;

  return {
    toMap,
    fromMap,
  };
};

export const mealMaps = createMap(mealTypes, mealTypesKorean);
export const mealToKorean = mealMaps.toMap as Record<keyof Meal["value"], string>;
export const mealToEng = mealMaps.fromMap as Record<string, keyof Meal["value"]>;

export const earlyTimeMaps = createMap(earlyTime, earlyTimeKorean);
export const earlyTimeToKorean = earlyTimeMaps.toMap as Record<EarlyTime, EarlyTimeKorean>;
export const earlyTimeToEng = earlyTimeMaps.fromMap as Record<EarlyTimeKorean, EarlyTime>;