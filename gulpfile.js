var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');

gulp.task('js', function() {
    gulp.src('src/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify().on('error', function(e) {
                console.log('Error compiling JavaScript:')
                console.log('\x07',e.message);
                return this.end();
            }))
        .pipe(gulp.dest('dist/js/'))
        .pipe(connect.reload());
});

gulp.task('scss', function() {
    gulp.src(['src/scss/**/*.scss', 'src/scss/**/*.css'])
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css/'))
        .pipe(connect.reload());
});

gulp.task('html', function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});

gulp.task('bower-files', function(){
    var fs = require('fs');
    bowerDir = 'bower_components';
    if (fs.existsSync(bowerDir)) {
      return gulp.src(mainBowerFiles())
      .pipe(concat('libs.js'))
      .pipe(gulp.dest('dist/js/'));
    }
});

gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/scss/*.scss', ['scss']);
    gulp.watch('src/index.html', ['html']);
});

gulp.task('server', function() {
    gulp.start('bower-files');
    gulp.start('js');
    gulp.start('scss');
    gulp.start('html');
    connect.server({
       root: 'dist',
       livereload: true
    });
    gulp.start('watch');
});

gulp.task('default', ['bower-files', 'js', 'scss', 'html']);
