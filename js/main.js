/// <reference path="../typings/index.d.ts" />
"use strict";
exports.__esModule = true;
var electron = require("electron");
var path = require("path");
var url = require("url");
var app = electron.app;
var mainWindow = null;
function createWindow() {
    mainWindow = new electron.BrowserWindow({ width: 800, height: 600 });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '../index.html'),
        protocol: 'file:',
        slashes: true
    }));
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}
app.on('ready', function () {
    createWindow();
});
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
exports.hello = function () {
    //メッセージボックスを表示
    electron.dialog.showMessageBox(mainWindow, {
        message: "hello,world!"
    });
};
