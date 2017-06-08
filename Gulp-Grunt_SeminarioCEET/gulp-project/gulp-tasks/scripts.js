var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

//tarea de js concat and uglify
gulp.task('js', function(){
  return gulp.src(['sources/javascript/**/*.js'])
    .pipe(concat('final.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(rename('final.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});
