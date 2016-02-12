module.exports = {
	js: {
		files: [
			'model/**/*.js',
			'routes/**/*.js'
		],
		tasks: ['jshint:all']
	},
	express: {
		files: [
			'keystone.js',
			'public/js/lib/**/*.{js,json}'
		],
		tasks: ['jshint:server', 'concurrent:dev']
	},
	stylus: {
		files: ['public/styles/**/*.styl'],
		tasks: ['stylus']
	},
	livereload: {
		files: [
			'public/styles/**/*.css',
		],
		options: {
			livereload: true
		}
	}
};
