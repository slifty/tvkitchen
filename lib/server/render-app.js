'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../shared/config');

var renderApp = function renderApp(title) {
  return '<!doctype html>\n<html>\n  <head>\n    <title>' + title + '</title>\n    <link rel="stylesheet" href="' + _config.STATIC_PATH + '/css/style.css">\n  </head>\n  <body>\n    <h1>' + title + '</h1>\n  </body>\n</html>\n';
};

exports.default = renderApp;