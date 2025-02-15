import type { ILightEntity, ISensor, ISwitch } from "@/types/db";

export type MemoryEntity = Array<ILightEntity | ISensor | ISwitch>;
export type ModifyAction = "Add" | "Delete";

let memoryEntities: MemoryEntity = [
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

export function getMemoryEntities(): MemoryEntity {
  return memoryEntities;
}

export function modifyMemoryEntities(newData: MemoryEntity, action: ModifyAction): MemoryEntity {
  switch (action) {
    case "Add":
      memoryEntities = [...memoryEntities, ...newData];
      break;
    case "Delete":
      memoryEntities = newData;
      break;
    default:
      console.error("No Such Error");
      break;
  }
  return memoryEntities;
}
