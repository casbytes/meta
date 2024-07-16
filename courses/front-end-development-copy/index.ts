import { v4 as uuid } from "uuid";
import { modules } from "./modules";

export const frontEndDevelopmentCopy = {
  title: "front-end development copy",
  id: uuid(),
  published: false,
  modules: [...modules],
};
