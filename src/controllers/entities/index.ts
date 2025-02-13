import GetById from "./method/GetById";
import Create from "./method/Create";
import Delete from "./method/Delete";
import Update from "./method/Update";
import Get from "./method/GetAll";

import { Elysia } from "elysia";

export default new Elysia({ prefix: "Entity", normalize: true, detail: { tags: ["Entity"] } }).use([
  Get,
  GetById,
  Create,
  Update,
  Delete,
]);
