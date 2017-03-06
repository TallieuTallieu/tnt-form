"use strict";

const gulp = require( 'gulp' );

require( './gulp/javascript.js');

gulp.task( 'default', [ 'javascript' ] );