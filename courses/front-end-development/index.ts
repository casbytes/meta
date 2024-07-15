import { v4 as uuid } from "uuid";
import { modules } from "./modules";

const frontEndDevelopment = {
  title: "front-end development",
  id: uuid(),
  published: false,
  modules: [...modules],
};
export default frontEndDevelopment;
