import * as jose from "jose";

import { ClientGet } from "../(main)/type";

export const getJwtToken = async (sendData: {
  [key in ClientGet]?: string;
}) => {
  const privateKey = await jose.importPKCS8(process.env.OAUTH_JWT_SECRET || "", "RS256");
  const jwt = await new jose.SignJWT({
    data: sendData,
  })
    .setProtectedHeader({ alg: "RS256" })
    .setExpirationTime("5min")
    .sign(privateKey);
  return jwt;
};