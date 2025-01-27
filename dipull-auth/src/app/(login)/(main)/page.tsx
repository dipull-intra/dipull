import React from "react";

import { getMyInfo } from "@/app/api/myInfo/server";
import { getUserInfo } from "@/utils/server";

import MyInfoContent from "./myInfoContent";

const Main = async () => {
  const initialUserInfo = await getUserInfo();
  const init = await getMyInfo(initialUserInfo.id);
  return (
    <MyInfoContent
      init={{
        gender: init.gender,
        name: init.name,
        number: init.number,
      }}
      // userInfo={initialUserInfo}
    />
  );
};

export default Main;