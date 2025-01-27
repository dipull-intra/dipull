"use client";

import Link from "next/link";
import React from "react";

const Outing = () => {
  return (
    <article className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">디풀 Oauth 개발 이용 안내</h1>
      <article className={[
        "flex flex-row gap-2 bg-white rounded border border-text/10 p-5",
      ].join(" ")}>
        <Link 
          href="https://docs.dimigo.net/developer/oauth"
          target="_blank"
          className="w-full"
        >
          <p className="text-primary w-full text-center underline">여기서 개발 문서를 참고해주세요.</p>
        </Link>
      </article>
    </article>
  );
};

export default Outing;