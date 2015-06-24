'use strict';

module.exports = {
	watch: {
		options: {cwd: '<%= dirs.source %>'},
  		files: ['scripts/*.js','css/*.css'],
  		tasks: ['concurrent:test']
	}
}