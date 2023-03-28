"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var constants_1 = require("./constants");
var index_1 = require("./routes/index");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', index_1.default);
app.listen(constants_1.PORT, function () {
    console.log("\u26A1\uFE0F[server]: Server is running on port ".concat(constants_1.PORT));
});
