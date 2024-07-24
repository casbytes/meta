import { v4 as uuid } from "uuid";
import { subModules } from "./sub-modules";

export const introduction = {
  title: "front end overview",
  id: uuid(),
  published: false,
  subModules: [...subModules],
};
