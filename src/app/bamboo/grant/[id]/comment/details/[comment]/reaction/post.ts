import "moment-timezone";
import moment from "moment";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

import { collections } from "@/utils/db";
import { accessVerify } from "@/utils/jwt";

import { BambooRead } from "../../../../utils";

import { BambooCommentReactResponse } from "./utils";

const POST = async (
  req: NextRequest,
  { params }: {
    params: {
      id: BambooRead["id"];
      comment: string;
    }
  }
) => {
  try {
    const { type } = await req.json();
    if (["bad", "good", ""].indexOf(type) === -1) { 
      throw new Error("Invalid type value");
    }

    const accessToken = req.cookies.get("access_token")?.value || "";
    const { id } = await accessVerify(accessToken);

    const bambooDB = await collections.bamboo_comment();
    if (type === "good") {
      const update = await bambooDB.updateOne({
        _id: ObjectId.createFromHexString(params.comment),
        document: params.id,
      }, {
        $addToSet: {
          good: id
        },
        $pull: {
          bad: id
        }
      });
      if (update.modifiedCount === 0) {
        throw new Error("반응 할 게시물을 찾을 수 없습니다.");
      }
    }
    else if (type === "bad") {
      const update = await bambooDB.updateOne({
        _id: ObjectId.createFromHexString(params.comment),
        document: params.id,
      }, {
        $addToSet: {
          bad: id
        },
        $pull: {
          good: id
        }
      });
      if (update.modifiedCount === 0) {
        throw new Error("반응 할 게시물을 찾을 수 없습니다.");
      }
    }
    else if (type === "") { 
      const update = await bambooDB.updateOne({
        _id: ObjectId.createFromHexString(params.comment),
        document: params.id,
      }, {
        $pull: {
          good: id,
          bad: id
        }
      });
      if (update.modifiedCount === 0) {
        throw new Error("반응 할 게시물을 찾을 수 없습니다.");
      }
    }

    const response = NextResponse.json<BambooCommentReactResponse>({
      success: true,
    });
    return response;
  }
  catch (e: any) {
    const response = NextResponse.json<BambooCommentReactResponse>({
      success: false,
      error: {
        title: "공감을 하는 중 오류가 발생했습니다.",
        description: e.message,
      }
    }, {
      status: 400,
    });
    console.error(e.message);
    return response;
  }
};

export default POST;