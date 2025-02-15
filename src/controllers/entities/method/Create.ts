import { BadRequestException } from "@/utils/error";
import { SecureNanoID } from "@/utils/functions";
import { modifyMemoryEntities } from "@/db";
import { CreateEntityDTO } from "../dtos";

import { Elysia } from "elysia";

import type { ILightEntity, ISensor, ISwitch } from "@/types/db";

export default new Elysia().post(
  "Create",
  async ({ body: { type, client_id, light_body, sensor_body, switch_body, friendly_name } }) => {
    try {
      switch (type) {
        case "ligth":
          const ligth: ILightEntity = {
            brightness: light_body ? parseInt(light_body.brightness.toString() ?? "") : 0,
            last_reported: new Date().toISOString(),
            entity_id: SecureNanoID.generate(),
            state: light_body?.state ?? "off",
            type: "ligth",
            friendly_name,
            client_id,
          };
          modifyMemoryEntities([ligth], "Add");
          break;
        case "sensor":
          const sensor: ISensor = {
            unit_of_measurement: sensor_body?.unit_of_measurement ?? "",
            last_reported: new Date().toISOString(),
            entity_id: SecureNanoID.generate(),
            type: "sensor",
            friendly_name,
            client_id,
          };

          modifyMemoryEntities([sensor], "Add");
          break;
        case "switch":
          const switch_data: ISwitch = {
            state: switch_body ? switch_body.state : "unavailable",
            last_reported: new Date().toISOString(),
            entity_id: SecureNanoID.generate(),
            type: "switch",
            friendly_name,
            client_id,
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
