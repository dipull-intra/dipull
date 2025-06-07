import Elysia from "elysia";

import awardsRouter from "./awards";
import projectsRouter from "./projects";
import teamsRouter from "./teams";
import update from "./update";

const IndexRouter = new Elysia({
  name: "Index",
  prefix: "",
})
  .use(update)
  .use(awardsRouter)
  .use(projectsRouter)
  .use(teamsRouter);

export default IndexRouter;
