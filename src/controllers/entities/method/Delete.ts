import { getMemoryEntities, modifyMemoryEntities } from "@/db";
import { CommonIDParamsDTO } from "../dtos";

import { Elysia } from "elysia";

export default new Elysia().delete(
  "Delete/:id",
  async ({ params: { id } }) => {
    try {
      const newData = getMemoryEntities().filter(({ entity_id }) => entity_id !== id);
      modifyMemoryEntities(newData, "Delete");
      return getMemoryEntities();
    } catch (e) {
      console.error("Error on delete method : ", e);
      throw e;
    }
  },
  { params: CommonIDParamsDTO }
);
