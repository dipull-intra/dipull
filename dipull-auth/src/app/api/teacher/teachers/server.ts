"use server";

import { connectToDatabase } from "@/utils/db";

import { DataDB } from "../userinfo/utils";

export const getTeachers = async () => { 
  const client = await connectToDatabase();
  const dataCollection = client.db().collection("data");
  const search = await dataCollection.find({
    type: "teacher"
  }).toArray() as unknown as DataDB[];
  const newData = search.map((data) => {
    const newD = {
      ...data,
      id: data._id.toHexString(),
      _id: undefined,
    };
    delete newD._id;
    return newD;
  });
  return newData;
};