"use client";

/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { WithId } from "mongodb";
import { useRouter } from "next/navigation";
import React from "react";

import { alert } from "@/utils/alert";
import instance from "@/utils/instance";

import { ClientType } from "./type";

const ExistingLoginButton = ({
  myData,
  client,
  redirect,
}: {
  myData: WithId<ClientType>;
  client: string;
  redirect: string;
}) => {
  const router = useRouter();

  const onClick = async () => {
    const alerting = alert.loading("로그인 중...");
    try{
      const { data } = await instance.post("/oauth/callback/existing", {
        clientId: client,
      });
      const res = await axios.get(`/auth/login?token=${data.token}`);
      localStorage.setItem("accessToken", res.data.accessToken);
      alert.update(
        alerting, 
        <div className="flex flex-col">
          <p>로그인에 성공했습니다.</p>
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

  return (
    <button 
      className="w-full bg-background py-[0.875rem] px-5 border border-text/5 rounded flex flex-row items-center justify-center gap-2"
      onClick={onClick}
    >
      <img
        src={myData.profile_image}
        className="w-6 h-6 rounded-full border border-text/5"
        alt="프로필 이미지"
      />
      <p className="text-sm font-medium">{myData.name}(으)로 로그인</p>
    </button>
  );
};

export default ExistingLoginButton;