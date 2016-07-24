import gulp from 'gulp';
import gulpif from 'gulp-if';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import watchify from 'watchify';
import babelify from 'babelify';
import browserify from 'browserify';
import notify from 'gulp-notify';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';

import config from './../gulpfile.babel';


gulp.task('browserify', function() {

    let b = browserify({
        entries: [config.browserify.src],
        cache: {}, // required for watchify
        packageCache: {}, // required for watchify
        fullPaths: !global.isProduction // required to be true only for watchify
    });

    if ( !global.isProduction ) {
        b = watchify(b);
        b.on('update', bundle);
    }


    const transforms = [
        { name: babelify, options: { presets: ['es2015', 'stage-1'] } }
    ];

    transforms.forEach(function(transform) {
        b.transform(transform.name, transform.options);
    });


    function bundle() {

        return b.bundle()
            .on('error', notify.onError('<%= error.message %>'))
            .pipe(source(config.browserify.bundleName))
            .pipe(buffer())
            .pipe(gulp.dest(config.browserify.dest))
            .pipe(gulpif(global.isProduction, uglify()))
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest(config.browserify.dest))
    }

    return bundle();
});
