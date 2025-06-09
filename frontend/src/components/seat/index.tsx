import React from "react";

const Seat = ({
  selected = [],
  available = [],
  max = 252,
  setSelected,
}: {
  selected?: string[];
  available?: string[];
  max?: number;
  setSelected?: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex flex-col gap-2 w-max">
          <div className="flex flex-row gap-1 items-center justify-start">
            <div className="w-4">
              <p className="font-normal text-xs text-key/30">@</p>
            </div>
            {
              Array.from({ length: 18 }).map((_, index) => (
                <React.Fragment key={index}>
                  {
                    index === 9 ? (
                      <div className="w-4 h-4" />
                    ) : null
                  }
                  <div className="w-14 flex flex-row items-center justify-center px-1.5">
                    <p className="font-normal text-xs text-key/30 text-center">A{index + 1}</p>
                  </div>
                </React.Fragment>
              ))
            }
          </div>
          {
            Array.from({ length: 14 }).map((_, jndex) => (
              <React.Fragment key={jndex}>
                <div
                  key={jndex}
                  className="flex flex-row gap-1 items-center justify-start"
                >
                  <div className="w-4 h-4">
                    <p className="font-normal text-xs text-key/30">
                      {String.fromCharCode(65 + jndex)}
                    </p>
                  </div>
                  {
                    Array.from({ length: 18 }).map((_, index) => {
                      const _this = `${String.fromCharCode(65 + jndex)}${index + 1}`;
                      const isAvailable = available.includes(_this);
                      const isSelected = selected.includes(_this);

                      return (
                        <React.Fragment key={index}>
                          {
                            index === 9 ? (
                              <div className="w-4 h-4" />
                            ) : null
                          }
                          <div
                            className={[
                              "w-14 h-8 rounded-lg flex flex-row items-center justify-center py-1 px-1.5 select-none",
                              isSelected ? "cursor-pointer button-real-only-scale bg-key" :
                                isAvailable ? "cursor-pointer button-real-only-scale bg-key/30" : "border border-key/30 cursor-not-allowed"
                            ].join(" ")}
                            onClick={() => {
                              if (!isAvailable || !setSelected) return;
                              if (isSelected) {
                                setSelected((prev) => prev.filter((s) => s !== _this));
                              } else if (selected.length < max) {
                                setSelected((prev) => [...prev, _this]);
                              }
                            }}
                          >
                            <p className={[
                              "font-normal text-xs text-center",
                              isSelected ? "text-background" :
                                isAvailable ? "text-key" : "text-key/30"
                            ].join(" ")}>{_this}</p>
                          </div>
                        </React.Fragment>
                      );
                    })
                  }
                </div>
                {
                  jndex % 2 && jndex !== 13 ? (
                    <div className="w-4 h-1" />
                  ) : null
                }
              </React.Fragment>
            ))
          }
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-4">
        <div className="flex flex-row items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-xs bg-key" />
          <p className="text-key/45 font-normal text-sm">선택한 좌석</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-xs bg-key/30" />
          <p className="text-key/45 font-normal text-sm">선택 가능한 좌석</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-xs border border-key/30" />
          <p className="text-key/45 font-normal text-sm">선택 불가능한 좌석</p>
        </div>
      </div>
    </div>
  );
};

export default Seat;