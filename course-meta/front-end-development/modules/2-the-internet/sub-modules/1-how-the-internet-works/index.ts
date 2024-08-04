import { v4 as uuid } from "uuid";
import { lessons } from "./lessons";
import { SubModule } from "../../../../../types";
export const howTheInternetWorks: SubModule = {
  title: "how the internet works",
  id: uuid(),
  checkpoint: false,
  lessons: [...lessons],
};
