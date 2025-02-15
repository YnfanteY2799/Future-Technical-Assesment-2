import { type Static, t } from "elysia";

export const enumType = t.Enum({ ligth: "ligth", sensor: "sensor", switch: "switch" });

export const CreateEntityDTO = t.Object({
  enumType,
  client_id: t.String(),
});

export type TCreateEntityDTO = Static<typeof CreateEntityDTO>;

export const CommonIDParamsDTO = t.Object({
  id: t.String({ minLength: 1 }),
});

export type TCommonIDParamsDTO = Static<typeof CommonIDParamsDTO>;

export const UpdateEntityDTO = t.Object({
  enumType,
  client_id: t.String(),
});

export type TUpdateEntityDTO = Static<typeof UpdateEntityDTO>;

export const GetAllQueryDTO = t.Object({
  friendly_name: t.Optional(t.String({ minLength: 1 })),
  client_id: t.Optional(t.String({ minLength: 1 })),
  entity_id: t.Optional(t.String({ minLength: 1 })),
  size: t.Number({ default: 10 }),
  page: t.Number({ default: 1 }),
  enumType,
});

export type TGetAllQueryDTO = Static<typeof GetAllQueryDTO>;
