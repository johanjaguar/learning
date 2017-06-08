//variables con los plugins que usaremos
var gulp = require('gulp');
var util = require('gulp-util');
var requireDir = require('require-dir');
requireDir('./gulp-tasks');

//tarea default-watch
gulp.task( 'default', function(){
	//accion que ejecuta y vigila el directorio con la tarea asociada
	gulp.watch('sources/scss/**/*.scss', ['sass','cssmin']);
	gulp.watch('sources/haml/**/*.haml', ['haml']);
	gulp.watch('sources/javascript/**/*.js', ['js']);
	gulp.watch(['sources/images/**/*.gif', 'sources/images/**/*.png', 'sources/images/**/*.jpg', 'sources/images/**/*.jpeg'], ['imagesmin']);
	}
);
