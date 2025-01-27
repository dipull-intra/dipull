"use client";

import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import React from "react";
import { useLongPress } from "use-long-press";

import { alert } from "@/utils/alert";

export const loginAxios = async (
  client: string,
  access_token: string, 
  redirect: string,
  router: AppRouterInstance,
) => {
  const alerting = alert.loading("로그인 중...");
  try{
    const { data } = await axios.post("/oauth/callback", {
      clientId: client,
      access_token: access_token,
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
    if(e.response.data.message === "등록된 사용자가 아닙니다."){
      router.push(`/oauth/add?access_token=${access_token}&client=${client}&redirect=${redirect}`);
      alert.update(
        alerting, 
        <div className="flex flex-col">
          <p>등록된 사용자가 아닙니다.</p>
          <p>본인 정보를 입력하여 등록해주세요.</p>
        </div>, 
        "info"
      );
    }
    else {
      alert.update(alerting, e.response.data.message, "error");
    }
  }
};

const GoogleLoginButton = ({
  client,
  redirect,
  isAnother,
}: {
  client: string;
  redirect: string;
  isAnother: boolean;
}) => {
  const router = useRouter();

  const onLongPress = useLongPress(() => {
    adminlogin();
  }, {
    onCancel: () => {
      login();
    },
    threshold: 3000,
  });

  const adminlogin = useGoogleLogin({
    onSuccess: res => loginAxios(client, res.access_token, redirect, router),
    flow: "implicit",
  });
  const login = useGoogleLogin({
    onSuccess: res => loginAxios(client, res.access_token, redirect, router),
    hosted_domain: "dimigo.hs.kr",
    flow: "implicit",
  });

  return (
    <button 
      className="w-full bg-background py-4 px-5 border border-text/5 rounded flex flex-row items-center justify-center gap-2 select-none cursor-pointer drag_none"
      onClick={() => login()}
      {...onLongPress()}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
        <path d="M18.8334 10.193C18.8334 9.4938 18.7766 8.98359 18.6539 8.4545H10.6701V11.6102H15.3564C15.2619 12.3944 14.7517 13.5754 13.6179 14.369L13.602 14.4747L16.1263 16.4302L16.3012 16.4477C17.9074 14.9643 18.8334 12.7818 18.8334 10.193Z" fill="#4285F4"></path>
        <path d="M10.6701 18.5069C12.9659 18.5069 14.8934 17.751 16.3012 16.4472L13.6179 14.3685C12.8998 14.8693 11.9361 15.2189 10.6701 15.2189C8.4214 15.2189 6.51287 13.7355 5.83254 11.6853L5.73281 11.6937L3.108 13.7251L3.07367 13.8205C4.47199 16.5983 7.34426 18.5069 10.6701 18.5069Z" fill="#34A853"></path>
        <path d="M5.83256 11.6851C5.65305 11.156 5.54916 10.5891 5.54916 10.0033C5.54916 9.41752 5.65305 8.85065 5.82312 8.32156L5.81836 8.20887L3.16065 6.14487L3.07369 6.18623C2.49738 7.33893 2.16669 8.63336 2.16669 10.0033C2.16669 11.3733 2.49738 12.6677 3.07369 13.8204L5.83256 11.6851Z" fill="#FBBC05"></path>
        <path d="M10.6701 4.78796C12.2668 4.78796 13.3439 5.47768 13.958 6.05406L16.3579 3.71088C14.884 2.3409 12.9659 1.5 10.6701 1.5C7.34426 1.5 4.47199 3.40853 3.07367 6.18628L5.82309 8.32161C6.51287 6.27135 8.4214 4.78796 10.6701 4.78796Z" fill="#EB4335"></path>
      </svg>
      <p className="text-sm font-medium drag_none">{isAnother ? "다른 " : ""}디미고 구글 계정으로 로그인</p>
    </button>
  );
};

export default GoogleLoginButton;