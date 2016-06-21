var babelify = require('babelify');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');

gulp.task('css', function () {
    return gulp.src('./src/css/**/*.scss')
        .pipe(sass({
            outputStyle: gutil.env.production ? 'compressed' : 'nested'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.stream());
});

gulp.task('js', function () {
    return browserify('./src/js/main.js', {debug: !gutil.env.production})
        .transform('babelify', {
            presets: ['es2015'],
            sourceRoot: './src/js/'
        })
        .bundle()
        .on('error', gutil.log)
        .pipe(source('main.js'))
        .pipe(gulp.dest('./dist/js/'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['css', 'js'], function () {
    browserSync.init({
        server: './dist/',
        open: false
    });

    gulp.watch('./src/css/**/*.scss', ['css']);
    gulp.watch('./src/js/**/*.js', ['js']);
    gulp.watch('./dist/**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['css', 'js']);
