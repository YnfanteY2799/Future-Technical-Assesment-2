import { type Static, t } from "elysia";

export const CreateEntityDTO = t.Object({
  type: t.Enum({ ligth: "ligth", sensor: "sensor", switch: "switch" }),
  client_id: t.String(),
  
});

export type TCreateEntityDTO = Static<typeof CreateEntityDTO>;

export const CommonIDParamsDTO = t.Object({
  id: t.String({ minLength: 1 }),
});

export type TCommonIDParamsDTO = Static<typeof CommonIDParamsDTO>;

export const UpdateEntityDTO = t.Object({
  type: t.Enum({ ligth: "ligth", sensor: "sensor", switch: "switch" }),
  client_id: t.String(),
});

export type TUpdateEntityDTO = Static<typeof UpdateEntityDTO>;

export const GetAllQueryDTO = t.Object({});

export type TGetAllQueryDTO = Static<typeof GetAllQueryDTO>;
