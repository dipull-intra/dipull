import Elysia from "elysia";

import teams from "@back/models/teams";
import { errorElysia } from "@back/utils/error";

const teamsRouter = new Elysia().use(teams.model).get(
  "teams",
  async ({ teamsModel }) => {
    return teamsModel.get();
  },
  {
    response: {
      ...errorElysia(["NOT_FOUNDED_KEY"]),
    },
  },
);

export default teamsRouter;
