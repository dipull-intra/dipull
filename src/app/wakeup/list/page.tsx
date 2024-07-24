"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

import { useAuth } from "@/hooks";

import Card from "../card";
import { MyWakeupResponseString } from "../my/grant/list/utils";

import { WakeupListResponse } from "./get/utlis";

const Machine = () => {
  const { user, login } = useAuth();
  const { data, refetch } = useQuery({
    queryKey: ["wakeup_apply_list"],
    queryFn: async () => {
      const response = await axios.get<WakeupListResponse>("/wakeup/list/get");
      return response.data.data;
    },
  });
  const { data: myList, refetch: refetchMyList } = useQuery({
    queryKey: ["wakeup_my_list"],
    queryFn: async () => {
      const response = await axios.get<MyWakeupResponseString>("/wakeup/my/grant/list");
      return response.data.data;
    },
    enabled: Boolean(user.id),
  });

  return (
    <div className="flex flex-col gap-4 w-full">
      {
        data ? data.length ? data.map((video, index) => (
          <Card
            key={index}
            id={video._id}
            vote={video.count}
            rank={index + 1}
            title={video.title}
            myList={myList}
            parentRefetch={() => {
              refetch();
              refetchMyList();
            }}
          />
        )) : (
          <div className="w-full px-6 flex flex-row items-center justify-center">
            <p className="text-text/40 dark:text-text-dark/50 text-center">신청된 기상송이 없습니다.</p>
          </div>
        ) : (
          <div className="w-full px-6 flex flex-row items-center justify-center">
            <p className="text-text/40 dark:text-text-dark/50 text-center">기상속 목록을 불러오는 중 입니다...</p>
          </div>
        )
      }
    </div>
  );
};

export default Machine;