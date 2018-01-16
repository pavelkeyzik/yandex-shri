var gulp = require('gulp'),
    path = require('path'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    LessAutoprefix = require('less-plugin-autoprefix'),
    browserSync = require('browser-sync').create(),
    autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

gulp.task('less', function() {
    return gulp.src('./styles/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less({
            plugins: [ autoprefix ]
        }))
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./styles/'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['less'], function() {

    browserSync.init({
        server: './'
    });

    gulp.watch('./styles/**/*.less', ['less']);
    gulp.watch('*.html').on('change', browserSync.reload)

});

gulp.task('default', ['less']);