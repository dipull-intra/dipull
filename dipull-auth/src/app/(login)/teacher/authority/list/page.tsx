import React from "react";

import { getTeachers } from "@/app/api/teacher/teachers/server";

import TeacherAuthorityContent from "./TeacherMachinContent";

const TeacherAuthorityPage = async () => {
  const init = await getTeachers();
  return (
    <TeacherAuthorityContent
      init={init}
    />
  );
};

export default TeacherAuthorityPage;