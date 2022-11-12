const {
    src,
    dest,
    parallel,
    series,
    watch,
} = require('gulp');

const cssnano = require('gulp-cssnano');
const changed = require('gulp-changed');
const browsersync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');
const minifyJS = require('gulp-uglify');

let clear = () => {
    return src('./build/*', {
        read: false,
    })
    .pipe(clean());
}

// css
let css = () => {
    const source = './src/assets/css/*';

    return src(source)
        .pipe(changed(source))
        .pipe(cssnano())
        .pipe(dest('./build/assets/css/'))
        .pipe(browsersync.stream());
}

// js
let js = () => {
    return src('./src/assets/js/*')
        .pipe(minifyJS())
        .pipe(dest('./build/assets/js/'))
        .pipe(browsersync.stream());
}

// optimize images
let img = () => {
    return src('./src/assets/images/**/*')
        .pipe(imagemin())
        .pipe(dest('./build/assets/images'));
}

// html

let html = () => {
    return src('./src/*.html')
        .pipe(dest('./build/'))
        .pipe(browsersync.stream());
}

// fonts

let fonts = () => {
    return src('./src/assets/fonts/**/*/*')
        .pipe(dest('./build/assets/fonts/'))
        .pipe(browsersync.stream());
}

// videos

let videos = () => {
    return src('./src/assets/videos/*')
        .pipe(dest('./build/assets/videos/'))
        .pipe(browsersync.stream());
}

// other files
let otherFiles = () => {
    return src('./src/assets/other-files/**/*')
        .pipe(dest('./build/assets/other-files/'))
        .pipe(browsersync.stream());
}

// watch files

let watchFiles = () => {
    watch('./src/assets/css/*', css);
    watch('./src/assets/js/*', js);
    watch('./src/*.html', html);
    watch('./src/assets/images/*', img);
    watch('./src/assets/fonts/**/*/*', fonts);
    watch('./src/assets/videos/*', videos);
    watch('./src/assets/other-files/**/*', otherFiles);
}

// browserSync

let browserSync = () => {
    browsersync.init({
        server: {
            baseDir: './build'
        },
        port: 3000
    });
}

exports.watch = parallel(watchFiles, browserSync);
exports.default = series(clear, parallel(html, css, js, img, fonts, videos, otherFiles));