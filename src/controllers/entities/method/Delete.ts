import { CommonIDParamsDTO } from "../dtos";
import { memoryEntities } from "@/db";

import { Elysia } from "elysia";

export default new Elysia().delete(
  "Delete/:id",
  async ({ params: { id } }) => {
    try {
      const newData = memoryEntities.filter(({ entity_id }) => entity_id !== id);

      memoryEntities = newData;
    } catch (e) {
      console.error("Error on delete method : ", e);
      throw e;
    }
  },
  { params: CommonIDParamsDTO }
);
