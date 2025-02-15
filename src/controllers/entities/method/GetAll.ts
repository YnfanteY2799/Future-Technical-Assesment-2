import { NotFoundException } from "@/utils/error";
import { AddMetaData } from "@/utils/functions";
import { GetAllQueryDTO } from "../dtos";
import { getMemoryEntities } from "@/db";

import { Elysia } from "elysia";

export default new Elysia().get(
  "Get",
  async ({ query: { enumType, client_id, entity_id, friendly_name, size = 50, page = 1 } }) => {
    try {
      const data = getMemoryEntities().filter(({ type, client_id: cId, entity_id: eId, friendly_name: fn }) => {
        if (enumType && type !== enumType) return false;
        if (!client_id && !entity_id && !friendly_name) return true;
        if (client_id && cId !== client_id) return false;
        if (entity_id && (!eId || !eId.includes(entity_id))) return false;
        if (friendly_name && (!fn || !fn.includes(friendly_name))) return false;
        return true;
      });
      if (!data) throw new NotFoundException("There are no registers!");
      return AddMetaData(data, page, data.length, size);
    } catch (e) {
      console.error("Error on Get All method : ", e);
      throw e;
    }
  },
  { query: GetAllQueryDTO }
);
