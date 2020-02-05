"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
cucumber_1.BeforeAll(function () {
    console.log('Hook is run!');
    cucumber_1.setDefaultTimeout(60000);
});
