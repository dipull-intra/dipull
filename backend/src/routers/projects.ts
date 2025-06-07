import Elysia from "elysia";

import projects from "@back/models/projects";
import { errorElysia } from "@back/utils/error";

const projectsRouter = new Elysia().use(projects.model).get(
  "projects",
  async ({ projectsModel }) => {
    return projectsModel.get();
  },
  {
    response: {
      ...errorElysia(["NOT_FOUNDED_KEY"]),
    },
  },
);

export default projectsRouter;
