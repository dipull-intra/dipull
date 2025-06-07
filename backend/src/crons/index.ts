import Elysia from "elysia";

import Cron_notion from "./notion";

const Crons = new Elysia({
  name: "crons",
})
  .use(Cron_notion);

export default Crons;
