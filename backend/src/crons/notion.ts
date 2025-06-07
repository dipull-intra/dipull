import cron, { Patterns } from "@elysiajs/cron";
import { Client } from "@notionhq/client";
import dayjs from "dayjs";

import awards from "@back/models/awards";
import projects from "@back/models/projects";
import teams from "@back/models/teams";

export const run = async () => {
  try {
    console.log("🐩 Notion start at:", dayjs().format("YYYY-MM-DD HH:mm:ss"));

    const notion = new Client({
      auth: Bun.env.NOTION_API_KEY,
    });

    const awardsDB = await notion.databases.query({
      database_id: Bun.env.NOTION_DB_AWARDS as string,
    });
    const awardsResponse = awardsDB.results.map((page) => {
      return {
        icon: (page as any).icon?.file.url,
        url: (page as any).public_url,
        name: (page as any).properties.name.title[0].plain_text,
        host: (page as any).properties.host.multi_select.map((host: any) => host.name).join(", "),
        organizer: (page as any).properties.organizer.multi_select.map((host: any) => host.name).join(", "),
        by: (page as any).properties.by.rich_text[0].plain_text,
        period: (page as any).properties.period.rich_text[0].plain_text,
        when: (page as any).properties.when.date?.start || "",
      };
    });
    await awards.db.deleteMany({});
    await awards.db.insertMany(awardsResponse);

    const projectsDB = await notion.databases.query({
      database_id: Bun.env.NOTION_DB_PROJECTS as string,
    });
    const projectsResponse = projectsDB.results.map((page) => {
      return {
        icon: (page as any).icon?.file.url,
        cover: (page as any).cover?.file.url,
        priority: (page as any).properties.priority.number,
        url: (page as any).public_url,
        data: {
          title: (page as any).properties.name.title[0].plain_text,
          description: (page as any).properties.description.rich_text[0].plain_text,
          startDate: (page as any).properties.start.date?.start || "",
          endDate: (page as any).properties.end.date?.start || "",
        }
      };
    });
    await projects.db.deleteMany({});
    await projects.db.insertMany(projectsResponse);

    const teamsDB = await notion.databases.query({
      database_id: Bun.env.NOTION_DB_TEAMS as string,
    });
    const teamsResponse = teamsDB.results.map((page) => {
      return {
        priority: (page as any).properties.priority.number,
        url: (page as any).public_url,
        icon: (page as any).icon?.file.url,
        name: (page as any).properties.name.title[0].plain_text,
      };
    });
    await teams.db.deleteMany({});
    await teams.db.insertMany(teamsResponse);

    console.log("🐩 Notion done at:", dayjs().format("YYYY-MM-DD HH:mm:ss"));
  }
  catch (e) {
    console.error(e);
    console.error("🐩 Notion error at:", dayjs().format("YYYY-MM-DD HH:mm:ss"));
  }
};

const Cron_notion = cron({
  name: "cron_notion",
  pattern: Patterns.EVERY_30_MINUTES,
  run: run,
});

export default Cron_notion;
