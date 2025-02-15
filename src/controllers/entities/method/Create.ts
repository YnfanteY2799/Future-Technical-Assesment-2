import { BadRequestException } from "@/utils/error";
import { CreateEntityDTO } from "../dtos";

import { Elysia } from "elysia";

export default new Elysia().post(
  "Create",
  async ({ body: { type } }) => {
    try {
      switch (type) {
        case "ligth":
          const ligth = {};

          break;
        case "sensor":
          const sensor = {};

          break;
        case "switch":
          const switch_data = {};

          break;
        default:
          throw new BadRequestException("Not a valid type");
      }
    } catch (e) {
      console.error("Error on create method : ", e);
      throw e;
    }
  },
  { body: CreateEntityDTO }
);
