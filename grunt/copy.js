'use strict';

module.exports = {
  release: {
    files: [
      {
        expand: true,
        cwd: '<%= dirs.source %>',
        src: [
          'scripts/*.js',
          'css/*.css'
        ],
        dest: '<%= dirs.release %>',
        filter: 'isFile'
      }
    ,
      {
        expand: true,
        cwd: '<%= dirs.source %>',
        src: [
          'vendor/lunr.js/lunr.min.js'
        ],
        dest: '<%= dirs.release %>',
        filter: 'isFile'
      }
    ]
  }
};