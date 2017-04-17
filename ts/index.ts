/// <reference path="../typings/index.d.ts" />
import $ = require('jquery');
import electron = require('electron');

const main = electron.remote.require('./main');

(function(){
    $('#btn-test').click(function(){
        main.hello();
    });
})();
