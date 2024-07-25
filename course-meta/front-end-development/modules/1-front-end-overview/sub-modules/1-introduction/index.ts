import { v4 as uuid } from "uuid";
import { lessons } from "./lessons";
import { SubModule } from "../../../../../types";
export const introduction: SubModule = {
  title: "introduction",
  id: uuid(),
  gradingMethod: "MANUAL",
  lessons: [...lessons],
};
