import { v4 as uuid } from "uuid";
import { lessons } from "./lessons";
import { SubModule } from "../../../../../types";
export const jobOpportunities: SubModule = {
  title: "job opportunities",
  id: uuid(),
  checkpoint: false,
  lessons: [...lessons],
};
