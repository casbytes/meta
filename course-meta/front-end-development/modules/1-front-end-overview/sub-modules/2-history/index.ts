import { v4 as uuid } from "uuid";
import { lessons } from "./lessons";
import { SubModule } from "../../../../../types";
export const history: SubModule = {
  title: "history",
  id: uuid(),
  checkpoint: false,
  lessons: [...lessons],
};
