"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var travelController = require("../controllers/travel-controller");
var express = require("express");
var router = express.Router();
/* eslint-disable-next-line @typescript-eslint/no-misused-promises */
router.post('', travelController.postItem);
exports.default = router;
