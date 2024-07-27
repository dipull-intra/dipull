import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import domtoimage from "dom-to-image";
import React from "react";

import { useModal } from "@/components/Modal";
import { useAuth } from "@/hooks";
import { UserInfo } from "@/utils/db/utils";

import { StudyroomResponse } from "./grant/[id]/utils";

const Studyroom = ({
  select,
  setSelect,
  disabled,
  selected,
  setSelected,
}: {
  select: string;
    setSelect: React.Dispatch<React.SetStateAction<string>>;
    disabled: boolean;
    selected: UserInfo;
    setSelected: React.Dispatch<React.SetStateAction<UserInfo>>;
  }) => { 
  const ref = React.useRef<HTMLDivElement>(null);
  const modal = useModal();

  const { data: studyroomData, isFetching } = useQuery({
    queryKey: ["studyroom_info", selected.id, selected.number, selected.type, modal.show],
    queryFn: async () => {
      const response = await axios.get<StudyroomResponse>(`/stay/apply/grant/${selected.id}`);
      return response.data;
    },
    enabled: Boolean(modal.show),
    refetchOnWindowFocus: true,
  });

  const handleSaveAsImage = () => {
    if (!ref.current) return;
    const scale = 3;
    const padding = 16;
    const width = ref.current.offsetWidth + padding * 2 + 4;
    const height = ref.current.offsetHeight + padding * 2;
    const style = {
      transform: `scale(${scale})`,
      transformOrigin: "top left",
      width: `${width}px`,
      height: `${height}px`,
      padding: `${padding}px`,
    };
    domtoimage.toPng(ref.current, {
      width: width * scale,
      height: height * scale,
      style: style,
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "component.png";
        link.click();
      })
      .catch((error) => {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <div className="flex flex-col items-start justify-start gap-2">
      <div className="flex flex-row w-full items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-6 pb-2">
          <div className="flex flex-row items-center justify-start gap-2">
            <div className="w-5 h-5 rounded bg-text dark:bg-text-dark border-transparent" />
            <p className="text-text/50 dark:text-text-dark/60">내 좌석</p>
          </div>
          <div className="flex flex-row items-center justify-start gap-2">
            <div className="w-5 h-5 rounded bg-text/10 dark:bg-text-dark/20 border-transparent" />
            <p className="text-text/50 dark:text-text-dark/60">선택 가능한 좌석</p>
          </div>
          <div className="flex flex-row items-center justify-start gap-2">
            <div className="w-5 h-5 rounded bg-transparen border-1.5 border-text/20 dark:border-text-dark/30" />
            <p className="text-text/50 dark:text-text-dark/60">선택 불가능한 좌석</p>
          </div>
        </div>
        <button className="flex flex-row items-center justify-start gap-2" onClick={handleSaveAsImage}>
          <p className="text-text/50 dark:text-text-dark/60 underline">열람실 현황 저장하기</p>
        </button>
      </div>
      <div className="flex flex-col items-start justify-start gap-2 bg-background dark:bg-background-dark" ref={ref}>
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
                    const thisUser = studyroomData?.stays?.[String.fromCharCode(65 + i)]?.[String(j + 1)];
                    const canClick = (
                      select === _this
                    ) || (
                      !thisUser
                      && !isFetching
                      && studyroomData
                      && studyroomData.allow?.[String.fromCharCode(65 + i)]?.includes(j + 1)
                    );
                    return (
                      <React.Fragment key={j}>
                        <button
                          className={[
                            "border rounded-xl w-18 h-12 flex flex-row items-center justify-center",
                            select === _this ? "bg-text dark:bg-text-dark border-transparent" : 
                              canClick ? "bg-text/10 dark:bg-text-dark/20 border-transparent" : "bg-transparent border-text/20 dark:border-text-dark/30",
                          ].join(" ")}
                          onClick={() => {
                            if(disabled) return;
                            if (select === _this) return setSelect("");
                            setSelect(_this);
                          }}
                          disabled={!canClick}
                        >
                          <div className="w-full h-full flex items-center justify-center">
                            <p
                              className={[
                                "leading-4.5",
                                select === _this ? "text-white dark:text-white-dark" :
                                  canClick ? "text-text dark:text-text-dark" : "text-text/30 dark:text-text-dark/40",
                              ].join(" ")}
                            >
                              {thisUser || _this}
                              {/* 3629 최재민 */}
                            </p>
                          </div>
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
    </div>
  );
};

export default Studyroom;