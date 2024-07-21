import React from "react";

import { getWakeupAvail } from "@/app/api/wakeup/apply/server";
import { getWakeupRanking } from "@/app/api/wakeup/ranking/server";
import { getWakeup } from "@/app/api/wakeup/server";
import { getStates } from "@/utils/getStates";
import { getUserInfo } from "@/utils/server";

import Content from "./content";

const MachinePage = async () => {
  const initialUserInfo = await getUserInfo();
  const initialData = await getWakeup(initialUserInfo.id, initialUserInfo.gender);
  const initailAvail = await getWakeupAvail(initialUserInfo.id);
  const initailRanking = await getWakeupRanking();
  const emergency = await getStates("emergency");
  
  return (
    <Content
      myAvail={initailAvail.available}
      initailData={initialData}
      initailRanking={initailRanking}
      emergency={emergency}
    />
  );
};

export default MachinePage;