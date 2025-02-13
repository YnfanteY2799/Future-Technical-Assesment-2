import { type Static, t } from "elysia";

export const CreateEntityDTO = t.Object({
  client_id: t.String(),
  type: t.Enum({
    ligth: "ligth",
    sensor: "sensor",
    switch: "switch",
  }),
});

export type TCreateEntityDTO = Static<typeof CreateEntityDTO>;

export const CommonIDParamsDTO = t.Object({
  id: t.String({ minLength: 1 }),
});

export type TCommonIDParamsDTO = Static<typeof CommonIDParamsDTO>;

export const UpdateEntityDTO = t.Object({});

export type TUpdateEntityDTO = Static<typeof UpdateEntityDTO>;

export const GetAllQueryDTO = t.Object({});

export type TGetAllQueryDTO = Static<typeof GetAllQueryDTO>;
