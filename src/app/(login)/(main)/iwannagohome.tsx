import React, { DetailedHTMLProps, HTMLAttributes } from "react";

import instance from "@/utils/instance";

const Iwannagohome = () => {
  const [count, setCount] = React.useState([0, 0]);
  const [my, setMy] = React.useState(-1);

  const getMeal = async () => {
    try{
      const { data } = await instance.get("/api/iwannagohome");
      setCount(data.data.count);
      setMy(data.data.my);
    }
    catch(e){
      console.error(e);
    }
  };

  React.useEffect(() => {
    getMeal();
  }, []);

  const sum = count[0] + count[1];
  const start = (count[0] * 100 / sum) || 0;
  const end = (count[1] * 100 / sum) || 0;

  return (
    <article className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">집가고싶어요</h1>
      <section 
        className={[
          "rounded overflow-hidden flex flex-row",
          "bg-gradient-to-r from-[#6466F1] to-[#EC4899]"
        ].join(" ")}
        style={{
          "--tw-gradient-from-position": `${start - 50}%`,
          "--tw-gradient-to-position": `${150 - end}%`,
        } as DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>}
      >
        {
          [count[0], count[1]].map((v, i) => {
            const percent = (v * 100 / sum) || 0;
            return (
              <article 
                key={i}
                className={[
                  "h-full transition-all px-4 py-3 flex flex-col justify-center select-none cursor-pointe w-full",
                  i === 0 ? "items-start" : "items-end"
                ].join(" ")}
                style={{
                }}
                onClick={async () => {
                  try{
                    await instance.put("/api/iwannagohome", {
                      pick: i,
                    });
                    getMeal();
                  }
                  catch(e){
                    console.error(e);
                  }
                }}
              >
                <p className="text-sm whitespace-nowrap text-[#fff]">
                  {i === 0 ? "🛌 집에 가고 싶어요" : "ㅋㅋ난집가는데 🏠"}
                </p>
                <figure className="flex flex-row items-end gap-1">
                  <p className="text-2xl font-semibold whitespace-nowrap text-[#fff]">{Math.floor(percent)}</p>
                  <p className="text-sm -translate-y-1 whitespace-nowrap text-[#fff]">%</p>
                </figure>
                <p className="text-sm whitespace-nowrap text-[#fff]">{v}표</p>
              </article>
            );
          })
        }
      </section>
    </article>
  );
};

export default Iwannagohome;