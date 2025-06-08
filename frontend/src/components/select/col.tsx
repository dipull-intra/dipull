"use client";

import React from "react";

import Icons from "../icons";
import Label from "../label";

import { SelectProps } from ".";

const Col = ({
  value,
  label = "",
  options = [],
  values,
  placeholder = "",
  onClick = () => { },
}: SelectProps) => { 
  const [opened, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(
    options.indexOf(value || "")
  );

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
          className="col-select button w-full rounded-xl overflow-hidden"
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
            <Icons.ArrowDown
              className={[
                "w-4 h-4 fill-key transition-transform duration-200",
                opened ? "rotate-180" : "rotate-0",
              ].join(" ")}
            />
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
                      await onClick("", -1, "");
                      return;
                    }
                    setSelected(index);
                    setOpen(false);
                    await onClick(option, index, values ? values[index] : undefined);
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

export default Col;