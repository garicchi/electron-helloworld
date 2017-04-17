/// <reference path="../typings/index.d.ts" />

import electron = require('electron');
import path = require('path');
import url = require('url');

const app = electron.app;
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

app.on('ready',function(){
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

exports.hello = function(){
  //メッセージボックスを表示
    electron.dialog.showMessageBox(mainWindow, {
      message: "hello,world!"
    });
};