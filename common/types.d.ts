import { Dayjs } from "dayjs";

import { earlyTime, earlyTimeKorean, mealTypes, mealTypesKorean, types } from "./const";


export type MealType = typeof mealTypes[number];
export type MealTypeKorean = typeof mealTypesKorean[number];

export interface Meal {
  date: Dayjs;
  value: Record<MealType, boolean>;
}

export type EarlyTime = typeof earlyTime[number];
export type EarlyTimeKorean = typeof earlyTimeKorean[number];

export type Types = typeof types[number];
