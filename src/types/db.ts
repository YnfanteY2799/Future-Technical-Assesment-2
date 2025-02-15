export interface IBaseEntity {
  friendly_name?: string;
  last_reported?: string;
  last_updated?: string;
  last_changed?: string;
  client_id: string;
  entity_id: string;
}

export interface ILightEntity extends IBaseEntity {
  state: "on" | "off";
  brightness: number;
  type: "ligth";
}

export interface ISensor extends IBaseEntity {
  unit_of_measurement: string | number;
  type: "sensor";
}

export interface ISwitch extends IBaseEntity {
  state: "on" | "off" | "unavailable";
  type: "switch";
}
