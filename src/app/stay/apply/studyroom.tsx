import React from "react";

const Studyroom = ({
  select,
  setSelect,
}: {
  select: string;
  setSelect: React.Dispatch<React.SetStateAction<string>>;
}) => { 
  return (
    <div className="flex flex-col items-start justify-start gap-2">
      <div className="flex flex-row items-center justify-start gap-2">
        <div className="flex flex-row items-center justify-center w-4">
          <p className="text-text/30 dark:text-text-dark/40">@</p>
        </div>
        {
          Array(18).fill(0).map((_, i) => (
            <React.Fragment key={i}>
              <div className="w-18 flex flex-row items-center justify-center">
                <p className="text-text/30 dark:text-text-dark/40">
                  {i + 1}
                </p>
              </div>
              {
                i === 8 ? (
                  <div className="w-5" />
                ) : null
              }
            </React.Fragment>
          ))
        }
      </div>
      {
        Array(14).fill(0).map((_, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-row items-center justify-start gap-2">
              <div className="flex flex-row items-center justify-center w-4">
                <p className="text-text/30 dark:text-text-dark/40">{String.fromCharCode(65 + i)}</p>
              </div>
              {
                Array(18).fill(0).map((_, j) => {
                  const _this = `${String.fromCharCode(65 + i)}${j + 1}`;
                  const canClick = Math.random() > 0.5;
                  return (
                    <React.Fragment key={j}>
                      <button
                        className={[
                          "border rounded-xl w-18 h-12 flex flex-row items-center justify-center",
                          select === _this ? "bg-text dark:bg-text-dark border-transparent" :
                            canClick ? "bg-text/10 dark:bg-text-dark/20 border-transparent" : "bg-transparent border-text/20 dark:border-text-dark/30",
                        ].join(" ")}
                        onClick={() => setSelect(_this)}
                        disabled={!canClick}
                      >
                        <p
                          className={[
                            "leading-4.5",
                            select === _this ? "text-white dark:text-white-dark" :
                              canClick ? "text-text dark:text-text-dark" : "text-text/30 dark:text-text-dark/40",
                          ].join(" ")}
                        >
                          {_this}
                          {/* 3629 최재민 */}
                        </p>
                      </button>
                      {
                        j === 8 ? (
                          <div className="w-5" />
                        ) : null
                      }
                    </React.Fragment>
                  );
                })
              }
            </div>
            {
              i % 2 ? (
                <>
                  <div />
                  <div />
                </>
              ) : null
            }
          </React.Fragment>
        ))
      }
    </div>
  );
};

export default Studyroom;