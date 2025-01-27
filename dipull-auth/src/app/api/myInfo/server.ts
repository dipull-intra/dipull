"use server";

import { ObjectId } from "mongodb";

import { connectToDatabase } from "@/utils/db";

export const getMyInfo = async (id: string) => {
  const client = await connectToDatabase();
  const dataCollection = client.db().collection("data");
  const objcet_id = ObjectId.createFromHexString(id);
  const data = await dataCollection.findOne({ _id: objcet_id });
  return data as {
    _id: ObjectId,
    email: string,
    gender: "male" | "female",
    name: string,
    number: number,
    type: "teacher" | "student",
    profile_image: string,
  };
};