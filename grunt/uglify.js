'use strict';

module.exports = {
  options: {
    banner: "/*!\n <%= pkg.description %>\n @author: <%= pkg.author %>\n @email: <%= pkg.email %>\n @url: <%= pkg.homepage %>\n @version: <%= pkg.version %>\n*/\n"
  },
  main: {
    files: {
      "<%= dirs.release %>/scripts/ghostBuster.min.js": [
      "<%= dirs.source %>/scripts/ghostBuster.js"
      ]
    }
  }
};