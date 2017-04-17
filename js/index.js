"use strict";
exports.__esModule = true;
/// <reference path="../typings/index.d.ts" />
var $ = require("jquery");
var electron = require("electron");
var main = electron.remote.require('./main');
(function () {
    $('#btn-test').click(function () {
        main.hello();
    });
})();
