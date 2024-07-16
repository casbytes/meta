"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.frontEndDevelopment = void 0;
const uuid_1 = require("uuid");
const modules_1 = require("./modules");
exports.frontEndDevelopment = {
    title: "front-end development",
    id: (0, uuid_1.v4)(),
    published: false,
    modules: [...modules_1.modules],
};
