"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = void 0;
var dotenv = require("dotenv");
dotenv.config();
exports.PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8000;
