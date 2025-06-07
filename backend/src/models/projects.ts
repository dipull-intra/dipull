import Elysia from "elysia";
import mongoose from "mongoose";

import { IDocument, Project } from "@common/types/db";

const NAME = "projects";
type TYPE = Project;

const schema = new mongoose.Schema({
  icon: { type: String },
  cover: { type: String },
  priority: { type: Number },
  url: { type: String },
  data: {
    title: { type: String },
    description: { type: String },
    startDate: { type: String },
    endDate: { type: String },
  }
});

export const db = mongoose.model<IDocument<TYPE>>(NAME, schema);

const get = async () => {
  return db.find({}, { _id: 0, __v: 0 }).sort({ priority: -1 }).exec();
};

const model = new Elysia()
  .decorate(`${NAME}Model`, {
    db, get
  });
const exports = {
  [NAME]: {
    schema, db, model,
  },
};
export default exports[NAME];