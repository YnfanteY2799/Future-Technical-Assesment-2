import type { ILightEntity, ISensor, ISwitch } from "@/types/db";

export type MemoryEntity = Array<ILightEntity | ISensor | ISwitch>;
export type ModifyAction = "Add" | "Delete" | "Update";

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

export function modifyMemoryEntities(newData: MemoryEntity, action: ModifyAction, id?: string): MemoryEntity {
  switch (action) {
    case "Add":
      memoryEntities = [...memoryEntities, ...newData];
      break;
    case "Delete":
      memoryEntities = newData;
      break;
    case "Update":
      const entityIdx = memoryEntities.findIndex(({ entity_id }) => entity_id === id);
      memoryEntities[entityIdx] = newData[0];
      break;
    default:
      console.error("No Such Error");
      break;
  }
  return memoryEntities;
}
