import { v4 as uuid } from "uuid";
import { Lesson } from "../../../../../types";
export const lessons: Lesson[] = [
  {
    title: "evolution of frontend technologies",
    id: uuid(),
  },
  {
    title: "milstones in frontend development",
    id: uuid(),
  },
];
