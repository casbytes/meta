import { v4 as uuid } from "uuid";
import { lessons } from "./lessons";
export const introduction = {
  title: "introduction",
  id: uuid(),
  lessons: [...lessons],
};
