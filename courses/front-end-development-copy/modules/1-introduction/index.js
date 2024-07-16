"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.introduction = void 0;
const uuid_1 = require("uuid");
const sub_modules_1 = require("./sub-modules");
exports.introduction = {
    title: "overview",
    id: (0, uuid_1.v4)(),
    published: false,
    subModules: [...sub_modules_1.subModules],
};
