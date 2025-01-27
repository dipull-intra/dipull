"use client";

import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

import InfoFrame, { InfoFrameNewData } from "@/app/(login)/(main)/infoFrame";
import Insider from "@/provider/insider";
import { alert } from "@/utils/alert";

const Add = () => {
  const searchParams = useSearchParams();
  const access_token = searchParams.get("access_token") || "";
  const client = searchParams.get("client") || "";
  const redirect = searchParams.get("redirect") || "";

  const [loading, setLoading] = React.useState(false);
  const [newData, setNewData] = React.useState<InfoFrameNewData>({
    gender: "male",
    name: "",
    number: 1,
  });

  const router = useRouter();

  const loginAxios = async () => {
    const alerting = alert.loading("계정 추가 중...");
    try{
      const { data } = await axios.put("/oauth/callback", {
        clientId: client,
        access_token: access_token,
        ...newData,
      });
      alert.update(
        alerting, 
        <div className="flex flex-col">
          <p>{data.message}</p>
          <p>곧 원래 사이트로 이동 됩니다.</p>
        </div>,
        "success"
      );
      if(redirect.includes("?")) router.push(`${redirect}&token=${data.token}`);
      else router.push(`${redirect}?token=${data.token}`);
    }
    catch (e: any) {
      alert.update(alerting, e.response.data.message, "error");
    }
  };

  React.useEffect(() => {
    if(!access_token) router.back();
  }, []);

  return (
    <>
      <header className="w-full">
        <article className="w-full flex justify-center items-center border-b border-text/10 px-5 py-3">
          <p className="text-primary text-lg font-semibold">디풀 계정 센터</p>
        </article>
      </header>
      <Insider>
        <article className="flex flex-col gap-3">
          <section className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold">내 계정 추가하기</h1>
            <h1 className="text-base text-[#e11d48]">허위로 정보를 입력하였을 경우, 불이익은 책임지지 않습니다.</h1>
            <h1 className="text-base text-primary">@dimigo.hs.kr로 끝나는 계정만 가입 가능합니다.</h1>
            <h1 className="text-base">선생님의 경우 아무 학번이나 입력하신 후, 이미 권한이 있는 동료 교사에게 권한 추가 요청을 해주세요.</h1>
            <h1 className="text-base"><a className="text-primary underline" href="/teacher/authority/list" target="_blank" rel="noreferrer">디풀 계정 센터</a>에서 이미 교사 권한이 있는 사람이 권한 추가 가능합니다.</h1>
          </section>
        </article>
      
        <InfoFrame
          loading={loading}
          newData={newData}
          setNewData={setNewData}
        />
      
        <button 
          className="bg-primary text-white w-full text-base font-semibold rounded h-10"
          onClick={loginAxios}
        >
          내 계정 추가하기
        </button>
      </Insider>
    </>
  );
};

const ExportAdd = () => {
  return (
    <Suspense>
      <Add />
    </Suspense>
  );
};

export default ExportAdd;