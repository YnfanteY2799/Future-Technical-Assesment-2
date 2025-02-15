import { CommonIDParamsDTO, UpdateEntityDTO } from "../dtos";
import { BadRequestException } from "@/utils/error";
import { SecureNanoID } from "@/utils/functions";
import { modifyMemoryEntities } from "@/db";

import { Elysia } from "elysia";

import type { ILightEntity, ISensor, ISwitch } from "@/types/db";

export default new Elysia().put(
  "Update/:id",
  async ({ params: { id }, body: { type, light_body, sensor_body, switch_body, friendly_name, client_id } }) => {
    try {
      switch (type) {
        case "ligth":
          const ligth: ILightEntity = {
            brightness: light_body ? parseInt(light_body.brightness.toString() ?? "") : 0,
            last_reported: new Date().toISOString(),
            entity_id: SecureNanoID.generate(),
            state: light_body?.state ?? "off",
            type: "ligth",
            client_id,
          };

          if (friendly_name) ligth.friendly_name = friendly_name;

          modifyMemoryEntities([ligth], "Update", id);
          break;
        case "sensor":
          const sensor: ISensor = {
            unit_of_measurement: sensor_body?.unit_of_measurement ?? "",
            last_reported: new Date().toISOString(),
            entity_id: SecureNanoID.generate(),
            type: "sensor",
            client_id,
          };

          if (friendly_name) sensor.friendly_name = friendly_name;
          modifyMemoryEntities([sensor], "Update", id);
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
          if (friendly_name) switch_data.friendly_name = friendly_name;
          modifyMemoryEntities([switch_data], "Update", id);
          break;
        default:
          throw new BadRequestException("Not a valid type");
      }
    } catch (e) {
      console.error("Error on Update method : ", e);
      throw e;
    }
  },
  { params: CommonIDParamsDTO, body: UpdateEntityDTO }
);
