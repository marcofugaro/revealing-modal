import gulp from 'gulp';
import gulpif from 'gulp-if';
import sass from 'gulp-sass';
import notify from 'gulp-notify';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
import cssmin from 'gulp-cssmin';

import config from './../gulpfile.babel';


gulp.task('styles', function () {

    return gulp.src(config.styles.src)
        .pipe(sass({ 
            outputStyle: 'expanded'
        }))
        .on('error', notify.onError('<%= error.message %>'))
        .pipe(autoprefixer({ browsers: ['last 2 versions', '> 1%', 'ie 9'] }))
        .pipe(gulp.dest(config.styles.dest))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(config.styles.dest))
});