"use client";

import { useRouter } from "next/navigation";
import React from "react";

import { ClientDataDBString, defaultClientDataDBString } from "@/app/oauth/(main)/type";
import Insider from "@/provider/insider";
import { alert } from "@/utils/alert";
import instance from "@/utils/instance";

import InfoFrame from "../edit/infoFrame";

const Outing = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [newSelected, setNewSelected] = React.useState<ClientDataDBString>(defaultClientDataDBString);

  const put = async () => {
    setLoading(true);
    const loading = alert.loading("서비스 등록 중입니다.");
    try {
      const res = await instance.put("/api/oauth", newSelected);
      alert.update(loading, res.data.message, "success");
      setNewSelected(defaultClientDataDBString);
      router.refresh();
    }
    catch(e: any){
      alert.update(loading, e.response.data.message, "error");
    }
    setLoading(false);
  };

  return (
    <>
      <article className="flex flex-col gap-3">
        <section className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">디풀 Oauth 추가</h1>
          <h1 className="text-base text-[#e11d48]">Oauth 남용 시 통보 없이 삭제될 수 있습니다. 올바른 용도로 사용 부탁드립니다.</h1>
        </section>
      </article>

      <InfoFrame
        loading={loading}
        newSelected={newSelected}
        setNewSelected={setNewSelected}
      />

      <button 
        className="bg-primary text-white w-full text-base font-semibold rounded h-10"
        onClick={put}
      >
          추가하기
      </button>
    </>
  );
};

export default Outing;