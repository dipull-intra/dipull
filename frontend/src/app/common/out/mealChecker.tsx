import React from "react";

import { mealToKorean } from "@common/const";
import { Meal } from "@common/types";

import Icons from "@front/components/icons";

const MealChecker = (
  {
    data,
    setData,
    type,
  }: {
    data: Meal;
    type: keyof Meal["value"];
    setData?: React.Dispatch<React.SetStateAction<Meal[]>>;
  }
) => {
  return (
    <button
      className="button-scale w-fit"
      onClick={() => {
        if(!setData) return;
        setData((prev) => {
          const newData = [...prev];
          const index = newData.findIndex((meal) => meal.date.isSame(data.date, "day"));
          if (index === -1) return prev;

          const oldMeal = newData[index];
          const newMeal = {
            ...oldMeal,
            value: {
              ...oldMeal.value,
              [type]: !oldMeal.value[type],
            },
          };

          newData[index] = newMeal;
          return newData;
        });
      }}
    >
      <div className="flex flex-row gap-1.5 items-center">
        <Icons.Checker className="w-4 h-4" fill={data.value[type]} />
        <p className={[
          data.value[type] ? "text-key" : "text-key/30",
        ].join(" ")}>{mealToKorean[type]}</p>
      </div>
    </button>
  );
};

export default MealChecker;