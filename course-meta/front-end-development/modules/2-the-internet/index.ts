import { v4 as uuid } from "uuid";
import { Module } from "../../../types";
import { subModules } from "./sub-modules";

export const theInternet: Module = {
  title: "front end overview",
  id: uuid(),
  checkpoint: false,
  subModules: [...subModules],
};
