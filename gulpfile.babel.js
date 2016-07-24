import gulp from 'gulp';
import requireDir from 'require-dir';
import runSequence from 'run-sequence';


const sourceDir = 'src/';
const buildDir = 'dist/';

export default {

    sourceDir,
    buildDir,

    styles: {
        src: sourceDir + 'sass/revealing-modal.scss',
        dest: buildDir + 'css',
    },

    browserify: {
        src: sourceDir + 'js/revealing-modal.js',
        dest: buildDir + 'js',
        bundleName: 'revealing-modal.js',
    },

};

const tasks = requireDir('./tasks');


gulp.task('dev', ['clean'], function(cb) {
    global.isProduction = false;
    runSequence(['styles', 'browserify'], 'watch', cb);
});

gulp.task('build', ['clean'], function(cb) {
    global.isProduction = true;
    runSequence(['styles', 'browserify'], cb);
});

gulp.task('default', ['dev']);