/* eslint-disable @next/next/no-img-element */
import { ObjectId, WithId } from "mongodb";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

import Insider from "@/provider/insider";
import { connectToDatabase } from "@/utils/db";
import { verify } from "@/utils/jwt";

import ExistingLoginButton from "./existingLoginButton";
import GoogleLoginButton from "./googleLoginButton";
import NotFoundClient from "./notFoundClient";
import { ClientDataDB, ClientGetType, ClientType } from "./type";
import UnmatchedRedirectUri from "./unmatchedRedirectUri";

const Oauth = async ({
  searchParams,
}: {
  searchParams: {
    client: string;
    redirect: string;
  };
}) => {
  try{
    let myData: WithId<ClientType> | null = null;
    const cookies = headers().get("cookie");
    const accessToken = cookies?.split("accessToken=")[1]?.split(";")[0];
    const verified = await verify(accessToken || "");
    const client = await connectToDatabase();
    if(verified.ok && verified.payload?.id) {
      try{
        const dataCollection = client.db().collection<ClientType>("data");
        const objcet_id2 = ObjectId.createFromHexString(verified?.payload?.id || "");
        const data = await dataCollection.findOne({ _id: objcet_id2 });
        myData = data;
      }
      catch {
        myData = null;
      }
    }

    const clientsCollection = client.db().collection<ClientDataDB>("clients");
    const objcet_id = ObjectId.createFromHexString(searchParams.client);
    const clientData = await clientsCollection.findOne({ _id: objcet_id });
    if(!clientData) {
      return <NotFoundClient client={searchParams.client} />;
    }
    if(!clientData.redirect.includes(searchParams.redirect.split("?")[0])) {
      return <UnmatchedRedirectUri redirect={searchParams.redirect} />;
    }

    return (
      <Insider className="flex flex-col items-center justify-center h-full">
        <div className="bg-white rounded-xl p-6 flex flex-col gap-6 w-full max-w-[26rem] border border-text/5">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-0 items-center">
              <div className="flex flex-row gap-1 items-center">
                <svg width="14" height="14" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1115_161)">
                    <path className="fill-text/50" d="M26.8382 18.3641C27.7759 19.3018 29.0477 19.8286 30.3738 19.8286H55.1723C57.9338 19.8286 60.1724 22.0671 60.1724 24.8286V49.6272C60.1724 50.9533 60.6991 52.2251 61.6368 53.1628L71.4654 62.9913C74.6152 66.1411 80.0009 63.9103 80.0009 59.4558V5C80.0009 2.23857 77.7623 0 75.0009 0H20.5452C16.0907 0 13.8598 5.38571 17.0097 8.53553L26.8382 18.3641Z" />
                    <path className="fill-text/50" d="M53.1628 61.6368C52.2251 60.6991 50.9533 60.1724 49.6272 60.1724H24.8286C22.0672 60.1724 19.8286 57.9338 19.8286 55.1724V30.3738C19.8286 29.0477 19.3018 27.7759 18.3641 26.8382L8.53554 17.0097C5.38572 13.8598 0 16.0907 0 20.5452V75.0009C0 77.7624 2.23858 80.0009 5 80.0009H59.4558C63.9103 80.0009 66.1412 74.6152 62.9913 71.4654L53.1628 61.6368Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1115_161">
                      <rect width="80" height="80" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-sm text-text/50 font-semibold">Dipull Auth</p>
              </div>
              <p className="text-sm text-text/50">을 통해</p>
            </div>
            <div className="flex flex-row text-xl font-semibold">
              <p className="text-primary">{clientData.name}</p>
              <p>에 로그인</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-text/50">요청한 정보</p>
            <p className="text-base font-medium">
              {
                clientData.get.length ? clientData.get.map((get, index) => {
                  if(index === 0) return ClientGetType[get];
                  return `, ${ClientGetType[get]}`;
                }) : "없음"
              }
            </p>
          </div>

          <div className="w-full flex flex-col gap-2 items-center justify-center">
            {
              myData ? (
                <ExistingLoginButton 
                  myData={myData}
                  client={searchParams.client}
                  redirect={searchParams.redirect}
                />
              ) : null
            }
            <GoogleLoginButton 
              client={searchParams.client}
              redirect={searchParams.redirect}
              isAnother={myData ? true : false}
            />
          </div>
          
        </div>
      </Insider>
    );
  }
  catch {
    return <NotFoundClient client={searchParams.client} />;
  }
};

export default Oauth;