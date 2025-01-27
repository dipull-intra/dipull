/* eslint-disable @next/next/no-img-element */
import React from "react";

import { getUserAndVerify } from "@/utils/server";

import Header from "./(header)/header";
import User from "./(header)/user";

const LoginedLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { verified, userInfo } = await getUserAndVerify();

  return (
    <>
      {
        verified.ok ? (
          <>
            <Header userInfo={userInfo} />
            <User payload={userInfo} />
          </>
        ) : null
      }
      {children}

      <footer className="w-full pt-5 pb-8">
        <article className="w-full flex flex-col justify-center items-center gap-2">
          <p className="text-text/40 text-sm">&#34;내가 이것보단 잘 만들겠다 ㅋㅋ&#34;하는 경우엔 <a className="text-primary/40 underline" href="https://github.com/jeamxn/dipull-auth" target="_blank" rel="noreferrer">직접 만드세요</a>!</p>
          <p className="text-text/40 text-sm">오류 및 기타 문의 사항은 <a className="text-primary/40 underline" href="https://discord.gg/U7FBXyPKM6" target="_blank" rel="noreferrer">디풀 개발자 커뮤니티</a>에 연락바랍니다!</p>
          <p className="text-text/40 text-sm">자세한 서비스 사용 방법은 <a className="text-primary/40 underline" href="https://docs.dimigo.net" target="_blank" rel="noreferrer">여기</a>를 참고 해주세요!</p>
        </article>
      </footer>
    </>
  );
};

export default LoginedLayout;