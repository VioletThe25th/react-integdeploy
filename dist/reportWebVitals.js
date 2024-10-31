'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _webVitals = require('web-vitals');

var reportWebVitals = function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    (0, _webVitals.getCLS)(onPerfEntry);
    (0, _webVitals.getFID)(onPerfEntry);
    (0, _webVitals.getFCP)(onPerfEntry);
    (0, _webVitals.getLCP)(onPerfEntry);
    (0, _webVitals.getTTFB)(onPerfEntry);
  }
};

exports['default'] = reportWebVitals;
module.exports = exports['default'];