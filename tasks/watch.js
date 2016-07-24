import gulp from 'gulp';

import config from './../gulpfile.babel';


gulp.task('watch', function() {

    gulp.watch(config.styles.src,  ['styles']);
    gulp.watch(config.browserify.src, ['lint']);
    
});