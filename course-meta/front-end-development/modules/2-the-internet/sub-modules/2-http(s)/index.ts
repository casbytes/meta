import { v4 as uuid } from "uuid";
import { lessons } from "./lessons";
import { SubModule } from "../../../../../types";
export const https: SubModule = {
  title: "HTTP(s)",
  id: uuid(),
  checkpoint: false,
  lessons: [...lessons],
};
