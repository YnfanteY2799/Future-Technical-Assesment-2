import { CreateEntityDTO } from "../dtos/index.ts";
import { Elysia } from "elysia";

export default new Elysia().post(
  "Create",
  async ({ body }) => {
    try {




     
    } catch (e) {
      console.error("Error on create method : ", e);
      throw e;
    }
  },
  { body: CreateEntityDTO }
);
