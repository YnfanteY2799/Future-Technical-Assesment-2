import { t } from "elysia";

export const CreateEntityDTO = t.Object({});

export const CommonIDParamsDTO = t.Object({
  id: t.String({ minLength: 1 }),
});

export const UpdateEntityDTO = t.Object({});

export const GetAllQueryDTO = t.Object({});
