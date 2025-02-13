import GetById from "./method/GetById.ts";
import Create from "./method/Create.ts";
import Delete from "./method/Delete.ts";
import Update from "./method/Update.ts";
import Get from "./method/GetAll.ts";

import { Elysia } from "elysia";

export default new Elysia({ prefix: "Entity", normalize: true, detail: { tags: ["Entity"] } }).use([
  Get,
  GetById,
  Create,
  Update,
  Delete,
]);
