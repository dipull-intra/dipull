import Elysia from "elysia";
import mongoose from "mongoose";

import { IDocument, Award } from "@common/types/db";

const NAME = "awards";
type TYPE = Award;

const schema = new mongoose.Schema({
  icon: { type: String },
  url: { type: String },
  name: { type: String },
  host: { type: String },
  organizer: { type: String },
  by: { type: String },
  period: { type: String },
  when: { type: String },
});


export const db = mongoose.model<IDocument<TYPE>>(NAME, schema);

const get = async () => {
  return db.find({}, { _id: 0, __v: 0 }).sort({ when: -1 }).exec();
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