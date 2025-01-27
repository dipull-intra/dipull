"use server";

import { ClientDataDB } from "@/app/oauth/(main)/type";
import { connectToDatabase } from "@/utils/db";

export const getMyOauth = async (id: string) => { 
  const client = await connectToDatabase();
  const clientsCollection = client.db().collection("clients");
  const data = await clientsCollection.find({ owner: id }).toArray();
  return data as ClientDataDB[];
};