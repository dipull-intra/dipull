import cors from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import Bun from "bun";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { Elysia } from "elysia";
import mongoose from "mongoose";

import Crons from "./crons";
import IndexRouter from "./routers";

dayjs.extend(utc);
dayjs.extend(timezone);

mongoose.connect(Bun.env.MONGODB_URI ?? "");
const db = mongoose.connection;

const mongodb = new URL(Bun.env.MONGODB_URI ?? "");
db.on("open", console.log.bind(console, `💽 MongoDB connected to ${mongodb.hostname}:${mongodb.port}`));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const app = new Elysia()
  .use(
    cors({
      origin: true,
    }),
  )
  .use(Crons)
  .use(IndexRouter)
  .onError(({ error, code }) => {
    if (code === "NOT_FOUND") return;
    console.error(error);
  })
  .listen(8000);

if (Bun.env.NODE_ENV === "development") { 
  app.use(swagger());
}

console.log(`🕑 Reloaded at ${dayjs().format("YYYY-MM-DD HH:mm:ss.SSS")}`);
console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;
