import { type Static, t } from "elysia";

export const enumType = t.Enum({ ligth: "ligth", sensor: "sensor", switch: "switch" });

const light_body = t.Object({ state: t.Enum({ on: "on", off: "off" }), brightness: t.Number({ minimum: 1 }) });

const sensor_body = t.Object({ unit_of_measurement: t.Optional(t.String()) });

const switch_body = t.Object({ state: t.Enum({ on: "on", off: "off", unavailable: "unavailable" }) });

export const CreateEntityDTO = t.Object({
  type: enumType,
  client_id: t.String(),
  friendly_name: t.String(),
  light_body: t.Optional(light_body),
  sensor_body: t.Optional(sensor_body),
  switch_body: t.Optional(switch_body),
});

export type TCreateEntityDTO = Static<typeof CreateEntityDTO>;

export const CommonIDParamsDTO = t.Object({ id: t.String({ minLength: 1 }) });

export type TCommonIDParamsDTO = Static<typeof CommonIDParamsDTO>;

export const UpdateEntityDTO = t.Object({
  type: enumType,
  client_id: t.String(),
});

export type TUpdateEntityDTO = Static<typeof UpdateEntityDTO>;

export const GetAllQueryDTO = t.Object({
  friendly_name: t.Optional(t.String({ minLength: 1 })),
  client_id: t.Optional(t.String({ minLength: 1 })),
  entity_id: t.Optional(t.String({ minLength: 1 })),
  size: t.Number({ default: 10 }),
  page: t.Number({ default: 1 }),
  type: t.Optional(enumType),
});

export type TGetAllQueryDTO = Static<typeof GetAllQueryDTO>;
