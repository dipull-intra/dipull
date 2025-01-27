import React from "react";

import { isValidUrl } from "@/app/api/oauth/utils";
import { ClientDataDBString, ClientGetType, ClientGetTypeArray } from "@/app/oauth/(main)/type";
import { alert } from "@/utils/alert";

const InfoFrame = ({
  loading,
  newSelected,
  setNewSelected,
}: {
  loading: boolean;
  newSelected: ClientDataDBString;
  setNewSelected: React.Dispatch<React.SetStateAction<ClientDataDBString | null>> | React.Dispatch<React.SetStateAction<ClientDataDBString>>;
}) => {
  const [newRedirect, setNewRedirect] = React.useState("");
  return (
    <>
      <section className="flex flex-col gap-3">
        <h1 className="text-xl font-semibold w-max whitespace-nowrap">서비스 이름</h1>
        <section className={[
          "bg-white p-5 border border-text/10 rounded",
          loading ? "loading_background" : "",
        ].join(" ")}>
          <input 
            type="text" 
            placeholder="서비스 이름을 입력해주세요."
            className="w-full h-10 border border-text/10 rounded px-3 bg-transparent"
            value={newSelected.name}
            onChange={(e) => setNewSelected({ ...newSelected, name: e.target.value })}
            disabled={loading}
          />
        </section>
      </section>
      <section className="flex flex-col gap-3">
        <h1 className="text-xl font-semibold w-max whitespace-nowrap">가져올 정보</h1>
        <section className={[
          "bg-white p-5 border border-text/10 rounded flex flex-wrap flex-row gap-2 items-center justify-center",
          loading ? "loading_background" : "",
        ].join(" ")}>
          {
            ClientGetTypeArray.map((v, i) => {
              const click = () => {
                if(v === "id") return;
                if (newSelected.get.includes(v)) {
                  setNewSelected({ ...newSelected, get: newSelected.get.filter((x) => x !== v) });
                } else {
                  setNewSelected({ ...newSelected, get: [...newSelected.get, v] });
                }
              };
              return (
                <button 
                  key={i}
                  className={[
                    "text-base rounded h-10 border border-text/10 px-4 transition-colors",
                    "w-full max-[620px]:max-w-[49%] max-[480px]:max-w-full max-w-[32%]",
                    v === "id" ? "cursor-not-allowed" : "",
                    newSelected.get.includes(v) ? "bg-text/10" : "",
                  ].join(" ")}
                  disabled={loading || v === "id"}
                  onClick={() => click()}
                >
                  {ClientGetType[v]}
                </button>
              );
                    
            })
          }
        </section>
      </section>

      <article className="flex flex-col gap-3">
        <section className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">Redirect Uri 목록</h1>
        </section>
        <article className={[
          "flex flex-row gap-2 bg-white rounded border border-text/10 p-5 overflow-auto",
          loading ? "loading_background" : "",
        ].join(" ")}>
          <table className="w-full overflow-auto">
            <tbody className="w-full border-y border-text/10 overflow-auto">
              <tr className="w-full">
                <th className="text-center px-4 whitespace-nowrap py-2 font-semibold w-full" colSpan={2}>Redirect Uri 목록</th>
                <td className="text-center px-4">삭제</td>
              </tr>
              {
                newSelected.redirect.length ? newSelected.redirect.map((v, i) => {
                  const click = () => {
                    setNewSelected({ ...newSelected, redirect: newSelected.redirect.filter((x) => x !== v) });
                  };
                  return (
                    <tr className="w-full border-y border-text/10" key={i} onClick={() => {}}>
                      <td className="text-center px-4 whitespace-nowrap py-2">{i + 1}</td>
                      <td className="w-full text-left px-4 whitespace-nowrap border-x border-text/10">
                        <p className="text-left whitespace-nowrap">{v}</p>
                      </td>
                      <td className="text-center px-4 select-none cursor-pointer" onClick={() => click()}>
                        <div className="flex justify-center items-center h-full">
                          <svg width="16" height="16" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.11523 18.4688C2.56523 18.4688 2.0944 18.2729 1.70273 17.8813C1.31107 17.4896 1.11523 17.0188 1.11523 16.4688V3.46875C0.831901 3.46875 0.594401 3.37292 0.402734 3.18125C0.211068 2.98958 0.115234 2.75208 0.115234 2.46875C0.115234 2.18542 0.211068 1.94792 0.402734 1.75625C0.594401 1.56458 0.831901 1.46875 1.11523 1.46875H5.11523C5.11523 1.18542 5.21107 0.947917 5.40273 0.75625C5.5944 0.564583 5.8319 0.46875 6.11523 0.46875H10.1152C10.3986 0.46875 10.6361 0.564583 10.8277 0.75625C11.0194 0.947917 11.1152 1.18542 11.1152 1.46875H15.1152C15.3986 1.46875 15.6361 1.56458 15.8277 1.75625C16.0194 1.94792 16.1152 2.18542 16.1152 2.46875C16.1152 2.75208 16.0194 2.98958 15.8277 3.18125C15.6361 3.37292 15.3986 3.46875 15.1152 3.46875V16.4688C15.1152 17.0188 14.9194 17.4896 14.5277 17.8813C14.1361 18.2729 13.6652 18.4688 13.1152 18.4688H3.11523ZM13.1152 3.46875H3.11523V16.4688H13.1152V3.46875ZM8.11523 11.3688L10.0152 13.2688C10.1986 13.4521 10.4319 13.5437 10.7152 13.5437C10.9986 13.5437 11.2319 13.4521 11.4152 13.2688C11.5986 13.0854 11.6902 12.8521 11.6902 12.5688C11.6902 12.2854 11.5986 12.0521 11.4152 11.8688L9.51523 9.96875L11.4152 8.06875C11.5986 7.88542 11.6902 7.65208 11.6902 7.36875C11.6902 7.08542 11.5986 6.85208 11.4152 6.66875C11.2319 6.48542 10.9986 6.39375 10.7152 6.39375C10.4319 6.39375 10.1986 6.48542 10.0152 6.66875L8.11523 8.56875L6.21523 6.66875C6.0319 6.48542 5.79857 6.39375 5.51523 6.39375C5.2319 6.39375 4.99857 6.48542 4.81523 6.66875C4.6319 6.85208 4.54023 7.08542 4.54023 7.36875C4.54023 7.65208 4.6319 7.88542 4.81523 8.06875L6.71523 9.96875L4.81523 11.8688C4.6319 12.0521 4.54023 12.2854 4.54023 12.5688C4.54023 12.8521 4.6319 13.0854 4.81523 13.2688C4.99857 13.4521 5.2319 13.5437 5.51523 13.5437C5.79857 13.5437 6.0319 13.4521 6.21523 13.2688L8.11523 11.3688Z" fill="rgb(var(--color-text) / .35)"/>
                          </svg>
                        </div>
                      </td>
                    </tr>
                  );
                }) : (
                  <tr className="w-full border-y border-text/10">
                    <td className="text-center px-4 whitespace-nowrap py-2 text-text/50" colSpan={3}>
                      등록된 Redirect Uri이 없습니다.
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </article>
        <section className={[
          "bg-white p-5 border border-text/10 rounded flex flex-row gap-2 items-center justify-center",
          loading ? "loading_background" : "",
        ].join(" ")}>
          <input 
            type="text" 
            placeholder="Redirect Uri을 입력해주세요."
            className="w-full h-10 border border-text/10 rounded px-3 bg-transparent"
            value={newRedirect}
            onChange={(e) => setNewRedirect(e.target.value)}
            disabled={loading}
          />
          <button 
            className="w-min text-base rounded h-10 bg-text/10 border border-text/10 px-4"
            onClick={() => {
              if(!newRedirect) return;
              if(!isValidUrl(newRedirect)) return alert.warn("올바르지 않은 Redirect Uri입니다.");
              setNewSelected({ ...newSelected, redirect: [...newSelected.redirect, newRedirect] });
              setNewRedirect("");
            }}
          >
            +
          </button>
        </section>
      </article>
    </>
  );
};

export default InfoFrame;