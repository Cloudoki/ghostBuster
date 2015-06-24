'use strict';

/* Balance processes */
module.exports = {
	release: ['cssmin', 'copy:release', 'uglify'],
	test: ['jshint']
}