import { BadRequestException } from "@/utils/error";
import { CreateEntityDTO } from "../dtos";

import { Elysia } from "elysia";

import type { ILightEntity, ISensor, ISwitch } from "@/types/db";
import { modifyMemoryEntities } from "@/db";

export default new Elysia().post(
  "Create",
  async ({ body: { type } }) => {
    try {
      switch (type) {
        case "ligth":
          const ligth: ILightEntity = {
            state: "on",
            brightness: 0,
            type: "ligth",
            friendly_name: "",
            last_reported: "",
            last_updated: "",
            last_changed: "",
            client_id: "",
            entity_id: "",
          };
          modifyMemoryEntities([ligth], "Add");
          break;
        case "sensor":
          const sensor: ISensor = {
            unit_of_measurement: "",
            type: "sensor",
            friendly_name: "",
            client_id: "",
            entity_id: "",
            last_reported: "",
            last_updated: "",
            last_changed: "",
          };

          modifyMemoryEntities([sensor], "Add");
          break;
        case "switch":
          const switch_data: ISwitch = {
            state: "on",
            type: "switch",
            friendly_name: "",
            last_reported: "",
            last_updated: "",
            last_changed: "",
            client_id: "",
            entity_id: "",
          };
          modifyMemoryEntities([switch_data], "Add");
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
