import { v4 as uuid } from "uuid";
import { lessons } from "./lessons";
import { SubModule } from "../../../../../types";
export const webStandards: SubModule = {
  title: "web standards",
  id: uuid(),
  checkpoint: false,
  lessons: [...lessons],
};
