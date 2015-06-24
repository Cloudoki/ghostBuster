'use strict';

module.exports = {
  options: {
    node: true
  },
  beforeconcat: [
    "Gruntfile.js",
    "<%= dirs.source %>/scripts/*.js"
  ],
  afterconcat: [
    "Gruntfile.js",
    "<%= dirs.source %>/scripts/*.js"
  ]
};