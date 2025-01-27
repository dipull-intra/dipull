"use client";

import { useRouter } from "next/navigation";
import React from "react";

import Insider from "@/provider/insider";
import { alert } from "@/utils/alert";
import instance from "@/utils/instance";

import InfoFrame, { InfoFrameNewData } from "./infoFrame";

const MyInfoContent = ({
  init
}: {
  init: InfoFrameNewData
}) => {
  const [loading, setLoading] = React.useState(false);
  const [newData, setNewData] = React.useState<InfoFrameNewData>({
    gender: init.gender,
    name: init.name,
    number: init.number,
  });

  const router = useRouter();
  
  const get = async () => {
    setLoading(true);
    try {
      const { data } = await instance.get("/api/myInfo");
      setNewData({
        name: data.data.name,
        gender: data.data.gender,
        number: data.data.number,
      });
    } catch (e: any) {
      alert.error(e.response.data.message);
    }
    setLoading(false);
  };

  const put = async () => {
    setLoading(true);
    const loading = alert.loading("정보 수정 중입니다.");
    try {
      const res = await instance.put("/api/myInfo", newData);
      await get();
      alert.update(loading, res.data.message, "success");
      await instance.get("/auth/logout");
      router.refresh();
    }
    catch(e: any){
      alert.update(loading, e.response.data.message, "error");
    }
    setLoading(false);
  };

  return (
    <Insider>
      <article className="flex flex-col gap-3">
        <section className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">내 정보 수정</h1>
          <h1 className="text-base text-[#e11d48]">허위로 정보를 입력하였을 경우, 불이익은 책임지지 않습니다.</h1>
          <h1 className="text-base text-primary">수정된 정보는 로그아웃 후 다시 로그인 시 반영됩니다.</h1>
        </section>
      </article>
      
      <InfoFrame 
        loading={loading}
        newData={newData}
        setNewData={setNewData}
      />
      
      <button 
        className="bg-primary text-white w-full text-base font-semibold rounded h-10"
        onClick={put}
      >
        내 정보 수정하기
      </button>
    </Insider>
  );
};

export default MyInfoContent;