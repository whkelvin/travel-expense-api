"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
var express = require("express");
var travel_routes_1 = require("./travel-routes");
var router = express.Router();
router.use('/item', travel_routes_1.default);
exports.default = router;
