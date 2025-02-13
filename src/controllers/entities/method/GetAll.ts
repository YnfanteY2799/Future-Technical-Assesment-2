import { GetAllQueryDTO } from "../dtos";

import { Elysia } from "elysia";

export default new Elysia().get(
  "Get",
  async ({ query: {} }) => {
    try {



    } catch (e) {
      console.error("Error on create method : ", e);
      throw e;
    }
  },
  { query: GetAllQueryDTO }
);
