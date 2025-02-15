import type { ILightEntity, ISensor, ISwitch } from "@/types/db";

export const memoryEntities: Array<ILightEntity | ISensor | ISwitch> = [
  {
    type: "ligth",
    brightness: 100,
    state: "on",
    client_id: "1",
    entity_id: "1",
    friendly_name: "Luz de prueba",
    last_changed: new Date().toISOString(),
    last_reported: new Date().toISOString(),
    last_updated: new Date().toISOString(),
  },
];
