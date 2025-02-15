import { CommonIDParamsDTO, UpdateEntityDTO } from "../dtos";

import { Elysia } from "elysia";

export default new Elysia().put(
  "Update/:id",
  async ({ params: { id }, body }) => {
    try {



     
    } catch (e) {
      console.error("Error on Update method : ", e);
      throw e;
    }
  },
  { params: CommonIDParamsDTO, body: UpdateEntityDTO }
);
