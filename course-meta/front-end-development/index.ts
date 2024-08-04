import { v4 as uuid } from "uuid";
import { modules } from "./modules";
import { Course } from "../types";

export const frontEndDevelopment: Course = {
  title: "front-end development",
  id: uuid(),
  published: false,
  testEnvironment: "browser",
  modules: [...modules],
};
