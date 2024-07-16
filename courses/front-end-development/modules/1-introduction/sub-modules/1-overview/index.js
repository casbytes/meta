"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.overview = void 0;
const uuid_1 = require("uuid");
const lessons_1 = require("./lessons");
exports.overview = {
    title: "Overview",
    id: (0, uuid_1.v4)(),
    lessons: [...lessons_1.lessons],
};
