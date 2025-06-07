import React from "react";
import { useMediaQuery } from "react-responsive";

import { Award } from "@common/types/db";

const Awards = ({
  awards
}: {
  awards: Award[];
}) => { 
  const lv1 = useMediaQuery({ minWidth: 1024 });
  const [onlyLeast, setOnlyLeast] = React.useState(true);
  
  return (
    <div className="px-12 py-20 max-sm:px-6 max-sm:py-12 flex flex-col items-start justify-start gap-12" id="awards">
      <p className="text-4xl text-center w-full">List of Awards</p>
      <table className="w-full border-0 border-separate min-md:border-spacing-5">
        <tbody className="w-full max-lg:flex max-lg:flex-col max-lg:gap-14">
          {
            awards.slice(
              0,
              !onlyLeast || lv1 ? awards.length : 3
            ).map((award, index) => (
              <tr key={index} className="max-lg:flex max-lg:flex-col max-lg:gap-4">
                <td>
                  <div className="flex flex-col items-start justify-start min-lg:h-14">
                    <p className="opacity-50 text-nowrap">{award.when}</p>
                  </div>
                </td>
                <td>
                  <div className="flex flex-row items-center justify-start gap-5">
                    <img alt="Award Icon" src={award.icon} className="w-14 h-14 bg-stone-200 rounded-2xl grayscale-100" />
                    <div className="flex flex-col gap-2">
                      <p className="text-xl">{award.name}</p>
                      <p className="opacity-65">— {award.period}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex flex-col gap-2 items-start">
                    <div className="flex flex-row gap-2 items-center justify-center">
                      <p className="opacity-50 text-nowrap">주최</p>
                      <p className="text-nowrap">{award.host}</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-center">
                      <p className="opacity-50 text-nowrap">주관</p>
                      <p className="text-nowrap">{award.organizer}</p>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className="w-full flex flex-row items-center justify-center gap-4 min-lg:hidden">
        <button
          onClick={() => setOnlyLeast(p => !p)}
        >
          <div className="flex flex-row items-center justify-center gap-2">
            <svg className={[
              "w-4 h-4",
              "transition-transform duration-300",
              onlyLeast ? "rotate-0" : "rotate-180"
            ].join(" ")} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="fill-stone-700 dark:fill-stone-50" d="M9.96875 10.7612L7.411 8.20347C7.27417 8.06513 7.10308 7.99597 6.89775 7.99597C6.69258 7.99597 6.51558 8.06513 6.36675 8.20347C6.21175 8.3523 6.13583 8.53055 6.139 8.73822C6.14217 8.94589 6.21808 9.12405 6.36675 9.27272L9.336 12.242C9.51683 12.4228 9.72775 12.5132 9.96875 12.5132C10.2098 12.5132 10.4207 12.4228 10.6015 12.242L13.586 9.25747C13.7347 9.10863 13.8081 8.93297 13.8063 8.73047C13.8043 8.52797 13.7258 8.3523 13.5708 8.20347C13.4219 8.06513 13.2462 7.99497 13.0437 7.99297C12.8412 7.99114 12.6656 8.06455 12.5167 8.21322L9.96875 10.7612ZM9.9705 19.2305C8.6565 19.2305 7.42142 18.9811 6.26525 18.4825C5.10908 17.9838 4.10342 17.3071 3.24825 16.4522C2.39308 15.5974 1.716 14.5921 1.217 13.4365C0.718167 12.2808 0.46875 11.0461 0.46875 9.73222C0.46875 8.41822 0.718083 7.18314 1.21675 6.02697C1.71542 4.8708 2.39217 3.86514 3.247 3.00997C4.10183 2.1548 5.10708 1.47772 6.26275 0.978719C7.41842 0.479885 8.65317 0.230469 9.967 0.230469C11.281 0.230469 12.5161 0.479802 13.6723 0.978468C14.8284 1.47714 15.8341 2.15389 16.6893 3.00872C17.5444 3.86355 18.2215 4.8688 18.7205 6.02447C19.2193 7.18014 19.4688 8.41489 19.4688 9.72872C19.4688 11.0427 19.2194 12.2778 18.7208 13.434C18.2221 14.5901 17.5453 15.5958 16.6905 16.451C15.8357 17.3061 14.8304 17.9832 13.6748 18.4822C12.5191 18.9811 11.2843 19.2305 9.9705 19.2305ZM9.96875 17.7305C12.2021 17.7305 14.0938 16.9555 15.6438 15.4055C17.1938 13.8555 17.9688 11.9638 17.9688 9.73047C17.9688 7.49714 17.1938 5.60547 15.6438 4.05547C14.0938 2.50547 12.2021 1.73047 9.96875 1.73047C7.73542 1.73047 5.84375 2.50547 4.29375 4.05547C2.74375 5.60547 1.96875 7.49714 1.96875 9.73047C1.96875 11.9638 2.74375 13.8555 4.29375 15.4055C5.84375 16.9555 7.73542 17.7305 9.96875 17.7305Z" />
            </svg>
            <p>더보기</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Awards;