import Elysia from "elysia";

import awards from "@back/models/awards";
import { errorElysia } from "@back/utils/error";

const awardsRouter = new Elysia().use(awards.model).get(
  "awards",
  async ({ awardsModel }) => {
    return awardsModel.get();
  },
  {
    response: {
      ...errorElysia(["NOT_FOUNDED_KEY"]),
    },
  },
);

export default awardsRouter;
