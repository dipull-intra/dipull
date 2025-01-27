import { ObjectId } from "mongodb";

import { UserDB } from "@/app/auth/type";

export type DataInfo = {
  id: string;
  email: string;
  gender: string;
  name: string;
  number: number;
  profile_image: string;
  type: UserDB["type"];
};

export type DataDB = DataInfo & {
  _id: ObjectId;
}

export type DataInfoResponse = {
  message: string;
  data: DataInfo[];
};

export type UserData1Response = {
  message: string;
  data: DataInfo;
};

export const defaultDataData: DataInfo = {
  id: "",
  email: "",
  gender: "male",
  name: "",
  number: 0,
  profile_image: "/profile.jpg",
  type: "student",
};
