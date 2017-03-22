"use strict";

const gulp  = require( 'gulp' ),
	browserify = require( 'browserify' ),
	del = require( 'del' ),
	source = require( 'vinyl-source-stream' ),
	buffer =  require( 'vinyl-buffer' )
;

gulp.task( 'javascript', function() {

	console.log( 'Start checking! Good luck.' );

	del( [ 'build/js' ] );

	return browserify( 'src/app.js' )
		.transform( 'babelify', { presets: ['es2015'] } )
		.bundle()
		.pipe( source( 'bundle.js' ) )
		.pipe( gulp.dest( 'build/js' ) )
		.pipe( buffer() )
	;
} );