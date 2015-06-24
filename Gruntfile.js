'use strict';

// Gruntfile.js
module.exports = function (grunt) {

    //loads the various task configuration files
    require('load-grunt-tasks')(grunt);

    // path to tasks and global variables
    var options = {
        // tasks pasth
        config : {
            src: "grunt/*.*"
        },
        pkg : grunt.file.readJSON('package.json'),
        // Global variables
        dirs : {
            source : 'src',
            release: 'dist'
        }
    };

    var configs = require( 'load-grunt-configs' )( grunt, options);

    grunt.initConfig( configs );

    grunt.registerTask('default', ['watcher']);
    grunt.registerTask('watcher', ['watch:watch']);
    grunt.registerTask('release', ['concurrent:test', 'clean:release', 'concurrent:release']);

    /*
    grunt.registerTask( 'default', ['styles', 'scripts', 'html', 'copy']);
    grunt.registerTask(  'server', ['browserSync', 'watch']);
    grunt.registerTask(  'styles', ['clean:css', 'less:compile', 'cmq:main', 'less:sourceMap', "autoprefixer"]);
    grunt.registerTask( 'scripts', ['jshint:beforeconcat', 'concat:main', 'concat:plugins', 'jshint:afterconcat']);
    grunt.registerTask(    'html', ['clean:pages', 'compile-handlebars:main', 'prettify']);
    grunt.registerTask(  'images', ['sprite', 'imagemin']);
    grunt.registerTask( 'sprites', ['sprite:icons']);
    grunt.registerTask(    'dist', ['default', 'cssmin', 'uglify:main', 'images']);
    */
};