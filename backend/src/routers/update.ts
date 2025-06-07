import Bun from "bun";
import Elysia, { t } from "elysia";

import { run } from "@back/crons/notion";
import { errorElysia } from "@back/utils/error";

const update = new Elysia().get(
  "update",
  async ({
    query
  }) => {
    if(query.key !== Bun.env.RUN_KEY) return false;
    await run();
    return true;
  },
  {
    query: t.Object({
      key: t.String(),
    }),
    response: {
      200: t.Boolean(),
      ...errorElysia(["NOT_FOUNDED_KEY"]),
    },
  },
);

export default update;
