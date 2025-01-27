import React from "react";

export type InfoFrameNewData = {
  gender: "male" | "female";
  name: string;
  number: number;
}

const InfoFrame = ({
  loading,
  newData,
  setNewData,
}: {
  loading: boolean;
  newData: InfoFrameNewData;
  setNewData: React.Dispatch<React.SetStateAction<InfoFrameNewData>>;
}) => {
  return (
    <>
      <section className="flex flex-col gap-3">
        <h1 className="text-xl font-semibold w-max whitespace-nowrap">이름</h1>
        <section className={[
          "bg-white p-5 border border-text/10 rounded",
          loading ? "loading_background" : "",
        ].join(" ")}>
          <input 
            type="text" 
            placeholder="이름을 입력해주세요." 
            className="w-full h-10 border border-text/10 rounded px-3 bg-transparent"
            value={newData.name}
            onChange={(e) => setNewData({ ...newData, name: e.target.value })}
            disabled={loading}
          />
        </section>
      </section>
      <article className="flex flex-col gap-3">
        <section className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">성별</h1>
        </section>
        <article className={[
          "flex flex-row gap-2 bg-white rounded border border-text/10 p-5",
          loading ? "loading_background" : "",
        ].join(" ")}>
          <button 
            className={[
              "text-base rounded h-10 border border-text/10 w-full px-8 transition-colors",
              newData.gender === "male" ? "bg-text/10" : "",
            ].join(" ")}
            disabled={loading}
            onClick={() => setNewData({ ...newData, gender: "male" })}
          >
            남자
          </button>
          <button 
            className={[
              "text-base rounded h-10 border border-text/10 w-full px-8 transition-colors",
              newData.gender === "female" ? "bg-text/10" : "",
            ].join(" ")}
            disabled={loading}
            onClick={() => setNewData({ ...newData, gender: "female" })}
          >
            여자
          </button>
        </article>
      </article>
      <article className="flex flex-col gap-3">
        <section className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">학년 / 반 / 번호</h1>
        </section>
        <article className={[
          "flex flex-row gap-2 bg-white rounded border border-text/10 p-5",
          loading ? "loading_background" : "",
        ].join(" ")}>
          {
            newData.number === 9999 ? (
              <p className="w-full text-center text-text/40">선생님용 계정입니다.</p>
            ) : (
              <>
                <select 
                  className="text-base rounded h-10 border border-text/10 w-full px-4 transition-colors bg-transparent"
                  value={Math.floor(newData.number / 100)}
                  onChange={(e) => {
                    setNewData({ ...newData, number: parseInt(e.target.value) * 100 + newData.number % 100 });
                  }}
                >
                  <optgroup label="1학년">
                    <option value="11">1학년 1반</option>
                    <option value="12">1학년 2반</option>
                    <option value="13">1학년 3반</option>
                    <option value="14">1학년 4반</option>
                    <option value="15">1학년 5반</option>
                    <option value="16">1학년 6반</option>
                  </optgroup>
                  <optgroup label="2학년">
                    <option value="21">2학년 1반</option>
                    <option value="22">2학년 2반</option>
                    <option value="23">2학년 3반</option>
                    <option value="24">2학년 4반</option>
                    <option value="25">2학년 5반</option>
                    <option value="26">2학년 6반</option>
                  </optgroup>
                  <optgroup label="3학년">
                    <option value="31">3학년 1반</option>
                    <option value="32">3학년 2반</option>
                    <option value="33">3학년 3반</option>
                    <option value="34">3학년 4반</option>
                    <option value="35">3학년 5반</option>
                    <option value="36">3학년 6반</option>
                  </optgroup>
                </select>
                <div className="w-full h-10 border border-text/10 rounded px-3 bg-transparent flex flex-row items-center justify-center">
                  <input 
                    type="text" 
                    placeholder="번호를 입력해주세요." 
                    className="w-full h-full bg-transparent"
                    value={newData.number % 100 || ""}
                    onChange={(e) => {
                      const value = isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value);
                      setNewData({ ...newData, number: newData.number - newData.number % 100 + (value % 100) });
                    }}
                    disabled={loading}
                  />
                  <p>번</p>
                </div>
              </>
            )
          }
        </article>
      </article>
    </>
  );
};

export default InfoFrame;