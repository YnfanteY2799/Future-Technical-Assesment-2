import { NotFoundException } from "@/utils/error";
import { CommonIDParamsDTO } from "../dtos";
import { getMemoryEntities } from "@/db";

import { Elysia } from "elysia";

export default new Elysia().get(
  "Get/:id",
  async ({ params: { id } }) => {
    try {
      const data = getMemoryEntities().filter(({ entity_id }) => entity_id === id);
      if (!data) throw new NotFoundException("There are no registers!");
      return data[0];
    } catch (e) {
      console.error("Error on Get By Id method : ", e);
      throw e;
    }
  },
  { params: CommonIDParamsDTO }
);
