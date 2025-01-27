"use client";

import React from "react";

import Search from "./search";

const TeacherAuthorityContent = () => {
  return (
    <>
      <article className="flex flex-col gap-3">
        <h1 className="text-xl font-semibold">교사 권한 추가</h1>
        <Search />
      </article>
    </>
  );
};

export default TeacherAuthorityContent;