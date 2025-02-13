import { GetAllQueryDTO } from "../dtos";
import { Elysia } from "elysia";

export default new Elysia().get("Get", async () => {}, { query: GetAllQueryDTO });
