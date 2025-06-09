import React from "react";

import type { Meal } from "@common/types";

import dayjs from "@front/utils/dayjs";

import MealChecker from "./mealChecker";

const Meal = (
  {
    data = [{
      date: dayjs(),
      value: {
        breakfast: true,
        lunch: true,
        dinner: true,
      },
    }],
    setData,
  }: {
    data?: Meal[];
    setData?: React.Dispatch<React.SetStateAction<Meal[]>>;
  }
) => {
  return (
    <div className="flex flex-col gap-4">
      {
        data.map((meal, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <p className="text-sm">
              {meal.date.format("M월 D일 dddd")}
            </p>
            <div className="flex flex-row items-center gap-14">
              <MealChecker data={meal} type="breakfast" setData={setData} />
              <MealChecker data={meal} type="lunch" setData={setData} />
              <MealChecker data={meal} type="dinner" setData={setData} />
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Meal;