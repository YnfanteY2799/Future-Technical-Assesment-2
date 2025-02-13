import { useErrorMiddleware, useSuccessResponseMiddleware } from "@/middlewares/responses.ts";
import entities from "./entities/index.ts";

import { Elysia } from "elysia";

export const routes = new Elysia({ prefix: "api" }).use(useSuccessResponseMiddleware).use(useErrorMiddleware).use(entities);
