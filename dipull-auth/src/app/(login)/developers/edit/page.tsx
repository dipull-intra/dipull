import React from "react";

import { getMyOauth } from "@/app/api/oauth/server";
import { getUserInfo } from "@/utils/server";

import DevEditContent from "./devEditContent";

const Edit = async () => {
  const initialUserInfo = await getUserInfo();
  const init = await getMyOauth(initialUserInfo.id);
  const initMap = init.map((data) => {
    return {
      ...data,
      _id: data._id.toHexString(),
    };
  });
  return (
    <DevEditContent
      init={initMap}
    />
  );
};

export default Edit;