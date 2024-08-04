import { v4 as uuid } from "uuid";
import { subModules } from "./sub-modules";
import { Module } from "../../../types";

export const overview: Module = {
  title: "front end overview",
  id: uuid(),
  checkpoint: false,
  subModules: [...subModules],
};
