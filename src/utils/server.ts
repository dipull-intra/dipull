"use server";

import { headers } from "next/headers";
import { NextRequest } from "next/server";

import { collections } from "./db";
import { defaultUser, UserInfo } from "./db/utils";
import { accessVerify, refreshVerify } from "./jwt";

export const getServerUser = async (): Promise<UserInfo> => {
  let user: UserInfo = defaultUser;
  try {
    const authorization = headers().get("cookie");
    const refreshToken = authorization?.split("refresh_token=")[1].split(";")[0] || "";
    const { id, email, gender, name, number, type, profile_image } = await refreshVerify(refreshToken);
    user = { id, email, gender, name, number, type, profile_image };
  } catch {
    user = defaultUser;
  }
  return user;
};

export const getUserByID = async (req: NextRequest, id: UserInfo["id"]): Promise<{
  my: UserInfo;
  target: UserInfo;
  isTeacher: boolean;
}> => { 
  if (!id) {
    throw new Error("학생을 선택해주세요.");
  }
  const accessToken = req.cookies.get("access_token")?.value || "";
  const accessVerified = await accessVerify(accessToken);
  const isTeacher = accessVerified.type === "teacher";
  if (isTeacher) {
    const userDB = await collections.users();
    const getUser = await userDB.findOne({
      id: id,
      type: "student"
    });
    if (!getUser) {
      throw new Error("존재하지 않는 학생입니다.");
    }
    return {
      my: accessVerified,
      target: getUser,
      isTeacher,
    };
  }
  else {
    return {
      my: accessVerified,
      target: accessVerified,
      isTeacher,
    };
  }
};