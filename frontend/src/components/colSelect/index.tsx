"use client";

import React from "react";

import Icons from "../icons";
import Label from "../label";

interface ColSelectProps {
  label?: string;
  options?: string[];
  placeholder?: string;
  onClick?: (_value: string, _index: number) => void | Promise<void>;
};

const ColSelect = ({
  label = "",
  options = [],
  placeholder = "",
  onClick = () => { },
}: ColSelectProps) => { 
  const [opened, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(-1);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".col-select")) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Label text={label}>
      <div className="w-full relative">
        <button
          className="button w-full rounded-xl overflow-hidden"
          onClick={() => {
            setOpen(p => !p);
          }}
        >
          <div className="w-full px-4 py-3 h-[43px] flex flex-row items-center justify-between gap-2">
            <p className={[
              "font-semibold",
              selected === -1 ? "text-key/30" : "text-key",
            ].join(" ")}>
              {selected === -1 ? placeholder : options[selected]}
            </p>
            <svg
              className={[
                "w-4 h-4 fill-key transition-transform duration-200",
                opened ? "rotate-180" : "rotate-0",
              ].join(" ")}
              viewBox="0 0 16 17" fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g mask="url(#mask0_315_2558)">
                <path className="fill-current" d="M7.65046 10.15L5.23379 7.73329C5.20046 7.69996 5.17546 7.66385 5.15879 7.62496C5.14212 7.58607 5.13379 7.5444 5.13379 7.49996C5.13379 7.41107 5.16434 7.33329 5.22546 7.26663C5.28657 7.19996 5.36712 7.16663 5.46712 7.16663H10.5338C10.6338 7.16663 10.7143 7.19996 10.7755 7.26663C10.8366 7.33329 10.8671 7.41107 10.8671 7.49996C10.8671 7.52218 10.8338 7.59996 10.7671 7.73329L8.35046 10.15C8.2949 10.2055 8.23934 10.2444 8.18379 10.2666C8.12823 10.2888 8.06712 10.3 8.00046 10.3C7.93379 10.3 7.87268 10.2888 7.81712 10.2666C7.76157 10.2444 7.70601 10.2055 7.65046 10.15Z" />
              </g>
            </svg>
          </div>
        </button>
        {opened && (
          <div className="absolute z-10 w-full bg-background rounded-xl mt-1 shadow overflow-hidden">
            {
              options.map((option, index) => (
                <div
                  key={index}
                  className={[
                    "col-select py-3 cursor-pointer px-4 button flex flex-row items-center justify-start gap-2",
                    selected === index ? "bg-key/10" : "",
                  ].join(" ")}
                  onClick={async () => {
                    if (selected === index) {
                      setSelected(-1);
                      setOpen(false);
                      await onClick("", -1);
                      return;
                    }
                    setSelected(index);
                    setOpen(false);
                    await onClick(option, index);
                  }}
                >
                  {
                    selected === index ? (
                      <Icons.Check className="w-4 h-4 fill-key" />
                    ) : null
                  }
                  {option}
                </div>
              ))
            }
          </div>
        )}
      </div>
    </Label>
  );
};

export default ColSelect;