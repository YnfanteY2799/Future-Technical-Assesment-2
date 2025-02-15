import { GetAllQueryDTO } from "../dtos";
import { memoryEntities } from "@/db";

import { Elysia } from "elysia";

export default new Elysia().get(
  "Get",
  async ({ query: { enumType, client_id, entity_id, friendly_name, size = 50, page = 1 } }) => {
    try {
      const data = memoryEntities.filter(({ type, client_id, entity_id, friendly_name }) => {});

      if (!data) ;

      return data;
    } catch (e) {
      console.error("Error on create method : ", e);
      throw e;
    }
  },
  { query: GetAllQueryDTO }
);
