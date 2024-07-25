import { v4 as uuid } from "uuid";
import { subModules } from "./sub-modules";
import { Module } from "../../../types";

export const introduction: Module = {
  title: "front end overview",
  id: uuid(),
  gradingMethod: "MANUAL",
  subModules: [...subModules],
};
