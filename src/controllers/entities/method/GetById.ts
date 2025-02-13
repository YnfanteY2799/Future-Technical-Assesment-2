import { CommonIDParamsDTO } from "../dtos/index.ts";
import { Elysia } from "elysia";

export default new Elysia().get(
  "Get/:id",
  async ({ params: { id } }) => {
    try {
    } catch (e) {
      console.error("Error on create method : ", e);
      throw e;
    }
  },
  { params: CommonIDParamsDTO }
);
